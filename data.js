/* ============================================================
   data.js — bilingual content model + UI strings
   Exposes window.SITE_DATA, window.UI, window.PLATFORMS, window.TOPICS
   ============================================================ */

// Platform identity (badge color + labels)
window.PLATFORMS = {
  wechat:  { zh: "公众号",   en: "WeChat",   color: "#3fc463" },
  weibo:   { zh: "微博",     en: "Weibo",    color: "#ff8a3d" },
  channel: { zh: "视频号",   en: "Channels", color: "#ff5a7a" },
  longform:{ zh: "深度长文", en: "Essay",    color: "#6f8cff" },
  photo:   { zh: "图集",     en: "Gallery",  color: "#a172ff" },
};

// Content type filters
window.TYPES = [
  { id: "all",     zh: "全部",   en: "All" },
  { id: "article", zh: "文章",   en: "Articles" },
  { id: "video",   zh: "视频",   en: "Video" },
  { id: "photo",   zh: "摄影",   en: "Photography" },
];

window.UI = {
  zh: {
    navWork: "作品", navTopics: "主题", navAbout: "关于",
    heroEyebrow: "AI / AIGC · 把 AI 用起来 · 中英双语",
    heroLine1: "不只看热闹，",
    heroGrad: "把 AI 真正用起来。",
    heroLede: "我是罗军（JimmyLuo）。这里记录我把 AI 与 AIGC 落地到真实工作与生活的实践——用它写工具、做创作、提效率，把“听说很强”变成“我亲手做到了”。",
    ctaRead: "开始阅读", ctaSubscribe: "订阅更新",
    statPieces: "篇实践", statReaders: "读者", statYears: "年创作",
    featTitle: "精选", featDesc: "最值得上手一试的内容",
    libTitle: "全部内容", libDesc: "按平台与形式归档",
    readMore: "阅读", watch: "观看", viewSet: "查看图集",
    minRead: "分钟", photos: "张",
    aboutTitle: "关于罗军", 
    aboutP1: "一个把 AI “用到底”的人。不满足于和模型聊天，而是用 AI 编程写出一个个真能用的小工具：自动生成开发信、一键排版公众号、甚至给孩子做一款学习游戏。",
    aboutP2: "我相信 AI 的价值不在“知道”，而在“用起来”。这里的每一篇，都是可以被你拿去复现的真实实践，且中英双语。",
    topicsTitle: "我写什么",
    origin: "在原平台查看",
    bylineBy: "罗军", emptyMsg: "该分类暂无内容",
    nowLabel: "正在",
    viewGrid: "卡片", viewList: "索引",
    currently: [
      ["最新实践", "用 AI 编程做了个开发信工具"],
      ["效率提升", "4 小时 → 30 分钟"],
      ["正在写", "AIGC 创作工作流系列"],
      ["全站内容", "中英双语"],
      ["本月阅读", "12,400+"],
      ["坐标", "深圳 · 南山"],
    ],
    footTag: "把 AI 与 AIGC 真正用起来，改善生活与工作。文章 / 视频 / 实践，中英双语，持续更新。",
    rights: "保留所有权利",
    by: "作者", published: "发布于",
  },
  en: {
    navWork: "Work", navTopics: "Topics", navAbout: "About",
    heroEyebrow: "AI / AIGC · Put AI to work · Bilingual",
    heroLine1: "Don't just watch the hype —",
    heroGrad: "actually put AI to work.",
    heroLede: "I'm Luo Jun (JimmyLuo). A record of how I bring AI and AIGC into real work and everyday life — building tools, making things, saving hours — turning \"it sounds powerful\" into \"I did it myself.\"",
    ctaRead: "Start reading", ctaSubscribe: "Subscribe",
    statPieces: "hands-on", statReaders: "readers", statYears: "yrs writing",
    featTitle: "Featured", featDesc: "The pieces most worth trying yourself",
    libTitle: "Everything", libDesc: "Archived by platform & form",
    readMore: "Read", watch: "Watch", viewSet: "View set",
    minRead: "min", photos: "photos",
    aboutTitle: "About Luo Jun",
    aboutP1: "Someone who actually uses AI — all the way. Not content to just chat with a model, I use AI coding to build small tools that genuinely work: auto-generating sales outreach, formatting WeChat articles in one click, even building a learning game for a kid.",
    aboutP2: "I believe the value of AI isn't in knowing about it, but in using it. Every piece here is a real, reproducible practice you can take and try — fully bilingual.",
    topicsTitle: "What I write about",
    origin: "View on original platform",
    bylineBy: "Luo Jun", emptyMsg: "Nothing here yet in this category",
    nowLabel: "Currently",
    viewGrid: "Cards", viewList: "Index",
    currently: [
      ["Latest build", "an AI-coded outreach tool"],
      ["Time saved", "4 hours → 30 minutes"],
      ["Writing", "an AIGC creative-workflow series"],
      ["Everything here", "bilingual"],
      ["Read this month", "12,400+"],
      ["Based in", "Shenzhen · Nanshan"],
    ],
    footTag: "Actually putting AI & AIGC to work — to improve life and work. Essays, video & practice, bilingual, always.",
    rights: "All rights reserved",
    by: "By", published: "Published",
  },
};

