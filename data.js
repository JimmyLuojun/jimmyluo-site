/* ============================================================
   data.js — bilingual content model + UI strings
   Exposes window.SITE_DATA, window.UI, window.PLATFORMS, window.TOPICS, window.PROOF
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
];

window.UI = {
  zh: {
    navWork: "文章", navProof: "AI 实践", navTopics: "主题", navAbout: "关于",
    heroEyebrow: "B2B 技术销售 / 外贸客户开发 / AI 工具应用",
    heroLine1: "罗军｜B2B 技术销售",
    heroGrad: "× AI 工具应用",
    heroLede: "我过去主要做 B2B 销售、外贸客户开发和技术型销售，现在把 AI、Python 和自动化工作流用于客户开发、销售提效和业务资料整理。",
    ctaRead: "查看 AI 实践证据", ctaSubscribe: "查看公开文章",
    statPieces: "篇实践", statReaders: "读者", statYears: "年创作",
    fitTitle: "我适合什么岗位", fitDesc: "三个方向，快速了解我的经历主线和可迁移能力。",
    featTitle: "AI 实践文章", featDesc: "围绕 AI 工作流、工具实践和应用场景的公开文章。",
    libTitle: "AI 实践文章", libDesc: "来自我的公开发布内容",
    readMore: "阅读", watch: "观看", viewSet: "查看图集",
    minRead: "分钟", photos: "张",
    aboutTitle: "关于罗军", 
    aboutP1: "我过去的核心经历是 B2B 销售、技术型销售和外贸客户开发，做过电子元器件/芯片、反制无人机、光模块等方向的客户沟通和项目推进。",
    aboutP2: "近一年，我把 AI 和 Python 用到客户开发自动化、资料整理和公开分享中，希望在成都寻找技术型销售、AI 工具应用或 AI+B2B 销售相关机会。",
    topicsTitle: "能力主线",
    origin: "在原平台查看",
    bylineBy: "罗军", emptyMsg: "该分类暂无内容",
    nowLabel: "正在",
    viewGrid: "卡片", viewList: "索引",
    currently: [
      ["定位", "B2B 技术销售 × AI 工具应用"],
      ["公开分享", "得到学习圈 AI 编程片段"],
      ["应用场景", "外贸客户开发与内容工作流"],
      ["方向", "B2B 技术销售 × AI 工具应用"],
      ["坐标", "成都"],
    ],
    footTag: "B2B 技术销售 × AI 工具应用。用公开分享、文章和项目材料补充证明业务理解、表达能力与工具落地能力。",
    rights: "保留所有权利",
    by: "作者", published: "发布于",
  },
  en: {
    navWork: "Articles", navProof: "AI Practice", navTopics: "Topics", navAbout: "About",
    heroEyebrow: "B2B technical sales / overseas customer development / AI tooling",
    heroLine1: "Luo Jun: B2B Technical Sales",
    heroGrad: "× AI Tooling",
    heroLede: "My core background is B2B sales, overseas customer development, and technical sales. I now use AI, Python, and automation workflows for customer development, sales productivity, and business-material organization.",
    ctaRead: "View AI practice proof", ctaSubscribe: "View public articles",
    statPieces: "hands-on", statReaders: "readers", statYears: "yrs writing",
    fitTitle: "Roles I Fit",
    fitDesc: "Three directions that summarize my background and transferable strengths.",
    featTitle: "AI Practice Articles", featDesc: "Public articles on AI workflows, tooling practice, and practical use cases.",
    libTitle: "AI Practice Articles", libDesc: "Publicly published content from my own channels",
    readMore: "Read", watch: "Watch", viewSet: "View set",
    minRead: "min", photos: "photos",
    aboutTitle: "About Luo Jun",
    aboutP1: "My core background is B2B sales, technical sales, and overseas customer development, with customer communication and project follow-up experience across electronic components/chips, counter-drone systems, and optical modules.",
    aboutP2: "Over the past year, I have used AI and Python for customer-development automation, business-material organization, and public sharing. I am now looking for technical sales, AI tooling, or AI+B2B sales roles in Chengdu.",
    topicsTitle: "Core strengths",
    origin: "View on original platform",
    bylineBy: "Luo Jun", emptyMsg: "Nothing here yet in this category",
    nowLabel: "Currently",
    viewGrid: "Cards", viewList: "Index",
    currently: [
      ["Positioning", "B2B technical sales × AI tooling"],
      ["Public talk", "AI coding workflow clip"],
      ["Scenario", "trade outreach and content workflows"],
      ["Direction", "B2B technical sales × AI tooling"],
      ["Based in", "Chengdu"],
    ],
    footTag: "B2B technical sales × AI tooling. Public talks, articles, and project materials that support business understanding, communication, and hands-on execution.",
    rights: "All rights reserved",
    by: "By", published: "Published",
  },
};

window.TOPICS = [
  { icon: "◇", zh: ["B2B 技术销售", "理解复杂产品，推进客户沟通与项目落地"], en: ["B2B Technical Sales", "Understanding complex products and moving customer projects forward"] },
  { icon: "◈", zh: ["外贸客户开发", "欧美客户开发、需求沟通与资料整理"], en: ["Overseas Customer Development", "Customer outreach, requirement communication, and material organization"] },
  { icon: "△", zh: ["AI 工具应用", "用 AI、Python 和自动化流程提升业务效率"], en: ["AI Tooling", "Using AI, Python, and automation to improve business productivity"] },
];

window.ROLE_FIT = {
  zh: [
    {
      title: "B2B 技术销售 / 大客户销售",
      text: "有电子元器件/芯片、反制无人机、光模块等复杂产品销售经历，能把客户需求、产品方案和内部资源衔接起来推进项目。",
    },
    {
      title: "外贸客户开发 / 海外市场销售",
      text: "长期围绕欧美客户开发、英文商务沟通、询盘跟进和资料整理工作，适合需要主动开发和持续跟进的海外 B2B 岗位。",
    },
    {
      title: "AI 工具应用 / 企业 AI 提效培训",
      text: "把 AI 编程和自动化工作流用于客户开发与业务资料整理，也做过公开分享，能把工具方法讲给非技术团队听懂。",
    },
  ],
  en: [
    {
      title: "B2B Technical Sales / Key Account Sales",
      text: "Experience with complex products including electronic components/chips, counter-drone systems, and optical modules, with a focus on customer needs, solution communication, and project follow-up.",
    },
    {
      title: "Overseas Customer Development / International Sales",
      text: "Hands-on work across Europe/US customer outreach, English business communication, inquiry follow-up, and business-material organization for B2B sales roles.",
    },
    {
      title: "AI Tooling / Enterprise AI Productivity Training",
      text: "Uses AI coding and automation workflows for customer development and business-material work, with public sharing experience for non-technical audiences.",
    },
  ],
};

window.PROOF = {
  videoSrc: "assets/media/luojun-ai-workflow-62s-fuller-no-price.mp4",
  videoPoster: "assets/media/luojun-ai-workflow-62s-fuller-no-price-poster.jpg",
  zh: {
    eyebrow: "AI 分享与应用记录",
    title: "用 AI 编程实现自动化工作流",
    intro: "这段约 62 秒的视频来自得到 AI 学习圈分享。它证明我能把 AI 编程、自动化工作流和业务场景讲清楚，也能把工具方法转化成销售、培训和企业提效场景里的可理解表达。",
    videoLabel: "得到 AI 学习圈分享片段",
    notes: ["公开分享现场", "AI 编程与自动化工作流", "约 62 秒精选片段"],
    cards: [
      {
        title: "学校老师 AI 提效分享",
        text: "受邀面向学校老师做 AI 提效分享，主题围绕 AI 时代的教育、教师工作提效与工具实践。",
        image: "assets/media/school-ai-teacher-sharing-stage.jpg",
      },
      {
        title: "得到 AI 落地大会现场",
        text: "在得到 AI 落地大会现场，围绕 AI 工具应用与工作提效做交流，记录一次把个人实践带到公开场合分享的经历。",
        image: "assets/media/dedao-ai-summit-photo.jpg",
      },
      {
        title: "AI 实战落地案例集",
        text: "AI 实践案例入选相关案例集，作为公开活动材料展示。",
        image: "assets/media/ai-practical-case-collection.jpg",
      },
    ],
  },
  en: {
    eyebrow: "AI Sharing and Practice Records",
    title: "Building an Automation Workflow with AI Coding",
    intro: "This 62-second clip comes from a Dedao AI learning-circle talk. It shows that I can explain AI coding, automation workflows, and business scenarios clearly, and translate tooling methods into language that sales, training, and enterprise productivity teams can understand.",
    videoLabel: "Dedao AI learning-circle talk clip",
    notes: ["Public talk footage", "AI coding and workflow automation", "Price and promotional UI removed"],
    cards: [
      {
        title: "AI Efficiency Sharing for Teachers",
        text: "Invited to share AI productivity practices with school teachers, focusing on education in the AI era and practical tooling.",
        image: "assets/media/school-ai-teacher-sharing-stage.jpg",
      },
      {
        title: "Dedao AI Practice Summit",
        text: "A public event moment from Dedao's AI practice summit, centered on AI tools, workflow automation, and sharing hands-on experience.",
        image: "assets/media/dedao-ai-summit-photo.jpg",
      },
      {
        title: "AI Practice Case Collection",
        text: "A public-facing case-collection material showing recognized AI practice work.",
        image: "assets/media/ai-practical-case-collection.jpg",
      },
    ],
  },
};

// helper to make body paragraphs bilingual
// ============================================================
//  ★★★  如何添加你自己的内容 / How to add your own content  ★★★
// ------------------------------------------------------------
//  复制下面这个模板，粘到数组最前面，注意结尾的逗号）
// ============================================================

window.SITE_DATA = [
  {
    "id": "ai-4-collab-modes",
    "type": "article",
    "platform": "wechat",
    "featured": true,
    "articleOrder": 2,
    "date": "2026-06-07",
    "read": 7,
    "url": "https://mp.weixin.qq.com/s/NkY32W3pGNwGugW4jIrrLw",
    "cover": "https://jimmyluo.pages.dev/images/ai-4-collab-modes.jpg",
    "zh": {
      "title": "从逗乐到无人值守：AI 协作 4 大模式，带你飞",
      "excerpt": "你现在用 AI 的「姿势」，决定了你能飞多高。从瞎聊到躺平，AI 协作有四个段位——弄清楚自己在哪一级，才知道瓶颈在哪。",
      "sub": "找准自己卡在哪里，从小步开始挪窝。",
      "tags": [
        "AI 协作",
        "工作流",
        "效率"
      ],
      "body": [
        {
          "t": "lead",
          "c": "在AI的世界里，你不进化，就是拨号上网。咱们跟AI打交道，有几个「段位」——弄清楚自己在哪个段位，才能看懂自己为什么还在地面摩擦，以及怎么往上爬。"
        },
        {
          "t": "h",
          "c": "四个段位"
        },
        {
          "t": "p",
          "c": "模式一是「闲聊」，门槛最低，产出基本是空气；模式二是「指令驱动」，开始把AI当工具人，但手动复制粘贴的速度就是效率天花板；模式三是「工作流自动化」，让AI自己跑流程——50封开发信从一整个下午压缩到20分钟，就是这么来的；模式四是「全自动智能体」，只给目标让AI自行规划执行，但目前稳定性有限，围观为主。"
        },
        {
          "t": "q",
          "c": "积木再精美，也架不住你拼航空母舰。找准段位，从小步开始挪窝。"
        },
        {
          "t": "p",
          "c": "别妄想一口气变成「躺平大师」。先把常用指令攒成模板，再尝试搭个能帮你跑两步路的半自动流程。路上不顺很正常——每解决一个卡点，就往前挪一步。"
        }
      ]
    },
    "en": {
      "title": "From Chatting to Autopilot: 4 Modes of AI Collaboration",
      "excerpt": "The way you use AI right now determines how high you can fly. There are four levels — figure out which one you're at, and you'll know exactly where the ceiling is.",
      "sub": "Find where you're stuck, then take small steps forward.",
      "tags": [
        "AI Collaboration",
        "Workflow",
        "Productivity"
      ],
      "body": [
        {
          "t": "lead",
          "c": "In the world of AI, if you don't evolve, you're on dial-up. There are four levels of AI collaboration — knowing which one you're at reveals both your bottleneck and your path forward."
        },
        {
          "t": "h",
          "c": "The Four Levels"
        },
        {
          "t": "p",
          "c": "Level 1 is casual chat — zero barrier, near-zero output. Level 2 is instruction-driven prompting — useful, but your copy-paste speed is the efficiency ceiling. Level 3 is workflow automation — let AI run full processes; that's how 50 outreach emails went from a full afternoon to 20 minutes. Level 4 is fully autonomous agents — give it a goal and let it run, though today's reliability means watching from the sidelines."
        },
        {
          "t": "q",
          "c": "Even the most elegant building blocks can't build an aircraft carrier. Find your level, then move forward one small step at a time."
        },
        {
          "t": "p",
          "c": "Don't try to leap straight to autopilot. Start by turning your most-used prompts into templates, then try building one small semi-automatic flow. Hitting walls is normal — every problem you solve is one step further."
        }
      ]
    }
  },
  {
    "id": "ai-scenarios",
    "type": "article",
    "platform": "wechat",
    "featured": true,
    "articleOrder": 3,
    "date": "2026-06-01",
    "read": 6,
    "url": "https://mp.weixin.qq.com/s/NANFsozDNYvKARcRbTtgSQ",
    "cover": "https://jimmyluo.pages.dev/images/ai-scenarios.jpg",
    "zh": {
      "title": "「缺场景」靠不靠谱？聊聊我的 AI 应用场景",
      "excerpt": "有强烈 AI 焦虑的朋友，往往 AI 用得也很少。「缺场景」到底靠不靠谱？答案也许正相反。",
      "sub": "从三个工作场景，聊聊为什么我从不缺 AI 的用武之地。",
      "tags": [
        "AI",
        "AI 编程",
        "效率"
      ],
      "body": [
        {
          "t": "lead",
          "c": "如今 AI 技术一日千里，让很多人兴奋，也让更多人感到焦虑，担心被时代抛下。在与朋友交流中我发现一个有趣的现象：有强烈 AI 焦虑的朋友，往往 AI 用得也很少。问他们为什么用得少，普遍的回答是「缺少应用场景」。"
        },
        {
          "t": "p",
          "c": "那么，「缺场景」究竟靠不靠谱？这个答案让我既熟悉又疑惑——因为我的情况恰恰相反，尤其在掌握了 AI 编程这项关键技能后，AI 的应用场景变得非常多。"
        },
        {
          "t": "h",
          "c": "我的三个应用场景"
        },
        {
          "t": "p",
          "c": "为了提效，我用 AI 编程写了一个开发信自动生成工具。有了它，过去 4 个多小时的工作量现在三十分钟左右就能搞定，而且客户开发效果更好，我也因此被邀请到「得到」做 AI 落地分享。"
        },
        {
          "t": "p",
          "c": "你可能觉得，那是因为我懂 AI 编程才用得起来。实际恰恰相反：在学会 AI 编程之前，我就已经在大量使用 AI——正是在使用中要解决大量重复劳动，才萌生了用编程把 AI 工作自动化的想法。"
        },
        {
          "t": "p",
          "c": "排版也有突破。给公众号文章排版一直困扰我，太麻烦，常常文章写好了都不想发。没有合适工具，我干脆用 AI 编程写了一个公众号排版程序：用 Markdown 写好文章、配好图，运行程序就能自动排成我喜欢的格式并存进草稿箱，连封面和配图上传都不用我管。"
        },
        {
          "t": "p",
          "c": "再看教育场景。朋友想让孩子跟我学 AI、学会自学。了解情况后，我特意用 AI 写了一个游戏来教他。生活中我并不玩游戏，但写游戏挺有趣，能学到很多新东西。孩子在学校也学编程，我问他按现在的进度自己写出这款游戏要多久，他说「几年」；而以我的经验，让他半个月用 AI 编程做出来并不难。"
        },
        {
          "t": "q",
          "c": "看到这儿你也能感觉到：我并不缺 AI 的应用场景。"
        },
        {
          "t": "h",
          "c": "应用场景为什么会变少"
        },
        {
          "t": "p",
          "c": "我不缺场景，很大程度是因为掌握了 AI 编程。那不具备这个技能的普通朋友，为什么会觉得自己缺场景？我归纳为三个因素。"
        },
        {
          "t": "p",
          "c": "其一，对 AI 能力的认知不足。很多人对 AI 的理解止步于随手用过的一两款产品，没去探究自己用的 AI 与全球顶尖 AI 的差距，也不了解最强模型各自擅长什么、如何组合使用。缺乏这些认知，就很难找到匹配自己场景的工具。"
        },
        {
          "t": "p",
          "c": "其二，AI 使用经验的匮乏。认知不足直接导致经验不足：没找到合适工具，结果不如人意、甚至不如手动来得快，自然就少用；越少用经验越少，少到即便看见绝佳场景，也不知道怎么用 AI。"
        },
        {
          "t": "p",
          "c": "其三，没有持续用 AI 提升效率。即便受前两个因素影响，其实生活和工作中的很多问题都能尝试用 AI 辅助。坚持用 AI 提效，会逼着你尝试更多工具、补足认知；用得多了经验自然多，能发现的场景也就多了。多数人没有持续这样做，对身边的场景视而不见也就在情理之中。"
        },
        {
          "t": "p",
          "c": "明白了原因就好办——解决方案很简单：反过来做。"
        },
        {
          "t": "q",
          "c": "持续练习像滚雪球：每解决一个小问题，就获得一次正反馈，正反馈反过来提升认知和经验，形成可复现的飞轮效应。"
        },
        {
          "t": "p",
          "c": "把 AI 用起来，去解决生活里的小问题，持续用它提升效率。每一次小小的突破都会带来一次正反馈，正反馈积累多了，应用场景就会慢慢浮现出来——只要我们不假装看不见。"
        }
      ]
    },
    "en": {
      "title": "Is \"No Use Cases\" a Real Excuse? On Finding Scenarios for AI",
      "excerpt": "(English translation in progress) The friends with the most AI anxiety tend to use AI the least.",
      "sub": "English translation coming soon — switch to 中文 for the full piece.",
      "tags": [
        "AI",
        "AI Coding",
        "Productivity"
      ],
      "body": [
        {
          "t": "lead",
          "c": "The full English translation is on the way. For now, switch the language toggle to 中文 to read this article in full."
        }
      ]
    }
  },
  {
    "id": "deodao-ai-stage",
    "type": "article",
    "platform": "wechat",
    "featured": true,
    "articleOrder": 1,
    "date": "2025-07-12",
    "read": 8,
    "url": "https://mp.weixin.qq.com/s/lG6keg0Z4oFmJGiR1klRjg",
    "cover": "https://jimmyluo.pages.dev/images/deodao-ai-stage.jpg",
    "zh": {
      "title": "我与罗振宇同台：一个普通人在 AI 落地大会的现场感悟",
      "excerpt": "第一次与神交十年的罗振宇老师同台，带着「何德何能」的念头上台，下台时找到了答案——也许我们真的是一类人。",
      "sub": "勇敢行动 × 用好工具 × 聚焦挑战，AI 成长飞轮的由来。",
      "tags": [
        "AI 落地",
        "成长",
        "得到"
      ],
      "body": [
        {
          "t": "lead",
          "c": "7月12日，站在AI落地大会的聚光灯下，我第一次与神交十年的罗振宇老师和快刀青衣老师同台。带着「何德何能」的念头上台，下台时，我有了答案。"
        },
        {
          "t": "p",
          "c": "台上六位分享者，没有一个是「天才选手」。但我们有共同点：在关键时刻选择了动手、尝试、分享、坚持。勇敢、务实、乐于分享、愿意相信运气——正是这种行动信仰，让我们走在了彼此可见的轨道上。"
        },
        {
          "t": "h",
          "c": "AI 成长飞轮"
        },
        {
          "t": "p",
          "c": "把这段经历抽象下来，可以归纳为三个要素：勇敢行动——遇到问题先迈出0.1步，一行动就创新；用好工具——AI是可穿戴的超能力，人类进化的主战场早已从基因移到了工具；聚焦挑战——AI是扳手，拧紧的是你自己的螺丝，始终把精力放在解决自身实际问题上。"
        },
        {
          "t": "q",
          "c": "普通人的努力，在长期主义的复利下，会积累成奇迹。"
        },
        {
          "t": "p",
          "c": "所谓成功，不过是做好自己的事，等待随机事件来。我们一开始没想着获得这样的运气，只想着用好AI解决自己遇到的重要问题——最终不仅解决了问题，还碰上了意外的好运。"
        }
      ]
    },
    "en": {
      "title": "On Stage with Luo Zhenyu: What I Learned at an AI Summit",
      "excerpt": "Standing on stage with someone I'd admired for ten years, I kept asking myself: 'What have I done to deserve this?' By the end, I had an answer.",
      "sub": "Brave action × right tools × focused challenges — the AI growth flywheel.",
      "tags": [
        "AI in Practice",
        "Growth",
        "Dedao"
      ],
      "body": [
        {
          "t": "lead",
          "c": "On July 12th, I shared a stage for the first time with Luo Zhenyu — someone I'd followed for ten years — at an AI application summit. I walked on asking 'who am I to be here?' I walked off with an answer."
        },
        {
          "t": "p",
          "c": "None of the six speakers were 'genius-track' people. But we shared something: at key moments, we all chose to act, try, share, and keep going. That action-first belief put us on paths where we could find each other."
        },
        {
          "t": "h",
          "c": "The AI Growth Flywheel"
        },
        {
          "t": "p",
          "c": "Three elements: brave action — when stuck, take even 0.1 steps forward; use good tools — AI is wearable superpowers, and human evolution has long since shifted from genes to tools; stay focused on your own challenges — AI is a wrench, and what you're tightening is your own bolts."
        },
        {
          "t": "q",
          "c": "Ordinary effort, compounded over time under long-termism, has a chance to become something extraordinary."
        },
        {
          "t": "p",
          "c": "Success is just doing your own work well and waiting for a random event to land. We never set out to get lucky — we just tried to use AI to solve real problems. The unexpected bonus came on its own."
        }
      ]
    }
  }
];
