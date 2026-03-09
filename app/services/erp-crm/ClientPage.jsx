"use client";
import Image from "next/image";

// src/pages/services/ErpCrm.jsx
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

/* ─── Keyframes injected once ─────────────────────────────────────── */
const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');

  :root {
    --ink:   #0a0c14;
    --paper: #ffffff;
    --blue:  #1d4ed8;
    --sky:   #dbeafe;
    --gold:  #f59e0b;
    --mid:   #6b7280;
    --line:  #d4cfc5;
  }

  * { box-sizing: border-box; }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(28px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  @keyframes slideRight {
    from { transform: scaleX(0); }
    to   { transform: scaleX(1); }
  }
  @keyframes marquee {
    from { transform: translateX(0); }
    to   { transform: translateX(-50%); }
  }
  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50%       { transform: translateY(-10px) rotate(2deg); }
  }
  @keyframes pulse-ring {
    0%   { transform: scale(1);   opacity: .6; }
    100% { transform: scale(1.8); opacity: 0;  }
  }
  @keyframes countUp {
    from { opacity: 0; transform: translateY(8px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .erp-root {
    font-family: sans-serif;
    background: var(--paper);
    color: var(--ink);
    overflow-x: hidden;
  }

  /* hero */
  .hero-word {
    display: inline-block;
   animation: fadeUp .65s cubic-bezier(.22,1,.36,1) forwards;
  }

  /* animated underline */
  .animated-underline {
    position: relative;
    display: inline-block;
  }
  .animated-underline::after {
    content: '';
    position: absolute;
    bottom: -4px; left: 0; right: 0;
    height: 3px;
    background: var(--blue);
    transform-origin: left;
    transform: scaleX(0);
    animation: slideRight .7s cubic-bezier(.22,1,.36,1) 1.1s forwards;
  }

  /* card hover lift */
  .lift {
    transition: transform .25s cubic-bezier(.22,1,.36,1),
                box-shadow .25s cubic-bezier(.22,1,.36,1),
                border-color .25s;
    cursor: default;
  }
  .lift:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px -10px rgba(29,78,216,.13);
    border-color: var(--blue) !important;
  }

  /* marquee ticker */
  .ticker-wrap { overflow: hidden; }
  .ticker-inner { display: flex; width: max-content; animation: marquee 22s linear infinite; }

  /* floating blob */
  .blob {
    position: absolute;
    border-radius: 50%;
    filter: blur(70px);
    pointer-events: none;
    animation: float 8s ease-in-out infinite;
  }

  /* scroll reveal */
  .reveal {
    opacity: 0;
    transform: translateY(32px);
    transition: opacity .7s cubic-bezier(.22,1,.36,1), transform .7s cubic-bezier(.22,1,.36,1);
  }
  .reveal.visible {
    opacity: 1;
    transform: translateY(0);
  }

  /* number glow */
  .stat-num {
    font-family:   sans-serif;
    font-size: 2.75rem;
    font-weight: 800;
    color: var(--blue);
    line-height: 1;
    animation: countUp .6s ease forwards;
  }

  /* pill badge */
  .badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 5px 14px;
    border-radius: 999px;
    font-size: .78rem;
    font-weight: 500;
    border: 1px solid var(--line);
    background: white;
  }
  .badge-dot {
    width: 6px; height: 6px;
    border-radius: 50%;
    position: relative;
  }
  .badge-dot::after {
    content: '';
    position: absolute;
    inset: -3px;
    border-radius: 50%;
    animation: pulse-ring .9s ease-out infinite;
  }
  .badge-dot.blue   { background: var(--blue); }
  .badge-dot.blue::after   { background: var(--blue); }
  .badge-dot.green  { background: #22c55e; }
  .badge-dot.green::after  { background: #22c55e; }
  .badge-dot.amber  { background: var(--gold); }
  .badge-dot.amber::after  { background: var(--gold); }

  /* cta button */
  .btn-primary {
    position: relative;
    overflow: hidden;
    background: var(--ink);
    color: #fff;
    padding: 14px 30px;
    border-radius: 8px;
    font-family:   sans-serif;
    font-weight: 700;
    font-size: .95rem;
    border: none;
    cursor: pointer;
    transition: transform .2s, box-shadow .2s;
  }
  .btn-primary::before {
    content: '';
    position: absolute;
    inset: 0;
    background: var(--blue);
    transform: translateX(-101%);
    transition: transform .35s cubic-bezier(.22,1,.36,1);
  }
  .btn-primary:hover::before { transform: translateX(0); }
  .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(29,78,216,.35); }
  .btn-primary span { position: relative; z-index: 1; }

  .btn-ghost {
    padding: 14px 30px;
    border-radius: 8px;
    font-family:   sans-serif;
    font-weight: 600;
    font-size: .95rem;
    border: 1.5px solid var(--ink);
    background: transparent;
    cursor: pointer;
    transition: background .2s, color .2s, transform .2s;
    color: var(--ink);
    text-decoration: none;
    display: inline-flex;
    align-items: center;
  }
  .btn-ghost:hover {
    background: var(--ink);
    color: #fff;
    transform: translateY(-2px);
  }

  /* section heading accent */
  .section-label {
    font-family:   sans-serif;
    font-size: .72rem;
    font-weight: 700;
    letter-spacing: .14em;
    text-transform: uppercase;
    color: var(--blue);
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 12px;
  }
  .section-label::before {
    content: '';
    display: block;
    width: 24px; height: 2px;
    background: var(--blue);
  }

  .divider {
    height: 1px;
    background: var(--line);
    margin: 0;
  }
`;

/* ─── helpers ──────────────────────────────────────────────────────── */
function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          obs.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

/* ─── sub-components ───────────────────────────────────────────────── */
function FeatureCard({ title, body, icon, delay = 0 }) {
  const ref = useReveal();
  return (
    <article
      ref={ref}
      className="reveal lift"
      style={{
        padding: "24px",
        border: "1px solid var(--line)",
        borderRadius: "12px",
        background: "#fff",
        transitionDelay: `${delay}ms`,
      }}
    >
      <div style={{ fontSize: "1.6rem", marginBottom: "10px" }}>{icon}</div>
      <h4
        style={{
          fontFamily: " sans-serif",
          fontWeight: 700,
          fontSize: "1rem",
          marginBottom: "8px",
        }}
      >
        {title}
      </h4>
      <p style={{ fontSize: ".875rem", color: "var(--mid)", lineHeight: 1.6 }}>
        {body}
      </p>
    </article>
  );
}

function StatCard({ num, label, delay = 0 }) {
  const ref = useReveal();
  return (
    <div
      ref={ref}
      className="reveal"
      style={{
        transitionDelay: `${delay}ms`,
        textAlign: "center",
        padding: "28px 16px",
      }}
    >
      <div className="stat-num">{num}</div>
      <div
        style={{
          fontSize: ".82rem",
          color: "var(--mid)",
          marginTop: "6px",
          fontWeight: 500,
        }}
      >
        {label}
      </div>
    </div>
  );
}

/* ─── main page ────────────────────────────────────────────────────── */
export default function ErpCrm() {
  const heroRef = useReveal();
  const overviewRef = useReveal();
  const techRef = useReveal();
  const usecaseRef = useReveal();
  const ctaRef = useReveal();

  const [hoverCta, setHoverCta] = useState(false);

  const tickerItems = [
    "Inventory Management",
    "Sales Pipeline",
    "Finance & AR/AP",
    "CRM Automation",
    "Role-Based Dashboards",
    "Recurring Billing",
    "Multi-Warehouse",
    "Webhooks & APIs",
    "Custom Reports",
  ];

  return (
    <>
      <style>{STYLES}</style>
      <main className="erp-root" style={{ minHeight: "100vh" }}>
        {/* ── Hero ───────────────────────────────────────────────── */}
        <section
          style={{
            position: "relative",
            padding: "90px 24px 72px",
            overflow: "hidden",
          }}
        >
          {/* blobs */}
          <div
            className="blob"
            style={{
              width: 420,
              height: 420,
              background: "rgba(29,78,216,.07)",
              top: -80,
              right: -80,
              animationDelay: "0s",
            }}
          />
          <div
            className="blob"
            style={{
              width: 260,
              height: 260,
              background: "rgba(232,200,74,.10)",
              bottom: 0,
              left: "10%",
              animationDelay: "3s",
            }}
          />

          <div
            style={{ maxWidth: 1380, margin: "0 auto", position: "relative" }}
          >
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
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 8,
                marginBottom: 24,
                opacity: 0,
                animation: "fadeIn .5s .2s forwards",
              }}
            >
              <span className="badge">
                <span className="badge-dot blue" />
                <span>Enterprise</span>
              </span>
              <span className="badge">
                <span className="badge-dot green" />
                <span>Automation</span>
              </span>
              <span className="badge">
                <span className="badge-dot amber" />
                <span>SaaS & On-prem</span>
              </span>
            </div>

            <h1
              style={{
                fontFamily: "  sans-serif",
                fontSize: "clamp(2.6rem, 6vw, 5rem)",
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: "-.03em",
                marginBottom: 24,
              }}
            >
              {["ERP", "&"].map((w, i) => (
                <React.Fragment key={i}>
                  {i === 2 ? (
                    <span
                      className="hero-word animated-underline"
                      style={{ animationDelay: `${0.35 + i * 0.11}s` }}
                    >
                      {w}
                    </span>
                  ) : (
                    <span
                      className="hero-word"
                      style={{ animationDelay: `${0.35 + i * 0.11}s` }}
                    >
                      {w}
                    </span>
                  )}
                  {i < 3 ? " " : ""}
                </React.Fragment>
              ))}
            </h1>

            <h1
              className=""
              style={{
                fontFamily: "  sans-serif",
                fontSize: "clamp(2.6rem, 6vw, 5rem)",
                fontWeight: 800,

                lineHeight: 1.05,
                letterSpacing: "-.03em",
                marginBottom: 24,
              }}
            >
              {["CRM", "Systems"].map((w, i) => (
                <React.Fragment key={i}>
                  {i === 0 ? (
                    <span
                      className="hero-word grad-text animated-underline "
                      style={{ animationDelay: `${0.35 + i * 0.11}s` }}
                    >
                      {w}
                    </span>
                  ) : (
                    <span
                      className="hero-word grad-text"
                      style={{ animationDelay: `${0.35 + i * 0.11}s` }}
                    >
                      {w}
                    </span>
                  )}
                  {i < 3 ? " " : ""}
                </React.Fragment>
              ))}
            </h1>
            <p
              style={{
                maxWidth: 600,
                fontSize: "1.05rem",
                color: "var(--mid)",
                lineHeight: 1.7,
                opacity: 0,
                animation: "fadeUp .7s .85s forwards",
              }}
            >
              Custom enterprise platforms, workflow automation, role-based
              dashboards and CRM flows tailored to your business processes.
              Systems that reduce manual work, improve visibility, and scale
              with your organization.
            </p>
          </div>
        </section>

        {/* ── Ticker ─────────────────────────────────────────────── */}
        <div
          style={{
            borderTop: "1px solid var(--line)",
            borderBottom: "1px solid var(--line)",
            padding: "14px 0",
            // background: "var(--ink)",
            overflow: "hidden",
          }}
        >
          <div className="ticker-wrap">
            <div className="ticker-inner">
              {[...tickerItems, ...tickerItems].map((t, i) => (
                <span
                  key={i}
                  style={{
                    padding: "0 32px",
                    fontSize: ".82rem",
                    fontWeight: 500,
                    color: "rgb(5, 5, 5)",
                    whiteSpace: "nowrap",
                    letterSpacing: ".06em",
                    textTransform: "uppercase",
                  }}
                >
                  {t}{" "}
                  <span style={{ color: "var(--blue)", margin: "0 8px" }}>
                    ✦
                  </span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ── Stats ──────────────────────────────────────────────── */}
        <section
          style={{ marginTop: "30px", padding: "0 24px", background: "white" }}
        >
          <div
            style={{
              maxWidth: 1380,
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
              borderLeft: "1px solid var(--line)",
            }}
          >
            {[
              { num: "50+", label: "Modules delivered" },
              { num: "4–8w", label: "MVP timeline" },
              { num: "99.5%", label: "Uptime SLA" },
              { num: "24/7", label: "Support coverage" },
            ].map((s, i) => (
              <div
                key={i}
                style={{
                  borderRight: "1px solid var(--line)",
                  borderTop: "1px solid var(--line)",
                  borderBottom: "1px solid var(--line)",
                }}
              >
                <StatCard num={s.num} label={s.label} delay={i * 80} />
              </div>
            ))}
          </div>
        </section>

        <div style={{ padding: "0 24px" }}>
          <div className="divider" />
        </div>

        {/* ── Overview ───────────────────────────────────────────── */}
        <section
          ref={overviewRef}
          style={{ padding: "72px 24px" }}
          className="reveal"
        >
          <div style={{ maxWidth: 1380, margin: "0 auto" }}>
            <div className="section-label">What we build</div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: 20,
              }}
            >
              {/* deliverables */}
              <div
                style={{
                  borderRadius: 14,
                  padding: 30,
                  background: "var(--ink)",
                  color: "#fff",
                }}
              >
                <h2
                  style={{
                    fontFamily: " sans-serif",
                    fontWeight: 700,
                    fontSize: "1.15rem",
                    marginBottom: 20,
                  }}
                >
                  What we deliver
                </h2>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: 14,
                  }}
                >
                  {[
                    "End-to-end ERP modules: Inventory, Sales, Finance, HR",
                    "Custom CRM flows: lead capture, scoring, pipeline analytics",
                    "Role-based dashboards & permissioning",
                    "Integrations: payments, accounting, shipping, 3rd-party APIs",
                  ].map((item, i) => (
                    <li
                      key={i}
                      style={{
                        display: "flex",
                        gap: 12,
                        fontSize: ".9rem",
                        color: "rgba(255,255,255,.75)",
                        lineHeight: 1.5,
                      }}
                    >
                      <span
                        style={{
                          color: "var(--blue)",
                          fontWeight: 700,
                          marginTop: 1,
                        }}
                      >
                        →
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* engagement */}
              <div
                style={{
                  borderRadius: 14,
                  padding: 30,
                  border: "1px solid var(--line)",
                  background: "#fff",
                }}
              >
                <h2
                  style={{
                    fontFamily: " sans-serif",
                    fontWeight: 700,
                    fontSize: "1.15rem",
                    marginBottom: 8,
                  }}
                >
                  Engagement models
                </h2>
                <p
                  style={{
                    fontSize: ".85rem",
                    color: "var(--mid)",
                    marginBottom: 20,
                    lineHeight: 1.6,
                  }}
                >
                  Fixed-scope MVP, iterative product development, or a dedicated
                  team for long-term evolution.
                </p>
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 10 }}
                >
                  {[
                    { label: "MVP Build", time: "4–8 weeks", w: "40%" },
                    { label: "Product", time: "3–6 months", w: "70%" },
                    { label: "Dedicated Team", time: "Ongoing", w: "100%" },
                  ].map(({ label, time, w }, i) => (
                    <div key={i}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          marginBottom: 5,
                        }}
                      >
                        <span style={{ fontSize: ".85rem", fontWeight: 600 }}>
                          {label}
                        </span>
                        <span
                          style={{ fontSize: ".75rem", color: "var(--mid)" }}
                        >
                          {time}
                        </span>
                      </div>
                      <div
                        style={{
                          height: 5,
                          background: "var(--sky)",
                          borderRadius: 9,
                        }}
                      >
                        <div
                          style={{
                            height: "100%",
                            width: w,
                            borderRadius: 9,
                            background: "var(--blue)",
                            transition: "width .8s cubic-bezier(.22,1,.36,1)",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <div style={{ padding: "0 24px" }}>
          <div className="divider" />
        </div>

        {/* ── Features ───────────────────────────────────────────── */}
        <section style={{ padding: "72px 24px" }}>
          <div style={{ maxWidth: 1380, margin: "0 auto" }}>
            <div className="section-label">Key Features</div>
            <h2
              style={{
                fontFamily: " sans-serif",
                fontWeight: 800,
                fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
                marginBottom: 36,
                letterSpacing: "-.02em",
              }}
            >
              Everything your operations need
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: 16,
              }}
            >
              {[
                {
                  icon: "📦",
                  title: "Inventory & Warehouse",
                  body: "Stock control, multi-warehouse, batch & lot tracking, reorder automation.",
                  delay: 0,
                },
                {
                  icon: "🛒",
                  title: "Sales & Orders",
                  body: "Quotes, orders, invoicing, recurring billing and multi-currency support.",
                  delay: 80,
                },
                {
                  icon: "💰",
                  title: "Finance & Accounting",
                  body: "Ledger, AR/AP workflows, automated reconciliation and accounting exports.",
                  delay: 160,
                },
                {
                  icon: "🤝",
                  title: "CRM & Sales Pipeline",
                  body: "Lead capture, assignment, scoring, activity timeline and email integrations.",
                  delay: 0,
                },
                {
                  icon: "📊",
                  title: "Reports & Analytics",
                  body: "Custom dashboards, KPI tracking, CSV/Excel exports and scheduled reports.",
                  delay: 80,
                },
                {
                  icon: "⚡",
                  title: "Automation & Workflows",
                  body: "Rule-based triggers, approvals, webhooks, and background jobs.",
                  delay: 160,
                },
              ].map((f) => (
                <FeatureCard key={f.title} {...f} />
              ))}
            </div>
          </div>
        </section>

        <div style={{ padding: "0 24px" }}>
          <div className="divider" />
        </div>

        {/* ── Tech stack ─────────────────────────────────────────── */}
        <section
          ref={techRef}
          className="reveal"
          style={{ padding: "72px 24px", background: "white" }}
        >
          <div style={{ maxWidth: 1380, margin: "0 auto" }}>
            <div className="section-label">Tech Stack</div>
            <h2
              style={{
                fontFamily: " sans-serif",
                fontWeight: 800,
                fontSize: "clamp(1.5rem,3vw,2.2rem)",
                marginBottom: 32,
                letterSpacing: "-.02em",
              }}
            >
              Modern, battle-tested tools
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {[
                "React",
                "Node.js / NestJS",
                "PostgreSQL",
                "Redis",
                "Stripe / Razorpay",
                "Zapier / Webhooks",
                "Docker",
                "AWS / GCP",
              ].map((t) => (
                <span
                  key={t}
                  className="lift"
                  style={{
                    padding: "10px 18px",
                    borderRadius: 8,
                    border: "1px solid var(--line)",
                    background: "var(--paper)",
                    fontSize: ".875rem",
                    fontWeight: 500,
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>

        <div style={{ padding: "0 24px" }}>
          <div className="divider" />
        </div>

        {/* ── Who benefits ───────────────────────────────────────── */}
        <section
          ref={usecaseRef}
          className="reveal"
          style={{ padding: "72px 24px" }}
        >
          <div style={{ maxWidth: 1380, margin: "0 auto" }}>
            <div className="section-label">Who benefits</div>
            <h2
              style={{
                fontFamily: " sans-serif",
                fontWeight: 800,
                fontSize: "clamp(1.5rem,3vw,2.2rem)",
                marginBottom: 32,
                letterSpacing: "-.02em",
              }}
            >
              Built for operators, not just developers
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: 16,
              }}
            >
              {[
                {
                  icon: "🏭",
                  title: "Manufacturing & Distribution",
                  desc: "Track production, stock & procurement in one place.",
                },
                {
                  icon: "🛍️",
                  title: "Retail & eCommerce",
                  desc: "Sync inventory, orders and customer data across channels.",
                },
                {
                  icon: "🔧",
                  title: "Service & Field Ops",
                  desc: "Schedule, quote, invoice and manage service delivery.",
                },
              ].map(({ icon, title, desc }) => (
                <div
                  key={title}
                  className="lift"
                  style={{
                    padding: "24px",
                    borderRadius: 12,
                    border: "1px solid var(--line)",
                    background: "#fff",
                  }}
                >
                  <div style={{ fontSize: "1.8rem", marginBottom: 12 }}>
                    {icon}
                  </div>
                  <div
                    style={{
                      fontFamily: " sans-serif",
                      fontWeight: 700,
                      fontSize: ".95rem",
                      marginBottom: 6,
                    }}
                  >
                    {title}
                  </div>
                  <div
                    style={{
                      fontSize: ".85rem",
                      color: "var(--mid)",
                      lineHeight: 1.6,
                    }}
                  >
                    {desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ────────────────────────────────────────────────── */}
        <section
          ref={ctaRef}
          className="reveal"
          style={{ padding: "0 24px 80px" }}
        >
          <div style={{ maxWidth: 1380, margin: "0 auto" }}>
            <div
              style={{
                borderRadius: 16,
                padding: "52px 40px",
                background: "var(--ink)",
                color: "#fff",
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 28,
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                className="blob"
                style={{
                  width: 300,
                  height: 300,
                  background: "rgba(29,78,216,.2)",
                  top: -80,
                  right: -40,
                  animationDelay: "1s",
                }}
              />
              <div style={{ position: "relative" }}>
                <div
                  style={{
                    fontFamily: " sans-serif",
                    fontSize: "1.6rem",
                    fontWeight: 800,
                    marginBottom: 8,
                  }}
                >
                  Ready to streamline operations?
                </div>
                <p
                  style={{
                    fontSize: ".9rem",
                    color: "rgba(255,255,255,.6)",
                    maxWidth: 420,
                    lineHeight: 1.6,
                  }}
                >
                  Book a quick discovery call and we'll sketch an ERP/CRM plan
                  tailored to your processes.
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: 12,
                  position: "relative",
                  flexWrap: "wrap",
                }}
              >
                <button className="btn-primary">
                  <span>Get a Quote ↗</span>
                </button>
                <a
                  href="tel:+919766650411"
                  className="btn-ghost"
                  style={{ color: "#fff", borderColor: "rgba(255,255,255,.3)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                  }}
                >
                  📞 Call Sales
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
