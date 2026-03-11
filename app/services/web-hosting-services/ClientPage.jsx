"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

/* ═══════════════════════════════════════════════════════════════
   GLOBAL CSS
═══════════════════════════════════════════════════════════════ */
const CSS = `
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');

.host-root {
  --bg:        #f7f5f0;
  --white:     #ffffff;
  --ink:       #0f1117;
  --mid:       #64748b;
  --muted:     #94a3b8;
  --line:      #e2ddd6;
  --blue:      #1d4ed8;
  --blue2:     #3b82f6;
  --blue-lt:   #eff6ff;
  --blue-md:   #dbeafe;
  --cyan:      #06b6d4;
  --green:     #10b981;
  --amber:     #f59e0b;
  --r:         16px;
  --shadow-sm: 0 2px 8px rgba(15,17,23,.06);
  --shadow-md: 0 8px 28px rgba(15,17,23,.09);
  --shadow-lg: 0 24px 56px rgba(15,17,23,.12);
}

.host-root *, .host-root *::before, .host-root *::after { box-sizing: border-box; margin: 0; padding: 0; }

.host-root {
  font-family: 'Plus Jakarta Sans', sans-serif;
  background: var(--bg);
  color: var(--ink);
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* ── Keyframes ── */
@keyframes fadeUp    { from{opacity:0;transform:translateY(36px)} to{opacity:1;transform:translateY(0)} }
@keyframes fadeIn    { from{opacity:0} to{opacity:1} }
@keyframes slideX    { from{transform:scaleX(0)} to{transform:scaleX(1)} }
@keyframes floatY    { 0%,100%{transform:translateY(0) rotate(0deg)} 50%{transform:translateY(-14px) rotate(.5deg)} }
@keyframes marquee   { from{transform:translateX(0)} to{transform:translateX(-50%)} }
@keyframes ripple    { 0%{transform:scale(1);opacity:.5} 100%{transform:scale(2.8);opacity:0} }
@keyframes blobA     { 0%,100%{border-radius:60% 40% 30% 70%/60% 30% 70% 40%} 50%{border-radius:30% 60% 70% 40%/50% 60% 30% 60%} }
@keyframes badgeIn   { from{opacity:0;transform:scale(.7) translateY(-8px)} to{opacity:1;transform:scale(1) translateY(0)} }

/* ── Scroll reveal ── */
.rv { opacity:0; transform:translateY(32px); transition:opacity .75s cubic-bezier(.22,1,.36,1), transform .75s cubic-bezier(.22,1,.36,1); }
.rv.on { opacity:1; transform:translateY(0); }
.rv-left { opacity:0; transform:translateX(-32px); transition:opacity .75s cubic-bezier(.22,1,.36,1), transform .75s cubic-bezier(.22,1,.36,1); }
.rv-left.on { opacity:1; transform:translateX(0); }
.rv-right { opacity:0; transform:translateX(32px); transition:opacity .75s cubic-bezier(.22,1,.36,1), transform .75s cubic-bezier(.22,1,.36,1); }
.rv-right.on { opacity:1; transform:translateX(0); }

/* ── Headline underline ── */


/* ── Float animation ── */
.floater { animation:floatY 7s ease-in-out infinite; }

/* ── Ticker ── */
.ticker-wrap { overflow:hidden; }
.ticker-inner { display:flex; width:max-content; animation:marquee 30s linear infinite; }
.ticker-inner:hover { animation-play-state:paused; }

/* ── Buttons ── */
.btn-primary {
  position:relative; overflow:hidden;
  background:linear-gradient(135deg, var(--blue) 0%, #2563eb 50%, #1e40af 100%);
  color:#fff; padding:15px 32px; border-radius:12px;
  font-family:'Plus Jakarta Sans',sans-serif; font-weight:700; font-size:.9rem; letter-spacing:.01em;
  border:none; cursor:pointer; text-decoration:none;
  display:inline-flex; align-items:center; gap:9px;
  transition:transform .22s, box-shadow .22s;
  box-shadow:0 4px 16px rgba(29,78,216,.35), inset 0 1px 0 rgba(255,255,255,.2);
}
.btn-primary::before {
  content:''; position:absolute; inset:0;
  background:linear-gradient(135deg,rgba(255,255,255,.18),transparent 60%);
  pointer-events:none;
}
.btn-primary::after {
  content:''; position:absolute; inset:0;
  background:rgba(255,255,255,.18); transform:translateX(-110%) skewX(-15deg);
  transition:transform .5s cubic-bezier(.22,1,.36,1);
}
.btn-primary:hover::after { transform:translateX(110%) skewX(-15deg); }
.btn-primary:hover { transform:translateY(-2px); box-shadow:0 12px 32px rgba(29,78,216,.45); }

.btn-amber {
  position:relative; overflow:hidden;
  background:linear-gradient(135deg, #f59e0b, #d97706);
  color:#fff; padding:15px 32px; border-radius:12px;
  font-family:'Plus Jakarta Sans',sans-serif; font-weight:700; font-size:.9rem; letter-spacing:.01em;
  border:none; cursor:pointer; text-decoration:none;
  display:inline-flex; align-items:center; gap:9px;
  transition:transform .22s, box-shadow .22s;
  box-shadow:0 4px 16px rgba(245,158,11,.4), inset 0 1px 0 rgba(255,255,255,.2);
}
.btn-amber::after {
  content:''; position:absolute; inset:0;
  background:rgba(255,255,255,.18); transform:translateX(-110%) skewX(-15deg);
  transition:transform .5s cubic-bezier(.22,1,.36,1);
}
.btn-amber:hover::after { transform:translateX(110%) skewX(-15deg); }
.btn-amber:hover { transform:translateY(-2px); box-shadow:0 12px 28px rgba(245,158,11,.5); }

.btn-ghost {
  background:rgba(255,255,255,.08); color:#fff;
  padding:15px 32px; border-radius:12px;
  font-family:'Plus Jakarta Sans',sans-serif; font-weight:600; font-size:.9rem;
  border:1.5px solid rgba(255,255,255,.22); cursor:pointer; text-decoration:none;
  display:inline-flex; align-items:center; gap:9px;
  backdrop-filter:blur(8px);
  transition:background .22s, transform .22s, border-color .22s;
}
.btn-ghost:hover { background:rgba(255,255,255,.18); transform:translateY(-2px); border-color:rgba(255,255,255,.4); }

.btn-outline {
  background:transparent; color:var(--ink);
  padding:15px 32px; border-radius:12px;
  font-family:'Plus Jakarta Sans',sans-serif; font-weight:700; font-size:.9rem;
  border:2px solid var(--line); cursor:pointer; text-decoration:none;
  display:inline-flex; align-items:center; gap:9px;
  transition:background .2s, border-color .2s, transform .22s;
}
.btn-outline:hover { background:var(--blue-lt); border-color:var(--blue); transform:translateY(-2px); color:var(--blue); }

/* ── Section label ── */
.slabel-pill {
  background:var(--blue-lt); color:var(--blue);
  padding:5px 14px; border-radius:999px;
  font-size:.68rem; font-weight:800; letter-spacing:.15em; text-transform:uppercase;
  display:inline-flex; align-items:center; gap:7px; margin-bottom:16px;
  border:1px solid var(--blue-md);
}
.slabel-pill::before { content:''; width:6px; height:6px; border-radius:50%; background:var(--blue); }

/* ── Live dot ── */
.live-dot { width:8px; height:8px; border-radius:50%; background:var(--green); position:relative; display:inline-block; flex-shrink:0; }
.live-dot::after { content:''; position:absolute; inset:-4px; border-radius:50%; background:var(--green); animation:ripple 1.8s ease-out infinite; }

/* ── D-Input ── */
.d-input {
  flex:1; padding:15px 22px; border-radius:12px;
  border:1.5px solid var(--line); font-family:'Plus Jakarta Sans',sans-serif;
  font-size:.95rem; background:var(--white); color:var(--ink);
  outline:none; transition:border-color .2s, box-shadow .2s;
  box-shadow:var(--shadow-sm);
}
.d-input:focus { border-color:var(--blue); box-shadow:0 0 0 4px rgba(29,78,216,.1); }
.d-input::placeholder { color:var(--muted); }

/* ── Pricing card ── */
.p-card {
  padding:0; border-radius:20px;
  border:1px solid var(--line);
  background:var(--white);
  display:flex; flex-direction:column;
  position:relative; overflow:hidden;
  transition:transform .3s cubic-bezier(.22,1,.36,1), box-shadow .3s, border-color .25s;
  box-shadow:var(--shadow-sm);
}
.p-card:hover { transform:translateY(-8px); box-shadow:0 32px 64px -16px rgba(29,78,216,.18); }
.p-card.popular { border-color:rgba(29,78,216,.3); box-shadow:0 8px 32px rgba(29,78,216,.12); }
.p-card-body { padding:28px; display:flex; flex-direction:column; flex:1; gap:0; }

/* ── Popular ribbon ── */
.ribbon {
  position:absolute; top:18px; right:-28px;
  background:linear-gradient(90deg,var(--blue),var(--cyan));
  color:#fff; font-size:.62rem; font-weight:800; letter-spacing:.14em;
  text-transform:uppercase; padding:5px 42px;
  transform:rotate(45deg); box-shadow:0 2px 10px rgba(29,78,216,.35);
  pointer-events:none;
}

/* ── Feature list ── */
.feat-item {
  display:flex; gap:10px; align-items:flex-start;
  font-size:.875rem; color:var(--mid); padding:8px 0;
  border-bottom:1px solid #f1ede8;
}
.feat-item:last-child { border-bottom:none; }

/* ── Domain pill ── */
.d-pill {
  padding:22px 16px; border-radius:16px; border:1px solid var(--line);
  background:var(--white); text-align:center;
  transition:transform .28s cubic-bezier(.22,1,.36,1), box-shadow .28s, border-color .2s;
  box-shadow:var(--shadow-sm);
  position:relative; overflow:hidden;
}
.d-pill::before {
  content:''; position:absolute; inset:0;
  background:linear-gradient(135deg,transparent 40%,rgba(255,255,255,.6));
  pointer-events:none;
}
.d-pill:hover { transform:translateY(-6px) scale(1.03); box-shadow:0 20px 48px -8px rgba(29,78,216,.16); border-color:var(--blue); }

/* ── Contact card ── */
.c-card {
  padding:26px; border-radius:var(--r); border:1px solid var(--line);
  background:var(--white); display:flex; flex-direction:column; gap:14px;
  transition:transform .28s cubic-bezier(.22,1,.36,1), box-shadow .28s, border-color .22s;
  box-shadow:var(--shadow-sm); overflow:hidden; position:relative;
  text-decoration:none; color:inherit;
}
.c-card::after {
  content:''; position:absolute; top:0; left:0; right:0; height:3px;
  background:linear-gradient(90deg, var(--blue), var(--cyan));
  transform:scaleX(0); transform-origin:left;
  transition:transform .3s cubic-bezier(.22,1,.36,1);
}
.c-card:hover::after { transform:scaleX(1); }
.c-card:hover { transform:translateY(-5px); box-shadow:0 20px 44px -10px rgba(29,78,216,.14); border-color:var(--blue-md); }

.c-icon {
  width:50px; height:50px; border-radius:14px;
  background:var(--blue-lt); display:flex; align-items:center; justify-content:center;
  transition:background .25s, transform .25s; flex-shrink:0;
}
.c-card:hover .c-icon { background:var(--blue); color:#fff; transform:scale(1.08) rotate(-4deg); }

/* ── Stat card ── */
.stat-card {
  padding:20px 24px; border-radius:14px;
  background:rgba(255,255,255,.9); backdrop-filter:blur(12px);
  border:1px solid rgba(255,255,255,.7);
  box-shadow:0 8px 24px rgba(15,17,23,.08);
  display:flex; flex-direction:column; gap:4px; min-width:110px;
}

/* ── Feature icon card ── */
.fi-card {
  padding:26px; border-radius:var(--r); border:1px solid var(--line);
  background:var(--white); display:flex; gap:18px; align-items:flex-start;
  transition:transform .26s cubic-bezier(.22,1,.36,1), box-shadow .26s, border-color .2s;
  box-shadow:var(--shadow-sm);
}
.fi-card:hover { transform:translateY(-5px); box-shadow:var(--shadow-lg); border-color:var(--blue-md); }
.fi-icon {
  width:52px; height:52px; border-radius:14px;
  display:flex; align-items:center; justify-content:center; flex-shrink:0;
  transition:transform .25s;
}
.fi-card:hover .fi-icon { transform:scale(1.1) rotate(-4deg); }

/* ── Contact info grid ── */
.contact-grid {
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(200px,1fr));
  gap:20px;
}
`;

