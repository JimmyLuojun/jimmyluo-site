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
    heroEyebrow: "AI / 区块链 · 中英双语",
    heroLine1: "解读 AI 与区块链，",
    heroGrad: "写给每一个好奇的人。",
    heroLede: "我是罗军（JimmyLuo）。这里汇集我在公众号、微博、视频号的文章、视频与影像——把前沿技术讲成人话，让国内外的你都读得懂。",
    ctaRead: "开始阅读", ctaSubscribe: "订阅更新",
    statPieces: "篇内容", statReaders: "读者", statYears: "年创作",
    featTitle: "精选", featDesc: "近期最值得一读的内容",
    libTitle: "全部内容", libDesc: "按平台与形式归档",
    readMore: "阅读", watch: "观看", viewSet: "查看图集",
    minRead: "分钟", photos: "张",
    aboutTitle: "关于罗军", 
    aboutP1: "区块链工程师、AI 写作者。白天写代码，晚上写文章——把复杂的密码学、共识机制和大模型，拆成普通人能读懂的故事。",
    aboutP2: "相信好的技术内容不该有语言门槛，所以这里的一切都提供中英双语。",
    topicsTitle: "我写什么",
    origin: "在原平台查看",
    bylineBy: "罗军", emptyMsg: "该分类暂无内容",
    nowLabel: "正在",
    viewGrid: "卡片", viewList: "索引",
    currently: [
      ["这周发布了", "3 篇长文"],
      ["正在写", "一个 ZK 系列"],
      ["最新视频", "6 分钟讲零知识证明"],
      ["全站内容", "中英双语"],
      ["本月阅读", "12,400+"],
      ["在读", "《计算机与难算》"],
      ["坐标", "深圳 · 南山"],
    ],
    footTag: "把前沿技术讲成人话。文章 / 视频 / 影像，中英双语，持续更新。",
    rights: "保留所有权利",
    by: "作者", published: "发布于",
  },
  en: {
    navWork: "Work", navTopics: "Topics", navAbout: "About",
    heroEyebrow: "AI / Blockchain · Bilingual",
    heroLine1: "Making sense of AI & blockchain,",
    heroGrad: "for the merely curious.",
    heroLede: "I'm Luo Jun (JimmyLuo). A home for my writing, video and photography from WeChat, Weibo and Channels — frontier tech explained in plain language, readable wherever you are.",
    ctaRead: "Start reading", ctaSubscribe: "Subscribe",
    statPieces: "pieces", statReaders: "readers", statYears: "yrs writing",
    featTitle: "Featured", featDesc: "The pieces most worth your time",
    libTitle: "Everything", libDesc: "Archived by platform & form",
    readMore: "Read", watch: "Watch", viewSet: "View set",
    minRead: "min", photos: "photos",
    aboutTitle: "About Luo Jun",
    aboutP1: "Blockchain engineer and AI writer. I ship code by day and essays by night — turning cryptography, consensus and large models into stories anyone can follow.",
    aboutP2: "Good technical writing shouldn't have a language barrier, so everything here is fully bilingual.",
    topicsTitle: "What I write about",
    origin: "View on original platform",
    bylineBy: "Luo Jun", emptyMsg: "Nothing here yet in this category",
    nowLabel: "Currently",
    viewGrid: "Cards", viewList: "Index",
    currently: [
      ["Shipped this week", "3 essays"],
      ["Writing", "a ZK series"],
      ["Latest video", "ZK proofs in 6 min"],
      ["Everything here", "bilingual"],
      ["Read this month", "12,400+"],
      ["Currently reading", "The Annotated Turing"],
      ["Based in", "Shenzhen · Nanshan"],
    ],
    footTag: "Frontier tech in plain language. Essays, video & photography — bilingual, always.",
    rights: "All rights reserved",
    by: "By", published: "Published",
  },
};

window.TOPICS = [
  { icon: "◇", zh: ["大语言模型", "Agent / RAG / 评测的工程实践"], en: ["Large Models", "Agents, RAG & eval in practice"] },
  { icon: "⬡", zh: ["区块链", "L2、ZK 与共识机制拆解"], en: ["Blockchain", "L2s, ZK & consensus, unpacked"] },
  { icon: "△", zh: ["行业观察", "技术如何重塑产品与社会"], en: ["Field Notes", "How tech reshapes products & society"] },
];

