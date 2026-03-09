import STag from "@/components/ui/STag";

const CARDS = [
  {
    result: "99.97% uptime",
    resultSub: "Fintech platform — live since 2023",
    quote:
      "Albos delivered our payment platform on time and on budget. Their security architecture exceeded our compliance requirements. We renewed without hesitation.",
    av: "RK",
    name: "Rajiv K.",
    role: "CTO, PayFlow — Dubai, UAE",
    verified: "Verified on Clutch",
  },
  {
    result: "50K users in 3 months",
    resultSub: "HealthTech Flutter app",
    quote:
      "We hired them for an MVP and gave them our entire roadmap. Their team pushed back when our ideas were bad — exactly what we needed from an engineering partner.",
    av: "SL",
    name: "Sarah L.",
    role: "Founder, CareSync — London, UK",
    verified: "Verified on Google",
  },
  {
    result: "60% less downtime",
    resultSub: "250-device IoT fleet · 18 months running",
    quote:
      "The IoT firmware and cloud backend have been flawless for 18 months. OTA management alone has saved us thousands in engineer visits. Exceptional work.",
    av: "MV",
    name: "Manfred V.",
    role: "VP Engineering, AutoSens GmbH — Germany",
    verified: "Verified on LinkedIn",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-12 px-[5%] bg-slate-50 relative z-10"
    >
      <div className="flex justify-between items-end flex-wrap gap-6 mb-14 reveal">
        <div>
          <STag color="teal">Client Results</STag>
          <h2 className="font-display font-black text-4xl md:text-5xl tracking-tight leading-tight">
            What Clients Say
            <br />
            <span className="text-slate-400 font-bold">After We Deliver</span>
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 reveal">
        {CARDS.map((c, i) => (
          <div
            key={i}
            className="relative bg-white border border-slate-200 rounded-2xl p-6 hover:border-slate-300 hover:shadow-lg transition-all duration-300 overflow-hidden"
          >
            <div className="absolute top-0 right-4 font-serif text-[8rem] text-blue-700 opacity-[0.04] leading-none pointer-events-none select-none">
              "
            </div>

            <div className="text-amber-400 text-sm mb-4 tracking-wider">
              ★★★★★
            </div>

            <div className="bg-teal-50 border border-teal-100 rounded-xl p-3 mb-4">
              <div className="font-display font-black text-xl text-teal-700 leading-none">
                {c.result}
              </div>
              <div className="text-[10px] text-slate-400 mt-1">
                {c.resultSub}
              </div>
            </div>

            <blockquote className="text-slate-500 text-sm leading-relaxed italic mb-5">
              "{c.quote}"
            </blockquote>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-teal-500 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                {c.av}
              </div>
              <div>
                <div className="font-display font-bold text-slate-800 text-sm">
                  {c.name}
                </div>
                <div className="text-[11px] text-slate-400">{c.role}</div>
                <div className="flex items-center gap-1 bg-teal-50 border border-teal-100 rounded px-1.5 py-0.5 text-[9px] font-bold text-teal-600 mt-1 w-fit">
                  ✓ {c.verified}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
