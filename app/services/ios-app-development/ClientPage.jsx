"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

/* ─── Scroll reveal hook ─────────────────────────────────── */
function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVis(true);
          obs.disconnect();
        }
      },
      { threshold },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, vis];
}

function Reveal({
  children,
  className = "",
  delay = 0,
  y = 32,
  x = 0,
  scale = 1,
}) {
  const [ref, vis] = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: vis ? 1 : 0,
        transform: vis ? "none" : `translate(${x}px,${y}px) scale(${scale})`,
        transition: `opacity .75s cubic-bezier(.22,1,.36,1) ${delay}ms, transform .75s cubic-bezier(.22,1,.36,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function CountUp({ to, suffix = "" }) {
  const [n, setN] = useState(0);
  const [ref, vis] = useInView();
  useEffect(() => {
    if (!vis) return;
    let cur = 0;
    const inc = to / (1600 / 16);
    const t = setInterval(() => {
      cur += inc;
      if (cur >= to) {
        setN(to);
        clearInterval(t);
      } else setN(Math.floor(cur));
    }, 16);
    return () => clearInterval(t);
  }, [vis, to]);
  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

const IOS_TECH_ICONS = {
  Swift: "https://cdn.simpleicons.org/swift/F05138",
  SwiftUI: "https://cdn.simpleicons.org/swift/F05138",
  "Objective-C": "https://cdn.simpleicons.org/apple/000000",
  Xcode: "https://cdn.simpleicons.org/xcode/147EFB",
  "Core Data": "https://cdn.simpleicons.org/apple/000000",
  ARKit: "https://cdn.simpleicons.org/apple/000000",
  HealthKit: "https://cdn.simpleicons.org/apple/000000",
  CloudKit: "https://cdn.simpleicons.org/appleicloud/3693F3",
  TestFlight: "https://cdn.simpleicons.org/apple/000000",
  "App Store Connect": "https://cdn.simpleicons.org/appstore/0D96F6",
  UIKit: "https://cdn.simpleicons.org/apple/000000",
  Combine: "https://cdn.simpleicons.org/apple/000000",
  Metal: "https://cdn.simpleicons.org/apple/000000",
  MapKit: "https://cdn.simpleicons.org/applemaps/007AFF",
  StoreKit: "https://cdn.simpleicons.org/apple/000000",
};
/* ─── Data ────────────────────────────────────────────────── */
const TRUST_CARDS = [
  {
    icon: "🍎",
    color: "#0071e3",
    bg: "#e8f4ff",
    title: "Apple-Centric Development",
    desc: "We follow Apple's Human Interface Guidelines and platform best practices to build iOS apps that feel native, intuitive, and premium across iPhone, iPad, and Apple devices.",
  },
  {
    icon: "⭐",
    color: "#6e3ff3",
    bg: "#f0ebff",
    title: "App Store Approval Expertise",
    desc: "From privacy policies to performance optimization, we design and develop apps with App Store approval in mind — reducing rejections and launch delays.",
  },
  {
    icon: "🛡️",
    color: "#28c76f",
    bg: "#e8faf0",
    title: "Security & Performance First",
    desc: "Our iOS applications are engineered with strong data encryption, secure APIs, and performance optimization for reliability at scale.",
  },
  {
    icon: "🤝",
    color: "#ff6b35",
    bg: "#fff1ec",
    title: "Long-Term Product Partnership",
    desc: "We don't just ship apps. We partner with startups and enterprises to evolve, optimize, and scale iOS products over time.",
  },
];

const WHY_ROWS = [
  {
    icon: "🚀",
    color: "#0071e3",
    bg: "#e8f4ff",
    title: "Performance-Driven Native iOS Development",
    desc: "We build high-performance native iOS applications using Swift, SwiftUI, and Apple-recommended architectures to ensure smooth animations, fast load times, and flawless user experiences across all Apple devices.",
    bullets: [
      "Optimized memory & CPU usage",
      "Smooth transitions & native animations",
      "Consistent performance at scale",
    ],
    img: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=900&auto=format&fit=crop",
    flip: false,
  },
  {
    icon: "🔐",
    color: "#28c76f",
    bg: "#e8faf0",
    title: "Enterprise-Grade Security & App Store Compliance",
    desc: "Security and compliance are built into every iOS app we develop. From encrypted data storage to secure API communication, we ensure your application meets Apple's privacy standards and enterprise security requirements.",
    bullets: [
      "Secure authentication & encrypted storage",
      "Apple privacy & App Store guideline compliance",
      "Reduced App Store rejection risks",
    ],
    img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=900&auto=format&fit=crop",
    flip: true,
  },
  {
    icon: "⚡",
    color: "#6e3ff3",
    bg: "#f0ebff",
    title: "Scalable, Future-Ready iOS Architecture",
    desc: "We design clean, modular, and scalable iOS architectures that grow seamlessly with your business — making future feature additions, integrations, and scaling effortless and cost-efficient.",
    bullets: [
      "Modular & maintainable codebase",
      "Easy upgrades & integrations",
      "Lower long-term maintenance cost",
    ],
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=900&auto=format&fit=crop",
    flip: false,
  },
];

const SERVICES = [
  {
    icon: "📱",
    color: "#0071e3",
    bg: "#e8f4ff",
    title: "Native iOS App Development",
    desc: "High-performance native iOS applications using Swift, SwiftUI, and Objective-C — seamless, secure, and App Store–ready for iPhone and iPad.",
    bullets: [
      "Swift & SwiftUI development",
      "iPhone & iPad applications",
      "App Store submission & approval support",
    ],
    img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=900&auto=format&fit=crop",
    flip: false,
  },
  {
    icon: "⚡",
    color: "#6e3ff3",
    bg: "#f0ebff",
    title: "Cross-Platform iOS Development",
    desc: "Launch faster with cross-platform development that delivers native-like performance on iOS while reducing development time and cost.",
    bullets: [
      "Flutter & React Native",
      "Shared codebase with native bridges",
      "Faster go-to-market strategy",
    ],
    img: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=900&auto=format&fit=crop",
    flip: true,
  },
  {
    icon: "🎨",
    color: "#28c76f",
    bg: "#e8faf0",
    title: "iOS UI/UX Design & Prototyping",
    desc: "Intuitive, visually stunning iOS interfaces that follow Apple's Human Interface Guidelines and deliver delightful user experiences.",
    bullets: [
      "SwiftUI & UIKit design systems",
      "Accessibility-first UX",
      "Interactive prototypes & user flows",
    ],
    img: "https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=900&auto=format&fit=crop",
    flip: false,
  },
  {
    icon: "⌚",
    color: "#ff6b35",
    bg: "#fff1ec",
    title: "Apple Watch & tvOS App Development",
    desc: "Extend your digital experience across Apple Watch and Apple TV with fast, responsive, and context-aware applications.",
    bullets: [
      "watchOS health & fitness apps",
      "tvOS media & OTT platforms",
      "Seamless Apple ecosystem integration",
    ],
    img: "https://images.unsplash.com/photo-1510017803434-a899398421b3?q=80&w=900&auto=format&fit=crop",
    flip: true,
  },
  {
    icon: "🔄",
    color: "#ff9f0a",
    bg: "#fff8e8",
    title: "iOS App Modernization & Migration",
    desc: "Modernize legacy iOS applications by migrating to Swift, upgrading UI, improving performance, and ensuring compatibility with the latest iOS versions.",
    bullets: [
      "Objective-C to Swift migration",
      "UI & performance enhancements",
      "Long-term maintenance & support",
    ],
    img: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=900&auto=format&fit=crop",
    flip: false,
  },
];

const DESIGN_FEATURES = [
  {
    icon: "👁️",
    color: "#0071e3",
    bg: "#e8f4ff",
    title: "User-Centered Experience Strategy",
    desc: "Every iOS interface starts with understanding user intent. We map user journeys, behaviors, and expectations before designing a single screen.",
  },
  {
    icon: "📐",
    color: "#6e3ff3",
    bg: "#f0ebff",
    title: "Apple-Compliant Interface Design",
    desc: "Our designs strictly follow Apple's Human Interface Guidelines to ensure consistency, clarity, and a truly native look and feel across all iOS devices.",
  },
  {
    icon: "♿",
    color: "#28c76f",
    bg: "#e8faf0",
    title: "Accessibility & Usability First",
    desc: "We design inclusive experiences with VoiceOver support, dynamic text sizing, contrast compliance, and intuitive navigation for all users.",
  },
  {
    icon: "✨",
    color: "#ff6b35",
    bg: "#fff1ec",
    title: "Micro-Interactions & Visual Polish",
    desc: "Thoughtful animations, transitions, and feedback make interactions feel natural, responsive, and delightful — without overwhelming the user.",
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    icon: "🔍",
    color: "#0071e3",
    bg: "#e8f4ff",
    title: "Discovery & Strategy",
    desc: "Requirements analysis, user research, platform feasibility, and technical planning.",
  },
  {
    step: "02",
    icon: "✏️",
    color: "#6e3ff3",
    bg: "#f0ebff",
    title: "UI/UX Design",
    desc: "Wireframes, visual design, and interactive prototypes aligned with Apple HIG.",
  },
  {
    step: "03",
    icon: "⚙️",
    color: "#28c76f",
    bg: "#e8faf0",
    title: "iOS Development",
    desc: "Swift & SwiftUI development with scalable architecture and clean code practices.",
  },
  {
    step: "04",
    icon: "🧪",
    color: "#ff9f0a",
    bg: "#fff8e8",
    title: "QA & Testing",
    desc: "Functional testing, performance checks, and real-device validation.",
  },
  {
    step: "05",
    icon: "☁️",
    color: "#5ac8fa",
    bg: "#e8f7ff",
    title: "App Store Launch",
    desc: "App Store submission, compliance checks, and approval support.",
  },
  {
    step: "06",
    icon: "🛟",
    color: "#ff6b35",
    bg: "#fff1ec",
    title: "Support & Growth",
    desc: "Updates, performance optimization, and long-term product evolution.",
  },
];

const ENGAGEMENT_MODELS = [
  {
    tag: "Best for MVPs",
    tagColor: "#0071e3",
    tagBg: "#e8f4ff",
    title: "Fixed Price Model",
    desc: "Ideal for projects with clearly defined requirements and timelines. We commit to a fixed scope, cost, and delivery schedule — ensuring predictable budgeting.",
    items: [
      "Clearly defined scope & milestones",
      "Fixed budget & delivery timeline",
      "Minimal client management effort",
      "Ideal for MVPs & small projects",
    ],
    featured: false,
  },
  {
    tag: "★ Most Popular",
    tagColor: "#fff",
    tagBg: "#0071e3",
    title: "Dedicated Team Model",
    desc: "A dedicated team works exclusively on your product — acting as an extension of your in-house team. Perfect for scaling products and continuous development.",
    items: [
      "Full control over team & priorities",
      "Monthly billing with flexible scaling",
      "Best for SaaS & enterprise platforms",
      "Continuous delivery & long-term support",
    ],
    featured: true,
  },
  {
    tag: "Flexible Scope",
    tagColor: "#6e3ff3",
    tagBg: "#f0ebff",
    title: "Time & Material Model",
    desc: "Designed for evolving requirements. You pay only for actual development time and effort, with complete transparency and agile execution.",
    items: [
      "Flexible scope & changing priorities",
      "Pay-as-you-go (hourly or monthly)",
      "Agile & iterative delivery approach",
      "Ideal for R&D & innovation-driven projects",
    ],
    featured: false,
  },
];

const INDUSTRIES = [
  {
    title: "Enterprise & B2B Solutions",
    desc: "ERP systems, internal tools, secure dashboards and large-scale enterprise iOS applications.",
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Fintech & Banking",
    desc: "Mobile banking apps, payment gateways, digital wallets and fintech platforms with bank-grade security.",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Healthcare & MedTech",
    desc: "Telemedicine apps, EHR systems, patient monitoring and HIPAA-compliant healthcare platforms.",
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "E-Commerce & Retail",
    desc: "High-conversion shopping apps, inventory management, POS integration and omnichannel retail solutions.",
    img: "https://images.unsplash.com/photo-1515168833906-d2a3b82b302a?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "On-Demand & Logistics",
    desc: "Real-time booking, delivery tracking, fleet management and on-demand service iOS apps.",
    img: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "IoT & Smart Devices",
    desc: "iOS apps for smart devices, connected hardware, sensors and IoT ecosystems.",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "EdTech & eLearning",
    desc: "Online learning apps, LMS platforms, virtual classrooms and education iOS solutions.",
    img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Travel & Hospitality",
    desc: "Hotel booking apps, travel planning platforms, ticketing systems and hospitality solutions.",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Media, OTT & Entertainment",
    desc: "Video streaming apps, OTT platforms, music apps and digital entertainment solutions.",
    img: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?q=80&w=800&auto=format&fit=crop",
  },
];

const NDA_CARDS = [
  {
    icon: "🔒",
    bg: "#e8f4ff",
    title: "NDA Protected Engagement",
    desc: "All discussions, documentation, and deliverables are secured under a legally binding NDA.",
  },
  {
    icon: "🧠",
    bg: "#e8faf0",
    title: "100% IP Ownership",
    desc: "You retain complete ownership of source code, data, and all project assets.",
  },
  {
    icon: "📄",
    bg: "#f0ebff",
    title: "Transparent Contracts",
    desc: "Clear scope, milestones, timelines, payment terms, and exit clauses — no hidden surprises.",
  },
  {
    icon: "🛡️",
    bg: "#fff8e8",
    title: "Security & Compliance",
    desc: "Secure development practices and compliance-ready processes aligned with enterprise standards.",
  },
];

/* ─── Component ──────────────────────────────────────────── */
export default function IosDevelopment() {
  return (
    <div
      className="w-full bg-white text-slate-900 antialiased"
      style={{ fontFamily: "'Mona Sans', 'Geist', sans-serif" }}
    >
      {/* ── Global styles ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,500;12..96,600;12..96,700;12..96,800&family=Lora:ital,wght@0,400;0,600;1,500&display=swap');

        .font-bricolage { font-family: 'Bricolage Grotesque', sans-serif; }
        .font-lora      { font-family: 'Lora', Georgia, serif; }

        @keyframes hero-in   { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:none} }
        @keyframes float-a   { 0%,100%{transform:translateY(0) rotate(-1deg)} 50%{transform:translateY(-16px) rotate(1deg)} }
        @keyframes float-b   { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        @keyframes float-c   { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
        @keyframes spin-slow { from{transform:rotate(0)} to{transform:rotate(360deg)} }
        @keyframes spin-rev  { from{transform:rotate(0)} to{transform:rotate(-360deg)} }
        @keyframes shimmer   { 0%{background-position:-200% 0} 100%{background-position:200% 0} }
        @keyframes pan-blue  { 0%,100%{background-position:0% 50%} 50%{background-position:100% 50%} }
        @keyframes ticker    { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
        @keyframes bar-in    { from{transform:scaleX(0)} to{transform:scaleX(1)} }
        @keyframes pop-in    { 0%{transform:scale(.8);opacity:0} 60%{transform:scale(1.04)} 100%{transform:scale(1);opacity:1} }
        @keyframes pulse-dot { 0%,100%{box-shadow:0 0 0 0 rgba(0,113,227,.4)} 50%{box-shadow:0 0 0 10px rgba(0,113,227,0)} }
        @keyframes img-reveal{ from{clip-path:inset(0 100% 0 0);opacity:0} to{clip-path:inset(0 0% 0 0);opacity:1} }
        @keyframes count-pop { 0%{transform:scale(.7) translateY(6px);opacity:0} 70%{transform:scale(1.05)} 100%{transform:scale(1) translateY(0);opacity:1} }

        .grad-text {
          background: linear-gradient(135deg, #0071e3 0%, #5ac8fa 40%, #6e3ff3 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: pan-blue 5s ease infinite;
        }
        .shimmer-btn {
          background: linear-gradient(90deg,#0052cc,#0071e3,#5ac8fa,#0071e3,#0052cc);
          background-size: 200% auto;
          animation: shimmer 3s linear infinite;
          transition: transform .2s, box-shadow .2s;
        }
        .shimmer-btn:hover { transform:translateY(-2px); box-shadow:0 14px 36px rgba(0,113,227,.35); }

        .glass-card {
          background: rgba(255,255,255,.85);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,.7);
        }

        .apple-card {
          transition: transform .35s cubic-bezier(.34,1.56,.64,1), box-shadow .3s, border-color .3s;
          border: 1.5px solid #f0f0f5;
        }
        .apple-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 24px 56px rgba(0,113,227,.1);
          border-color: rgba(0,113,227,.2);
        }

        .service-img {
          position: relative;
          border-radius: 24px;
          overflow: hidden;
          transition: box-shadow .4s;
        }
        .service-img:hover { box-shadow: 0 32px 64px rgba(0,0,0,.14); }
        .service-img img { transition: transform .6s cubic-bezier(.22,1,.36,1); }
        .service-img:hover img { transform: scale(1.05); }

        .industry-card {
          transition: transform .4s cubic-bezier(.34,1.56,.64,1), box-shadow .35s;
        }
        .industry-card:hover { transform: translateY(-8px) scale(1.01); box-shadow: 0 28px 56px rgba(0,0,0,.18); }
        .industry-card img { transition: transform .7s cubic-bezier(.22,1,.36,1); }
        .industry-card:hover img { transform: scale(1.08); }

        .engagement-card {
          transition: transform .35s cubic-bezier(.34,1.56,.64,1), box-shadow .3s;
          border: 1.5px solid #f0f0f5;
        }
        .engagement-card:hover { transform: translateY(-8px); }

        .process-step {
          transition: transform .35s cubic-bezier(.34,1.56,.64,1), box-shadow .3s, border-color .3s;
          border: 1.5px solid #f0f0f5;
        }
        .process-step:hover { transform: translateY(-6px); box-shadow: 0 18px 42px rgba(0,0,0,.08); }

        .design-item {
          transition: all .3s cubic-bezier(.34,1.56,.64,1);
          border: 1.5px solid #f0f0f5;
        }
        .design-item:hover { transform: translateX(8px); box-shadow: 0 12px 32px rgba(0,113,227,.08); border-color: rgba(0,113,227,.2); }

        .contact-card {
          transition: transform .3s cubic-bezier(.34,1.56,.64,1), box-shadow .3s, border-color .3s;
          border: 1.5px solid #f0f0f5;
          overflow: hidden;
        }
        .contact-card:hover { transform: translateY(-6px); box-shadow: 0 20px 44px rgba(0,113,227,.1); border-color: rgba(0,113,227,.25); }
        .contact-card .shimmer-sweep {
          position: absolute; inset: 0;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,.5), transparent);
          opacity: 0;
          transform: translateX(-100%);
          transition: opacity .3s;
        }
        .contact-card:hover .shimmer-sweep { opacity: 1; transform: translateX(100%); transition: transform .7s ease, opacity .3s; }

        .dot-pattern {
          background-image: radial-gradient(circle, rgba(0,113,227,.1) 1.5px, transparent 1.5px);
          background-size: 28px 28px;
        }

        .section-label {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: .14em;
          text-transform: uppercase;
        }

        .ticker-wrap { overflow: hidden; white-space: nowrap; }
        .ticker-inner { display: inline-block; animation: ticker 22s linear infinite; }

        .highlight-rail { height: 3px; background: linear-gradient(90deg,#0071e3,#5ac8fa,#6e3ff3); animation: shimmer 2s linear infinite; background-size:200% auto; }

        .outline-btn {
          border: 2px solid #e5e7eb;
          transition: all .25s;
        }
        .outline-btn:hover { border-color: #93c5fd; color: #0071e3; background: #f0f7ff; }

        .bullet-check {
          display: flex; align-items: center; gap: 10px;
        }
        .bullet-check::before {
          content: '';
          width: 20px; height: 20px; flex-shrink: 0;
          border-radius: 50%;
          background: url("data:image/svg+xml,%3Csvg viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='10' cy='10' r='10' fill='%230071e3' fill-opacity='.12'/%3E%3Cpath d='M5.5 10.5l3 3 5-6' stroke='%230071e3' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") center/contain no-repeat;
        }
      `}</style>

      {/* ─── HERO ─── */}
      <section className=" min-h-screen flex items-center overflow-hidden dot-pattern bg-white">
        {/* Ambient */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute -top-48 left-1/4 w-[700px] h-[700px] rounded-full opacity-25"
            style={{
              background:
                "radial-gradient(ellipse,rgba(0,113,227,.2),transparent 70%)",
              filter: "blur(80px)",
            }}
          />
          <div
            className="absolute top-1/2 -right-48 w-[500px] h-[500px] rounded-full opacity-20"
            style={{
              background:
                "radial-gradient(ellipse,rgba(110,63,243,.18),transparent 70%)",
              filter: "blur(70px)",
              animation: "float-b 10s ease-in-out infinite",
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-[400px] h-[400px] opacity-15"
            style={{
              background:
                "radial-gradient(ellipse,rgba(90,200,250,.2),transparent 70%)",
              filter: "blur(60px)",
              animation: "float-c 12s ease-in-out 3s infinite",
            }}
          />
        </div>

        {/* Decorative rings */}
        <div className="absolute right-20 top-16 w-80 h-80 opacity-8 hidden xl:block pointer-events-none">
          <svg
            viewBox="0 0 300 300"
            className="w-full h-full"
            style={{ animation: "spin-slow 30s linear infinite" }}
          >
            <circle
              cx="150"
              cy="150"
              r="140"
              fill="none"
              stroke="url(#ring1)"
              strokeWidth="1"
              strokeDasharray="10 6"
            />
            <defs>
              <linearGradient id="ring1" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#0071e3" />
                <stop offset="100%" stopColor="#6e3ff3" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute right-32 top-28 w-56 h-56 opacity-8 hidden xl:block pointer-events-none">
          <svg
            viewBox="0 0 200 200"
            className="w-full h-full"
            style={{ animation: "spin-rev 22s linear infinite" }}
          >
            <circle
              cx="100"
              cy="100"
              r="90"
              fill="none"
              stroke="#5ac8fa"
              strokeWidth="1.2"
              strokeDasharray="6 10"
            />
          </svg>
        </div>

        <div className="relative z-10 mt-[50px] mx-auto px-[5%] py-12 grid md:grid-cols-2 gap-16 lg:gap-20 items-center w-full">
          {/* Left */}
          <div>
            <div
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-blue-200 bg-blue-50 text-blue-700 mb-4"
              style={{
                animation: "pop-in .6s cubic-bezier(.34,1.56,.64,1) .1s both",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: ".1em",
                textTransform: "uppercase",
              }}
            >
              <span
                className="w-2 h-2 rounded-full bg-blue-500 inline-block"
                style={{ animation: "pulse-dot 2.5s ease-in-out infinite" }}
              />
              Premium iOS Development
            </div>

            <h1
              className="font-bricolage text-5xl sm:text-6xl md:text-[3.6rem] lg:text-[4.2rem] font-bold leading-[1.06] mb-6"
              style={{
                animation: "hero-in .8s cubic-bezier(.22,1,.36,1) .15s both",
              }}
            >
              Build Premium,
              <br />
              <span className="grad-text">High-Performance</span>
              <br />
              iOS Applications
            </h1>

            <p
              className="text-lg text-slate-600 leading-relaxed max-w-xl mb-5"
              style={{
                animation: "hero-in .8s cubic-bezier(.22,1,.36,1) .3s both",
              }}
            >
              We build high-performance, secure, and scalable iPhone and iPad
              applications. Our expert Swift and SwiftUI developers craft
              intuitive Apple-compliant apps that deliver exceptional user
              experiences and long-term business value.
            </p>

            <div
              className="flex flex-wrap gap-4 mb-6"
              style={{
                animation: "hero-in .8s cubic-bezier(.22,1,.36,1) .45s both",
              }}
            >
              <button className="bg-gradient-to-br from-amber-500 btn-amber to-amber-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:-translate-y-1 transition">
                <span>Get a Free Quote </span>
                <span></span>
              </button>
              <button className="outline-btn inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-slate-700 text-base">
                View Our Work
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
                  <rect x="2" y="6" width="14" height="12" rx="2" />
                </svg>
              </button>
            </div>

            {/* Stats */}
            <div
              className="grid grid-cols-3 gap-4"
              style={{
                animation: "hero-in .8s cubic-bezier(.22,1,.36,1) .6s both",
              }}
            >
              {[
                { val: 300, suffix: "+", label: "iOS Apps Shipped" },
                { val: 99, suffix: "%", label: "App Store Approval Rate" },
                { val: 8, suffix: "+", label: "Years iOS Expertise" },
              ].map((s, i) => (
                <div
                  key={i}
                  className="rounded-2xl  p-4  transition-all"
                  style={{
                    animation: `count-pop .6s cubic-bezier(.34,1.56,.64,1) ${700 + i * 100}ms both`,
                  }}
                >
                  <div className="font-bricolage text-3xl font-bold text-blue-600">
                    <CountUp to={s.val} suffix={s.suffix} />
                  </div>
                  <div className="text-xs text-slate-500 mt-1 font-medium leading-tight">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — iOS Phone Mockup */}
          <div className="flex justify-center items-center relative">
            <div
              className="relative"
              style={{ animation: "float-a 6s ease-in-out infinite" }}
            >
              {/* Phone */}
              <div className="relative w-[290px] mx-auto">
                <div
                  className="rounded-[2.1rem] border-[4px] border-slate-800 shadow-2xl overflow-hidden"
                  style={{
                    boxShadow:
                      "0 50px 100px rgba(0,0,0,.25), 0 0 0 1px rgba(255,255,255,.08) inset",
                  }}
                >
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-5 bg-slate-800 rounded-full z-10" />
                  <div
                    className="h-[520px] overflow-hidden"
                    style={{
                      background: "linear-gradient(160deg,#f0f7ff,#f5f0ff)",
                    }}
                  >
                    <div className="p-5 pt-10">
                      {/* Status bar */}
                      <div className="flex items-center justify-between mb-6 text-[10px] font-semibold text-slate-700">
                        <span>9:41</span>
                        <div className="flex gap-1 items-center">
                          <svg width="14" height="10" viewBox="0 0 14 10">
                            <rect
                              x="0"
                              y="3"
                              width="3"
                              height="7"
                              rx="1"
                              fill="#1c1c1e"
                            />
                            <rect
                              x="4"
                              y="2"
                              width="3"
                              height="8"
                              rx="1"
                              fill="#1c1c1e"
                            />
                            <rect
                              x="8"
                              y="0"
                              width="3"
                              height="10"
                              rx="1"
                              fill="#1c1c1e"
                            />
                            <rect
                              x="12"
                              y="1"
                              width="2"
                              height="8"
                              rx="1"
                              fill="#1c1c1e"
                              opacity=".3"
                            />
                          </svg>
                          <span>●●●</span>
                          <svg width="22" height="11" viewBox="0 0 22 11">
                            <rect
                              x="0"
                              y="1"
                              width="18"
                              height="9"
                              rx="2"
                              stroke="#1c1c1e"
                              strokeWidth="1"
                              fill="none"
                            />
                            <rect
                              x="1.5"
                              y="2.5"
                              width="13"
                              height="6"
                              rx="1"
                              fill="#0071e3"
                            />
                            <rect
                              x="19"
                              y="3"
                              width="2"
                              height="5"
                              rx="1"
                              fill="#1c1c1e"
                              opacity=".4"
                            />
                          </svg>
                        </div>
                      </div>

                      {/* App header */}
                      <div className="flex items-center justify-between mb-5">
                        <div>
                          <div className="text-xs text-slate-400">
                            Welcome back 👋
                          </div>
                          <div className="font-bricolage font-bold text-slate-900 text-sm">
                            iOS Portfolio
                          </div>
                        </div>
                        <div
                          className="w-9 h-9 rounded-full shadow-md overflow-hidden"
                          style={{
                            background:
                              "linear-gradient(135deg,#0071e3,#5ac8fa)",
                          }}
                        >
                          <div className="w-full h-full flex items-center justify-center text-white font-bold text-sm">
                            A
                          </div>
                        </div>
                      </div>

                      {/* Featured card */}
                      <div
                        className="rounded-2xl p-4 mb-4 text-white relative overflow-hidden"
                        style={{
                          background: "linear-gradient(135deg,#0071e3,#6e3ff3)",
                        }}
                      >
                        <div
                          className="absolute top-0 right-0 w-32 h-32 opacity-10 rounded-full"
                          style={{
                            background:
                              "radial-gradient(circle,#fff,transparent)",
                            transform: "translate(30%,-30%)",
                          }}
                        />
                        <div className="text-[10px] opacity-80 mb-1 font-medium">
                          Today's Highlights
                        </div>
                        <div className="font-bricolage text-xl font-bold">
                          24 Active Projects
                        </div>
                        <div className="text-[10px] opacity-75 mt-2 flex items-center gap-1">
                          ↑ 3 new this week
                        </div>
                      </div>

                      {/* Quick stats */}
                      <div className="grid grid-cols-3 gap-2 mb-4">
                        {[
                          { label: "Apps", val: "148", color: "#0071e3" },
                          { label: "Rating", val: "4.9★", color: "#ff9f0a" },
                          { label: "Users", val: "2M+", color: "#28c76f" },
                        ].map((item, i) => (
                          <div
                            key={i}
                            className="rounded-xl bg-white/80 p-2.5   shadow-sm"
                          >
                            <div
                              className="font-bold text-sm"
                              style={{ color: item.color }}
                            >
                              {item.val}
                            </div>
                            <div className="text-[9px] text-slate-400 mt-0.5">
                              {item.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Recent apps list */}
                      <div className="text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                        Recent Apps
                      </div>
                      {[
                        { name: "FinVault", cat: "Banking", color: "#0071e3" },
                        {
                          name: "HealthPulse",
                          cat: "Healthcare",
                          color: "#28c76f",
                        },
                        {
                          name: "ShopX Pro",
                          cat: "E-Commerce",
                          color: "#ff9f0a",
                        },
                      ].map((app, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2.5 py-2 border-b border-slate-100 last:border-0"
                        >
                          <div
                            className="w-8 h-8 rounded-xl flex items-center justify-center text-white text-xs font-bold shadow-sm shrink-0"
                            style={{
                              background: `linear-gradient(135deg,${app.color},${app.color}99)`,
                            }}
                          >
                            {app.name[0]}
                          </div>
                          <div className="flex-1">
                            <div className="text-xs font-semibold text-slate-800">
                              {app.name}
                            </div>
                            <div className="text-[10px] text-slate-400">
                              {app.cat}
                            </div>
                          </div>
                          <div className="w-2 h-2 rounded-full bg-green-400 shrink-0" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-16 h-1 bg-slate-600 rounded-full" />
              </div>

              {/* Floating badges */}
              <div
                className="absolute -left-14 top-20 glass-card rounded-2xl shadow-xl px-4 py-3"
                style={{ animation: "float-b 4s ease-in-out .5s infinite" }}
              >
                <div className="flex items-center gap-2">
                  <span className="text-lg">⚡</span>
                  <div>
                    <div className="text-xs font-bold text-slate-800">
                      Swift 5.9
                    </div>
                    <div className="text-[10px] text-slate-400">Latest SDK</div>
                  </div>
                </div>
              </div>
              <div
                className="absolute -right-12 top-32 glass-card rounded-2xl shadow-xl px-4 py-3"
                style={{ animation: "float-c 5s ease-in-out 1s infinite" }}
              >
                <div className="flex items-center gap-2">
                  <span className="text-lg">🍎</span>
                  <div>
                    <div className="text-xs font-bold text-slate-800">
                      HIG Compliant
                    </div>
                    <div className="text-[10px] text-slate-400">
                      Apple Certified
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="absolute -right-8 bottom-20 rounded-2xl shadow-xl px-4 py-2.5"
                style={{
                  background: "linear-gradient(135deg,#0071e3,#5ac8fa)",
                  animation: "float-b 6s ease-in-out .8s infinite",
                }}
              >
                <div className="text-white text-xs font-bold">
                  ✓ App Store Ready
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ticker */}
        <div className="mt-8 absolute bottom-0 left-0 right-0 bg-white/85 backdrop-blur-sm py-3 overflow-hidden">
          <div className="mt-8 flex items-center whitespace-nowrap animate-[ticker_28s_linear_infinite]">
            {[...Array(2)]
              .flatMap(() => [
                "Swift",
                "SwiftUI",
                "Objective-C",
                "Xcode",
                "Core Data",
                "ARKit",
                "HealthKit",
                "CloudKit",
                "TestFlight",
                "App Store Connect",
                "UIKit",
                "Combine",
                "Metal",
                "MapKit",
                "StoreKit",
              ])
              .map((tech, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 mx-4 px-7 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-xs font-medium text-slate-700"
                >
                  <img
                    src={IOS_TECH_ICONS[tech]}
                    alt={tech}
                    className="w-4 h-4"
                  />
                  {tech}
                </div>
              ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 " />
      </section>

      {/* ─── TRUSTED PARTNER ─── */}
      <section className="py-12 bg-white relative overflow-hidden">
        <div
          className="absolute right-0 top-0 w-96 h-96 opacity-8 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse,rgba(0,113,227,.1),transparent)",
            filter: "blur(60px)",
          }}
        />
        <div className=" absolute top-0 left-0 right-0 bg-white/85 backdrop-blur-sm py-3 overflow-hidden">
          <div className="mt-8 flex items-center whitespace-nowrap animate-[ticker_28s_linear_infinite]">
            {[...Array(2)]
              .flatMap(() => [
                "Swift",
                "SwiftUI",
                "Objective-C",
                "Xcode",
                "Core Data",
                "ARKit",
                "HealthKit",
                "CloudKit",
                "TestFlight",
                "App Store Connect",
                "UIKit",
                "Combine",
                "Metal",
                "MapKit",
                "StoreKit",
              ])
              .map((tech, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 mx-4 px-7 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-xs font-medium text-slate-700"
                >
                  <img
                    src={IOS_TECH_ICONS[tech]}
                    alt={tech}
                    className="w-4 h-4"
                  />
                  {tech}
                </div>
              ))}
          </div>
        </div>
        <div className=" mt-[80px] mx-auto px-[5%]">
          <Reveal className="    mx-auto mb-16">
            <span className="section-label text-blue-600 mb-4 block">
              Why Choose Us
            </span>
            <h2 className="font-bricolage text-4xl md:text-5xl font-bold mb-4 leading-tight">
              A Trusted iOS Development
              <br />
              <span className="grad-text">Partner for Modern Businesses</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Businesses choose us not just for development, but for our deep
              understanding of the Apple ecosystem, focus on quality, and
              commitment to long-term success.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {TRUST_CARDS.map((c, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="apple-card rounded-3xl bg-white p-7 shadow-sm h-full">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5 shadow-sm"
                    style={{ background: c.bg }}
                  >
                    {c.icon}
                  </div>
                  <h3 className="font-bricolage font-bold text-slate-900 text-base mb-3">
                    {c.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY BUSINESSES CHOOSE US ─── */}
      <section
        className="py-12 relative overflow-hidden"
        style={{ background: "linear-gradient(180deg,#f8f9ff,#fff)" }}
      >
        <div className="  mx-auto px-[5%]">
          <Reveal className="   mx-auto mb-20">
            <span className="section-label text-blue-600 mb-4 block">
              Why We're Different
            </span>
            <h2 className="font-bricolage text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Why Businesses Choose Us
              <br />
              <span className="grad-text">for iOS App Development</span>
            </h2>
            <p className="text-lg text-slate-600">
              We help startups and enterprises build secure, scalable, and
              Apple-compliant applications that deliver exceptional performance.
            </p>
          </Reveal>

          <div className="space-y-24">
            {WHY_ROWS.map((row, i) => (
              <div
                key={i}
                className={`grid lg:grid-cols-2 gap-14 lg:gap-20 items-center ${row.flip ? "lg:[&>*:first-child]:order-last" : ""}`}
              >
                <Reveal
                  direction={row.flip ? 40 : 40}
                  x={row.flip ? 40 : -40}
                  y={0}
                  delay={80}
                >
                  <div
                    className="service-img relative shadow-2xl"
                    style={{ height: "400px" }}
                  >
                    <Image
                      fill
                      src={row.img}
                      alt={row.title}
                      className="w-full h-full object-cover"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        borderRadius: "24px",
                        background: `linear-gradient(135deg,${row.color}15,transparent)`,
                        pointerEvents: "none",
                      }}
                    />
                  </div>
                </Reveal>
                <Reveal x={row.flip ? -40 : 40} y={0} delay={160}>
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-sm flex-shrink-0"
                        style={{ background: row.bg }}
                      >
                        {row.icon}
                      </div>
                      <h3 className="font-bricolage text-2xl font-bold text-slate-900 leading-tight">
                        {row.title}
                      </h3>
                    </div>
                    <p className="text-lg text-slate-600 leading-relaxed mb-7">
                      {row.desc}
                    </p>
                    <div className="space-y-3">
                      {row.bullets.map((b, j) => (
                        <div
                          key={j}
                          className="bullet-check text-slate-700 font-medium"
                        >
                          {b}
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── END-TO-END SERVICES ─── */}
      <section className="py-12 bg-white">
        <div className="  mx-auto px-[5%]">
          <Reveal className="    mx-auto mb-20">
            <span className="section-label text-blue-600 mb-4 block">
              Our Services
            </span>
            <h2 className="font-bricolage text-4xl md:text-5xl font-bold mb-4 leading-tight">
              End-to-End iOS App
              <br />
              <span className="grad-text">Development Services</span>
            </h2>
            <p className="text-lg text-slate-600">
              Full-cycle iOS app development services designed to help you build
              secure, scalable, high-performing applications across the entire
              Apple ecosystem.
            </p>
          </Reveal>

          <div className="space-y-24">
            {SERVICES.map((s, i) => (
              <div
                key={i}
                className={`grid lg:grid-cols-2 gap-14 lg:gap-20 items-center ${s.flip ? "lg:[&>*:first-child]:order-last" : ""}`}
              >
                <Reveal x={s.flip ? 40 : -40} y={0} delay={80}>
                  <div
                    className="service-img relative shadow-2xl"
                    style={{ height: "380px" }}
                  >
                    <Image
                      fill
                      src={s.img}
                      alt={s.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </Reveal>
                <Reveal x={s.flip ? -40 : 40} y={0} delay={160}>
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-sm flex-shrink-0"
                        style={{ background: s.bg }}
                      >
                        {s.icon}
                      </div>
                      <h3 className="font-bricolage text-2xl font-bold text-slate-900">
                        {s.title}
                      </h3>
                    </div>
                    <p className="text-lg text-slate-600 leading-relaxed mb-7">
                      {s.desc}
                    </p>
                    <div className="space-y-3">
                      {s.bullets.map((b, j) => (
                        <div
                          key={j}
                          className="bullet-check text-slate-700 font-medium"
                        >
                          {b}
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DESIGN EXCELLENCE ─── */}
      <section
        className="py-12 relative overflow-hidden"
        style={{ background: "linear-gradient(180deg,#f8f9ff,#fff)" }}
      >
        <div className="  mx-auto px-[5%]">
          <Reveal className="    mx-auto mb-20">
            <span className="section-label text-blue-600 mb-4 block">
              Design Philosophy
            </span>
            <h2 className="font-bricolage text-4xl md:text-5xl font-bold mb-4 leading-tight">
              iOS UI/UX <span className="grad-text">Design Excellence</span>
            </h2>
            <p className="text-lg text-slate-600">
              We design iOS experiences that feel effortless, intuitive, and
              unmistakably Apple — guided by Human Interface Guidelines and real
              user behavior.
            </p>
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-4">
              {DESIGN_FEATURES.map((d, i) => (
                <Reveal key={i} delay={i * 80} x={-30} y={0}>
                  <div className="design-item rounded-2xl bg-white p-6 shadow-sm">
                    <div className="flex gap-5 items-start">
                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl flex-shrink-0 shadow-sm"
                        style={{ background: d.bg }}
                      >
                        {d.icon}
                      </div>
                      <div>
                        <h3 className="font-bricolage font-bold text-slate-900 text-base mb-2">
                          {d.title}
                        </h3>
                        <p className="text-sm text-slate-500 leading-relaxed">
                          {d.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal x={40} y={0} delay={200}>
              <div className="lg:sticky lg:top-32">
                <div
                  className="service-img relative shadow-2xl rounded-3xl overflow-hidden"
                  style={{ height: "560px" }}
                >
                  <Image
                    src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=700&auto=format&fit=crop"
                    width={800}
                    height={600}
                    alt="iOS UI UX Design"
                    className="w-full h-full object-cover"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(135deg,rgba(0,113,227,.1),transparent)",
                      pointerEvents: "none",
                    }}
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── PROCESS ─── */}
      <section className="py-12 bg-white relative overflow-hidden">
        <div className="  mx-auto px-[5%]">
          <Reveal className="    mx-auto mb-20">
            <span className="section-label text-blue-600 mb-4 block">
              Development Process
            </span>
            <h2 className="font-bricolage text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Our iOS App
              <br />
              <span className="grad-text">Development Process</span>
            </h2>
            <p className="text-lg text-slate-600">
              A transparent, structured, and Apple-aligned process to transform
              your idea into a reliable, high-performing iOS application.
            </p>
          </Reveal>

          {/* Horizontal connector */}
          <div className="hidden lg:block relative mb-4">
            <div
              className="absolute top-8 left-[8%] right-[8%] h-px opacity-20"
              style={{
                background:
                  "linear-gradient(90deg,#0071e3,#5ac8fa,#6e3ff3,#28c76f,#ff9f0a,#ff6b35)",
              }}
            />
            <div
              className="absolute top-8 left-[8%] right-[8%] h-px bar-in opacity-40"
              style={{
                background:
                  "linear-gradient(90deg,#0071e3,#5ac8fa,#6e3ff3,#28c76f,#ff9f0a,#ff6b35)",
                transformOrigin: "left",
                animationDelay: "300ms",
              }}
            />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-4">
            {PROCESS_STEPS.map((p, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="process-step rounded-3xl bg-white p-6 shadow-sm h-full relative group">
                  <span
                    className="absolute -top-3 left-4 px-3 py-1 rounded-full text-white text-[10px] font-bold shadow"
                    style={{
                      background: `linear-gradient(135deg,${p.color},${p.color}cc)`,
                    }}
                  >
                    {p.step}
                  </span>
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl mt-2 mb-4 shadow-sm"
                    style={{ background: p.bg }}
                  >
                    {p.icon}
                  </div>
                  <h3 className="font-bricolage font-bold text-slate-900 text-sm mb-2">
                    {p.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ENGAGEMENT MODELS ─── */}
      <section
        className="py-12 relative overflow-hidden"
        style={{ background: "linear-gradient(180deg,#f8f9ff,#fff)" }}
      >
        <div className="  mx-auto px-[5%]">
          <Reveal className="    mx-auto mb-16">
            <span className="section-label text-blue-600 mb-4 block">
              Work With Us
            </span>
            <h2 className="font-bricolage text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Flexible <span className="grad-text">Engagement Models</span>
            </h2>
            <p className="text-lg text-slate-600">
              Choose an engagement model that aligns with your project scope,
              budget, and long-term business goals.
            </p>
          </Reveal>

          <div className="grid lg:grid-cols-3 gap-7 mx-auto w-full">
            {ENGAGEMENT_MODELS.map((m, i) => (
              <Reveal key={i} delay={i * 90}>
                <div
                  className={`engagement-card rounded-3xl p-8 h-full relative ${m.featured ? "shadow-2xl" : "bg-white shadow-sm"}`}
                  style={
                    m.featured
                      ? {
                          background:
                            "linear-gradient(160deg,#0052cc,#0071e3,#5ac8fa)",
                          border: "none",
                        }
                      : {}
                  }
                >
                  {m.featured && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full bg-white text-blue-600 font-bold text-xs shadow-lg">
                      ★ Most Popular
                    </div>
                  )}
                  <div className="flex items-center justify-between mb-5">
                    <span
                      className="text-[11px] font-bold px-3 py-1.5 rounded-full"
                      style={{
                        background: m.featured
                          ? "rgba(255,255,255,.2)"
                          : m.tagBg,
                        color: m.featured ? "#fff" : m.tagColor,
                      }}
                    >
                      {m.tag}
                    </span>
                    <div
                      className={`text-2xl ${m.featured ? "opacity-80" : ""}`}
                    >
                      {i === 0 ? "🎯" : i === 1 ? "👥" : "⏱️"}
                    </div>
                  </div>
                  <h3
                    className={`font-bricolage text-2xl font-bold mb-3 ${m.featured ? "text-white" : "text-slate-900"}`}
                  >
                    {m.title}
                  </h3>
                  <p
                    className={`leading-relaxed mb-6 text-sm ${m.featured ? "text-blue-100" : "text-slate-600"}`}
                  >
                    {m.desc}
                  </p>
                  <div className="space-y-2.5">
                    {m.items.map((item, j) => (
                      <div
                        key={j}
                        className={`flex items-center gap-2 text-sm ${m.featured ? "text-blue-100" : "text-slate-600"}`}
                      >
                        <span
                          className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${m.featured ? "bg-white/20 text-white" : "bg-blue-50 text-blue-600"}`}
                        >
                          ✓
                        </span>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── COMPLIANCE & SECURITY ─── */}
      <section className="py-12 bg-white relative overflow-hidden">
        <div className="  mx-auto px-[5%]">
          <Reveal className="    mx-auto mb-16">
            <span className="section-label text-blue-600 mb-4 block">
              Trust & Security
            </span>
            <h2 className="font-bricolage text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Compliance, Security
              <br />
              <span className="grad-text">&amp; Legal Assurance</span>
            </h2>
            <p className="text-lg text-slate-600">
              We operate with strict security, compliance, and legal frameworks
              to ensure complete confidentiality and data protection.
            </p>
          </Reveal>

          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <div className="space-y-4">
              {[
                {
                  icon: "🔒",
                  bg: "#e8f4ff",
                  title: "NDA Protected Engagement",
                  desc: "All discussions and deliverables are secured under a legally binding NDA.",
                },
                {
                  icon: "🧠",
                  bg: "#e8faf0",
                  title: "100% IP Ownership",
                  desc: "You retain complete ownership of source code, data, and all project assets.",
                },
                {
                  icon: "🏛️",
                  bg: "#f0ebff",
                  title: "ISO-Aligned Security",
                  desc: "Development workflows aligned with ISO 27001 security principles and controls.",
                },
                {
                  icon: "🌍",
                  bg: "#fff8e8",
                  title: "GDPR & Global Data Privacy",
                  desc: "Strict data privacy measures aligned with GDPR and international regulations.",
                },
              ].map((item, i) => (
                <Reveal key={i} delay={i * 70} x={-30} y={0}>
                  <div className="apple-card rounded-2xl bg-white p-5 shadow-sm flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0 shadow-sm"
                      style={{ background: item.bg }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-bricolage font-bold text-slate-900 text-sm mb-1">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal className="lg:col-span-2" x={40} y={0} delay={200}>
              <div className="rounded-3xl border border-slate-100 bg-white p-10 md:p-12 shadow-sm">
                <h3 className="font-bricolage text-2xl md:text-3xl font-bold mb-7 text-slate-900">
                  Built for Enterprise Trust &amp; Long-Term Partnerships
                </h3>
                <div className="space-y-5 text-slate-600 leading-relaxed">
                  <p>
                    At{" "}
                    <strong className="text-slate-900">
                      Albos Technologies
                    </strong>
                    , security and trust are embedded into every phase of our
                    software development lifecycle. Your business data and
                    intellectual property remain fully protected from initial
                    discussions to deployment.
                  </p>
                  <p>
                    We follow industry-recognized best practices aligned with{" "}
                    <strong className="text-slate-900">ISO 27001</strong>,{" "}
                    <strong className="text-slate-900">GDPR</strong>, and
                    enterprise security standards — including access controls,
                    encrypted storage, secure APIs, and role-based permissions.
                  </p>
                  <p>
                    All legal, compliance, and security documentation is shared
                    transparently under NDA, giving startups, enterprises, and
                    regulated industries complete peace of mind.
                  </p>
                </div>
                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <a
                    href="/contact"
                    className="shimmer-btn inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-white font-semibold shadow-lg"
                  >
                    Request NDA &amp; Compliance Details →
                  </a>
                  <p className="text-xs text-slate-400">
                    NDA-protected · No obligation · Enterprise-grade
                    confidentiality
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* NDA Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
            {NDA_CARDS.map((c, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="apple-card rounded-2xl bg-white p-7 shadow-sm h-full">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4 shadow-sm"
                    style={{ background: c.bg }}
                  >
                    {c.icon}
                  </div>
                  <h3 className="font-bricolage font-bold text-slate-900 text-sm mb-2">
                    {c.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Ownership banner */}
          <Reveal className="mt-12" delay={100}>
            <div
              className="rounded-3xl p-10   text-white overflow-hidden relative"
              style={{
                background: "linear-gradient(135deg,#0052cc,#0071e3,#5ac8fa)",
              }}
            >
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  background:
                    "radial-gradient(circle at 20% 50%,#fff,transparent 50%), radial-gradient(circle at 80% 50%,#6e3ff3,transparent 50%)",
                }}
              />
              <div className="relative z-10">
                <h3 className="font-bricolage text-2xl md:text-3xl font-bold mb-4">
                  Your Idea. Your Code. Your Ownership.
                </h3>
                <p className="text-blue-100 max-w-2xl  leading-relaxed mb-8">
                  We believe trust is the foundation of successful partnerships.
                  Our contracts are designed to protect your interests, ensure
                  confidentiality, and build long-term collaboration.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white text-blue-700 font-bold hover:bg-blue-50 transition shadow-lg"
                >
                  Request NDA &amp; Contract Details →
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── INDUSTRIES ─── */}
      <section
        className="py-12 relative overflow-hidden"
        style={{ background: "linear-gradient(180deg,#f8f9ff,#fff)" }}
      >
        <div className="  mx-auto px-[5%]">
          <Reveal className="    mx-auto mb-16">
            <span className="section-label text-blue-600 mb-4 block">
              Industries
            </span>
            <h2 className="font-bricolage text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Industries <span className="grad-text">We Serve</span>
            </h2>
            <p className="text-lg text-slate-600">
              We design and develop iOS applications for multiple industries —
              delivering secure, scalable and performance-driven mobile
              solutions.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {INDUSTRIES.map((ind, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="industry-card relative h-[340px] rounded-3xl overflow-hidden shadow-lg cursor-default">
                  <Image
                    fill
                    src={ind.img}
                    alt={ind.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top,rgba(0,0,0,.82) 0%,rgba(0,0,0,.35) 55%,transparent 100%)",
                    }}
                  />
                  <div className="absolute inset-0 p-7 flex flex-col justify-end">
                    <h3 className="font-bricolage font-bold text-white text-lg mb-2">
                      {ind.title}
                    </h3>
                    <p className="text-white/80 text-sm leading-relaxed">
                      {ind.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section
        className="py-12 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg,#f0f7ff 0%,#f5f0ff 50%,#f0f9ff 100%)",
        }}
      >
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-30"
            style={{
              background:
                "radial-gradient(ellipse,rgba(0,113,227,.18),transparent)",
              filter: "blur(60px)",
              animation: "float-a 9s ease-in-out infinite",
            }}
          />
          <div
            className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full opacity-25"
            style={{
              background:
                "radial-gradient(ellipse,rgba(110,63,243,.16),transparent)",
              filter: "blur(60px)",
              animation: "float-b 7s ease-in-out 2s infinite",
            }}
          />
        </div>

        <div className="relative z-10   mx-auto px-[5%]">
          <Reveal className="  text-center  mx-auto mb-16">
            <span className="section-label text-blue-600 mb-5 block">
              Let's Build Together
            </span>
            <h2 className="font-bricolage text-4xl md:text-6xl mx-auto font-bold mb-5 leading-tight">
              Ready to Grow
              <br />
              <span className="grad-text">Your Business?</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed  mx-auto mb-10">
              Speak with our experts today. We help brands scale with powerful
              iOS development, design, automation, and cloud solutions.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button className="shimmer-btn px-10 py-4 rounded-2xl text-white font-semibold text-lg shadow-xl">
                Get a Free Quote
              </button>
              <a
                href="tel:+919766650411"
                className="outline-btn inline-flex items-center gap-2 px-10 py-4 rounded-2xl text-slate-700 font-semibold text-lg"
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
                  className={`contact-card block p-7 bg-white rounded-2xl shadow-sm   relative ${!c.href ? "cursor-default" : ""}`}
                >
                  <div className="shimmer-sweep text-center" />
                  <div className="text-3xl mb-3 text-center relative z-10">
                    {c.icon}
                  </div>
                  <div className="section-label text-center text-slate-400 mb-1 relative z-10">
                    {c.label}
                  </div>
                  <div className="text-sm text-center font-semibold text-slate-800 leading-snug relative z-10">
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
