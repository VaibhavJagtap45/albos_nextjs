"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

/* ─────────────────────────────────────────────────────────────
   GLOBAL STYLES
───────────────────────────────────────────────────────────── */
const GLOBAL_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800;900&family=Outfit:wght@300;400;500;600;700&display=swap');

:root {
  --cream:   #faf8f4;
  --white:   #ffffff;
  --ink:     #111318;
  --mid:     #6b7280;
  --light:   #e5e2db;
  --blue:    #2563eb;
  --blue-lt: #eff4ff;
  --teal:    #0d9488;
  --r: 14px;
}

*, *::before, *::after { box-sizing: border-box; margin:0; padding:0; }

.uiux-root {
  font-family: 'Outfit', sans-serif;
  background: var(--cream);
  color: var(--ink);
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
}

@keyframes fadeUp   { from{opacity:0;transform:translateY(32px)} to{opacity:1;transform:translateY(0)} }
@keyframes fadeIn   { from{opacity:0} to{opacity:1} }
@keyframes slideX   { from{transform:scaleX(0)} to{transform:scaleX(1)} }
@keyframes floatY   { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-14px)} }
@keyframes marquee  { from{transform:translateX(0)} to{transform:translateX(-50%)} }
@keyframes ripple   { 0%{transform:scale(1);opacity:.5} 100%{transform:scale(2.4);opacity:0} }
@keyframes barSlide { from{transform:scaleX(0)} to{transform:scaleX(1)} }
@keyframes shimmerSlide {
  0%  {background-position:-600px 0}
  100%{background-position:600px 0}
}

.reveal {
  opacity:0;
  transform:translateY(32px);
  transition:opacity .75s cubic-bezier(.22,1,.36,1), transform .75s cubic-bezier(.22,1,.36,1);
}
.reveal.on { opacity:1; transform:translateY(0); }

.lift {
  transition: transform .28s cubic-bezier(.22,1,.36,1), box-shadow .28s, border-color .22s;
}
.lift:hover {
  transform: translateY(-6px);
  box-shadow: 0 24px 48px -12px rgba(37,99,235,.14);
  border-color: var(--blue) !important;
}

.hero-ul { position:relative; display:inline; }
.hero-ul::after {
  content:'';
  position:absolute; bottom:-5px; left:0; right:0; height:4px;
  background:linear-gradient(90deg,var(--blue),var(--teal));
  border-radius:4px;
  transform-origin:left; transform:scaleX(0);
  animation:slideX .8s cubic-bezier(.22,1,.36,1) 1s forwards;
}

.float-img { animation:floatY 6s ease-in-out infinite; }

.ticker-wrap { overflow:hidden; }
.ticker-inner { display:flex; width:max-content; animation:marquee 24s linear infinite; }

.btn-primary {
  position:relative; overflow:hidden;
  background:var(--blue); color:#fff;
  font-family:'Outfit',sans-serif; font-weight:600; font-size:.95rem;
  border:none; cursor:pointer; text-decoration:none;
  display:inline-flex; align-items:center; gap:8px;
  transition:transform .22s, box-shadow .22s;
}


.sec-label {
  font-family:'Outfit',sans-serif;
  font-size:.72rem; font-weight:700;
  letter-spacing:.16em; text-transform:uppercase;
  color:var(--blue);
  display:flex; align-items:center; gap:10px;
  margin-bottom:10px;
}
.sec-label::before { content:''; display:block; width:28px; height:2px; background:var(--blue); flex-shrink:0; }

.step-num {
  font-family:'Playfair Display',serif;
  font-size:3rem; font-weight:900; line-height:1;
  color:transparent;
  -webkit-text-stroke:2px var(--light);
  transition:-webkit-text-stroke-color .3s;
}
.process-card:hover .step-num { -webkit-text-stroke-color:var(--blue); }
.process-card { position:relative; overflow:hidden; }
.process-card .card-bar {
  position:absolute; bottom:0; left:0; right:0; height:3px;
  background:linear-gradient(90deg,var(--blue),var(--teal));
  transform:scaleX(0); transform-origin:left;
  transition:transform .35s cubic-bezier(.22,1,.36,1);
}
.process-card:hover .card-bar { transform:scaleX(1); }

.tool-dot {
  position:absolute; top:12px; right:12px;
  width:8px; height:8px; border-radius:50%; background:var(--teal);
}
.tool-dot::after {
  content:''; position:absolute; inset:-4px; border-radius:50%;
  background:var(--teal); animation:ripple 1.8s ease-out infinite;
}