/* ─── hook ─────────────────────────────────────────────── */
function useRv(thr = 0.07) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add("on");
          obs.disconnect();
        }
      },
      { threshold: thr, rootMargin: "0px 0px 100px 0px" },
    );
    obs.observe(el);
    const t = setTimeout(() => el.classList.add("on"), 1400);
    return () => {
      obs.disconnect();
      clearTimeout(t);
    };
  }, []);
  return ref;
}

/* ── FIX 1: Reveal wrapper component (was missing, used in ContactSection) ── */
function Reveal({ children, delay = 0 }) {
  const ref = useRv();
  return (
    <div ref={ref} className="rv" style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

/* ─── Section label pill ── */
function LabelPill({ text }) {
  return <div className="slabel-pill">{text}</div>;
}

/* ─── Pricing card ──────────────────────────────────────── */
function PricingCard({
  title,
  price,
  features,
  icon,
  popular = false,
  accent = "#1d4ed8",
  delay = 0,
}) {
  const r = useRv();
  const rgb = accent.replace("#", "");
  const toRgba = (hex, a) => {
    const r2 = parseInt(hex.slice(0, 2), 16),
      g = parseInt(hex.slice(2, 4), 16),
      b = parseInt(hex.slice(4, 6), 16);
    return `rgba(${r2},${g},${b},${a})`;
  };
  const col = rgb.length === 6 ? rgb : "1d4ed8";

  return (
    <div
      ref={r}
      className={`rv p-card${popular ? " popular" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* FIX 2: Ribbon renders based on boolean prop, not {popular} which renders nothing */}

      {/* coloured header band */}
      <div
        style={{
          height: 6,
          background: `linear-gradient(90deg, ${accent}, ${accent}99)`,
          borderRadius: "20px 20px 0 0",
        }}
      />

      <div className="p-card-body">
        {/* icon + title */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            marginBottom: 18,
          }}
        >
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: 14,
              background: `linear-gradient(135deg,${toRgba(col, 0.14)},${toRgba(col, 0.06)})`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: `1px solid ${toRgba(col, 0.18)}`,
            }}
          >
            <Image
              src={icon}
              alt={title}
              width={28}
              height={28}
              style={{ objectFit: "contain" }}
            />
          </div>
          <div>
            <div
              style={{
                fontSize: ".7rem",
                fontWeight: 700,
                color: "var(--muted)",
                letterSpacing: ".12em",
                textTransform: "uppercase",
                marginBottom: 2,
              }}
            >
              Plan
            </div>
            <h3
              style={{
                fontFamily: "'DM Serif Display',serif",
                fontSize: "1.18rem",
                fontWeight: 400,
                color: "var(--ink)",
              }}
            >
              {title}
            </h3>
          </div>
        </div>

        {/* price */}
        <div
          style={{
            background: `linear-gradient(135deg,${toRgba(col, 0.08)},${toRgba(col, 0.03)})`,
            border: `1px solid ${toRgba(col, 0.16)}`,
            borderRadius: 12,
            padding: "14px 18px",
            marginBottom: 22,
            display: "flex",
            alignItems: "baseline",
            gap: 6,
          }}
        >
          <span
            style={{
              fontFamily: "'DM Serif Display',serif",
              fontSize: "2rem",
              fontWeight: 400,
              color: accent,
              lineHeight: 1,
            }}
          >
            {price.split("/")[0]}
          </span>
          {price.includes("/") && (
            <span
              style={{
                fontSize: ".78rem",
                color: "var(--muted)",
                fontWeight: 600,
              }}
            >
              /{price.split("/")[1]}
            </span>
          )}
        </div>

        {/* features */}
        <ul
          style={{
            listStyle: "none",
            flex: 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          {features.map((f, i) => (
            <li key={i} className="feat-item">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                style={{ flexShrink: 0, marginTop: 1 }}
              >
                <circle cx="9" cy="9" r="9" fill={accent} fillOpacity=".12" />
                <path
                  d="M5.5 9l2.5 2.5 4.5-4.5"
                  stroke={accent}
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>{f}</span>
            </li>
          ))}
        </ul>

        <button
          className="btn-primary"
          style={{
            marginTop: 22,
            justifyContent: "center",
            background: `linear-gradient(135deg,${accent},${accent}cc)`,
            boxShadow: `0 4px 16px ${toRgba(col, 0.38)}`,
          }}
        >
          Get Started <span style={{ opacity: 0.7 }}>→</span>
        </button>
      </div>
    </div>
  );
}

/* ─── Section wrapper ───────────────────────────────────── */
function Section({ id, bg = "var(--white)", label, title, sub, children }) {
  const hRef = useRv();
  return (
    <section id={id} style={{ padding: "36px 24px", background: bg }}>
      <div style={{ maxWidth: 1400, margin: "0 auto" }}>
        <div
          ref={hRef}
          className="rv"
          style={{ textAlign: "center", marginBottom: 56 }}
        >
          <LabelPill text={label} />
          <h2
            style={{
              fontFamily: "'DM Serif Display',serif",
              fontSize: "clamp(2rem,4vw,3rem)",
              fontWeight: 400,
              letterSpacing: "-.02em",
              marginBottom: 14,
              lineHeight: 1.12,
              color: "var(--ink)",
            }}
          >
            {title}
          </h2>
          <p
            style={{
              color: "var(--mid)",
              maxWidth: 520,
              margin: "0 auto",
              lineHeight: 1.8,
              fontSize: "1rem",
            }}
          >
            {sub}
          </p>
        </div>
        {children}
      </div>
    </section>
  );
}

/* ─── Hero ──────────────────────────────────────────────── */
const Hero = () => (
  <section
    style={{
      position: "relative",
      padding: "104px 24px 92px",
      background: "var(--white)",
      overflow: "hidden",
    }}
  >
    <div
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        backgroundImage:
          "linear-gradient(var(--line) 1px,transparent 1px),linear-gradient(90deg,var(--line) 1px,transparent 1px)",
        backgroundSize: "56px 56px",
        opacity: 0.3,
      }}
    />
    <div
      style={{
        position: "absolute",
        top: "-10%",
        right: "-5%",
        width: 600,
        height: 600,
        borderRadius: "50%",
        zIndex: 0,
        pointerEvents: "none",
        background:
          "radial-gradient(circle,rgba(29,78,216,.07) 0%,transparent 70%)",
      }}
    />
    <div
      style={{
        position: "absolute",
        bottom: "-15%",
        left: "-5%",
        width: 500,
        height: 500,
        borderRadius: "50%",
        zIndex: 0,
        pointerEvents: "none",
        background:
          "radial-gradient(circle,rgba(6,182,212,.06) 0%,transparent 70%)",
      }}
    />
    <div
      style={{
        position: "absolute",
        top: "8%",
        right: "12%",
        width: 320,
        height: 320,
        zIndex: 0,
        pointerEvents: "none",
        background:
          "linear-gradient(135deg,rgba(29,78,216,.05),rgba(6,182,212,.04))",
        animation: "blobA 12s ease-in-out infinite",
        filter: "blur(1px)",
      }}
    />

    <div
      style={{
        maxWidth: 1380,
        margin: "0 auto",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: 56,
          justifyContent: "space-between",
        }}
      >
        {/* Text column */}
        <div style={{ flex: "1 1 440px", minWidth: 0 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 24,
              background: "rgba(16,185,129,.08)",
              border: "1px solid rgba(16,185,129,.2)",
              borderRadius: 999,
              padding: "7px 16px",
              opacity: 0,
              animation:
                "badgeIn .5s .1s cubic-bezier(.34,1.56,.64,1) forwards",
            }}
          >
            <span className="live-dot" />
            <span
              style={{
                fontSize: ".7rem",
                fontWeight: 800,
                color: "var(--green)",
                letterSpacing: ".12em",
                textTransform: "uppercase",
              }}
            >
              99.9% Uptime Guaranteed
            </span>
          </div>

          <h1
            style={{
              fontFamily: "'DM Serif Display',serif",
              fontSize: "clamp(2.6rem,5.5vw,4.4rem)",
              fontWeight: 600,
              lineHeight: 1.07,
              letterSpacing: "-.025em",
              marginBottom: 24,
            }}
          >
            <span
              style={{
                display: "block",
                opacity: 0,
                animation: "fadeUp .7s cubic-bezier(.22,1,.36,1) .3s forwards",
              }}
            >
              Reliable
            </span>
            <span
              style={{
                display: "block",
                opacity: 0,
                animation: "fadeUp .7s cubic-bezier(.22,1,.36,1) .44s forwards",
              }}
            >
              <span className="h-ul font-bold">Web Hosting</span>
            </span>
            <span
              style={{
                display: "block",
                opacity: 0,
                fontWeight: 600,
                animation: "fadeUp .7s cubic-bezier(.22,1,.36,1) .58s forwards",
                color: "var(--blue)",
              }}
            >
              {"& Domain Services"}
            </span>
          </h1>

          <p
            style={{
              fontSize: "1.05rem",
              color: "var(--mid)",
              lineHeight: 1.8,
              maxWidth: 480,
              marginBottom: 38,
              opacity: 0,
              animation: "fadeUp .7s .88s forwards",
            }}
          >
            High-performance hosting powered by SSD/NVMe, cloud redundancy,
            enterprise-grade security, and 24/7 expert support.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 12,
              marginBottom: 44,
              opacity: 0,
              animation: "fadeUp .6s 1.02s forwards",
            }}
          >
            <button className="btn-amber">✦ Get a Free Quote</button>
            <button className="btn-outline">View Plans →</button>
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 12,
              opacity: 0,
              animation: "fadeIn .6s 1.25s forwards",
            }}
          >
            {[
              { n: "NVMe", l: "Storage", icon: "⚡" },
              { n: "99.9%", l: "Uptime SLA", icon: "🛡" },
              { n: "24/7", l: "Support", icon: "💬" },
              { n: "Free", l: "SSL Certs", icon: "🔒" },
            ].map(({ n, l, icon }) => (
              <div key={l} className="stat-card">
                <div style={{ fontSize: "1.1rem", marginBottom: 2 }}>
                  {icon}
                </div>
                <div
                  style={{
                    fontFamily: "'DM Serif Display',serif",
                    fontSize: "1.45rem",
                    color: "var(--blue)",
                    lineHeight: 1,
                  }}
                >
                  {n}
                </div>
                <div
                  style={{
                    fontSize: ".62rem",
                    color: "var(--muted)",
                    fontWeight: 700,
                    letterSpacing: ".1em",
                    textTransform: "uppercase",
                    marginTop: 2,
                  }}
                >
                  {l}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Illustration column */}
        <div
          style={{
            flex: "1 1 300px",
            display: "flex",
            justifyContent: "center",
            opacity: 0,
            animation: "fadeIn .9s .65s forwards",
          }}
        >
          <div style={{ position: "relative" }}>
            <div
              style={{
                position: "absolute",
                inset: -20,
                borderRadius: "50%",
                border: "1px dashed rgba(29,78,216,.12)",
                animation: "floatY 8s ease-in-out infinite",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: -50,
                borderRadius: "50%",
                border: "1px dashed rgba(29,78,216,.07)",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: -60,
                borderRadius: "50%",
                background:
                  "radial-gradient(circle,rgba(29,78,216,.08),transparent 70%)",
              }}
            />
            <Image
              src="https://cdni.iconscout.com/illustration/premium/thumb/web-hosting-service-illustration-svg-download-png-4363159.png"
              width={1600}
              height={1100}
              alt="Web Hosting"
              className="floater"
              style={{
                width: "100%",
                maxWidth: 1160,
                filter: "drop-shadow(0 28px 52px rgba(29,78,216,.14))",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "12%",
                left: "-14%",
                background: "var(--white)",
                borderRadius: 14,
                padding: "12px 18px",
                boxShadow: "0 8px 28px rgba(15,17,23,.12)",
                border: "1px solid var(--line)",
                display: "flex",
                alignItems: "center",
                gap: 10,
                animation: "floatY 5s ease-in-out infinite",
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 10,
                  background: "rgba(16,185,129,.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <div>
                <div
                  style={{
                    fontSize: ".72rem",
                    fontWeight: 700,
                    color: "var(--ink)",
                  }}
                >
                  Site Deployed
                </div>
                <div
                  style={{
                    fontSize: ".62rem",
                    color: "var(--green)",
                    fontWeight: 600,
                  }}
                >
                  Just now
                </div>
              </div>
            </div>
            <div
              style={{
                position: "absolute",
                top: "10%",
                right: "-10%",
                background: "var(--white)",
                borderRadius: 14,
                padding: "10px 16px",
                boxShadow: "0 8px 28px rgba(15,17,23,.12)",
                border: "1px solid var(--line)",
                animation: "floatY 6s 1.5s ease-in-out infinite",
              }}
            >
              <div
                style={{
                  fontSize: ".7rem",
                  fontWeight: 700,
                  color: "var(--muted)",
                  marginBottom: 2,
                }}
              >
                Server Load
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <div
                  style={{
                    height: 6,
                    width: 80,
                    borderRadius: 99,
                    background: "var(--line)",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      width: "63%",
                      background:
                        "linear-gradient(90deg,var(--blue),var(--cyan))",
                      borderRadius: 99,
                    }}
                  />
                </div>
                <span
                  style={{
                    fontSize: ".7rem",
                    fontWeight: 800,
                    color: "var(--blue)",
                  }}
                >
                  63%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ─── Ticker ────────────────────────────────────────────── */
const Ticker = () => {
  const items = [
    {
      name: "Shared Hosting",
      icon: "https://cdn-icons-png.flaticon.com/512/4248/4248443.png",
    },
    {
      name: "VPS Servers",
      icon: "https://cdn-icons-png.flaticon.com/512/4248/4248449.png",
    },
    {
      name: "Dedicated Servers",
      icon: "https://cdn-icons-png.flaticon.com/512/1792/1792890.png",
    },
    {
      name: "Domain Registration",
      icon: "https://cdn-icons-png.flaticon.com/512/2920/2920277.png",
    },
    {
      name: "Free SSL",
      icon: "https://cdn-icons-png.flaticon.com/512/3064/3064197.png",
    },
    {
      name: "DDoS Protection",
      icon: "https://cdn-icons-png.flaticon.com/512/484/484167.png",
    },
    {
      name: "NVMe SSD",
      icon: "https://cdn-icons-png.flaticon.com/512/2721/2721291.png",
    },
    {
      name: "99.9% Uptime",
      icon: "https://cdn-icons-png.flaticon.com/512/190/190411.png",
    },
    {
      name: "24/7 Support",
      icon: "https://cdn-icons-png.flaticon.com/512/597/597177.png",
    },
    {
      name: "CDN Included",
      icon: "https://cdn-icons-png.flaticon.com/512/2885/2885417.png",
    },
    {
      name: "Free Migration",
      icon: "https://cdn-icons-png.flaticon.com/512/3209/3209265.png",
    },
    {
      name: "Daily Backups",
      icon: "https://cdn-icons-png.flaticon.com/512/1024/1024826.png",
    },
  ];
  const doubled = [...items, ...items];
  return (
    <div
      style={{
        borderTop: "1px solid rgba(0,0,0,.06)",
        borderBottom: "1px solid rgba(0,0,0,.06)",
        padding: "14px 0",
        overflow: "hidden",
      }}
    >
      <div className="ticker-wrap">
        <div className="ticker-inner">
          {doubled.map((item, i) => (
            <span
              key={i}
              style={{
                padding: "0 26px",
                fontSize: ".7rem",
                fontWeight: 700,
                color: "#0e0e0e",
                whiteSpace: "nowrap",
                letterSpacing: ".14em",
                textTransform: "uppercase",
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <Image
                src={item.icon}
                alt={item.name}
                width={16}
                height={16}
                style={{ objectFit: "contain" }}
              />
              {item.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ── FIX 3: FeatureItem extracted as its own component so useRv is NOT called inside .map() ── */
function FeatureItem({ icon, title, desc, color, delay }) {
  const r = useRv();
  return (
    <div
      ref={r}
      className="rv fi-card"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div
        className="fi-icon"
        style={{ background: `${color}12`, border: `1px solid ${color}22` }}
      >
        <span style={{ fontSize: "1.5rem" }}>{icon}</span>
      </div>
      <div>
        <div style={{ fontWeight: 700, fontSize: ".92rem", marginBottom: 6 }}>
          {title}
        </div>
        <div
          style={{ fontSize: ".82rem", color: "var(--mid)", lineHeight: 1.65 }}
        >
          {desc}
        </div>
      </div>
    </div>
  );
}

/* ─── Features strip ─────────────────────────────────────── */
const Features = () => {
  const items = [
    {
      icon: "⚡",
      title: "NVMe SSD Speed",
      desc: "Up to 10× faster than traditional HDDs for blazing load times.",
      color: "#f59e0b",
    },
    {
      icon: "🛡",
      title: "DDoS Protection",
      desc: "Enterprise-grade mitigation keeps your site online 24/7.",
      color: "#1d4ed8",
    },
    {
      icon: "🌍",
      title: "Global CDN",
      desc: "250+ PoPs worldwide ensure low latency for every visitor.",
      color: "#06b6d4",
    },
    {
      icon: "🔒",
      title: "Free SSL Certs",
      desc: "Automatic HTTPS via Let's Encrypt with one-click renewals.",
      color: "#10b981",
    },
    {
      icon: "↩",
      title: "Daily Backups",
      desc: "Automated off-site backups with instant one-click restore.",
      color: "#7c3aed",
    },
    {
      icon: "🖥",
      title: "cPanel Control",
      desc: "Industry-leading control panel for effortless management.",
      color: "#dc2626",
    },
  ];
  return (
    <section style={{ padding: "80px 24px", background: "var(--bg)" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(360px,1fr))",
            gap: 16,
          }}
        >
          {items.map((item, i) => (
            <FeatureItem key={i} {...item} delay={i * 55} />
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── Shared Hosting ────────────────────────────────────── */
const SharedHosting = () => (
  <Section
    id="shared"
    label="Shared Hosting"
    title="Affordable Web Hosting"
    bg="var(--white)"
    sub="Fast hosting for small businesses, blogs, and websites — with easy control panels and secure infrastructure."
  >
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(290px,1fr))",
        gap: 22,
      }}
    >
      <PricingCard
        delay={0}
        title="Starter"
        price="₹149/mo"
        accent="#2563eb"
        icon="https://cdn-icons-png.flaticon.com/512/1048/1048943.png"
        features={[
          "1 Website",
          "10 GB SSD Storage",
          "Free SSL Certificate",
          "Basic Malware Scan",
          "Unmetered Bandwidth",
        ]}
      />
      <PricingCard
        delay={90}
        title="Advanced"
        price="₹249/mo"
        accent="#0891b2"
        popular
        icon="https://cdn-icons-png.flaticon.com/512/3103/3103446.png"
        features={[
          "5 Websites",
          "50 GB SSD Storage",
          "Free SSL + Daily Backup",
          "Premium Malware Scan",
          "Free Domain for 1 Year",
        ]}
      />
      <PricingCard
        delay={180}
        title="Premium"
        price="₹399/mo"
        accent="#7c3aed"
        icon="https://cdn-icons-png.flaticon.com/512/1048/1048903.png"
        features={[
          "Unlimited Websites",
          "100 GB NVMe SSD",
          "Free CDN + WAF Firewall",
          "Priority Support",
          "Staging + Git Deployment",
        ]}
      />
    </div>
  </Section>
);

/* ─── VPS ────────────────────────────────────────────────── */
const VpsHosting = () => (
  <Section
    id="vps"
    label="VPS Hosting"
    title="Virtual Private Servers"
    bg="var(--bg)"
    sub="Powerful virtual servers with full root access, NVMe SSD performance, and scalable CPU/RAM resources."
  >
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(290px,1fr))",
        gap: 22,
      }}
    >
      <PricingCard
        delay={0}
        title="Basic VPS"
        price="₹799/mo"
        accent="#059669"
        icon="https://cdn-icons-png.flaticon.com/512/843/843196.png"
        features={[
          "2 CPU Cores",
          "2 GB RAM",
          "40 GB NVMe SSD",
          "1 TB Bandwidth",
          "Full Root Access",
        ]}
      />
      <PricingCard
        delay={90}
        title="Professional VPS"
        price="₹1,299/mo"
        accent="#d97706"
        popular
        icon="https://cdn-icons-png.flaticon.com/512/1997/1997562.png"
        features={[
          "4 CPU Cores",
          "8 GB RAM",
          "120 GB NVMe SSD",
          "3 TB Bandwidth",
          "Managed Firewall",
        ]}
      />
      <PricingCard
        delay={180}
        title="Ultra VPS"
        price="₹1,999/mo"
        accent="#dc2626"
        icon="https://cdn-icons-png.flaticon.com/512/1548/1548438.png"
        features={[
          "8 CPU Cores",
          "16 GB RAM",
          "200 GB NVMe SSD",
          "Unlimited Bandwidth",
          "Priority Support",
        ]}
      />
    </div>
  </Section>
);

/* ─── Dedicated ──────────────────────────────────────────── */
const Dedicated = () => (
  <Section
    id="dedicated"
    label="Dedicated Servers"
    title="Bare-Metal Performance"
    bg="var(--white)"
    sub="Enterprise-grade servers for mission-critical workloads, high-traffic apps, and AI/ML operations."
  >
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(290px,1fr))",
        gap: 22,
      }}
    >
      <PricingCard
        delay={0}
        title="Intel Xeon Basic"
        price="₹4,999/mo"
        accent="#0369a1"
        icon="https://cdn-icons-png.flaticon.com/512/236/236831.png"
        features={[
          "Intel Xeon E3",
          "16 GB RAM",
          "2×512 GB SSD",
          "1 Gbps Port",
          "Full Root Access",
        ]}
      />
      <PricingCard
        delay={90}
        title="Intel Xeon Pro"
        price="₹7,999/mo"
        accent="#7c3aed"
        popular
        icon="https://cdn-icons-png.flaticon.com/512/201/201623.png"
        features={[
          "Xeon E5 Dual",
          "32 GB RAM",
          "2×1 TB NVMe",
          "DDoS Protection",
          "Managed Firewall",
        ]}
      />
      <PricingCard
        delay={180}
        title="AMD EPYC Enterprise"
        price="₹12,999/mo"
        accent="#be185d"
        icon="https://cdn-icons-png.flaticon.com/512/3208/3208753.png"
        features={[
          "AMD EPYC 32-Core",
          "64 GB RAM",
          "4×1 TB NVMe",
          "Private Networking",
          "99.99% SLA",
        ]}
      />
    </div>
  </Section>
);

/* ─── Domain pill ─── */
function DomainPill({ tld, price, color, delay }) {
  const r = useRv();
  return (
    <div
      ref={r}
      className="rv d-pill"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div
        style={{
          width: 48,
          height: 48,
          borderRadius: 12,
          margin: "0 auto 12px",
          background: `${color}12`,
          border: `1px solid ${color}22`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            fontFamily: "'DM Serif Display',serif",
            fontSize: "1rem",
            fontWeight: 400,
            color,
          }}
        >
          {tld.replace(".", "")}
        </span>
      </div>
      <div
        style={{
          fontFamily: "'DM Serif Display',serif",
          fontSize: "1.9rem",
          fontWeight: 400,
          color,
          marginBottom: 4,
        }}
      >
        {tld}
      </div>
      <div
        style={{
          fontSize: ".82rem",
          fontWeight: 800,
          color: "var(--ink)",
          marginBottom: 14,
        }}
      >
        {price}
      </div>
      <button
        style={{
          padding: "7px 20px",
          borderRadius: 10,
          background: `${color}10`,
          color,
          border: `1.5px solid ${color}28`,
          fontSize: ".72rem",
          fontWeight: 800,
          cursor: "pointer",
          transition: "background .2s, transform .2s",
          display: "block",
          width: "100%",
          letterSpacing: ".06em",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = `${color}22`;
          e.currentTarget.style.transform = "scale(1.04)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = `${color}10`;
          e.currentTarget.style.transform = "scale(1)";
        }}
      >
        Register
      </button>
    </div>
  );
}

/* ─── Domains ────────────────────────────────────────────── */
const Domains = () => {
  const [domain, setDomain] = useState("");
  const hRef = useRv();
  const tlds = [
    [".com", "₹699/yr", "#2563eb"],
    [".in", "₹499/yr", "#059669"],
    [".net", "₹849/yr", "#1d4ed8"],
    [".org", "₹799/yr", "#d97706"],
    [".dev", "₹999/yr", "#0891b2"],
    [".ai", "₹6,499/yr", "#be185d"],
  ];
  return (
    <section
      id="domains"
      style={{ padding: "36px 24px", background: "var(--bg)" }}
    >
      <div style={{ maxWidth: 1400, margin: "0 auto" }}>
        <div
          ref={hRef}
          className="rv"
          style={{ textAlign: "center", marginBottom: 48 }}
        >
          <LabelPill text="Domain Registration" />
          <h2
            style={{
              fontFamily: "'DM Serif Display',serif",
              fontSize: "clamp(2rem,4vw,3rem)",
              fontWeight: 400,
              letterSpacing: "-.02em",
              marginBottom: 14,
            }}
          >
            Secure Your Online Identity
          </h2>
          <p
            style={{
              color: "var(--mid)",
              maxWidth: 480,
              margin: "0 auto",
              lineHeight: 1.8,
            }}
          >
            Fast search, easy setup, and complete DNS control for all top-level
            domains.
          </p>
        </div>
        <div
          style={{
            maxWidth: 580,
            margin: "0 auto 52px",
            display: "flex",
            gap: 10,
            flexWrap: "wrap",
          }}
        >
          <input
            className="d-input"
            placeholder="Search your domain (e.g. mybusiness.com)…"
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
            style={{ flex: 1, minWidth: 200 }}
          />
          <button className="btn-primary" style={{ whiteSpace: "nowrap" }}>
            🔍 Search
          </button>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))",
            gap: 16,
          }}
        >
          {tlds.map(([tld, price, color], i) => (
            <DomainPill
              key={tld}
              tld={tld}
              price={price}
              color={color}
              delay={i * 55}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── Contact section ────────────────────────────────────── */
const ContactSection = () => {
  const hRef = useRv();
  const contactItems = [
    {
      icon: "📞",
      label: "Phone",
      val: "+91 97666 50411",
      href: "tel:+919766650411",
    },
    {
      icon: "✉️",
      label: "Email",
      val: "info@albostechnologies.com",
      href: "mailto:info@albostechnologies.com",
    },
    {
      icon: "📍",
      label: "Office",
      val: "Kunal Plaza, Pune MH 411019",
      href: null,
    },
    {
      icon: "🕐",
      label: "Office Hours",
      val: "Mon–Sat · 10 AM–7 PM IST",
      href: null,
    },
  ];
  return (
    <section style={{ padding: "96px 24px 104px", background: "var(--white)" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto" }}>
        {/* CTA Banner */}
        <div
          ref={hRef}
          className="rv"
          style={{
            borderRadius: 24,
            padding: "60px 52px",
            background:
              "linear-gradient(135deg,#0a1a4a 0%,#1d4ed8 52%,#0891b2 100%)",
            color: "#fff",
            marginBottom: 52,
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 32,
            position: "relative",
            overflow: "hidden",
            boxShadow: "0 32px 80px -20px rgba(29,78,216,.4)",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: -100,
              right: -80,
              width: 300,
              height: 300,
              borderRadius: "50%",
              background: "rgba(255,255,255,.04)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 200,
              right: -50,
              width: 200,
              height: 200,
              borderRadius: "50%",
              background: "rgba(255,255,255,.03)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: -60,
              left: 260,
              width: 180,
              height: 180,
              borderRadius: "50%",
              background: "rgba(255,255,255,.03)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          <div style={{ position: "relative" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(255,255,255,.12)",
                borderRadius: 999,
                padding: "5px 14px",
                marginBottom: 14,
              }}
            >
              <span className="live-dot" style={{ background: "#34d399" }} />
              <span
                style={{
                  fontSize: ".68rem",
                  fontWeight: 800,
                  letterSpacing: ".14em",
                  textTransform: "uppercase",
                }}
              >
                Experts Online Now
              </span>
            </div>
            <div
              style={{
                fontFamily: "'DM Serif Display',serif",
                fontSize: "clamp(1.6rem,3vw,2.3rem)",
                fontWeight: 400,
                marginBottom: 10,
                lineHeight: 1.15,
              }}
            >
              Ready to Grow Your Business?
            </div>
            <p
              style={{
                color: "rgba(255,255,255,.68)",
                maxWidth: 440,
                lineHeight: 1.75,
                fontSize: ".95rem",
              }}
            >
              Speak with our hosting experts today. Launch fast, stay secure,
              scale effortlessly.
            </p>
          </div>

          <div
            style={{
              display: "flex",
              gap: 12,
              flexWrap: "wrap",
              position: "relative",
            }}
          >
            <button className="btn-amber">✦ Get a Free Quote</button>
            <a href="tel:+919766650411" className="btn-ghost">
              📞 Call Sales
            </a>
          </div>
        </div>

        {/* FIX 4: Contact cards use Reveal component (now defined) + inline styles instead of undefined Tailwind classes */}
        <div className="contact-grid">
          {contactItems.map((c, i) => (
            <Reveal key={i} delay={i * 80}>
              <a
                href={c.href || undefined}
                className="c-card"
                style={{
                  textAlign: "center",
                  alignItems: "center",
                  cursor: c.href ? "pointer" : "default",
                  textDecoration: "none",
                }}
              >
                <div style={{ fontSize: "2rem", marginBottom: 4 }}>
                  {c.icon}
                </div>
                <div
                  style={{
                    fontSize: ".68rem",
                    fontWeight: 800,
                    color: "var(--muted)",
                    letterSpacing: ".12em",
                    textTransform: "uppercase",
                  }}
                >
                  {c.label}
                </div>
                <div
                  style={{
                    fontSize: ".88rem",
                    fontWeight: 600,
                    color: "var(--ink)",
                    lineHeight: 1.55,
                  }}
                >
                  {c.val}
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════════════════════
   ROOT
═══════════════════════════════════════════════════════════════ */
export default function HostingPage() {
  return (
    <>
      <style>{CSS}</style>
      <div className="host-root">
        <Hero />
        <Ticker />
        <Features />
        <SharedHosting />
        <VpsHosting />
        <Dedicated />
        <Domains />
        <ContactSection />
      </div>
    </>
  );
}