window.TOPICS = [
  { icon: "◇", zh: ["AI 实战", "把 AI 接进真实的工作与生活流程"], en: ["AI in Practice", "Bringing AI into real work & life"] },
  { icon: "◈", zh: ["AIGC 创作", "文字、图像、音视频的生成与排版"], en: ["AIGC Creation", "Generating text, images, audio & video"] },
  { icon: "△", zh: ["AI 编程", "不写代码，也能造出自己的小工具"], en: ["AI Coding", "Build your own tools, no code needed"] },
];

// helper to make body paragraphs bilingual
// ============================================================
//  ★★★  如何添加你自己的内容 / How to add your own content  ★★★
// ------------------------------------------------------------
//  复制下面这个模板，粘到 window.SITE_DATA = [ 后面，填空即可。
//  微信公众号没有自动同步：把每篇文章登记一条，url 填公众号原文链接，
//  读者点开卡片看双语摘要，再点「在原平台查看」跳转到原文。
//
//  封面图：用「封面提取工具.html」粘贴文章链接即可自动解析 og:image。
//  微信 CDN（mmbiz.qpic.cn）有防盗链，建议下载后放到 images/ 目录引用。
//  没有封面就删掉 cover 这一行，会自动显示占位图（不会白屏）。
//
//  把这段模板复制进数组（注意结尾的逗号）：
/*
  {
    id: "my-first-article",                 // 唯一英文 id，随意起
    type: "article",                        // article 文章 / video 视频 / photo 图集
    platform: "wechat",                     // wechat 公众号 / weibo 微博 / channel 视频号 / longform 长文 / photo 图集
    featured: true,                         // true=放进顶部「精选」；不想精选就删掉这行
    date: "2026-06-01",                     // 发布日期 年-月-日
    read: 8,                                // 文章用：阅读分钟数  (视频改用 length:"6:24"，图集改用 count:18)
    url: "https://mp.weixin.qq.com/s/你的文章链接",   // ← 公众号原文链接
    cover: "images/my-first-article.jpg",   // ← 封面图路径 / URL（没有就删掉这一行）
    zh: {
      title: "中文标题",
      excerpt: "卡片上显示的一句话摘要。",
      sub: "阅读页副标题，再补一句。",
      tags: ["标签一", "标签二"],
      body: [
        { t: "lead", c: "开头第一段（会有首字下沉）。" },
        { t: "p",    c: "正文段落。可以复制多行。" },
        { t: "h",    c: "小标题" },
        { t: "q",    c: "一句想强调的话 / 金句。" },
      ],
    },
    en: {
      title: "English Title",
      excerpt: "One-line summary shown on the card.",
      sub: "Reader subtitle, one more line.",
      tags: ["Tag One", "Tag Two"],
      body: [
        { t: "lead", c: "Opening paragraph (gets a drop cap)." },
        { t: "p",    c: "Body paragraph. Duplicate for more." },
        { t: "h",    c: "Subheading" },
        { t: "q",    c: "A line worth pulling out." },
      ],
    },
  },
*/
// ============================================================