.portfolio-card { position:relative; overflow:hidden; }
.portfolio-card .overlay {
  position:absolute; inset:0;
  background:linear-gradient(to top,rgba(17,19,24,.8) 0%,transparent 55%);
  opacity:0; transition:opacity .32s;
}
.portfolio-card:hover .overlay { opacity:1; }
.portfolio-card .thumb { transition:transform .5s cubic-bezier(.22,1,.36,1); }
.portfolio-card:hover .thumb { transform:scale(1.07); }

.icon-ring {
  width:52px; height:52px; border-radius:14px;
  display:flex; align-items:center; justify-content:center;
  background:var(--blue-lt);
  transition:background .22s, transform .22s;
  flex-shrink:0;
}
.contact-card:hover .icon-ring { background:var(--blue); transform:scale(1.08); }
.contact-card:hover .icon-ring svg { stroke:#fff; }
`;

/* ─────────────────────────────────────────────────────────────
   HOOK
───────────────────────────────────────────────────────── */
function useReveal(threshold = 0.1) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add("on");
          obs.disconnect();
        }
      },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

/* ─────────────────────────────────────────────────────────────
   HERO
───────────────────────────────────────────────────────── */
const Hero = () => (
  <section
    style={{
      position: "relative",
      padding: "96px 24px 80px",
      background: "var(--white)",
      overflow: "hidden",
    }}
  >
    <div
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        background:
          "radial-gradient(ellipse 70% 55% at 80% 15%, rgba(37,99,235,.06),transparent 65%), radial-gradient(ellipse 50% 40% at 5% 85%, rgba(13,148,136,.05),transparent 60%)",
      }}
    />
    <div
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        backgroundImage:
          "linear-gradient(var(--light) 1px,transparent 1px),linear-gradient(90deg,var(--light) 1px,transparent 1px)",
        backgroundSize: "48px 48px",
        opacity: 0.3,
      }}
    />
    <div
      style={{
        maxWidth: 1380,
        margin: "0 auto",
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
          justifyContent: "space-between",
        }}
      >
        {/* text side */}
        <div style={{ flex: "1 1 420px", minWidth: 0 }}>
          <div
            className="sec-label"
            style={{ opacity: 0, animation: "fadeIn .5s .1s forwards" }}
          >
            UI/UX Design Services
          </div>

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
          <h1
            className="serif text-5xl sm:text-6xl md:text-[3.8rem] lg:text-[4.4rem] font-normal leading-[1.06] mb-7 hero-enter"
            style={{ animationDelay: "120ms" }}
          >
            Professional UI/UX Design
            <br />
            <em className="grad-text not-italic ">& Web/App Services</em>
          </h1>
          <p
            style={{
              fontSize: "1.05rem",
              color: "var(--mid)",
              lineHeight: 1.75,
              maxWidth: 500,
              marginBottom: 36,
              opacity: 0,
              animation: "fadeUp .7s .9s forwards",
            }}
          >
            We design stunning digital experiences — websites, dashboards, apps,
            and enterprise UI. Using Figma, Storybook, Tailwind CSS, and modern
            design frameworks.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            <a
              href="#quote"
              className=" py-3.5 px-7 rounded-[10px] bg-gradient-to-br from-amber-500 btn-amber to-amber-600 text-white font-bold px-12 py-4 rounded-xl shadow-lg hover:-translate-y-1 transition"
            >
              ✦ Get a Free Quote
            </a>
            <a href="#work" className="py-3.5 px-7 rounded-[10px]">
              View Our Work →
            </a>
          </div>
          <div
            style={{
              marginTop: 36,
              display: "flex",
              flexWrap: "wrap",
              gap: 28,
              opacity: 0,
              animation: "fadeIn .6s 1.3s forwards",
            }}
          >
            {[
              ["200+", "Projects"],
              ["98%", "Satisfaction"],
              ["50+", "Brands"],
            ].map(([n, l]) => (
              <div key={l}>
                <div
                  style={{
                    fontFamily: "'Playfair Display',serif",
                    fontSize: "1.9rem",
                    fontWeight: 900,
                    color: "var(--blue)",
                    lineHeight: 1,
                  }}
                >
                  {n}
                </div>
                <div
                  style={{
                    fontSize: ".72rem",
                    color: "var(--mid)",
                    fontWeight: 600,
                    marginTop: 3,
                    letterSpacing: ".06em",
                    textTransform: "uppercase",
                  }}
                >
                  {l}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* illustration */}
        <div
          style={{
            flex: "1 1 320px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            opacity: 0,
            animation: "fadeIn .9s .6s forwards",
          }}
        >
          <div style={{ position: "relative" }}>
            <div
              style={{
                position: "absolute",
                inset: -32,
                borderRadius: "50%",
                background:
                  "radial-gradient(circle,rgba(37,99,235,.07),transparent 70%)",
              }}
            />
            <Image
              src="https://cdni.iconscout.com/illustration/premium/thumb/ui-ux-designers-team-working-together-illustration-svg-download-png-6207662.png"
              width={800}
              height={600}
              alt="UI UX Design"
              className="float-img"
              style={{
                width: "100%",
                maxWidth: 480,
                filter: "drop-shadow(0 24px 48px rgba(37,99,235,.13))",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────────
   TICKER
───────────────────────────────────────────────────────── */
const Ticker = () => {
  const items = [
    "Figma Design",
    "Wireframing",
    "Design Systems",
    "Mobile UI",
    "SaaS Dashboards",
    "Brand Identity",
    "Prototyping",
    "Landing Pages",
    "Component Libraries",
    "eCommerce UI",
  ];
  return (
    <div
      style={{
        borderTop: "1px solid var(--light)",
        borderBottom: "1px solid var(--light)",
        padding: "14px 0",
        // background: "var(--ink)",
      }}
    >
      <div className="ticker-wrap">
        <div className="ticker-inner">
          {[...items, ...items].map((t, i) => (
            <span
              key={i}
              style={{
                padding: "0 28px",
                fontSize: ".76rem",
                fontWeight: 600,
                color: "rgb(24, 22, 22)",
                whiteSpace: "nowrap",
                letterSpacing: ".12em",
                textTransform: "uppercase",
              }}
            >
              {t}{" "}
              <span style={{ color: "var(--blue)", margin: "0 6px" }}>◆</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────────────────────
   SERVICES
───────────────────────────────────────────────────────── */
const serviceData = [
  {
    icon: "🖥️",
    title: "Website UI/UX Design",
    desc: "Conversion-focused website designs with modern layouts, accessibility, and micro-interactions.",
    bg: "#eff4ff",
  },
  {
    icon: "📱",
    title: "Mobile App Design",
    desc: "iOS & Android app UI compliant with Material Design & Human Interface Guidelines.",
    bg: "#f0fdf4",
  },
  {
    icon: "📊",
    title: "Dashboard & SaaS UI",
    desc: "Clean, functional dashboard UI with professional components and light/dark mode support.",
    bg: "#fefce8",
  },
  {
    icon: "🛒",
    title: "E-Commerce Design",
    desc: "User-friendly product pages, checkout flows, and high-performance eCommerce UI.",
    bg: "#fff1f2",
  },
  {
    icon: "🎨",
    title: "Brand Identity & Design System",
    desc: "Full design system, color palette, typography, components library & guidelines.",
    bg: "#f5f3ff",
  },
  {
    icon: "🚀",
    title: "Landing Page Design",
    desc: "High-conversion landing pages for marketing, SaaS, apps, and enterprise websites.",
    bg: "#ecfdf5",
  },
];

const Services = () => {
  const hRef = useReveal();
  return (
    <section
      id="services"
      style={{ padding: "46px 24px", background: "var(--white)" }}
    >
      <div style={{ maxWidth: 1380, margin: "0 auto" }}>
        <div ref={hRef} className="reveal" style={{ marginBottom: 52 }}>
          <div className="sec-label" style={{}}>
            What we offer
          </div>
          <h2
            style={{
              fontFamily: "'Playfair Display',serif",
              fontSize: "clamp(2rem,4vw,3rem)",
              fontWeight: 900,
              letterSpacing: "-.02em",
              marginBottom: 12,
            }}
          >
            Our UI/UX Expertise
          </h2>
          <p
            style={{
              color: "var(--mid)",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            We craft modern, user-friendly, conversion-focused designs trusted
            by global businesses, startups, and enterprise applications.
          </p>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(360px,1fr))",
            gap: 18,
          }}
        >
          {serviceData.map(({ icon, title, desc, bg }, i) => {
            const r = useReveal();
            return (
              <div
                key={title}
                ref={r}
                className="reveal lift"
                style={{
                  padding: "28px",
                  borderRadius: "var(--r)",
                  border: "1px solid var(--light)",
                  background: "var(--white)",
                  transitionDelay: `${i * 60}ms`,
                }}
              >
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 12,
                    background: bg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.5rem",
                    marginBottom: 18,
                  }}
                >
                  {icon}
                </div>
                <h3
                  style={{
                    fontFamily: "'Playfair Display',serif",
                    fontWeight: 700,
                    fontSize: "1.05rem",
                    marginBottom: 8,
                  }}
                >
                  {title}
                </h3>
                <p
                  style={{
                    fontSize: ".875rem",
                    color: "var(--mid)",
                    lineHeight: 1.65,
                  }}
                >
                  {desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────────────────────
   PROCESS
───────────────────────────────────────────────────────── */
const processData = [
  {
    num: "01",
    icon: "🔍",
    title: "Discovery & Research",
    desc: "Understanding business goals, users, competitors, and industry best practices.",
  },
  {
    num: "02",
    icon: "✏️",
    title: "Wireframing",
    desc: "Low-fidelity layouts to define structure, user flow, and key interactions.",
  },
  {
    num: "03",
    icon: "🎨",
    title: "UI Design",
    desc: "High-fidelity visual design focusing on branding, colors, spacing, and modern UI trends.",
  },
  {
    num: "04",
    icon: "▶️",
    title: "Prototyping",
    desc: "Interactive prototypes for usability tests and client feedback.",
  },
  {
    num: "05",
    icon: "🧩",
    title: "Design System",
    desc: "Reusable components, typography, color system, spacing & design tokens.",
  },
  {
    num: "06",
    icon: "📦",
    title: "Developer Handoff",
    desc: "Complete handoff via Figma + Storybook with assets, specs & UI guidelines.",
  },
];

const Process = () => {
  const hRef = useReveal();
  return (
    <section style={{ padding: "46px 24px", background: "var(--cream)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div ref={hRef} className="reveal" style={{ marginBottom: 52 }}>
          <div className="sec-label" style={{}}>
            How we work
          </div>
          <h2
            style={{
              fontFamily: "'Playfair Display',serif",
              fontSize: "clamp(2rem,4vw,3rem)",
              fontWeight: 900,
              letterSpacing: "-.02em",
              marginBottom: 12,
            }}
          >
            Our Design Process
          </h2>
          <p
            style={{
              color: "var(--mid)",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            A structured design workflow that ensures quality, clarity, and a
            seamless user experience.
          </p>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(360px,1fr))",
            gap: 18,
          }}
        >
          {processData.map(({ num, icon, title, desc }, i) => {
            const r = useReveal();
            return (
              <div
                key={title}
                ref={r}
                className="reveal lift process-card"
                style={{
                  padding: "28px",
                  borderRadius: "var(--r)",
                  border: "1px solid var(--light)",
                  background: "var(--white)",
                  transitionDelay: `${i * 70}ms`,
                }}
              >
                <div className="card-bar" />
                <div className="step-num" style={{ marginBottom: 6 }}>
                  {num}
                </div>
                <div style={{ fontSize: "1.4rem", marginBottom: 10 }}>
                  {icon}
                </div>
                <h4
                  style={{
                    fontFamily: "'Playfair Display',serif",
                    fontWeight: 700,
                    fontSize: "1rem",
                    marginBottom: 8,
                  }}
                >
                  {title}
                </h4>
                <p
                  style={{
                    fontSize: ".875rem",
                    color: "var(--mid)",
                    lineHeight: 1.65,
                  }}
                >
                  {desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────────────────────
   TOOLS
───────────────────────────────────────────────────────── */
const toolsData = [
  {
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    title: "Figma",
    desc: "Industry-leading UI/UX design tool.",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/storybook/storybook-original.svg",
    title: "Storybook",
    desc: "Component-driven UI development.",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    title: "Tailwind CSS",
    desc: "Utility-first CSS framework.",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
    title: "Material UI",
    desc: "Google's Material Design framework.",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    title: "Bootstrap 5",
    desc: "Responsive web design toolkit.",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/antdesign/antdesign-original.svg",
    title: "Ant Design",
    desc: "Enterprise-grade UI components.",
  },
  {
    img: "https://img.icons8.com/color/512/chakra-ui.png",
    title: "Chakra UI",
    desc: "Accessible, flexible UI library.",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-line.svg",
    title: "Adobe XD",
    desc: "Modern UI design & prototyping.",
  },
];

const Tools = () => {
  const hRef = useReveal();
  return (
    <section style={{ padding: "46px 24px", background: "var(--white)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div ref={hRef} className="reveal" style={{ marginBottom: 52 }}>
          <div className="sec-label" style={{}}>
            Our toolkit
          </div>
          <h2
            style={{
              fontFamily: "'Playfair Display',serif",
              fontSize: "clamp(2rem,4vw,3rem)",
              fontWeight: 900,
              letterSpacing: "-.02em",
              marginBottom: 12,
            }}
          >
            Design Tools & Frameworks
          </h2>
          <p
            style={{
              color: "var(--mid)",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Industry-leading tools trusted by top product teams worldwide.
          </p>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
            gap: 16,
          }}
        >
          {toolsData.map(({ img, title, desc }, i) => {
            const r = useReveal();
            return (
              <div
                key={title}
                ref={r}
                className="reveal lift"
                style={{
                  padding: "24px",
                  borderRadius: "var(--r)",
                  border: "1px solid var(--light)",
                  background: "var(--cream)",
                  textAlign: "center",
                  position: "relative",
                  transitionDelay: `${i * 50}ms`,
                }}
              >
                <div className="tool-dot" />
                <Image
                  src={img}
                  alt={title}
                  width={56}
                  height={56}
                  style={{
                    objectFit: "contain",
                    margin: "0 auto 14px",
                    display: "block",
                  }}
                />
                <h3
                  style={{
                    fontWeight: 700,
                    fontSize: ".95rem",
                    marginBottom: 6,
                  }}
                >
                  {title}
                </h3>
                <p
                  style={{
                    fontSize: ".78rem",
                    color: "var(--mid)",
                    lineHeight: 1.6,
                  }}
                >
                  {desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────────────────────
   PORTFOLIO
───────────────────────────────────────────────────────── */
const portfolioData = [
  {
    img: "https://img.freepik.com/free-vector/website-creator-concept-illustration_114360-2900.jpg",
    title: "SaaS Dashboard UI",
    badge: "Dashboard",
    color: "#2563eb",
  },
  {
    img: "https://img.freepik.com/free-vector/app-development-illustration_52683-47931.jpg",
    title: "Mobile App UI",
    badge: "App Design",
    color: "#0d9488",
  },
  {
    img: "https://img.freepik.com/free-vector/landing-page-concept-illustration_114360-7873.jpg",
    title: "Landing Page UI",
    badge: "Web Design",
    color: "#d97706",
  },
  {
    img: "https://img.freepik.com/free-vector/ecommerce-web-page-template_52683-67347.jpg",
    title: "eCommerce UI",
    badge: "eCommerce",
    color: "#e11d48",
  },
];

const Portfolio = () => {
  const hRef = useReveal();
  return (
    <section
      id="work"
      style={{ padding: "46px 24px", background: "var(--cream)" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div ref={hRef} className="reveal" style={{ marginBottom: 52 }}>
          <div className="sec-label" style={{}}>
            Our work
          </div>
          <h2
            style={{
              fontFamily: "'Playfair Display',serif",
              fontSize: "clamp(2rem,4vw,3rem)",
              fontWeight: 900,
              letterSpacing: "-.02em",
              marginBottom: 12,
            }}
          >
            UI/UX Portfolio
          </h2>
          <p
            style={{
              color: "var(--mid)",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Premium design projects crafted for global brands and startups.
          </p>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
            gap: 18,
          }}
        >
          {portfolioData.map(({ img, title, badge, color }, i) => {
            const r = useReveal();
            return (
              <div
                key={title}
                ref={r}
                className="reveal portfolio-card"
                style={{
                  borderRadius: "var(--r)",
                  overflow: "hidden",
                  border: "1px solid var(--light)",
                  background: "var(--white)",
                  transition:
                    "transform .32s cubic-bezier(.22,1,.36,1), box-shadow .32s",
                  transitionDelay: `${i * 70}ms`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow =
                    "0 24px 48px -12px rgba(0,0,0,.14)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div
                  style={{
                    height: 200,
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <Image
                    fill
                    src={img}
                    alt={title}
                    className="thumb"
                    style={{ objectFit: "cover", display: "block" }}
                  />
                  <div className="overlay" />
                </div>
                <div style={{ padding: "18px 20px" }}>
                  <h3
                    style={{
                      fontWeight: 700,
                      fontSize: "1rem",
                      marginBottom: 10,
                    }}
                  >
                    {title}
                  </h3>
                  <span
                    style={{
                      padding: "4px 12px",
                      borderRadius: 999,
                      background: color,
                      color: "#fff",
                      fontSize: ".72rem",
                      fontWeight: 600,
                      display: "inline-block",
                    }}
                  >
                    {badge}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────────────────────
   CONTACT
───────────────────────────────────────────────────────── */
const contactItems = [
  {
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"
        />
      </svg>
    ),
    label: "Phone",
    value: "+91 9766650411",
  },
  {
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"
        />
        <rect x="2" y="4" width="20" height="16" rx="2" />
      </svg>
    ),
    label: "Email",
    value: "info@albostechnologies.com",
  },
  {
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
        />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: "Location",
    value: "Office 78, 5th Floor, Kunal Plaza, Pune 411019",
  },
  {
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
        <circle cx="12" cy="12" r="10" />
      </svg>
    ),
    label: "Office Hours",
    value: "Mon – Sat, 10:00 AM – 7:00 PM",
  },
];

const ContactCards = () => {
  const hRef = useReveal();
  return (
    <section
      style={{ padding: "46px 24px 96px 20px", background: "var(--white)" }}
    >
      <div style={{ maxWidth: 1380, margin: "0 auto" }}>
        {/* CTA banner */}
        <div
          ref={hRef}
          className="reveal"
          style={{
            borderRadius: 20,
            padding: "56px 44px",
            background:
              "linear-gradient(135deg,#1e3a8a 0%,#1d4ed8 50%,#0284c7 100%)",
            color: "#fff",
            marginBottom: 48,
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
            style={{
              position: "absolute",
              top: -70,
              right: -70,
              width: 260,
              height: 260,
              borderRadius: "50%",
              background: "rgba(255,255,255,.05)",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: -50,
              left: 180,
              width: 180,
              height: 180,
              borderRadius: "50%",
              background: "rgba(255,255,255,.04)",
            }}
          />
          <div style={{ position: "relative" }}>
            <div
              style={{
                fontFamily: "'Playfair Display',serif",
                fontSize: "clamp(1.5rem,3vw,2.1rem)",
                fontWeight: 900,
                marginBottom: 10,
              }}
            >
              Ready to Grow Your Business?
            </div>
            <p
              style={{
                color: "rgba(255,255,255,.72)",
                maxWidth: 440,
                lineHeight: 1.7,
                fontSize: ".95rem",
              }}
            >
              Speak with our experts today. We help brands scale with powerful
              development, design, automation, and cloud solutions.
            </p>
          </div>
          <div
            style={{
              display: "flex",
              gap: 12,
              flexWrap: "wrap",
              position: "relative",
            }}
          >
            <a
              href="#quote"
              style={{
                padding: "14px 28px",
                borderRadius: 10,
                background: "#fff",
                color: "var(--blue)",
                fontWeight: 700,
                textDecoration: "none",
                fontSize: ".9rem",
                display: "inline-block",
                transition: "transform .2s, box-shadow .2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,.18)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              ✦ Get a Free Quote
            </a>
            <a
              href="tel:+919766650411"
              style={{
                padding: "14px 28px",
                borderRadius: 10,
                background: "rgba(255,255,255,.1)",
                color: "#fff",
                border: "1.5px solid rgba(255,255,255,.25)",
                fontWeight: 600,
                textDecoration: "none",
                fontSize: ".9rem",
                display: "inline-block",
                transition: "background .2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "rgba(255,255,255,.2)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "rgba(255,255,255,.1)")
              }
            >
              📞 Call Sales
            </a>
          </div>
        </div>

        {/* contact cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
            gap: 16,
          }}
        >
          {contactItems.map(({ svg, label, value }, i) => {
            const r = useReveal();
            return (
              <div
                key={label}
                ref={r}
                className="reveal lift contact-card"
                style={{
                  padding: "24px",
                  borderRadius: "var(--r)",
                  border: "1px solid var(--light)",
                  background: "var(--cream)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                  transitionDelay: `${i * 70}ms`,
                }}
              >
                <div className="icon-ring">{svg}</div>
                <div>
                  <div
                    style={{
                      fontWeight: 700,
                      fontSize: ".9rem",
                      marginBottom: 4,
                    }}
                  >
                    {label}
                  </div>
                  <div
                    style={{
                      fontSize: ".85rem",
                      color: "var(--mid)",
                      lineHeight: 1.6,
                    }}
                  >
                    {value}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────────────────────
   ROOT
───────────────────────────────────────────────────────── */
export default function UIUXPage() {
  return (
    <>
      <style>{GLOBAL_CSS}</style>
      <div className="uiux-root">
        <main>
          <Hero />
          <Ticker />
          <Services />
          <Process />
          <Tools />
          <Portfolio />
          <ContactCards />
        </main>
      </div>
    </>
  );
}
