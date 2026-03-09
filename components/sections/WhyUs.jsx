import STag from "@/components/ui/STag";

const WHY_ITEMS = [
  [
    "🏆",
    "10+ Years, Zero Compromises",
    "Founded 2014. Same code quality, same security standards, same communication discipline — every single project.",
  ],
  [
    "🔒",
    "Security Built In, Not Bolted On",
    "OWASP standards, RBAC, encrypted data, secure APIs — as defaults, not add-ons. Audit-ready architecture every time.",
  ],
  [
    "⚡",
    "Weekly Demos, Not Monthly Surprises",
    "2-week sprints with video demos. Working software constantly, not a reveal at the end that misses the mark.",
  ],
  [
    "🌍",
    "Dedicated Account Manager",
    "One person who knows your business, your codebase, your goals. Reachable on WhatsApp, call, and email.",
  ],
];

const TIMELINE = [
  [
    "2014",
    "Founded in Pune",
    "Started as a 3-person web studio. One principle: ship clean code that doesn't break.",
    false,
  ],
  [
    "2016",
    "First International Client",
    "Landed a UK e-commerce project — the start of our global client base.",
    false,
  ],
  [
    "2018",
    "Mobile & IoT Practice",
    "Added native Android/iOS and embedded firmware. 50 clients in the roster.",
    false,
  ],
  [
    "2021",
    "Blockchain Division",
    "Launched Web3 and DeFi engineering. 150+ active clients.",
    false,
  ],
  [
    "2024",
    "Top Developer — Clutch India",
    "4.9★ client satisfaction. Recognised as top-rated dev company.",
    false,
  ],
  [
    "Now",
    "500+ Projects. Still Growing.",
    "AI, Game Dev, enterprise platforms. 320+ clients across 18 countries.",
    true,
  ],
];

export default function WhyUs() {
  return (
    <section id="why" className="py-12 px-[5%] bg-white relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="reveal">
          <STag color="gold">Why Albos</STag>
          <h2 className="font-display font-black text-4xl md:text-5xl tracking-tight leading-tight mb-4">
            We Own
            <br />
            Outcomes,
            <br />
            <span className="text-slate-400 font-bold">Not Just Code.</span>
          </h2>
          <p className="text-slate-500 text-sm leading-relaxed mb-8 max-w-[400px]">
            10 years of shipping. 320+ clients. 98% retention. Because we treat
            every project like it's ours.
          </p>
          <div className="flex flex-col gap-5">
            {WHY_ITEMS.map(([icon, title, desc]) => (
              <div key={title} className="flex gap-4 items-start group">
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-slate-50 border border-slate-200 group-hover:border-amber-200 group-hover:bg-amber-50 flex items-center justify-center text-xl transition-all duration-200">
                  {icon}
                </div>
                <div>
                  <div className="font-display font-bold text-slate-800 text-sm mb-1">
                    {title}
                  </div>
                  <div className="text-xs text-slate-400 leading-relaxed">
                    {desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal mt-[70px] bg-stone-50 border border-slate-200 rounded-3xl p-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-50" />
          <STag color="blue">10-Year Journey</STag>
          <div className="mt-4">
            {TIMELINE.map(([yr, title, desc, isGold], i) => (
              <div
                key={yr}
                className="pb-6 last:pb-0"
                style={{
                  display: "grid",
                  gridTemplateColumns: "48px 14px 1fr",
                  columnGap: "1rem",
                }}
              >
                <div
                  className={`font-display font-black text-xs pt-0.5 ${isGold ? "text-amber-500" : "text-blue-700"}`}
                >
                  {yr}
                </div>
                <div className="flex flex-col items-center">
                  <div
                    className={`w-3 h-3 rounded-full mt-0.5 flex-shrink-0 ${isGold ? "bg-amber-400 shadow-lg shadow-amber-200" : "bg-blue-600 shadow-sm shadow-blue-200"}`}
                  />
                  {i < TIMELINE.length - 1 && (
                    <div className="flex-1 w-px bg-slate-200 mt-1" />
                  )}
                </div>
                <div>
                  <div className="font-display font-bold text-slate-800 text-sm mb-0.5">
                    {title}
                  </div>
                  <div className="text-xs text-slate-400 leading-relaxed">
                    {desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
