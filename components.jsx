/* ============================================================
   components.jsx — shared UI (Nav, Hero, Card, Reader, About, Footer)
   All visual styling lives in styles.css; these emit semantic classes.
   ============================================================ */

const { useState, useEffect, useRef } = React;

/* ---- helpers ---- */
function fmtDate(iso, lang) {
  const d = new Date(iso);
  if (lang === "zh") return `${d.getFullYear()}.${String(d.getMonth()+1).padStart(2,"0")}.${String(d.getDate()).padStart(2,"0")}`;
  return d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal:not(.in)");
    if (!("IntersectionObserver" in window)) { els.forEach(e => e.classList.add("in")); return; }
    const io = new IntersectionObserver((ents) => {
      ents.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    els.forEach(e => io.observe(e));
    return () => io.disconnect();
  });
}

function isBlockedCoverUrl(url) {
  return typeof url === "string" && /\/\/[^/]*(mmbiz\.qpic\.cn|mmbiz\.qlogo\.cn|wx\.qlogo\.cn)\//i.test(url);
}

/* ---- platform badge ---- */
function Badge({ platform, lang }) {
  const p = window.PLATFORMS[platform];
  if (!p) return null;
  return (
    <span className="badge">
      <span className="pdot" style={{ background: p.color }}></span>
      {p[lang]}
    </span>
  );
}

/* ---- auto-cover fetch dedup ---- */
const _coverFetching = new Set();

/* ---- placeholder cover (auto-fetches via Microlink when url present) ---- */
function Cover({ item, lang }) {
  const [src, setSrc] = useState(isBlockedCoverUrl(item.cover) ? null : item.cover || null);
  const [imgErr, setImgErr] = useState(false);
  const [fetching, setFetching] = useState(false);

  // When parent re-renders with a newly resolved cover, pick it up
  useEffect(() => { if (item.cover && !isBlockedCoverUrl(item.cover)) setSrc(item.cover); }, [item.cover]);

  useEffect(() => {
    if (src || !item.url || item.url.includes("mp.weixin.qq.com/s/") || _coverFetching.has(item.id)) return;
    _coverFetching.add(item.id);
    setFetching(true);
    fetch(`https://api.microlink.io/?url=${encodeURIComponent(item.url)}`)
      .then(r => r.json())
      .then(data => {
        const url = data?.data?.image?.url;
        if (url && !isBlockedCoverUrl(url)) {
          // Persist to localStorage so App picks it up on next render
          try {
            const saved = JSON.parse(localStorage.getItem("rln_covers") || "{}");
            saved[item.id] = url;
            localStorage.setItem("rln_covers", JSON.stringify(saved));
          } catch {}
          setSrc(url);
          // Tell App to re-render so Reader also gets the cover
          window.dispatchEvent(new Event("rln_cover_fetched"));
        }
      })
      .catch(() => {})
      .finally(() => setFetching(false));
  }, [item.id, item.url]);

  const label = item.type === "video" ? "VIDEO FRAME" : item.type === "photo" ? "PHOTO" : "COVER IMAGE";
  const showImg = src && !imgErr;
  return (
    <div className="cover">
      {showImg
        ? <img className="cover-img" src={src} alt="" loading="lazy" onError={() => setImgErr(true)} />
        : <div className="cover-ph">
            <span className="tag" style={fetching ? { opacity: .45 } : {}}>
              {fetching ? (lang === "zh" ? "获取封面…" : "Loading…") : label}
            </span>
          </div>}
      <div className="cover-grad"></div>
      <Badge platform={item.platform} lang={lang} />
      {item.type === "video" && (
        <React.Fragment>
          <span className="play"><span className="pbtn"><svg width="18" height="18" viewBox="0 0 18 18"><path d="M4 2l12 7-12 7z"/></svg></span></span>
          <span className="vlen">{item.length}</span>
        </React.Fragment>
      )}
      {item.type === "photo" && (
        <span className="photo-count">
          <svg width="12" height="12" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.3"><rect x="1" y="1" width="12" height="12" rx="1.5"/><path d="M1 9l3.5-3 3 2.5L11 5l2 2"/></svg>
          {item.count} {window.UI[lang].photos}
        </span>
      )}
    </div>
  );
}

