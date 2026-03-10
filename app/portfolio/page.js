import Link from "next/link";
import Portfolio from "@/components/sections/Portfolio";
import Testimonials from "@/components/sections/Testimonials";
import TrustBar from "@/components/sections/TrustBar";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Our Work & Portfolio | Albos Technologies",
  description:
    "Explore Albos Technologies' 500+ shipped products from FinTech payment gateways to industrial IoT fleets. Real outcomes, no excuses.",
  path: "/portfolio",
});

/* ──────────────────────────────────────────────────────────
   Reusable HeroLayout
   - left content (title, lead, cta)
   - right content (illustration / mockup)
────────────────────────────────────────────────────────── */
function HeroLayout({ left, right, className = "" }) {
  return (
    <section
      className={`relative pt-28 pb-20 px-[5%] overflow-hidden ${className}`}
    >
      <div className="hero-grid absolute inset-0 pointer-events-none" />
      <div className="gold-line" />
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="w-full lg:w-1/2">{left}</div>
        <div className="w-full lg:w-1/2 flex justify-center">{right}</div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────
   DashboardMockup (Right mockup)
   Keep markup small and self-contained — easy to swap
────────────────────────────────────────────────────────── */
function DashboardMockup() {
  const bars = [55, 70, 48, 88, 65, 95];
  const colors = ["#1D4ED8", "#059669"];

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
    <div className="relative w-full max-w-[420px] mx-auto">
      {/* Top floating stat */}
      <div className="absolute -top-4 right-0 scale-95 sm:scale-100 bg-gradient-to-br from-amber-50 to-white border border-amber-200 rounded-xl px-4 py-3 flex items-center gap-3 shadow-lg z-20">
        <div>
          <div className="font-black text-2xl text-amber-500 leading-none">
            500+
          </div>
          <div className="text-xs text-slate-400 mt-0.5">Projects shipped</div>
        </div>
        <div className="text-2xl">🚀</div>
      </div>

      {/* Browser card */}
      <div className="bg-white border border-slate-200 rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-slate-50 border-b border-slate-100 px-4 py-2.5 flex items-center gap-2">
          <div className="flex gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
          </div>
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

          {/* Mini bar chart */}
          <div className="rounded-xl bg-slate-50 border border-slate-100 p-3 mb-3">
            <div className="flex justify-between items-end h-10 gap-1.5">
              {bars.map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t-sm"
                  style={{
                    height: `${h}%`,
                    background: i % 2 === 0 ? colors[0] : colors[1],
                    opacity: 0.45 + i * 0.06,
                    transition: "height .6s ease",
                  }}
                />
              ))}
            </div>
            <div className="text-[10px] text-slate-400 text-center mt-2 font-medium">
              Monthly Revenue Trend
            </div>
          </div>

          {/* Recent activity */}
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

      {/* Bottom floating callout */}
      <div className="absolute -bottom-4 left-0 scale-95 sm:scale-100 bg-white border border-slate-200 rounded-2xl px-4 py-3 flex items-center gap-3 shadow-xl z-20 min-w-[200px]">
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

/* ──────────────────────────────────────────────────────────
   PortfolioHero: left text + right mockup using HeroLayout
────────────────────────────────────────────────────────── */
function PortfolioHero() {
  const left = (
    <>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-8 h-px bg-gradient-to-r from-amber-500 to-transparent" />
        <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-amber-600">
          Our Work
        </span>
      </div>

      <h1
        className="font-display font-black leading-[0.97] tracking-tight mb-6"
        style={{ fontSize: "clamp(2.8rem, 5vw, 5rem)" }}
      >
        500+ Products.
        <br />
        <span className="text-slate-400 font-bold">Real Outcomes.</span>
        <br />
        <span className="text-amber-500">No Excuses.</span>
      </h1>

      <p className="text-slate-500 text-lg max-w-[520px] leading-relaxed mb-8">
        From FinTech payment gateways to industrial IoT fleets — here's a sample
        of what we've shipped across 12 industries and 18 countries. Every
        project is production-live.
      </p>

      <Link
        href="/contact"
        className="bg-gradient-to-br from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold px-8 py-3.5 rounded-xl shadow-lg transition-all text-sm"
      >
        Start Your Project →
      </Link>
    </>
  );

  const right = <DashboardMockup />;

  return <HeroLayout left={left} right={right} />;
}

/* ──────────────────────────────────────────────────────────
   Industry filter
────────────────────────────────────────────────────────── */
const INDUSTRIES = [
  "All",
  "FinTech",
  "HealthTech",
  "IoT",
  "E-Commerce",
  "Blockchain",
  "Gaming",
];

function IndustryFilter() {
  return (
    <div className="px-[5%] py-6 bg-white border-b border-slate-200 relative z-10">
      <div className="flex flex-wrap gap-2">
        {INDUSTRIES.map((ind, i) => (
          <button
            key={ind}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-all ${i === 0 ? "bg-blue-700 text-white border-blue-700" : "bg-white text-slate-500 border-slate-200 hover:border-slate-300 hover:text-slate-800"}`}
          >
            {ind}
          </button>
        ))}
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────
   Page export
────────────────────────────────────────────────────────── */
export default function PortfolioPage() {
  return (
    <>
      <PortfolioHero />
      <TrustBar />
      <IndustryFilter />
      <Portfolio />
      <Testimonials />
    </>
  );
}
