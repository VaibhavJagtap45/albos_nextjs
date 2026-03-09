// "use client";
// import Image from "next/image";

// // src/pages/services/ErpCrm.jsx
// import React, { useEffect, useRef, useState } from "react";
// import Link from "next/link";

// /* ─── Keyframes injected once ─────────────────────────────────────── */
// const STYLES = `
//   @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');

//   :root {
//     --ink:   #0a0c14;
//     --paper: #ffffff;
//     --blue:  #1d4ed8;
//     --sky:   #dbeafe;
//     --gold:  #f59e0b;
//     --mid:   #6b7280;
//     --line:  #d4cfc5;
//   }

//   * { box-sizing: border-box; }

//   @keyframes fadeUp {
//     from { opacity: 0; transform: translateY(28px); }
//     to   { opacity: 1; transform: translateY(0); }
//   }
//   @keyframes fadeIn {
//     from { opacity: 0; }
//     to   { opacity: 1; }
//   }
//   @keyframes slideRight {
//     from { transform: scaleX(0); }
//     to   { transform: scaleX(1); }
//   }
//   @keyframes marquee {
//     from { transform: translateX(0); }
//     to   { transform: translateX(-50%); }
//   }
//   @keyframes float {
//     0%, 100% { transform: translateY(0px) rotate(0deg); }
//     50%       { transform: translateY(-10px) rotate(2deg); }
//   }
//   @keyframes pulse-ring {
//     0%   { transform: scale(1);   opacity: .6; }
//     100% { transform: scale(1.8); opacity: 0;  }
//   }
//   @keyframes countUp {
//     from { opacity: 0; transform: translateY(8px); }
//     to   { opacity: 1; transform: translateY(0); }
//   }

//   .erp-root {
//     font-family: sans-serif;
//     background: var(--paper);
//     color: var(--ink);
//     overflow-x: hidden;
//   }

//   /* hero */
//   .hero-word {
//     display: inline-block;
//    animation: fadeUp .65s cubic-bezier(.22,1,.36,1) forwards;
//   }

//   /* animated underline */
//   .animated-underline {
//     position: relative;
//     display: inline-block;
//   }
//   .animated-underline::after {
//     content: '';
//     position: absolute;
//     bottom: -4px; left: 0; right: 0;
//     height: 3px;
//     background: var(--blue);
//     transform-origin: left;
//     transform: scaleX(0);
//     animation: slideRight .7s cubic-bezier(.22,1,.36,1) 1.1s forwards;
//   }

//   /* card hover lift */
//   .lift {
//     transition: transform .25s cubic-bezier(.22,1,.36,1),
//                 box-shadow .25s cubic-bezier(.22,1,.36,1),
//                 border-color .25s;
//     cursor: default;
//   }
//   .lift:hover {
//     transform: translateY(-5px);
//     box-shadow: 0 20px 40px -10px rgba(29,78,216,.13);
//     border-color: var(--blue) !important;
//   }

//   /* marquee ticker */
//   .ticker-wrap { overflow: hidden; }
//   .ticker-inner { display: flex; width: max-content; animation: marquee 22s linear infinite; }

//   /* floating blob */
//   .blob {
//     position: absolute;
//     border-radius: 50%;
//     filter: blur(70px);
//     pointer-events: none;
//     animation: float 8s ease-in-out infinite;
//   }

//   /* scroll reveal */
//   .reveal {
//     opacity: 0;
//     transform: translateY(32px);
//     transition: opacity .7s cubic-bezier(.22,1,.36,1), transform .7s cubic-bezier(.22,1,.36,1);
//   }
//   .reveal.visible {
//     opacity: 1;
//     transform: translateY(0);
//   }

//   /* number glow */
//   .stat-num {
//     font-family:   sans-serif;
//     font-size: 2.75rem;
//     font-weight: 800;
//     color: var(--blue);
//     line-height: 1;
//     animation: countUp .6s ease forwards;
//   }

//   /* pill badge */
//   .badge {
//     display: inline-flex;
//     align-items: center;
//     gap: 6px;
//     padding: 5px 14px;
//     border-radius: 999px;
//     font-size: .78rem;
//     font-weight: 500;
//     border: 1px solid var(--line);
//     background: white;
//   }
//   .badge-dot {
//     width: 6px; height: 6px;
//     border-radius: 50%;
//     position: relative;
//   }
//   .badge-dot::after {
//     content: '';
//     position: absolute;
//     inset: -3px;
//     border-radius: 50%;
//     animation: pulse-ring .9s ease-out infinite;
//   }
//   .badge-dot.blue   { background: var(--blue); }
//   .badge-dot.blue::after   { background: var(--blue); }
//   .badge-dot.green  { background: #22c55e; }
//   .badge-dot.green::after  { background: #22c55e; }
//   .badge-dot.amber  { background: var(--gold); }
//   .badge-dot.amber::after  { background: var(--gold); }

//   /* cta button */
//   .btn-primary {
//     position: relative;
//     overflow: hidden;
//     background: var(--ink);
//     color: #fff;
//     padding: 14px 30px;
//     border-radius: 8px;
//     font-family:   sans-serif;
//     font-weight: 700;
//     font-size: .95rem;
//     border: none;
//     cursor: pointer;
//     transition: transform .2s, box-shadow .2s;
//   }
//   .btn-primary::before {
//     content: '';
//     position: absolute;
//     inset: 0;
//     background: var(--blue);
//     transform: translateX(-101%);
//     transition: transform .35s cubic-bezier(.22,1,.36,1);
//   }
//   .btn-primary:hover::before { transform: translateX(0); }
//   .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(29,78,216,.35); }
//   .btn-primary span { position: relative; z-index: 1; }

//   .btn-ghost {
//     padding: 14px 30px;
//     border-radius: 8px;
//     font-family:   sans-serif;
//     font-weight: 600;
//     font-size: .95rem;
//     border: 1.5px solid var(--ink);
//     background: transparent;
//     cursor: pointer;
//     transition: background .2s, color .2s, transform .2s;
//     color: var(--ink);
//     text-decoration: none;
//     display: inline-flex;
//     align-items: center;
//   }
//   .btn-ghost:hover {
//     background: var(--ink);
//     color: #fff;
//     transform: translateY(-2px);
//   }

//   /* section heading accent */
//   .section-label {
//     font-family:   sans-serif;
//     font-size: .72rem;
//     font-weight: 700;
//     letter-spacing: .14em;
//     text-transform: uppercase;
//     color: var(--blue);
//     display: flex;
//     align-items: center;
//     gap: 10px;
//     margin-bottom: 12px;
//   }
//   .section-label::before {
//     content: '';
//     display: block;
//     width: 24px; height: 2px;
//     background: var(--blue);
//   }

//   .divider {
//     height: 1px;
//     background: var(--line);
//     margin: 0;
//   }
// `;

// /* ─── helpers ──────────────────────────────────────────────────────── */
// function useReveal() {
//   const ref = useRef(null);
//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;
//     const obs = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           el.classList.add("visible");
//           obs.disconnect();
//         }
//       },
//       { threshold: 0.12 },
//     );
//     obs.observe(el);
//     return () => obs.disconnect();
//   }, []);
//   return ref;
// }

// /* ─── sub-components ───────────────────────────────────────────────── */
// function FeatureCard({ title, body, icon, delay = 0 }) {
//   const ref = useReveal();
//   return (
//     <article
//       ref={ref}
//       className="reveal lift"
//       style={{
//         padding: "24px",
//         border: "1px solid var(--line)",
//         borderRadius: "12px",
//         background: "#fff",
//         transitionDelay: `${delay}ms`,
//       }}
//     >
//       <div style={{ fontSize: "1.6rem", marginBottom: "10px" }}>{icon}</div>
//       <h4
//         style={{
//           fontFamily: " sans-serif",
//           fontWeight: 700,
//           fontSize: "1rem",
//           marginBottom: "8px",
//         }}
//       >
//         {title}
//       </h4>
//       <p style={{ fontSize: ".875rem", color: "var(--mid)", lineHeight: 1.6 }}>
//         {body}
//       </p>
//     </article>
//   );
// }