// helper to make body paragraphs bilingual
// ============================================================
//  ★★★  如何添加你自己的内容 / How to add your own content  ★★★
// ------------------------------------------------------------
//  复制下面这个模板，粘到 window.SITE_DATA = [ 后面，填空即可。
//  微信公众号没有自动同步：把每篇文章登记一条，url 填公众号原文链接，
//  读者点开卡片看双语摘要，再点「在原平台查看」跳转到原文。
//
//  封面图：微信图片有防盗链，请把封面下载到 images/ 文件夹再引用。
//  没有封面就删掉 cover 这一行，会自动显示占位图。
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
    cover: "images/my-first-article.jpg",   // ← 封面图（没有就删掉这一行）
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
    id: "ai-scenarios", type: "article", platform: "wechat", featured: true,
    date: "2026-06-01", read: 6,
    url: "https://mp.weixin.qq.com/s/NANFsozDNYvKARcRbTtgSQ",
    zh: {
      title: "「缺场景」靠不靠谱？聊聊我的 AI 应用场景",
      excerpt: "有强烈 AI 焦虑的朋友，往往 AI 用得也很少。「缺场景」到底靠不靠谱？答案也许正相反。",
      sub: "从三个真实场景，聊聊为什么我从不缺 AI 的用武之地。",
      tags: ["AI", "AI 编程", "效率"],
      body: [
        { t: "lead", c: "如今 AI 技术一日千里，让很多人兴奋，也让更多人感到焦虑，担心被时代抛下。在与朋友交流中我发现一个有趣的现象：有强烈 AI 焦虑的朋友，往往 AI 用得也很少。问他们为什么用得少，普遍的回答是「缺少应用场景」。" },
        { t: "p", c: "那么，「缺场景」究竟靠不靠谱？这个答案让我既熟悉又疑惑——因为我的情况恰恰相反，尤其在掌握了 AI 编程这项关键技能后，AI 的应用场景变得非常多。" },
        { t: "h", c: "我的三个应用场景" },
        { t: "p", c: "为了提效，我用 AI 编程写了一个开发信自动生成工具。有了它，过去 4 个多小时的工作量现在二十多分钟就能搞定，而且客户开发效果更好，我也因此被邀请到「得到」做 AI 落地分享。" },
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
    id: "ai-agents-2025", type: "article", platform: "wechat", featured: true,
    date: "2025-05-18", read: 11,
    zh: {
      title: "为什么 2025 是 AI Agent 真正的元年",
      excerpt: "从「会聊天的模型」到「会做事的系统」，差的不是参数，而是一整套工程。",
      sub: "模型只是发动机。让它真正跑起来的，是记忆、工具与编排这套底盘。",
      tags: ["Agent", "工程", "LLM"],
      body: [
        { t: "lead", c: "过去两年，我们习惯了和模型「聊天」。但聊天只是开始——真正的拐点，是模型开始替我们「做事」。" },
        { t: "p", c: "一个能查资料、调工具、写代码、还能自我纠错的系统，和一个只会回答问题的聊天框，是两种完全不同的产品。前者需要记忆、需要规划、需要在出错时知道回退。" },
        { t: "h", c: "三个被低估的工程难题" },
        { t: "p", c: "第一是上下文管理：如何在有限的窗口里，喂给模型「刚好够用」的信息。第二是工具调用的可靠性：模型会幻觉，工具不会，关键在于把决策权交还给确定性的代码。第三是评测——没有评测，你根本不知道改动是变好还是变坏。" },
        { t: "q", c: "Agent 不是更聪明的聊天机器人，而是更克制的自动化系统。" },
        { t: "p", c: "2025 的不同，在于这套底盘终于成熟了。当工程不再是瓶颈，创意才真正开始。" },
      ],
    },
    en: {
      title: "Why 2025 Is the Real Year of AI Agents",
      excerpt: "Going from \"a model that chats\" to \"a system that acts\" isn't about parameters — it's about plumbing.",
      sub: "The model is just the engine. Memory, tools and orchestration are the chassis that make it actually drive.",
      tags: ["Agents", "Engineering", "LLM"],
      body: [
        { t: "lead", c: "For two years we got used to chatting with models. But chat was only the warm-up — the real inflection point is when models start doing things on our behalf." },
        { t: "p", c: "A system that can look things up, call tools, write code and correct itself is a fundamentally different product from a box that just answers questions. The first needs memory, planning, and the sense to back off when it's wrong." },
        { t: "h", c: "Three underrated engineering problems" },
        { t: "p", c: "First, context management: feeding the model exactly enough inside a finite window. Second, tool-call reliability: models hallucinate, tools don't — the trick is handing decisions back to deterministic code. Third, evaluation — without it you have no idea whether a change made things better or worse." },
        { t: "q", c: "An agent isn't a smarter chatbot. It's a more disciplined automation system." },
        { t: "p", c: "What's different in 2025 is that this chassis is finally mature. Once engineering stops being the bottleneck, the creative part actually begins." },
      ],
    },
  },
  {
    id: "l2-endgame", type: "article", platform: "longform", featured: true,
    date: "2025-04-30", read: 16,
    zh: {
      title: "Layer 2 的终局：一场关于信任的战争",
      excerpt: "Rollup 之争表面是 TPS 和手续费，本质是「我们愿意把信任交给谁」。",
      sub: "Optimistic 还是 ZK？这道题的答案，藏在你对「证明」的理解里。",
      tags: ["L2", "Rollup", "ZK"],
      body: [
        { t: "lead", c: "每一轮扩容叙事，最后都会回到同一个古老的问题：我们凭什么相信链上的状态是对的？" },
        { t: "p", c: "Optimistic Rollup 说：默认相信，错了再罚。ZK Rollup 说：不信任，用数学证明。两条路线背后，是两种截然不同的世界观。" },
        { t: "h", c: "为什么 ZK 最终会赢" },
        { t: "p", c: "不是因为它更快，而是因为它把「信任」从社会问题变回了数学问题。当证明生成的成本随硬件持续下降，乐观假设的那段挑战期，会越来越像一种历史遗留。" },
        { t: "q", c: "扩容的尽头不是更高的 TPS，而是更少需要被信任的人。" },
        { t: "p", c: "终局或许不是某一条链的胜利，而是「证明」本身成为基础设施——像 HTTPS 一样，安静地运行在一切之下。" },
      ],
    },
    en: {
      title: "The Endgame for Layer 2: A War Over Trust",
      excerpt: "The rollup wars look like a fight over TPS and fees. They're really about who we're willing to trust.",
      sub: "Optimistic or ZK? The answer hides in how you understand the word \"proof\".",
      tags: ["L2", "Rollup", "ZK"],
      body: [
        { t: "lead", c: "Every scaling narrative eventually circles back to one ancient question: why should we believe the state on-chain is correct?" },
        { t: "p", c: "Optimistic rollups say: trust by default, punish if wrong. ZK rollups say: trust nothing, prove it with math. Behind the two roadmaps are two very different worldviews." },
        { t: "h", c: "Why ZK wins in the end" },
        { t: "p", c: "Not because it's faster, but because it turns trust back from a social problem into a mathematical one. As proving costs keep falling with hardware, the optimistic challenge window starts to look like a historical artifact." },
        { t: "q", c: "The end of scaling isn't higher TPS — it's fewer people you have to trust." },
        { t: "p", c: "The endgame may not be any one chain's victory, but proof itself becoming infrastructure — running quietly beneath everything, the way HTTPS does." },
      ],
    },
  },
  {
    id: "zk-in-5", type: "video", platform: "channel", featured: true,
    date: "2025-05-09", length: "6:24",
    zh: {
      title: "6 分钟讲清楚：零知识证明到底在证明什么",
      excerpt: "用一个找瓦尔多的游戏，讲明白这门让密码学家兴奋了三十年的技术。",
      sub: "不用数学，也能理解 ZK 的核心直觉。",
      tags: ["ZK", "科普", "视频"],
      body: [
        { t: "lead", c: "零知识证明听起来像魔法：我能向你证明我知道一个秘密，却不告诉你这个秘密是什么。" },
        { t: "p", c: "这期视频里，我用「在一张人山人海的图里找瓦尔多」当例子——我可以隔着一块挖了洞的硬纸板让你看到瓦尔多，证明我找到了他，但你完全不知道他在整张图的哪个位置。" },
        { t: "q", c: "证明「我知道」，而不泄露「我知道什么」。" },
        { t: "p", c: "把这个直觉放大到密码学，就是今天 L2、隐私支付和身份验证背后的引擎。" },
      ],
    },
    en: {
      title: "Zero-Knowledge Proofs in 6 Minutes — What Are You Even Proving?",
      excerpt: "A game of Where's Waldo to explain the tech that's kept cryptographers excited for thirty years.",
      sub: "The core intuition behind ZK — no math required.",
      tags: ["ZK", "Explainer", "Video"],
      body: [
        { t: "lead", c: "Zero-knowledge proofs sound like magic: I can prove to you that I know a secret, without ever telling you what the secret is." },
        { t: "p", c: "In this video I use Where's Waldo — I hold up a big piece of cardboard with a small hole, show you Waldo through it to prove I found him, and you still have no idea where on the page he actually is." },
        { t: "q", c: "Prove that you know — without revealing what you know." },
        { t: "p", c: "Scale that intuition up to cryptography and you have the engine behind today's L2s, private payments and identity verification." },
      ],
    },
  },
  {
    id: "rewrote-trading", type: "article", platform: "weibo",
    date: "2025-05-21", read: 4,
    zh: {
      title: "我用 Claude 重写了自己的交易脚本，然后删掉了一半",
      excerpt: "AI 写代码最大的价值，不是写得更多，而是让你敢删。",
      sub: "一条关于「减法」的随笔。",
      tags: ["AI", "随笔"],
      body: [
        { t: "lead", c: "周末把跑了两年的交易脚本丢给 AI 重写。结果最有用的不是它新加的功能，而是它问我的那句：这三百行真的都需要吗？" },
        { t: "p", c: "于是我删掉了一半。代码少了，bug 少了，我反而更敢动它了。" },
        { t: "q", c: "好工具不是让你写更多，而是让你删得更安心。" },
      ],
    },
    en: {
      title: "I Had Claude Rewrite My Trading Script — Then Deleted Half of It",
      excerpt: "The biggest value of AI in code isn't writing more. It's making you brave enough to delete.",
      sub: "A short note on subtraction.",
      tags: ["AI", "Notes"],
      body: [
        { t: "lead", c: "Over the weekend I handed a two-year-old trading script to AI for a rewrite. The most useful part wasn't a new feature — it was the question it asked me: do you really need all three hundred lines?" },
        { t: "p", c: "So I deleted half. Less code, fewer bugs, and somehow I'm more willing to touch it now." },
        { t: "q", c: "A good tool doesn't make you write more — it makes you delete with confidence." },
      ],
    },
  },
  {
    id: "onchain-city", type: "photo", platform: "photo",
    date: "2025-03-15", count: 18,
    zh: {
      title: "链上之城：深圳的夜",
      excerpt: "在数据中心、屏幕与霓虹之间，记录一座把代码写进天际线的城市。",
      sub: "18 张街头与建筑影像。",
      tags: ["摄影", "深圳", "城市"],
      body: [
        { t: "lead", c: "区块链是抽象的，但运行它的世界是具体的——是机房的风扇声，是凌晨写字楼里没熄的灯。" },
        { t: "p", c: "这组照片拍于深圳南山，我想找的，是技术与人之间那条若隐若现的边界。" },
      ],
    },
    en: {
      title: "On-Chain City: Shenzhen After Dark",
      excerpt: "Between data centers, screens and neon — a city that writes code into its skyline.",
      sub: "18 frames of street and architecture.",
      tags: ["Photography", "Shenzhen", "Urban"],
      body: [
        { t: "lead", c: "Blockchains are abstract, but the world that runs them is concrete — the hum of server fans, the lights left on in towers at 3am." },
        { t: "p", c: "Shot in Nanshan, Shenzhen. What I was looking for was that faint, shifting border between technology and the people living beside it." },
      ],
    },
  },
  {
    id: "rag-mistakes", type: "article", platform: "wechat",
    date: "2025-04-12", read: 9,
    zh: {
      title: "做 RAG 踩过的 7 个坑，希望你别再踩",
      excerpt: "检索增强不是把文档塞进向量库就完事，魔鬼全在分块与重排里。",
      sub: "一份来自生产环境的避坑清单。",
      tags: ["RAG", "检索", "工程"],
      body: [
        { t: "lead", c: "RAG 的 demo 很容易，上线很难。难的不是模型，是数据。" },
        { t: "p", c: "最常见的错误，是把整篇文档当成一个块。第二常见的，是只信向量相似度、不做重排。第三，是从不评测召回率——你以为找到了，其实漏了一半。" },
        { t: "q", c: "RAG 的上限，由你的分块策略决定，而不是你的模型。" },
      ],
    },
    en: {
      title: "7 RAG Mistakes I Made So You Don't Have To",
      excerpt: "Retrieval-augmented generation isn't \"dump docs into a vector store.\" The devil is in chunking and reranking.",
      sub: "A field-tested list of traps to avoid.",
      tags: ["RAG", "Retrieval", "Engineering"],
      body: [
        { t: "lead", c: "RAG demos are easy. RAG in production is hard. And the hard part isn't the model — it's the data." },
        { t: "p", c: "The most common mistake is treating a whole document as one chunk. The second is trusting vector similarity alone and skipping reranking. The third is never measuring recall — you think you found it, but you missed half." },
        { t: "q", c: "Your RAG ceiling is set by your chunking strategy, not your model." },
      ],
    },
  },
  {
    id: "consensus-explainer", type: "video", platform: "channel",
    date: "2025-02-28", length: "8:50",
    zh: {
      title: "拜占庭将军问题，到底难在哪？",
      excerpt: "一群无法信任彼此的将军，如何达成一致进攻？这就是共识的起点。",
      sub: "动画讲解分布式共识的源头。",
      tags: ["共识", "分布式", "视频"],
      body: [
        { t: "lead", c: "几位将军围着一座城，只有同时进攻才能赢。但他们彼此不信任，信使还可能叛变。这就是著名的拜占庭将军问题。" },
        { t: "p", c: "整个区块链行业，本质上都在回答它的一个变体：在一群可能作恶的节点里，如何就「真相」达成一致。" },
        { t: "q", c: "共识，是人类对「如何信任陌生人」给出的工程答案。" },
      ],
    },
    en: {
      title: "The Byzantine Generals Problem — Why Is It So Hard?",
      excerpt: "Generals who can't trust each other, trying to agree on an attack. That's where consensus begins.",
      sub: "An animated take on the root of distributed consensus.",
      tags: ["Consensus", "Distributed", "Video"],
      body: [
        { t: "lead", c: "Several generals surround a city; they only win if they attack at the same time. But they don't trust each other, and the messengers might defect. That's the famous Byzantine Generals Problem." },
        { t: "p", c: "The entire blockchain industry is, at heart, answering a variant of it: how do you agree on truth among nodes that might be lying?" },
        { t: "q", c: "Consensus is engineering's answer to an old human question: how do you trust a stranger?" },
      ],
    },
  },
  {
    id: "ai-and-trust", type: "article", platform: "longform",
    date: "2025-01-20", read: 13,
    zh: {
      title: "当 AI 学会撒谎：我们还能相信屏幕里的世界吗",
      excerpt: "生成式 AI 让伪造的成本趋近于零，而验证真实的成本，正变得前所未有地高。",
      sub: "也许，区块链最重要的应用，是给 AI 时代留一份「真实的底稿」。",
      tags: ["AI", "区块链", "社会"],
      body: [
        { t: "lead", c: "我们正在进入一个奇怪的时代：制造一段以假乱真的视频，比验证它是不是真的，要便宜得多。" },
        { t: "p", c: "当伪造的边际成本趋近于零，「我亲眼所见」不再是证据。这时候，能记录「某件事在某个时刻确实发生过」的不可篡改账本，价值会被重新发现。" },
        { t: "q", c: "AI 负责创造，区块链负责证明。它们或许是同一枚硬币的两面。" },
        { t: "p", c: "这不是技术乐观主义，而是一种必要——给一个越来越难分辨真假的世界，留一个可以追溯的锚点。" },
      ],
    },
    en: {
      title: "When AI Learns to Lie: Can We Still Trust the World on Our Screens?",
      excerpt: "Generative AI drives the cost of forgery toward zero — while the cost of verifying truth has never been higher.",
      sub: "Maybe blockchain's most important use is keeping an authentic record for the age of AI.",
      tags: ["AI", "Blockchain", "Society"],
      body: [
        { t: "lead", c: "We're entering a strange era: fabricating a convincing video is far cheaper than verifying whether it's real." },
        { t: "p", c: "When the marginal cost of forgery approaches zero, \"I saw it with my own eyes\" stops being evidence. That's when an immutable ledger — one that records that something genuinely happened at a given moment — gets rediscovered." },
        { t: "q", c: "AI creates; blockchain attests. They may be two sides of the same coin." },
        { t: "p", c: "This isn't techno-optimism. It's a necessity — leaving a traceable anchor for a world where real and fake are ever harder to tell apart." },
      ],
    },
  },
  {
    id: "desk-setup", type: "photo", platform: "photo",
    date: "2024-12-08", count: 9,
    zh: {
      title: "一个写作者的工作台",
      excerpt: "机械键盘、墨水屏、咖啡渍——记录文字与代码诞生的地方。",
      sub: "9 张静物。",
      tags: ["摄影", "静物", "工作"],
      body: [
        { t: "lead", c: "工具会暴露一个人怎么思考。这组照片拍的是我每天面对的桌面。" },
        { t: "p", c: "没有摆拍，咖啡渍是真的，便签也是真的。" },
      ],
    },
    en: {
      title: "A Writer's Desk",
      excerpt: "Mechanical keys, an e-ink screen, coffee rings — where words and code get made.",
      sub: "9 still lifes.",
      tags: ["Photography", "Still Life", "Workspace"],
      body: [
        { t: "lead", c: "Your tools reveal how you think. These are shots of the desk I face every day." },
        { t: "p", c: "Nothing staged — the coffee rings are real, and so are the sticky notes." },
      ],
    },
  },
];
