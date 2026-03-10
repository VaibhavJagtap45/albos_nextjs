// "use client";
// import Link from "next/link";

// /* ───────── Dashboard Mockup ───────── */
// function DashboardMockup() {
//     const bars = [55, 70, 48, 88, 65, 95];
//     const colors = ["#1D4ED8", "#0D9488"];

//     const activity = [
//         { dot: "bg-teal-400", text: "v2.4.1 deployed to production", time: "2m ago" },
//         { dot: "bg-blue-400", text: "Sprint 24 review — all stories done", time: "1h ago" },
//         { dot: "bg-amber-400", text: "Security audit passed ✓", time: "3h ago" },
//     ];

//     return (
//         <div className="relative w-full max-w-[340px] sm:max-w-[380px] md:max-w-[420px] mx-auto">

//             {/* Floating Stat */}
//             <div className="absolute -top-4 right-0 sm:-right-4 scale-90 sm:scale-100 bg-gradient-to-br from-amber-50 to-white border border-amber-200 rounded-xl px-4 py-3 flex items-center gap-3 shadow-lg z-20">
//                 <div>
//                     <div className="font-black text-2xl text-amber-500 leading-none">500+</div>
//                     <div className="text-xs text-slate-400 mt-0.5">Projects shipped</div>
//                 </div>
//                 <div className="text-2xl">🚀</div>
//             </div>

//             {/* Browser Card */}
//             <div className="bg-white border border-slate-200 rounded-2xl shadow-xl overflow-hidden">

//                 {/* Browser bar */}
//                 <div className="bg-slate-50 border-b border-slate-100 px-4 py-2.5 flex items-center gap-2">
//                     <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
//                     <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
//                     <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
//                     <div className="ml-2 bg-white border border-slate-200 rounded px-2.5 py-0.5 text-[10px] font-mono text-slate-400">
//                         dashboard.albos.dev/projects
//                     </div>
//                 </div>

//                 <div className="p-5">

//                     {/* Header */}
//                     <div className="flex justify-between items-center mb-4">
//                         <div className="font-bold text-slate-800 text-sm">Live Dashboard</div>
//                         <div className="flex items-center gap-1.5 bg-teal-50 border border-teal-200 rounded-full px-2.5 py-0.5 text-[10px] font-bold text-teal-600 tracking-wider">
//                             <div className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
//                             LIVE
//                         </div>
//                     </div>

//                     {/* Metrics */}
//                     <div className="grid grid-cols-3 gap-2.5 mb-4">
//                         {[
//                             ["Uptime", "99.9%", "↑ SLA"],
//                             ["Sprints", "24", "↑ On Track"],
//                             ["Delivered", "100%", "↑ On Time"],
//                         ].map(([l, v, d]) => (
//                             <div key={l} className="bg-slate-50 border border-slate-100 rounded-xl p-3">
//                                 <div className="text-[9px] text-slate-400 font-semibold uppercase mb-1">{l}</div>
//                                 <div className="font-black text-lg text-slate-800 leading-none">{v}</div>
//                                 <div className="text-[9px] text-teal-600 font-semibold mt-1">{d}</div>
//                             </div>
//                         ))}
//                     </div>

//                     {/* Chart */}
//                     <div className="bg-slate-50 border border-slate-100 rounded-xl p-3 mb-3">
//                         <div className="flex justify-between items-center mb-2">
//                             <span className="text-[9px] text-slate-400">Sprint Velocity</span>
//                             <span className="text-[9px] text-teal-600 font-bold bg-teal-50 px-1.5 py-0.5 rounded">↑ +18%</span>
//                         </div>
//                         <div className="flex items-end gap-1.5 h-10">
//                             {bars.map((h, i) => (
//                                 <div
//                                     key={i}
//                                     className="flex-1 rounded-t animate-[grow_0.8s_ease_forwards]"
//                                     style={{
//                                         height: `${h}%`,
//                                         background: colors[i % 2],
//                                         opacity: 0.45 + i * 0.09,
//                                     }}
//                                 />
//                             ))}
//                         </div>
//                     </div>

