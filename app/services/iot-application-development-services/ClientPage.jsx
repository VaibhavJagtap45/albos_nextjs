"use client";
import Image from "next/image";

import { useState, useEffect, useRef } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  CircleCheckBig,
  ShieldCheck,
  Cpu,
  Network,
  FileLock,
  Radio,
  Cloud,
  CloudCog,
  LineChart,
  Layers,
  MemoryStick,
  Settings,
  BatteryCharging,
  Factory,
  Activity,
  Signal,
  Wifi,
  Bluetooth,
  Database,
  RefreshCcw,
  Users,
  Globe,
  Link,
  MessageSquare,
  Boxes,
  Shield,
  PhoneCall,
  Video,
} from "lucide-react";

const FontLink = () => (
  <style>{`
  @import url('https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&display=swap');

        .serif      { font-family:'Instrument Serif', Georgia, serif; }
        .sans       { font-family:'Instrument Sans', sans-serif; }
        
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    :root {
      --blue: #2563eb; --blue-light: #dbeafe; --blue-mid: #93c5fd;
      --ink: #0f172a; --ink-2: #334155; --ink-3: #64748b;
      --surface: #ffffff; --surface-2: #f8fafc; --surface-3: #f1f5f9;
      --border: #e2e8f0; --green: #16a34a; --purple: #7c3aed; --orange: #ea580c;
    }
    body { font-family: 'DM Sans', sans-serif; background: #fff; color: var(--ink); }
    h1,h2,h3,h4,h5 { font-family:  sans-serif; }


  

    .d1{transition-delay:.05s}.d2{transition-delay:.15s}.d3{transition-delay:.25s}.d4{transition-delay:.35s}.d5{transition-delay:.45s}.d6{transition-delay:.55s}

    @keyframes float { 0%,100%{transform:translateY(0) rotate(0deg)} 50%{transform:translateY(-18px) rotate(1deg)} }
    .float-img { animation: float 6s ease-in-out infinite; }

    @keyframes blobPulse { 0%,100%{transform:translate(-50%,-50%) scale(1)} 50%{transform:translate(-50%,-50%) scale(1.12)} }
    .blob { animation: blobPulse 8s ease-in-out infinite; }

    .grid-bg {
      background-image: linear-gradient(rgba(37,99,235,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.05) 1px, transparent 1px);
      background-size: 44px 44px;
    }

    @keyframes shimmer { 0%{transform:translateX(-100%) skewX(-15deg)} 100%{transform:translateX(200%) skewX(-15deg)} }
    .shimmer-card { position: relative; overflow: hidden; }
    .shimmer-card::after { content:''; position:absolute; inset:0; background:linear-gradient(90deg,transparent 0%,rgba(255,255,255,0.6) 50%,transparent 100%); transform:translateX(-100%) skewX(-15deg); pointer-events:none; }
    .shimmer-card:hover::after { animation: shimmer 0.7s ease; }

    @keyframes heroIn { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:none} }
    .hero-h { animation: heroIn 0.9s cubic-bezier(.22,1,.36,1) 0.1s both; }
    .hero-p { animation: heroIn 0.9s cubic-bezier(.22,1,.36,1) 0.3s both; }
    .hero-btns { animation: heroIn 0.9s cubic-bezier(.22,1,.36,1) 0.5s both; }
    .hero-img { animation: heroIn 0.9s cubic-bezier(.22,1,.36,1) 0.2s both; }
    .hero-badge { animation: heroIn 0.9s cubic-bezier(.22,1,.36,1) 0s both; }

    @keyframes badgePop { 0%{transform:scale(0.8);opacity:0} 100%{transform:scale(1);opacity:1} }
    .badge-pop { animation: badgePop 0.4s cubic-bezier(.34,1.56,.64,1) 0.05s both; }

    .grad-border { background: linear-gradient(white,white) padding-box, linear-gradient(135deg,#2563eb,#7c3aed) border-box; border: 2px solid transparent; }

    .lift { transition: transform 0.3s cubic-bezier(.22,1,.36,1), box-shadow 0.3s ease; }
    .lift:hover { transform: translateY(-6px); box-shadow: 0 20px 48px rgba(37,99,235,0.12); }

    .industry-card img { transition: transform 0.7s cubic-bezier(.22,1,.36,1); }
    .industry-card:hover img { transform: scale(1.08); }

    ::-webkit-scrollbar { width: 6px; }
    ::-webkit-scrollbar-track { background: #f1f5f9; }
    ::-webkit-scrollbar-thumb { background: #93c5fd; border-radius: 3px; }
  `}</style>
);

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(
      ".reveal, .reveal-left, .reveal-right",
    );
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.1 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Counter({ end, suffix = "" }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);
  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const step = Math.ceil(end / 60);
          const t = setInterval(() => {
            start += step;
            if (start >= end) {
              setVal(end);
              clearInterval(t);
            } else setVal(start);
          }, 20);
        }
      },
      { threshold: 0.5 },
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [end]);
  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}