// function StatCard({ num, label, delay = 0 }) {
//   const ref = useReveal();
//   return (
//     <div
//       ref={ref}
//       className="reveal"
//       style={{
//         transitionDelay: `${delay}ms`,
//         textAlign: "center",
//         padding: "28px 16px",
//       }}
//     >
//       <div className="stat-num">{num}</div>
//       <div
//         style={{
//           fontSize: ".82rem",
//           color: "var(--mid)",
//           marginTop: "6px",
//           fontWeight: 500,
//         }}
//       >
//         {label}
//       </div>
//     </div>
//   );
// }

// /* ─── main page ────────────────────────────────────────────────────── */
// export default function ErpCrm() {
//   const heroRef = useReveal();
//   const overviewRef = useReveal();
//   const techRef = useReveal();
//   const usecaseRef = useReveal();
//   const ctaRef = useReveal();

//   const [hoverCta, setHoverCta] = useState(false);

//   const tickerItems = [
//     "Inventory Management",
//     "Sales Pipeline",
//     "Finance & AR/AP",
//     "CRM Automation",
//     "Role-Based Dashboards",
//     "Recurring Billing",
//     "Multi-Warehouse",
//     "Webhooks & APIs",
//     "Custom Reports",
//   ];

//   return (
//     <>
//       <style>{STYLES}</style>
//       <main className="erp-root" style={{ minHeight: "100vh" }}>
//         {/* ── Hero ───────────────────────────────────────────────── */}
//         <section
//           style={{
//             position: "relative",
//             padding: "90px 24px 72px",
//             overflow: "hidden",
//           }}
//         >
//           {/* blobs */}
//           <div
//             className="blob"
//             style={{
//               width: 420,
//               height: 420,
//               background: "rgba(29,78,216,.07)",
//               top: -80,
//               right: -80,
//               animationDelay: "0s",
//             }}
//           />
//           <div
//             className="blob"
//             style={{
//               width: 260,
//               height: 260,
//               background: "rgba(232,200,74,.10)",
//               bottom: 0,
//               left: "10%",
//               animationDelay: "3s",
//             }}
//           />

//           <div
//             style={{ maxWidth: 1380, margin: "0 auto", position: "relative" }}
//           >
//             <style>{`
//   /* ── Gradient Text ── */
// .grad-text {
// background: linear-gradient(135deg,#1d4ed8 0%,#3b82f6 50%,#60a5fa 100%);
// background-size:200% auto;
// -webkit-background-clip:text;
// -webkit-text-fill-color:transparent;
// background-clip:text;
// animation: pan-grad 5s ease infinite;
// `}</style>
//             <div
//               style={{
//                 display: "flex",
//                 flexWrap: "wrap",
//                 gap: 8,
//                 marginBottom: 24,
//                 opacity: 0,
//                 animation: "fadeIn .5s .2s forwards",
//               }}
//             >
//               <span className="badge">
//                 <span className="badge-dot blue" />
//                 <span>Enterprise</span>
//               </span>
//               <span className="badge">
//                 <span className="badge-dot green" />
//                 <span>Automation</span>
//               </span>
//               <span className="badge">
//                 <span className="badge-dot amber" />
//                 <span>SaaS & On-prem</span>
//               </span>
//             </div>

//             <h1
//               style={{
//                 fontFamily: "  sans-serif",
//                 fontSize: "clamp(2.6rem, 6vw, 5rem)",
//                 fontWeight: 800,
//                 lineHeight: 1.05,
//                 letterSpacing: "-.03em",
//                 marginBottom: 24,
//               }}
//             >
//               {["ERP", "&"].map((w, i) => (
//                 <React.Fragment key={i}>
//                   {i === 2 ? (
//                     <span
//                       className="hero-word animated-underline"
//                       style={{ animationDelay: `${0.35 + i * 0.11}s` }}
//                     >
//                       {w}
//                     </span>
//                   ) : (
//                     <span
//                       className="hero-word"
//                       style={{ animationDelay: `${0.35 + i * 0.11}s` }}
//                     >
//                       {w}
//                     </span>
//                   )}
//                   {i < 3 ? " " : ""}
//                 </React.Fragment>
//               ))}
//             </h1>

//             <h1
//               className=""
//               style={{
//                 fontFamily: "  sans-serif",
//                 fontSize: "clamp(2.6rem, 6vw, 5rem)",
//                 fontWeight: 800,

//                 lineHeight: 1.05,
//                 letterSpacing: "-.03em",
//                 marginBottom: 24,
//               }}
//             >
//               {["CRM", "Systems"].map((w, i) => (
//                 <React.Fragment key={i}>
//                   {i === 0 ? (
//                     <span
//                       className="hero-word grad-text animated-underline "
//                       style={{ animationDelay: `${0.35 + i * 0.11}s` }}
//                     >
//                       {w}
//                     </span>
//                   ) : (
//                     <span
//                       className="hero-word grad-text"
//                       style={{ animationDelay: `${0.35 + i * 0.11}s` }}
//                     >
//                       {w}
//                     </span>
//                   )}
//                   {i < 3 ? " " : ""}
//                 </React.Fragment>
//               ))}
//             </h1>
//             <p
//               style={{
//                 maxWidth: 600,
//                 fontSize: "1.05rem",
//                 color: "var(--mid)",
//                 lineHeight: 1.7,
//                 opacity: 0,
//                 animation: "fadeUp .7s .85s forwards",
//               }}
//             >
//               Custom enterprise platforms, workflow automation, role-based
//               dashboards and CRM flows tailored to your business processes.
//               Systems that reduce manual work, improve visibility, and scale
//               with your organization.
//             </p>
//           </div>
//         </section>

//         {/* ── Ticker ─────────────────────────────────────────────── */}
//         <div
//           style={{
//             borderTop: "1px solid var(--line)",
//             borderBottom: "1px solid var(--line)",
//             padding: "14px 0",
//             // background: "var(--ink)",
//             overflow: "hidden",
//           }}
//         >
//           <div className="ticker-wrap">
//             <div className="ticker-inner">
//               {[...tickerItems, ...tickerItems].map((t, i) => (
//                 <span
//                   key={i}
//                   style={{
//                     padding: "0 32px",
//                     fontSize: ".82rem",
//                     fontWeight: 500,
//                     color: "rgb(5, 5, 5)",
//                     whiteSpace: "nowrap",
//                     letterSpacing: ".06em",
//                     textTransform: "uppercase",
//                   }}
//                 >
//                   {t}{" "}
//                   <span style={{ color: "var(--blue)", margin: "0 8px" }}>
//                     ✦
//                   </span>
//                 </span>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* ── Stats ──────────────────────────────────────────────── */}
//         <section
//           style={{ marginTop: "30px", padding: "0 24px", background: "white" }}
//         >
//           <div
//             style={{
//               maxWidth: 1380,
//               margin: "0 auto",
//               display: "grid",
//               gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
//               borderLeft: "1px solid var(--line)",
//             }}
//           >
//             {[
//               { num: "50+", label: "Modules delivered" },
//               { num: "4–8w", label: "MVP timeline" },
//               { num: "99.5%", label: "Uptime SLA" },
//               { num: "24/7", label: "Support coverage" },
//             ].map((s, i) => (
//               <div
//                 key={i}
//                 style={{
//                   borderRight: "1px solid var(--line)",
//                   borderTop: "1px solid var(--line)",
//                   borderBottom: "1px solid var(--line)",
//                 }}
//               >
//                 <StatCard num={s.num} label={s.label} delay={i * 80} />
//               </div>
//             ))}
//           </div>
//         </section>

//         <div style={{ padding: "0 24px" }}>
//           <div className="divider" />
//         </div>

