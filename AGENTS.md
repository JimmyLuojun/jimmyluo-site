# Project Instructions

> Personal website / portfolio

## Prerequisites

- Python 3（用于本地预览：`python3 -m http.server 8080`）
- Node.js（用于 `add-cover.mjs` 脚本）

## Test

本项目无自动化测试，用 `python3 -m http.server 8080` 在浏览器目测验证，确认 `http://localhost:8080` 效果正常即可。

## Guidelines

### 强制规则

1. **git push 前必须验证**：完成任何改动后，先提示用户运行 `python3 -m http.server 8080`，在 `http://localhost:8080` 确认效果，等用户明确说"可以"后再执行 git push。AI 不得自行判断并推送。
2. **解决方案优先简单直接**：能用 Edit/Write 直接改文件的，不写脚本。复杂脚本容易出 bug（曾有 sort-data.mjs 把模板误混入数组的事故）。
3. **所有规则只写 `AGENTS.md`**，不改 `CLAUDE.md` / `GEMINI.md`，它们只做 import。

---

### 添加新文章的工作流

**标准流程（封面可自动提取时）：**
```bash
node add-cover.mjs "https://mp.weixin.qq.com/s/xxx" <文章id>
```
脚本自动完成：提取封面 → 下载到 `images/<id>.jpg` → 更新 data.js → git commit & push。

**微信文章封面被屏蔽时（手动指定图片）：**
```bash
node add-cover.mjs "https://mmbiz.qpic.cn/..." <文章id>
```
在浏览器打开文章 → 右键封面图 → 「复制图片地址」→ 作为第一个参数传入。

**在 data.js 中新增文章条目时注意：**
- 加 `featured: true` + `cover: "https://jimmyluo.pages.dev/images/<id>.jpg"` 才会出现在精选区
- 数组按日期**降序**排列（最新文章在最前）
- add-cover.mjs 已内置 git push，运行后不需要再手动推

---

### 技术关键点

- **微信 CDN 防盗链**：mmbiz.qpic.cn 图片直接下载会被屏蔽，必须通过 wsrv.nl 代理：`https://wsrv.nl/?url=<编码后的图片URL>&output=jpg`
- **封面图用绝对 URL**：`https://jimmyluo.pages.dev/images/<id>.jpg`，不用相对路径（相对路径在 Claude Design 等沙盒环境中无法加载）
- **部署**：git push 到 main 分支后，Cloudflare Pages 自动部署，无需手动操作
- **静态站无构建步骤**：直接编辑 HTML/JS/CSS，`python3 -m http.server 8080` 即可本地预览

## Shared Memory

**Always write new instructions, rules, and memory to `AGENTS.md` only.**

Never modify `CLAUDE.md` or `GEMINI.md` directly - they only import `AGENTS.md`.
This ensures Claude Code, Codex CLI, and Gemini CLI share the same context consistently.

## Project Structure

- `.claude/agents/` - Custom subagents for specialized tasks
- `.claude/skills/` - Claude Code skills (slash commands)
- `.claude/rules/` - Modular rules auto-loaded into context
- `.codex/skills/` - Codex CLI skills
- `.codex/prompts/` - Codex CLI custom slash commands
- `.gemini/skills/` - Gemini CLI skills
- `.gemini/commands/` - Gemini CLI custom slash commands (TOML)
- `.mcp.json` - MCP server configuration