/* ---- CURRENTLY ticker ---- */
function Currently({ lang }) {
  const t = window.UI[lang];
  const items = t.currently;
  const line = (keyPrefix) => items.map((pair, i) => (
    <span className="tick" key={keyPrefix + i}>{pair[0]} <b>{pair[1]}</b></span>
  ));
  return (
    <div className="currently">
      <div className="currently-label"><span className="lv"></span>{t.nowLabel}</div>
      <div className="currently-track">
        <div className="currently-move">{line("a")}{line("b")}</div>
      </div>
    </div>
  );
}

/* ---- numbered index row ---- */
function IndexRow({ item, lang, n, onOpen }) {
  const t = window.UI[lang], c = item[lang], p = window.PLATFORMS[item.platform];
  const right = item.type === "video" ? item.length
    : item.type === "photo" ? `${item.count} ${t.photos}` : `${item.read} ${t.minRead}`;
  return (
    <button className="index-row" onClick={() => onOpen(item)}>
      <span className="index-num">{String(n).padStart(2, "0")}</span>
      <span className="index-main">
        <span className="index-title">{c.title}</span>
        <span className="index-sub">
          <span className="pdot" style={{ background: p.color }}></span>{p[lang]}
          <span>·</span>{fmtDate(item.date, lang)}
        </span>
      </span>
      <span className="index-right"><span>{right}</span><span className="arrow">→</span></span>
    </button>
  );
}

/* ---- content card ---- */
function Card({ item, lang, big, onOpen }) {
  const t = window.UI[lang];
  const c = item[lang];
  const cta = item.type === "video" ? t.watch : item.type === "photo" ? t.viewSet : t.readMore;
  const metaRight = item.type === "video" ? item.length
    : item.type === "photo" ? `${item.count} ${t.photos}`
    : `${item.read} ${t.minRead}`;
  return (
    <button className={"card" + (big ? " big" : "") + (item.type === "photo" ? " photo" : "")} onClick={() => onOpen(item)}>
      <Cover item={item} lang={lang} />
      <div className="card-body">
        <div className="card-meta">
          <span>{fmtDate(item.date, lang)}</span>
          <span className="sepd"></span>
          <span>{metaRight}</span>
        </div>
        <div className="card-title">{c.title}</div>
        <div className="card-excerpt">{c.excerpt}</div>
        <div className="card-foot">
          <div className="tagrow">{c.tags.slice(0, big ? 3 : 2).map(tg => <span key={tg} className="minitag">{tg}</span>)}</div>
          <span className="arrow">{cta} →</span>
        </div>
      </div>
    </button>
  );
}