//         {/* ── Overview ───────────────────────────────────────────── */}
//         <section
//           ref={overviewRef}
//           style={{ padding: "72px 24px" }}
//           className="reveal"
//         >
//           <div style={{ maxWidth: 1380, margin: "0 auto" }}>
//             <div className="section-label">What we build</div>
//             <div
//               style={{
//                 display: "grid",
//                 gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
//                 gap: 20,
//               }}
//             >
//               {/* deliverables */}
//               <div
//                 style={{
//                   borderRadius: 14,
//                   padding: 30,
//                   background: "var(--ink)",
//                   color: "#fff",
//                 }}
//               >
//                 <h2
//                   style={{
//                     fontFamily: " sans-serif",
//                     fontWeight: 700,
//                     fontSize: "1.15rem",
//                     marginBottom: 20,
//                   }}
//                 >
//                   What we deliver
//                 </h2>
//                 <ul
//                   style={{
//                     listStyle: "none",
//                     padding: 0,
//                     margin: 0,
//                     display: "flex",
//                     flexDirection: "column",
//                     gap: 14,
//                   }}
//                 >
//                   {[
//                     "End-to-end ERP modules: Inventory, Sales, Finance, HR",
//                     "Custom CRM flows: lead capture, scoring, pipeline analytics",
//                     "Role-based dashboards & permissioning",
//                     "Integrations: payments, accounting, shipping, 3rd-party APIs",
//                   ].map((item, i) => (
//                     <li
//                       key={i}
//                       style={{
//                         display: "flex",
//                         gap: 12,
//                         fontSize: ".9rem",
//                         color: "rgba(255,255,255,.75)",
//                         lineHeight: 1.5,
//                       }}
//                     >
//                       <span
//                         style={{
//                           color: "var(--blue)",
//                           fontWeight: 700,
//                           marginTop: 1,
//                         }}
//                       >
//                         →
//                       </span>
//                       <span>{item}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               {/* engagement */}
//               <div
//                 style={{
//                   borderRadius: 14,
//                   padding: 30,
//                   border: "1px solid var(--line)",
//                   background: "#fff",
//                 }}
//               >
//                 <h2
//                   style={{
//                     fontFamily: " sans-serif",
//                     fontWeight: 700,
//                     fontSize: "1.15rem",
//                     marginBottom: 8,
//                   }}
//                 >
//                   Engagement models
//                 </h2>
//                 <p
//                   style={{
//                     fontSize: ".85rem",
//                     color: "var(--mid)",
//                     marginBottom: 20,
//                     lineHeight: 1.6,
//                   }}
//                 >
//                   Fixed-scope MVP, iterative product development, or a dedicated
//                   team for long-term evolution.
//                 </p>
//                 <div
//                   style={{ display: "flex", flexDirection: "column", gap: 10 }}
//                 >
//                   {[
//                     { label: "MVP Build", time: "4–8 weeks", w: "40%" },
//                     { label: "Product", time: "3–6 months", w: "70%" },
//                     { label: "Dedicated Team", time: "Ongoing", w: "100%" },
//                   ].map(({ label, time, w }, i) => (
//                     <div key={i}>
//                       <div
//                         style={{
//                           display: "flex",
//                           justifyContent: "space-between",
//                           marginBottom: 5,
//                         }}
//                       >
//                         <span style={{ fontSize: ".85rem", fontWeight: 600 }}>
//                           {label}
//                         </span>
//                         <span
//                           style={{ fontSize: ".75rem", color: "var(--mid)" }}
//                         >
//                           {time}
//                         </span>
//                       </div>
//                       <div
//                         style={{
//                           height: 5,
//                           background: "var(--sky)",
//                           borderRadius: 9,
//                         }}
//                       >
//                         <div
//                           style={{
//                             height: "100%",
//                             width: w,
//                             borderRadius: 9,
//                             background: "var(--blue)",
//                             transition: "width .8s cubic-bezier(.22,1,.36,1)",
//                           }}
//                         />
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         <div style={{ padding: "0 24px" }}>
//           <div className="divider" />
//         </div>

//         {/* ── Features ───────────────────────────────────────────── */}
//         <section style={{ padding: "72px 24px" }}>
//           <div style={{ maxWidth: 1380, margin: "0 auto" }}>
//             <div className="section-label">Key Features</div>
//             <h2
//               style={{
//                 fontFamily: " sans-serif",
//                 fontWeight: 800,
//                 fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
//                 marginBottom: 36,
//                 letterSpacing: "-.02em",
//               }}
//             >
//               Everything your operations need
//             </h2>
//             <div
//               style={{
//                 display: "grid",
//                 gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
//                 gap: 16,
//               }}
//             >
//               {[
//                 {
//                   icon: "📦",
//                   title: "Inventory & Warehouse",
//                   body: "Stock control, multi-warehouse, batch & lot tracking, reorder automation.",
//                   delay: 0,
//                 },
//                 {
//                   icon: "🛒",
//                   title: "Sales & Orders",
//                   body: "Quotes, orders, invoicing, recurring billing and multi-currency support.",
//                   delay: 80,
//                 },
//                 {
//                   icon: "💰",
//                   title: "Finance & Accounting",
//                   body: "Ledger, AR/AP workflows, automated reconciliation and accounting exports.",
//                   delay: 160,
//                 },
//                 {
//                   icon: "🤝",
//                   title: "CRM & Sales Pipeline",
//                   body: "Lead capture, assignment, scoring, activity timeline and email integrations.",
//                   delay: 0,
//                 },
//                 {
//                   icon: "📊",
//                   title: "Reports & Analytics",
//                   body: "Custom dashboards, KPI tracking, CSV/Excel exports and scheduled reports.",
//                   delay: 80,
//                 },
//                 {
//                   icon: "⚡",
//                   title: "Automation & Workflows",
//                   body: "Rule-based triggers, approvals, webhooks, and background jobs.",
//                   delay: 160,
//                 },
//               ].map((f) => (
//                 <FeatureCard key={f.title} {...f} />
//               ))}
//             </div>
//           </div>
//         </section>

//         <div style={{ padding: "0 24px" }}>
//           <div className="divider" />
//         </div>

//         {/* ── Tech stack ─────────────────────────────────────────── */}
//         <section
//           ref={techRef}
//           className="reveal"
//           style={{ padding: "72px 24px", background: "white" }}
//         >
//           <div style={{ maxWidth: 1380, margin: "0 auto" }}>
//             <div className="section-label">Tech Stack</div>
//             <h2
//               style={{
//                 fontFamily: " sans-serif",
//                 fontWeight: 800,
//                 fontSize: "clamp(1.5rem,3vw,2.2rem)",
//                 marginBottom: 32,
//                 letterSpacing: "-.02em",
//               }}
//             >
//               Modern, battle-tested tools
//             </h2>
//             <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
//               {[
//                 "React",
//                 "Node.js / NestJS",
//                 "PostgreSQL",
//                 "Redis",
//                 "Stripe / Razorpay",
//                 "Zapier / Webhooks",
//                 "Docker",
//                 "AWS / GCP",
//               ].map((t) => (
//                 <span
//                   key={t}
//                   className="lift"
//                   style={{
//                     padding: "10px 18px",
//                     borderRadius: 8,
//                     border: "1px solid var(--line)",
//                     background: "var(--paper)",
//                     fontSize: ".875rem",
//                     fontWeight: 500,
//                   }}
//                 >
//                   {t}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </section>

//         <div style={{ padding: "0 24px" }}>
//           <div className="divider" />
//         </div>

