#!/usr/bin/env node
/**
 * add-cover.mjs — 全自动封面图工具
 *
 * 用法A（自动提取）：node add-cover.mjs <文章URL> <文章id>
 * 用法B（手动指定图片URL）：node add-cover.mjs <图片URL> <文章id>
 *
 * 示例：
 *   node add-cover.mjs "https://mp.weixin.qq.com/s/NANFsozDNYvKARcRbTtgSQ" ai-scenarios
 *   node add-cover.mjs "https://mmbiz.qpic.cn/sz_mmbiz_jpg/xxx.jpg" deodao-ai-stage
 *
 * 流程：提取封面（或直接用图片URL）→ 下载到 images/<id>.jpg → 更新 data.js → git commit & push
 */

import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import { fileURLToPath } from "url";

const __dir = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");

// ── CLI args ──────────────────────────────────────────────────
const [firstArg, articleId] = process.argv.slice(2);
if (!firstArg || !articleId) {
  console.error("用法A: node add-cover.mjs <文章URL> <文章id>");
  console.error("用法B: node add-cover.mjs <图片URL> <文章id>  （封面提取失败时直接传图片地址）");
  console.error('示例: node add-cover.mjs "https://mp.weixin.qq.com/s/xxx" ai-scenarios');
  process.exit(1);
}

// 判断第一个参数是图片URL还是文章URL
const isDirectImageUrl = /\.(jpg|jpeg|png|webp|gif)(\?|$)/i.test(firstArg)
  || firstArg.includes("mmbiz.qpic.cn")
  || firstArg.includes("mmbiz.qlogo.cn");
const articleUrl = isDirectImageUrl ? null : firstArg;
const manualImgUrl = isDirectImageUrl ? firstArg : null;