/* ---- reader overlay ---- */
function Reader({ item, lang, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [onClose]);
  if (!item) return null;
  const t = window.UI[lang], c = item[lang], p = window.PLATFORMS[item.platform];
  const metaRight = item.type === "video" ? item.length
    : item.type === "photo" ? `${item.count} ${t.photos}`
    : `${item.read} ${t.minRead}`;
  return (
    <div className="reader-back" onClick={onClose}>
      <button className="reader-x" onClick={onClose} aria-label="Close">×</button>
      <article className="reader" onClick={(e) => e.stopPropagation()}>
        <div className="reader-cover">
          {item.cover
            ? <img className="cover-img" src={item.cover} alt="" onError={e => e.currentTarget.style.display="none"} />
            : <div className="cover-ph"><span className="tag">{item.type === "photo" ? "GALLERY" : item.type === "video" ? "VIDEO" : "COVER IMAGE"}</span></div>}
          <div className="cover-grad"></div>
          <Badge platform={item.platform} lang={lang} />
          {item.type === "video" && <span className="play"><span className="pbtn"><svg width="20" height="20" viewBox="0 0 18 18"><path d="M4 2l12 7-12 7z"/></svg></span></span>}
        </div>
        <div className="reader-inner">
          <div className="reader-kicker">
            <span className="pdot" style={{ width: 7, height: 7, borderRadius: "50%", background: p.color, display: "inline-block" }}></span>
            <span>{p[lang]}</span><span>·</span><span>{fmtDate(item.date, lang)}</span>
          </div>
          <h2>{c.title}</h2>
          <p className="reader-sub">{c.sub}</p>
          <div className="reader-byline">
            <span>{t.by} {t.bylineBy}</span><span>·</span><span>{metaRight}</span>
            {item.url && (
              <a className="byline-cta" href={item.url} target="_blank" rel="noopener noreferrer"
                onClick={(e) => { e.preventDefault(); window.open(item.url, "_blank", "noopener"); }}>
                {t.origin}
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 2H2v10h10V8M9 1h4v4M13 1L6.5 7.5"/></svg>
              </a>
            )}
          </div>
          <div className="reader-body">
            {c.body.map((b, i) => {
              if (b.t === "h") return <h3 key={i}>{b.c}</h3>;
              if (b.t === "q") return <blockquote key={i}>{b.c}</blockquote>;
              return <p key={i} className={b.t === "lead" ? "lead" : ""}>{b.c}</p>;
            })}
            <a className="orig-link" href={item.url || "#"} target={item.url ? "_blank" : undefined} rel="noopener noreferrer"
              onClick={item.url ? (e) => { e.preventDefault(); window.open(item.url, "_blank", "noopener"); } : (e) => e.preventDefault()}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M6 2H2v10h10V8M9 1h4v4M13 1L6.5 7.5"/></svg>
              {t.origin} · {p[lang]}
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}

/* ---- about strip ---- */
function About({ lang }) {
  const t = window.UI[lang];
  return (
    <section className="wrap" id="about">
      <div className="about reveal">
        <div className="about-grid">
          <div>
            <h3>{t.aboutTitle}</h3>
            <p>{t.aboutP1}</p>
            <p>{t.aboutP2}</p>
          </div>
          <div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-mute)", letterSpacing: ".08em", textTransform: "uppercase", marginBottom: 14 }}>{t.topicsTitle}</div>
            <div className="topics">
              {window.TOPICS.map((tp, i) => (
                <div className="topic" key={i}>
                  <span className="ti">{tp.icon}</span>
                  <div>
                    <div className="tt">{tp[lang][0]}</div>
                    <div className="td">{tp[lang][1]}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---- footer ---- */
function Footer({ lang }) {
  const t = window.UI[lang];
  const socials = [
    { k: "wechat", c: "#3fc463" }, { k: "weibo", c: "#ff8a3d" }, { k: "channel", c: "#ff5a7a" },
  ];
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div>
          <div className="brand" style={{ marginBottom: 16 }}>
            <span className="brand-mark">罗</span>
            <div>
              <div className="brand-name">{lang === "zh" ? "罗军" : "Luo Jun"} <span style={{ color: "var(--text-mute)", fontWeight: 400 }}>· JimmyLuo</span></div>
              <div className="brand-sub">Content Platform</div>
            </div>
          </div>
          <p className="footer-tag">{t.footTag}</p>
        </div>
        <div className="socials">
          {socials.map(s => (
            <a className="social" href="#" key={s.k} onClick={(e) => e.preventDefault()}>
              <span className="sdot" style={{ background: s.c }}></span>{window.PLATFORMS[s.k][lang]}
            </a>
          ))}
          <a className="social" href="#" onClick={(e) => e.preventDefault()}><span className="sdot" style={{ background: "var(--text-mute)" }}></span>Email</a>
        </div>
      </div>
      <div className="wrap copyright" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
        <span>© 2024–2026 {lang === "zh" ? "罗军" : "Luo Jun"} (JimmyLuo). {t.rights}.</span>
        <a href="封面提取工具.html" style={{ fontSize: 11, fontFamily: "var(--font-mono)", color: "var(--text-mute)", letterSpacing: ".08em", opacity: .6, transition: "opacity .15s" }}
          onMouseEnter={e => e.currentTarget.style.opacity = 1} onMouseLeave={e => e.currentTarget.style.opacity = .6}>
          {lang === "zh" ? "🛠 封面提取工具" : "🛠 Cover Extractor"}
        </a>
      </div>
    </footer>
  );
}

Object.assign(window, { Badge, Cover, Card, Reader, About, Footer, Currently, IndexRow, useReveal, fmtDate });