//         {/* ── Who benefits ───────────────────────────────────────── */}
//         <section
//           ref={usecaseRef}
//           className="reveal"
//           style={{ padding: "72px 24px" }}
//         >
//           <div style={{ maxWidth: 1380, margin: "0 auto" }}>
//             <div className="section-label">Who benefits</div>
//             <h2
//               style={{
//                 fontFamily: " sans-serif",
//                 fontWeight: 800,
//                 fontSize: "clamp(1.5rem,3vw,2.2rem)",
//                 marginBottom: 32,
//                 letterSpacing: "-.02em",
//               }}
//             >
//               Built for operators, not just developers
//             </h2>
//             <div
//               style={{
//                 display: "grid",
//                 gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
//                 gap: 16,
//               }}
//             >
//               {[
//                 {
//                   icon: "🏭",
//                   title: "Manufacturing & Distribution",
//                   desc: "Track production, stock & procurement in one place.",
//                 },
//                 {
//                   icon: "🛍️",
//                   title: "Retail & eCommerce",
//                   desc: "Sync inventory, orders and customer data across channels.",
//                 },
//                 {
//                   icon: "🔧",
//                   title: "Service & Field Ops",
//                   desc: "Schedule, quote, invoice and manage service delivery.",
//                 },
//               ].map(({ icon, title, desc }) => (
//                 <div
//                   key={title}
//                   className="lift"
//                   style={{
//                     padding: "24px",
//                     borderRadius: 12,
//                     border: "1px solid var(--line)",
//                     background: "#fff",
//                   }}
//                 >
//                   <div style={{ fontSize: "1.8rem", marginBottom: 12 }}>
//                     {icon}
//                   </div>
//                   <div
//                     style={{
//                       fontFamily: " sans-serif",
//                       fontWeight: 700,
//                       fontSize: ".95rem",
//                       marginBottom: 6,
//                     }}
//                   >
//                     {title}
//                   </div>
//                   <div
//                     style={{
//                       fontSize: ".85rem",
//                       color: "var(--mid)",
//                       lineHeight: 1.6,
//                     }}
//                   >
//                     {desc}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* ── CTA ────────────────────────────────────────────────── */}
//         <section
//           ref={ctaRef}
//           className="reveal"
//           style={{ padding: "0 24px 80px" }}
//         >
//           <div style={{ maxWidth: 1380, margin: "0 auto" }}>
//             <div
//               style={{
//                 borderRadius: 16,
//                 padding: "52px 40px",
//                 background: "var(--ink)",
//                 color: "#fff",
//                 display: "flex",
//                 flexWrap: "wrap",
//                 alignItems: "center",
//                 justifyContent: "space-between",
//                 gap: 28,
//                 position: "relative",
//                 overflow: "hidden",
//               }}
//             >
//               <div
//                 className="blob"
//                 style={{
//                   width: 300,
//                   height: 300,
//                   background: "rgba(29,78,216,.2)",
//                   top: -80,
//                   right: -40,
//                   animationDelay: "1s",
//                 }}
//               />
//               <div style={{ position: "relative" }}>
//                 <div
//                   style={{
//                     fontFamily: " sans-serif",
//                     fontSize: "1.6rem",
//                     fontWeight: 800,
//                     marginBottom: 8,
//                   }}
//                 >
//                   Ready to streamline operations?
//                 </div>
//                 <p
//                   style={{
//                     fontSize: ".9rem",
//                     color: "rgba(255,255,255,.6)",
//                     maxWidth: 420,
//                     lineHeight: 1.6,
//                   }}
//                 >
//                   Book a quick discovery call and we'll sketch an ERP/CRM plan
//                   tailored to your processes.
//                 </p>
//               </div>
//               <div
//                 style={{
//                   display: "flex",
//                   gap: 12,
//                   position: "relative",
//                   flexWrap: "wrap",
//                 }}
//               >
//                 <button className="btn-primary">
//                   <span>Get a Quote ↗</span>
//                 </button>
//                 <a
//                   href="tel:+919766650411"
//                   className="btn-ghost"
//                   style={{ color: "#fff", borderColor: "rgba(255,255,255,.3)" }}
//                   onMouseEnter={(e) => {
//                     e.currentTarget.style.background = "rgba(255,255,255,.1)";
//                   }}
//                   onMouseLeave={(e) => {
//                     e.currentTarget.style.background = "transparent";
//                   }}
//                 >
//                   📞 Call Sales
//                 </a>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>
//     </>
//   );
// }

"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useInView,
  AnimatePresence,
} from "framer-motion";

/* ─────────────────────────── DATA ─────────────────────────── */
const features = [
  {
    icon: "📦",
    title: "Inventory & Warehouse",
    body: "Stock control, multi-warehouse, batch & lot tracking, reorder automation and barcode scanning.",
  },
  {
    icon: "🛒",
    title: "Sales & Orders",
    body: "Quotes, orders, invoicing, recurring billing and multi-currency with full audit trail.",
  },
  {
    icon: "💰",
    title: "Finance & Accounting",
    body: "Ledger, AR/AP workflows, automated reconciliation and direct accounting exports.",
  },
  {
    icon: "🤝",
    title: "CRM & Pipeline",
    body: "Lead capture, scoring, assignment, activity timeline and email integrations.",
  },
  {
    icon: "📊",
    title: "Reports & Analytics",
    body: "Custom dashboards, KPI tracking, CSV/Excel exports and scheduled delivery.",
  },
  {
    icon: "⚡",
    title: "Automation & Workflows",
    body: "Rule-based triggers, multi-level approvals, webhooks and background jobs.",
  },
];

const stats = [
  { num: "50+", label: "Modules Delivered" },
  { num: "4–8w", label: "MVP Timeline" },
  { num: "99.5%", label: "Uptime SLA" },
  { num: "24/7", label: "Support Coverage" },
];

const techStack = [
  { name: "React", color: "#61dafb20", border: "#61dafb60" },
  { name: "Node.js / NestJS", color: "#84cc1620", border: "#84cc1660" },
  { name: "PostgreSQL", color: "#336791 20", border: "#33679160" },
  { name: "Redis", color: "#dc382d20", border: "#dc382d60" },
  { name: "Stripe / Razorpay", color: "#635bff20", border: "#635bff60" },
  { name: "Zapier / Webhooks", color: "#ff4a0020", border: "#ff4a0060" },
  { name: "Docker", color: "#2496ed20", border: "#2496ed60" },
  { name: "AWS / GCP", color: "#ff990020", border: "#ff990060" },
];

const industries = [
  {
    icon: "🏭",
    title: "Manufacturing & Distribution",
    desc: "Track production, stock & procurement in one unified platform with real-time visibility.",
  },
  {
    icon: "🛍️",
    title: "Retail & eCommerce",
    desc: "Sync inventory, orders and customer data across every channel automatically.",
  },
  {
    icon: "🔧",
    title: "Service & Field Ops",
    desc: "Schedule, quote, invoice and manage service delivery from a single interface.",
  },
  {
    icon: "🏦",
    title: "Finance & Insurance",
    desc: "Compliance-ready workflows, audit logs, and automated financial reporting.",
  },
];

const process = [
  {
    step: "01",
    icon: "🔍",
    title: "Discovery & Audit",
    desc: "Map your current processes, pain points and integration requirements.",
  },
  {
    step: "02",
    icon: "🗂️",
    title: "Architecture Design",
    desc: "Data model, module plan, role matrix and API contract definition.",
  },
  {
    step: "03",
    icon: "⚙️",
    title: "Agile Build",
    desc: "Sprints with staging demos, feedback loops and continuous QA.",
  },
  {
    step: "04",
    icon: "🚀",
    title: "Deploy & Support",
    desc: "Data migration, team training, go-live and ongoing 24/7 SLA support.",
  },
];

const testimonials = [
  {
    name: "Arjun Sharma",
    role: "COO, LogiPrime",
    text: "They replaced our 3 legacy tools with a single ERP in 6 weeks. Inventory accuracy went from 78% to 99.1%.",
    avatar: "https://i.pravatar.cc/80?img=12",
  },
  {
    name: "Priya Nair",
    role: "Head of Sales, RetailX",
    text: "Our CRM now auto-assigns leads and sends follow-up sequences. Conversion rate up 34% in 3 months.",
    avatar: "https://i.pravatar.cc/80?img=47",
  },
  {
    name: "David Okonkwo",
    role: "CTO, FieldFlow",
    text: "The custom field-ops module handles 2000+ daily jobs. Real-time tracking and invoicing has been a game changer.",
    avatar: "https://i.pravatar.cc/80?img=33",
  },
];

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
  "Real-Time Analytics",
];

