"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

// Intersection observer hook for scroll animations
function useInView(options = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, ...options },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return [ref, inView];
}

function Reveal({ children, className = "", delay = 0, direction = "up" }) {
  const [ref, inView] = useInView();
  const transforms = {
    up: "translateY(36px)",
    down: "translateY(-36px)",
    left: "translateX(-36px)",
    right: "translateX(36px)",
  };
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : transforms[direction],
        transition: `opacity 0.65s cubic-bezier(.4,0,.2,1) ${delay}ms, transform 0.65s cubic-bezier(.4,0,.2,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

const TECH_ICONS = {
  Kotlin: "https://cdn.simpleicons.org/kotlin/7F52FF",
  "Jetpack Compose": "https://cdn.simpleicons.org/android/3DDC84",
  Flutter: "https://cdn.simpleicons.org/flutter/02569B",
  "React Native": "https://cdn.simpleicons.org/react/61DAFB",
  Firebase: "https://cdn.simpleicons.org/firebase/FFCA28",
  GraphQL: "https://cdn.simpleicons.org/graphql/E10098",
  "REST APIs": "https://cdn.simpleicons.org/openapiinitiative/6BA539",
  "CI/CD": "https://cdn.simpleicons.org/githubactions/2088FF",
  "Play Store": "https://cdn.simpleicons.org/googleplay/34A853",
  "Clean Architecture": "https://cdn.simpleicons.org/androidstudio/3DDC84",
  MVVM: "https://cdn.simpleicons.org/android/3DDC84",
  "Room DB": "https://cdn.simpleicons.org/sqlite/003B57",
  "Hilt DI": "https://cdn.simpleicons.org/google/4285F4",
  Coroutines: "https://cdn.simpleicons.org/kotlin/7F52FF",
  "Material 3": "https://cdn.simpleicons.org/materialdesign/757575",
};
function CountUp({ end, suffix = "", duration = 1800 }) {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView();
  useEffect(() => {
    if (!inView) return;
    let current = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else setCount(Math.floor(current));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, end, duration]);
  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const CAPABILITIES = [
  {
    icon: "🤖",
    bg: "bg-blue-50",
    accent: "#1d4ed8",
    border: "#a7f3d0",
    tagBg: "#eff6ff",
    title: "Native Android Engineering",
    desc: "High-performance Android apps built with Kotlin, Java and modern Android tooling for enterprise and consumer apps.",
    tags: ["Kotlin", "Java", "Jetpack"],
  },
  {
    icon: "⚡",
    bg: "bg-sky-50",
    accent: "#0284c7",
    border: "#bae6fd",
    tagBg: "#f0f9ff",
    title: "Cross-Platform (Flutter / RN)",
    desc: "Single codebase mobile apps with native-like performance, beautiful UI and shared business logic across platforms.",
    tags: ["Flutter", "React Native", "Dart"],
  },
  {
    icon: "🎨",
    bg: "bg-violet-50",
    accent: "#7c3aed",
    border: "#ddd6fe",
    tagBg: "#f5f3ff",
    title: "UI / UX & Design Systems",
    desc: "Material Design, Jetpack Compose UIs and reusable component libraries crafted for delight and usability.",
    tags: ["Compose", "Material 3", "Figma"],
  },
  {
    icon: "🔗",
    bg: "bg-orange-50",
    accent: "#ea580c",
    border: "#fed7aa",
    tagBg: "#fff7ed",
    title: "Backend & Integrations",
    desc: "Secure REST / GraphQL APIs, real-time sync, payment gateways and cloud integration layers built to scale.",
    tags: ["REST", "GraphQL", "Firebase"],
  },
];

const PROCESS = [
  {
    step: "01",
    color: "#1d4ed8",
    badgeCls: "bg-blue-100 text-blue-700",
    title: "Discovery & Strategy",
    text: "We dig into your requirements, define success metrics, map the target device matrix, and draft a solid architecture plan before a single line of code is written.",
    icon: "🔍",
    img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=900&auto=format&fit=crop",
  },
  {
    step: "02",
    color: "#0284c7",
    badgeCls: "bg-sky-100 text-sky-700",
    title: "Design & Prototyping",
    text: "Wireframes become interactive prototypes. We validate flows and aesthetics early, building component libraries that speed up every sprint that follows.",
    icon: "✏️",
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=900&auto=format&fit=crop",
  },
  {
    step: "03",
    color: "#7c3aed",
    badgeCls: "bg-violet-100 text-violet-700",
    title: "Engineering & QA",
    text: "Modular Kotlin / Java code with clean architecture, comprehensive unit and integration tests, and CI/CD pipelines for reliable, repeatable delivery.",
    icon: "⚙️",
    img: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=900&auto=format&fit=crop",
  },
  {
    step: "04",
    color: "#ea580c",
    badgeCls: "bg-orange-100 text-orange-700",
    title: "Launch & Support",
    text: "Smooth Play Store release, real-time monitoring, crash analytics, and long-term maintenance partnerships to keep your app ahead of the curve.",
    icon: "🚀",
    img: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=900&auto=format&fit=crop",
  },
];

const CASES = [
  {
    title: "Fintech Mobile Banking",
    category: "Financial Services",
    result:
      "3× faster transactions, zero security breaches at 1M+ active users.",
    tags: ["Kotlin", "Encryption", "Payments"],
    badgeCls: "bg-blue-100 text-blue-700",
    img: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Healthcare Monitoring",
    category: "HealthTech",
    result: "Real-time vitals tracking, reduced clinical response time by 40%.",
    tags: ["Compose", "Realtime", "Cloud"],
    badgeCls: "bg-sky-100 text-sky-700",
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Enterprise Ops App",
    category: "Enterprise Software",
    result:
      "Offline-first field ops, 60% reduction in manual reporting overhead.",
    tags: ["Java", "Offline Sync", "Push"],
    badgeCls: "bg-violet-100 text-violet-700",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop",
  },
];

const TRUST = [
  {
    icon: "⚡",
    title: "Performance & Stability",
    desc: "Profiling, memory tuning, 60fps UIs across device tiers.",
  },
  {
    icon: "🔒",
    title: "Security & Compliance",
    desc: "Secure storage, encrypted network calls, OWASP aligned.",
  },
  {
    icon: "🧪",
    title: "Obsessive QA",
    desc: "Automated tests, manual regression and real device labs.",
  },
  {
    icon: "📦",
    title: "Play Store Readiness",
    desc: "Signing, release tracks, store listing, in-app analytics.",
  },
];

export default function AppDevelopment() {
  const [activeCase, setActiveCase] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className="antialiased text-slate-900 bg-white"
      style={{ fontFamily: "  sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Fraunces:ital,opsz,wght@0,9..144,600;0,9..144,700;0,9..144,800;1,9..144,700&display=swap');

        * { box-sizing: border-box; }
        .font-fraunces { font-family: 'Fraunces', Georgia, serif; }

        @keyframes float-a { 0%,100%{transform:translateY(0) rotate(0deg)} 50%{transform:translateY(-14px) rotate(1deg)} }
        @keyframes float-b { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        @keyframes shimmer-light { 0%{background-position:-200% 0} 100%{background-position:200% 0} }
        @keyframes gradient-pan { 0%,100%{background-position:0% 50%} 50%{background-position:100% 50%} }
        @keyframes pulse-glow { 0%,100%{box-shadow:0 0 0 0 rgba(37,99,235,.4)} 50%{box-shadow:0 0 0 10px rgba(37,99,235,0)} }
        @keyframes bar-grow { from{transform:scaleX(0)} to{transform:scaleX(1)} }
        @keyframes bar-fill { from{width:0} to{width:100%} }
        @keyframes bounce-in { 0%{transform:scale(.85) translateY(12px);opacity:0} 70%{transform:scale(1.02)} 100%{transform:scale(1) translateY(0);opacity:1} }
        @keyframes ticker { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
        @keyframes phone-float { 0%,100%{transform:translateY(0) rotate(-2deg)} 50%{transform:translateY(-18px) rotate(2deg)} }
        @keyframes tag-pop { from{transform:scale(0) rotate(-8deg);opacity:0} to{transform:scale(1) rotate(0);opacity:1} }
        @keyframes spin-slow { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes fade-slide { from{opacity:0;transform:translateY(8px)} to{opacity:1;transform:none} }

        .gradient-heading {
          background: linear-gradient(135deg, #1d4ed8 0%, #3b82f6 55%, #60a5fa 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradient-pan 5s ease infinite;
        }

        .hero-cta-btn {
          background: linear-gradient(90deg, #d97706, #f59e0b, #fbbf24, #f59e0b, #d97706);
          background-size: 200% auto;
          animation: shimmer-light 2.8s linear infinite;
          transition: transform .2s, box-shadow .2s;
        }
        .hero-cta-btn:hover { transform: translateY(-2px); box-shadow: 0 16px 36px rgba(245,158,11,.35); }

        .nav-glass {
          background: rgba(255,255,255,.88);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }

        .dots-bg {
          background-image: radial-gradient(circle, #dbeafe 1px, transparent 1px);
          background-size: 30px 30px;
        }

        .cap-card {
          transition: transform .35s cubic-bezier(.34,1.56,.64,1), box-shadow .3s, border-color .3s;
        }
        .cap-card:hover { transform: translateY(-8px); box-shadow: 0 24px 52px rgba(37,99,235,.1); border-color: rgba(37,99,235,.2); }

        .process-img-wrap {
          position: relative;
          min-height: 320px;
          border-radius: 24px;
          overflow: hidden;
          transition: box-shadow .4s ease;
        }
        .process-img-wrap:hover { box-shadow: 0 28px 60px rgba(0,0,0,.14); }
        .process-img-wrap img { transition: transform .5s ease; }
        .process-img-wrap:hover img { transform: scale(1.04); }

        .case-card {
          transition: transform .35s cubic-bezier(.34,1.56,.64,1), box-shadow .3s;
        }
        .case-card:hover { transform: translateY(-6px); box-shadow: 0 24px 48px rgba(37,99,235,.1); }

        .trust-card {
          transition: all .3s cubic-bezier(.34,1.56,.64,1);
          border: 1.5px solid #e2e8f0;
        }
        .trust-card:hover { transform: translateY(-5px); border-color: #93c5fd; box-shadow: 0 14px 32px rgba(37,99,235,.1); }

        .tab-btn {
          position: relative;
          transition: color .3s, font-weight .2s;
          padding-bottom: 14px;
        }
        .tab-btn::after {
          content:'';
          position:absolute;
          bottom:0; left:0; right:0;
          height:3px;
          border-radius:99px;
          background: linear-gradient(90deg,#1d4ed8,#3b82f6);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform .3s ease;
        }
        .tab-btn.is-active { color:#1d4ed8; font-weight:700; }
        .tab-btn.is-active::after { transform: scaleX(1); }

        .phone-float { animation: phone-float 5.5s ease-in-out infinite; }
        .badge-a { animation: float-b 4s ease-in-out .5s infinite; }
        .badge-b { animation: float-a 5s ease-in-out 1.5s infinite; }
        .badge-c { animation: float-b 6s ease-in-out .8s infinite; }

        .ticker-wrap { overflow:hidden; white-space:nowrap; }
        .ticker-inner { display:inline-block; animation: ticker 20s linear infinite; }

        .section-label {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: .12em;
          text-transform: uppercase;
        }

        .highlight-rail { height:3px; background:linear-gradient(90deg,#1d4ed8,#3b82f6,#0d9488); animation:shimmer-light 2s linear infinite; background-size:200% auto; }

        .cta-bg {
          background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 50%, #e0f2fe 100%);
        }

        .outline-btn {
          transition: all .25s;
          border: 2px solid #bfdbfe;
        }
        .outline-btn:hover { border-color: #3b82f6; color: #1d4ed8; background: #eff6ff; }

        .bar-fill { animation: bar-fill 1s cubic-bezier(.22,1,.36,1) both; }
      `}</style>

      {/* ─── NAV ─── */}
      <nav className="nav-glass sticky top-0 z-50 border-b border-slate-100 shadow-sm">
        <div className="   mx-auto px-[5%] py-3.5 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center text-white font-bold text-base shadow-md">
              A
            </div>
            <span
              className="font-bold text-lg text-slate-900"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              Albos Technologies
            </span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {[
              ["#capabilities", "Capabilities"],
              ["#process", "Process"],
              ["#case-studies", "Case Studies"],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="px-4 py-2 rounded-xl text-sm font-medium text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-all"
              >
                {label}
              </a>
            ))}
            <a
              href="/contact"
              className="hero-cta-btn ml-3 px-5 py-2.5 rounded-xl text-white text-sm font-semibold shadow-md"
            >
              Get a Quote
            </a>
          </div>

          <button
            className="md:hidden p-2 rounded-xl border border-slate-200 text-slate-600"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden px-6 py-4 border-t border-slate-100 flex flex-col gap-2 bg-white">
            {[
              ["#capabilities", "Capabilities"],
              ["#process", "Process"],
              ["#case-studies", "Case Studies"],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition-all"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}
            <a
              href="/contact"
              className="hero-cta-btn px-5 py-3 rounded-xl text-white text-sm font-semibold text-center mt-2"
            >
              Get a Quote
            </a>
          </div>
        )}
        <div className="highlight-rail" />
      </nav>

      {/* ─── HERO ─── */}
      <header className="relative  flex items-center overflow-hidden bg-white dots-bg">
        {/* Blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full opacity-60"
            style={{
              background:
                "radial-gradient(ellipse,rgba(16,185,129,.18),transparent 70%)",
              filter: "blur(60px)",
              animation: "float-a 8s ease-in-out infinite",
            }}
          />
          <div
            className="absolute top-1/3 -right-40 w-[450px] h-[450px] rounded-full opacity-50"
            style={{
              background:
                "radial-gradient(ellipse,rgba(14,165,233,.14),transparent 70%)",
              filter: "blur(80px)",
              animation: "float-b 10s ease-in-out 2s infinite",
            }}
          />
          <div
            className="absolute -bottom-20 left-1/3 w-[350px] h-[350px] rounded-full opacity-40"
            style={{
              background:
                "radial-gradient(ellipse,rgba(139,92,246,.1),transparent 70%)",
              filter: "blur(60px)",
              animation: "float-a 12s ease-in-out 4s infinite",
            }}
          />
        </div>

        <div className="relative z-10 mb-[65px] mx-auto px-[5%] py-2 md:py-2 grid md:grid-cols-2 gap-8 items-center w-full">
          {/* Left */}
          <div>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold mb-2"
              style={{
                animation: "bounce-in .6s ease .2s both",
                boxShadow: "0 0 0 0 rgba(16,185,129,.4)",
                animationName: "bounce-in, pulse-glow",
              }}
            >
              <span className="w-2 h-2 rounded-full bg-blue-500 inline-block"></span>
              Now accepting new projects · 2-week kickoff
            </div>

            <h1
              className="font-fraunces text-4xl sm:text-5xl md:text-[3.2rem] lg:text-[3.8rem] font-bold leading-[1.08] mb-2"
              style={{ animation: "bounce-in .7s ease .1s both" }}
            >
              Android App
              <br />
              <span className="gradient-heading">Development</span>
              <br />
              <span className="text-slate-900">Done Right.</span>
            </h1>

            <p
              className="text-lg text-slate-600 leading-relaxed max-w-xl mb-2"
              style={{ animation: "bounce-in .7s ease .25s both" }}
            >
              Native & cross-platform Android apps built with Kotlin, Jetpack
              Compose, Flutter and React Native — from MVPs to enterprise-grade
              Play Store launches.
            </p>

            <div
              className="flex flex-wrap gap-4 mb-6"
              style={{ animation: "bounce-in .7s ease .4s both" }}
            >
              <a
                href="/contact"
                className="hero-cta-btn inline-flex items-center gap-2 px-4 py-2 rounded-2xl text-white font-semibold text-base shadow-xl"
              >
                Get a Free Quote
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="#case-studies"
                className="outline-btn inline-flex items-center gap-2 px-7 py-4 rounded-2xl text-slate-700 font-semibold text-base"
              >
                See Case Studies
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </a>
            </div>

            {/* Stats */}
            <div
              className="flex gap-10 pt-6 border-t border-slate-100"
              style={{ animation: "bounce-in .7s ease .55s both" }}
            >
              {[
                { val: 150, suffix: "+", label: "Apps Shipped" },
                { val: 98, suffix: "%", label: "Client Retention" },
                { val: 5, suffix: "★", label: "Play Store Avg" },
              ].map((s, i) => (
                <div key={i}>
                  <div className="font-fraunces text-3xl font-bold text-blue-600">
                    <CountUp end={s.val} suffix={s.suffix} />
                  </div>
                  <div className="text-xs text-slate-500 mt-1 font-medium">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right – Phone Mockup */}
          <div className="flex justify-center items-center relative">
            <div className="phone-float relative">
              <div className="relative w-[260px] mt-5 mx-auto">
                <div
                  className="rounded-[1.7rem] border-[5px] border-slate-800 shadow-2xl overflow-hidden"
                  style={{
                    boxShadow:
                      "0 40px 80px rgba(0,0,0,.2), 0 0 0 1px rgba(255,255,255,.1) inset",
                  }}
                >
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-5 h-5 bg-slate-800 rounded-full z-10" />
                  <div
                    className="relative h-[480px] overflow-hidden"
                    style={{
                      background: "linear-gradient(160deg,#eff6ff,#f0f9ff)",
                    }}
                  >
                    <div className="p-5 pt-10">
                      {/* App UI */}
                      <div className="flex items-center justify-between mb-6">
                        <div>
                          <div className="text-xs text-slate-400">
                            Good morning 👋
                          </div>
                          <div className="font-bold text-slate-900 text-sm">
                            Dashboard
                          </div>
                        </div>
                        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white text-sm font-bold">
                          A
                        </div>
                      </div>
                      {/* Balance card */}
                      <div
                        className="rounded-2xl p-4 mb-4 text-white"
                        style={{
                          background: "linear-gradient(135deg,#1d4ed8,#0891b2)",
                        }}
                      >
                        <div className="text-[10px] opacity-80 mb-1">
                          Total Balance
                        </div>
                        <div className="text-xl font-bold">₹2,48,340</div>
                        <div className="text-[10px] opacity-70 mt-2">
                          ↑ 12.4% this month
                        </div>
                      </div>
                      {/* Quick actions */}
                      <div className="grid grid-cols-4 gap-2 mb-4">
                        {["💸", "📊", "🔔", "⚙️"].map((e, i) => (
                          <div
                            key={i}
                            className="aspect-square rounded-xl bg-white shadow-sm flex items-center justify-center text-sm"
                          >
                            {e}
                          </div>
                        ))}
                      </div>
                      {/* Transactions */}
                      <div className="text-[10px] font-bold text-slate-400 mb-2 uppercase tracking-wider">
                        Recent
                      </div>
                      {[
                        { label: "Netflix", val: "-₹649", color: "#ef4444" },
                        { label: "Salary", val: "+₹85,000", color: "#3b82f6" },
                        { label: "Amazon", val: "-₹1,299", color: "#ef4444" },
                      ].map((item, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between py-2 border-b border-slate-100 last:border-0"
                        >
                          <div className="w-8 h-8 rounded-xl bg-slate-100 flex items-center justify-center text-xs mr-2 font-bold text-slate-600">
                            {item.label[0]}
                          </div>
                          <div className="flex-1">
                            <div className="text-xs font-semibold text-slate-800">
                              {item.label}
                            </div>
                            <div className="text-[10px] text-slate-400">
                              Today
                            </div>
                          </div>
                          <div
                            className="text-xs font-bold"
                            style={{ color: item.color }}
                          >
                            {item.val}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-16 h-1 bg-slate-600 rounded-full" />
              </div>

              {/* Floating badges */}
              <div className="badge-a absolute -right-12 top-14 bg-white rounded-2xl shadow-xl px-4 py-3 border border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="text-xl">⚡</span>
                  <div>
                    <div className="text-xs font-bold text-slate-800">
                      60fps smooth
                    </div>
                    <div className="text-[10px] text-slate-400">
                      Optimized UI
                    </div>
                  </div>
                </div>
              </div>
              <div className="badge-b absolute -left-14 bottom-24 bg-white rounded-2xl shadow-xl px-4 py-3 border border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="text-xl">🔒</span>
                  <div>
                    <div className="text-xs font-bold text-slate-800">
                      Security-first
                    </div>
                    <div className="text-[10px] text-slate-400">
                      OWASP aligned
                    </div>
                  </div>
                </div>
              </div>
              <div className="badge-c absolute -right-8 bottom-14 bg-blue-600 rounded-2xl shadow-xl px-4 py-2.5 border border-blue-500">
                <div className="text-white text-xs font-bold">
                  ✓ Play Store Ready
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tech ticker */}
        {/* <div className="absolute mt-8 bottom-0 left-0 right-0 border-t border-slate-100 bg-white/80 backdrop-blur-sm py-3">
          <div className="ticker-wrap">
            <div className="ticker-inner">
              {[...Array(2)]
                .flatMap(() => [
                  "Kotlin",
                  "Jetpack Compose",
                  "Flutter",
                  "React Native",
                  "Firebase",
                  "GraphQL",
                  "REST APIs",
                  "CI/CD",
                  "Play Store",
                  "Clean Architecture",
                  "MVVM",
                  "Room DB",
                  "Hilt DI",
                  "Coroutines",
                  "Material 3",
                ])
                .map((t, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-2 mx-6 text-sm text-slate-500 font-medium"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 inline-block" />
                    {t}
                  </span>
                ))}
            </div>
          </div>
        </div> */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-slate-100 bg-white/80 backdrop-blur-sm py-3 overflow-hidden">
          <div className="flex items-center whitespace-nowrap animate-[ticker_28s_linear_infinite]">
            {[...Array(2)]
              .flatMap(() => [
                "Kotlin",
                "Jetpack Compose",
                "Flutter",
                "React Native",
                "Firebase",
                "GraphQL",
                "REST APIs",
                "CI/CD",
                "Play Store",
                "Clean Architecture",
                "MVVM",
                "Room DB",
                "Hilt DI",
                "Coroutines",
                "Material 3",
              ])
              .map((tech, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 mx-4 px-7 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-xs text-slate-700 font-medium"
                >
                  <img src={TECH_ICONS[tech]} alt={tech} className="w-4 h-4" />
                  {tech}
                </div>
              ))}
          </div>
        </div>
      </header>

      {/* ─── TRUSTED / WHY ─── */}
      <section className="py-12 bg-white">
        <div className="   mx-auto px-[5%] grid md:grid-cols-2 gap-16 items-center">
          <Reveal direction="left">
            <span className="section-label text-blue-600 mb-4 block">
              Why Choose Us
            </span>
            <h2 className="font-fraunces text-4xl font-bold mb-5 leading-tight">
              Your Trusted Android{" "}
              <span className="gradient-heading">Development Partner</span>
            </h2>
            <p className="text-slate-600 leading-relaxed mb-10 text-lg max-w-lg">
              We combine product thinking, engineering discipline and strong
              delivery practices to ship reliable Android apps that scale across
              devices and user loads.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {TRUST.map((t, i) => (
                <Reveal key={i} delay={i * 80}>
                  <div className="trust-card rounded-2xl p-5 bg-white">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-2xl mb-3">
                      {t.icon}
                    </div>
                    <div className="font-semibold text-slate-900 text-sm mb-1">
                      {t.title}
                    </div>
                    <div className="text-xs text-slate-500 leading-relaxed">
                      {t.desc}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>

          <Reveal direction="right" delay={120}>
            <div className="relative">
              <div
                className="process-img-wrap shadow-2xl"
                style={{ height: "480px" }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=900&auto=format&fit=crop"
                  width={800}
                  height={600}
                  alt="Team working"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent" />
              </div>
              {/* Sprint card overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-5 shadow-lg border border-slate-100">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-bold text-slate-900">
                      Current Sprint
                    </span>
                    <span className="text-xs text-blue-600 font-semibold bg-blue-50 px-2.5 py-1 rounded-full">
                      Sprint 4 / 8
                    </span>
                  </div>
                  {[
                    { label: "UI Components", pct: 92 },
                    { label: "API Integration", pct: 74 },
                    { label: "QA Coverage", pct: 88 },
                  ].map((item, i) => (
                    <div key={i} className="mb-2.5">
                      <div className="flex justify-between text-xs text-slate-600 mb-1">
                        <span>{item.label}</span>
                        <span className="font-semibold">{item.pct}%</span>
                      </div>
                      <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bar-fill rounded-full"
                          style={{
                            width: `${item.pct}%`,
                            background:
                              "linear-gradient(90deg,#3b82f6,#0ea5e9)",
                            animationDelay: `${i * 200}ms`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── CAPABILITIES ─── */}
      <section
        id="capabilities"
        className="py-12 overflow-hidden"
        style={{
          background: "linear-gradient(180deg,#f8fffe,#f0fdf8 50%,#f8fffe)",
        }}
      >
        <div className="   mx-auto px-[5%]">
          <Reveal className="  mx-auto mb-16">
            <span className="section-label text-blue-600 mb-3 block">
              What We Build
            </span>
            <h2 className="font-fraunces text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Full-Spectrum{" "}
              <span className="gradient-heading">App Capabilities</span>
            </h2>
            <p className="text-slate-600 text-lg">
              From consumer apps to mission-critical enterprise mobile products
              — we cover every layer.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CAPABILITIES.map((c, i) => (
              <Reveal key={i} delay={i * 90}>
                <div
                  className="cap-card rounded-3xl border border-slate-100 bg-white p-7 h-full shadow-sm"
                  style={{ "--hover-border": c.accent }}
                >
                  <div
                    className={`w-14 h-14 rounded-2xl ${c.bg} flex items-center justify-center text-2xl mb-5 shadow-sm`}
                  >
                    {c.icon}
                  </div>
                  <h4 className="font-bold text-slate-900 text-base mb-2">
                    {c.title}
                  </h4>
                  <p className="text-sm text-slate-500 leading-relaxed mb-5">
                    {c.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {c.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="text-xs px-3 py-1 rounded-full font-semibold"
                        style={{
                          background: c.tagBg,
                          color: c.accent,
                          border: `1px solid ${c.border}`,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROCESS ─── */}
      <section id="process" className="py-12 bg-white">
        <div className="   mx-auto px-[5%]">
          <Reveal className=" mx-auto mb-20">
            <span className="section-label text-sky-600 mb-3 block">
              How We Work
            </span>
            <h2 className="font-fraunces text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Structured Process,{" "}
              <span className="gradient-heading">Zero Surprises</span>
            </h2>
            <p className="text-slate-600 text-lg">
              Four phases that reduce risk and deliver measurable progress at
              every milestone.
            </p>
          </Reveal>

          {/* Timeline connector */}
          <div className="relative">
            <div
              className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
              style={{
                background:
                  "linear-gradient(180deg,#a7f3d0,#bae6fd,#ddd6fe,#fed7aa)",
              }}
            />

            <div className="space-y-20">
              {PROCESS.map((p, i) => {
                const flip = i % 2 !== 0;
                return (
                  <div
                    key={p.step}
                    className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${flip ? "lg:[&>*:first-child]:order-last" : ""}`}
                  >
                    <Reveal direction={flip ? "right" : "left"} delay={80}>
                      <div className="process-img-wrap shadow-xl">
                        <Image
                          fill
                          src={p.img}
                          alt={p.title}
                          className="w-full object-cover"
                        />
                        <div
                          className="absolute inset-0"
                          style={{
                            background: `linear-gradient(135deg,${p.color}18,transparent)`,
                            pointerEvents: "none",
                            borderRadius: "24px",
                          }}
                        />
                      </div>
                    </Reveal>

                    <Reveal direction={flip ? "left" : "right"} delay={160}>
                      <div className="relative">
                        {/* Step bubble */}
                        <div className="inline-flex items-center gap-2 mb-5">
                          <span
                            className={`section-label px-3 py-1.5 rounded-full ${p.badgeCls}`}
                          >
                            STEP {p.step}
                          </span>
                        </div>
                        <div className="text-4xl mb-4">{p.icon}</div>
                        <h3 className="font-fraunces text-2xl md:text-3xl font-bold mb-4 text-slate-900">
                          {p.title}
                        </h3>
                        <p className="text-slate-600 leading-relaxed">
                          {p.text}
                        </p>

                        {/* Connector dot */}
                        <div
                          className="hidden lg:block absolute top-8"
                          style={{ [flip ? "right" : "left"]: "-3.5rem" }}
                        >
                          <div
                            className="w-4 h-4 rounded-full border-2 border-white shadow-lg"
                            style={{ background: p.color }}
                          />
                        </div>
                      </div>
                    </Reveal>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CASE STUDIES ─── */}
      <section
        id="case-studies"
        className="py-12 overflow-hidden"
        style={{ background: "linear-gradient(180deg,#f8fffe,#fff)" }}
      >
        <div className="   mx-auto px-[5%]">
          <Reveal className="  mx-auto mb-14">
            <span className="section-label text-violet-600 mb-3 block">
              Case Studies
            </span>
            <h2 className="font-fraunces text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Real Projects.{" "}
              <span className="gradient-heading">Real Results.</span>
            </h2>
            <p className="text-slate-600 text-lg">
              Selected work we shipped — outcomes, stack and lessons learned.
            </p>
          </Reveal>

          {/* Tabs */}
          <div className="flex justify-center gap-2 mb-10 border-b border-slate-100">
            {CASES.map((c, i) => (
              <button
                key={i}
                onClick={() => setActiveCase(i)}
                className={`tab-btn px-5 text-sm font-semibold text-slate-500 ${activeCase === i ? "is-active" : ""}`}
              >
                {c.title}
              </button>
            ))}
          </div>

          {/* Active pane */}
          {CASES.map((c, i) => (
            <div
              key={i}
              style={{
                display: activeCase === i ? "block" : "none",
                animation: activeCase === i ? "fade-slide .4s ease" : "none",
              }}
            >
              <div className="grid md:grid-cols-2 gap-10 items-center    mx-auto mb-16">
                <div
                  className="process-img-wrap shadow-2xl"
                  style={{ height: "360px" }}
                >
                  <Image
                    fill
                    src={c.img}
                    alt={c.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <span
                    className={`section-label px-3 py-1.5 rounded-full text-xs ${c.badgeCls}`}
                  >
                    {c.category}
                  </span>
                  <h3 className="font-fraunces text-3xl font-bold mt-4 mb-3 text-slate-900">
                    {c.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed mb-6">
                    {c.result}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {c.tags.map((t, j) => (
                      <span
                        key={j}
                        className="text-xs px-4 py-1.5 rounded-full bg-slate-100 text-slate-700 font-semibold"
                        style={{
                          animation: `tag-pop .4s ease ${j * 100}ms both`,
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 group"
                  >
                    Read full case study
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}

          {/* Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {CASES.map((c, i) => (
              <Reveal key={i} delay={i * 80}>
                <div
                  className="case-card rounded-3xl overflow-hidden border border-slate-100 bg-white shadow-sm cursor-pointer"
                  onClick={() => setActiveCase(i)}
                >
                  <div className="h-44 overflow-hidden relative">
                    <Image
                      fill
                      src={c.img}
                      alt={c.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="text-white font-bold text-sm">
                        {c.title}
                      </div>
                      <div className="text-white/70 text-xs">{c.category}</div>
                    </div>
                    {activeCase === i && (
                      <div className="absolute top-3 right-3 bg-blue-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
                        Viewing ✓
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    <p className="text-xs text-slate-600 mb-3 leading-relaxed">
                      {c.result}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {c.tags.map((t, j) => (
                        <span
                          key={j}
                          className="text-xs px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 font-medium"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="cta-bg py-12">
        <div className="   mx-auto px-[5%]">
          <div className="max-w-3xl mx-auto text-center">
            <Reveal>
              <span className="section-label text-blue-600 mb-4 block">
                Start Building
              </span>
              <h2 className="font-fraunces text-4xl md:text-5xl font-bold mb-5 leading-tight">
                Ready to build your
                <br />
                <span className="gradient-heading">Android app?</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
                Tell us about your idea and we'll propose a clear roadmap and
                estimate within 48 hours — no commitment required.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
                <a
                  href="/contact"
                  className="hero-cta-btn inline-flex items-center gap-2 px-9 py-4 rounded-2xl text-white font-bold text-lg shadow-xl"
                >
                  Get a Free Quote
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
                <a
                  href="mailto:info@albostechnologies.com"
                  className="outline-btn inline-flex items-center gap-2 px-9 py-4 rounded-2xl text-slate-700 font-bold text-lg"
                >
                  Contact Sales
                </a>
              </div>
            </Reveal>

            {/* Contact cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {[
                {
                  icon: "📞",
                  label: "Phone",
                  value: "+91 97666 50411",
                  href: "tel:+919766650411",
                },
                {
                  icon: "✉️",
                  label: "Email",
                  value: "info@albostechnologies.com",
                  href: "mailto:info@albostechnologies.com",
                },
                {
                  icon: "🕐",
                  label: "Office Hours",
                  value: "Mon–Sat, 10AM–7PM IST",
                  href: null,
                },
              ].map((card, i) => (
                <Reveal key={i} delay={i * 80}>
                  <a
                    href={card.href || "#"}
                    className={`block p-6 bg-white rounded-2xl border border-slate-200 shadow-sm trust-card text-center ${card.href ? "" : "cursor-default"}`}
                  >
                    <div className="text-3xl mb-3">{card.icon}</div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                      {card.label}
                    </div>
                    <div className="text-sm font-semibold text-slate-800">
                      {card.value}
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