// ── 1. 提取封面图 URL ─────────────────────────────────────────
async function extractCover(url) {
  let imgUrl = null;

  // Strategy 1: Microlink API
  try {
    console.log("  [1/3] 尝试 Microlink API...");
    const res = await fetch(
      `https://api.microlink.io/?url=${encodeURIComponent(url)}&meta=true`,
      { signal: AbortSignal.timeout(20000) }
    );
    if (res.ok) {
      const json = await res.json();
      if (json.status === "success") {
        imgUrl = json.data?.image?.url || null;
      }
    }
  } catch (e) {
    console.log(`    Microlink 失败: ${e.message}`);
  }

  // Strategy 2: jsonlink.io
  if (!imgUrl) {
    try {
      console.log("  [2/3] 尝试 jsonlink.io...");
      const res = await fetch(
        `https://jsonlink.io/api/extract?url=${encodeURIComponent(url)}`,
        { signal: AbortSignal.timeout(15000) }
      );
      if (res.ok) {
        const json = await res.json();
        imgUrl = json.images?.[0] || json.image || null;
      }
    } catch (e) {
      console.log(`    jsonlink 失败: ${e.message}`);
    }
  }

  // Strategy 3: allorigins HTML parse
  if (!imgUrl) {
    try {
      console.log("  [3/3] 尝试 allorigins HTML 解析...");
      const res = await fetch(
        `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`,
        { signal: AbortSignal.timeout(15000) }
      );
      if (res.ok) {
        const json = await res.json();
        const html = json.contents || "";
        const m =
          html.match(/<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i) ||
          html.match(/<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:image["']/i);
        if (m) imgUrl = m[1].replace(/&amp;/g, "&");
      }
    } catch (e) {
      console.log(`    allorigins 失败: ${e.message}`);
    }
  }

  return imgUrl;
}

// ── 2. 下载图片到 images/<id>.jpg ────────────────────────────
async function downloadImage(imgUrl, id) {
  const imagesDir = path.join(__dir, "images");
  if (!fs.existsSync(imagesDir)) fs.mkdirSync(imagesDir);

  const localPath = path.join(imagesDir, `${id}.jpg`);
  const isWechat = imgUrl.includes("mmbiz.qpic.cn") || imgUrl.includes("mmbiz.qlogo.cn");

  // 代理优先级：wsrv.nl → allorigins → 直连
  const candidates = isWechat
    ? [
        `https://wsrv.nl/?url=${encodeURIComponent(imgUrl)}&output=jpg`,
        `https://images.weserv.nl/?url=${encodeURIComponent(imgUrl)}&output=jpg`,
        `https://api.allorigins.win/raw?url=${encodeURIComponent(imgUrl)}`,
      ]
    : [imgUrl];

  let lastErr;
  for (const downloadUrl of candidates) {
    const label = downloadUrl.includes("wsrv.nl") ? "wsrv.nl 代理"
      : downloadUrl.includes("weserv") ? "weserv 代理"
      : downloadUrl.includes("allorigins") ? "allorigins 代理"
      : "直连";
    console.log(`  [${label}] 下载中...`);
    try {
      const res = await fetch(downloadUrl, { signal: AbortSignal.timeout(30000) });
      if (!res.ok) { lastErr = new Error(`状态码 ${res.status}`); continue; }
      const buffer = await res.arrayBuffer();
      if (buffer.byteLength < 2000) { lastErr = new Error("返回数据太小，可能不是图片"); continue; }
      fs.writeFileSync(localPath, Buffer.from(buffer));
      console.log(`  已保存: images/${id}.jpg (${Math.round(buffer.byteLength / 1024)} KB)`);
      return `https://jimmyluo.pages.dev/images/${id}.jpg`;
    } catch (e) {
      lastErr = e;
      console.log(`    失败: ${e.message}`);
    }
  }
  throw new Error(`所有下载方式均失败: ${lastErr?.message}`);
}

// ── 3. 更新 data.js ──────────────────────────────────────────
function updateDataJs(id, coverPath) {
  const dataFile = path.join(__dir, "data.js");
  let src = fs.readFileSync(dataFile, "utf8");

  // 检查文章 id 是否存在
  if (!src.includes(`id: "${id}"`)) {
    throw new Error(`data.js 中找不到 id 为 "${id}" 的文章，请检查 id 是否正确`);
  }

  // 提取该文章的块（从 id:"xxx" 到下一个顶层 { 之前），避免跨文章边界
  const articleBlockRe = new RegExp(
    `(\\{[^{]*id:\\s*"${id}"[\\s\\S]*?)(?=\\s*,?\\s*\\{\\s*id:|\\];)`,
    "m"
  );
  const blockMatch = src.match(articleBlockRe);
  if (!blockMatch) throw new Error(`data.js 中找不到 id 为 "${id}" 的文章块`);

  const originalBlock = blockMatch[1];
  let newBlock = originalBlock;

  if (/cover:\s*"[^"]*"/.test(originalBlock)) {
    // 已有 cover，替换
    newBlock = originalBlock.replace(/cover:\s*"[^"]*",?/, `cover: "${coverPath}",`);
    console.log(`  已替换 data.js 中 "${id}" 的 cover 字段`);
  } else {
    // 在 url: 行后插入
    if (/url:\s*"[^"]*",/.test(originalBlock)) {
      newBlock = originalBlock.replace(/(url:\s*"[^"]*",)/, `$1\n    cover: "${coverPath}",`);
      console.log(`  已在 data.js 中 "${id}" 的 url 行后插入 cover 字段`);
    } else {
      // 兜底：在 date: 行后插入
      newBlock = originalBlock.replace(/(date:\s*"[^"]*",)/, `$1\n    cover: "${coverPath}",`);
      console.log(`  已在 data.js 中 "${id}" 的 date 行后插入 cover 字段`);
    }
  }

  src = src.replace(originalBlock, newBlock);

  fs.writeFileSync(dataFile, src, "utf8");
}

// ── 4. git commit & push ─────────────────────────────────────
function gitPush(id, coverPath) {
  const cwd = __dir;
  const run = (cmd) => execSync(cmd, { cwd, stdio: "pipe" }).toString().trim();

  run(`git add images/${id}.jpg data.js`);
  run(
    `git commit -m "Add cover for ${id}: ${coverPath}"`
  );
  console.log("  已 commit");

  run("git push");
  console.log("  已 push → Cloudflare Pages 将自动重新部署");
}

// ── main ──────────────────────────────────────────────────────
(async () => {
  console.log(`\n封面自动化工具`);
  if (manualImgUrl) {
    console.log(`  模式     : 手动图片URL`);
    console.log(`  图片 URL : ${manualImgUrl.substring(0, 80)}...`);
  } else {
    console.log(`  文章 URL : ${articleUrl}`);
  }
  console.log(`  文章 id  : ${articleId}\n`);

  // Step 1
  let imgUrl;
  if (manualImgUrl) {
    imgUrl = manualImgUrl;
    console.log("步骤 1/4  跳过提取（使用手动指定的图片 URL）✓\n");
  } else {
    console.log("步骤 1/4  提取封面图 URL...");
    imgUrl = await extractCover(articleUrl);
    if (!imgUrl) {
      console.error("\n✗ 未能提取到封面图。");
      console.error("  手动方案：在浏览器打开文章 → 右键封面图 → 「复制图片地址」→ 运行：");
      console.error(`  node add-cover.mjs "https://mmbiz.qpic.cn/..." ${articleId}`);
      process.exit(1);
    }
    console.log(`  封面 URL : ${imgUrl.substring(0, 80)}...\n`);
  }

  // Step 2
  console.log("步骤 2/4  下载图片...");
  const coverPath = await downloadImage(imgUrl, articleId);
  console.log();

  // Step 3
  console.log("步骤 3/4  更新 data.js...");
  updateDataJs(articleId, coverPath);
  console.log();

  // Step 4
  console.log("步骤 4/4  git commit & push...");
  try {
    gitPush(articleId, coverPath);
  } catch (e) {
    console.error(`  git 操作失败: ${e.message}`);
    console.error("  图片和 data.js 已更新，请手动执行：");
    console.error(`    git add images/${articleId}.jpg data.js`);
    console.error(`    git commit -m "Add cover for ${articleId}"`);
    console.error("    git push");
    process.exit(1);
  }

  console.log(`\n✓ 完成！封面图已上线。`);
  console.log(`  本地预览刷新即可看到；Cloudflare Pages 部署完成后线上也会显示。`);
  console.log(`  图片路径: ${coverPath}\n`);
})();
