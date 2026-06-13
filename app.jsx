/* ============================================================
   app.jsx — state (theme / language / filter / view / tweaks)
   ============================================================ */

const ACCENTS = {
  default: { zh: "随主题", en: "Theme", a: null, b: null },
  ice:     { zh: "冰蓝",   en: "Ice",    a: "#5ad1ff", b: "#6f8cff" },
  violet:  { zh: "电紫",   en: "Violet", a: "#9b6bff", b: "#c46bff" },
  mint:    { zh: "薄荷",   en: "Mint",   a: "#4ff0c0", b: "#54e0a8" },
  rust:    { zh: "赤陶",   en: "Rust",   a: "#9a4b2e", b: "#b9603a" },
};

const LS = {
  get(k, f) { try { const v = localStorage.getItem("rln_" + k); return v == null ? f : JSON.parse(v); } catch { return f; } },
  set(k, v) { try { localStorage.setItem("rln_" + k, JSON.stringify(v)); } catch {} },
};

function ThemeSeg({ theme, setTheme }) {
  const opts = [
    { id: "terminal", glyph: ">_", title: "Terminal" },
    { id: "editorial", glyph: "Aa", title: "Editorial · lixiaolai-style" },
    { id: "luminous", glyph: "◈", title: "Luminous" },
  ];
  return (
    <div className="seg icon-seg" role="group" aria-label="Visual direction">
      {opts.map(o => (
        <button key={o.id} className={theme === o.id ? "on" : ""} title={o.title}
          onClick={() => setTheme(o.id)}>{o.glyph}</button>
      ))}
    </div>
  );
}