//                     {/* Activity */}
//                     <div className="flex flex-col gap-1.5">
//                         {activity.map(({ dot, text, time }) => (
//                             <div key={text} className="flex items-center gap-2 bg-slate-50 border border-slate-100 rounded-lg px-3 py-2">
//                                 <div className={`w-1.5 h-1.5 rounded-full ${dot}`} />
//                                 <span className="text-[10px] text-slate-500 flex-1">{text}</span>
//                                 <span className="text-[9px] text-slate-400">{time}</span>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>

//             {/* Bottom floating card */}
//             <div className="absolute -bottom-4 left-0 sm:-left-4 scale-90 sm:scale-100 bg-white border border-slate-200 rounded-2xl px-4 py-3 flex items-center gap-3 shadow-xl z-20 min-w-[200px]">
//                 <span className="text-2xl">🎉</span>
//                 <div>
//                     <div className="text-sm font-bold text-slate-800">Build shipped!</div>
//                     <div className="text-xs text-slate-400 mt-0.5">0 bugs · On schedule</div>
//                 </div>
//             </div>

//         </div>
//     );
// }

// /* ───────── HERO SECTION ───────── */
// export default function Hero() {

//     const proof = [
//         ["★", "4.9 on Clutch"],
//         ["🏆", "Top Developer India 2024"],
//         ["✅", "ISO Certified"],
//     ];

//     return (
//         <section className="relative pt-[52px] min-h-[90vh] md:min-h-screen overflow-hidden">

//             <div className="mx-auto w-full flex flex-col lg:flex-row items-center gap-12 px-[5%] py-12">

//                 {/* LEFT CONTENT */}
//                 <div className="w-full lg:w-1/2 text-center lg:text-left">

//                     <p className="text-amber-600 text-xs font-bold uppercase tracking-widest mb-6">
//                         Trusted Partner Since 2014 · Pune, India
//                     </p>

//                     <h1 className="font-black leading-[0.95] mb-6
//             text-[2.2rem]
//             sm:text-[2.3rem]
//             md:text-[2.4rem]
//             lg:text-[3.4rem]
//             xl:text-[4.5rem]"
//                     >
//                         The Engineering <br />
//                         Team Behind<br />
//                         <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-400">Your Next</span><br />
//                         <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-400">
//                             Big Product.
//                         </span>
//                     </h1>

//                     <p className="text-slate-500 max-w-xl mx-auto lg:mx-0 mb-8">
//                         Albos Technologies has shipped 500+ digital products for startups and enterprises
//                         across 12 industries — from MVPs to complex enterprise platforms.
//                     </p>

//                     {/* Buttons */}
//                     <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-8">
//                         <Link
//                             href="/contact"
//                             className="bg-gradient-to-br from-amber-500 btn-amber to-amber-600 text-white font-bold px-7 py-3 rounded-xl shadow-lg hover:-translate-y-1 transition text-center"
//                         >
//                             Start a Project →
//                         </Link>

//                         <Link
//                             href="/portfolio"
//                             className="border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 font-medium px-7 py-3 rounded-xl transition text-center"
//                         >
//                             View Our Work
//                         </Link>
//                     </div>

//                     {/* Proof badges */}
//                     <div className="flex flex-wrap justify-center lg:justify-start gap-2">
//                         {proof.map(([icon, label]) => (
//                             <div key={label} className="flex items-center gap-1.5 bg-white border border-slate-200 rounded-full px-3 py-1.5 text-xs font-semibold text-slate-600 shadow-sm">
//                                 <span>{icon}</span>{label}
//                             </div>
//                         ))}
//                     </div>

//                 </div>

//                 {/* RIGHT DASHBOARD */}
//                 <div className="w-full lg:w-1/2 flex justify-center">
//                     <DashboardMockup />
//                 </div>

//             </div>
//         </section>
//     );
// }

"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

