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
  description: "Learn about Albos Technologies, our journey since 2014, our values, and the founder ChandraPrakash Singh Tomar driving your next big product.",
  path: "/about",
});

function AboutHero() {
  return (
    <section className="relative pt-32 pb-20 px-[5%] overflow-hidden z-10">
      <div className="hero-grid absolute inset-0 pointer-events-none" />
      <div className="gold-line" />
      <div className="relative z-10 max-w-3xl">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-px bg-gradient-to-r from-amber-500 btn-amber to-transparent" />
          <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-amber-600">
            About Albos Technologies
          </span>
        </div>
        <h1
          className="font-display font-black leading-[0.97] tracking-tight mb-6"
          style={{ fontSize: "clamp(2.8rem, 5vw, 5rem)" }}
        >
          Building Software<br />
          <span className="text-slate-400 font-bold">That Actually</span><br />
          <span className="text-amber-500">Works.</span>
        </h1>
        <p className="text-slate-500 text-lg max-w-[560px] leading-relaxed mb-8">
          Founded in Pune in 2014 as a 3-person web studio, Albos Technologies has grown into a
          full-spectrum software engineering partner trusted by 320+ clients across 18 countries.
          One constant: we treat every project as if it were our own product.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="bg-gradient-to-br from-amber-500 btn-amber to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold px-8 py-3.5 rounded-xl shadow-lg transition-all text-sm"
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
    </section>
  );
}

const VALUES = [
  ["🎯", "Outcome-Obsessed",  "We measure success by the results your product achieves, not just clean commits and closed tickets."],
  ["🔒", "Security First",    "Every codebase ships OWASP-compliant with encrypted data, RBAC, and audit-ready infrastructure as the default."],
  ["🤝", "Radical Honesty",   "We tell you when an idea won't work, when a scope is too wide, and when a timeline is unrealistic. You deserve to know."],
  ["🚀", "Speed Without Debt","Agile 2-week sprints, automated testing, CI/CD from day one. Fast delivery without storing tech debt for later."],
];

function Values() {
  return (
    <section className="py-24 px-[5%] bg-white z-10 relative">
      <div className="mb-14 reveal">
        <STag color="blue">Our Values</STag>
        <h2 className="font-display font-black text-4xl md:text-5xl tracking-tight leading-tight">
          How We Think<br />
          <span className="text-slate-400 font-bold">& Why It Matters</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 reveal">
        {VALUES.map(([icon, title, desc]) => (
          <div key={title} className="bg-stone-50 border border-slate-200 rounded-2xl p-6 hover:shadow-md transition-all">
            <div className="text-3xl mb-4">{icon}</div>
            <h3 className="font-display font-bold text-slate-800 text-lg mb-2">{title}</h3>
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