const IoTDevelopmentPage = () => {
  useReveal();

  return (
    <div
      style={{ minHeight: "100vh", background: "#fff", overflowX: "hidden" }}
    >
      <FontLink />

      {/* ── HERO ── */}
      <section
        style={{
          position: "relative",
          padding: "96px 0 80px",
          overflow: "hidden",
        }}
        className="grid-bg"
      >
        <div
          className="blob"
          style={{
            position: "absolute",
            left: "55%",
            top: "50%",
            width: 700,
            height: 700,
            background:
              "radial-gradient(circle, rgba(37,99,235,0.13) 0%, transparent 70%)",
            borderRadius: "50%",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: -80,
            left: -80,
            width: 320,
            height: 320,
            background:
              "radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)",
            borderRadius: "50%",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            maxWidth: 1480,
            margin: "0 auto",
            padding: "0 5%",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: 48,
            }}
          >
            <div style={{ flex: "1 1 280px" }}>
              <div
                className="badge-pop"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "#dbeafe",
                  color: "#1d4ed8",
                  borderRadius: 999,
                  padding: "6px 16px",
                  fontSize: 13,
                  fontWeight: 600,
                  marginBottom: 24,
                  fontFamily: "DM Sans, sans-serif",
                }}
              >
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "#2563eb",
                    display: "inline-block",
                  }}
                />
                Embedded &amp; IoT Engineering
              </div>
              <h1
                className="hero-h"
                style={{
                  fontSize: "clamp(2rem,4vw,3.2rem)",
                  fontWeight: 800,
                  lineHeight: 1.12,
                  letterSpacing: "-0.03em",
                  color: "var(--ink)",
                  marginBottom: 24,
                }}
              >
                IoT &amp; Embedded
                <br />
                <span
                  style={{
                    background:
                      "linear-gradient(135deg,#2563eb 0%,#7c3aed 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Development Services
                </span>
              </h1>
              <p
                className="hero-p"
                style={{
                  fontSize: "1.1rem",
                  color: "var(--ink-2)",
                  lineHeight: 1.7,
                  maxWidth: 520,
                  marginBottom: 36,
                }}
              >
                We build secure, scalable IoT and embedded systems — from
                low-power firmware and custom hardware to cloud platforms,
                device management, and AI-driven automation.
              </p>
              <div
                className="hero-btns"
                style={{ display: "flex", flexWrap: "wrap", gap: 14 }}
              >
                <button className="bg-gradient-to-br from-amber-500 btn-amber to-amber-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:-translate-y-1 transition">
                  Get a Free Quote <PhoneCall size={16} />
                </button>
                <button
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "14px 28px",
                    borderRadius: 14,
                    border: "1.5px solid var(--border)",
                    background: "#fff",
                    color: "var(--ink)",
                    fontWeight: 600,
                    fontSize: "1rem",
                    cursor: "pointer",
                    transition: "all 0.25s",
                    fontFamily: "DM Sans, sans-serif",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#2563eb";
                    e.currentTarget.style.color = "#2563eb";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border)";
                    e.currentTarget.style.color = "var(--ink)";
                  }}
                >
                  View Our Work <Video size={16} />
                </button>
              </div>
            </div>
            <div
              className="hero-img"
              style={{
                flex: "1 1 300px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              {/* <div className="float-img" style={{ position: "relative" }}>
                <div
                  style={{
                    position: "absolute",
                    inset: -20,
                    background:
                      "radial-gradient(circle,rgba(37,99,235,0.12) 0%,transparent 70%)",
                    borderRadius: "50%",
                  }}
                />
                <Image
                  src="/iot-application-development-services-services.svg"
                  width={800}
                  height={600}
                  alt="IoT Illustration"
                  style={{
                    width: "min(420px,90vw)",
                    position: "relative",
                    zIndex: 1,
                    filter: "drop-shadow(0 24px 48px rgba(37,99,235,0.2))",
                  }}
                />
              </div> */}
              <div className="float-img" style={{ position: "relative" }}>
                <div
                  style={{
                    position: "absolute",
                    inset: -20,
                    background:
                      "radial-gradient(circle,rgba(37,99,235,0.12) 0%,transparent 70%)",
                    borderRadius: "50%",
                  }}
                />

                <Image
                  src="https://cdni.iconscout.com/illustration/premium/thumb/iot-application-development-illustration-download-in-svg-png-gif-file-formats--smart-home-internet-of-things-pack-network-technology-illustrations-4759503.png"
                  width={800}
                  height={600}
                  alt="IoT Illustration"
                  style={{
                    width: "min(420px,90vw)",
                    position: "relative",
                    zIndex: 1,
                    filter: "drop-shadow(0 24px 48px rgba(37,99,235,0.2))",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        {/* Stats bar */}
        <div
          className="reveal"
          style={{ maxWidth: 1480, margin: "64px auto 0", padding: "0 5%" }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))",
              gap: 1,
              background: "var(--border)",
              borderRadius: 20,
              overflow: "hidden",
              boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
            }}
          >
            {[
              { n: 200, s: "+", label: "Projects Delivered" },
              { n: 50, s: "+", label: "IoT Deployments" },
              { n: 98, s: "%", label: "Client Satisfaction" },
              { n: 8, s: "+", label: "Years Experience" },
            ].map((stat, i) => (
              <div
                key={i}
                style={{
                  background: "#fff",
                  padding: "28px 24px",
                }}
              >
                <div
                  style={{
                    fontSize: "2rem",
                    fontWeight: 800,
                    fontFamily: "Syne,sans-serif",
                    color: "#2563eb",
                    lineHeight: 1,
                  }}
                >
                  <Counter end={stat.n} suffix={stat.s} />
                </div>
                <div
                  style={{
                    fontSize: "0.85rem",
                    color: "var(--ink-3)",
                    marginTop: 6,
                    fontWeight: 500,
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUSTED PARTNER ── */}
      <section style={{ padding: "50px 0", background: "var(--surface-2)" }}>
        <div style={{ maxWidth: 1480, margin: "0 auto", padding: "0 5%" }}>
          <div
            className="reveal"
            style={{
              margin: "0 auto 72px",
            }}
          >
            <h2
              style={{
                fontSize: "48px",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                color: "var(--ink)",
                marginBottom: 20,
              }}
            >
              A Trusted Partner for{" "}
              <span
                style={{
                  color: "#2563eb",
                  borderBottom: "3px solid #93c5fd",
                  paddingBottom: 2,
                }}
              >
                Mission-Critical Systems
              </span>
            </h2>
            <p
              style={{
                fontSize: "1.05rem",
                color: "var(--ink-2)",
                lineHeight: 1.75,
              }}
            >
              We help startups, enterprises, and industrial organizations design
              and scale embedded systems and IoT solutions that are secure,
              reliable, and built for real-world production.
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
              gap: 40,
              alignItems: "center",
              marginBottom: 72,
            }}
          >
            <div className="reveal-left">
              <h3
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  color: "var(--ink)",
                  marginBottom: 16,
                }}
              >
                Engineering Confidence Beyond Prototypes
              </h3>
              <p
                style={{
                  color: "var(--ink-2)",
                  lineHeight: 1.75,
                  marginBottom: 14,
                }}
              >
                Embedded and IoT systems operate in complex, often high-risk
                environments. Our engineering approach focuses on long-term
                reliability, scalability, and security — not just
                proof-of-concepts.
              </p>
              <p
                style={{
                  color: "var(--ink-2)",
                  lineHeight: 1.75,
                  marginBottom: 28,
                }}
              >
                From firmware and hardware bring-up to cloud-scale IoT
                platforms, we ensure every solution is production-ready and
                compliant with enterprise standards.
              </p>
              {[
                "Designed for industrial and enterprise deployments",
                "Tested for scalability, fault tolerance, and uptime",
                "Aligned with security and compliance best practices",
              ].map((t, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 10,
                    marginBottom: 12,
                  }}
                >
                  <CircleCheckBig
                    size={18}
                    color="#2563eb"
                    style={{ marginTop: 2, flexShrink: 0 }}
                  />
                  <span style={{ color: "var(--ink-2)", fontSize: "0.95rem" }}>
                    {t}
                  </span>
                </div>
              ))}
            </div>
            <div className="reveal-right">
              <Image
                src="https://images.unsplash.com/photo-1505424297051-c3ad50b055ae?q=80&w=1471&auto=format&fit=crop"
                width={800}
                height={600}
                alt="Engineering team"
                style={{
                  borderRadius: 24,
                  width: "100%",
                  objectFit: "cover",
                  boxShadow: "0 24px 64px rgba(0,0,0,0.12)",
                }}
              />
            </div>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
              gap: 24,
            }}
          >
            {[
              {
                icon: <ShieldCheck size={22} color="#2563eb" />,
                title: "Security by Design",
                desc: "Security embedded across firmware, devices, communication, and cloud layers.",
                bg: "#dbeafe",
              },
              {
                icon: <Cpu size={22} color="#16a34a" />,
                title: "Deep Embedded Expertise",
                desc: "RTOS, device drivers, hardware bring-up, and low-power optimization.",
                bg: "#dcfce7",
              },
              {
                icon: <Network size={22} color="#7c3aed" />,
                title: "Scalable IoT Systems",
                desc: "Architected for thousands to millions of connected devices.",
                bg: "#ede9fe",
              },
              {
                icon: <FileLock size={22} color="#ea580c" />,
                title: "NDA & IP Protection",
                desc: "Complete ownership of source code, data, and project assets.",
                bg: "#ffedd5",
              },
            ].map((f, i) => (
              <div
                key={i}
                className={`reveal shimmer-card lift d${i + 1}`}
                style={{
                  background: "#fff",
                  border: "1.5px solid var(--border)",
                  borderRadius: 20,
                  padding: "28px 24px",
                  display: "flex",
                  gap: 16,
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    background: f.bg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {f.icon}
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "Syne,sans-serif",
                      fontWeight: 700,
                      color: "var(--ink)",
                      marginBottom: 6,
                    }}
                  >
                    {f.title}
                  </div>
                  <div
                    style={{
                      fontSize: "0.85rem",
                      color: "var(--ink-3)",
                      lineHeight: 1.6,
                    }}
                  >
                    {f.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT WE DO ── */}
      <section style={{ padding: "50px 0", background: "#fff" }}>
        <div style={{ maxWidth: 1480, margin: "0 auto", padding: "0 5%" }}>
          <div
            className="reveal"
            style={{
              margin: "0 auto 72px",
            }}
          >
            <h2
              style={{
                fontSize: "48px",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                marginBottom: 20,
              }}
            >
              What We Do in Embedded &amp; IoT
            </h2>
            <p
              style={{
                fontSize: "1.05rem",
                color: "var(--ink-2)",
                lineHeight: 1.75,
              }}
            >
              End-to-end development that connects hardware, firmware, cloud,
              and applications into reliable, scalable solutions.
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
              gap: 28,
            }}
          >
            {[
              {
                icon: <Cpu size={28} color="#2563eb" />,
                bg: "#dbeafe",
                title: "Embedded Systems Engineering",
                desc: "Firmware for MCUs, RTOS, bare-metal programming, device drivers, and low-power optimization.",
              },
              {
                icon: <Radio size={28} color="#16a34a" />,
                bg: "#dcfce7",
                title: "Device Connectivity",
                desc: "Reliable device-to-device and device-to-cloud connectivity using modern wireless technologies.",
              },
              {
                icon: <CloudCog size={28} color="#7c3aed" />,
                bg: "#ede9fe",
                title: "IoT Cloud Platforms",
                desc: "Scalable cloud infrastructure for device management, data ingestion, OTA updates, and secure backends.",
              },
              {
                icon: <LineChart size={28} color="#ea580c" />,
                bg: "#ffedd5",
                title: "Monitoring & Analytics",
                desc: "Real-time dashboards, analytics, alerts, and automation systems that turn IoT data into actionable insights.",
              },
            ].map((s, i) => (
              <div
                key={i}
                className={`reveal shimmer-card lift d${i + 1}`}
                style={{
                  background: "#fff",
                  border: "1.5px solid var(--border)",
                  borderRadius: 24,
                  padding: "36px 28px",
                }}
              >
                <div
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 16,
                    background: s.bg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 24,
                  }}
                >
                  {s.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "Syne,sans-serif",
                    fontWeight: 700,
                    fontSize: "1.1rem",
                    marginBottom: 12,
                    color: "var(--ink)",
                  }}
                >
                  {s.title}
                </h3>
                <p
                  style={{
                    color: "var(--ink-3)",
                    lineHeight: 1.65,
                    fontSize: "0.92rem",
                  }}
                >
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EMBEDDED SERVICES ── */}
      <section style={{ padding: "50px 0", background: "var(--surface-2)" }}>
        <div style={{ maxWidth: 1480, margin: "0 auto", padding: "0 5%" }}>
          <div
            className="reveal"
            style={{
              margin: "0 auto 72px",
            }}
          >
            <h2
              style={{
                fontSize: "48px",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                marginBottom: 20,
              }}
            >
              Embedded Systems Development
            </h2>
            <p
              style={{
                fontSize: "1.05rem",
                color: "var(--ink-2)",
                lineHeight: 1.75,
              }}
            >
              Robust embedded systems built by combining low-level firmware
              engineering, hardware expertise, and performance optimization.
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
              gap: 48,
              alignItems: "start",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
              {[
                {
                  icon: <Cpu size={26} color="#2563eb" />,
                  title: "Firmware Development (Bare-Metal & RTOS)",
                  desc: "Reliable, efficient firmware for microcontrollers using bare-metal programming or real-time operating systems.",
                },
                {
                  icon: <MemoryStick size={26} color="#16a34a" />,
                  title: "Device Drivers & BSP Development",
                  desc: "Custom driver development for sensors, peripherals, communication modules, and board support packages.",
                },
                {
                  icon: <Settings size={26} color="#7c3aed" />,
                  title: "Hardware Bring-Up & Board Validation",
                  desc: "End-to-end hardware bring-up including bootloader setup, peripheral validation, debugging, and performance tuning.",
                },
                {
                  icon: <BatteryCharging size={26} color="#ea580c" />,
                  title: "Low-Power & Performance Optimization",
                  desc: "Power-efficient firmware design, sleep-mode optimization, memory tuning, and performance profiling.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`reveal d${i + 1}`}
                  style={{ display: "flex", gap: 18 }}
                >
                  <div
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: 14,
                      background: "#fff",
                      border: "1.5px solid var(--border)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h3
                      style={{
                        fontFamily: "Syne,sans-serif",
                        fontWeight: 700,
                        fontSize: "1rem",
                        marginBottom: 8,
                        color: "var(--ink)",
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.88rem",
                        color: "var(--ink-3)",
                        lineHeight: 1.65,
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="reveal-right">
              <Image
                src="https://images.unsplash.com/photo-1551703616-e5a729ff0185?q=80&w=1473&auto=format&fit=crop"
                width={800}
                height={600}
                alt="Embedded hardware"
                style={{
                  borderRadius: 24,
                  width: "100%",
                  objectFit: "cover",
                  boxShadow: "0 20px 56px rgba(0,0,0,0.1)",
                  marginBottom: 28,
                }}
              />
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 10,
                }}
              >
                {[
                  "ARM Cortex-M/A",
                  "ESP32 / STM32",
                  "FreeRTOS / Zephyr",
                  "OTA Bootloaders",
                  "I2C / SPI / UART",
                  "Debugging & Profiling",
                ].map((t, i) => (
                  <div
                    key={i}
                    style={{
                      background: "#fff",
                      border: "1.5px solid var(--border)",
                      borderRadius: 10,
                      padding: "10px 14px",
                      fontSize: "0.82rem",
                      fontWeight: 500,
                      color: "var(--ink-2)",
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                    }}
                  >
                    <span
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        background: "#2563eb",
                        flexShrink: 0,
                      }}
                    />
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── IOT PLATFORM ── */}
      <section style={{ padding: "50px 0", background: "#fff" }}>
        <div style={{ maxWidth: 1480, margin: "0 auto", padding: "0 5%" }}>
          <div
            className="reveal"
            style={{
              margin: "0 auto 72px",
            }}
          >
            <h2
              style={{
                fontSize: "48px",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                marginBottom: 20,
              }}
            >
              IoT Application &amp; Platform Development
            </h2>
            <p
              style={{
                fontSize: "1.05rem",
                color: "var(--ink-2)",
                lineHeight: 1.75,
              }}
            >
              Secure, cloud-native IoT platforms that transform raw device data
              into real-time intelligence.
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
              gap: 40,
              alignItems: "center",
              marginBottom: 72,
            }}
          >
            <div className="reveal-left">
              <h3
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  color: "var(--ink)",
                  marginBottom: 16,
                }}
              >
                From Connected Devices to Actionable Insights
              </h3>
              <p
                style={{
                  color: "var(--ink-2)",
                  lineHeight: 1.75,
                  marginBottom: 28,
                }}
              >
                Modern IoT solutions go far beyond device connectivity. We help
                organizations build end-to-end IoT platforms that securely
                ingest data, process it in real time, and present meaningful
                insights through intuitive web and mobile apps.
              </p>
              {[
                "Secure device-to-cloud data pipelines",
                "Real-time processing and analytics",
                "Enterprise-grade scalability and reliability",
              ].map((t, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: 10,
                    marginBottom: 12,
                    alignItems: "flex-start",
                  }}
                >
                  <ShieldCheck
                    size={17}
                    color="#2563eb"
                    style={{ marginTop: 2, flexShrink: 0 }}
                  />
                  <span style={{ color: "var(--ink-2)", fontSize: "0.95rem" }}>
                    {t}
                  </span>
                </div>
              ))}
            </div>
            <div className="reveal-right">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
                width={800}
                height={600}
                alt="IoT cloud analytics"
                style={{
                  borderRadius: 24,
                  width: "100%",
                  objectFit: "cover",
                  boxShadow: "0 24px 64px rgba(0,0,0,0.12)",
                }}
              />
            </div>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(360px,1fr))",
              gap: 24,
            }}
          >
            {[
              {
                icon: <Cloud size={26} color="#2563eb" />,
                bg: "#dbeafe",
                title: "Cloud-Native IoT Platforms",
                desc: "Scalable cloud architectures for device ingestion, processing, storage, and enterprise integration.",
              },
              {
                icon: <Database size={26} color="#16a34a" />,
                bg: "#dcfce7",
                title: "Real-Time Data Processing",
                desc: "High-throughput pipelines for real-time monitoring, alerts, and event-driven workflows.",
              },
              {
                icon: <RefreshCcw size={26} color="#7c3aed" />,
                bg: "#ede9fe",
                title: "Device Management & OTA",
                desc: "Remote provisioning, configuration management, firmware updates, and fleet health monitoring.",
              },
              {
                icon: <LineChart size={26} color="#ea580c" />,
                bg: "#ffedd5",
                title: "Analytics & Visualization",
                desc: "Interactive dashboards, reports, and visualizations for operators and decision-makers.",
              },
              {
                icon: <Users size={26} color="#0891b2" />,
                bg: "#cffafe",
                title: "Role-Based Access Control",
                desc: "Secure multi-user access with roles, permissions, audit logs, and activity tracking.",
              },
              {
                icon: <ShieldCheck size={26} color="#dc2626" />,
                bg: "#fee2e2",
                title: "Enterprise Security",
                desc: "End-to-end encryption, device authentication, secure APIs, and compliance-ready architectures.",
              },
            ].map((f, i) => (
              <div
                key={i}
                className={`reveal shimmer-card lift d${(i % 3) + 1}`}
                style={{
                  border: "1.5px solid var(--border)",
                  borderRadius: 20,
                  padding: "28px 24px",
                  background: "#fff",
                }}
              >
                <div
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 14,
                    background: f.bg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 18,
                  }}
                >
                  {f.icon}
                </div>
                <h4
                  style={{
                    fontFamily: "Syne,sans-serif",
                    fontWeight: 700,
                    marginBottom: 8,
                    color: "var(--ink)",
                  }}
                >
                  {f.title}
                </h4>
                <p
                  style={{
                    fontSize: "0.86rem",
                    color: "var(--ink-3)",
                    lineHeight: 1.65,
                  }}
                >
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HARDWARE EXPERTISE ── */}
      <section style={{ padding: "50px 0", background: "var(--surface-2)" }}>
        <div style={{ maxWidth: 1480, margin: "0 auto", padding: "0 5%" }}>
          <div
            className="reveal"
            style={{
              margin: "0 auto 72px",
            }}
          >
            <h2
              style={{
                fontSize: "48px",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                marginBottom: 20,
              }}
            >
              Hardware &amp; Platform Expertise
            </h2>
            <p
              style={{
                fontSize: "1.05rem",
                color: "var(--ink-2)",
                lineHeight: 1.75,
              }}
            >
              From silicon to systems, we engineer embedded and IoT hardware
              platforms ready for real-world deployment.
            </p>
          </div>
          {[
            {
              icon: <Factory size={28} color="#2563eb" />,
              title: "Microcontrollers & System-on-Chips",
              desc: "Firmware and system software for a wide range of MCUs and SoCs, optimized for low power consumption, real-time performance, and hardware reliability.",
              tags: "ARM Cortex-M / Cortex-A • STM32 • ESP32 • NXP • PIC",
              img: "https://images.unsplash.com/photo-1677480409111-88694019301c?q=80&w=1470&auto=format&fit=crop",
              reverse: false,
            },
            {
              icon: <Cpu size={28} color="#16a34a" />,
              title: "Single Board Computers & Edge Platforms",
              desc: "For gateway and edge-compute use cases, we work with Linux-based SBCs and custom boards that handle data aggregation, processing, and secure connectivity.",
              tags: "Raspberry Pi • BeagleBone • Jetson • Custom SBCs",
              img: "https://images.unsplash.com/photo-1568332339712-fa479d5494fa?q=80&w=1470&auto=format&fit=crop",
              reverse: true,
            },
            {
              icon: <Activity size={28} color="#7c3aed" />,
              title: "Sensors, Actuators & Control Systems",
              desc: "We integrate a wide range of sensors and actuators to enable precise monitoring, automation, and control across industrial and consumer IoT applications.",
              tags: "Temperature • Motion • Pressure • GPS • Relays • Motors",
              img: "https://images.unsplash.com/photo-1599508266124-804fc6eecf09?q=80&w=1470&auto=format&fit=crop",
              reverse: false,
            },
            {
              icon: <Radio size={28} color="#ea580c" />,
              title: "IoT Gateways & Industrial Edge Devices",
              desc: "Our gateways bridge devices and cloud platforms by handling protocol translation, edge analytics, and secure data transmission in harsh environments.",
              tags: "Industrial Gateways • Edge Nodes • Custom Enclosures",
              img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1472&auto=format&fit=crop",
              reverse: true,
            },
          ].map((hw, i) => (
            <div
              key={i}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
                gap: 48,
                alignItems: "center",
                marginBottom: 80,
              }}
            >
              {hw.reverse ? (
                <>
                  <div className="reveal-left d1">
                    <Image
                      src={hw.img}
                      width={1200}
                      height={800}
                      alt={hw.title}
                      style={{
                        width: "100%",
                        height: "clamp(260px,32vw,380px)",
                        borderRadius: 24,
                        objectFit: "cover",
                        boxShadow: "0 16px 48px rgba(0,0,0,0.1)",
                      }}
                    />
                  </div>
                  <div className="reveal-right d2">
                    <div style={{ marginBottom: 16 }}>{hw.icon}</div>
                    <h3
                      style={{
                        fontFamily: "Syne,sans-serif",
                        fontWeight: 700,
                        fontSize: "1.4rem",
                        marginBottom: 14,
                        color: "var(--ink)",
                      }}
                    >
                      {hw.title}
                    </h3>
                    <p
                      style={{
                        color: "var(--ink-2)",
                        lineHeight: 1.75,
                        marginBottom: 16,
                      }}
                    >
                      {hw.desc}
                    </p>
                    <p
                      style={{
                        fontSize: "0.85rem",
                        color: "var(--ink-3)",
                        fontStyle: "italic",
                      }}
                    >
                      {hw.tags}
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div className="reveal-left d1">
                    <div style={{ marginBottom: 16 }}>{hw.icon}</div>
                    <h3
                      style={{
                        fontFamily: "Syne,sans-serif",
                        fontWeight: 700,
                        fontSize: "1.4rem",
                        marginBottom: 14,
                        color: "var(--ink)",
                      }}
                    >
                      {hw.title}
                    </h3>
                    <p
                      style={{
                        color: "var(--ink-2)",
                        lineHeight: 1.75,
                        marginBottom: 16,
                      }}
                    >
                      {hw.desc}
                    </p>
                    <p
                      style={{
                        fontSize: "0.85rem",
                        color: "var(--ink-3)",
                        fontStyle: "italic",
                      }}
                    >
                      {hw.tags}
                    </p>
                  </div>
                  <div className="reveal-right d2">
                    <Image
                      src={hw.img}
                      width={1200}
                      height={800}
                      alt={hw.title}
                      style={{
                        width: "100%",
                        height: "clamp(260px,32vw,380px)",
                        borderRadius: 24,
                        objectFit: "cover",
                        boxShadow: "0 16px 48px rgba(0,0,0,0.1)",
                      }}
                    />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── CONNECTIVITY ── */}
      <section style={{ padding: "50px 0", background: "#fff" }}>
        <div style={{ maxWidth: 1480, margin: "0 auto", padding: "0 5%" }}>
          <div
            className="reveal"
            style={{
              margin: "0 auto 72px",
            }}
          >
            <h2
              style={{
                fontSize: "48px",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                marginBottom: 20,
              }}
            >
              IoT Connectivity &amp; Communication
            </h2>
            <p
              style={{
                fontSize: "1.05rem",
                color: "var(--ink-2)",
                lineHeight: 1.75,
              }}
            >
              Reliable, secure, and scalable communication architectures for
              seamless data exchange across mission-critical environments.
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(270px,1fr))",
              gap: 24,
              marginBottom: 72,
            }}
          >
            {[
              {
                icon: <Bluetooth size={28} color="#16a34a" />,
                bg: "#dcfce7",
                title: "Short-Range & Low-Power",
                desc: "Ideal for wearables, medical devices, and battery-powered sensors where energy efficiency is critical.",
                tags: "Bluetooth • BLE • NFC",
              },
              {
                icon: <Wifi size={28} color="#2563eb" />,
                bg: "#dbeafe",
                title: "Local & Industrial Network",
                desc: "High-throughput, low-latency connectivity for gateways and edge devices within LAN environments.",
                tags: "Wi-Fi • Ethernet • Industrial LAN",
              },
              {
                icon: <Radio size={28} color="#7c3aed" />,
                bg: "#ede9fe",
                title: "Long-Range & LPWAN",
                desc: "Remote deployments where devices must operate for years on battery power with long-distance communication.",
                tags: "LoRaWAN • NB-IoT • Sub-GHz RF",
              },
              {
                icon: <Signal size={28} color="#ea580c" />,
                bg: "#ffedd5",
                title: "Cellular & Global",
                desc: "Mission-critical IoT requiring global coverage, high reliability, and seamless mobility across regions.",
                tags: "LTE • 4G • 5G • Private Cellular",
              },
            ].map((c, i) => (
              <div
                key={i}
                className={`reveal shimmer-card lift d${i + 1}`}
                style={{
                  border: "1.5px solid var(--border)",
                  borderRadius: 24,
                  padding: "32px 24px",
                  background: "#fff",
                }}
              >
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: 16,
                    background: c.bg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 20,
                  }}
                >
                  {c.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "Syne,sans-serif",
                    fontWeight: 700,
                    fontSize: "1rem",
                    marginBottom: 10,
                    color: "var(--ink)",
                  }}
                >
                  {c.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.88rem",
                    color: "var(--ink-3)",
                    lineHeight: 1.65,
                    marginBottom: 14,
                  }}
                >
                  {c.desc}
                </p>
                <p
                  style={{
                    fontSize: "0.8rem",
                    color: "var(--blue)",
                    fontWeight: 600,
                  }}
                >
                  {c.tags}
                </p>
              </div>
            ))}
          </div>
          {/* Protocol Stack */}
          <div
            className="reveal"
            style={{
              background: "var(--surface-2)",
              borderRadius: 28,
              padding: "48px 40px",
              border: "1.5px solid var(--border)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                marginBottom: 12,
              }}
            >
              <div
                style={{
                  width: 46,
                  height: 46,
                  borderRadius: 12,
                  background: "#dbeafe",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Layers size={22} color="#2563eb" />
              </div>
              <h3
                style={{
                  fontFamily: "Syne,sans-serif",
                  fontWeight: 700,
                  fontSize: "1.3rem",
                  color: "var(--ink)",
                }}
              >
                Communication Protocol Stack
              </h3>
            </div>
            <p
              style={{
                color: "var(--ink-2)",
                lineHeight: 1.75,
                marginBottom: 36,
                maxWidth: 640,
              }}
            >
              Efficient and secure protocols for reliable data exchange across
              constrained devices, gateways, and cloud platforms.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(360px,1fr))",
                gap: 16,
              }}
            >
              {[
                {
                  icon: <MessageSquare size={20} color="#2563eb" />,
                  title: "MQTT / MQTT-SN",
                  desc: "Lightweight pub-sub protocol for low-bandwidth, high-latency IoT environments.",
                },
                {
                  icon: <Link size={20} color="#16a34a" />,
                  title: "CoAP",
                  desc: "REST-based protocol for constrained devices and low-power networks.",
                },
                {
                  icon: <Globe size={20} color="#7c3aed" />,
                  title: "HTTP / HTTPS",
                  desc: "Widely adopted secure protocols for API-based communication.",
                },
                {
                  icon: <Cpu size={20} color="#ea580c" />,
                  title: "Modbus (RTU / TCP)",
                  desc: "Industrial standard for PLCs, sensors, and automation systems.",
                },
                {
                  icon: <Network size={20} color="#0891b2" />,
                  title: "CAN / CANopen",
                  desc: "Robust real-time protocol for automotive and industrial control.",
                },
                {
                  icon: <Boxes size={20} color="#0d9488" />,
                  title: "OPC-UA",
                  desc: "Secure, platform-independent protocol for industrial interoperability.",
                },
              ].map((p, i) => (
                <div
                  key={i}
                  className={`shimmer-card lift d${(i % 3) + 1}`}
                  style={{
                    background: "#fff",
                    border: "1.5px solid var(--border)",
                    borderRadius: 16,
                    padding: "20px",
                  }}
                >
                  <div style={{ marginBottom: 10 }}>{p.icon}</div>
                  <div
                    style={{
                      fontWeight: 700,
                      fontSize: "0.9rem",
                      color: "var(--ink)",
                      marginBottom: 6,
                      fontFamily: "Syne,sans-serif",
                    }}
                  >
                    {p.title}
                  </div>
                  <p
                    style={{
                      fontSize: "0.8rem",
                      color: "var(--ink-3)",
                      lineHeight: 1.55,
                    }}
                  >
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
            <div
              style={{
                marginTop: 24,
                background: "#f0fdf4",
                border: "1.5px solid #bbf7d0",
                borderRadius: 12,
                padding: "14px 18px",
                display: "flex",
                gap: 10,
                alignItems: "flex-start",
              }}
            >
              <ShieldCheck
                size={16}
                color="#16a34a"
                style={{ marginTop: 2, flexShrink: 0 }}
              />
              <p
                style={{
                  fontSize: "0.83rem",
                  color: "#166534",
                  lineHeight: 1.6,
                }}
              >
                All protocols implemented with end-to-end encryption,
                authentication mechanisms, and enterprise-grade security best
                practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ARCHITECTURE ── */}
      <section style={{ padding: "50px 0", background: "var(--surface-2)" }}>
        <div style={{ maxWidth: 1480, margin: "0 auto", padding: "0 5%" }}>
          <div
            className="reveal"
            style={{
              margin: "0 auto 72px",
            }}
          >
            <h2
              style={{
                fontSize: "48px",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                marginBottom: 20,
              }}
            >
              IoT Architecture &amp; System Design
            </h2>
            <p
              style={{
                fontSize: "1.05rem",
                color: "var(--ink-2)",
                lineHeight: 1.75,
              }}
            >
              Robust IoT architectures connecting devices, gateways, cloud
              platforms, and applications — ensuring scalability, security, and
              reliability.
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
              gap: 40,
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {[
                {
                  icon: <Cpu size={26} color="#2563eb" />,
                  bg: "#dbeafe",
                  title: "Device & Firmware Layer",
                  desc: "Embedded devices handle sensor data acquisition, local processing, and secure communication.",
                },
                {
                  icon: <Radio size={26} color="#16a34a" />,
                  bg: "#dcfce7",
                  title: "Connectivity & Gateway Layer",
                  desc: "Gateways aggregate data, translate protocols, and ensure reliable communication.",
                },
                {
                  icon: <Cloud size={26} color="#7c3aed" />,
                  bg: "#ede9fe",
                  title: "Cloud & Data Processing Layer",
                  desc: "Cloud services ingest, process, store, and analyze device data at scale.",
                },
                {
                  icon: <Layers size={26} color="#ea580c" />,
                  bg: "#ffedd5",
                  title: "Application & Integration Layer",
                  desc: "Web and mobile apps provide dashboards, automation controls, and enterprise integrations.",
                },
              ].map((layer, i) => (
                <div
                  key={i}
                  className={`reveal d${i + 1}`}
                  style={{
                    display: "flex",
                    gap: 18,
                    alignItems: "flex-start",
                    background: "#fff",
                    border: "1.5px solid var(--border)",
                    borderRadius: 20,
                    padding: "24px 20px",
                  }}
                >
                  <div
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: 14,
                      background: layer.bg,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {layer.icon}
                  </div>
                  <div>
                    <h3
                      style={{
                        fontFamily: "Syne,sans-serif",
                        fontWeight: 700,
                        fontSize: "0.95rem",
                        marginBottom: 6,
                        color: "var(--ink)",
                      }}
                    >
                      {layer.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.85rem",
                        color: "var(--ink-3)",
                        lineHeight: 1.6,
                      }}
                    >
                      {layer.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {[
                {
                  icon: <Shield size={22} color="#2563eb" />,
                  title: "Security by Architecture",
                  desc: "Secure boot, device authentication, encrypted data transmission, and access control are built into every architectural layer.",
                },
                {
                  icon: <RefreshCcw size={22} color="#16a34a" />,
                  title: "OTA Updates & Lifecycle Management",
                  desc: "Our architectures support remote firmware updates, configuration changes, and device lifecycle management without physical access.",
                },
                {
                  icon: <Cloud size={22} color="#7c3aed" />,
                  title: "Scalability & High Availability",
                  desc: "Designed to scale from pilot deployments to millions of connected devices with fault tolerance and high-availability infrastructure.",
                },
              ].map((feat, i) => (
                <div
                  key={i}
                  className={`reveal d${i + 2}`}
                  style={{
                    background: "#fff",
                    border: "1.5px solid var(--border)",
                    borderRadius: 20,
                    padding: "28px 24px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      marginBottom: 12,
                    }}
                  >
                    {feat.icon}
                    <h4
                      style={{
                        fontFamily: "Syne,sans-serif",
                        fontWeight: 700,
                        color: "var(--ink)",
                      }}
                    >
                      {feat.title}
                    </h4>
                  </div>
                  <p
                    style={{
                      fontSize: "0.88rem",
                      color: "var(--ink-3)",
                      lineHeight: 1.65,
                    }}
                  >
                    {feat.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ENGAGEMENT MODELS ── */}
      <section style={{ padding: "50px 0", background: "#fff" }}>
        <div style={{ maxWidth: 1480, margin: "0 auto", padding: "0 5%" }}>
          <div
            className="reveal"
            style={{
              maxWidth: 680,
              margin: "0 auto 72px",
            }}
          >
            <h2
              style={{
                fontSize: "48px",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                marginBottom: 20,
              }}
            >
              Flexible Engagement Models
            </h2>
            <p
              style={{
                fontSize: "1.05rem",
                color: "var(--ink-2)",
                lineHeight: 1.75,
              }}
            >
              Choose an engagement model that aligns with your project scope,
              budget, and long-term business goals.
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(290px,1fr))",
              gap: 28,
            }}
          >
            {[
              {
                badge: "Best for MVPs",
                badgeColor: "#dbeafe",
                badgeText: "#1d4ed8",
                title: "Fixed Price Model",
                desc: "Ideal for projects with clearly defined requirements. We commit to a fixed scope, cost, and delivery schedule — ensuring predictable budgeting.",
                features: [
                  "Clearly defined scope & milestones",
                  "Fixed budget & delivery timeline",
                  "Minimal client management effort",
                  "Ideal for MVPs & small projects",
                ],
                highlighted: false,
              },
              {
                badge: "Most Popular",
                badgeColor: "#2563eb",
                badgeText: "#fff",
                title: "Dedicated Team Model",
                desc: "A dedicated team works exclusively on your product — acting as an extension of your in-house team. Perfect for scaling products and continuous development.",
                features: [
                  "Full control over team & priorities",
                  "Monthly billing with flexible scaling",
                  "Best for SaaS & enterprise platforms",
                  "Continuous delivery & long-term support",
                ],
                highlighted: true,
              },
              {
                badge: "Flexible Scope",
                badgeColor: "#ede9fe",
                badgeText: "#6d28d9",
                title: "Time & Material Model",
                desc: "Designed for evolving requirements. You pay only for actual development time and effort, with complete transparency and agile execution.",
                features: [
                  "Flexible scope & changing priorities",
                  "Pay-as-you-go (hourly or monthly)",
                  "Agile & iterative delivery approach",
                  "Ideal for R&D & innovation-driven projects",
                ],
                highlighted: false,
              },
            ].map((eng, i) => (
              <div
                key={i}
                className={`reveal shimmer-card lift d${i + 1}`}
                style={{
                  background: eng.highlighted
                    ? "linear-gradient(160deg,#1e40af 0%,#1d4ed8 100%)"
                    : "#fff",
                  border: eng.highlighted
                    ? "none"
                    : "1.5px solid var(--border)",
                  borderRadius: 28,
                  padding: "40px 32px",
                  boxShadow: eng.highlighted
                    ? "0 24px 64px rgba(37,99,235,0.3)"
                    : "none",
                  color: eng.highlighted ? "#fff" : "var(--ink)",
                }}
              >
                <div
                  style={{
                    display: "inline-block",
                    background: eng.badgeColor,
                    color: eng.badgeText,
                    borderRadius: 999,
                    padding: "5px 14px",
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    marginBottom: 24,
                    fontFamily: "DM Sans,sans-serif",
                  }}
                >
                  {eng.badge}
                </div>
                <h3
                  style={{
                    fontFamily: "Syne,sans-serif",
                    fontWeight: 800,
                    fontSize: "1.3rem",
                    marginBottom: 14,
                  }}
                >
                  {eng.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.9rem",
                    lineHeight: 1.7,
                    marginBottom: 28,
                    opacity: eng.highlighted ? 0.85 : 1,
                    color: eng.highlighted ? "#fff" : "var(--ink-2)",
                  }}
                >
                  {eng.desc}
                </p>
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 10 }}
                >
                  {eng.features.map((f, j) => (
                    <div
                      key={j}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        fontSize: "0.85rem",
                        color: eng.highlighted
                          ? "rgba(255,255,255,0.9)"
                          : "var(--ink-2)",
                      }}
                    >
                      <span
                        style={{
                          width: 18,
                          height: 18,
                          borderRadius: "50%",
                          background: eng.highlighted
                            ? "rgba(255,255,255,0.2)"
                            : "#dbeafe",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          fontSize: 10,
                          color: eng.highlighted ? "#fff" : "#2563eb",
                          fontWeight: 700,
                        }}
                      >
                        ✓
                      </span>
                      {f}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section style={{ padding: "50px 0", background: "var(--surface-2)" }}>
        <div style={{ maxWidth: 1480, margin: "0 auto", padding: "0 5%" }}>
          <div
            className="reveal"
            style={{
              margin: "0 auto 72px",
            }}
          >
            <h2
              style={{
                fontSize: "48px",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                marginBottom: 20,
              }}
            >
              Industries We Serve
            </h2>
            <p
              style={{
                fontSize: "1.05rem",
                color: "var(--ink-2)",
                lineHeight: 1.75,
              }}
            >
              Delivering IoT and embedded solutions across industries with
              domain-specific expertise.
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill,minmax(360px,1fr))",
              gap: 24,
            }}
          >
            {[
              {
                img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
                title: "Enterprise & B2B",
                desc: "ERP systems, internal tools, secure dashboards and large-scale enterprise applications.",
              },
              {
                img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
                title: "Fintech & Banking",
                desc: "Payment gateways, digital wallets and fintech platforms with bank-grade security.",
              },
              {
                img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d",
                title: "Healthcare & MedTech",
                desc: "Patient monitoring and HIPAA-compliant healthcare platforms.",
              },
              {
                img: "https://images.unsplash.com/photo-1515168833906-d2a3b82b302a",
                title: "E-Commerce & Retail",
                desc: "High-conversion shopping apps, inventory management and POS integration.",
              },
              {
                img: "https://images.unsplash.com/photo-1518770660439-4636190af475",
                title: "IoT & Smart Devices",
                desc: "Applications for smart devices, connected hardware, sensors and IoT ecosystems.",
              },
              {
                img: "https://images.unsplash.com/photo-1509062522246-3755977927d7",
                title: "EdTech & eLearning",
                desc: "Online learning apps, LMS platforms, and virtual classrooms.",
              },
              {
                img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
                title: "Real Estate & PropTech",
                desc: "Property listing apps, virtual tours, CRM and real estate management.",
              },
              {
                img: "https://images.unsplash.com/photo-1554284126-aa88f22d8b74",
                title: "Fitness & Wellness",
                desc: "Workout tracking apps, wearable integrations and wellness solutions.",
              },
              {
                img: "https://images.unsplash.com/photo-1511512578047-dfb367046420",
                title: "Gaming & Interactive",
                desc: "2D/3D games, real-time multiplayer and immersive interactive experiences.",
              },
            ].map((ind, i) => (
              <div
                key={i}
                className={`reveal industry-card d${(i % 3) + 1}`}
                style={{
                  position: "relative",
                  height: 320,
                  borderRadius: 24,
                  overflow: "hidden",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
                  cursor: "pointer",
                }}
              >
                <Image
                  fill
                  src={ind.img}
                  alt={ind.title}
                  style={{ position: "absolute", inset: 0, objectFit: "cover" }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top,rgba(15,23,42,0.85) 0%,rgba(15,23,42,0.2) 60%,transparent 100%)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: "28px 24px",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "Syne,sans-serif",
                      fontWeight: 700,
                      color: "#fff",
                      fontSize: "1.05rem",
                      marginBottom: 6,
                    }}
                  >
                    {ind.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.82rem",
                      color: "rgba(255,255,255,0.85)",
                      lineHeight: 1.55,
                    }}
                  >
                    {ind.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPLIANCE ── */}
      <section style={{ padding: "50px 0", background: "#fff" }}>
        <div style={{ maxWidth: 1480, margin: "0 auto", padding: "0 5%" }}>
          <div
            className="reveal"
            style={{
              margin: "0 auto 72px",
            }}
          >
            <h2
              style={{
                fontSize: "48px",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                marginBottom: 20,
              }}
            >
              Compliance, Security &amp; Legal Assurance
            </h2>
            <p
              style={{
                fontSize: "1.05rem",
                color: "var(--ink-2)",
                lineHeight: 1.75,
              }}
            >
              Strict security, compliance, and legal frameworks to ensure
              confidentiality, data protection, and IP safety.
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
              gap: 40,
              alignItems: "start",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                {
                  emoji: "🔒",
                  title: "NDA Protected Engagement",
                  desc: "All discussions, documentation, and deliverables are secured under a legally binding NDA.",
                },
                {
                  emoji: "🧠",
                  title: "100% IP Ownership",
                  desc: "You retain complete ownership of source code, data, and all project assets upon completion.",
                },
                {
                  emoji: "🛡️",
                  title: "ISO-Aligned Security",
                  desc: "Development workflows aligned with ISO 27001 security principles and controls.",
                },
                {
                  emoji: "🌍",
                  title: "GDPR & Data Privacy",
                  desc: "Strict data privacy measures aligned with GDPR and international regulations.",
                },
              ].map((c, i) => (
                <div
                  key={i}
                  className={`reveal shimmer-card d${i + 1}`}
                  style={{
                    display: "flex",
                    gap: 14,
                    alignItems: "flex-start",
                    padding: "20px 18px",
                    border: "1.5px solid var(--border)",
                    borderRadius: 16,
                    background: "#fff",
                    transition: "box-shadow 0.2s",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.boxShadow =
                      "0 8px 24px rgba(37,99,235,0.1)")
                  }
                  onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "")}
                >
                  <div style={{ fontSize: "1.4rem", flexShrink: 0 }}>
                    {c.emoji}
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "Syne,sans-serif",
                        fontWeight: 700,
                        color: "var(--ink)",
                        marginBottom: 4,
                      }}
                    >
                      {c.title}
                    </div>
                    <p
                      style={{
                        fontSize: "0.84rem",
                        color: "var(--ink-3)",
                        lineHeight: 1.6,
                      }}
                    >
                      {c.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div
              className="reveal-right grad-border"
              style={{
                borderRadius: 28,
                padding: "48px 40px",
                background: "#fff",
              }}
            >
              <h3
                style={{
                  fontFamily: "Syne,sans-serif",
                  fontWeight: 700,
                  fontSize: "1.5rem",
                  marginBottom: 24,
                  color: "var(--ink)",
                }}
              >
                Built for Enterprise Trust &amp; Long-Term Partnerships
              </h3>
              <p
                style={{
                  color: "var(--ink-2)",
                  lineHeight: 1.75,
                  marginBottom: 16,
                  fontSize: "0.95rem",
                }}
              >
                At <strong>Albos Technologies</strong>, security and trust are
                embedded into every phase of our development lifecycle. Your
                data and IP remain fully protected.
              </p>
              <p
                style={{
                  color: "var(--ink-2)",
                  lineHeight: 1.75,
                  marginBottom: 16,
                  fontSize: "0.95rem",
                }}
              >
                We follow industry-recognized best practices aligned with{" "}
                <strong>ISO 27001</strong>, <strong>GDPR</strong>, and
                enterprise security standards.
              </p>
              <p
                style={{
                  color: "var(--ink-2)",
                  lineHeight: 1.75,
                  marginBottom: 36,
                  fontSize: "0.95rem",
                }}
              >
                All legal, compliance, and security documentation is shared
                transparently under NDA, giving enterprises complete peace of
                mind.
              </p>
              <a
                href="/contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "14px 28px",
                  borderRadius: 50,
                  background: "#2563eb",
                  color: "#fff",
                  fontWeight: 700,
                  fontFamily: "DM Sans,sans-serif",
                  textDecoration: "none",
                  fontSize: "0.95rem",
                  boxShadow: "0 8px 24px rgba(37,99,235,0.3)",
                  transition: "all 0.25s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateY(-2px)")
                }
                onMouseLeave={(e) => (e.currentTarget.style.transform = "")}
              >
                Request NDA &amp; Compliance Details <ArrowRight size={16} />
              </a>
              <p
                style={{
                  fontSize: "0.75rem",
                  color: "var(--ink-3)",
                  marginTop: 12,
                }}
              >
                NDA-protected · No obligation · Enterprise-grade confidentiality
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <div style={{ padding: "0 5% 80px", maxWidth: 1480, margin: "0 auto" }}>
        <div
          className="reveal"
          style={{
            borderRadius: 32,
            background:
              "linear-gradient(135deg,#1e3a8a 0%,#1d4ed8 50%,#4f46e5 100%)",
            padding: "80px 60px",

            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: -60,
              right: -60,
              width: 280,
              height: 280,
              borderRadius: "50%",
              background: "rgba(255,255,255,0.06)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: -40,
              left: -40,
              width: 200,
              height: 200,
              borderRadius: "50%",
              background: "rgba(255,255,255,0.04)",
              pointerEvents: "none",
            }}
          />
          <h2
            style={{
              fontFamily: "Syne,sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.6rem,3vw,2.4rem)",
              color: "#fff",
              marginBottom: 16,
              position: "relative",
            }}
          >
            Your Idea. Your Code. Your Ownership.
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.85)",
              fontSize: "1.05rem",
              lineHeight: 1.75,
              margin: "0 auto 40px",
              position: "relative",
            }}
          >
            We believe trust is the foundation of successful partnerships. Our
            contracts are designed to protect your interests, ensure
            confidentiality, and build long-term collaboration.
          </p>
          <a
            href="/contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "16px 36px",
              borderRadius: 50,
              background: "#fff",
              color: "#1d4ed8",
              fontWeight: 700,
              fontFamily: "DM Sans,sans-serif",
              textDecoration: "none",
              fontSize: "1rem",
              boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
              transition: "all 0.25s",
              position: "relative",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "";
              e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.2)";
            }}
          >
            Request NDA &amp; Contract Details <ArrowRight size={16} />
          </a>
        </div>
      </div>

      {/* ── CONTACT ── */}
      <section
        style={{
          padding: "80px 0 100px",
          background:
            "linear-gradient(160deg,#f0f9ff 0%,#e0f2fe 50%,#ede9fe 100%)",
        }}
      >
        <div style={{ maxWidth: 1480, margin: "0 auto", padding: "0 5%" }}>
          <div
            className="reveal"
            style={{
              maxWidth: 680,
              margin: "0 auto 56px",
            }}
          >
            <h2
              style={{
                fontFamily: "Syne,sans-serif",
                fontWeight: 800,
                fontSize: "clamp(1.8rem,3.5vw,2.6rem)",
                color: "var(--ink)",
                marginBottom: 16,
              }}
            >
              Ready to Build Your IoT Solution?
            </h2>
            <p
              style={{
                fontSize: "1.05rem",
                color: "var(--ink-2)",
                lineHeight: 1.75,
              }}
            >
              Speak with our embedded and IoT experts today. We help brands
              build powerful connected systems.
            </p>
          </div>
          <div
            className="reveal"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 16,
              justifyContent: "center",
              marginBottom: 56,
            }}
          >
            <button
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "16px 32px",
                borderRadius: 14,
                border: "none",
                background: "linear-gradient(135deg,#2563eb,#1d4ed8)",
                color: "#fff",
                fontWeight: 700,
                fontSize: "1rem",
                cursor: "pointer",
                boxShadow: "0 8px 24px rgba(37,99,235,0.3)",
                fontFamily: "DM Sans,sans-serif",
                transition: "all 0.25s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "translateY(-2px)")
              }
              onMouseLeave={(e) => (e.currentTarget.style.transform = "")}
            >
              Get a Free Quote <ArrowRight size={16} />
            </button>
            <a
              href="tel:+919766650411"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "16px 32px",
                borderRadius: 14,
                background: "#16a34a",
                color: "#fff",
                fontWeight: 700,
                fontSize: "1rem",
                textDecoration: "none",
                fontFamily: "DM Sans,sans-serif",
                boxShadow: "0 8px 24px rgba(22,163,74,0.3)",
                transition: "all 0.25s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "translateY(-2px)")
              }
              onMouseLeave={(e) => (e.currentTarget.style.transform = "")}
            >
              Call Sales <Phone size={16} />
            </a>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
              gap: 20,
            }}
          >
            {[
              {
                icon: <Phone size={22} color="#2563eb" />,
                title: "Phone Number",
                value: "+91 97666 50411",
              },
              {
                icon: <Mail size={22} color="#2563eb" />,
                title: "Email Address",
                value: "info@albostechnologies.com",
              },
              {
                icon: <MapPin size={22} color="#2563eb" />,
                title: "Office Location",
                value:
                  "Office 78, 5th floor, Kunal Plaza, Pune, Maharashtra 411019",
              },
              {
                icon: <Clock size={22} color="#2563eb" />,
                title: "Office Hours",
                value: "Mon – Sat, 10:00 AM – 7:00 PM",
              },
            ].map((c, i) => (
              <div
                key={i}
                className={`reveal shimmer-card d${i + 1}`}
                style={{
                  background: "rgba(255,255,255,0.9)",
                  border: "1.5px solid rgba(255,255,255,0.8)",
                  borderRadius: 20,
                  padding: "32px 24px",

                  backdropFilter: "blur(12px)",
                  boxShadow: "0 4px 20px rgba(37,99,235,0.08)",
                  transition: "box-shadow 0.2s, transform 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 40px rgba(37,99,235,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "";
                  e.currentTarget.style.boxShadow =
                    "0 4px 20px rgba(37,99,235,0.08)";
                }}
              >
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 14,
                    background: "#dbeafe",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 16px",
                  }}
                >
                  {c.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "Syne,sans-serif",
                    fontWeight: 700,
                    fontSize: "1rem",
                    color: "var(--ink)",
                    marginBottom: 8,
                  }}
                >
                  {c.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.88rem",
                    color: "var(--ink-2)",
                    lineHeight: 1.6,
                  }}
                >
                  {c.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default IoTDevelopmentPage;
