"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import {
  ArrowRight,
  TrendingUp,
  Target,
  BarChart2,
  Users,
  Shield,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Clock,
  ChevronDown,
  Zap,
  Star,
  Eye,
  MousePointer,
  RefreshCw,
  Layers,
  Facebook,
  Linkedin,
  Youtube,
  Instagram,
  BarChart3,
  Repeat,
  FlaskConical,
  PenTool,
  LineChart,
  Sparkles,
} from "lucide-react";

/* ── useInView ── */
function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

/* ── Reveal ── */
function Reveal({ children, delay = 0, dir = "up", className = "" }) {
  const [ref, inView] = useInView();
  const map = {
    up: "translateY(38px)",
    down: "translateY(-38px)",
    left: "translateX(-38px)",
    right: "translateX(38px)",
  };
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : map[dir],
        transition: `opacity .65s ease ${delay}s, transform .65s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

/* ── Counter ── */
function Counter({ target, suffix = "" }) {
  const [n, setN] = useState(0);
  const [ref, inView] = useInView();
  useEffect(() => {
    if (!inView) return;
    let v = 0;
    const s = target / 55;
    const t = setInterval(() => {
      v += s;
      if (v >= target) {
        setN(target);
        clearInterval(t);
      } else setN(Math.floor(v));
    }, 16);
    return () => clearInterval(t);
  }, [inView, target]);
  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

/* ── Particles ── */
function Particles() {
  const pts = Array.from({ length: 16 }, (_, i) => ({
    id: i,
    size: 3 + (i % 4),
    x: (i * 21 + 8) % 93,
    y: (i * 29 + 6) % 87,
    dur: 5 + (i % 6),
    delay: i % 4,
  }));
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      {pts.map((p) => (
        <div
          key={p.id}
          style={{
            position: "absolute",
            width: p.size,
            height: p.size,
            borderRadius: "50%",
            background: "rgba(99,102,241,0.2)",
            left: `${p.x}%`,
            top: `${p.y}%`,
            animation: `smFloat ${p.dur}s ease-in-out ${p.delay}s infinite alternate`,
          }}
        />
      ))}
    </div>
  );
}

/* ── Ticker ── */
const ticks = [
  "Meta Ads",
  "LinkedIn B2B",
  "YouTube SEO",
  "Instagram Reels",
  "TikTok Ads",
  "Retargeting Funnels",
  "A/B Testing",
  "ROAS Optimization",
  "Influencer Marketing",
  "Content Strategy",
  "Analytics & ROI",
  "Brand Building",
];

const iconMap = {
  "Meta Ads": Facebook,
  "LinkedIn B2B": Linkedin,
  "YouTube SEO": Youtube,
  "Instagram Reels": Instagram,
  "TikTok Ads": Sparkles,
  "Retargeting Funnels": Repeat,
  "A/B Testing": FlaskConical,
  "ROAS Optimization": TrendingUp,
  "Influencer Marketing": Users,
  "Content Strategy": PenTool,
  "Analytics & ROI": LineChart,
  "Brand Building": BarChart3,
};

function Ticker() {
  return (
    <div
      style={{
        overflow: "hidden",
        padding: "14px 0",
        background: "#fafafa",
        borderTop: "1px solid #f1f5f9",
        borderBottom: "1px solid #f1f5f9",
      }}
    >
      <div
        style={{
          display: "inline-flex",
          animation: "smTicker 26s linear infinite",
        }}
      >
        {[...ticks, ...ticks].map((t, i) => {
          const Icon = iconMap[t];

          return (
            <span
              key={i}
              style={{
                padding: "0 28px",
                fontSize: 16,
                fontWeight: 600,
                color: "#64748b",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                whiteSpace: "nowrap",
              }}
            >
              <Icon size={26} color="#6366f1" />
              {t}
            </span>
          );
        })}
      </div>
    </div>
  );
}

/* ── Hero Live Visual ── */
function HeroVisual() {
  const [active, setActive] = useState(0);
  const metrics = [
    { label: "ROAS", val: "4.2×", delta: "+18%", color: "#10b981" },
    { label: "Leads", val: "1,840", delta: "+120%", color: "#6366f1" },
    { label: "Impressions", val: "2.4M", delta: "+67%", color: "#f59e0b" },
  ];
  const platforms = [
    {
      name: "Meta Ads",
      spend: "₹1.2L",
      leads: 480,
      color: "#1877f2",
      icon: "📘",
    },
    {
      name: "LinkedIn",
      spend: "₹80K",
      leads: 210,
      color: "#0077b5",
      icon: "💼",
    },
    {
      name: "YouTube",
      spend: "₹60K",
      leads: 150,
      color: "#ff0000",
      icon: "▶️",
    },
  ];
  useEffect(() => {
    const t = setInterval(
      () => setActive((a) => (a + 1) % platforms.length),
      2600,
    );
    return () => clearInterval(t);
  }, []);

  return (
    <div style={{ position: "relative", width: "100%", maxWidth: 480 }}>
      {/* Main card */}
      <div
        style={{
          background: "white",
          borderRadius: 24,
          boxShadow: "0 24px 80px rgba(99,102,241,0.18)",
          border: "1px solid #e2e8f0",
          overflow: "hidden",
        }}
      >
        {/* Header */}
        <div
          style={{
            background: "linear-gradient(135deg,#4f46e5,#6366f1)",
            padding: "16px 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: 10,
                background: "rgba(255,255,255,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 18,
              }}
            >
              📊
            </div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, color: "white" }}>
                Campaign Dashboard
              </div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.75)" }}>
                Live · 3 Campaigns Running
              </div>
            </div>
          </div>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              background: "rgba(255,255,255,0.15)",
              borderRadius: 30,
              padding: "4px 12px",
              fontSize: 11,
              fontWeight: 700,
              color: "white",
            }}
          >
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "#10b981",
                animation: "smPulse 1.4s infinite",
              }}
            />{" "}
            LIVE
          </div>
        </div>

        {/* Metric strips */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            borderBottom: "1px solid #f1f5f9",
          }}
        >
          {metrics.map((m, i) => (
            <div
              key={i}
              style={{
                padding: "14px 12px",
                borderRight: i < 2 ? "1px solid #f1f5f9" : "none",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: 16,
                  fontWeight: 800,
                  color: m.color,
                  fontFamily: " sans-serif",
                }}
              >
                {m.val}
              </div>
              <div style={{ fontSize: 10, color: "#94a3b8", fontWeight: 500 }}>
                {m.label}
              </div>
              <div
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  color: "#10b981",
                  marginTop: 2,
                }}
              >
                ↑ {m.delta}
              </div>
            </div>
          ))}
        </div>

        {/* Platform rows */}
        <div style={{ padding: "14px 16px" }}>
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              color: "#94a3b8",
              letterSpacing: "0.07em",
              marginBottom: 10,
            }}
          >
            ACTIVE PLATFORMS
          </div>
          {platforms.map((p, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "10px 12px",
                borderRadius: 12,
                background: active === i ? "#f5f3ff" : "transparent",
                border:
                  active === i
                    ? "1.5px solid #c4b5fd"
                    : "1.5px solid transparent",
                marginBottom: 6,
                transition: "all .4s",
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 10,
                  background: active === i ? p.color : "#f8faff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 16,
                  transition: "background .4s",
                }}
              >
                {p.icon}
              </div>
              <div style={{ flex: 1 }}>
                <div
                  style={{ fontSize: 13, fontWeight: 700, color: "#0f172a" }}
                >
                  {p.name}
                </div>
                <div style={{ fontSize: 11, color: "#94a3b8" }}>
                  Spend: {p.spend}
                </div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    color: active === i ? "#6366f1" : "#64748b",
                  }}
                >
                  {p.leads} leads
                </div>
                {active === i && (
                  <div
                    style={{ fontSize: 10, color: "#10b981", fontWeight: 700 }}
                  >
                    ● ACTIVE
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Mini bar chart */}
        <div
          style={{ padding: "10px 16px 16px", borderTop: "1px solid #f1f5f9" }}
        >
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              color: "#94a3b8",
              letterSpacing: "0.07em",
              marginBottom: 8,
            }}
          >
            WEEKLY LEAD VOLUME
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              gap: 4,
              height: 44,
            }}
          >
            {[35, 52, 48, 70, 62, 88, 75, 92, 80, 95, 72, 90].map((h, i) => (
              <div
                key={i}
                style={{
                  flex: 1,
                  height: `${h}%`,
                  borderRadius: 4,
                  background: i === 11 ? "#6366f1" : "#e0e7ff",
                  transition: "height .5s",
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Floating badges */}
      {[
        {
          text: "3.8× ROAS",
          icon: "🎯",
          pos: { top: "8%", left: "-20%" },
          bg: "#eff6ff",
          border: "#bfdbfe",
          d: 0,
        },
        {
          text: "96% CSAT",
          icon: "⭐",
          pos: { bottom: "22%", right: "-18%" },
          bg: "#fefce8",
          border: "#fef08a",
          d: 0.7,
        },
        {
          text: "+120% Leads",
          icon: "🚀",
          pos: { bottom: "5%", left: "-14%" },
          bg: "#f0fdf4",
          border: "#bbf7d0",
          d: 1.3,
        },
      ].map((b, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            ...b.pos,
            background: b.bg,
            border: `1.5px solid ${b.border}`,
            borderRadius: 14,
            padding: "8px 14px",
            display: "flex",
            alignItems: "center",
            gap: 8,
            fontSize: 12,
            fontWeight: 600,
            color: "#0f172a",
            boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
            animation: `smFloat ${3 + i * 0.7}s ease-in-out ${b.d}s infinite alternate`,
            whiteSpace: "nowrap",
          }}
        >
          <span style={{ fontSize: 15 }}>{b.icon}</span>
          {b.text}
        </div>
      ))}
    </div>
  );
}

/* ── FAQ Item ── */
function FAQItem({ q, a, delay }) {
  const [open, setOpen] = useState(false);
  return (
    <Reveal delay={delay}>
      <div
        style={{
          borderRadius: 18,
          border: `1.5px solid ${open ? "#c4b5fd" : "#e2e8f0"}`,
          background: open ? "#faf9ff" : "white",
          overflow: "hidden",
          transition: "border .3s, background .3s",
          marginBottom: 12,
        }}
      >
        <button
          onClick={() => setOpen(!open)}
          style={{
            width: "100%",
            padding: "20px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background: "none",
            border: "none",
            cursor: "pointer",
            gap: 16,
            textAlign: "left",
          }}
        >
          <span
            style={{
              fontSize: 15,
              fontWeight: 600,
              color: "#0f172a",
              lineHeight: 1.5,
            }}
          >
            {q}
          </span>
          <span
            style={{
              flexShrink: 0,
              width: 28,
              height: 28,
              borderRadius: "50%",
              background: open ? "#6366f1" : "#f1f5f9",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "background .3s, transform .3s",
              transform: open ? "rotate(180deg)" : "none",
            }}
          >
            <ChevronDown size={15} color={open ? "white" : "#64748b"} />
          </span>
        </button>
        {open && (
          <div
            style={{
              padding: "0 24px 20px",
              fontSize: 14.5,
              color: "#475569",
              lineHeight: 1.75,
            }}
          >
            {a}
          </div>
        )}
      </div>
    </Reveal>
  );
}

/* ══════════════ MAIN ══════════════ */
export default function SocialMediaMarketing() {
  return (
    <div
      style={{
        fontFamily: " sans-serif",
        background: "#fff",
        color: "#1e293b",
        overflowX: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');
        *{box-sizing:border-box;}
        body{-webkit-font-smoothing:antialiased;}
        @keyframes smFloat  {0%{transform:translateY(0);}100%{transform:translateY(-18px);}}
        @keyframes smTicker {0%{transform:translateX(0);}100%{transform:translateX(-50%);}}
        @keyframes smPulse  {0%,100%{opacity:1;}50%{opacity:.4;}}
        @keyframes smGrad   {0%,100%{background-position:0% 50%;}50%{background-position:100% 50%;}}
        @keyframes smSpin   {from{transform:rotate(0deg);}to{transform:rotate(360deg);}}
        .sm-card{transition:transform .3s,box-shadow .3s;}
        .sm-card:hover{transform:translateY(-7px);box-shadow:0 20px 52px rgba(99,102,241,0.13)!important;}
        .sm-img img{transition:transform .55s;}
        .sm-img:hover img{transform:scale(1.06);}
        details summary::-webkit-details-marker{display:none;}
      `}</style>

      {/* ══ HERO ══ */}
      <section
        style={{
          position: "relative",
          padding: "clamp(72px,10vw,110px) 0 80px",
          overflow: "hidden",
          background:
            "linear-gradient(155deg,#f5f3ff 0%,#ffffff 55%,#eff6ff 100%)",
        }}
      >
        <Particles />
        <svg
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            opacity: 0.25,
            pointerEvents: "none",
          }}
        >
          <defs>
            <pattern
              id="hgrid"
              width="44"
              height="44"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M44 0L0 0 0 44"
                fill="none"
                stroke="#94a3b8"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hgrid)" />
        </svg>
        <div
          style={{
            position: "absolute",
            top: -100,
            right: -80,
            width: 480,
            height: 480,
            borderRadius: "50%",
            background:
              "radial-gradient(circle,rgba(99,102,241,0.12),transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -70,
            left: -50,
            width: 340,
            height: 340,
            borderRadius: "50%",
            background:
              "radial-gradient(circle,rgba(236,72,153,0.07),transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: 1480,
            margin: "0 auto",
            padding: "0 clamp(16px,4vw,40px)",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: 128,
            // justifyContent: "space-between",
          }}
        >
          <div style={{ flex: "1 1 420px", maxWidth: 580 }}>
            <Reveal>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 7,
                  background: "rgba(99,102,241,0.08)",
                  border: "1px solid rgba(99,102,241,0.22)",
                  borderRadius: 40,
                  padding: "5px 15px",
                  marginBottom: 22,
                }}
              >
                <TrendingUp size={13} color="#6366f1" />
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    color: "#6366f1",
                    letterSpacing: "0.07em",
                  }}
                >
                  ENTERPRISE SOCIAL MEDIA MARKETING
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h1
                style={{
                  fontSize: "clamp(2rem,4vw,3.2rem)",
                  fontWeight: 800,
                  lineHeight: 1.12,
                  color: "#0f172a",
                  marginBottom: 18,
                }}
              >
                Turn Social Media Into a{" "}
                <span style={{ position: "relative", display: "inline-block" }}>
                  <style>{`
  /* ── Gradient Text ── */
.grad-text {
background: linear-gradient(135deg,#1d4ed8 0%,#3b82f6 50%,#60a5fa 100%);
background-size:200% auto;
-webkit-background-clip:text;
-webkit-text-fill-color:transparent;
background-clip:text;
animation: pan-grad 5s ease infinite;
`}</style>
                  <span className="grad-text">Revenue Engine</span>
                  <svg
                    style={{
                      position: "absolute",
                      bottom: -5,
                      left: 0,
                      width: "100%",
                    }}
                    viewBox="0 0 220 10"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M2 7 Q110 2 218 7"
                      stroke="#6366f1"
                      strokeWidth="2.5"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h1>
            </Reveal>
            <Reveal delay={0.18}>
              <p
                style={{
                  fontSize: 16.5,
                  color: "#475569",
                  lineHeight: 1.78,
                  marginBottom: 34,
                  maxWidth: 510,
                }}
              >
                Performance-driven social media marketing services designed to
                increase visibility, generate qualified leads, and drive
                measurable revenue growth across major platforms.
              </p>
            </Reveal>
            <Reveal delay={0.26}>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 12,
                  marginBottom: 32,
                }}
              >
                <button className="bg-gradient-to-br from-amber-500 btn-amber to-amber-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:-translate-y-1 transition">
                  Get a Free Quote <ArrowRight size={15} />
                </button>
                <button
                  style={{
                    background: "#0f172a",
                    color: "white",
                    border: "none",
                    borderRadius: 13,
                    padding: "14px 32px",
                    fontSize: 15,
                    fontWeight: 600,
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    transition: "all .3s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "#1e293b")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "#0f172a")
                  }
                >
                  View Our Work <Eye size={15} />
                </button>
              </div>
            </Reveal>
            <Reveal delay={0.34}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 18 }}>
                {[
                  ["🎯", "ROI-Focused"],
                  ["📊", "Data-Driven"],
                  ["🚀", "Scalable Growth"],
                ].map(([ic, lb]) => (
                  <span
                    key={lb}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 7,
                      fontSize: 13,
                      fontWeight: 500,
                      color: "#475569",
                    }}
                  >
                    <span>{ic}</span>
                    {lb}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal
            delay={0.14}
            dir="left"
            style={{ flex: "1 1 380px", maxWidth: 500 }}
          >
            <HeroVisual />
          </Reveal>
        </div>
      </section>

      <Ticker />

      {/* ══ STATS ══ */}
      <section
        style={{ padding: "34px clamp(16px,4vw,40px)", background: "#f8faff" }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
            gap: 16,
          }}
        >
          {[
            { val: 3, suf: "×", label: "Avg Return on Ad Spend", icon: "💰" },
            { val: 120, suf: "%", label: "Lead Growth Rate", icon: "📈" },
            { val: 50, suf: "M+", label: "Ad Impressions Served", icon: "👁" },
            { val: 200, suf: "+", label: "Brands Scaled", icon: "🏆" },
          ].map((s, i) => (
            <Reveal key={i} delay={i * 0.09}>
              <div
                className="sm-card"
                style={{
                  background: "white",
                  borderRadius: 20,
                  padding: "24px 18px",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 4px 18px rgba(99,102,241,0.07)",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: 28, marginBottom: 5 }}>{s.icon}</div>
                <div
                  style={{
                    fontSize: 36,
                    fontWeight: 800,
                    color: "#4f46e5",
                    lineHeight: 1,
                  }}
                >
                  <Counter target={s.val} suffix={s.suf} />
                </div>
                <div
                  style={{
                    fontSize: 12.5,
                    color: "#64748b",
                    marginTop: 6,
                    fontWeight: 500,
                  }}
                >
                  {s.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ══ WHY FAIL ══ */}
      <section
        style={{ padding: "36px clamp(16px,4vw,40px)", background: "white" }}
      >
        <div style={{ maxWidth: 1480, margin: "0 auto" }}>
          <Reveal>
            <div
              style={{
                margin: "0 auto 72px",
              }}
            >
              <div
                style={{
                  display: "inline-block",
                  background: "#fef2f2",
                  borderRadius: 8,
                  padding: "4px 14px",
                  fontSize: 12,
                  fontWeight: 700,
                  color: "#dc2626",
                  letterSpacing: "0.08em",
                  marginBottom: 14,
                }}
              >
                THE PROBLEM
              </div>
              <h2
                style={{
                  fontSize: "48px",
                  fontWeight: 800,
                  color: "#0f172a",
                  lineHeight: 1.2,
                  marginBottom: 14,
                }}
              >
                Why Most Social Media Efforts <br />
                Fail to Deliver Results
              </h2>
              <p style={{ fontSize: 16, color: "#475569", lineHeight: 1.75 }}>
                Most businesses are active on social platforms, yet very few
                achieve consistent leads or revenue. The real challenge lies in
                moving beyond posting to building a structured, data-driven
                growth system.
              </p>
            </div>
          </Reveal>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
              gap: 32,
            }}
          >
            {/* Problems */}
            <Reveal dir="right">
              <div
                style={{
                  borderRadius: 24,
                  overflow: "hidden",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 6px 24px rgba(0,0,0,0.06)",
                }}
              >
                <div
                  className="sm-img"
                  style={{
                    height: 220,
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <Image
                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=700&q=80"
                    width={800}
                    height={600}
                    alt="Challenges"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top,rgba(220,38,38,0.6),transparent 60%)",
                    }}
                  />
                  <div style={{ position: "absolute", bottom: 16, left: 20 }}>
                    <div
                      style={{
                        fontSize: 16,
                        fontWeight: 800,
                        color: "white",
                        fontFamily: " sans-serif",
                      }}
                    >
                      Common Challenges
                    </div>
                  </div>
                </div>
                <div style={{ padding: "24px 26px", background: "white" }}>
                  {[
                    {
                      title: "Low Engagement & Limited Reach",
                      desc: "Content published consistently but fails to attract meaningful engagement or qualified attention.",
                    },
                    {
                      title: "Unclear Audience Targeting",
                      desc: "Ads reach broad audiences without data-backed segmentation or intent-based targeting.",
                    },
                    {
                      title: "No Measurable ROI",
                      desc: "Hard to connect social media activity with leads, sales, or real business growth.",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      style={{ display: "flex", gap: 12, marginBottom: 18 }}
                    >
                      <div
                        style={{
                          width: 36,
                          height: 36,
                          flexShrink: 0,
                          borderRadius: 10,
                          background: "#fef2f2",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <span style={{ fontSize: 16 }}>⚠️</span>
                      </div>
                      <div>
                        <div
                          style={{
                            fontWeight: 700,
                            fontSize: 14,
                            color: "#0f172a",
                            marginBottom: 3,
                          }}
                        >
                          {item.title}
                        </div>
                        <div
                          style={{
                            fontSize: 13,
                            color: "#64748b",
                            lineHeight: 1.65,
                          }}
                        >
                          {item.desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Opportunity */}
            <Reveal dir="left" delay={0.12}>
              <div
                style={{
                  borderRadius: 24,
                  overflow: "hidden",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 6px 24px rgba(0,0,0,0.06)",
                }}
              >
                <div
                  className="sm-img"
                  style={{
                    height: 220,
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <Image
                    src="https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=700&q=80"
                    width={800}
                    height={600}
                    alt="Opportunity"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top,rgba(5,150,105,0.6),transparent 60%)",
                    }}
                  />
                  <div style={{ position: "absolute", bottom: 16, left: 20 }}>
                    <div
                      style={{
                        fontSize: 16,
                        fontWeight: 800,
                        color: "white",
                        fontFamily: " sans-serif",
                      }}
                    >
                      Performance-Driven Strategy
                    </div>
                  </div>
                </div>
                <div style={{ padding: "24px 26px", background: "white" }}>
                  {[
                    {
                      title: "Predictable & Scalable Growth",
                      desc: "Platform-specific strategies designed to consistently increase reach, engagement, and conversions.",
                    },
                    {
                      title: "Precision Targeting & Funnels",
                      desc: "Advanced audience segmentation, retargeting funnels, and accurate conversion tracking.",
                    },
                    {
                      title: "Clear ROI & Business Impact",
                      desc: "Transparent reporting that links social media performance directly to revenue and growth.",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      style={{ display: "flex", gap: 12, marginBottom: 18 }}
                    >
                      <div
                        style={{
                          width: 36,
                          height: 36,
                          flexShrink: 0,
                          borderRadius: 10,
                          background: "#ecfdf5",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <CheckCircle2 size={18} color="#059669" />
                      </div>
                      <div>
                        <div
                          style={{
                            fontWeight: 700,
                            fontSize: 14,
                            color: "#0f172a",
                            marginBottom: 3,
                          }}
                        >
                          {item.title}
                        </div>
                        <div
                          style={{
                            fontSize: 13,
                            color: "#64748b",
                            lineHeight: 1.65,
                          }}
                        >
                          {item.desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══ PLATFORMS ══ */}
      <section
        style={{
          padding: "36px clamp(16px,4vw,40px)",
          background: "linear-gradient(180deg,#f8faff,white)",
        }}
      >
        <div style={{ maxWidth: 1480, margin: "0 auto" }}>
          <Reveal>
            <div
              style={{
                margin: "0 auto 72px",
              }}
            >
              <div
                style={{
                  display: "inline-block",
                  background: "#eff6ff",
                  borderRadius: 8,
                  padding: "4px 14px",
                  fontSize: 12,
                  fontWeight: 700,
                  color: "#2563eb",
                  letterSpacing: "0.08em",
                  marginBottom: 14,
                }}
              >
                PLATFORMS
              </div>
              <h2
                style={{
                  fontSize: "38px",
                  fontWeight: 800,
                  color: "#0f172a",
                  marginBottom: 14,
                }}
              >
                Platform-Specific Social Media Services
              </h2>
              <p style={{ fontSize: 16, color: "#475569", lineHeight: 1.75 }}>
                Every social platform requires a different growth strategy. We
                deliver platform-focused services designed to drive engagement,
                leads, and measurable business growth.
              </p>
            </div>
          </Reveal>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
              gap: 22,
            }}
          >
            {[
              {
                img: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&q=80",
                color: "#1877f2",
                bg: "#eff6ff",
                icon: "📘",
                title: "Meta Ads (Facebook & Instagram)",
                desc: "Performance-driven Facebook and Instagram advertising focused on lead generation, eCommerce sales, and scalable ROAS through advanced targeting and creative optimization.",
                bullets: [
                  "Facebook & Instagram ad management",
                  "Custom audiences & lookalike targeting",
                  "Meta Pixel & conversion tracking",
                  "Retargeting funnels & ROAS scaling",
                ],
              },
              {
                img: "https://images.unsplash.com/photo-1560472355-536de3962603?w=600&q=80",
                color: "#0077b5",
                bg: "#e8f4f8",
                icon: "💼",
                title: "LinkedIn B2B Lead Generation",
                desc: "High-quality B2B lead generation and executive branding on LinkedIn, designed to reach decision-makers, founders, and enterprise buyers.",
                bullets: [
                  "LinkedIn Ads & ABM campaigns",
                  "Sponsored content & InMail outreach",
                  "Founder & CXO personal branding",
                  "CRM-integrated lead tracking",
                ],
              },
              {
                img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&q=80",
                color: "#ff0000",
                bg: "#fff0f0",
                icon: "▶️",
                title: "YouTube SEO & Video Marketing",
                desc: "Long-term YouTube growth through SEO-optimized video content, Shorts strategy, paid video ads, and analytics-driven optimization.",
                bullets: [
                  "YouTube SEO & channel optimization",
                  "High-retention long & short-form videos",
                  "YouTube Ads & remarketing funnels",
                  "Performance tracking & scaling",
                ],
              },
            ].map((p, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div
                  className="sm-card"
                  style={{
                    borderRadius: 22,
                    overflow: "hidden",
                    border: "1px solid #e2e8f0",
                    background: "white",
                    boxShadow: "0 4px 18px rgba(0,0,0,0.06)",
                  }}
                >
                  <div
                    className="sm-img"
                    style={{
                      height: 170,
                      overflow: "hidden",
                      position: "relative",
                    }}
                  >
                    <Image
                      fill
                      src={p.img}
                      alt={p.title}
                      style={{ objectFit: "cover" }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: `linear-gradient(to top,rgba(0,0,0,0.35),transparent)`,
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: 12,
                        left: 12,
                        width: 38,
                        height: 38,
                        borderRadius: 10,
                        background: "rgba(255,255,255,0.9)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 18,
                      }}
                    >
                      {p.icon}
                    </div>
                  </div>
                  <div style={{ padding: "20px 22px 24px" }}>
                    <h3
                      style={{
                        fontWeight: 700,
                        fontSize: 15,
                        color: "#0f172a",
                        marginBottom: 8,
                      }}
                    >
                      {p.title}
                    </h3>
                    <p
                      style={{
                        fontSize: 13,
                        color: "#64748b",
                        lineHeight: 1.68,
                        marginBottom: 14,
                      }}
                    >
                      {p.desc}
                    </p>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 6,
                      }}
                    >
                      {p.bullets.map((b, j) => (
                        <div
                          key={j}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 8,
                            fontSize: 13,
                            color: "#374151",
                          }}
                        >
                          <span
                            style={{
                              width: 5,
                              height: 5,
                              borderRadius: "50%",
                              background: p.color,
                              flexShrink: 0,
                            }}
                          />
                          {b}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ INDUSTRIES ══ */}
      <section
        style={{ padding: "36px clamp(16px,4vw,40px)", background: "white" }}
      >
        <div style={{ maxWidth: 1480, margin: "0 auto" }}>
          <Reveal>
            <div
              style={{
                margin: "0 auto 72px",
              }}
            >
              <div
                style={{
                  display: "inline-block",
                  background: "#fef3c7",
                  borderRadius: 8,
                  padding: "4px 14px",
                  fontSize: 12,
                  fontWeight: 700,
                  color: "#d97706",
                  letterSpacing: "0.08em",
                  marginBottom: 14,
                }}
              >
                INDUSTRIES
              </div>
              <h2
                style={{
                  fontSize: "clamp(1.7rem,3.2vw,2.7rem)",
                  fontWeight: 800,
                  color: "#0f172a",
                  marginBottom: 14,
                }}
              >
                Social Media Marketing for Every Industry
              </h2>
              <p style={{ fontSize: 16, color: "#475569", lineHeight: 1.75 }}>
                From startups to established enterprises, we help businesses
                leverage social media to increase visibility, leads, and
                revenue.
              </p>
            </div>
          </Reveal>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill,minmax(320px,1fr))",
              gap: 18,
            }}
          >
            {[
              {
                img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500&q=80",
                icon: "🏢",
                bg: "#eef2ff",
                title: "B2B & Enterprise",
                desc: "LinkedIn-focused strategies for lead generation, authority building, and decision-maker engagement.",
              },
              {
                img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&q=80",
                icon: "🛍",
                bg: "#fef2f2",
                title: "eCommerce & D2C",
                desc: "Performance ads, product creatives, and retargeting funnels built to maximize ROAS.",
              },
              {
                img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=500&q=80",
                icon: "🚀",
                bg: "#ecfdf5",
                title: "Startups & SaaS",
                desc: "Rapid brand building, audience growth, and demand generation through scalable systems.",
              },
              {
                img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&q=80",
                icon: "📍",
                bg: "#eff6ff",
                title: "Local & Service Businesses",
                desc: "Location-based targeting, Google Business Profile marketing, and community engagement.",
              },
            ].map((ind, i) => (
              <Reveal key={i} delay={(i % 4) * 0.09}>
                <div
                  style={{
                    position: "relative",
                    height: 280,
                    borderRadius: 20,
                    overflow: "hidden",
                    cursor: "pointer",
                    boxShadow: "0 6px 22px rgba(0,0,0,0.09)",
                    transition: "box-shadow .3s, transform .3s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-6px)";
                    e.currentTarget.style.boxShadow =
                      "0 20px 56px rgba(0,0,0,0.18)";
                    e.currentTarget.querySelector("img").style.transform =
                      "scale(1.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "";
                    e.currentTarget.style.boxShadow =
                      "0 6px 22px rgba(0,0,0,0.09)";
                    e.currentTarget.querySelector("img").style.transform =
                      "scale(1)";
                  }}
                >
                  <Image
                    fill
                    src={ind.img}
                    alt={ind.title}
                    style={{ objectFit: "cover", transition: "transform .55s" }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top,rgba(0,0,0,0.78),rgba(0,0,0,0.1) 65%,transparent 100%)",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      padding: "18px",
                    }}
                  >
                    <div
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: 10,
                        background: ind.bg,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 18,
                        marginBottom: 8,
                      }}
                    >
                      {ind.icon}
                    </div>
                    <h3
                      style={{
                        fontWeight: 700,
                        fontSize: 15,
                        color: "white",
                        marginBottom: 4,
                      }}
                    >
                      {ind.title}
                    </h3>
                    <p
                      style={{
                        fontSize: 12.5,
                        color: "rgba(255,255,255,0.82)",
                        lineHeight: 1.5,
                      }}
                    >
                      {ind.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FRAMEWORK ══ */}
      <section
        style={{
          padding: "36px clamp(16px,4vw,40px)",
          background: "linear-gradient(180deg,#f8faff,white)",
        }}
      >
        <div style={{ maxWidth: 1480, margin: "0 auto" }}>
          <Reveal>
            <div
              style={{
                margin: "0 auto 72px",
              }}
            >
              <div
                style={{
                  display: "inline-block",
                  background: "#f5f3ff",
                  borderRadius: 8,
                  padding: "4px 14px",
                  fontSize: 12,
                  fontWeight: 700,
                  color: "#7c3aed",
                  letterSpacing: "0.08em",
                  marginBottom: 14,
                }}
              >
                PROCESS
              </div>
              <h2
                style={{
                  fontSize: "clamp(1.7rem,3.2vw,2.7rem)",
                  fontWeight: 800,
                  color: "#0f172a",
                  marginBottom: 14,
                }}
              >
                Our Proven Growth Framework
              </h2>
              <p style={{ fontSize: 16, color: "#475569", lineHeight: 1.75 }}>
                A systematic, data-driven process designed to generate
                consistent leads, conversions, and measurable ROI across
                platforms.
              </p>
            </div>
          </Reveal>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
              gap: 20,
            }}
          >
            {[
              {
                step: "01",
                color: "#ef4444",
                bg: "#fef2f2",
                icon: "🔍",
                title: "Social Media Audit & Research",
                desc: "Deep audit of your accounts, competitors, audience behavior, and historical performance to identify gaps and growth opportunities.",
                points: [
                  "Platform & account performance audit",
                  "Audience & competitor research",
                  "Content & funnel gap analysis",
                  "KPI definition & benchmarks",
                ],
              },
              {
                step: "02",
                color: "#6366f1",
                bg: "#eef2ff",
                icon: "🗺",
                title: "Strategy & Funnel Architecture",
                desc: "Platform-specific strategies and conversion-focused funnels aligned with your business objectives and growth goals.",
                points: [
                  "Content & campaign roadmap",
                  "Paid + organic funnel design",
                  "Messaging & positioning strategy",
                  "Budget planning & forecasting",
                ],
              },
              {
                step: "03",
                color: "#10b981",
                bg: "#ecfdf5",
                icon: "🎨",
                title: "Creative Execution & Launch",
                desc: "Our creative and performance teams execute campaigns with precision, ensuring strong visual branding and conversion readiness.",
                points: [
                  "Ad creatives & content production",
                  "Campaign setup & QA",
                  "Pixel, events & analytics setup",
                  "Controlled rollout & A/B testing",
                ],
              },
              {
                step: "04",
                color: "#0ea5e9",
                bg: "#f0f9ff",
                icon: "📊",
                title: "Optimization, Scaling & Reporting",
                desc: "Continuously optimize campaigns, scale high-performing strategies, and deliver transparent reporting focused on ROI.",
                points: [
                  "Performance monitoring & optimization",
                  "Budget scaling & ROAS improvement",
                  "Weekly / monthly performance reports",
                  "Continuous growth iteration",
                ],
              },
            ].map((s, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div
                  className="sm-card"
                  style={{
                    borderRadius: 22,
                    border: "1px solid #e2e8f0",
                    background: "white",
                    padding: "26px 22px",
                    boxShadow: "0 4px 18px rgba(0,0,0,0.05)",
                    height: "100%",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      marginBottom: 16,
                    }}
                  >
                    <div
                      style={{
                        width: 48,
                        height: 48,
                        borderRadius: 14,
                        background: s.bg,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 22,
                        flexShrink: 0,
                      }}
                    >
                      {s.icon}
                    </div>
                    <span
                      style={{
                        fontSize: 11,
                        fontWeight: 800,
                        color: s.color,
                        letterSpacing: "0.1em",
                      }}
                    >
                      STEP {s.step}
                    </span>
                  </div>
                  <h3
                    style={{
                      fontWeight: 700,
                      fontSize: 15,
                      color: "#0f172a",
                      marginBottom: 8,
                    }}
                  >
                    {s.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 13,
                      color: "#64748b",
                      lineHeight: 1.68,
                      marginBottom: 14,
                    }}
                  >
                    {s.desc}
                  </p>
                  <div
                    style={{ display: "flex", flexDirection: "column", gap: 7 }}
                  >
                    {s.points.map((p, j) => (
                      <div
                        key={j}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 8,
                          fontSize: 13,
                          color: "#374151",
                        }}
                      >
                        <span
                          style={{
                            width: 5,
                            height: 5,
                            borderRadius: "50%",
                            background: s.color,
                            flexShrink: 0,
                          }}
                        />
                        {p}
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ WHY CHOOSE US ══ */}
      <section
        style={{ padding: "36px clamp(16px,4vw,40px)", background: "white" }}
      >
        <div style={{ maxWidth: 1480, margin: "0 auto" }}>
          <Reveal>
            <div
              style={{
                margin: "0 auto 72px",
              }}
            >
              <div
                style={{
                  display: "inline-block",
                  background: "#ecfdf5",
                  borderRadius: 8,
                  padding: "4px 14px",
                  fontSize: 12,
                  fontWeight: 700,
                  color: "#059669",
                  letterSpacing: "0.08em",
                  marginBottom: 14,
                }}
              >
                WHY US
              </div>
              <h2
                style={{
                  fontSize: "clamp(1.7rem,3.2vw,2.7rem)",
                  fontWeight: 800,
                  color: "#0f172a",
                  marginBottom: 14,
                }}
              >
                Why Brands Choose Us as Their Growth Partner
              </h2>
              <p style={{ fontSize: 16, color: "#475569", lineHeight: 1.75 }}>
                We operate as a strategic growth partner — combining creativity,
                performance marketing, and analytics to drive real business
                outcomes.
              </p>
            </div>
          </Reveal>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(360px,1fr))",
              gap: 18,
            }}
          >
            {[
              {
                icon: "🎯",
                bg: "#fef2f2",
                title: "Strategy Before Execution",
                desc: "Every campaign starts with deep research, audience insights, and business alignment — not random posting.",
              },
              {
                icon: "📊",
                bg: "#eef2ff",
                title: "Performance & ROI Focused",
                desc: "We optimize every platform for measurable KPIs — leads, conversions, ROAS, and long-term revenue impact.",
              },
              {
                icon: "👥",
                bg: "#ecfdf5",
                title: "Dedicated Expert Teams",
                desc: "Your brand is handled by platform specialists — strategists, creatives, and performance marketers.",
              },
              {
                icon: "🔄",
                bg: "#f0f9ff",
                title: "Full-Funnel Approach",
                desc: "From awareness to conversion and retention, we design integrated funnels across every buyer stage.",
              },
              {
                icon: "🛡",
                bg: "#fef3c7",
                title: "Transparent Reporting",
                desc: "No vanity metrics. Clear dashboards, honest reporting, and actionable insights aligned with business goals.",
              },
              {
                icon: "📈",
                bg: "#f5f3ff",
                title: "Built to Scale With You",
                desc: "Whether startup or enterprise, our systems and campaigns scale seamlessly as your business grows.",
              },
            ].map((f, i) => (
              <Reveal key={i} delay={i * 0.07}>
                <div
                  className="sm-card"
                  style={{
                    background: f.bg,
                    borderRadius: 18,
                    padding: "22px 18px",
                    border: "1px solid rgba(0,0,0,0.05)",
                  }}
                >
                  <div style={{ fontSize: 28, marginBottom: 12 }}>{f.icon}</div>
                  <div
                    style={{
                      fontWeight: 700,
                      fontSize: 14.5,
                      color: "#0f172a",
                      marginBottom: 6,
                      fontFamily: " sans-serif",
                    }}
                  >
                    {f.title}
                  </div>
                  <div
                    style={{ fontSize: 13, color: "#64748b", lineHeight: 1.68 }}
                  >
                    {f.desc}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA BANNER ══ */}
      <section style={{ padding: "0 clamp(16px,4vw,40px) 96px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <Reveal>
            <div
              style={{
                borderRadius: 28,
                background:
                  "linear-gradient(135deg,#1e1b4b,#4f46e5,#7c3aed,#ec4899)",
                padding: "clamp(40px,6vw,72px) clamp(24px,5vw,56px)",
                textAlign: "center",
                boxShadow: "0 24px 80px rgba(99,102,241,0.28)",
                backgroundSize: "300% 300%",
                animation: "smGrad 7s ease infinite",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: -80,
                  right: -80,
                  width: 320,
                  height: 320,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.06)",
                  pointerEvents: "none",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: -60,
                  left: -60,
                  width: 260,
                  height: 260,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.04)",
                  pointerEvents: "none",
                }}
              />
              <div style={{ position: "relative", zIndex: 1 }}>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    background: "rgba(255,255,255,0.15)",
                    borderRadius: 30,
                    padding: "6px 16px",
                    marginBottom: 20,
                    fontSize: 13,
                    fontWeight: 600,
                    color: "white",
                  }}
                >
                  📅 Free Social Media Audit & Strategy Session
                </div>
                <h3
                  style={{
                    fontSize: "clamp(1.5rem,3vw,2.4rem)",
                    fontWeight: 800,
                    color: "white",
                    marginBottom: 14,
                    lineHeight: 1.2,
                  }}
                >
                  Ready to Turn Social Media Into a Predictable Growth Channel?
                </h3>
                <p
                  style={{
                    color: "rgba(255,255,255,0.85)",
                    maxWidth: 580,
                    margin: "0 auto 32px",
                    lineHeight: 1.75,
                    fontSize: 15.5,
                  }}
                >
                  Get a personalized audit of your social media presence, ad
                  performance, and growth opportunities — completely free. No
                  sales pressure, just actionable insights.
                </p>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    gap: 12,
                  }}
                >
                  <button
                    style={{
                      background: "white",
                      color: "#4f46e5",
                      border: "none",
                      borderRadius: 13,
                      padding: "14px 32px",
                      fontWeight: 700,
                      fontSize: 15,
                      cursor: "pointer",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      transition: "all .3s",
                      boxShadow: "0 6px 20px rgba(0,0,0,0.2)",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.transform = "translateY(-3px)")
                    }
                    onMouseLeave={(e) => (e.currentTarget.style.transform = "")}
                  >
                    Get My Free Audit <ArrowRight size={15} />
                  </button>
                  <button
                    style={{
                      background: "rgba(255,255,255,0.12)",
                      color: "white",
                      border: "1.5px solid rgba(255,255,255,0.35)",
                      borderRadius: 13,
                      padding: "14px 32px",
                      fontWeight: 600,
                      fontSize: 15,
                      cursor: "pointer",
                      backdropFilter: "blur(8px)",
                      transition: "all .3s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background =
                        "rgba(255,255,255,0.2)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background =
                        "rgba(255,255,255,0.12)")
                    }
                  >
                    Book a Strategy Call
                  </button>
                </div>
                <div
                  style={{
                    marginTop: 20,
                    fontSize: 13,
                    color: "rgba(255,255,255,0.65)",
                  }}
                >
                  ✓ No obligation &nbsp;•&nbsp; ✓ 30-minute expert review
                  &nbsp;•&nbsp; ✓ Actionable growth plan
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══ FAQ ══ */}
      <section
        style={{ padding: "0 clamp(16px,4vw,40px) 96px", background: "white" }}
      >
        <div style={{ margin: "0 auto" }}>
          <Reveal>
            <div style={{ marginBottom: 56 }}>
              <div
                style={{
                  display: "inline-block",
                  background: "#f5f3ff",
                  borderRadius: 8,
                  padding: "4px 14px",
                  fontSize: 12,
                  fontWeight: 700,
                  color: "#7c3aed",
                  letterSpacing: "0.08em",
                  marginBottom: 14,
                }}
              >
                FAQ
              </div>
              <h2
                style={{
                  fontSize: "clamp(1.6rem,3vw,2.5rem)",
                  fontWeight: 800,
                  color: "#0f172a",
                  marginBottom: 14,
                }}
              >
                Frequently Asked Questions
              </h2>
              <p style={{ fontSize: 16, color: "#475569", lineHeight: 1.75 }}>
                Everything you need to know before choosing a social media
                marketing partner.
              </p>
            </div>
          </Reveal>
          {[
            {
              q: "How long does it take to see results from social media marketing?",
              a: "Organic growth typically takes 60–90 days to gain momentum, while paid campaigns can start generating leads within a few weeks. Sustainable results come from consistent optimization and data-driven scaling.",
            },
            {
              q: "Which social media platforms are best for my business?",
              a: "The right platform depends on your business model and audience. B2B companies usually perform best on LinkedIn, eCommerce brands on Meta and Instagram, while YouTube works well for long-term brand authority and discovery.",
            },
            {
              q: "Do you focus on organic growth, paid ads, or both?",
              a: "We use a hybrid approach. Organic content builds brand trust and engagement, while paid advertising accelerates reach, leads, and revenue. Combining both ensures consistent and scalable growth.",
            },
            {
              q: "How do you measure success and ROI?",
              a: "Success is measured through clear KPIs such as leads, conversions, ROAS, engagement quality, and revenue impact. We provide transparent reporting dashboards that connect social media performance directly to business outcomes.",
            },
            {
              q: "What industries do you specialize in?",
              a: "We work with B2B companies, startups, SaaS businesses, eCommerce brands, and local service providers. Our strategies are customized based on industry dynamics, audience behavior, and growth stage.",
            },
            {
              q: "Will I have a dedicated account manager?",
              a: "Yes. You'll have a dedicated account manager supported by platform specialists, creatives, and performance marketers to ensure smooth communication and consistent results.",
            },
            {
              q: "How much does social media marketing cost?",
              a: "Pricing depends on platforms, campaign complexity, ad spend, and growth objectives. We offer flexible packages designed to scale with your business. A detailed proposal is shared after an initial strategy discussion.",
            },
            {
              q: "Can you work with our internal marketing or sales team?",
              a: "Absolutely. We frequently collaborate with in-house teams, agencies, and sales departments to ensure alignment, seamless execution, and better lead conversion.",
            },
          ].map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} delay={i * 0.04} />
          ))}
        </div>
      </section>

      {/* ══ CONTACT ══ */}
      <section
        style={{
          padding: "80px clamp(16px,4vw,40px) 96px",
          background:
            "linear-gradient(135deg,#dbeafe 0%,#e0e7ff 50%,#ede9fe 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -80,
            right: -80,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "rgba(99,102,241,0.12)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -60,
            left: -60,
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: "rgba(236,72,153,0.07)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            position: "relative",
            zIndex: 1,
          }}
        >
          <Reveal>
            <div
              style={{
                textAlign: "center",
                maxWidth: 520,
                margin: "0 auto 48px",
              }}
            >
              <h2
                style={{
                  fontSize: "clamp(1.7rem,3vw,2.4rem)",
                  fontWeight: 800,
                  color: "#0f172a",
                  marginBottom: 12,
                }}
              >
                Ready to Grow Your Business?
              </h2>
              <p style={{ color: "#475569", fontSize: 15.5, lineHeight: 1.75 }}>
                Speak with our experts today. We help brands scale with powerful
                social media, design, automation, and cloud solutions.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: 14,
                marginBottom: 52,
              }}
            >
              <button
                style={{
                  background: "linear-gradient(135deg,#6366f1,#4f46e5)",
                  color: "white",
                  border: "none",
                  borderRadius: 13,
                  padding: "14px 36px",
                  fontSize: 15,
                  fontWeight: 600,
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  boxShadow: "0 6px 24px rgba(99,102,241,0.35)",
                  transition: "all .3s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateY(-2px)")
                }
                onMouseLeave={(e) => (e.currentTarget.style.transform = "")}
              >
                Get a Free Quote <ArrowRight size={15} />
              </button>
              <a
                href="tel:+919766650411"
                style={{
                  background: "#16a34a",
                  color: "white",
                  borderRadius: 13,
                  padding: "14px 32px",
                  fontSize: 15,
                  fontWeight: 600,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  textDecoration: "none",
                  boxShadow: "0 6px 24px rgba(22,163,74,0.28)",
                  transition: "all .3s",
                }}
              >
                <Phone size={15} /> Call Sales
              </a>
            </div>
          </Reveal>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
              gap: 14,
            }}
          >
            {[
              {
                icon: <Phone size={20} color="#6366f1" />,
                title: "Phone Number",
                val: "+91 97666 50411",
              },
              {
                icon: <Mail size={20} color="#6366f1" />,
                title: "Email Address",
                val: "info@albostechnologies.com",
              },
              {
                icon: <MapPin size={20} color="#6366f1" />,
                title: "Office Location",
                val: "Office no. 78, 5th floor, Kunal Plaza, Pune, MH 411019",
              },
              {
                icon: <Clock size={20} color="#6366f1" />,
                title: "Office Hours",
                val: "Mon – Sat, 10:00 AM – 7:00 PM",
              },
            ].map((c, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div
                  className="sm-card h-[170px]"
                  style={{
                    background: "white",
                    borderRadius: 18,
                    padding: "22px 18px",
                    textAlign: "center",
                    border: "1px solid rgba(255,255,255,0.9)",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.07)",
                  }}
                >
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 13,
                      background: "#eef2ff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 10px",
                    }}
                  >
                    {c.icon}
                  </div>
                  <div
                    style={{
                      fontWeight: 700,
                      fontSize: 14,
                      color: "#0f172a",
                      marginBottom: 5,
                      fontFamily: " sans-serif",
                    }}
                  >
                    {c.title}
                  </div>
                  <div
                    style={{ fontSize: 13, color: "#64748b", lineHeight: 1.5 }}
                  >
                    {c.val}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
