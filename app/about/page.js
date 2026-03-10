import Link from "next/link";
import STag from "@/components/ui/STag";
import WhyUs from "@/components/sections/WhyUs";
import TechMarquee from "@/components/sections/TechMarquee";
import TrustBar from "@/components/sections/TrustBar";
import Founder from "@/components/sections/Founder";
import CareerPage from "@/app/careers/page";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "About Us | Albos Technologies",
  description:
    "Learn about Albos Technologies, our journey since 2014, our values, and the founder ChandraPrakash Singh Tomar driving your next big product.",
  path: "/about",
});

/* ───────── Dashboard Mockup ───────── */
function DashboardMockup() {
  const bars = [55, 70, 48, 88, 65, 95];
  const colors = ["#1D4ED8", "#0D9488"];

  const activity = [
    {
      dot: "bg-teal-400",
      text: "v2.4.1 deployed to production",
      time: "2m ago",
    },
    {
      dot: "bg-blue-400",
      text: "Sprint 24 review — all stories done",
      time: "1h ago",
    },
    { dot: "bg-amber-400", text: "Security audit passed ✓", time: "3h ago" },
  ];

  return (
    <div className="relative w-full max-w-[340px] sm:max-w-[380px] md:max-w-[420px] mx-auto">
      {/* Floating Stat */}
      <div className="absolute -top-4 right-0 sm:-right-4 scale-90 sm:scale-100 bg-gradient-to-br from-amber-50 to-white border border-amber-200 rounded-xl px-4 py-3 flex items-center gap-3 shadow-lg z-20">
        <div>
          <div className="font-black text-2xl text-amber-500 leading-none">
            500+
          </div>
          <div className="text-xs text-slate-400 mt-0.5">Projects shipped</div>
        </div>
        <div className="text-2xl">🚀</div>
      </div>

      {/* Browser Card */}
      <div className="bg-white border border-slate-200 rounded-2xl shadow-xl overflow-hidden">
        {/* Browser bar */}
        <div className="bg-slate-50 border-b border-slate-100 px-4 py-2.5 flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
          <div className="ml-2 bg-white border border-slate-200 rounded px-2.5 py-0.5 text-[10px] font-mono text-slate-400">
            dashboard.albos.dev/projects
          </div>
        </div>

        <div className="p-5">
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <div className="font-bold text-slate-800 text-sm">
              Live Dashboard
            </div>
            <div className="flex items-center gap-1.5 bg-teal-50 border border-teal-200 rounded-full px-2.5 py-0.5 text-[10px] font-bold text-teal-600 tracking-wider">
              <div className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
              LIVE
            </div>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-3 gap-2.5 mb-4">
            {[
              ["Uptime", "99.9%", "↑ SLA"],
              ["Sprints", "24", "↑ On Track"],
              ["Delivered", "100%", "↑ On Time"],
            ].map(([l, v, d]) => (
              <div
                key={l}
                className="bg-slate-50 border border-slate-100 rounded-xl p-3"
              >
                <div className="text-[9px] text-slate-400 font-semibold uppercase mb-1">
                  {l}
                </div>
                <div className="font-black text-lg text-slate-800 leading-none">
                  {v}
                </div>
                <div className="text-[9px] text-teal-600 font-semibold mt-1">
                  {d}
                </div>
              </div>
            ))}
          </div>

          {/* Chart */}
          <div className="bg-slate-50 border border-slate-100 rounded-xl p-3 mb-3">
            <div className="flex justify-between items-center mb-2">
              <span className="text-[9px] text-slate-400">Sprint Velocity</span>
              <span className="text-[9px] text-teal-600 font-bold bg-teal-50 px-1.5 py-0.5 rounded">
                ↑ +18%
              </span>
            </div>
            <div className="flex items-end gap-1.5 h-10">
              {bars.map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t animate-[grow_0.8s_ease_forwards]"
                  style={{
                    height: `${h}%`,
                    background: colors[i % 2],
                    opacity: 0.45 + i * 0.09,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Activity */}
          <div className="flex flex-col gap-1.5">
            {activity.map(({ dot, text, time }) => (
              <div
                key={text}
                className="flex items-center gap-2 bg-slate-50 border border-slate-100 rounded-lg px-3 py-2"
              >
                <div className={`w-1.5 h-1.5 rounded-full ${dot}`} />
                <span className="text-[10px] text-slate-500 flex-1">
                  {text}
                </span>
                <span className="text-[9px] text-slate-400">{time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom floating card */}
      <div className="absolute -bottom-4 left-0 sm:-left-4 scale-90 sm:scale-100 bg-white border border-slate-200 rounded-2xl px-4 py-3 flex items-center gap-3 shadow-xl z-20 min-w-[200px]">
        <span className="text-2xl">🎉</span>
        <div>
          <div className="text-sm font-bold text-slate-800">Build shipped!</div>
          <div className="text-xs text-slate-400 mt-0.5">
            0 bugs · On schedule
          </div>
        </div>
      </div>
    </div>
  );
}
function AboutHero() {
  return (
    <section className="relative pt-32 pb-20 px-[5%] overflow-hidden z-10">
      <div className="hero-grid absolute inset-0 pointer-events-none" />
      <div className="gold-line" />

      {/* main layout */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-14">
        {/* LEFT CONTENT */}
        <div className="w-full lg:w-1/2 max-w-2xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-gradient-to-r from-amber-500 to-transparent" />
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-amber-600">
              About Albos Technologies
            </span>
          </div>

          <h1
            className="font-display font-black leading-[0.97] tracking-tight mb-6"
            style={{ fontSize: "clamp(2.8rem, 5vw, 5rem)" }}
          >
            Building Software
            <br />
            <span className="text-slate-400 font-bold">That Actually</span>
            <br />
            <span className="text-amber-500">Works.</span>
          </h1>

          <p className="text-slate-500 text-lg max-w-[560px] leading-relaxed mb-8">
            Founded in Pune in 2014 as a 3-person web studio, Albos Technologies
            has grown into a full-spectrum software engineering partner trusted
            by 320+ clients across 18 countries. One constant: we treat every
            project as if it were our own product.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="bg-gradient-to-br from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold px-8 py-3.5 rounded-xl shadow-lg transition-all text-sm"
            >
              Work With Us →
            </Link>

            <Link
              href="/portfolio"
              className="border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 font-medium px-8 py-3.5 rounded-xl transition-all text-sm"
            >
              See Our Work
            </Link>
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

const VALUES = [
  [
    "🎯",
    "Outcome-Obsessed",
    "We measure success by the results your product achieves, not just clean commits and closed tickets.",
  ],
  [
    "🔒",
    "Security First",
    "Every codebase ships OWASP-compliant with encrypted data, RBAC, and audit-ready infrastructure as the default.",
  ],
  [
    "🤝",
    "Radical Honesty",
    "We tell you when an idea won't work, when a scope is too wide, and when a timeline is unrealistic. You deserve to know.",
  ],
  [
    "🚀",
    "Speed Without Debt",
    "Agile 2-week sprints, automated testing, CI/CD from day one. Fast delivery without storing tech debt for later.",
  ],
];

function Values() {
  return (
    <section className="py-24 px-[5%] bg-white z-10 relative">
      <div className="mb-14 reveal">
        <STag color="blue">Our Values</STag>
        <h2 className="font-display font-black text-4xl md:text-5xl tracking-tight leading-tight">
          How We Think
          <br />
          <span className="text-slate-400 font-bold">& Why It Matters</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 reveal">
        {VALUES.map(([icon, title, desc]) => (
          <div
            key={title}
            className="bg-stone-50 border border-slate-200 rounded-2xl p-6 hover:shadow-md transition-all"
          >
            <div className="text-3xl mb-4">{icon}</div>
            <h3 className="font-display font-bold text-slate-800 text-lg mb-2">
              {title}
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <TrustBar />
      <Founder />
      <Values />
      <WhyUs />
      <CareerPage />
      <TechMarquee />
    </>
  );
}