/* ── inject keyframes once, globally ── */
const CSS = `
  @keyframes float {
    0%,100% { transform: translateY(0px) rotate(0deg); }
    25%      { transform: translateY(-6px) rotate(-0.12deg); }
    50%      { transform: translateY(-10px) rotate(-0.4deg); }
    75%      { transform: translateY(-6px) rotate(-0.12deg); }
  }
  @keyframes fadeSlideUp {
    from { opacity:0; transform:translateY(20px); }
    to   { opacity:1; transform:translateY(0); }
  }
  @keyframes fadeSlideDown {
    from { opacity:0; transform:translateY(-16px); }
    to   { opacity:1; transform:translateY(0); }
  }
  @keyframes growUp {
    from { transform:scaleY(0); }
    to   { transform:scaleY(1); }
  }
  @keyframes popIn {
    0%   { opacity:0; transform:scale(0.7); }
    70%  { transform:scale(1.06); }
    100% { opacity:1; transform:scale(1); }
  }
  @keyframes pulse {
    0%,100% { opacity:1; }
    50%      { opacity:.4; }
  }
  @media (prefers-reduced-motion: reduce) {
    *{ animation:none!important; transition:none!important; }
  }
`;

function injectStyles() {
  if (typeof document === "undefined") return;
  if (document.getElementById("dm-keyframes")) return;
  const s = document.createElement("style");
  s.id = "dm-keyframes";
  s.textContent = CSS;
  document.head.appendChild(s);
}

/* ── animated counter ── */
function Counter({ target, suffix = "" }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    let start = null;
    const duration = 1200;
    function step(ts) {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      setVal(Math.floor(ease * target));
      if (p < 1) requestAnimationFrame(step);
    }
    const raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target]);
  return (
    <>
      {val}
      {suffix}
    </>
  );
}