window.SITE_DATA = [
  {
    id: "deodao-ai-stage", type: "article", platform: "wechat",
    date: "2025-07-12", read: 8,
    url: "https://mp.weixin.qq.com/s/lG6keg0Z4oFmJGiR1klRjg",
    zh: {
      title: "我与罗振宇同台：一个普通人在 AI 落地大会的真实感悟",
      excerpt: "第一次与神交十年的罗振宇老师同台，带着「何德何能」的念头上台，下台时找到了答案——也许我们真的是一类人。",
      sub: "勇敢行动 × 用好工具 × 聚焦挑战，AI 成长飞轮的由来。",
      tags: ["AI 落地", "成长", "得到"],
      body: [
        { t: "lead", c: "7月12日，站在AI落地大会的聚光灯下，我第一次与神交十年的罗振宇老师和快刀青衣老师同台。带着「何德何能」的念头上台，下台时，我有了答案。" },
        { t: "p", c: "台上六位分享者，没有一个是「天才选手」。但我们有共同点：在关键时刻选择了动手、尝试、分享、坚持。勇敢、务实、乐于分享、愿意相信运气——正是这种行动信仰，让我们走在了彼此可见的轨道上。" },
        { t: "h", c: "AI 成长飞轮" },
        { t: "p", c: "把这段经历抽象下来，可以归纳为三个要素：勇敢行动——遇到问题先迈出0.1步，一行动就创新；用好工具——AI是可穿戴的超能力，人类进化的主战场早已从基因移到了工具；聚焦挑战——AI是扳手，拧紧的是你自己的螺丝，始终把精力放在解决自身真实问题上。" },
        { t: "q", c: "普通人的努力，在长期主义的复利下，会积累成奇迹。" },
        { t: "p", c: "所谓成功，不过是做好自己的事，等待随机事件来。我们一开始没想着获得这样的运气，只想着用好AI解决自己遇到的重要问题——最终不仅解决了问题，还碰上了意外的好运。" },
      ],
    },
    en: {
      title: "On Stage with Luo Zhenyu: What I Learned at an AI Summit",
      excerpt: "Standing on stage with someone I'd admired for ten years, I kept asking myself: 'What have I done to deserve this?' By the end, I had an answer.",
      sub: "Brave action × right tools × focused challenges — the AI growth flywheel.",
      tags: ["AI in Practice", "Growth", "Dedao"],
      body: [
        { t: "lead", c: "On July 12th, I shared a stage for the first time with Luo Zhenyu — someone I'd followed for ten years — at an AI application summit. I walked on asking 'who am I to be here?' I walked off with an answer." },
        { t: "p", c: "None of the six speakers were 'genius-track' people. But we shared something: at key moments, we all chose to act, try, share, and keep going. That action-first belief put us on paths where we could find each other." },
        { t: "h", c: "The AI Growth Flywheel" },
        { t: "p", c: "Three elements: brave action — when stuck, take even 0.1 steps forward; use good tools — AI is wearable superpowers, and human evolution has long since shifted from genes to tools; stay focused on your own challenges — AI is a wrench, and what you're tightening is your own bolts." },
        { t: "q", c: "Ordinary effort, compounded over time under long-termism, has a chance to become something extraordinary." },
        { t: "p", c: "Success is just doing your own work well and waiting for a random event to land. We never set out to get lucky — we just tried to use AI to solve real problems. The unexpected bonus came on its own." },
      ],
    },
  },
  {
    id: "ai-4-collab-modes", type: "article", platform: "wechat",
    date: "2026-06-07", read: 7,
    url: "https://mp.weixin.qq.com/s/NkY32W3pGNwGugW4jIrrLw",
    zh: {
      title: "从逗乐到无人值守：AI 协作 4 大模式，带你飞",
      excerpt: "你现在用 AI 的「姿势」，决定了你能飞多高。从瞎聊到躺平，AI 协作有四个段位——弄清楚自己在哪一级，才知道瓶颈在哪。",
      sub: "找准自己卡在哪里，从小步开始挪窝。",
      tags: ["AI 协作", "工作流", "效率"],
      body: [
        { t: "lead", c: "在AI的世界里，你不进化，就是拨号上网。咱们跟AI打交道，有几个「段位」——弄清楚自己在哪个段位，才能看懂自己为什么还在地面摩擦，以及怎么往上爬。" },
        { t: "h", c: "四个段位" },
        { t: "p", c: "模式一是「闲聊」，门槛最低，产出基本是空气；模式二是「指令驱动」，开始把AI当工具人，但手动复制粘贴的速度就是效率天花板；模式三是「工作流自动化」，让AI自己跑流程——50封开发信从一整个下午压缩到20分钟，就是这么来的；模式四是「全自动智能体」，只给目标让AI自行规划执行，但目前稳定性有限，围观为主。" },
        { t: "q", c: "积木再精美，也架不住你拼航空母舰。找准段位，从小步开始挪窝。" },
        { t: "p", c: "别妄想一口气变成「躺平大师」。先把常用指令攒成模板，再尝试搭个能帮你跑两步路的半自动流程。路上不顺很正常——每解决一个卡点，就往前挪一步。" },
      ],
    },
    en: {
      title: "From Chatting to Autopilot: 4 Modes of AI Collaboration",
      excerpt: "The way you use AI right now determines how high you can fly. There are four levels — figure out which one you're at, and you'll know exactly where the ceiling is.",
      sub: "Find where you're stuck, then take small steps forward.",
      tags: ["AI Collaboration", "Workflow", "Productivity"],
      body: [
        { t: "lead", c: "In the world of AI, if you don't evolve, you're on dial-up. There are four levels of AI collaboration — knowing which one you're at reveals both your bottleneck and your path forward." },
        { t: "h", c: "The Four Levels" },
        { t: "p", c: "Level 1 is casual chat — zero barrier, near-zero output. Level 2 is instruction-driven prompting — useful, but your copy-paste speed is the efficiency ceiling. Level 3 is workflow automation — let AI run full processes; that's how 50 outreach emails went from a full afternoon to 20 minutes. Level 4 is fully autonomous agents — give it a goal and let it run, though today's reliability means watching from the sidelines." },
        { t: "q", c: "Even the most elegant building blocks can't build an aircraft carrier. Find your level, then move forward one small step at a time." },
        { t: "p", c: "Don't try to leap straight to autopilot. Start by turning your most-used prompts into templates, then try building one small semi-automatic flow. Hitting walls is normal — every problem you solve is one step further." },
      ],
    },
  },
  {
    id: "ai-scenarios", type: "article", platform: "wechat", featured: true,
    date: "2026-06-01", read: 6,
    url: "https://mp.weixin.qq.com/s/NANFsozDNYvKARcRbTtgSQ",
    cover: "https://jimmyluo.pages.dev/images/deodao-ai-stage.jpg",
    zh: {
      title: "「缺场景」靠不靠谱？聊聊我的 AI 应用场景",
      excerpt: "有强烈 AI 焦虑的朋友，往往 AI 用得也很少。「缺场景」到底靠不靠谱？答案也许正相反。",
      sub: "从三个真实场景，聊聊为什么我从不缺 AI 的用武之地。",
      tags: ["AI", "AI 编程", "效率"],
      body: [
        { t: "lead", c: "如今 AI 技术一日千里，让很多人兴奋，也让更多人感到焦虑，担心被时代抛下。在与朋友交流中我发现一个有趣的现象：有强烈 AI 焦虑的朋友，往往 AI 用得也很少。问他们为什么用得少，普遍的回答是「缺少应用场景」。" },
        { t: "p", c: "那么，「缺场景」究竟靠不靠谱？这个答案让我既熟悉又疑惑——因为我的情况恰恰相反，尤其在掌握了 AI 编程这项关键技能后，AI 的应用场景变得非常多。" },
        { t: "h", c: "我的三个应用场景" },
        { t: "p", c: "为了提效，我用 AI 编程写了一个开发信自动生成工具。有了它，过去 4 个多小时的工作量现在三十分钟左右就能搞定，而且客户开发效果更好，我也因此被邀请到「得到」做 AI 落地分享。" },
        { t: "p", c: "你可能觉得，那是因为我懂 AI 编程才用得起来。实际恰恰相反：在学会 AI 编程之前，我就已经在大量使用 AI——正是在使用中要解决大量重复劳动，才萌生了用编程把 AI 工作自动化的想法。" },
        { t: "p", c: "排版也有突破。给公众号文章排版一直困扰我，太麻烦，常常文章写好了都不想发。没有合适工具，我干脆用 AI 编程写了一个公众号排版程序：用 Markdown 写好文章、配好图，运行程序就能自动排成我喜欢的格式并存进草稿箱，连封面和配图上传都不用我管。" },
        { t: "p", c: "再看教育场景。朋友想让孩子跟我学 AI、学会自学。了解情况后，我特意用 AI 写了一个游戏来教他。生活中我并不玩游戏，但写游戏挺有趣，能学到很多新东西。孩子在学校也学编程，我问他按现在的进度自己写出这款游戏要多久，他说「几年」；而以我的经验，让他半个月用 AI 编程做出来并不难。" },
        { t: "q", c: "看到这儿你也能感觉到：我并不缺 AI 的应用场景。" },
        { t: "h", c: "应用场景为什么会变少" },
        { t: "p", c: "我不缺场景，很大程度是因为掌握了 AI 编程。那不具备这个技能的普通朋友，为什么会觉得自己缺场景？我归纳为三个因素。" },
        { t: "p", c: "其一，对 AI 能力的认知不足。很多人对 AI 的理解止步于随手用过的一两款产品，没去探究自己用的 AI 与全球顶尖 AI 的差距，也不了解最强模型各自擅长什么、如何组合使用。缺乏这些认知，就很难找到匹配自己场景的工具。" },
        { t: "p", c: "其二，AI 使用经验的匮乏。认知不足直接导致经验不足：没找到合适工具，结果不如人意、甚至不如手动来得快，自然就少用；越少用经验越少，少到即便看见绝佳场景，也不知道怎么用 AI。" },
        { t: "p", c: "其三，没有持续用 AI 提升效率。即便受前两个因素影响，其实生活和工作中的很多问题都能尝试用 AI 辅助。坚持用 AI 提效，会逼着你尝试更多工具、补足认知；用得多了经验自然多，能发现的场景也就多了。多数人没有持续这样做，对身边的场景视而不见也就在情理之中。" },
        { t: "p", c: "明白了原因就好办——解决方案很简单：反过来做。" },
        { t: "q", c: "持续练习像滚雪球：每解决一个小问题，就获得一次正反馈，正反馈反过来提升认知和经验，形成可复现的飞轮效应。" },
        { t: "p", c: "把 AI 用起来，去解决生活里的小问题，持续用它提升效率。每一次小小的突破都会带来一次正反馈，正反馈积累多了，应用场景就会慢慢浮现出来——只要我们不假装看不见。" },
      ],
    },
    en: {
      title: "Is \"No Use Cases\" a Real Excuse? On Finding Scenarios for AI",
      excerpt: "(English translation in progress) The friends with the most AI anxiety tend to use AI the least.",
      sub: "English translation coming soon — switch to 中文 for the full piece.",
      tags: ["AI", "AI Coding", "Productivity"],
      body: [
        { t: "lead", c: "The full English translation is on the way. For now, switch the language toggle to 中文 to read this article in full." },
      ],
    },
  },
  {
    id: "dev-letter-tool", type: "article", platform: "wechat", featured: true,
    date: "2026-05-22", read: 8,
    url: "",
    zh: {
      title: "我用 AI 编程写了个开发信工具，4 小时的活 30 分钟搞定",
      excerpt: "不是因为我先会编程才用 AI，而是反过来——为了少干重复活，才逼自己用 AI 把它做成了工具。",
      sub: "一个普通外贸人，如何用 AI 编程把日常工作自动化。",
      tags: ["AI 编程", "提效", "外贸"],
      body: [
        { t: "lead", c: "写开发信曾经是我最痛苦的工作之一：研究客户、找痛点、组织措辞，一封像样的信要磨一个多小时，一天下来四个多小时就没了。" },
        { t: "p", c: "我没有等到「学会编程」才动手。恰恰相反，是因为这件事太重复、太耗时，我才下决心用 AI 编程把它做成一个工具——输入客户信息，自动生成针对性的开发信初稿。" },
        { t: "h", c: "结果" },
        { t: "p", c: "现在同样的工作量，三十分钟左右就能完成，而且因为每封信都更有针对性，客户回复率反而更高了。后来我还被邀请到「得到」做了一次 AI 落地的分享。" },
        { t: "q", c: "AI 的门槛不在于你会不会编程，而在于你愿不愿意为了偷懒，先认真折腾一次。" },
      ],
    },
    en: {
      title: "I Built an Outreach-Email Tool with AI Coding — 4 Hours of Work in 30 Minutes",
      excerpt: "I didn't learn to code first and then use AI. The opposite: hating repetitive work pushed me to turn it into a tool.",
      sub: "How an ordinary trade professional automated daily work with AI coding.",
      tags: ["AI Coding", "Productivity", "Trade"],
      body: [
        { t: "lead", c: "Writing outreach emails used to be one of my most painful tasks: research the client, find their pain points, craft the wording. A decent email took over an hour, and a day could eat four-plus hours." },
        { t: "p", c: "I didn't wait until I 'knew how to code' to act. Quite the opposite — because the task was so repetitive and time-consuming, I forced myself to use AI coding to turn it into a tool: feed in client info, get a targeted first draft." },
        { t: "h", c: "The result" },
        { t: "p", c: "The same workload now takes around thirty minutes, and because each email is more tailored, reply rates actually went up. I was later invited to share this AI-in-practice story at a public talk." },
        { t: "q", c: "The barrier to AI isn't whether you can code — it's whether you'll put in real effort once, in order to be lazy forever after." },
      ],
    },
  },
  {
    id: "wechat-formatter", type: "article", platform: "wechat", featured: true,
    date: "2026-04-30", read: 6,
    url: "",
    zh: {
      title: "公众号排版太痛苦？我写了个程序，一键排好还自动存草稿箱",
      excerpt: "很多时候文章写好了却不想发，就因为排版太麻烦。于是我决定干掉这个借口。",
      sub: "用 Markdown 写作 + AI 编程，把排版这件事彻底自动化。",
      tags: ["AIGC", "AI 编程", "工作流"],
      body: [
        { t: "lead", c: "给公众号文章排版，一直是困扰我的事。流程太繁琐，以至于很多时候文章明明写好了，我却懒得发出来。" },
        { t: "p", c: "市面上没找到合适的工具，于是我用 AI 编程写了一个公众号排版程序：我用 Markdown 写好文章、配好图，运行程序，它就自动排成我喜欢的格式，并直接保存到公众号草稿箱——连封面和配图上传都不用我操心。" },
        { t: "q", c: "当一件事不再痛苦，你才会真正持续地做它。" },
        { t: "p", c: "工具不会替你写出好内容，但它能拿掉所有让你「不想开始」的摩擦。这一点，常常比内容本身更决定你能走多远。" },
      ],
    },
    en: {
      title: "Hate Formatting WeChat Articles? I Wrote a Program That Does It in One Click",
      excerpt: "Often a finished article never gets published — just because formatting is a chore. So I killed that excuse.",
      sub: "Write in Markdown + AI coding to fully automate formatting.",
      tags: ["AIGC", "AI Coding", "Workflow"],
      body: [
        { t: "lead", c: "Formatting articles for WeChat always bugged me. The process was so tedious that, plenty of times, a finished piece simply never got posted." },
        { t: "p", c: "I couldn't find a tool I liked, so I used AI coding to write a WeChat formatter: I write in Markdown with images placed, run the program, and it auto-formats to my preferred style and saves straight to the WeChat draft box — no manual cover or image uploads needed." },
        { t: "q", c: "Only when something stops being painful do you actually keep doing it." },
        { t: "p", c: "A tool won't write good content for you, but it can remove every bit of friction that makes you 'not want to start.' That often decides how far you go more than the content itself." },
      ],
    },
  },
  {
    id: "kid-ai-game", type: "video", platform: "channel", featured: true,
    date: "2026-05-09", length: "9:12",
    url: "",
    zh: {
      title: "我教一个孩子，半个月用 AI 做出了一款游戏",
      excerpt: "他在学校学编程，说要自己写出这款游戏得「几年」。而用 AI，半个月就够了。",
      sub: "AI 时代，学习这件事正在被重新定义。",
      tags: ["AI 编程", "教育", "视频"],
      body: [
        { t: "lead", c: "朋友想让孩子跟我学 AI、学会自学。了解了孩子的情况后，我特意用 AI 编程写了一款游戏来教他。" },
        { t: "p", c: "生活中我其实不玩游戏，但写游戏的过程蛮有趣，能学到很多新东西。这期视频里，我也分享了编写它时的一些思考和感受。" },
        { t: "q", c: "他说按学校进度自己写出来要『几年』；用 AI，半个月并不难。" },
        { t: "p", c: "这不是说编程基础不重要，而是说——当工具变了，学习的路径和节奏，也该跟着变。" },
      ],
    },
    en: {
      title: "I Taught a Kid to Build a Game with AI — in Two Weeks",
      excerpt: "He studies coding at school and figured building this game himself would take 'years.' With AI, two weeks was enough.",
      sub: "In the age of AI, learning itself is being redefined.",
      tags: ["AI Coding", "Education", "Video"],
      body: [
        { t: "lead", c: "A friend wanted his kid to learn AI from me — and to learn how to learn. After getting to know the kid, I used AI coding to build a game specifically to teach him." },
        { t: "p", c: "I don't actually play games, but building one was genuinely fun and taught me a lot. In this video I also share some of the thinking and feeling behind making it." },
        { t: "q", c: "He said writing it himself at school pace would take 'years.' With AI, two weeks wasn't hard." },
        { t: "p", c: "This isn't to say fundamentals don't matter — it's that when the tools change, the path and pace of learning should change with them." },
      ],
    },
  },
  {
    id: "aigc-image-flow", type: "article", platform: "longform",
    date: "2026-03-28", read: 11,
    url: "",
    zh: {
      title: "我的 AIGC 图像创作工作流：从一句话到一张能用的图",
      excerpt: "好图不是「抽卡」抽出来的，而是一套可复现的流程：提示、迭代、局部重绘、放大。",
      sub: "把生成式图像从「碰运气」变成「可控产出」。",
      tags: ["AIGC", "图像生成", "工作流"],
      body: [
        { t: "lead", c: "很多人用 AI 画图像抽奖：输入一句话，反复刷新，等一张满意的。但真正能用于工作的图，靠的是流程，不是运气。" },
        { t: "p", c: "我的流程分四步：先用结构化提示词描述主体、风格、光线；再小批量生成、挑方向；然后用局部重绘修掉不满意的细节；最后放大出图。每一步都可控、可复现。" },
        { t: "q", c: "AIGC 的专业度，不在于你会念什么咒语，而在于你有没有一套能反复用的流程。" },
        { t: "p", c: "工具会换，模型会更新，但「描述—生成—修正—交付」这套结构是稳定的。掌握了它，换任何工具你都不慌。" },
      ],
    },
    en: {
      title: "My AIGC Image Workflow: From One Sentence to a Usable Picture",
      excerpt: "Good images aren't pulled from a gacha machine — they come from a reproducible flow: prompt, iterate, inpaint, upscale.",
      sub: "Turning generative imagery from luck into controllable output.",
      tags: ["AIGC", "Image Gen", "Workflow"],
      body: [
        { t: "lead", c: "Many people treat AI image generation like a lottery: type a sentence, keep refreshing, wait for a good one. But images you can actually use at work come from a process, not luck." },
        { t: "p", c: "My flow has four steps: structured prompts describing subject, style and light; small-batch generation to pick a direction; inpainting to fix the details I don't like; then upscaling. Every step is controllable and repeatable." },
        { t: "q", c: "AIGC professionalism isn't about which incantation you chant — it's whether you have a flow you can run again and again." },
        { t: "p", c: "Tools change, models update, but the 'describe – generate – fix – deliver' structure is stable. Master it and no tool switch can rattle you." },
      ],
    },
  },
  {
    id: "ai-writing-flow", type: "article", platform: "wechat",
    date: "2026-02-18", read: 7,
    url: "",
    zh: {
      title: "AI 不是帮我写，而是帮我想清楚再写",
      excerpt: "把 AI 当代笔，文章会平庸；把它当对手和镜子，你才会写得更好。",
      sub: "我用 AI 写作的真实方式，和大多数人想的不一样。",
      tags: ["AI 写作", "AIGC", "方法"],
      body: [
        { t: "lead", c: "很多人用 AI 写作，是让它「替我写」。但我用它，更多是让它「逼我想清楚」。" },
        { t: "p", c: "我会先把粗糙的想法丢给它，让它追问、反驳、列出我没考虑到的角度；然后我自己重写。AI 在这里不是代笔，而是一面镜子和一个对手。" },
        { t: "q", c: "用 AI 代笔，你得到平均水平；用 AI 提问，你得到更好的自己。" },
      ],
    },
    en: {
      title: "AI Doesn't Write For Me — It Helps Me Think Before I Write",
      excerpt: "Use AI as a ghostwriter and your writing turns mediocre. Use it as a sparring partner and a mirror, and you get better.",
      sub: "How I actually write with AI — not what most people imagine.",
      tags: ["AI Writing", "AIGC", "Method"],
      body: [
        { t: "lead", c: "Many people use AI to 'write it for me.' I mostly use it to 'force me to think it through.'" },
        { t: "p", c: "I hand it my rough ideas and let it interrogate, push back, and list angles I missed — then I rewrite it myself. Here AI isn't a ghostwriter; it's a mirror and a sparring partner." },
        { t: "q", c: "Ghostwrite with AI and you get the average. Question with AI and you get a better version of yourself." },
      ],
    },
  },
  {
    id: "start-using-ai", type: "article", platform: "weibo",
    date: "2026-05-30", read: 3,
    url: "",
    zh: {
      title: "普通人开始用 AI，最好的第一步不是学，而是「用它解决一件烦事」",
      excerpt: "别先去学 prompt 工程。先找你今天最烦的一件小事，让 AI 帮你做掉。",
      sub: "一条关于「如何开始」的随笔。",
      tags: ["AI 入门", "随笔"],
      body: [
        { t: "lead", c: "总有人问我：想开始用 AI，该先学什么？我的回答是——别学，先用。" },
        { t: "p", c: "找你今天最烦、最重复的一件小事：写一封邮件、整理一份表格、改一段文案，直接丢给 AI。一次小小的成功，比看十篇教程都管用。" },
        { t: "q", c: "正反馈像滚雪球：解决一个小问题，就多一分信心，认知和经验也跟着涨。" },
      ],
    },
    en: {
      title: "The Best First Step Into AI Isn't Studying — It's Solving One Annoying Task",
      excerpt: "Don't start with prompt engineering. Find the most annoying small thing on your plate today and let AI handle it.",
      sub: "A short note on how to begin.",
      tags: ["AI Basics", "Notes"],
      body: [
        { t: "lead", c: "People keep asking me: I want to start using AI, what should I learn first? My answer — don't study, just use it." },
        { t: "p", c: "Find the most annoying, repetitive little task you have today: an email, a spreadsheet, a paragraph of copy. Hand it to AI. One small win beats ten tutorials." },
        { t: "q", c: "Positive feedback snowballs: solve one small problem, gain a bit of confidence, and your skill and intuition grow with it." },
      ],
    },
  },
  {
    id: "ai-tools-compare", type: "video", platform: "channel",
    date: "2026-01-25", length: "11:40",
    url: "",
    zh: {
      title: "主流 AI 工具我都用了一年，这是我的真实分工",
      excerpt: "不存在「最强的 AI」，只存在「最适合这件事的 AI」。",
      sub: "写作、编程、画图、查资料，我分别用什么。",
      tags: ["AI 工具", "评测", "视频"],
      body: [
        { t: "lead", c: "很多人对 AI 的认知，停留在随手用过的一两款产品。但不同模型各有所长，会组合用，才是关键。" },
        { t: "p", c: "这期视频里，我分享自己一年来的真实分工：长文写作和思考用哪款、编程用哪款、画图用哪款、查资料和整理用哪款，以及它们怎么配合。" },
        { t: "q", c: "认知不足，就很难找到匹配自己场景的工具；而工具用对了，场景自然就多了。" },
      ],
    },
    en: {
      title: "I Used All the Major AI Tools for a Year — Here's How I Actually Split the Work",
      excerpt: "There's no 'most powerful AI,' only 'the AI best suited for this task.'",
      sub: "Writing, coding, image gen, research — what I use for each.",
      tags: ["AI Tools", "Review", "Video"],
      body: [
        { t: "lead", c: "Many people's view of AI stops at the one or two products they happened to try. But different models have different strengths — combining them is the key." },
        { t: "p", c: "In this video I share my real division of labor over the past year: which tool for long-form writing and thinking, which for coding, which for images, which for research — and how they work together." },
        { t: "q", c: "Without enough awareness, it's hard to find tools that match your scenarios; pick the right tool, and the scenarios multiply on their own." },
      ],
    },
  },
  {
    id: "aigc-poster-set", type: "photo", platform: "photo",
    date: "2026-03-12", count: 12,
    url: "",
    zh: {
      title: "AIGC 海报实验：当提示词遇见东方美学",
      excerpt: "12 张完全由 AI 生成的海报，试着把水墨、留白与赛博质感揉在一起。",
      sub: "一组 AIGC 视觉实验。",
      tags: ["AIGC", "图像", "设计"],
      body: [
        { t: "lead", c: "这组海报全部由 AI 生成。我想试一件事：能不能让生成式图像，长出一点东方的呼吸感。" },
        { t: "p", c: "水墨的留白、宣纸的肌理，再混一点冷色的赛博光——每一张背后都是几十次提示词的迭代。工具是 AI，但审美的判断，仍然得自己来。" },
      ],
    },
    en: {
      title: "AIGC Poster Experiment: When Prompts Meet Eastern Aesthetics",
      excerpt: "12 fully AI-generated posters, trying to blend ink-wash, negative space and a cyber sheen.",
      sub: "A set of AIGC visual experiments.",
      tags: ["AIGC", "Image", "Design"],
      body: [
        { t: "lead", c: "Every poster here is AI-generated. I wanted to test one thing: can generative images grow a bit of Eastern breathing room." },
        { t: "p", c: "Ink-wash negative space, the texture of rice paper, mixed with a cool cyber glow — each image is dozens of prompt iterations deep. The tool is AI, but the aesthetic judgment is still mine to make." },
      ],
    },
  },
];