function App() {
  const [theme, setTheme] = useState(() => LS.get("theme", "editorial"));
  const [lang, setLang] = useState(() => LS.get("lang", "zh"));
  const [filter, setFilter] = useState("all");
  const [view, setView] = useState(() => LS.get("view", "grid"));
  const [open, setOpen] = useState(null);
  // tweak knobs
  const [accent, setAccent] = useState(() => LS.get("accent", "default"));
  const [density, setDensity] = useState(() => LS.get("density", "regular"));
  const [dropcap, setDropcap] = useState(() => LS.get("dropcap", true));
  const [motion, setMotion] = useState(() => LS.get("motion", true));
  const [ticker, setTicker] = useState(() => LS.get("ticker", true));

  // Re-render when a cover is auto-fetched so Reader also picks it up
  const [, _bumpCovers] = useState(0);
  useEffect(() => {
    const handler = () => _bumpCovers(v => v + 1);
    window.addEventListener("rln_cover_fetched", handler);
    return () => window.removeEventListener("rln_cover_fetched", handler);
  }, []);

  useEffect(() => { document.documentElement.setAttribute("data-theme", theme); LS.set("theme", theme); }, [theme]);
  useEffect(() => { document.documentElement.lang = lang === "zh" ? "zh-CN" : "en"; LS.set("lang", lang); }, [lang]);
  useEffect(() => { LS.set("view", view); }, [view]);
  useEffect(() => {
    const el = document.documentElement, ac = ACCENTS[accent];
    if (ac && ac.a) { el.style.setProperty("--accent", ac.a); el.style.setProperty("--accent-2", ac.b); }
    else { el.style.removeProperty("--accent"); el.style.removeProperty("--accent-2"); }
    LS.set("accent", accent);
  }, [accent]);
  useEffect(() => { document.documentElement.setAttribute("data-density", density); LS.set("density", density); }, [density]);
  useEffect(() => { document.documentElement.setAttribute("data-dropcap", dropcap ? "on" : "off"); LS.set("dropcap", dropcap); }, [dropcap]);
  useEffect(() => { document.body.classList.toggle("no-motion", !motion); LS.set("motion", motion); }, [motion]);
  useEffect(() => { LS.set("ticker", ticker); }, [ticker]);

  useReveal();

  const t = window.UI[lang];
  // Merge localStorage cover overrides (set by 封面提取工具)
  const savedCovers = (() => { try { return JSON.parse(localStorage.getItem("rln_covers") || "{}"); } catch { return {}; } })();
  const data = window.SITE_DATA.map(item => {
    const savedCover = savedCovers[item.id];
    return !item.cover && savedCover ? { ...item, cover: savedCover } : item;
  });
  const featured = data.filter(d => d.featured);
  const filtered = data.filter(d => filter === "all" || d.type === filter);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: "smooth" });
  };

  return (
    <div className="app">
      <header className="nav">
        <div className="wrap nav-in">
          <a className="brand" href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
            <span className="brand-mark">罗</span>
            <div>
              <div className="brand-name">{lang === "zh" ? "罗军" : "Luo Jun"}</div>
              <div className="brand-sub">JimmyLuo</div>
            </div>
          </a>
          <div className="nav-spacer"></div>
          <nav className="nav-links">
            <a className="nav-link" href="#work" onClick={(e) => { e.preventDefault(); scrollTo("work"); }}>{t.navWork}</a>
            <a className="nav-link" href="#about" onClick={(e) => { e.preventDefault(); scrollTo("about"); }}>{t.navAbout}</a>
          </nav>
          <ThemeSeg theme={theme} setTheme={setTheme} />
          <div className="seg" role="group" aria-label="Language">
            <button className={lang === "zh" ? "on" : ""} onClick={() => setLang("zh")}>中</button>
            <button className={lang === "en" ? "on" : ""} onClick={() => setLang("en")}>EN</button>
          </div>
        </div>
      </header>

      <main key={lang + theme} className="swap">
        <section className="wrap hero">
          <div className="hero-eyebrow"><span className="dot"></span>{t.heroEyebrow}</div>
          <h1>{t.heroLine1}<br /><span className="grad">{t.heroGrad}</span></h1>
          <p className="hero-lede">{t.heroLede}</p>
          <div className="hero-cta">
            <button className="btn btn-primary" onClick={() => scrollTo("work")}>{t.ctaRead}
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
            </button>
            <button className="btn btn-ghost" onClick={() => scrollTo("about")}>{t.ctaSubscribe}</button>
          </div>
          {ticker && <Currently lang={lang} />}
        </section>

        <section className="wrap sec" id="work">
          <div className="sec-head">
            <div className="sec-title"><span className="hash">★</span>{t.featTitle}</div>
            <div className="sec-desc">{t.featDesc}</div>
          </div>
          <div className="grid feat">
            {featured.map((item, i) => (
              <div className="reveal" key={item.id} style={{ transitionDelay: (i * 70) + "ms" }}>
                <Card item={item} lang={lang} big={i === 0} onOpen={setOpen} />
              </div>
            ))}
          </div>
        </section>

        <section className="wrap sec">
          <div className="sec-head">
            <div className="sec-title"><span className="hash">#</span>{t.libTitle}</div>
            <div className="view-toggle" role="group" aria-label="View">
              <button className={view === "grid" ? "on" : ""} title={t.viewGrid} onClick={() => setView("grid")}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor"><rect x="0" y="0" width="6" height="6" rx="1"/><rect x="8" y="0" width="6" height="6" rx="1"/><rect x="0" y="8" width="6" height="6" rx="1"/><rect x="8" y="8" width="6" height="6" rx="1"/></svg>
              </button>
              <button className={view === "list" ? "on" : ""} title={t.viewList} onClick={() => setView("list")}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor"><rect x="0" y="1" width="14" height="2" rx="1"/><rect x="0" y="6" width="14" height="2" rx="1"/><rect x="0" y="11" width="14" height="2" rx="1"/></svg>
              </button>
            </div>
          </div>
          <div className="chips" style={{ marginBottom: 22 }}>
            {window.TYPES.map(ty => {
              const n = ty.id === "all" ? data.length : data.filter(d => d.type === ty.id).length;
              return (
                <button key={ty.id} className={"chip" + (filter === ty.id ? " on" : "")} onClick={() => setFilter(ty.id)}>
                  {ty[lang]}<span className="ct">{String(n).padStart(2, "0")}</span>
                </button>
              );
            })}
          </div>
          {filtered.length === 0 ? (
            <div className="grid"><div className="empty">{t.emptyMsg}</div></div>
          ) : view === "grid" ? (
            <div className="grid">
              {filtered.map((item, i) => (
                <div className="reveal" key={item.id} style={{ transitionDelay: ((i % 3) * 60) + "ms" }}>
                  <Card item={item} lang={lang} onOpen={setOpen} />
                </div>
              ))}
            </div>
          ) : (
            <div className="index-list reveal in">
              {filtered.map((item, i) => (
                <IndexRow key={item.id} item={item} lang={lang} n={i + 1} onOpen={setOpen} />
              ))}
            </div>
          )}
        </section>

        <About lang={lang} />
        <Footer lang={lang} />
      </main>

      {open && <Reader item={open} lang={lang} onClose={() => setOpen(null)} />}

      <TweaksHost lang={lang}
        accent={accent} setAccent={setAccent}
        density={density} setDensity={setDensity}
        dropcap={dropcap} setDropcap={setDropcap}
        motion={motion} setMotion={setMotion}
        ticker={ticker} setTicker={setTicker} />
    </div>
  );
}

/* ---- Tweaks panel (additive visual knobs) ---- */
function TweaksHost({ lang, accent, setAccent, density, setDensity, dropcap, setDropcap, motion, setMotion, ticker, setTicker }) {
  if (typeof TweaksPanel === "undefined") return null;
  const zh = lang === "zh";
  const accOpts = Object.keys(ACCENTS).map(k => ({ value: k, label: ACCENTS[k][lang] }));
  return (
    <TweaksPanel title={zh ? "微调" : "Tweaks"}>
      <TweakSection label={zh ? "强调色" : "Accent"}>
        <TweakSelect label={zh ? "颜色" : "Color"} value={accent} options={accOpts} onChange={setAccent} />
      </TweakSection>
      <TweakSection label={zh ? "排布" : "Layout"}>
        <TweakRadio label={zh ? "密度" : "Density"} value={density} onChange={setDensity}
          options={[{ value: "regular", label: zh ? "标准" : "Regular" }, { value: "cozy", label: zh ? "紧凑" : "Cozy" }]} />
      </TweakSection>
      <TweakSection label={zh ? "细节" : "Details"}>
        <TweakToggle label={zh ? "状态滚动条" : "Currently ticker"} value={ticker} onChange={setTicker} />
        <TweakToggle label={zh ? "首字下沉" : "Drop cap"} value={dropcap} onChange={setDropcap} />
        <TweakToggle label={zh ? "动效" : "Motion"} value={motion} onChange={setMotion} />
      </TweakSection>
    </TweaksPanel>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
