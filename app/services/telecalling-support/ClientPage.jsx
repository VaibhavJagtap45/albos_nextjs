"use client";
import Image from "next/image";

import { useState, useEffect, useRef } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  CheckCircle2,
  PhoneCall,
  PhoneIncoming,
  PhoneOutgoing,
  Mic,
  BarChart2,
  MessageSquare,
  Headphones,
  Zap,
  Shield,
  Globe,
  Users,
  Settings,
  TrendingUp,
  Star,
  ChevronRight,
  Wifi,
  Volume2,
  Activity,
  RefreshCw,
  Layout,
  Database,
  Plug,
  Bot,
  Link,
  BarChart3,
  Cloud,
  Route,
  LayoutDashboard,
  Cpu,
  ClipboardList,
  Layers,
} from "lucide-react";

/* ── Intersection Observer Hook ── */
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

/* ── Reveal Wrapper ── */
function Reveal({ children, delay = 0, direction = "up", style = {} }) {
  const [ref, inView] = useInView();
  const dirs = {
    up: "translateY(36px)",
    down: "translateY(-36px)",
    left: "translateX(-36px)",
    right: "translateX(36px)",
  };
  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : dirs[direction],
        transition: `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

/* ── Animated Counter ── */
function Counter({ end, suffix = "" }) {
  const [n, setN] = useState(0);
  const [ref, inView] = useInView();
  useEffect(() => {
    if (!inView) return;
    let v = 0;
    const step = end / 55;
    const t = setInterval(() => {
      v += step;
      if (v >= end) {
        setN(end);
        clearInterval(t);
      } else setN(Math.floor(v));
    }, 16);
    return () => clearInterval(t);
  }, [inView, end]);
  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

/* ── Floating Particles ── */
function Particles({ count = 14, color = "rgba(59,130,246,0.18)" }) {
  const pts = Array.from({ length: count }, (_, i) => ({
    id: i,
    size: 3 + (i % 5),
    x: (i * 19 + 7) % 94,
    y: (i * 27 + 5) % 88,
    dur: 5 + (i % 7),
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
            background: color,
            left: `${p.x}%`,
            top: `${p.y}%`,
            animation: `tcFloat ${p.dur}s ease-in-out ${p.delay}s infinite alternate`,
          }}
        />
      ))}
    </div>
  );
}

/* ── Ticker ── */
const stack = [
  "VoIP Calling",
  "SIP Trunking",
  "IVR Automation",
  "CRM Integration",
  "WhatsApp API",
  "Call Analytics",
  "Cloud PBX",
  "Smart Routing",
  "Live Dashboards",
  "AI Dialers",
  "SLA Tracking",
  "Omnichannel",
];

const iconMap = {
  "VoIP Calling": Phone,
  "SIP Trunking": Plug,
  "IVR Automation": Bot,
  "CRM Integration": Link,
  "WhatsApp API": MessageSquare,
  "Call Analytics": BarChart3,
  "Cloud PBX": Cloud,
  "Smart Routing": Route,
  "Live Dashboards": LayoutDashboard,
  "AI Dialers": Cpu,
  "SLA Tracking": ClipboardList,
  Omnichannel: Layers,
};

function Ticker() {
  const items = [...stack, ...stack];

  return (
    <div
      style={{
        overflow: "hidden",
        padding: "14px 0",
        background: "#f8faff",
        borderTop: "1px solid #e2e8f0",
        borderBottom: "1px solid #e2e8f0",
      }}
    >
      <div
        style={{
          display: "inline-flex",
          animation: "tcMarquee 24s linear infinite",
        }}
      >
        {items.map((t, i) => {
          const Icon = iconMap[t];
          return (
            <span
              key={i}
              style={{
                padding: "0 26px",
                fontSize: 14.5,
                fontWeight: 600,
                color: "#64748b",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <Icon size={36} color="#3b82f6" />
              {t}
            </span>
          );
        })}
      </div>
    </div>
  );
}

/* ── Live Call Indicator ── */
function LiveCallBadge({ label, color = "#10b981" }) {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 7,
        background: "white",
        borderRadius: 30,
        padding: "5px 13px",
        boxShadow: "0 3px 14px rgba(0,0,0,0.1)",
        border: `1.5px solid ${color}22`,
        fontSize: 13,
        fontWeight: 600,
        color: "#1e293b",
      }}
    >
      <span
        style={{
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: color,
          boxShadow: `0 0 0 3px ${color}30`,
          animation: "tcPulse 1.5s ease-in-out infinite",
        }}
      />
      {label}
    </div>
  );
}

/* ── Hero Visual ── */
function HeroVisual() {
  const [activeCall, setActiveCall] = useState(0);
  const calls = [
    { name: "Rajesh Kumar", status: "On Call", time: "02:14", dept: "Sales" },
    { name: "Priya Sharma", status: "On Hold", time: "00:47", dept: "Support" },
    { name: "Amit Patel", status: "On Call", time: "05:32", dept: "Billing" },
  ];
  useEffect(() => {
    const t = setInterval(
      () => setActiveCall((a) => (a + 1) % calls.length),
      2800,
    );
    return () => clearInterval(t);
  }, []);

  return (
    <div style={{ position: "relative", width: "100%", maxWidth: 370 }}>
      {/* Main dashboard card */}
      <div
        style={{
          background: "white",
          borderRadius: 24,
          boxShadow: "0 24px 80px rgba(59,130,246,0.18)",
          border: "1px solid #e2e8f0",
          overflow: "hidden",
        }}
      >
        {/* Header bar */}
        <div
          style={{
            background: "linear-gradient(135deg,#1e40af,#3b82f6)",
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
              }}
            >
              <Headphones size={18} color="white" />
            </div>
            <div>
              <div style={{ fontSize: 14.5, fontWeight: 700, color: "white" }}>
                Call Center Dashboard
              </div>
              <div style={{ fontSize: 12.5, color: "rgba(255,255,255,0.75)" }}>
                Live · 24 Agents Active
              </div>
            </div>
          </div>
          <LiveCallBadge label="LIVE" color="#10b981" />
        </div>

        {/* Metrics row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: 0,
            borderBottom: "1px solid #f1f5f9",
          }}
        >
          {[
            { label: "Calls Today", val: "1,284", color: "#2563eb" },
            { label: "Avg Handle", val: "3m 42s", color: "#10b981" },
            { label: "CSAT Score", val: "96.4%", color: "#8b5cf6" },
          ].map((m, i) => (
            <div
              key={i}
              style={{
                padding: "14px 16px",
                borderRight: i < 2 ? "1px solid #f1f5f9" : "none",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: 17,
                  fontWeight: 600,
                  color: m.color,
                  fontFamily: " sans-serif",
                }}
              >
                {m.val}
              </div>
              <div
                style={{ fontSize: 12.5, color: "#94a3b8", fontWeight: 500 }}
              >
                {m.label}
              </div>
            </div>
          ))}
        </div>

        {/* Active calls */}
        <div style={{ padding: "14px 16px" }}>
          <div
            style={{
              fontSize: 13,
              fontWeight: 700,
              color: "#94a3b8",
              letterSpacing: "0.07em",
              marginBottom: 10,
            }}
          >
            ACTIVE CALLS
          </div>
          {calls.map((c, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "10px 12px",
                borderRadius: 12,
                background: activeCall === i ? "#eff6ff" : "transparent",
                border:
                  activeCall === i
                    ? "1.5px solid #bfdbfe"
                    : "1.5px solid transparent",
                marginBottom: 6,
                transition: "all 0.4s",
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 10,
                  background: activeCall === i ? "#2563eb" : "#f1f5f9",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "background 0.4s",
                }}
              >
                <PhoneCall
                  size={16}
                  color={activeCall === i ? "white" : "#94a3b8"}
                />
              </div>
              <div style={{ flex: 1 }}>
                <div
                  style={{ fontSize: 14.5, fontWeight: 700, color: "#0f172a" }}
                >
                  {c.name}
                </div>
                <div style={{ fontSize: 12.5, color: "#94a3b8" }}>
                  {c.dept} · {c.status}
                </div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div
                  style={{
                    fontSize: 14.5,
                    fontWeight: 700,
                    color: activeCall === i ? "#2563eb" : "#64748b",
                    fontFamily: "monospace",
                  }}
                >
                  {c.time}
                </div>
                {activeCall === i && (
                  <div
                    style={{
                      fontSize: 12,
                      color: "#10b981",
                      fontWeight: 700,
                      animation: "tcPulse 1.5s infinite",
                    }}
                  >
                    ● ACTIVE
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Mini chart */}
        <div
          style={{ padding: "10px 16px 16px", borderTop: "1px solid #f1f5f9" }}
        >
          <div
            style={{
              fontSize: 13,
              fontWeight: 700,
              color: "#94a3b8",
              letterSpacing: "0.07em",
              marginBottom: 8,
            }}
          >
            CALL VOLUME (TODAY)
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              gap: 4,
              height: 44,
            }}
          >
            {[30, 55, 45, 70, 60, 85, 75, 90, 80, 95, 70, 88].map((h, i) => (
              <div
                key={i}
                style={{
                  flex: 1,
                  height: `${h}%`,
                  borderRadius: 4,
                  background: i === 11 ? "#2563eb" : "#e2e8f0",
                  transition: "height 0.5s",
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Floating badges */}
      {[
        {
          icon: "📞",
          text: "238 calls/hr",
          top: "10%",
          left: "-18%",
          color: "#eff6ff",
          border: "#bfdbfe",
          delay: 0,
        },
        {
          icon: "⭐",
          text: "4.9 CSAT",
          bottom: "22%",
          right: "-16%",
          color: "#fefce8",
          border: "#fef08a",
          delay: 0.6,
        },
        {
          icon: "🎯",
          text: "94% FCR",
          bottom: "6%",
          left: "-12%",
          color: "#f0fdf4",
          border: "#bbf7d0",
          delay: 1.2,
        },
      ].map((b, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            ...b,
            background: b.color,
            border: `1.5px solid ${b.border}`,
            borderRadius: 14,
            padding: "8px 14px",
            display: "flex",
            alignItems: "center",
            gap: 8,
            fontSize: 14.5,
            fontWeight: 600,

            color: "#0f172a",
            boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
            animation: `tcFloat ${3 + i * 0.8}s ease-in-out ${b.delay}s infinite alternate`,
            whiteSpace: "nowrap",
          }}
        >
          <span style={{ fontSize: 16 }}>{b.icon}</span>
          {b.text}
        </div>
      ))}
    </div>
  );
}

/* ══════════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════════ */
export default function TelecallingAndSupportServices() {
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
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Plus+Jakarta+Sans:wght@400;500;600&display=swap');
        *{box-sizing:border-box;}
        body, div, p, span, li, a, button {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          letter-spacing: 0.01em;
          word-spacing: 0.03em;
        }
                @keyframes tcFloat   {0%{transform:translateY(0);}100%{transform:translateY(-18px);}}
        @keyframes tcMarquee {0%{transform:translateX(0);}100%{transform:translateX(-50%);}}
        @keyframes tcPulse   {0%,100%{opacity:1;}50%{opacity:0.45;}}
        @keyframes tcSpin    {from{transform:rotate(0deg);}to{transform:rotate(360deg);}}
        @keyframes tcGrad    {0%,100%{background-position:0% 50%;}50%{background-position:100% 50%;}}
        @keyframes tcBlink   {0%,100%{opacity:1;transform:scale(1);}50%{opacity:0.6;transform:scale(0.95);}}
        .hov-card{transition:transform .3s ease,box-shadow .3s ease;}
        .hov-card:hover{transform:translateY(-7px);box-shadow:0 22px 55px rgba(59,130,246,0.13)!important;}
        .hov-img img{transition:transform .55s ease;}
        .hov-img:hover img{transform:scale(1.06);}
      `}</style>

      {/* ══ HERO ══ */}
      <section
        style={{
          position: "relative",
          padding: "96px 0 80px",
          overflow: "hidden",
          background:
            "linear-gradient(155deg,#eef6ff 0%,#ffffff 55%,#f0f9ff 100%)",
        }}
      >
        <Particles />
        <svg
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            opacity: 0.28,
            pointerEvents: "none",
          }}
        >
          <defs>
            <pattern
              id="g1"
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
          <rect width="100%" height="100%" fill="url(#g1)" />
        </svg>
        <div
          style={{
            position: "absolute",
            top: -100,
            right: -60,
            width: 480,
            height: 480,
            borderRadius: "50%",
            background:
              "radial-gradient(circle,rgba(59,130,246,0.12),transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -70,
            left: -50,
            width: 360,
            height: 360,
            borderRadius: "50%",
            background:
              "radial-gradient(circle,rgba(16,185,129,0.08),transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: 1480,
            margin: "0 auto",
            padding: "0 5%",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: 52,
            justifyContent: "space-between",
          }}
        >
          <div style={{ flex: "1 1 280px" }}>
            <Reveal>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 7,
                  background: "rgba(37,99,235,0.08)",
                  border: "1px solid rgba(37,99,235,0.2)",
                  borderRadius: 40,
                  padding: "5px 15px",
                  marginBottom: 22,
                }}
              >
                <PhoneCall size={13} color="#2563eb" />
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    color: "#2563eb",
                    letterSpacing: "0.07em",
                  }}
                >
                  ENTERPRISE TELECALLING & SUPPORT
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h1
                style={{
                  // fontSize:"clamp(2rem,3.8vw,3.1rem)",
                  fontSize: "56px",
                  fontWeight: 600,
                  fontFamily: "sans-serif",
                  lineHeight: 1.1,
                  // letterSpacing:"-0.02em",
                  color: "#0f172a",
                  marginBottom: 18,
                }}
              >
                Enterprise Telecalling &{" "}
                <span
                  style={{
                    fontFamily: "sans-serif",
                    background: "linear-gradient(135deg,#2563eb,#0ea5e9)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Customer Support
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
                Professional telecalling, customer support, VoIP calling, SIP
                trunking, IVR setup, and CRM-integrated communication solutions
                for enterprises requiring reliability, scalability, and
                exceptional CX.
              </p>
            </Reveal>

            <Reveal delay={0.26}>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 8,
                  marginBottom: 32,
                }}
              >
                <button className="bg-gradient-to-br from-amber-500 btn-amber to-amber-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:-translate-y-1 transition">
                  Get a Free Quote
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
                    transition: "all 0.3s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "#1e293b")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "#0f172a")
                  }
                >
                  View Our Work <ArrowRight size={15} />
                </button>
              </div>
            </Reveal>

            <Reveal delay={0.34}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 18 }}>
                {[
                  ["🎧", "24/7 Support"],
                  ["⚡", "Instant Scale"],
                  ["🔒", "GDPR Safe"],
                ].map(([ic, lb]) => (
                  <div
                    key={lb}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 7,
                      fontSize: 14.5,
                      fontWeight: 500,
                      color: "#475569",
                    }}
                  >
                    <span style={{ fontSize: 15 }}>{ic}</span>
                    {lb}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal
            delay={0.14}
            direction="left"
            style={{ flex: "1 1 380px", maxWidth: 520 }}
          >
            <HeroVisual />
          </Reveal>
        </div>
      </section>

      {/* ══ TICKER ══ */}
      <Ticker />

      {/* ══ STATS ══ */}
      <section style={{ padding: "64px 32px", background: "#f8faff" }}>
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(190px,1fr))",
            gap: 18,
          }}
        >
          {[
            { val: 500, suf: "K+", label: "Calls Handled Monthly", icon: "📞" },
            { val: 98, suf: "%", label: "Customer Satisfaction", icon: "⭐" },
            { val: 200, suf: "+", label: "Enterprise Clients", icon: "🏢" },
            { val: 24, suf: "/7", label: "Support Availability", icon: "🕐" },
          ].map((s, i) => (
            <Reveal key={i} delay={i * 0.09}>
              <div
                className="hov-card"
                style={{
                  background: "white",
                  borderRadius: 20,
                  padding: "26px 20px",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 4px 20px rgba(59,130,246,0.07)",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: 30, marginBottom: 6 }}>{s.icon}</div>
                <div
                  style={{
                    fontSize: 38,
                    fontWeight: 800,
                    color: "#1e40af",
                    lineHeight: 1,
                  }}
                >
                  <Counter end={s.val} suffix={s.suf} />
                </div>
                <div
                  style={{
                    fontSize: 13,
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

      {/* ══ WHAT WE DO ══ */}
      <section style={{ padding: "36px 32px", background: "white" }}>
        <div style={{ maxWidth: 1380, margin: "0 auto" }}>
          <Reveal>
            <div
              style={{
                margin: "0 auto 64px",
              }}
            >
              <div
                style={{
                  display: "inline-block",
                  background: "#ecfdf5",
                  borderRadius: 8,
                  padding: "4px 14px",
                  fontSize: 13,
                  fontWeight: 700,
                  color: "#059669",
                  letterSpacing: "0.08em",
                  marginBottom: 14,
                }}
              >
                SERVICES
              </div>
              <h2
                style={{
                  fontSize: "clamp(1.7rem,3.2vw,2.6rem)",
                  fontWeight: 800,
                  color: "#0f172a",
                  marginBottom: 14,
                }}
              >
                What We Do
              </h2>
              <p style={{ fontSize: 16, color: "#475569", lineHeight: 1.72 }}>
                Complete telecalling and customer communication solutions
                combining trained telecallers with enterprise-grade
                infrastructure, automation, and performance monitoring.
              </p>
            </div>
          </Reveal>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
              gap: 22,
            }}
          >
            {[
              {
                img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&q=80",
                icon: <Headphones size={26} color="#2563eb" />,
                bg: "#eff6ff",
                title: "Managed Telecalling Services",
                desc: "Professional inbound and outbound telecallers trained for support, lead qualification, sales, renewals, and follow-ups.",
              },
              {
                img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80",
                icon: <PhoneCall size={26} color="#10b981" />,
                bg: "#ecfdf5",
                title: "Cloud Telephony & Calling Systems",
                desc: "VoIP calling, SIP trunking, IVR workflows, call routing, virtual numbers, and enterprise-grade calling infrastructure.",
              },
              {
                img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
                icon: <BarChart2 size={26} color="#8b5cf6" />,
                bg: "#f5f3ff",
                title: "CRM, Automation & Analytics",
                desc: "Deep CRM integrations, call logs, recordings, live dashboards, ticketing, SLA tracking, and performance analytics.",
              },
              {
                img: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&q=80",
                icon: <MessageSquare size={26} color="#f59e0b" />,
                bg: "#fffbeb",
                title: "Omnichannel Customer Support",
                desc: "WhatsApp Business API, SMS alerts, chat, email support, and unified communication workflows.",
              },
            ].map((s, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div
                  className="hov-card"
                  style={{
                    borderRadius: 22,
                    overflow: "hidden",
                    border: "1px solid #e2e8f0",
                    background: "white",
                    boxShadow: "0 4px 18px rgba(0,0,0,0.06)",
                  }}
                >
                  <div
                    className="hov-img"
                    style={{
                      height: 175,
                      overflow: "hidden",
                      position: "relative",
                    }}
                  >
                    <Image
                      fill
                      src={s.img}
                      alt={s.title}
                      style={{ objectFit: "cover" }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background:
                          "linear-gradient(to top,rgba(0,0,0,0.3),transparent)",
                      }}
                    />
                  </div>
                  <div style={{ padding: "20px 20px 22px" }}>
                    <div
                      style={{
                        width: 46,
                        height: 46,
                        borderRadius: 13,
                        background: s.bg,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: 12,
                        marginTop: -30,
                        position: "relative",
                        zIndex: 2,
                        border: "2px solid white",
                        boxShadow: "0 4px 14px rgba(0,0,0,0.1)",
                      }}
                    >
                      {s.icon}
                    </div>
                    <h3
                      style={{
                        fontWeight: 700,
                        fontSize: 15,
                        color: "#0f172a",
                        marginBottom: 7,
                      }}
                    >
                      {s.title}
                    </h3>
                    <p
                      style={{
                        fontSize: 14.5,
                        color: "#64748b",
                        lineHeight: 1.75,
                      }}
                    >
                      {s.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ INBOUND / OUTBOUND ══ */}
      <section
        style={{
          padding: "36px 32px",
          background: "linear-gradient(180deg,#f8faff,white)",
        }}
      >
        <div style={{ maxWidth: 1380, margin: "0 auto" }}>
          <Reveal>
            <div
              style={{
                margin: "0 auto 64px",
              }}
            >
              <div
                style={{
                  display: "inline-block",
                  background: "#eff6ff",
                  borderRadius: 8,
                  padding: "4px 14px",
                  fontSize: 13,
                  fontWeight: 700,
                  color: "#2563eb",
                  letterSpacing: "0.08em",
                  marginBottom: 14,
                }}
              >
                TELECALLING
              </div>
              <h2
                style={{
                  fontSize: "clamp(1.7rem,3.2vw,2.6rem)",
                  fontWeight: 800,
                  color: "#0f172a",
                  marginBottom: 14,
                }}
              >
                Inbound & Outbound Telecalling Services
              </h2>
              <p style={{ fontSize: 16, color: "#475569", lineHeight: 1.72 }}>
                Fully managed telecalling services powered by trained agents,
                proven workflows, and enterprise-grade calling systems —
                designed to improve CX and drive measurable business outcomes.
              </p>
            </div>
          </Reveal>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(340px,1fr))",
              gap: 24,
            }}
          >
            {/* Inbound */}
            <Reveal delay={0.1} direction="right">
              <div
                className="hov-card"
                style={{
                  borderRadius: 24,
                  border: "1px solid #e2e8f0",
                  background: "white",
                  overflow: "hidden",
                  boxShadow: "0 6px 24px rgba(59,130,246,0.08)",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    height: 180,
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                    width={800}
                    height={600}
                    alt="Inbound telecalling"
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
                        "linear-gradient(135deg,rgba(37,99,235,0.65),rgba(16,185,129,0.3))",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: 16,
                      left: 20,
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                    }}
                  >
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 12,
                        background: "rgba(255,255,255,0.2)",
                        backdropFilter: "blur(8px)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <PhoneIncoming size={20} color="white" />
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: 16,
                          fontWeight: 800,
                          color: "white",
                          fontFamily: " sans-serif",
                        }}
                      >
                        Inbound Telecalling
                      </div>
                      <LiveCallBadge label="Support Active" color="#10b981" />
                    </div>
                  </div>
                </div>
                <div style={{ padding: "24px 26px" }}>
                  <p
                    style={{
                      fontSize: 14,
                      color: "#475569",
                      lineHeight: 1.72,
                      marginBottom: 18,
                    }}
                  >
                    Our inbound services focus on customer support, issue
                    resolution, and experience management. Trained agents handle
                    high call volumes while maintaining quality and SLA
                    commitments.
                  </p>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 9,
                      marginBottom: 20,
                    }}
                  >
                    {[
                      "Customer support & helpdesk calling",
                      "Complaint handling & escalation management",
                      "Order, service & ticket status updates",
                      "Appointment confirmations & reminders",
                      "SLA-based response & call resolution",
                    ].map((t, i) => (
                      <div
                        key={i}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: 9,
                          fontSize: 14.5,
                          color: "#374151",
                        }}
                      >
                        <CheckCircle2
                          size={15}
                          color="#10b981"
                          style={{ flexShrink: 0, marginTop: 1 }}
                        />
                        {t}
                      </div>
                    ))}
                  </div>
                  <div
                    style={{
                      background: "#f0fdf4",
                      borderRadius: 14,
                      padding: "14px 16px",
                      border: "1px solid #bbf7d0",
                    }}
                  >
                    <div
                      style={{
                        fontWeight: 700,
                        fontSize: 14.5,
                        color: "#065f46",
                        marginBottom: 5,
                      }}
                    >
                      Why Our Inbound Support Works
                    </div>
                    <p
                      style={{
                        fontSize: 13,
                        color: "#374151",
                        lineHeight: 1.75,
                      }}
                    >
                      Script-driven conversations, CRM-integrated call handling,
                      real-time monitoring, call recording, and continuous
                      quality audits ensure consistent customer satisfaction.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Outbound */}
            <Reveal delay={0.18} direction="left">
              <div
                className="hov-card"
                style={{
                  borderRadius: 24,
                  border: "1px solid #e2e8f0",
                  background: "white",
                  overflow: "hidden",
                  boxShadow: "0 6px 24px rgba(59,130,246,0.08)",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    height: 180,
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&q=80"
                    width={800}
                    height={600}
                    alt="Outbound telecalling"
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
                        "linear-gradient(135deg,rgba(37,99,235,0.65),rgba(139,92,246,0.3))",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: 16,
                      left: 20,
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                    }}
                  >
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 12,
                        background: "rgba(255,255,255,0.2)",
                        backdropFilter: "blur(8px)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <PhoneOutgoing size={20} color="white" />
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: 16,
                          fontWeight: 800,
                          color: "white",
                          fontFamily: " sans-serif",
                        }}
                      >
                        Outbound Telecalling
                      </div>
                      <LiveCallBadge
                        label="Campaigns Running"
                        color="#f59e0b"
                      />
                    </div>
                  </div>
                </div>
                <div style={{ padding: "24px 26px" }}>
                  <p
                    style={{
                      fontSize: 14,
                      color: "#475569",
                      lineHeight: 1.72,
                      marginBottom: 18,
                    }}
                  >
                    Our outbound services generate leads, nurture prospects, and
                    drive conversions. Each campaign is backed by scripts,
                    performance tracking, and continuous optimization.
                  </p>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 9,
                      marginBottom: 20,
                    }}
                  >
                    {[
                      "Lead generation & qualification",
                      "Sales outreach & follow-up campaigns",
                      "Renewal, reactivation & retention calls",
                      "Survey, feedback & verification calls",
                      "Appointment setting & confirmation",
                    ].map((t, i) => (
                      <div
                        key={i}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: 9,
                          fontSize: 14.5,
                          color: "#374151",
                        }}
                      >
                        <CheckCircle2
                          size={15}
                          color="#2563eb"
                          style={{ flexShrink: 0, marginTop: 1 }}
                        />
                        {t}
                      </div>
                    ))}
                  </div>
                  <div
                    style={{
                      background: "#eff6ff",
                      borderRadius: 14,
                      padding: "14px 16px",
                      border: "1px solid #bfdbfe",
                    }}
                  >
                    <div
                      style={{
                        fontWeight: 700,
                        fontSize: 14.5,
                        color: "#1e40af",
                        marginBottom: 5,
                      }}
                    >
                      Why Our Outbound Campaigns Perform
                    </div>
                    <p
                      style={{
                        fontSize: 13,
                        color: "#374151",
                        lineHeight: 1.75,
                      }}
                    >
                      Data-driven dialing, CRM-based lead assignment, call
                      analytics, A/B-tested scripts, and agent performance
                      tracking ensure higher connect rates and ROI.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div
              style={{
                marginTop: 40,
                background: "linear-gradient(135deg,#f0f7ff,#e8f0fe)",
                borderRadius: 18,
                padding: "22px 28px",
                border: "1px solid #bfdbfe",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  fontSize: 15,
                  color: "#374151",
                  lineHeight: 1.72,
                  maxWidth: 740,
                  margin: "0 auto",
                }}
              >
                Whether you need high-volume inbound support or
                conversion-focused outbound calling, our managed telecalling
                services combine skilled agents with reliable technology to
                deliver consistent, measurable results.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══ CALLING TECHNOLOGY ══ */}
      <section style={{ padding: "36px 32px", background: "white" }}>
        <div style={{ maxWidth: 1380, margin: "0 auto" }}>
          <Reveal>
            <div
              style={{
                margin: "0 auto 64px",
              }}
            >
              <div
                style={{
                  display: "inline-block",
                  background: "#f5f3ff",
                  borderRadius: 8,
                  padding: "4px 14px",
                  fontSize: 13,
                  fontWeight: 700,
                  color: "#7c3aed",
                  letterSpacing: "0.08em",
                  marginBottom: 14,
                }}
              >
                INFRASTRUCTURE
              </div>
              <h2
                style={{
                  fontSize: "clamp(1.7rem,3.2vw,2.6rem)",
                  fontWeight: 800,
                  color: "#0f172a",
                  marginBottom: 14,
                }}
              >
                Calling Technology & Infrastructure
              </h2>
              <p style={{ fontSize: 16, color: "#475569", lineHeight: 1.72 }}>
                Enterprise-grade cloud telephony infrastructure — VoIP calling,
                SIP trunking, IVR workflows, and secure call routing ensuring
                high availability, call quality, and scalability.
              </p>
            </div>
          </Reveal>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
              gap: 22,
            }}
          >
            {[
              {
                img: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?w=600&q=80",
                icon: <Wifi size={24} color="#2563eb" />,
                bg: "#eff6ff",
                title: "VoIP Calling Infrastructure",
                desc: "Internet-based voice calling delivering HD audio, global connectivity, and significantly lower call costs.",
                points: [
                  "HD voice quality & low latency",
                  "Global calling with local presence",
                  "Call recording & monitoring",
                  "Scalable agent-based calling",
                ],
              },
              {
                img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80",
                icon: <Activity size={24} color="#10b981" />,
                bg: "#ecfdf5",
                title: "SIP Trunking & Call Routing",
                desc: "Enterprise SIP trunking for intelligent call routing, DID numbers, multi-agent environments, and seamless integration.",
                points: [
                  "Dedicated SIP trunks & virtual numbers",
                  "Failover & redundancy support",
                  "Load-balanced call distribution",
                  "Secure signaling & call control",
                ],
              },
              {
                img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80",
                icon: <Settings size={24} color="#8b5cf6" />,
                bg: "#f5f3ff",
                title: "IVR & Automated Call Flows",
                desc: "Multi-level IVR systems designed to route calls efficiently, reduce wait times, and deliver consistent CX.",
                points: [
                  "Multi-language IVR support",
                  "Department & skill-based routing",
                  "Time-based & rule-based flows",
                  "CRM-triggered call actions",
                ],
              },
            ].map((c, i) => (
              <Reveal key={i} delay={i * 0.12}>
                <div
                  className="hov-card"
                  style={{
                    borderRadius: 22,
                    overflow: "hidden",
                    border: "1px solid #e2e8f0",
                    background: "white",
                    boxShadow: "0 4px 18px rgba(0,0,0,0.06)",
                  }}
                >
                  <div
                    className="hov-img"
                    style={{
                      height: 165,
                      overflow: "hidden",
                      position: "relative",
                    }}
                  >
                    <Image
                      fill
                      src={c.img}
                      alt={c.title}
                      style={{ objectFit: "cover" }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: "rgba(0,0,0,0.2)",
                      }}
                    />
                  </div>
                  <div style={{ padding: "20px 22px 24px" }}>
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: 12,
                        background: c.bg,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: 13,
                        marginTop: -26,
                        position: "relative",
                        zIndex: 2,
                        border: "2px solid white",
                        boxShadow: "0 4px 14px rgba(0,0,0,0.1)",
                      }}
                    >
                      {c.icon}
                    </div>
                    <h3
                      style={{
                        fontWeight: 700,
                        fontSize: 15,
                        color: "#0f172a",
                        marginBottom: 8,
                      }}
                    >
                      {c.title}
                    </h3>
                    <p
                      style={{
                        fontSize: 14.5,
                        color: "#64748b",
                        lineHeight: 1.75,
                        marginBottom: 14,
                      }}
                    >
                      {c.desc}
                    </p>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 7,
                      }}
                    >
                      {c.points.map((p, j) => (
                        <div
                          key={j}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 8,
                            fontSize: 14,
                            color: "#374151",
                          }}
                        >
                          <span
                            style={{
                              width: 5,
                              height: 5,
                              borderRadius: "50%",
                              background: "#3b82f6",
                              flexShrink: 0,
                            }}
                          />
                          {p}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div
              style={{
                marginTop: 40,
                background: "#f8faff",
                borderRadius: 16,
                padding: "20px 24px",
                border: "1px solid #e2e8f0",
                display: "flex",
                alignItems: "flex-start",
                gap: 12,
              }}
            >
              <Shield
                size={18}
                color="#10b981"
                style={{ flexShrink: 0, marginTop: 1 }}
              />
              <p style={{ fontSize: 14.5, color: "#374151", lineHeight: 1.75 }}>
                Our calling infrastructure is designed for reliability, uptime,
                and compliance — supporting thousands of daily calls with
                real-time monitoring, analytics, and enterprise-grade security
                controls.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══ WHY CHOOSE US ══ */}
      <section
        style={{
          padding: "36px 32px",
          background: "linear-gradient(180deg,#f8faff,white)",
        }}
      >
        <div style={{ maxWidth: 1380, margin: "0 auto" }}>
          <Reveal>
            <div
              style={{
                margin: "0 auto 64px",
              }}
            >
              <div
                style={{
                  display: "inline-block",
                  background: "#fef3c7",
                  borderRadius: 8,
                  padding: "4px 14px",
                  fontSize: 13,
                  fontWeight: 700,
                  color: "#d97706",
                  letterSpacing: "0.08em",
                  marginBottom: 14,
                }}
              >
                WHY US
              </div>
              <h2
                style={{
                  fontSize: "clamp(1.7rem,3.2vw,2.6rem)",
                  fontWeight: 800,
                  color: "#0f172a",
                  marginBottom: 14,
                }}
              >
                Why Enterprises Trust Us
              </h2>
              <p style={{ fontSize: 16, color: "#475569", lineHeight: 1.72 }}>
                From day one, we combine the right people, processes, and
                technology to deliver measurable outcomes for your customer
                communication operations.
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
                icon: <Users size={22} color="#2563eb" />,
                bg: "#eff6ff",
                title: "Trained Agents",
                desc: "Every telecaller is trained, scripted, and quality-audited before going live.",
              },
              {
                icon: <TrendingUp size={22} color="#10b981" />,
                bg: "#ecfdf5",
                title: "Performance Driven",
                desc: "Real-time dashboards, KPI tracking, and SLA reporting keep every campaign optimized.",
              },
              {
                icon: <Shield size={22} color="#8b5cf6" />,
                bg: "#f5f3ff",
                title: "Secure & Compliant",
                desc: "GDPR-aligned operations, encrypted call storage, and NDA-protected engagements.",
              },
              {
                icon: <Globe size={22} color="#f59e0b" />,
                bg: "#fffbeb",
                title: "Multilingual Support",
                desc: "English, Hindi, and 8+ regional languages for pan-India and global operations.",
              },
              {
                icon: <Zap size={22} color="#ef4444" />,
                bg: "#fef2f2",
                title: "Rapid Deployment",
                desc: "Get your telecalling team and infrastructure live within 72 hours.",
              },
              {
                icon: <Database size={22} color="#6366f1" />,
                bg: "#eef2ff",
                title: "CRM Integration",
                desc: "Deep integrations with Salesforce, Zoho, HubSpot, LeadSquared, and custom CRMs.",
              },
            ].map((f, i) => (
              <Reveal key={i} delay={i * 0.07}>
                <div
                  className="hov-card"
                  style={{
                    background: f.bg,
                    borderRadius: 18,
                    padding: "22px 18px",
                    border: "1px solid rgba(0,0,0,0.05)",
                  }}
                >
                  <div
                    style={{
                      width: 42,
                      height: 42,
                      borderRadius: 12,
                      background: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 12,
                      boxShadow: "0 2px 10px rgba(0,0,0,0.07)",
                    }}
                  >
                    {f.icon}
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
                    {f.title}
                  </div>
                  <div
                    style={{
                      fontSize: 14.5,
                      color: "#64748b",
                      lineHeight: 1.72,
                    }}
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
      <section style={{ padding: "0 32px 96px" }}>
        <div style={{ maxWidth: 1380, margin: "0 auto" }}>
          <Reveal>
            <div
              style={{
                borderRadius: 28,
                background: "linear-gradient(135deg,#1e3a8a,#2563eb,#0ea5e9)",
                padding: "60px 48px",
                textAlign: "center",
                boxShadow: "0 24px 80px rgba(37,99,235,0.28)",
                backgroundSize: "200% 200%",
                animation: "tcGrad 6s ease infinite",
              }}
            >
              <div style={{ fontSize: 40, marginBottom: 12 }}>🎯</div>
              <h3
                style={{
                  fontSize: "clamp(1.5rem,2.8vw,2.2rem)",
                  fontWeight: 800,
                  color: "white",
                  marginBottom: 12,
                }}
              >
                Ready to Scale Your Customer Support?
              </h3>
              <p
                style={{
                  color: "rgba(255,255,255,0.85)",
                  maxWidth: 560,
                  margin: "0 auto 28px",
                  lineHeight: 1.72,
                  fontSize: 15,
                }}
              >
                Let's build a high-performance telecalling operation for your
                business — from setup to scale, we've got you covered.
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
                    color: "#1d4ed8",
                    border: "none",
                    borderRadius: 13,
                    padding: "14px 32px",
                    fontWeight: 700,
                    fontSize: 15,
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    transition: "all 0.3s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "translateY(-3px)")
                  }
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "")}
                >
                  Get a Free Quote <ArrowRight size={15} />
                </button>
                <a
                  href="tel:+919766650411"
                  style={{
                    background: "rgba(255,255,255,0.15)",
                    color: "white",
                    border: "1.5px solid rgba(255,255,255,0.4)",
                    borderRadius: 13,
                    padding: "14px 32px",
                    fontWeight: 600,
                    fontSize: 15,
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    backdropFilter: "blur(8px)",
                    transition: "all 0.3s",
                  }}
                >
                  <Phone size={15} /> Call Sales Now
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══ CONTACT ══ */}
      <section
        style={{
          padding: "80px 32px 96px",
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
            background: "rgba(59,130,246,0.12)",
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
            background: "rgba(16,185,129,0.08)",
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
              <p style={{ color: "#475569", fontSize: 15.5, lineHeight: 1.72 }}>
                Speak with our experts today. We help brands scale with powerful
                development, design, automation, and cloud solutions.
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
                  background: "linear-gradient(135deg,#2563eb,#1d4ed8)",
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
                  boxShadow: "0 6px 24px rgba(37,99,235,0.32)",
                  transition: "all 0.3s",
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
                  transition: "all 0.3s",
                }}
              >
                <Phone size={15} /> Call Sales
              </a>
            </div>
          </Reveal>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
              gap: 16,
            }}
          >
            {[
              {
                icon: <Phone size={20} color="#2563eb" />,
                title: "Phone Number",
                value: "+91 97666 50411",
              },
              {
                icon: <Mail size={20} color="#2563eb" />,
                title: "Email Address",
                value: "info@albostechnologies.com",
              },
              {
                icon: <MapPin size={20} color="#2563eb" />,
                title: "Office Location",
                value: "Kunal Plaza, Pune MH 411019",
              },
              {
                icon: <Clock size={20} color="#2563eb" />,
                title: "Office Hours",
                value: "Mon – Sat, 10:00 AM – 7:00 PM",
              },
            ].map((c, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div
                  className="hov-card"
                  style={{
                    background: "white",
                    borderRadius: 18,
                    height: 200,
                    padding: "24px 20px",
                    textAlign: "center",
                    border: "1px solid rgba(255,255,255,0.9)",
                    boxShadow: "0 4px 18px rgba(0,0,0,0.07)",
                  }}
                >
                  <div
                    style={{
                      width: 46,
                      height: 46,
                      borderRadius: 13,
                      background: "#eff6ff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 12px",
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
                    style={{
                      fontSize: 14.5,
                      color: "#64748b",
                      lineHeight: 1.68,
                    }}
                  >
                    {c.value}
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
