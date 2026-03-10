"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const CHIPS = [
  { name: "React", logo: "https://cdn.simpleicons.org/react" },
  { name: "Next.js", logo: "https://cdn.simpleicons.org/nextdotjs" },
  { name: "Node.js", logo: "https://cdn.simpleicons.org/nodedotjs" },
  { name: "Laravel", logo: "https://cdn.simpleicons.org/laravel" },
  { name: "Django", logo: "https://cdn.simpleicons.org/django" },
  { name: "Kotlin", logo: "https://cdn.simpleicons.org/kotlin" },
  { name: "Swift", logo: "https://cdn.simpleicons.org/swift" },
  { name: "Flutter", logo: "https://cdn.simpleicons.org/flutter" },
  { name: "Solidity", logo: "https://cdn.simpleicons.org/solidity" },
  { name: "AWS", logo: "https://cdn.simpleicons.org/amazonaws" },
  { name: "Azure", logo: "https://cdn.simpleicons.org/microsoftazure" },
  { name: "Firebase", logo: "https://cdn.simpleicons.org/firebase" },
  { name: "Docker", logo: "https://cdn.simpleicons.org/docker" },
  { name: "Kubernetes", logo: "https://cdn.simpleicons.org/kubernetes" },
  { name: "PostgreSQL", logo: "https://cdn.simpleicons.org/postgresql" },
  { name: "MongoDB", logo: "https://cdn.simpleicons.org/mongodb" },
  { name: "Redis", logo: "https://cdn.simpleicons.org/redis" },
  { name: "Unity", logo: "https://cdn.simpleicons.org/unity" },
  { name: "Unreal", logo: "https://cdn.simpleicons.org/unrealengine" },
  { name: "Rust", logo: "https://cdn.simpleicons.org/rust" },
  { name: "Go", logo: "https://cdn.simpleicons.org/go" },
];
const TECH_ICONS = {
  React: "https://cdn.simpleicons.org/react",
  "Next.js": "https://cdn.simpleicons.org/nextdotjs",
  Vue: "https://cdn.simpleicons.org/vue.js",
  TypeScript: "https://cdn.simpleicons.org/typescript",
  "Tailwind CSS": "https://cdn.simpleicons.org/tailwindcss",
  "Node.js": "https://cdn.simpleicons.org/nodedotjs",
  NestJS: "https://cdn.simpleicons.org/nestjs",
  Django: "https://cdn.simpleicons.org/django",
  Laravel: "https://cdn.simpleicons.org/laravel",
  FastAPI: "https://cdn.simpleicons.org/fastapi",
  PostgreSQL: "https://cdn.simpleicons.org/postgresql",
  MongoDB: "https://cdn.simpleicons.org/mongodb",
  MySQL: "https://cdn.simpleicons.org/mysql",
  Redis: "https://cdn.simpleicons.org/redis",
  DynamoDB: "https://cdn.simpleicons.org/amazondynamodb",
  AWS: "https://cdn.simpleicons.org/amazonaws",
  Azure: "https://cdn.simpleicons.org/microsoftazure",
  GCP: "https://cdn.simpleicons.org/googlecloud",
  Docker: "https://cdn.simpleicons.org/docker",
  Kubernetes: "https://cdn.simpleicons.org/kubernetes",
};
const doubled = [...CHIPS, ...CHIPS];

/* ─── Scroll-reveal hook ─────────────────────────────────────────── */
function useInView(threshold = 0.13) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