/* ── main component ── */
function DashboardMockup() {
  injectStyles();

  const bars = [55, 70, 48, 88, 65, 95];
  const colors = ["#1D4ED8", "#0D9488"];

  const activity = [
    { dot: "#2dd4bf", text: "v2.4.1 deployed to production", time: "2m ago" },
    {
      dot: "#60a5fa",
      text: "Sprint 24 review — all stories done",
      time: "1h ago",
    },
    { dot: "#fbbf24", text: "Security audit passed ✓", time: "3h ago" },
  ];

  const metrics = [
    { label: "Uptime", value: 99.9, suffix: "%", sub: "↑ SLA" },
    { label: "Sprints", value: 24, suffix: "", sub: "↑ On Track" },
    { label: "Delivered", value: 100, suffix: "%", sub: "↑ On Time" },
  ];

  return (
    /* outer: sizing only — no animation here */
    <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: 420,
        margin: "0 auto",
        paddingTop: 32,
        paddingBottom: 40,
        paddingLeft: 16,
        paddingRight: 16,
      }}
    >
      {/* inner: animation only */}
      <div
        style={{
          position: "relative",
          animation: "float 6s ease-in-out infinite",
          willChange: "transform",
          transition: "transform 300ms ease, box-shadow 300ms ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.animationPlayState = "paused";
          e.currentTarget.style.transform = "translateY(-8px) scale(1.01)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.animationPlayState = "running";
          e.currentTarget.style.transform = "";
        }}
      >
        {/* ── top badge ── */}
        <div
          style={{
            position: "absolute",
            top: -16,
            right: 0,
            background: "linear-gradient(135deg,#fffbeb,#fff)",
            border: "1px solid #fde68a",
            borderRadius: 12,
            padding: "10px 14px",
            display: "flex",
            alignItems: "center",
            gap: 10,
            boxShadow: "0 8px 24px rgba(0,0,0,.10)",
            zIndex: 20,
            animation: "popIn .5s cubic-bezier(.34,1.56,.64,1) .2s both",
          }}
        >
          <div>
            <div
              style={{
                fontWeight: 900,
                fontSize: 22,
                color: "#f59e0b",
                lineHeight: 1,
              }}
            >
              <Counter target={500} suffix="+" />
            </div>
            <div style={{ fontSize: 10, color: "#94a3b8", marginTop: 2 }}>
              Projects shipped
            </div>
          </div>
          <span style={{ fontSize: 22 }}>🚀</span>
        </div>

        {/* ── browser card ── */}
        <div
          style={{
            background: "#fff",
            border: "1px solid #e2e8f0",
            borderRadius: 16,
            boxShadow: "0 20px 48px rgba(15,23,42,.10)",
            overflow: "hidden",
            animation: "fadeSlideDown .6s ease .05s both",
          }}
        >
          {/* browser chrome */}
          <div
            style={{
              background: "#f8fafc",
              borderBottom: "1px solid #f1f5f9",
              padding: "10px 16px",
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            {["#f87171", "#fbbf24", "#34d399"].map((c) => (
              <div
                key={c}
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background: c,
                }}
              />
            ))}
            <div
              style={{
                marginLeft: 8,
                background: "#fff",
                border: "1px solid #e2e8f0",
                borderRadius: 4,
                padding: "2px 10px",
                fontSize: 10,
                fontFamily: "monospace",
                color: "#94a3b8",
              }}
            >
              dashboard.albos.dev/projects
            </div>
          </div>

          <div style={{ padding: 20 }}>
            {/* header */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 16,
                animation: "fadeSlideUp .4s ease .15s both",
              }}
            >
              <span style={{ fontWeight: 700, fontSize: 13, color: "#1e293b" }}>
                Live Dashboard
              </span>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  background: "#f0fdfa",
                  border: "1px solid #99f6e4",
                  borderRadius: 999,
                  padding: "3px 10px",
                  fontSize: 10,
                  fontWeight: 700,
                  color: "#0d9488",
                  letterSpacing: ".06em",
                }}
              >
                <div
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "#14b8a6",
                    animation: "pulse 1.5s ease-in-out infinite",
                  }}
                />
                LIVE
              </div>
            </div>

            {/* metrics */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3,1fr)",
                gap: 8,
                marginBottom: 16,
              }}
            >
              {metrics.map(({ label, value, suffix, sub }, i) => (
                <div
                  key={label}
                  style={{
                    background: "#f8fafc",
                    border: "1px solid #f1f5f9",
                    borderRadius: 12,
                    padding: 10,
                    animation: `fadeSlideUp .4s ease ${0.2 + i * 0.08}s both`,
                  }}
                >
                  <div
                    style={{
                      fontSize: 8,
                      color: "#94a3b8",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: ".05em",
                      marginBottom: 3,
                    }}
                  >
                    {label}
                  </div>
                  <div
                    style={{
                      fontWeight: 900,
                      fontSize: 17,
                      color: "#1e293b",
                      lineHeight: 1,
                    }}
                  >
                    <Counter target={value} suffix={suffix} />
                  </div>
                  <div
                    style={{
                      fontSize: 8,
                      color: "#0d9488",
                      fontWeight: 700,
                      marginTop: 3,
                    }}
                  >
                    {sub}
                  </div>
                </div>
              ))}
            </div>

            {/* chart */}
            <div
              style={{
                background: "#f8fafc",
                border: "1px solid #f1f5f9",
                borderRadius: 12,
                padding: 10,
                marginBottom: 10,
                animation: "fadeSlideUp .4s ease .42s both",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 8,
                }}
              >
                <span style={{ fontSize: 8, color: "#94a3b8" }}>
                  Sprint Velocity
                </span>
                <span
                  style={{
                    fontSize: 8,
                    color: "#0d9488",
                    fontWeight: 700,
                    background: "#f0fdfa",
                    padding: "2px 6px",
                    borderRadius: 4,
                  }}
                >
                  ↑ +18%
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                  gap: 6,
                  height: 40,
                }}
              >
                {bars.map((h, i) => (
                  <div
                    key={i}
                    style={{
                      flex: 1,
                      borderRadius: "3px 3px 0 0",
                      background: colors[i % 2],
                      opacity: 0.45 + i * 0.09,
                      height: `${h}%`,
                      transformOrigin: "bottom",
                      animation: `growUp .6s cubic-bezier(.34,1.56,.64,1) ${0.5 + i * 0.07}s both`,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* activity */}
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {activity.map(({ dot, text, time }, i) => (
                <div
                  key={text}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    background: "#f8fafc",
                    border: "1px solid #f1f5f9",
                    borderRadius: 8,
                    padding: "7px 10px",
                    animation: `fadeSlideUp .4s ease ${0.65 + i * 0.1}s both`,
                  }}
                >
                  <div
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: dot,
                      flexShrink: 0,
                    }}
                  />
                  <span style={{ fontSize: 10, color: "#64748b", flex: 1 }}>
                    {text}
                  </span>
                  <span style={{ fontSize: 9, color: "#94a3b8" }}>{time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── bottom badge ── */}
        <div
          style={{
            position: "absolute",
            bottom: -16,
            left: 0,
            background: "#fff",
            border: "1px solid #e2e8f0",
            borderRadius: 16,
            padding: "10px 14px",
            display: "flex",
            alignItems: "center",
            gap: 10,
            boxShadow: "0 12px 32px rgba(0,0,0,.10)",
            zIndex: 20,
            minWidth: 200,
            animation: "popIn .5s cubic-bezier(.34,1.56,.64,1) .35s both",
          }}
        >
          <span style={{ fontSize: 22 }}>🎉</span>
          <div>
            <div style={{ fontSize: 13, fontWeight: 700, color: "#1e293b" }}>
              Build shipped!
            </div>
            <div style={{ fontSize: 11, color: "#94a3b8", marginTop: 2 }}>
              0 bugs · On schedule
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ───────── HERO SECTION ───────── */
export default function Hero() {
  const proof = [
    ["★", "4.9 on Clutch"],
    ["🏆", "Top Developer India 2024"],
    ["✅", "ISO Certified"],
  ];

  return (
    <section className="relative pt-[52px] min-h-[90vh] md:min-h-screen overflow-hidden">
      <div className="mx-auto w-full flex flex-col lg:flex-row items-center gap-12 px-[5%] py-12">
        {/* LEFT CONTENT */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <p className="text-amber-600 text-xs font-bold uppercase tracking-widest mb-6">
            Trusted Partner Since 2014 · Pune, India
          </p>

          <h1
            className="font-black leading-[1.07] mb-6
            text-[2.2rem]
            sm:text-[2.3rem]
            md:text-[2.4rem]
            lg:text-[3.4rem]
            xl:text-[4.5rem]"
          >
            The Engineering <br />
            Team Behind
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-400">
              Your Next
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-400">
              Big Product.
            </span>
          </h1>

          <p className="text-slate-500 max-w-xl mx-auto lg:mx-0 mb-8">
            Albos Technologies has shipped 500+ digital products for startups
            and enterprises across 12 industries — from MVPs to complex
            enterprise platforms.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-8">
            <Link
              href="/contact"
              className="bg-gradient-to-br from-amber-500 btn-amber to-amber-600 text-white font-bold px-7 py-3 rounded-xl shadow-lg hover:-translate-y-1 transition text-center"
            >
              Start a Project →
            </Link>

            <Link
              href="/portfolio"
              className="border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 font-medium px-7 py-3 rounded-xl transition text-center"
            >
              View Our Work
            </Link>
          </div>

          {/* Proof badges */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-2">
            {proof.map(([icon, label]) => (
              <div
                key={label}
                className="flex items-center gap-1.5 bg-white border border-slate-200 rounded-full px-3 py-1.5 text-xs font-semibold text-slate-600 shadow-sm"
              >
                <span>{icon}</span>
                {label}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT DASHBOARD */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <DashboardMockup />
        </div>
      </div>
    </section>
  );
}