/* ─────────────────────────── HERO CANVAS ─────────────────────────── */
function ErpCanvas() {
  const canvasRef = useRef(null);
  const animRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let W, H;

    // Dashboard nodes (ERP modules)
    const nodes = [
      { label: "Inventory", icon: "📦", col: "#3b82f6" },
      { label: "Finance", icon: "💰", col: "#10b981" },
      { label: "CRM", icon: "🤝", col: "#f59e0b" },
      { label: "HR", icon: "👥", col: "#8b5cf6" },
      { label: "Reports", icon: "📊", col: "#ef4444" },
      { label: "Orders", icon: "🛒", col: "#06b6d4" },
    ];

    // State
    let nodePositions = [];
    const particles = [];
    let t = 0;

    function resize() {
      const rect = canvas.parentElement.getBoundingClientRect();
      W = canvas.width = rect.width || 520;
      H = canvas.height = rect.height || 440;
      // Place nodes in a circle + center hub
      const cx = W / 2,
        cy = H / 2;
      const r = Math.min(W, H) * 0.32;
      nodePositions = nodes.map((_, i) => {
        const angle = (i / nodes.length) * Math.PI * 2 - Math.PI / 2;
        return { x: cx + Math.cos(angle) * r, y: cy + Math.sin(angle) * r };
      });
    }

    // Spawn data particle along an edge
    function spawnParticle(fromIdx, toIdx) {
      const from = nodePositions[fromIdx];
      const to = nodePositions[toIdx];
      if (!from || !to) return;
      particles.push({
        fx: from.x,
        fy: from.y,
        tx: to.x,
        ty: to.y,
        p: 0,
        speed: 0.006 + Math.random() * 0.008,
        col: nodes[fromIdx].col,
      });
    }

    let spawnTimer = 0;
    function draw() {
      t += 0.014;
      spawnTimer++;
      if (spawnTimer % 40 === 0) {
        const a = Math.floor(Math.random() * nodes.length);
        let b = Math.floor(Math.random() * nodes.length);
        if (b === a) b = (a + 1) % nodes.length;
        spawnParticle(a, b);
      }

      ctx.clearRect(0, 0, W, H);

      // Background gradient
      const bg = ctx.createLinearGradient(0, 0, W, H);
      bg.addColorStop(0, "#f0f7ff");
      bg.addColorStop(1, "#e8f0fe");
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, W, H);

      // Soft grid
      ctx.save();
      ctx.strokeStyle = "#cbd5e130";
      ctx.lineWidth = 0.6;
      const step = 36;
      for (let x = 0; x < W; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, H);
        ctx.stroke();
      }
      for (let y = 0; y < H; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(W, y);
        ctx.stroke();
      }
      ctx.restore();

      const cx = W / 2,
        cy = H / 2;

      // Center hub glow
      const hubGlow = ctx.createRadialGradient(cx, cy, 0, cx, cy, 56);
      hubGlow.addColorStop(0, "#3b82f628");
      hubGlow.addColorStop(1, "transparent");
      ctx.fillStyle = hubGlow;
      ctx.beginPath();
      ctx.arc(cx, cy, 56, 0, Math.PI * 2);
      ctx.fill();

      // Pulse rings from center
      for (let i = 0; i < 3; i++) {
        const prog = (t * 0.35 + i * 0.33) % 1;
        ctx.save();
        ctx.globalAlpha = (1 - prog) * 0.12;
        ctx.strokeStyle = "#3b82f6";
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.arc(cx, cy, prog * 80, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
      }

      // Draw edges
      nodePositions.forEach((pos, i) => {
        ctx.save();
        ctx.strokeStyle = nodes[i].col + "30";
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 6]);
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(pos.x, pos.y);
        ctx.stroke();
        ctx.restore();
      });

      // Update & draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.p += p.speed;
        if (p.p >= 1) {
          particles.splice(i, 1);
          continue;
        }
        const px = p.fx + (p.tx - p.fx) * p.p;
        const py = p.fy + (p.ty - p.fy) * p.p;
        ctx.save();
        ctx.globalAlpha = 0.85 * (1 - Math.abs(p.p - 0.5) * 1.6);
        const grd = ctx.createRadialGradient(px, py, 0, px, py, 5);
        grd.addColorStop(0, p.col);
        grd.addColorStop(1, p.col + "00");
        ctx.fillStyle = grd;
        ctx.beginPath();
        ctx.arc(px, py, 5, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // Draw node cards
      nodePositions.forEach((pos, i) => {
        const bob = Math.sin(t * 0.7 + i * 1.1) * 3;
        const nd = nodes[i];
        const isHovered = false;

        ctx.save();
        ctx.translate(pos.x, pos.y + bob);

        // Shadow
        ctx.shadowColor = nd.col + "40";
        ctx.shadowBlur = 14;

        // Card bg
        const cw = 80,
          ch = 52;
        ctx.fillStyle = "#fff";
        ctx.strokeStyle = nd.col + "60";
        ctx.lineWidth = 1.5;
        roundRect(ctx, -cw / 2, -ch / 2, cw, ch, 10);
        ctx.fill();
        ctx.stroke();
        ctx.shadowBlur = 0;

        // Color bar
        ctx.fillStyle = nd.col;
        roundRect(ctx, -cw / 2, -ch / 2, cw, 4, [10, 10, 0, 0]);
        ctx.fill();

        // Icon + label
        ctx.font = "14px serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(nd.icon, 0, 2);

        ctx.font = "600 8px 'DM Sans', sans-serif";
        ctx.fillStyle = "#374151";
        ctx.fillText(nd.label, 0, ch / 2 - 8);

        ctx.restore();
      });

      // Center hub
      ctx.save();
      ctx.shadowColor = "#3b82f640";
      ctx.shadowBlur = 18;
      ctx.fillStyle = "#1d4ed8";
      ctx.beginPath();
      ctx.arc(cx, cy, 28, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;
      ctx.font = "18px serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("⚙️", cx, cy);
      ctx.restore();

      // Hub label
      ctx.font = "bold 9px 'DM Sans',sans-serif";
      ctx.fillStyle = "#1d4ed8";
      ctx.textAlign = "center";
      ctx.fillText("ERP Core", cx, cy + 40);

      animRef.current = requestAnimationFrame(draw);
    }

    function roundRect(ctx, x, y, w, h, r) {
      if (typeof r === "number") r = [r, r, r, r];
      ctx.beginPath();
      ctx.moveTo(x + r[0], y);
      ctx.lineTo(x + w - r[1], y);
      ctx.quadraticCurveTo(x + w, y, x + w, y + r[1]);
      ctx.lineTo(x + w, y + h - r[2]);
      ctx.quadraticCurveTo(x + w, y + h, x + w - r[2], y + h);
      ctx.lineTo(x + r[3], y + h);
      ctx.quadraticCurveTo(x, y + h, x, y + h - r[3]);
      ctx.lineTo(x, y + r[0]);
      ctx.quadraticCurveTo(x, y, x + r[0], y);
      ctx.closePath();
    }

    resize();
    draw();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: "100%", height: "100%", display: "block" }}
    />
  );
}

/* ─────────────────────────── HELPERS ─────────────────────────── */
function FadeSection({ children, className = "", delay = 0, style = {} }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-70px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

function TiltCard({ children }) {
  const x = useMotionValue(0),
    y = useMotionValue(0);
  const rotateX = useTransform(y, [-50, 50], [5, -5]);
  const rotateY = useTransform(x, [-50, 50], [-5, 5]);
  return (
    <motion.div
      style={{ rotateX, rotateY }}
      whileHover={{ scale: 1.02, zIndex: 10 }}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        x.set(((e.clientX - r.left) / r.width - 0.5) * 100);
        y.set(((e.clientY - r.top) / r.height - 0.5) * 100);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      transition={{ type: "spring", stiffness: 160, damping: 14 }}
      className="will-change-transform"
    >
      {children}
    </motion.div>
  );
}

function SectionLabel({ children }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        marginBottom: 12,
      }}
    >
      <div
        style={{ width: 24, height: 2, background: "#1d4ed8", borderRadius: 2 }}
      />
      <span
        style={{
          fontFamily: "'DM Sans',sans-serif",
          fontSize: "0.7rem",
          fontWeight: 700,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "#1d4ed8",
        }}
      >
        {children}
      </span>
    </div>
  );
}

