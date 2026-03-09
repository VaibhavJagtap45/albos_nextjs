import Contact from "@/components/sections/Contact";
import TrustBar from "@/components/sections/TrustBar";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Contact Us | Albos Technologies",
  description: "Get in touch with Albos Technologies. Free consultation, honest quote, and 24-hour response for your next big software project.",
  path: "/contact",
});

function ContactHero() {
  return (
    <section className="relative pt-32 pb-8 px-[5%] overflow-hidden z-10">
      <div className="hero-grid absolute inset-0 pointer-events-none" />
      <div className="gold-line" />
      <div className="relative z-10 max-w-2xl">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-px bg-gradient-to-r from-amber-500 btn-amber to-transparent" />
          <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-amber-600">
            Let's Talk
          </span>
        </div>
        <h1
          className="font-display font-black leading-[0.97] tracking-tight mb-4"
          style={{ fontSize: "clamp(2.8rem, 5vw, 5rem)" }}
        >
          Your Next Build<br />
          <span className="text-amber-500">Starts Here.</span>
        </h1>
        <p className="text-slate-500 text-lg max-w-[480px] leading-relaxed">
          Free consultation. Honest quote. 24-hour response. No obligation.
        </p>
      </div>
    </section>
  );
}

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <TrustBar />
      <Contact />
    </>
  );
}
