"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

// Custom hook for intersection observer animations
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
      { threshold: 0.15, ...options },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return [ref, inView];
}

function AnimatedSection({
  children,
  className = "",
  delay = 0,
  direction = "up",
}) {
  const [ref, inView] = useInView();
  const transforms = {
    up: "translateY(40px)",
    down: "translateY(-40px)",
    left: "translateX(-40px)",
    right: "translateX(40px)",
  };
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translate(0)" : transforms[direction],
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function CountUp({ end, duration = 2000, suffix = "" }) {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView();
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else setCount(Math.floor(start));
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

const services = [
  {
    icon: "https://cdn-icons-png.flaticon.com/512/954/954591.png",
    title: "REST API Development",
    desc: "Lightweight and scalable REST APIs for mobile apps, web platforms, IoT systems, and enterprise software.",
    tag: "Most Requested",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
    title: "GraphQL API Development",
    desc: "Flexible APIs that allow clients to fetch only the required data, improving performance and developer experience.",
    tag: "Flexible",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/2913/2913659.png",
    title: "gRPC & Real-Time APIs",
    desc: "High-performance real-time APIs using gRPC and WebSockets for chat, fintech, live tracking, and automation systems.",
    tag: "High Performance",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/1104/1104982.png",
    title: "Microservices API Architecture",
    desc: "Cloud-native, modular APIs that scale independently—perfect for SaaS platforms and enterprise ecosystems.",
    tag: "Scalable",
  },
];

const industries = [
  {
    icon: "https://cdn-icons-png.flaticon.com/512/2331/2331970.png",
    title: "FinTech & Banking",
    outcome: "Secure, compliant financial platforms.",
    items: [
      "Payment gateway & wallet integrations",
      "Transaction processing & reconciliation",
      "KYC & identity verification systems",
      "Fraud detection & real-time alerts",
    ],
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/1170/1170576.png",
    title: "E-commerce & Marketplace",
    outcome: "Scalable commerce with faster checkout.",
    items: [
      "Product catalog & inventory management",
      "Order & checkout automation",
      "Payment & shipping integrations",
      "Sales analytics & reporting systems",
    ],
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/2967/2967350.png",
    title: "Healthcare & Insurance",
    outcome: "Compliant, efficient healthcare ecosystems.",
    items: [
      "Patient, policy & claims management",
      "Secure healthcare data exchange",
      "Appointment & workflow automation",
      "Third-party system integrations",
    ],
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/854/854878.png",
    title: "Logistics & Supply Chain",
    outcome: "Improved visibility and optimized operations.",
    items: [
      "Shipment & vehicle tracking APIs",
      "Route optimization systems",
      "Warehouse & ERP integrations",
      "Real-time alerts & notifications",
    ],
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/4712/4712109.png",
    title: "SaaS & Enterprise",
    outcome: "Scalable, secure, future-ready platforms.",
    items: [
      "Multi-tenant API architectures",
      "Role-based access & authentication",
      "Third-party SaaS integrations",
      "Scalable microservices systems",
    ],
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/3039/3039386.png",
    title: "IoT & Smart Systems",
    outcome: "Reliable real-time IoT ecosystems.",
    items: [
      "Device-to-cloud communication",
      "Real-time telemetry & events",
      "Automation & control systems",
      "Event-driven API architectures",
    ],
  },
];

const steps = [
  {
    num: "01",
    icon: "https://cdn-icons-png.flaticon.com/512/2910/2910791.png",
    title: "Discovery & Requirements",
    desc: "Understanding business objectives, API use cases, data flows, and integration requirements.",
  },
  {
    num: "02",
    icon: "https://cdn-icons-png.flaticon.com/512/4248/4248443.png",
    title: "API Design & Architecture",
    desc: "Designing REST / GraphQL APIs, defining endpoints, schemas, authentication, and versioning.",
  },
  {
    num: "03",
    icon: "https://cdn-icons-png.flaticon.com/512/6062/6062646.png",
    title: "API Development",
    desc: "Building secure, scalable APIs using clean architecture, best practices, and modern frameworks.",
  },
  {
    num: "04",
    icon: "https://cdn-icons-png.flaticon.com/512/4149/4149647.png",
    title: "Testing & Security",
    desc: "Functional testing, load testing, validation, and security checks to ensure reliability.",
  },
  {
    num: "05",
    icon: "https://cdn-icons-png.flaticon.com/512/900/900961.png",
    title: "Deployment & Monitoring",
    desc: "Cloud deployment, API gateway setup, monitoring, logging, and continuous optimization.",
  },
];

const techStack = {
  "Backend Engineering": {
    desc: "Mission-critical backend systems with scalability, clean architecture & strict API security.",
    color: "from-blue-500 to-indigo-600",
    items: [
      {
        icon: "https://nestjs.com/logo-small-gradient.0ed287ce.svg",
        name: "NestJS",
        desc: "Enterprise modular backend.",
      },
      {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        name: "Node.js",
        desc: "High-performance backend runtime.",
      },
      {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        name: "Express.js",
        desc: "REST microservice framework.",
      },
      {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
        name: "Laravel",
        desc: "Secure backend for PHP systems.",
      },
      {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
        name: "Django",
        desc: "Clean Python backend architecture.",
      },
      {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
        name: "FastAPI",
        desc: "Lightning-fast Python APIs.",
      },
    ],
  },
  "Database Engineering": {
    desc: "Optimized and secure databases engineered to handle massive workloads.",
    color: "from-blue-500 to-blue-700",
    items: [
      {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        name: "MySQL",
        desc: "Enterprise relational database.",
      },
      {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        name: "PostgreSQL",
        desc: "Advanced SQL engine with scalability.",
      },
      {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg",
        name: "Oracle",
        desc: "Mission-critical enterprise database.",
      },
      {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        name: "MongoDB",
        desc: "Flexible NoSQL storage.",
      },
      {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
        name: "MS SQL Server",
        desc: "Trusted Microsoft enterprise DB.",
      },
      {
        icon: "https://icon.icepanel.io/AWS/svg/Database/DynamoDB.svg",
        name: "DynamoDB",
        desc: "Serverless NoSQL with autoscaling.",
      },
    ],
  },
  "Cloud & DevOps": {
    desc: "Cloud-native deployments with CI/CD, monitoring, containerization & cost-optimized scaling.",
    color: "from-blue-500 to-blue-700",
    items: [
      {
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/960px-Amazon_Web_Services_Logo.svg.png",
        name: "AWS",
        desc: "Global secure cloud infrastructure.",
      },
      {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
        name: "Google Cloud",
        desc: "AI-driven cloud platform.",
      },
      {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
        name: "Azure",
        desc: "Enterprise-ready cloud ecosystem.",
      },
      {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        name: "Docker",
        desc: "Lightweight containerization.",
      },
      {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
        name: "Kubernetes",
        desc: "Cloud-native container orchestration.",
      },
      {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg",
        name: "Terraform",
        desc: "Cloud infrastructure as code.",
      },
    ],
  },
};

export default function ApiDevelopment() {
  const [activeTab, setActiveTab] = useState("Backend Engineering");
  const [hoveredService, setHoveredService] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouse = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <main
      className="text-slate-900 bg-white overflow-x-hidden"
      style={{ fontFamily: "sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Sora:wght@600;700;800&display=swap');

        * { box-sizing: border-box; }

        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-16px)} }
        @keyframes pulse-ring { 0%{transform:scale(1);opacity:0.4} 100%{transform:scale(1.6);opacity:0} }
        @keyframes shimmer { 0%{background-position:-200% 0} 100%{background-position:200% 0} }
        @keyframes spin-slow { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes gradient-shift { 0%,100%{background-position:0% 50%} 50%{background-position:100% 50%} }
        @keyframes code-scroll { 0%{transform:translateY(0)} 100%{transform:translateY(-50%)} }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes slide-in-right { from{transform:translateX(20px);opacity:0} to{transform:translateX(0);opacity:1} }
        @keyframes draw-line { from{stroke-dashoffset:1000} to{stroke-dashoffset:0} }

        .font-display { font-family: 'Sora', sans-serif; }
        .float-anim { animation: float 5s ease-in-out infinite; }
        .float-anim-delay { animation: float 5s ease-in-out 1.5s infinite; }
        .gradient-text {
          background: linear-gradient(135deg, #1d4ed8, #3b82f6, #1d4ed8);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradient-shift 4s ease infinite;
        }
        .shimmer-btn {
          background: linear-gradient(90deg, #d97706, #f59e0b, #fbbf24, #f59e0b, #d97706);
          background-size: 200% auto;
          animation: shimmer 3s linear infinite;
        }
        .card-hover {
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }
        .card-hover:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 60px rgba(37, 99, 235, 0.12);
          border-color: rgba(37,99,235,0.4);
        }
        .tab-active {
          background: linear-gradient(135deg, #2563eb, #4f46e5);
          color: white;
          box-shadow: 0 4px 20px rgba(6, 203, 217, 0.35);
        }
        .code-line { font-family: 'Fira Code', monospace; font-size: 12px; }
        .progress-bar {
          height: 3px;
          background: linear-gradient(90deg, #1d4ed8, #3b82f6);
          border-radius: 2px;
          transform-origin: left;
          animation: shimmer 2s linear infinite;
          background-size: 200% auto;
        }
        .step-connector::after {
          content: '';
          position: absolute;
          top: 28px;
          left: calc(100% + 10px);
          width: calc(100% - 20px);
          height: 2px;
          background: linear-gradient(90deg, #1d4ed8, #3b82f6);
          opacity: 0.3;
        }
        .glow-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: #2563eb;
          box-shadow: 0 0 0 0 rgba(37,99,235,0.4);
          animation: pulse-ring 2s ease-out infinite;
        }
        .hero-grid-bg {
          background-image: 
            linear-gradient(rgba(148, 163, 184, 0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(148, 163, 184, 0.15) 1px, transparent 1px);
          background-size: 40px 40px;
        }
        .noise-bg::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
          pointer-events: none;
        }
        .industry-card {
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .industry-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 24px 48px rgba(37, 99, 235, 0.1);
        }
        .tech-item {
          transition: all 0.25s ease;
        }
        .tech-item:hover {
          background: rgba(37, 99, 235, 0.05);
          border-radius: 12px;
          transform: translateX(6px);
        }
        .engagement-card {
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .engagement-card:hover {
          transform: translateY(-10px);
        }
        .cta-card {
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .cta-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(37,99,235,0.05), transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .cta-card:hover::before { opacity: 1; }
        .cta-card:hover { transform: translateY(-4px); box-shadow: 0 16px 40px rgba(37,99,235,0.12); }
        
        .hero-badge {
          animation: slide-in-right 0.6s ease 0.3s both;
        }
        .api-visual-line {
          stroke-dasharray: 1000;
          animation: draw-line 2s ease forwards;
        }
      `}</style>

      {/* Hero */}
      <section className="relative w-full min-h-screen flex items-center overflow-hidden hero-grid-bg">
        {/* Animated blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute -top-40 -left-40 w-96 h-96 rounded-full opacity-20 float-anim"
            style={{
              background: "radial-gradient(circle, #3b82f6, #1d4ed8)",
              filter: "blur(60px)",
            }}
          />
          <div
            className="absolute top-1/2 -right-40 w-80 h-80 rounded-full opacity-15 float-anim-delay"
            style={{
              background: "radial-gradient(circle, #3b82f6, #1d4ed8)",
              filter: "blur(80px)",
            }}
          />
          <div
            className="absolute bottom-20 left-1/3 w-64 h-64 rounded-full opacity-10"
            style={{
              background: "radial-gradient(circle, #60a5fa, #3b82f6)",
              filter: "blur(60px)",
              animation: "float 7s ease-in-out 2s infinite",
            }}
          />
        </div>

        {/* Floating API nodes visual */}
        <div className="absolute right-0 top-0 w-1/2 h-full pointer-events-none hidden lg:block opacity-40">
          <svg viewBox="0 0 500 600" className="w-full h-full" fill="none">
            <circle
              cx="250"
              cy="300"
              r="80"
              stroke="rgba(37,99,235,0.3)"
              strokeWidth="1"
              strokeDasharray="8 4"
              style={{ animation: "spin-slow 20s linear infinite" }}
            />
            <circle
              cx="250"
              cy="300"
              r="140"
              stroke="rgba(37,99,235,0.2)"
              strokeWidth="1"
              strokeDasharray="12 6"
              style={{ animation: "spin-slow 30s linear infinite reverse" }}
            />
            <circle
              cx="250"
              cy="300"
              r="200"
              stroke="rgba(37,99,235,0.15)"
              strokeWidth="1"
              strokeDasharray="16 8"
              style={{ animation: "spin-slow 45s linear infinite" }}
            />
            {[0, 60, 120, 180, 240, 300].map((angle, i) => {
              const rad = (angle * Math.PI) / 180;
              const x = 250 + 140 * Math.cos(rad);
              const y = 300 + 140 * Math.sin(rad);
              return (
                <g key={i}>
                  <circle cx={x} cy={y} r="8" fill="rgba(99,102,241,0.6)" />
                  <circle
                    cx={x}
                    cy={y}
                    r="14"
                    stroke="rgba(37,99,235,0.3)"
                    strokeWidth="1"
                    fill="none"
                  />
                </g>
              );
            })}
            {[30, 90, 150, 210, 270, 330].map((angle, i) => {
              const rad = (angle * Math.PI) / 180;
              const x = 250 + 80 * Math.cos(rad);
              const y = 300 + 80 * Math.sin(rad);
              return (
                <circle
                  key={i}
                  cx={x}
                  cy={y}
                  r="5"
                  fill="rgba(59,130,246,0.5)"
                />
              );
            })}
          </svg>
        </div>

        <div className="relative z-10  px-[5%] py-24">
          <div className="flex flex-col md:flex-row items-center  gap-66">
            <div className="flex-1 mr-[150px]">
              <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 border border-blue-200 bg-blue-50 text-blue-700 text-sm font-medium">
                <span className="glow-dot"></span>
                Trusted by 200+ Businesses Worldwide
              </div>

              <h1
                className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6"
                style={{ animation: "slide-in-right 0.8s ease 0.1s both" }}
              >
                API Development
                <br />
                <span className="gradient-text">&amp; Integration</span>
                <br />
                <span style={{ color: "#0f172a" }}>Services</span>
              </h1>

              <p
                className="text-lg text-slate-600 leading-relaxed mb-10 max-w-xl"
                style={{ animation: "slide-in-right 0.8s ease 0.3s both" }}
              >
                We build secure, scalable, and high-performance APIs using REST,
                GraphQL, and real-time technologies. From backend engineering to
                third-party integrations—we help businesses automate workflows
                and power next-generation applications.
              </p>

              <div
                className="flex flex-wrap gap-4"
                style={{ animation: "slide-in-right 0.8s ease 0.5s both" }}
              >
                <button className="bg-gradient-to-br from-amber-500 btn-amber to-amber-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:-translate-y-1 transition">
                  Get a Free Quote
                </button>
                <button className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white text-slate-800 font-semibold text-base border-2 border-slate-200 hover:border-indigo-400 hover:-translate-y-1 hover:shadow-lg transition-all">
                  View Our Work
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path>
                    <rect x="2" y="6" width="14" height="12" rx="2"></rect>
                  </svg>
                </button>
              </div>

              {/* Stats row */}
              <div
                className="flex gap-10 mt-14 pt-10 border-t border-slate-100"
                style={{ animation: "slide-in-right 0.8s ease 0.7s both" }}
              >
                {[
                  { val: 200, suffix: "+", label: "APIs Delivered" },
                  { val: 99, suffix: "%", label: "Uptime SLA" },
                  { val: 50, suffix: "+", label: "Tech Partners" },
                ].map((s, i) => (
                  <div key={i}>
                    <div className="font-display text-3xl font-bold text-blue-600">
                      <CountUp end={s.val} suffix={s.suffix} />
                    </div>
                    <div className="text-sm text-slate-500 mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Animated Code Visual */}
            <div className=" ml-[80px] flex-2 flex  hidden md:flex">
              <div className="relative w-96">
                <div className="float-anim">
                  <div
                    className="rounded-2xl overflow-hidden shadow-2xl border border-slate-200"
                    style={{ background: "#0d1117" }}
                  >
                    <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-700">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <span className="ml-2 text-slate-400 text-xs font-mono">
                        api.config.ts
                      </span>
                    </div>
                    <div
                      className="p-5 overflow-hidden"
                      style={{ height: "300px" }}
                    >
                      <div
                        style={{ animation: "code-scroll 12s linear infinite" }}
                      >
                        {[
                          {
                            indent: 0,
                            color: "#7ee8a2",
                            text: "// REST API Configuration",
                          },
                          {
                            indent: 0,
                            color: "#79c0ff",
                            text: "import { NestFactory } from '@nestjs/core';",
                          },
                          {
                            indent: 0,
                            color: "#79c0ff",
                            text: "import { SwaggerModule } from '@nestjs/swagger';",
                          },
                          { indent: 0, color: "#ffa657", text: "" },
                          {
                            indent: 0,
                            color: "#ffa657",
                            text: "async function bootstrap() {",
                          },
                          {
                            indent: 1,
                            color: "#79c0ff",
                            text: "const app = await NestFactory.create(AppModule);",
                          },
                          {
                            indent: 1,
                            color: "#7ee8a2",
                            text: "// Enable CORS",
                          },
                          {
                            indent: 1,
                            color: "#ffa657",
                            text: "app.enableCors({",
                          },
                          {
                            indent: 2,
                            color: "#a5d6ff",
                            text: "origin: process.env.ALLOWED_ORIGINS,",
                          },
                          {
                            indent: 2,
                            color: "#a5d6ff",
                            text: "methods: ['GET', 'POST', 'PUT', 'DELETE'],",
                          },
                          {
                            indent: 2,
                            color: "#a5d6ff",
                            text: "credentials: true,",
                          },
                          { indent: 1, color: "#ffa657", text: "});" },
                          { indent: 0, color: "#ffa657", text: "" },
                          {
                            indent: 1,
                            color: "#7ee8a2",
                            text: "// Rate Limiting",
                          },
                          {
                            indent: 1,
                            color: "#79c0ff",
                            text: "app.use(rateLimit({ windowMs: 15 * 60 * 1000,",
                          },
                          {
                            indent: 2,
                            color: "#a5d6ff",
                            text: "max: 100 }));",
                          },
                          { indent: 0, color: "#ffa657", text: "" },
                          {
                            indent: 1,
                            color: "#7ee8a2",
                            text: "// Swagger Docs",
                          },
                          {
                            indent: 1,
                            color: "#79c0ff",
                            text: "const config = new DocumentBuilder()",
                          },
                          {
                            indent: 2,
                            color: "#a5d6ff",
                            text: ".setTitle('Albos API')",
                          },
                          {
                            indent: 2,
                            color: "#a5d6ff",
                            text: ".setVersion('2.0')",
                          },
                          {
                            indent: 2,
                            color: "#a5d6ff",
                            text: ".addBearerAuth()",
                          },
                          { indent: 2, color: "#a5d6ff", text: ".build();" },
                          {
                            indent: 1,
                            color: "#ffa657",
                            text: "await app.listen(3000);",
                          },
                          { indent: 0, color: "#ffa657", text: "}" },
                          { indent: 0, color: "#ffa657", text: "bootstrap();" },
                        ]
                          .concat([
                            {
                              indent: 0,
                              color: "#7ee8a2",
                              text: "// REST API Configuration",
                            },
                            {
                              indent: 0,
                              color: "#79c0ff",
                              text: "import { NestFactory } from '@nestjs/core';",
                            },
                            {
                              indent: 0,
                              color: "#79c0ff",
                              text: "import { SwaggerModule } from '@nestjs/swagger';",
                            },
                            {
                              indent: 0,
                              color: "#ffa657",
                              text: "async function bootstrap() {",
                            },
                          ])
                          .map((line, i) => (
                            <div
                              key={i}
                              className="code-line mb-1.5"
                              style={{
                                paddingLeft: `${line.indent * 16}px`,
                                color: line.color,
                                opacity: 0.9,
                              }}
                            >
                              {line.text || "\u00a0"}
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating badges */}
                <div
                  className="absolute -right-8 top-8 bg-white rounded-xl shadow-xl px-4 py-3 border border-slate-100 float-anim-delay"
                  style={{ animationDelay: "0.5s" }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span className="text-xs font-semibold text-slate-700">
                      99.9% Uptime
                    </span>
                  </div>
                </div>
                <div
                  className="absolute -left-8 bottom-16 bg-white rounded-xl shadow-xl px-4 py-3 border border-slate-100"
                  style={{ animation: "float 6s ease-in-out 1s infinite" }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    <span className="text-xs font-semibold text-slate-700">
                      SOC 2 Compliant
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is API Development */}
      <section className="relative bg-white  py-12 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute right-0 top-0 w-96 h-96 rounded-full opacity-5"
            style={{
              background: "radial-gradient(circle, #3b82f6, transparent)",
              filter: "blur(60px)",
            }}
          />
        </div>
        <div className="  mx-auto px-[5%] grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <AnimatedSection direction="left">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                alt="What is API Development"
                loading="lazy"
                width="600"
                height="500"
                className="w-full h-auto object-cover"
                src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1469&auto=format&fit=crop"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/30 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-xl">
                    ∞
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">
                      Infinite Scalability
                    </div>
                    <div className="text-sm text-slate-500">
                      Built to grow with your business
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-6 tracking-wide">
              WHAT WE DO
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
              What is
              <br />
              <span className="gradient-text">API Development?</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              API (Application Programming Interface) Development is the process
              of creating secure and scalable communication layers that allow
              different software systems to exchange data seamlessly.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              APIs act as a bridge between applications—connecting mobile apps,
              web platforms, cloud services, databases, and third-party tools.
              They help businesses integrate systems, automate operations, and
              scale faster.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {[
                "Enable communication between apps",
                "Power mobile, web & SaaS platforms",
                "Integrate payments, CRMs & ERPs",
                "Support modular architectures",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 text-sm text-slate-700 font-medium"
                >
                  <span className="text-blue-600 text-lg">✓</span> {item}
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services */}
      <section
        id="api-services"
        className="relative  py-12 overflow-hidden"
        style={{ background: "linear-gradient(180deg, #f8faff 0%, #fff 100%)" }}
      >
        <div className=" mx-auto px-[5%]">
          <AnimatedSection className="    mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-sm font-semibold mb-4 tracking-wide">
              OUR SERVICES
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              API Development{" "}
              <span className="gradient-text">Services We Offer</span>
            </h2>
            <p className="text-lg text-slate-600">
              We design and develop APIs that act as the backbone of modern
              applications—focusing on performance, security, and scalability.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div
                  className="card-hover border-2 border-slate-100 rounded-2xl p-8 bg-white cursor-pointer group relative overflow-hidden"
                  onMouseEnter={() => setHoveredService(i)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(37,99,235,0.03), rgba(99,102,241,0.05))",
                    }}
                  />
                  <div className="flex items-start gap-5 relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0 group-hover:bg-blue-100 transition-colors">
                      <Image
                        src={s.icon}
                        alt={s.title}
                        width="36"
                        height="36"
                        className="object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold text-slate-900">
                          {s.title}
                        </h3>
                        <span className="text-xs font-medium px-3 py-1 rounded-full bg-blue-50 text-blue-600">
                          {s.tag}
                        </span>
                      </div>
                      <p className="text-slate-600 leading-relaxed">{s.desc}</p>
                      <div
                        className="progress-bar mt-4 w-0 group-hover:w-full transition-all duration-700"
                        style={{ height: "2px" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="  mt-12">
            <a
              href="/contact"
              className="shimmer-btn inline-flex items-center gap-2 px-10 py-4 rounded-2xl text-white font-semibold text-lg shadow-xl hover:shadow-blue-500/30 hover:-translate-y-1 transition-all"
            >
              Discuss Your API Requirements
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* Industries */}
      <section className="relative  py-12 bg-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-5"
            style={{
              background: "radial-gradient(circle, #6366f1, transparent)",
            }}
          />
        </div>
        <div className="  mx-auto px-[5%]">
          <AnimatedSection className=" mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-purple-50 text-purple-600 text-sm font-semibold mb-4 tracking-wide">
              INDUSTRIES
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Industry-Specific{" "}
              <span className="gradient-text">API Solutions</span>
            </h2>
            <p className="text-lg text-slate-600">
              We build scalable and secure APIs tailored to industry-specific
              challenges.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind, i) => (
              <AnimatedSection key={i} delay={i * 80}>
                <div className="industry-card rounded-2xl border border-slate-100 bg-white p-7 shadow-sm cursor-default h-full">
                  <div className="flex items-center gap-4 mb-5">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
                      style={{
                        background: "linear-gradient(135deg, #eff6ff, #e0e7ff)",
                      }}
                    >
                      <Image
                        src={ind.icon}
                        alt={ind.title}
                        width="32"
                        height="32"
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">
                        {ind.title}
                      </h3>
                      <p className="text-xs text-blue-600 font-medium mt-0.5">
                        {ind.outcome}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2.5">
                    {ind.items.map((item, j) => (
                      <div
                        key={j}
                        className="flex items-center gap-2.5 text-sm text-slate-600"
                      >
                        <span className="w-5 h-5 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 text-xs font-bold shrink-0">
                          ✓
                        </span>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section
        className="relative  py-12 overflow-hidden"
        style={{
          background: "linear-gradient(180deg, #f0f5ff 0%, #fafbff 100%)",
        }}
      >
        <div className="  mx-auto px-[5%]">
          <AnimatedSection className="  mx-auto  mb-20">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-4 tracking-wide">
              HOW WE WORK
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Our API Development <span className="gradient-text">Process</span>
            </h2>
            <p className="text-lg text-slate-600">
              A structured, security-first process to design, build, test, and
              deploy scalable APIs.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((step, i) => (
              <AnimatedSection key={i} delay={i * 120} direction="up">
                <div className="relative rounded-2xl bg-white border border-slate-100 p-6 shadow-sm hover:shadow-lg hover:border-indigo-200 transition-all hover:-translate-y-2 group h-full">
                  <span
                    className="absolute -top-3.5 left-5 px-3 py-1 text-xs font-bold rounded-full text-white shadow-md"
                    style={{
                      background: "linear-gradient(135deg, #1d4ed8, #3b82f6)",
                    }}
                  >
                    Step {step.num}
                  </span>
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 group-hover:bg-blue-100 transition-colors flex items-center justify-center mb-5 mt-2">
                    <Image
                      src={step.icon}
                      alt={step.title}
                      width={32}
                      height={32}
                      className="object-contain"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {step.desc}
                  </p>
                  {i < steps.length - 1 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center shadow-md">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          viewBox="0 0 24 24"
                        >
                          <path d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Ecosystem */}
      <section className=" py-12 bg-white">
        <div className="  mx-auto px-[5%]">
          <AnimatedSection className="  mx-auto   mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-green-50 text-green-600 text-sm font-semibold mb-4 tracking-wide">
              TECH STACK
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Technology <span className="gradient-text">Ecosystem</span>
            </h2>
            <p className="text-lg text-slate-600">
              A layered stack ensuring secure, scalable, high-performance API
              architectures.
            </p>
          </AnimatedSection>

          {/* Tabs */}
          <div className="flex justify-center gap-3 mb-10 flex-wrap">
            {Object.keys(techStack).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all ${activeTab === tab ? "tab-active" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tech Content */}
          <div className="mx-auto w-full">
            {Object.entries(techStack).map(([tab, data]) => (
              <div
                key={tab}
                style={{
                  display: activeTab === tab ? "block" : "none",
                  animation: "slide-in-right 0.4s ease",
                }}
              >
                <div className="rounded-3xl border border-slate-100 bg-white shadow-lg overflow-hidden">
                  <div
                    className="p-8 border-b border-slate-100"
                    style={{
                      background: `linear-gradient(135deg, ${data.color.includes("blue") ? "#eff6ff" : data.color.includes("emerald") ? "#ecfdf5" : "#fff7ed"}, white)`,
                    }}
                  >
                    <div
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-white text-sm font-semibold bg-gradient-to-r ${data.color} mb-3`}
                    >
                      {tab}
                    </div>
                    <p className="text-slate-600">{data.desc}</p>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-1 p-4">
                    {data.items.map((item, i) => (
                      <div
                        key={i}
                        className="tech-item flex items-center gap-3 p-4"
                      >
                        <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center shrink-0">
                          <Image
                            src={item.icon}
                            alt={item.name}
                            width="28"
                            height="28"
                            className="object-contain"
                          />
                        </div>
                        <div>
                          <p className="font-semibold text-sm text-slate-900">
                            {item.name}
                          </p>
                          <p className="text-xs text-slate-500">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section
        className="relative  py-12 overflow-hidden"
        style={{
          background: "linear-gradient(180deg, #f8faff 0%, white 100%)",
        }}
      >
        <div className="  mx-auto px-[5%]">
          <AnimatedSection className="  mx-auto   mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-sm font-semibold mb-4 tracking-wide">
              ENGAGEMENT
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Flexible <span className="gradient-text">Engagement Models</span>
            </h2>
            <p className="text-lg text-slate-600">
              Choose an engagement model that aligns with your project scope,
              budget, and long-term business goals.
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-3 gap-8 mx-auto w-full">
            {[
              {
                badge: "Best for MVPs",
                badgeColor: "bg-blue-100 text-blue-700",
                title: "Fixed Price",
                icon: "https://cdn-icons-png.flaticon.com/512/3135/3135673.png",
                desc: "Ideal for projects with clearly defined requirements and timelines. Fixed scope, cost, and delivery schedule—ensuring predictable budgeting.",
                items: [
                  "Clearly defined scope & milestones",
                  "Fixed budget & delivery timeline",
                  "Minimal client management effort",
                  "Ideal for MVPs & small projects",
                ],
                featured: false,
              },
              {
                badge: "★ Most Popular",
                badgeColor: "bg-blue-600 text-white",
                title: "Dedicated Team",
                icon: "https://cdn-icons-png.flaticon.com/512/921/921347.png",
                desc: "A dedicated team works exclusively on your product—acting as an extension of your in-house team. Perfect for scaling products.",
                items: [
                  "Full control over team & priorities",
                  "Monthly billing with flexible scaling",
                  "Best for SaaS & enterprise platforms",
                  "Continuous delivery & long-term support",
                ],
                featured: true,
              },
              {
                badge: "Flexible Scope",
                badgeColor: "bg-purple-100 text-purple-700",
                title: "Time & Material",
                icon: "https://cdn-icons-png.flaticon.com/512/2920/2920244.png",
                desc: "Designed for evolving requirements. Pay only for actual development time and effort with complete transparency.",
                items: [
                  "Flexible scope & changing priorities",
                  "Pay-as-you-go (hourly or monthly)",
                  "Agile & iterative delivery approach",
                  "Ideal for R&D & innovation-driven projects",
                ],
                featured: false,
              },
            ].map((m, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div
                  className={`engagement-card rounded-3xl p-8 h-full relative ${m.featured ? "bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-2xl shadow-blue-500/30" : "bg-white border-2 border-slate-100 shadow-sm"}`}
                >
                  {m.featured && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full bg-white text-blue-600 font-bold text-xs shadow-lg">
                      ★ MOST POPULAR
                    </div>
                  )}
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full ${m.featured ? "bg-white/20 text-white" : m.badgeColor}`}
                    >
                      {m.badge}
                    </span>
                    <Image
                      src={m.icon}
                      alt={m.title}
                      width={40}
                      height={40}
                      className="object-contain shrink-0"
                    />
                  </div>
                  <h3
                    className={`font-display text-2xl font-bold mb-3 ${m.featured ? "text-white" : "text-slate-900"}`}
                  >
                    {m.title} Model
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
                          className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${m.featured ? "bg-white/20 text-white" : "bg-blue-50 text-blue-600"}`}
                        >
                          ✓
                        </span>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="relative  py-12 overflow-hidden bg-white">
        <div className="  mx-auto px-[5%]">
          <AnimatedSection className="  mx-auto   mb-20">
            <span className="inline-block px-4 py-1.5 rounded-full bg-slate-100 text-slate-600 text-sm font-semibold mb-4 tracking-wide">
              TRUST & SECURITY
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Compliance, Security{" "}
              <span className="gradient-text">&amp; Legal Assurance</span>
            </h2>
            <p className="text-lg text-slate-600">
              We operate with strict security, compliance, and legal frameworks
              for complete confidentiality and data protection.
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <div className="space-y-4">
              {[
                {
                  icon: "https://cdn-icons-png.flaticon.com/512/3064/3064197.png",
                  title: "NDA Protected Engagement",
                  desc: "All discussions, documentation, and deliverables are secured under a legally binding NDA.",
                },
                {
                  icon: "https://cdn-icons-png.flaticon.com/512/942/942781.png",
                  title: "100% IP Ownership",
                  desc: "You retain complete ownership of source code, data, and all project assets.",
                },
                {
                  icon: "https://cdn-icons-png.flaticon.com/512/2910/2910791.png",
                  title: "ISO-Aligned Security",
                  desc: "Development workflows aligned with ISO 27001 security principles and controls.",
                },
                {
                  icon: "https://cdn-icons-png.flaticon.com/512/681/681662.png",
                  title: "GDPR & Global Privacy",
                  desc: "Strict data privacy measures aligned with GDPR and international regulations.",
                },
              ].map((item, i) => (
                <AnimatedSection key={i} delay={i * 80} direction="left">
                  <div className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-white p-5 hover:shadow-lg hover:border-blue-200 transition-all group">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 group-hover:bg-blue-100 transition-colors flex items-center justify-center shrink-0">
                      <Image
                        src={item.icon}
                        alt={item.title}
                        width={28}
                        height={28}
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 text-sm">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection
              className="lg:col-span-2"
              direction="right"
              delay={200}
            >
              <div className="rounded-3xl border-2 border-slate-100 bg-white p-8 md:p-10 shadow-sm hover:shadow-xl transition-shadow">
                <h3 className="font-display text-2xl md:text-3xl font-bold mb-8 text-slate-900">
                  Built for Enterprise Trust &amp; Long-Term Partnerships
                </h3>
                <div className="space-y-5 text-slate-600 leading-relaxed">
                  <p>
                    At{" "}
                    <strong className="text-slate-900">
                      Albos Technologies
                    </strong>
                    , security and trust are embedded into every phase of our
                    software development lifecycle. From initial discussions to
                    deployment and long-term support, your business data and
                    intellectual property remain fully protected.
                  </p>
                  <p>
                    We follow industry-recognized best practices aligned with{" "}
                    <strong className="text-slate-900">ISO 27001</strong>,{" "}
                    <strong className="text-slate-900">GDPR</strong>, and
                    enterprise security standards—including access controls,
                    encrypted storage, secure APIs, audit trails, and role-based
                    permissions.
                  </p>
                  <p>
                    All legal, compliance, and security documentation is shared
                    transparently under NDA, giving startups, enterprises, and
                    regulated industries complete peace of mind.
                  </p>
                </div>

                <div className="mt-10 flex items-center gap-6 flex-wrap">
                  <a
                    href="/contact"
                    className="shimmer-btn inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-white font-semibold shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1 transition-all"
                  >
                    Request NDA &amp; Compliance Details →
                  </a>
                  <p className="text-xs text-slate-400">
                    NDA-protected · No obligation · Enterprise-grade
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="relative w-full py-24 overflow-hidden noise-bg"
        style={{
          background:
            "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)",
        }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-20 float-anim"
            style={{
              background: "radial-gradient(circle, #3b82f6, transparent)",
              filter: "blur(80px)",
            }}
          />
          <div
            className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full opacity-15 float-anim-delay"
            style={{
              background: "radial-gradient(circle, #8b5cf6, transparent)",
              filter: "blur(60px)",
            }}
          />
          {/* Animated grid lines */}
          <svg
            className="absolute inset-0 w-full h-full opacity-10"
            viewBox="0 0 800 400"
            preserveAspectRatio="none"
          >
            {[0, 80, 160, 240, 320, 400, 480, 560, 640, 720, 800].map((x) => (
              <line
                key={x}
                x1={x}
                y1="0"
                x2={x}
                y2="400"
                stroke="rgba(148,163,184,0.5)"
                strokeWidth="0.5"
              />
            ))}
            {[0, 50, 100, 150, 200, 250, 300, 350, 400].map((y) => (
              <line
                key={y}
                x1="0"
                y1={y}
                x2="800"
                y2={y}
                stroke="rgba(148,163,184,0.5)"
                strokeWidth="0.5"
              />
            ))}
          </svg>
        </div>

        <div className="  mx-auto px-[5%] relative z-10">
          <AnimatedSection className="text-center  mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-blue-300 text-sm font-semibold mb-6 tracking-wide">
              GET STARTED
            </span>
            <h2 className="font-display text-center text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Ready to Grow
              <br />
              <span className="gradient-text text-center">Your Business?</span>
            </h2>
            <p className="text-slate-300 text-center text-lg leading-relaxed">
              Speak with our experts today. We help brands scale with powerful
              development, design, automation, and cloud solutions.
            </p>
          </AnimatedSection>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <button className="shimmer-btn px-10 py-4 rounded-2xl font-bold text-lg text-white shadow-xl hover:shadow-blue-500/40 hover:-translate-y-1 transition-all">
              Get a Free Quote
            </button>
            <a
              href="tel:+919766650411"
              className="px-10 py-4 rounded-2xl font-bold text-lg bg-white/10 text-white border border-white/20 hover:bg-white/20 hover:-translate-y-1 transition-all backdrop-blur-sm"
            >
              📞 Call Sales
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 ">
            {[
              { icon: "📞", label: "Phone Number", value: "+91 97666 50411" },
              {
                icon: "✉️",
                label: "Email Address",
                value: "info@albostechnologies.com",
              },
              {
                icon: "📍",
                label: "Office Location",
                value: "Kunal Plaza, Pune MH 411019",
              },
              {
                icon: "🕐",
                label: "Office Hours",
                value: "Mon – Sat, 10:00 AM – 7:00 PM",
              },
            ].map((card, i) => (
              <AnimatedSection key={i} delay={i * 80}>
                <div className="cta-card rounded-2xl h-[200px] bg-white/5 border border-white/10 p-7 backdrop-blur-sm hover:bg-white/10  ">
                  <div className="text-3xl mb-4 text-center">{card.icon}</div>
                  <h3 className="font-semibold text-white text-center mb-2">
                    {card.label}
                  </h3>
                  <p className="text-slate-300 text-center text-sm leading-relaxed">
                    {card.value}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