/* ─────────────────────────── MAIN PAGE ─────────────────────────── */
export default function ErpCrmEnhanced() {
  const [activeIndustry, setActiveIndustry] = useState(0);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f8fafc",
        color: "#0f172a",
        fontFamily: "'DM Sans', system-ui, sans-serif",
        overflowX: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500;600;700&display=swap');
        .syne { font-family: 'Syne', sans-serif; }
        .grad-text {
          background: linear-gradient(135deg, #1d4ed8 0%, #3b82f6 50%, #60a5fa 100%);
          background-size: 200% auto;
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
          animation: pan-grad 6s ease infinite;
        }
        @keyframes pan-grad { 0%,100%{background-position:0% 50%} 50%{background-position:100% 50%} }
        @keyframes marquee { from{transform:translateX(0)} to{transform:translateX(-50%)} }
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
        @keyframes pulse-ring { 0%{transform:scale(1);opacity:.6} 100%{transform:scale(1.9);opacity:0} }
        .badge-dot { width:7px;height:7px;border-radius:50%;position:relative;display:inline-block; }
        .badge-dot::after { content:'';position:absolute;inset:-3px;border-radius:50%;animation:pulse-ring 1s ease-out infinite; }
        .bd-blue { background:#3b82f6; } .bd-blue::after { background:#3b82f640; }
        .bd-green { background:#22c55e; } .bd-green::after { background:#22c55e40; }
        .bd-amber { background:#f59e0b; } .bd-amber::after { background:#f59e0b40; }
        .lift { transition: transform .22s, box-shadow .22s, border-color .22s; }
        .lift:hover { transform: translateY(-5px); box-shadow: 0 18px 40px -10px #1d4ed820; border-color: #3b82f6 !important; }
        .ticker-wrap { overflow: hidden; }
        .ticker-inner { display:flex; width:max-content; animation: marquee 24s linear infinite; }
        .blob { position:absolute; border-radius:50%; filter:blur(80px); pointer-events:none; }
        .industry-btn { padding: 10px 20px; border-radius: 10px; font-size: 0.85rem; font-weight: 600; border: 1.5px solid #e2e8f0; cursor: pointer; transition: all 0.2s; background: #fff; color: #475569; }
        .industry-btn.active { background: #1d4ed8; color: #fff; border-color: #1d4ed8; box-shadow: 0 4px 14px #1d4ed830; }
        .progress-bar { height: 5px; background: #dbeafe; border-radius: 6px; overflow:hidden; }
        .progress-fill { height: 100%; background: #1d4ed8; border-radius: 6px; transition: width 1s cubic-bezier(.22,1,.36,1); }
        .amber-btn { background:linear-gradient(135deg,#f59e0b,#d97706);color:#fff;font-weight:700;border:none;cursor:pointer;transition:all .2s;font-family:'DM Sans',sans-serif; }
        .amber-btn:hover { transform:translateY(-2px); box-shadow:0 10px 24px #d9770640; }
        .outline-btn { background:#fff;border:1.5px solid #e2e8f0;color:#1d4ed8;font-weight:600;cursor:pointer;transition:all .2s;font-family:'DM Sans',sans-serif; }
        .outline-btn:hover { background:#eff6ff;border-color:#3b82f6; }
        .dark-btn { background:#0f172a;color:#fff;font-weight:700;border:none;cursor:pointer;transition:all .2s;font-family:'DM Sans',sans-serif;position:relative;overflow:hidden; }
        .dark-btn::before { content:'';position:absolute;inset:0;background:#1d4ed8;transform:translateX(-101%);transition:transform .35s cubic-bezier(.22,1,.36,1); }
        .dark-btn:hover::before { transform:translateX(0); }
        .dark-btn:hover { transform:translateY(-2px); box-shadow:0 8px 24px #1d4ed840; }
        .dark-btn span { position:relative;z-index:1; }
      `}</style>

      {/* ── HERO ── */}
      <header
        style={{
          position: "relative",
          background: "linear-gradient(160deg,#ffffff 55%,#eff6ff 100%)",
          borderBottom: "1px solid #e2e8f0",
          padding: "72px 0 64px",
          overflow: "hidden",
        }}
      >
        <div
          className="blob"
          style={{
            width: 380,
            height: 380,
            background: "#3b82f610",
            top: -100,
            right: "5%",
            animationDelay: "0s",
            animation: "float 9s ease-in-out infinite",
          }}
        />
        <div
          className="blob"
          style={{
            width: 220,
            height: 220,
            background: "#f59e0b10",
            bottom: -40,
            left: "8%",
            animation: "float 11s ease-in-out infinite 2s",
          }}
        />

        <div style={{ maxWidth: 1480, margin: "10px 0", padding: "0 5%" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: 52,
            }}
          >
            {/* Left copy */}
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, ease: "easeOut" }}
              style={{ flex: "1 1 260px" }}
            >
              {/* Badges */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 8,
                  marginBottom: 24,
                }}
              >
                {[
                  { label: "Enterprise", dot: "bd-blue" },
                  { label: "Automation", dot: "bd-green" },
                  { label: "SaaS & On-prem", dot: "bd-amber" },
                ].map((b, i) => (
                  <span
                    key={i}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 7,
                      padding: "5px 14px",
                      borderRadius: 999,
                      border: "1px solid #e2e8f0",
                      background: "#fff",
                      fontSize: "0.78rem",
                      fontWeight: 500,
                    }}
                  >
                    <span className={`badge-dot ${b.dot}`} />
                    {b.label}
                  </span>
                ))}
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.18 }}
                className="syne"
                style={{
                  fontSize: "clamp(2.4rem,5.5vw,4.2rem)",
                  fontWeight: 800,
                  lineHeight: 1.06,
                  letterSpacing: "-0.03em",
                  marginBottom: 22,
                }}
              >
                ERP &amp; <span className="grad-text">CRM Systems</span>
                <br />
                <span
                  style={{
                    fontSize: "0.6em",
                    fontWeight: 700,
                    color: "#475569",
                    display: "block",
                    marginTop: 8,
                  }}
                >
                  Built for how you operate
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                style={{
                  color: "#64748b",
                  maxWidth: 480,
                  lineHeight: 1.72,
                  marginBottom: 32,
                  fontSize: "1.02rem",
                }}
              >
                Custom enterprise platforms, workflow automation, role-based
                dashboards and CRM flows tailored to your business. Systems that
                reduce manual work, improve visibility and scale with your
                organization.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.38 }}
                style={{
                  display: "flex",
                  gap: 12,
                  flexWrap: "wrap",
                  marginBottom: 36,
                }}
              >
                <button
                  className="amber-btn"
                  style={{
                    padding: "13px 28px",
                    borderRadius: 12,
                    fontSize: "0.95rem",
                  }}
                >
                  Get a Free Quote →
                </button>
                <button
                  className="outline-btn"
                  style={{
                    padding: "13px 24px",
                    borderRadius: 12,
                    fontSize: "0.95rem",
                  }}
                >
                  Book Discovery Call
                </button>
              </motion.div>

              {/* Stats grid */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.48 }}
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4,1fr)",
                  border: "1px solid #e2e8f0",
                  borderRadius: 14,
                  overflow: "hidden",
                  background: "#fff",
                }}
              >
                {stats.map((s, i) => (
                  <div
                    key={i}
                    style={{
                      padding: "16px 10px",
                      textAlign: "center",
                      borderRight: i < 3 ? "1px solid #f1f5f9" : "none",
                    }}
                  >
                    <div
                      className="syne"
                      style={{
                        fontSize: "1.5rem",
                        fontWeight: 800,
                        color: "#1d4ed8",
                      }}
                    >
                      {s.num}
                    </div>
                    <div
                      style={{
                        fontSize: "0.68rem",
                        color: "#94a3b8",
                        marginTop: 3,
                      }}
                    >
                      {s.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right — Animated ERP Canvas */}
            <motion.div
              initial={{ opacity: 0, scale: 0.93 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              style={{
                flex: "1 1 340px",
                minHeight: 420,
                maxWidth: 540,
                borderRadius: 24,
                overflow: "hidden",
                boxShadow: "0 28px 64px #1d4ed81a",
                border: "1px solid #bfdbfe",
              }}
            >
              <ErpCanvas />
            </motion.div>
          </div>
        </div>
      </header>

      {/* ── TICKER ── */}
      <div
        style={{
          borderTop: "1px solid #e2e8f0",
          borderBottom: "1px solid #e2e8f0",
          padding: "13px 0",
          background: "#fff",
          overflow: "hidden",
        }}
      >
        <div className="ticker-inner">
          {[...tickerItems, ...tickerItems].map((t, i) => (
            <span
              key={i}
              style={{
                padding: "0 28px",
                fontSize: "0.78rem",
                fontWeight: 600,
                color: "#334155",
                whiteSpace: "nowrap",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              {t} <span style={{ color: "#3b82f6", margin: "0 6px" }}>✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── WHAT WE DELIVER ── */}
      <section style={{ padding: "72px 0", background: "#fff" }}>
        <div style={{ maxWidth: 1480, margin: "0 auto", padding: "0 5%" }}>
          <FadeSection>
            <SectionLabel>What we build</SectionLabel>
            <h2
              className="syne"
              style={{
                fontSize: "clamp(1.6rem,3vw,2.3rem)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                marginBottom: 40,
              }}
            >
              End-to-end ERP & CRM delivery
            </h2>
          </FadeSection>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
              gap: 22,
            }}
          >
            {/* Deliverables dark card */}
            <FadeSection delay={0.05}>
              <TiltCard>
                <div
                  style={{
                    borderRadius: 18,
                    padding: 32,
                    background: "#0f172a",
                    color: "#fff",
                    height: "100%",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div
                    className="blob"
                    style={{
                      width: 200,
                      height: 200,
                      background: "#3b82f618",
                      top: -60,
                      right: -40,
                      animation: "float 8s ease-in-out infinite",
                    }}
                  />
                  <h3
                    style={{
                      fontFamily: "'Syne',sans-serif",
                      fontWeight: 700,
                      fontSize: "1.1rem",
                      marginBottom: 22,
                      position: "relative",
                    }}
                  >
                    What we deliver
                  </h3>
                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                      margin: 0,
                      display: "flex",
                      flexDirection: "column",
                      gap: 16,
                      position: "relative",
                    }}
                  >
                    {[
                      "End-to-end ERP: Inventory, Sales, Finance, HR",
                      "Custom CRM: lead capture, scoring, pipeline analytics",
                      "Role-based dashboards & granular permissions",
                      "Integrations: payments, shipping, accounting, APIs",
                      "Multi-tenant SaaS or on-premise deployments",
                    ].map((item, i) => (
                      <li
                        key={i}
                        style={{
                          display: "flex",
                          gap: 12,
                          fontSize: "0.875rem",
                          color: "rgba(255,255,255,0.72)",
                          lineHeight: 1.55,
                        }}
                      >
                        <span
                          style={{
                            color: "#3b82f6",
                            fontWeight: 700,
                            marginTop: 1,
                            flexShrink: 0,
                          }}
                        >
                          →
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </TiltCard>
            </FadeSection>

            {/* Engagement model */}
            <FadeSection delay={0.12}>
              <div
                style={{
                  borderRadius: 18,
                  padding: 30,
                  border: "1px solid #e2e8f0",
                  background: "#fff",
                  height: "100%",
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Syne',sans-serif",
                    fontWeight: 700,
                    fontSize: "1.1rem",
                    marginBottom: 8,
                  }}
                >
                  Engagement models
                </h3>
                <p
                  style={{
                    fontSize: "0.85rem",
                    color: "#64748b",
                    lineHeight: 1.65,
                    marginBottom: 24,
                  }}
                >
                  Fixed-scope MVP, iterative product development, or a dedicated
                  team for long-term evolution.
                </p>
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 18 }}
                >
                  {[
                    { label: "MVP Build", time: "4–8 weeks", w: "38%" },
                    { label: "Product Dev", time: "3–6 months", w: "68%" },
                    { label: "Dedicated Team", time: "Ongoing", w: "100%" },
                  ].map((m, i) => (
                    <div key={i}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          marginBottom: 7,
                        }}
                      >
                        <span style={{ fontSize: "0.875rem", fontWeight: 600 }}>
                          {m.label}
                        </span>
                        <span
                          style={{
                            fontSize: "0.75rem",
                            color: "#94a3b8",
                            background: "#f1f5f9",
                            padding: "2px 10px",
                            borderRadius: 20,
                          }}
                        >
                          {m.time}
                        </span>
                      </div>
                      <div className="progress-bar">
                        <motion.div
                          className="progress-fill"
                          initial={{ width: 0 }}
                          whileInView={{ width: m.w }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1.1,
                            delay: i * 0.15,
                            ease: "easeOut",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeSection>

            {/* Compliance & security */}
            <FadeSection delay={0.18}>
              <div
                style={{
                  borderRadius: 18,
                  padding: 30,
                  background: "linear-gradient(145deg,#eff6ff,#e0f2fe)",
                  border: "1px solid #bfdbfe",
                  height: "100%",
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Syne',sans-serif",
                    fontWeight: 700,
                    fontSize: "1.1rem",
                    marginBottom: 8,
                  }}
                >
                  Security & Compliance
                </h3>
                <p
                  style={{
                    fontSize: "0.85rem",
                    color: "#475569",
                    lineHeight: 1.65,
                    marginBottom: 22,
                  }}
                >
                  Enterprise-grade security baked in from day one.
                </p>
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 12 }}
                >
                  {[
                    "SOC 2 Type II ready architecture",
                    "Role-based access & audit logs",
                    "Encrypted data at rest & in transit",
                    "GDPR & data residency options",
                    "Penetration testing & VAPT",
                  ].map((item, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        fontSize: "0.85rem",
                        color: "#374151",
                      }}
                    >
                      <div
                        style={{
                          width: 22,
                          height: 22,
                          borderRadius: 6,
                          background: "#1d4ed8",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <span
                          style={{
                            color: "#fff",
                            fontSize: "0.65rem",
                            fontWeight: 700,
                          }}
                        >
                          ✓
                        </span>
                      </div>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </FadeSection>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section
        style={{
          padding: "72px 0",
          background: "linear-gradient(180deg,#f8fafc,#eff6ff)",
        }}
      >
        <div style={{ maxWidth: 1480, margin: "0 auto", padding: "0 5%" }}>
          <FadeSection>
            <SectionLabel>Key Features</SectionLabel>
            <h2
              className="syne"
              style={{
                fontSize: "clamp(1.6rem,3vw,2.3rem)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                marginBottom: 40,
              }}
            >
              Everything your operations need
            </h2>
          </FadeSection>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(360px,1fr))",
              gap: 18,
            }}
          >
            {features.map((f, i) => (
              <FadeSection key={i} delay={i * 0.06}>
                <motion.div
                  className="lift"
                  whileHover={{ y: -5 }}
                  style={{
                    padding: 24,
                    background: "#fff",
                    borderRadius: 16,
                    border: "1px solid #e2e8f0",
                    height: "100%",
                  }}
                >
                  <div style={{ fontSize: "1.7rem", marginBottom: 14 }}>
                    {f.icon}
                  </div>
                  <h4
                    style={{
                      fontFamily: "'Syne',sans-serif",
                      fontWeight: 700,
                      fontSize: "0.95rem",
                      marginBottom: 8,
                    }}
                  >
                    {f.title}
                  </h4>
                  <p
                    style={{
                      fontSize: "0.85rem",
                      color: "#64748b",
                      lineHeight: 1.65,
                    }}
                  >
                    {f.body}
                  </p>
                </motion.div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section style={{ padding: "72px 0", background: "#fff" }}>
        <div style={{ maxWidth: 1480, margin: "0 auto", padding: "0 5%" }}>
          <FadeSection>
            <SectionLabel>How we work</SectionLabel>
            <h2
              className="syne"
              style={{
                fontSize: "clamp(1.6rem,3vw,2.3rem)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                marginBottom: 48,
              }}
            >
              Our delivery process
            </h2>
          </FadeSection>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))",
              gap: 0,
              position: "relative",
            }}
          >
            {process.map((p, i) => (
              <FadeSection key={i} delay={i * 0.1}>
                <div
                  style={{
                    padding: "28px 26px",
                    background: i % 2 === 0 ? "#f8fafc" : "#fff",
                    border: "1px solid #e2e8f0",
                    borderRadius:
                      i === 0
                        ? "16px 0 0 16px"
                        : i === process.length - 1
                          ? "0 16px 16px 0"
                          : 0,
                    marginRight: i < process.length - 1 ? -1 : 0,
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      width: 46,
                      height: 46,
                      borderRadius: 12,
                      background: "linear-gradient(135deg,#dbeafe,#bfdbfe)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 14,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Syne',sans-serif",
                        fontWeight: 800,
                        color: "#1d4ed8",
                        fontSize: "0.82rem",
                      }}
                    >
                      {p.step}
                    </span>
                  </div>
                  <div style={{ fontSize: "1.5rem", marginBottom: 8 }}>
                    {p.icon}
                  </div>
                  <h4
                    style={{
                      fontFamily: "'Syne',sans-serif",
                      fontWeight: 700,
                      fontSize: "0.92rem",
                      marginBottom: 7,
                    }}
                  >
                    {p.title}
                  </h4>
                  <p
                    style={{
                      fontSize: "0.82rem",
                      color: "#64748b",
                      lineHeight: 1.65,
                    }}
                  >
                    {p.desc}
                  </p>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES TABS ── */}
      <section
        style={{
          padding: "72px 0",
          background: "linear-gradient(180deg,#eff6ff,#f8fafc)",
        }}
      >
        <div style={{ maxWidth: 1480, margin: "0 auto", padding: "0 5%" }}>
          <FadeSection>
            <SectionLabel>Who benefits</SectionLabel>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "flex-end",
                justifyContent: "space-between",
                gap: 20,
                marginBottom: 32,
              }}
            >
              <h2
                className="syne"
                style={{
                  fontSize: "clamp(1.6rem,3vw,2.3rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.02em",
                }}
              >
                Built for operators, not just developers
              </h2>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {industries.map((ind, i) => (
                  <button
                    key={i}
                    className={`industry-btn ${activeIndustry === i ? "active" : ""}`}
                    onClick={() => setActiveIndustry(i)}
                  >
                    {ind.icon} {ind.title.split(" ")[0]}
                  </button>
                ))}
              </div>
            </div>
          </FadeSection>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndustry}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.32 }}
              style={{
                padding: "32px 36px",
                background: "#fff",
                borderRadius: 20,
                border: "1px solid #e2e8f0",
                boxShadow: "0 6px 24px #1e40af08",
                display: "flex",
                alignItems: "center",
                gap: 28,
                flexWrap: "wrap",
              }}
            >
              <div style={{ fontSize: "3rem" }}>
                {industries[activeIndustry].icon}
              </div>
              <div style={{ flex: 1, minWidth: 220 }}>
                <h3
                  style={{
                    fontFamily: "'Syne',sans-serif",
                    fontWeight: 700,
                    fontSize: "1.15rem",
                    marginBottom: 8,
                  }}
                >
                  {industries[activeIndustry].title}
                </h3>
                <p
                  style={{
                    color: "#64748b",
                    lineHeight: 1.7,
                    fontSize: "0.95rem",
                  }}
                >
                  {industries[activeIndustry].desc}
                </p>
              </div>
              <button
                className="amber-btn"
                style={{
                  padding: "11px 22px",
                  borderRadius: 10,
                  fontSize: "0.88rem",
                }}
              >
                Explore Use Case →
              </button>
            </motion.div>
          </AnimatePresence>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
              gap: 16,
              marginTop: 20,
            }}
          >
            {industries.map((ind, i) => (
              <FadeSection key={i} delay={i * 0.07}>
                <motion.div
                  className="lift"
                  onClick={() => setActiveIndustry(i)}
                  whileHover={{ y: -4 }}
                  style={{
                    padding: "22px 22px",
                    background: activeIndustry === i ? "#eff6ff" : "#fff",
                    borderRadius: 14,
                    border:
                      activeIndustry === i
                        ? "1.5px solid #3b82f6"
                        : "1px solid #e2e8f0",
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                >
                  <div style={{ fontSize: "1.6rem", marginBottom: 10 }}>
                    {ind.icon}
                  </div>
                  <h4
                    style={{
                      fontFamily: "'Syne',sans-serif",
                      fontWeight: 700,
                      fontSize: "0.88rem",
                      marginBottom: 6,
                    }}
                  >
                    {ind.title}
                  </h4>
                  <p
                    style={{
                      fontSize: "0.8rem",
                      color: "#64748b",
                      lineHeight: 1.6,
                    }}
                  >
                    {ind.desc}
                  </p>
                </motion.div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH STACK ── */}
      <section
        style={{
          padding: "64px 0",
          background: "#fff",
          borderTop: "1px solid #e2e8f0",
        }}
      >
        <div
          style={{
            maxWidth: 1480,
            margin: "0 auto",
            padding: "0 5%",
          }}
        >
          <FadeSection>
            <SectionLabel>Tech Stack</SectionLabel>
            <h2
              className="syne"
              style={{
                fontSize: "clamp(1.5rem,2.8vw,2rem)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                marginBottom: 10,
              }}
            >
              Modern, battle-tested tools
            </h2>
            <p
              style={{ color: "#64748b", marginBottom: 32, fontSize: "0.9rem" }}
            >
              Industry-standard stack for security, performance and long-term
              maintainability.
            </p>
          </FadeSection>
          <FadeSection delay={0.1}>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 10,
                justifyContent: "center",
              }}
            >
              {techStack.map((t, i) => (
                <motion.span
                  key={i}
                  className="lift"
                  whileHover={{ y: -3 }}
                  style={{
                    padding: "10px 18px",
                    borderRadius: 10,
                    border: `1px solid ${t.border}`,
                    background: t.color,
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    cursor: "default",
                  }}
                >
                  {t.name}
                </motion.span>
              ))}
            </div>
          </FadeSection>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section
        style={{
          padding: "72px 0",
          background: "linear-gradient(180deg,#eff6ff,#f0f9ff)",
        }}
      >
        <div style={{ maxWidth: 1480, margin: "0 auto", padding: "0 5%" }}>
          <FadeSection>
            <SectionLabel>Client Stories</SectionLabel>
            <h2
              className="syne"
              style={{
                fontSize: "clamp(1.5rem,2.8vw,2rem)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                marginBottom: 36,
              }}
            >
              Trusted by operations teams worldwide
            </h2>
          </FadeSection>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
              gap: 20,
            }}
          >
            {testimonials.map((t, i) => (
              <FadeSection key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -5, boxShadow: "0 20px 44px #1e40af0f" }}
                  transition={{ type: "spring", stiffness: 180 }}
                  style={{
                    padding: "26px 24px",
                    background: "#fff",
                    borderRadius: 18,
                    border: "1px solid #e2e8f0",
                  }}
                >
                  <div style={{ display: "flex", gap: 3, marginBottom: 16 }}>
                    {"★★★★★".split("").map((s, j) => (
                      <span
                        key={j}
                        style={{ color: "#f59e0b", fontSize: "0.9rem" }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <p
                    style={{
                      color: "#475569",
                      fontSize: "0.875rem",
                      lineHeight: 1.7,
                      marginBottom: 22,
                      fontStyle: "italic",
                    }}
                  >
                    "{t.text}"
                  </p>
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 12 }}
                  >
                    <img
                      src={t.avatar}
                      alt={t.name}
                      style={{
                        width: 42,
                        height: 42,
                        borderRadius: "50%",
                        objectFit: "cover",
                        border: "2px solid #bfdbfe",
                      }}
                    />
                    <div>
                      <div style={{ fontWeight: 700, fontSize: "0.85rem" }}>
                        {t.name}
                      </div>
                      <div style={{ color: "#94a3b8", fontSize: "0.72rem" }}>
                        {t.role}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: "0 0 80px" }}>
        <div style={{ maxWidth: 1480, margin: "0 auto", padding: "0 5%" }}>
          <FadeSection>
            <div
              style={{
                borderRadius: 22,
                padding: "56px 48px",
                background: "#0f172a",
                color: "#fff",
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 32,
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                className="blob"
                style={{
                  width: 280,
                  height: 280,
                  background: "#3b82f620",
                  top: -80,
                  right: 60,
                  animation: "float 9s ease-in-out infinite 1s",
                }}
              />
              <div
                className="blob"
                style={{
                  width: 160,
                  height: 160,
                  background: "#f59e0b14",
                  bottom: -40,
                  left: "30%",
                  animation: "float 11s ease-in-out infinite 3s",
                }}
              />
              <div style={{ position: "relative" }}>
                <div
                  className="syne"
                  style={{
                    fontSize: "clamp(1.5rem,3vw,2.1rem)",
                    fontWeight: 800,
                    marginBottom: 10,
                  }}
                >
                  Ready to streamline operations?
                </div>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "rgba(255,255,255,0.58)",
                    maxWidth: 420,
                    lineHeight: 1.7,
                  }}
                >
                  Book a quick discovery call and we'll sketch an ERP/CRM plan
                  tailored to your exact processes — no generic demos.
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
                <button
                  className="dark-btn"
                  style={{
                    padding: "13px 28px",
                    borderRadius: 11,
                    fontSize: "0.93rem",
                  }}
                >
                  <span>Get a Quote ↗</span>
                </button>
                <button
                  style={{
                    padding: "13px 24px",
                    borderRadius: 11,
                    background: "rgba(255,255,255,0.08)",
                    border: "1.5px solid rgba(255,255,255,0.2)",
                    color: "#fff",
                    fontWeight: 600,
                    fontSize: "0.93rem",
                    cursor: "pointer",
                    fontFamily: "'DM Sans',sans-serif",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background =
                      "rgba(255,255,255,0.15)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background =
                      "rgba(255,255,255,0.08)")
                  }
                >
                  📞 Call Sales
                </button>
              </div>
            </div>
          </FadeSection>
        </div>
      </section>
    </div>
  );
}
