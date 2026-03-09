import Link from "next/link";
import Portfolio from "@/components/sections/Portfolio";
import Testimonials from "@/components/sections/Testimonials";
import TrustBar from "@/components/sections/TrustBar";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Our Work & Portfolio | Albos Technologies",
  description: "Explore Albos Technologies' 500+ shipped products from FinTech payment gateways to industrial IoT fleets. Real outcomes, no excuses.",
  path: "/portfolio",
});

function PortfolioHero() {
  return (
    <section className="relative pt-32 pb-20 px-[5%] overflow-hidden z-10">
      <div className="hero-grid absolute inset-0 pointer-events-none" />
      <div className="gold-line" />
      <div className="relative z-10 max-w-3xl">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-px bg-gradient-to-r from-amber-500 btn-amber to-transparent" />
          <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-amber-600">
            Our Work
          </span>
        </div>
        <h1
          className="font-display font-black leading-[0.97] tracking-tight mb-6"
          style={{ fontSize: "clamp(2.8rem, 5vw, 5rem)" }}
        >
          500+ Products.<br />
          <span className="text-slate-400 font-bold">Real Outcomes.</span><br />
          <span className="text-amber-500">No Excuses.</span>
        </h1>
        <p className="text-slate-500 text-lg max-w-[520px] leading-relaxed mb-8">
          From FinTech payment gateways to industrial IoT fleets — here's a sample of what we've shipped
          across 12 industries and 18 countries. Every project is production-live.
        </p>
        <Link
          href="/contact"
          className="bg-gradient-to-br from-amber-500 btn-amber to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold px-8 py-3.5 rounded-xl shadow-lg transition-all text-sm"
        >
          Start Your Project →
        </Link>
      </div>
    </section>
  );
}

const INDUSTRIES = ["All", "FinTech", "HealthTech", "IoT", "E-Commerce", "Blockchain", "Gaming"];

function IndustryFilter() {
  return (
    <div className="px-[5%] py-6 bg-white border-b border-slate-200 relative z-10">
      <div className="flex flex-wrap gap-2">
        {INDUSTRIES.map((ind, i) => (
          <button
            key={ind}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-all ${
              i === 0
                ? "bg-blue-700 text-white border-blue-700"
                : "bg-white text-slate-500 border-slate-200 hover:border-slate-300 hover:text-slate-800"
            }`}
          >
            {ind}
          </button>
        ))}
      </div>
    </div>
  );
}

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