function Reveal({ children, className = "", delay = 0, y = 40, x = 0 }) {
  const [ref, v] = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: v ? 1 : 0,
        transform: v ? "none" : `translate(${x}px,${y}px)`,
        transition: `opacity .7s cubic-bezier(.22,1,.36,1) ${delay}ms,
                   transform .7s cubic-bezier(.22,1,.36,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function CountUp({ to, suffix = "", decimals = 0 }) {
  const [n, setN] = useState(0);
  const [ref, v] = useInView();
  useEffect(() => {
    if (!v) return;
    let s = 0;
    const step = to / (1600 / 16);
    const t = setInterval(() => {
      s += step;
      if (s >= to) {
        setN(to);
        clearInterval(t);
      } else setN(parseFloat(s.toFixed(decimals)));
    }, 16);
    return () => clearInterval(t);
  }, [v, to, decimals]);
  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

/* ─── Data ───────────────────────────────────────────────────────── */
const APP_TYPES = [
  {
    icon: "🏗️",
    title: "Enterprise Web Applications",
    desc: "Robust, multi-tenant platforms built for scale, compliance, and long-term enterprise growth.",
    accent: "#2563eb",
  },
  {
    icon: "☁️",
    title: "SaaS Platforms",
    desc: "Subscription-based cloud products with billing, onboarding, analytics and role-based access.",
    accent: "#0891b2",
  },
  {
    icon: "📊",
    title: "Admin Dashboards",
    desc: "Real-time control panels with rich data visualisations and workflow automation tools.",
    accent: "#7c3aed",
  },
  {
    icon: "🛒",
    title: "E-Commerce Platforms",
    desc: "High-conversion storefronts with inventory management, payments and seamless logistics.",
    accent: "#059669",
  },
  {
    icon: "🤝",
    title: "CRM & ERP Systems",
    desc: "Custom relationship and resource management tools that fit your exact business processes.",
    accent: "#d97706",
  },
  {
    icon: "🔗",
    title: "API-Driven Applications",
    desc: "Headless, integration-heavy apps powered by scalable REST and GraphQL API layers.",
    accent: "#dc2626",
  },
];

const EXPERTISE = [
  {
    icon: "🔐",
    title: "Secure & Scalable Systems",
    desc: "Architected for performance, reliability, and zero-downtime operations at any scale.",
  },
  {
    icon: "⚡",
    title: "API-First Architecture",
    desc: "REST & GraphQL APIs designed for seamless third-party integrations and extensibility.",
  },
  {
    icon: "☁️",
    title: "Cloud-Native Deployment",
    desc: "AWS, Azure & Google Cloud with automated CI/CD pipelines and infrastructure-as-code.",
  },
  {
    icon: "🏆",
    title: "Enterprise Quality",
    desc: "Code reviews, automated testing, security audits and thorough documentation.",
  },
];

const PROCESS = [
  {
    step: "01",
    icon: "🔍",
    title: "Discovery & Strategy",
    desc: "Stakeholder interviews, technical scoping, architecture blueprints and success metrics.",
    color: "#2563eb",
  },
  {
    step: "02",
    icon: "✏️",
    title: "UI / UX Design",
    desc: "Wireframes, design systems, interactive prototypes and usability validation.",
    color: "#0891b2",
  },
  {
    step: "03",
    icon: "⚙️",
    title: "Development",
    desc: "Agile sprints, clean architecture, peer-reviewed code and feature-flagged releases.",
    color: "#7c3aed",
  },
  {
    step: "04",
    icon: "🧪",
    title: "Testing & QA",
    desc: "Unit, integration and E2E test suites plus security and performance audits.",
    color: "#059669",
  },
  {
    step: "05",
    icon: "🚀",
    title: "Deployment & Support",
    desc: "Zero-downtime releases, observability stack, SLAs and ongoing feature development.",
    color: "#d97706",
  },
];

const TECH = [
  {
    group: "Frontend",
    items: ["React", "Next.js", "Vue", "TypeScript", "Tailwind CSS"],
  },
  {
    group: "Backend",
    items: ["Node.js", "NestJS", "Django", "Laravel", "FastAPI"],
  },
  {
    group: "Database",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "DynamoDB"],
  },
  { group: "Cloud", items: ["AWS", "Azure", "GCP", "Docker", "Kubernetes"] },
];

const STATS = [
  { val: 250, suffix: "+", label: "Projects Delivered" },
  { val: 99, suffix: "%", label: "On-Time Delivery" },
  { val: 12, suffix: "+", label: "Years Experience" },
  { val: 98, suffix: "%", label: "Client Satisfaction" },
];

/* ─── Component ─────────────────────────────────────────────────── */
export default function WebDevelopment() {
  const [activeTech, setActiveTech] = useState(0);

  return (
    <div
      className="w-full bg-white text-slate-900"
      style={{ fontFamily: " sans-serif" }}
    >
      <style>{`
@import url('https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&display=swap');

.serif { font-family: serif; }
.sans { font-family: sans-serif; }

/* ── Keyframes ── */
@keyframes fade-up { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:none} }
@keyframes fade-left { from{opacity:0;transform:translateX(-28px)} to{opacity:1;transform:none} }
@keyframes fade-right { from{opacity:0;transform:translateX(28px)} to{opacity:1;transform:none} }
@keyframes float-y { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-14px)} }
@keyframes float-y2 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-9px)} }
@keyframes spin-ccw { from{transform:rotate(0)} to{transform:rotate(-360deg)} }
@keyframes spin-cw { from{transform:rotate(0)} to{transform:rotate(360deg)} }
@keyframes pan-grad { 0%,100%{background-position:0% 50%} 50%{background-position:100% 50%} }
@keyframes shimmer { 0%{background-position:-200% 0} 100%{background-position:200% 0} }
@keyframes ripple { 0%{transform:scale(.9);opacity:.7} 100%{transform:scale(1.8);opacity:0} }
@keyframes scroll {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}
/* ── Buttons ── */
.shimmer-btn {
background: linear-gradient(90deg,#d97706,#f59e0b,#fbbf24,#f59e0b,#d97706);
background-size:200% auto;
animation: shimmer 2.8s linear infinite;
transition: transform .2s, box-shadow .2s;
}
.shimmer-btn:hover {
transform:translateY(-2px);
box-shadow:0 14px 34px rgba(245,158,11,.35);
}

/* ── Gradient Text ── */
.grad-text {
background: linear-gradient(135deg,#1d4ed8 0%,#3b82f6 50%,#60a5fa 100%);
background-size:200% auto;
-webkit-background-clip:text;
-webkit-text-fill-color:transparent;
background-clip:text;
animation: pan-grad 5s ease infinite;
}

/* ── Card Hover ── */
.card-hover {
transition: transform .3s cubic-bezier(.34,1.56,.64,1), box-shadow .3s, border-color .3s;
}
.card-hover:hover {
transform:translateY(-7px);
box-shadow:0 22px 48px rgba(37,99,235,.12);
border-color:rgba(37,99,235,.2);
}

/* ── Grid Background ── */
.grid-bg {
background-image:
linear-gradient(rgba(37,99,235,.05) 1px, transparent 1px),
linear-gradient(90deg, rgba(37,99,235,.05) 1px, transparent 1px);
background-size:44px 44px;
}

.dot-bg {
background-image: radial-gradient(circle, rgba(37,99,235,.1) 1px, transparent 1px);
background-size:28px 28px;
}

/* ── Tech Tabs ── */
.tech-tab.active {
background: linear-gradient(135deg,#eff6ff,#dbeafe);
color:#1d4ed8;
border-color:rgba(37,99,235,.25);
font-weight:700;
box-shadow:0 4px 16px rgba(37,99,235,.12);
}

.tech-item:hover {
background: linear-gradient(135deg,#eff6ff,#dbeafe);
transform: translateX(6px) scale(1.02);
border-color: rgba(37,99,235,.3);
box-shadow: 0 4px 14px rgba(37,99,235,.1);
}

/* ── Highlight Rail ── */
.highlight-rail {
height:3px;
background:linear-gradient(90deg,#1d4ed8,#3b82f6,#0d9488);
animation:shimmer 2s linear infinite;
background-size:200% auto;
}

/* ── Outline Button ── */
.outline-btn {
border:2px solid #bfdbfe;
transition:all .25s;
}
.outline-btn:hover {
border-color:#3b82f6;
color:#1d4ed8;
background:#eff6ff;
}

/* ── Animated Border Card ── */
.border-anim::before {
content:'';
position:absolute;
inset:-2px;
// background:linear-gradient(90deg,#f59e0b,#fbbf24,#fcd34d,#f59e0b);
background-size:400% auto;
border-radius:22px;
animation:border-run 4s linear infinite;
z-index:0;
opacity:0;
transition:opacity .3s;
}
.border-anim:hover::before { opacity:1; }

/* Ripple */
.ring-pulse::after {
content:'';
position:absolute;
inset:0;
border-radius:50%;
background:rgba(37,99,235,.2);
animation:ripple 2s ease-out infinite;
}
`}</style>
      {/* ─────────────── HERO ─────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden grid-bg">
        {/* Ambient blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute -top-40 left-1/4 w-[600px] h-[600px] rounded-full opacity-30"
            style={{
              background:
                "radial-gradient(ellipse,rgba(37,99,235,.18),transparent 70%)",
              filter: "blur(80px)",
            }}
          />
          <div
            className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full opacity-20"
            style={{
              background:
                "radial-gradient(ellipse,rgba(8,145,178,.18),transparent 70%)",
              filter: "blur(80px)",
              animation: "float-y 10s ease-in-out infinite",
            }}
          />
        </div>

        {/* Rotating ring decorations */}
        <div className="absolute right-16 top-24 w-72 h-72 opacity-10 hidden lg:block">
          <svg viewBox="0 0 200 200" className="w-full h-full spin-ring">
            <circle
              cx="100"
              cy="100"
              r="90"
              fill="none"
              stroke="#2563eb"
              strokeWidth="1"
              strokeDasharray="8 6"
            />
          </svg>
        </div>
        <div className="absolute right-28 top-36 w-48 h-48 opacity-10 hidden lg:block">
          <svg viewBox="0 0 200 200" className="w-full h-full spin-ring-r">
            <circle
              cx="100"
              cy="100"
              r="80"
              fill="none"
              stroke="#0891b2"
              strokeWidth="1.5"
              strokeDasharray="4 8"
            />
          </svg>
        </div>

        <div className="relative z-10 mt-10  px-[5%]  py-12 grid md:grid-cols-2 gap-16 items-center w-full">
          {/* Left */}
          <div>
            <div
              className="hero-enter inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-200 bg-blue-50 text-blue-700 mb-4"
              style={{
                animationDelay: "0ms",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: ".1em",
                textTransform: "uppercase",
              }}
            >
              <span className="relative w-2 h-2">
                <span className="block w-2 h-2 rounded-full bg-blue-500" />
                <span
                  className="absolute inset-0 rounded-full bg-blue-400 ring-pulse"
                  style={{ animation: "ripple 2s ease-out infinite" }}
                />
              </span>
              Enterprise Web Solutions
            </div>

            <h1
              className="serif text-5xl sm:text-6xl md:text-[3.8rem] lg:text-[4.4rem] font-bold leading-[1.06] mb-7 hero-enter"
              style={{ animationDelay: "120ms" }}
            >
              Build Future-Ready
              <br />
              <em className="grad-text not-italic">Web Apps</em>
              <br />
              with Precision.
            </h1>

            <p
              className="text-lg text-slate-600 leading-relaxed max-w-xl mb-10 hero-enter"
              style={{ animationDelay: "240ms" }}
            >
              Albos Technologies delivers scalable, secure and cloud-optimised
              enterprise web applications—from complex SaaS platforms to
              mission-critical internal tools.
            </p>

            <div
              className="flex flex-wrap gap-4 mb-14 hero-enter"
              style={{ animationDelay: "360ms" }}
            >
              <button className="bg-gradient-to-br from-amber-500 btn-amber to-amber-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:-translate-y-1 transition">
                Get a Free Quote
              </button>
              <button className="outline-btn px-8 py-4 rounded-2xl font-semibold text-slate-700 text-base">
                View Our Work
              </button>
            </div>

            {/* Stats row */}
            <div
              className="grid grid-cols-2 sm:grid-cols-4 gap-5 hero-enter"
              style={{ animationDelay: "480ms" }}
            >
              {STATS.map((s, i) => (
                <div
                  key={i}
                  className="border border-slate-100 rounded-2xl p-4 bg-white shadow-sm text-center hover:shadow-md hover:border-blue-200 transition-all"
                >
                  <div
                    className="serif text-3xl font-normal text-blue-600 leading-none"
                    style={{
                      animation:
                        "counter-pop .6s cubic-bezier(.34,1.56,.64,1) both",
                      animationDelay: `${600 + i * 100}ms`,
                    }}
                  >
                    <CountUp to={s.val} suffix={s.suffix} />
                  </div>
                  <div className="text-xs text-slate-500 mt-1.5 font-medium leading-tight">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Browser window mockup */}
          <div className="flex justify-center items-center">
            <div className="float-a relative w-full max-w-lg">
              {/* Browser frame */}
              <div
                className="rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white"
                style={{
                  boxShadow:
                    "0 40px 80px rgba(37,99,235,.15), 0 0 0 1px rgba(255,255,255,.6) inset",
                }}
              >
                {/* Browser chrome */}
                <div className="flex items-center gap-3 px-5 py-3.5 bg-slate-50 border-b border-slate-200">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-emerald-400" />
                  </div>
                  <div className="flex-1 flex items-center gap-2 bg-white rounded-lg px-4 py-1.5 border border-slate-200 text-xs text-slate-400 font-mono">
                    <span className="text-emerald-500">●</span>
                    albostechnologies.com/dashboard
                  </div>
                  <div className="flex gap-2">
                    <div className="w-5 h-5 rounded bg-slate-200 opacity-50" />
                    <div className="w-5 h-5 rounded bg-slate-200 opacity-50" />
                  </div>
                </div>

                {/* Dashboard UI mockup */}
                <div className="bg-white" style={{ height: "380px" }}>
                  <div className="flex h-full">
                    {/* Sidebar */}
                    <div className="w-14 border-r border-slate-100 flex flex-col items-center py-4 gap-4 bg-slate-50">
                      {["⬡", "📊", "👥", "📁", "⚙️"].map((ic, i) => (
                        <div
                          key={i}
                          className={`w-9 h-9 rounded-xl flex items-center justify-center text-sm cursor-pointer transition-all ${i === 1 ? "bg-blue-600 text-white shadow-md" : "hover:bg-slate-100 text-slate-400"}`}
                        >
                          {ic}
                        </div>
                      ))}
                    </div>

                    {/* Main content */}
                    <div className="flex-1 p-5 overflow-hidden">
                      <div className="flex items-center justify-between mb-5">
                        <div>
                          <div className="text-xs text-slate-400 font-medium">
                            Good morning 👋
                          </div>
                          <div className="font-semibold text-slate-900 text-sm">
                            Analytics Overview
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="px-3 py-1.5 rounded-lg bg-blue-50 text-blue-700 text-xs font-semibold border border-blue-200">
                            This Week
                          </div>
                        </div>
                      </div>

                      {/* Metric cards */}
                      <div className="grid grid-cols-3 gap-3 mb-4">
                        {[
                          {
                            label: "Revenue",
                            val: "₹48.2K",
                            delta: "+12%",
                            up: true,
                            color: "#2563eb",
                          },
                          {
                            label: "Users",
                            val: "12,840",
                            delta: "+8%",
                            up: true,
                            color: "#059669",
                          },
                          {
                            label: "Bounce",
                            val: "24.1%",
                            delta: "-3%",
                            up: false,
                            color: "#d97706",
                          },
                        ].map((m, i) => (
                          <div
                            key={i}
                            className="rounded-xl bg-slate-50 border border-slate-100 p-3"
                          >
                            <div className="text-[10px] text-slate-400 font-medium mb-1">
                              {m.label}
                            </div>
                            <div className="text-base font-bold text-slate-900">
                              {m.val}
                            </div>
                            <div
                              className="text-[10px] font-semibold mt-1"
                              style={{ color: m.up ? "#059669" : "#d97706" }}
                            >
                              {m.delta}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Mini bar chart */}
                      <div className="rounded-xl bg-slate-50 border border-slate-100 p-4 mb-3">
                        <div className="flex justify-between items-end h-16 gap-1.5">
                          {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map(
                            (h, i) => (
                              <div
                                key={i}
                                className="flex-1 rounded-t-sm bar-in"
                                style={{
                                  height: `${h}%`,
                                  background:
                                    i === 11
                                      ? "linear-gradient(180deg,#2563eb,#3b82f6)"
                                      : `rgba(37,99,235,${0.12 + i * 0.015})`,
                                  transformOrigin: "bottom",
                                  animationDelay: `${600 + i * 50}ms`,
                                }}
                              />
                            ),
                          )}
                        </div>
                        <div className="text-[10px] text-slate-400 text-center mt-2 font-medium">
                          Monthly Revenue Trend
                        </div>
                      </div>

                      {/* Recent activity */}
                      <div className="space-y-2">
                        {[
                          {
                            name: "Akash Joshi",
                            action: "New sign-up",
                            time: "2m",
                          },
                          {
                            name: "Priya Sharma",
                            action: "Purchase ₹4,200",
                            time: "8m",
                          },
                          {
                            name: "Raj Nair",
                            action: "Support ticket",
                            time: "15m",
                          },
                        ].map((item, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-slate-50 transition-colors"
                          >
                            <div
                              className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
                              style={{
                                background: `linear-gradient(135deg,${["#2563eb", "#059669", "#7c3aed"][i]},${["#0891b2", "#0891b2", "#2563eb"][i]})`,
                              }}
                            >
                              {item.name[0]}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-[11px] font-semibold text-slate-800 truncate">
                                {item.name}
                              </div>
                              <div className="text-[10px] text-slate-400">
                                {item.action}
                              </div>
                            </div>
                            <div className="text-[10px] text-slate-400 shrink-0">
                              {item.time}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating cards */}
              <div className="float-b absolute -left-10 top-20 bg-white rounded-2xl shadow-xl border border-slate-100 px-4 py-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-blue-50 flex items-center justify-center text-base">
                    ⚡
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-800">
                      99.9% Uptime
                    </div>
                    <div className="text-[10px] text-slate-400">
                      Enterprise SLA
                    </div>
                  </div>
                </div>
              </div>
              <div className="float-c absolute -right-8 bottom-24 bg-white rounded-2xl shadow-xl border border-slate-100 px-4 py-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-emerald-50 flex items-center justify-center text-base">
                    🛡️
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-800">
                      SOC 2 Ready
                    </div>
                    <div className="text-[10px] text-slate-400">
                      Security-first
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ticker */}
        <div className="absolute bottom-0 left-0 right-0 bg-white/80 backdrop-blur-sm border-t border-slate-100 py-3 overflow-hidden">
          <div className="flex items-center gap-4 whitespace-nowrap animate-[scroll_28s_linear_infinite] w-max">
            {doubled.map((chip, i) => (
              <div
                key={i}
                className="flex items-center gap-2 mx-2 px-7 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-xs font-medium text-slate-700"
              >
                <Image
                  src={chip.logo}
                  alt={chip.name}
                  width={16}
                  height={16}
                  className="w-4 h-4"
                />
                {chip.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── EXPERTISE ─────────────── */}
      <section className="py-12 bg-white relative overflow-hidden">
        <div
          className="absolute right-0 top-0 w-80 h-80 rounded-full opacity-10 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse,rgba(37,99,235,1),transparent)",
            filter: "blur(60px)",
          }}
        />

        <div className="  px-[5%]">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div x={-40} y={0}>
              <span className="label-pill text-blue-600 mb-5 block">
                Enterprise Expertise
              </span>
              <h2 className="serif text-4xl md:text-5xl font-normal mb-6 leading-tight">
                Why enterprises trust
                <br />
                <span className="grad-text">Albos Technologies</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-10">
                We specialise in building scalable, secure, and high-performance
                web applications—delivering solutions that power real business
                outcomes across industries.
              </p>
              {/* Deliver list */}
              <div className="space-y-3 mb-10">
                {[
                  "Large-scale distributed SaaS platforms",
                  "Secure enterprise applications",
                  "API-driven ecosystems & integrations",
                  "Cloud-native deployment with CI/CD",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center shrink-0">
                      <svg
                        className="w-3 h-3 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-slate-700 text-sm font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
              <button className="shimmer-btn px-8 py-4 rounded-2xl text-white font-semibold text-base">
                Talk to Our Engineers
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {EXPERTISE.map((e, i) => (
                <Reveal key={i} delay={i * 90}>
                  <div className="border-anim">
                    <div className="rounded-[18px] border border-slate-100 bg-white p-6 shadow-sm card-hover h-full">
                      <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-xl mb-4">
                        {e.icon}
                      </div>
                      <h4 className="font-semibold text-slate-900 text-sm mb-2">
                        {e.title}
                      </h4>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        {e.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────── APP TYPES ─────────────── */}
      <section
        className="py-12 dot-bg relative overflow-hidden"
        style={{ background: "#fafbff" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg,rgba(255,255,255,.9),transparent 20%,transparent 80%,rgba(255,255,255,.9))",
          }}
        />

        <div className="relative z-10   px-[5%]">
          <Reveal className="  mx-auto mb-20">
            <span className="label-pill text-blue-600 mb-4 block">
              What We Build
            </span>
            <h2 className="serif text-4xl md:text-5xl font-normal mb-4 leading-tight">
              Web Applications We{" "}
              <span className="grad-text">Specialise In</span>
            </h2>
            <p className="text-lg text-slate-600">
              Tailored web software for startups and enterprises — every type,
              every scale.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {APP_TYPES.map((a, i) => (
              <Reveal key={i} delay={i * 70}>
                <div className="card-hover rounded-3xl border border-slate-100 bg-white p-8 shadow-sm h-full group cursor-default relative overflow-hidden">
                  {/* Corner accent */}
                  <div
                    className="absolute top-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background: `radial-gradient(ellipse at top right, ${a.accent}15, transparent)`,
                    }}
                  />

                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5 shadow-sm"
                    style={{ background: `${a.accent}12` }}
                  >
                    {a.icon}
                  </div>
                  <h3 className="font-semibold text-slate-900 text-base mb-2">
                    {a.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {a.desc}
                  </p>

                  {/* Bottom accent bar */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity bar-in"
                    style={{
                      background: `linear-gradient(90deg,${a.accent},transparent)`,
                      transformOrigin: "left",
                    }}
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── PROCESS ─────────────── */}
      <section className="py-12 bg-white relative overflow-hidden">
        <div
          className="absolute left-0 top-1/2 -translate-y-1/2 w-80 h-80 opacity-8 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse,rgba(124,58,237,.08),transparent)",
            filter: "blur(60px)",
          }}
        />

        <div className="  px-[5%]">
          <Reveal className=" max-w-3xl  mb-20">
            <span className="label-pill text-blue-600 mb-4 block">
              How We Work
            </span>
            <h2 className="serif text-4xl md:text-5xl font-normal mb-4 leading-tight">
              Our Development <span className="grad-text">Process</span>
            </h2>
            <p className="text-lg text-slate-600">
              A proven agile-driven approach ensuring scalable, secure, on-time
              delivery — every time.
            </p>
          </Reveal>

          {/* Horizontal connector */}
          <div className="relative mb-6 hidden lg:block">
            <div
              className="absolute top-10 left-[10%] right-[10%] h-px"
              style={{
                background:
                  "linear-gradient(90deg,#2563eb,#0891b2,#7c3aed,#059669,#d97706)",
                opacity: 0.2,
              }}
            />
            <div
              className="absolute top-10 left-[10%] right-[10%] h-px bar-in"
              style={{
                background:
                  "linear-gradient(90deg,#2563eb,#0891b2,#7c3aed,#059669,#d97706)",
                transformOrigin: "left",
                opacity: 0.4,
                animationDelay: "400ms",
              }}
            />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {PROCESS.map((p, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="process-step rounded-3xl border border-slate-100 bg-white p-6 shadow-sm relative group h-full">
                  {/* Step number badge */}
                  <div
                    className="absolute -top-3.5 left-5 px-3 py-1 rounded-full text-white text-[10px] font-bold shadow-md"
                    style={{
                      background: `linear-gradient(135deg,${p.color},${p.color}dd)`,
                    }}
                  >
                    STEP {p.step}
                  </div>

                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mt-3 mb-4"
                    style={{ background: `${p.color}12` }}
                  >
                    {p.icon}
                  </div>
                  <h3 className="font-semibold text-slate-900 text-sm mb-2">
                    {p.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {p.desc}
                  </p>

                  {/* Connector arrow (desktop) */}
                  {i < PROCESS.length - 1 && (
                    <div
                      className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full items-center justify-center shadow-md border-2 border-white"
                      style={{
                        background: `linear-gradient(135deg,${p.color},${PROCESS[i + 1].color})`,
                      }}
                    >
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── TECH STACK ─────────────── */}
      <section
        className="py-12 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg,#fafbff 0%,#f0f9ff 50%,#fafbff 100%)",
        }}
      >
        <div className="  px-[5%]">
          <Reveal className=" max-w-3xl text-center mx-auto mb-16">
            <span className="label-pill text-blue-600 mb-4 block">
              Our Stack
            </span>
            <h2 className="serif text-4xl md:text-5xl font-normal mb-4 leading-tight">
              Technology <span className="grad-text">Ecosystem</span>
            </h2>
            <p className="text-lg text-slate-600">
              Modern, battle-tested tools across every layer — frontend to
              cloud.
            </p>
          </Reveal>

          {/* Tab bar */}
          <div className="flex justify-center gap-2 mb-10 flex-wrap">
            {TECH.map((t, i) => (
              <button
                key={i}
                onClick={() => setActiveTech(i)}
                className={`tech-tab px-6 py-2.5 rounded-xl text-sm font-medium border border-slate-200 text-slate-600 ${activeTech === i ? "active" : "bg-white hover:bg-slate-50"}`}
              >
                {t.group}
              </button>
            ))}
          </div>

          <div className="max-w-2xl mx-auto">
            {TECH.map((t, i) => (
              <div
                key={i}
                style={{
                  display: activeTech === i ? "block" : "none",
                  animation: "fade-up .4s cubic-bezier(.22,1,.36,1)",
                }}
              >
                <div className="bg-white rounded-3xl border border-slate-100 shadow-lg overflow-hidden">
                  <div
                    className="px-8 py-6 border-b border-slate-100"
                    style={{
                      background: "linear-gradient(135deg,#eff6ff,#f0f9ff)",
                    }}
                  >
                    <div
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-white text-xs font-bold shadow-md"
                      style={{
                        background: "linear-gradient(135deg,#1d4ed8,#0891b2)",
                      }}
                    >
                      {t.group} Technologies
                    </div>
                    <p className="text-slate-600 text-sm mt-2">
                      Production-grade {t.group.toLowerCase()} tools we use
                      across every project.
                    </p>
                  </div>
                  <div className="p-5 grid grid-cols-1 gap-1">
                    {t.items.map((item, j) => (
                      <div
                        key={j}
                        className="tech-item flex items-center gap-4 p-4 rounded-2xl border border-transparent cursor-default"
                      >
                        {/* <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-lg font-bold text-blue-700 shrink-0">
                          {item[0]}
                        </div> */}
                        <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                          <Image
                            src={TECH_ICONS[item]}
                            alt={item}
                            width={20}
                            height={20}
                            className="w-5 h-5"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-slate-900 text-sm">
                            {item}
                          </div>
                        </div>
                        <div
                          className="w-2 h-2 rounded-full bg-emerald-400 shrink-0"
                          title="In active use"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── CTA ─────────────── */}
      <section
        className="py-12 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg,#eff6ff 0%,#f0f9ff 50%,#f5f3ff 100%)",
        }}
      >
        {/* Decorative circles */}
        <div
          className="absolute top-0 left-0 w-64 h-64 rounded-full opacity-40 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse,rgba(37,99,235,.12),transparent)",
            filter: "blur(40px)",
            animation: "float-y 9s ease-in-out infinite",
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-72 h-72 rounded-full opacity-40 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse,rgba(8,145,178,.12),transparent)",
            filter: "blur(50px)",
            animation: "float-y2 7s ease-in-out 2s infinite",
          }}
        />

        <div className="relative z-10   px-[5%]">
          <Reveal className=" max-w-3xl text-center mx-auto mb-16">
            <span className="label-pill text-center text-blue-600 mb-5 block">
              Let's Build Together
            </span>
            <h2 className="serif text-center text-4xl md:text-6xl font-normal mb-5 leading-tight">
              Ready to grow
              <br />
              <span className="grad-text">your business?</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed max-w-xl mx-auto mb-10">
              Speak with our engineers today. We help brands scale with powerful
              development, design, automation and cloud solutions — all under
              one roof.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
              <button className="shimmer-btn px-10 py-4 rounded-2xl text-white font-semibold text-lg shadow-xl">
                Get a Free Quote
              </button>
              <a
                href="tel:+919766650411"
                className="outline-btn px-10 py-4 rounded-2xl font-semibold text-slate-700 text-lg"
              >
                📞 Call Sales
              </a>
            </div>
          </Reveal>

          {/* Contact cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mx-auto w-full">
            {[
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
            ].map((c, i) => (
              <Reveal key={i} delay={i * 80}>
                <a
                  href={c.href || "#"}
                  className={`block p-6 bg-white rounded-2xl border border-slate-200 shadow-sm text-center card-hover ${!c.href ? "cursor-default" : ""}`}
                >
                  <div className="text-3xl mb-3">{c.icon}</div>
                  <div className="label-pill text-slate-400 mb-1">
                    {c.label}
                  </div>
                  <div className="text-sm font-semibold text-slate-800 leading-snug">
                    {c.val}
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
