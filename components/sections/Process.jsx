import STag from "@/components/ui/STag";

const STEPS = [
  {
    n: "01",
    icon: "🔍",
    title: "Discovery",
    desc: "Free consultation, requirement scoping, tech stack recommendation, honest timeline.",
  },
  {
    n: "02",
    icon: "🎨",
    title: "Design & Prototype",
    desc: "Wireframes, user flows, high-fidelity UI — approved before any code is written.",
  },
  {
    n: "03",
    icon: "⚙️",
    title: "Agile Build",
    desc: "2-week sprints with video demos. Working software every step of the way.",
  },
  {
    n: "04",
    icon: "🧪",
    title: "QA & Security",
    desc: "Functional, performance, and security testing on real devices before any release.",
  },
  {
    n: "05",
    icon: "🚀",
    title: "Launch & Support",
    desc: "Deployment, monitoring, bug fixes, and long-term maintenance. We stay after launch.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-12 px-[5%] bg-white relative z-10">
      {/* Header */}
      <div className="mb-14 reveal">
        <STag color="teal">Our Process</STag>
        <h2 className="font-display font-black text-4xl md:text-5xl tracking-tight leading-tight">
          Idea to Live —<br />
          <span className="text-slate-400 font-bold">No Black Boxes.</span>
        </h2>
        <p className="text-slate-500 mt-3 max-w-[420px] text-sm leading-relaxed">
          You know exactly what happens at every stage. Weekly demos, not
          monthly surprises.
        </p>
      </div>

      {/* Steps */}
      <div className="relative grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 reveal">
        {/* Connector line (desktop only) */}
        <div className="hidden lg:block absolute top-6 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

        {STEPS.map((s) => (
          <div
            key={s.n}
            className="flex flex-col items-center text-center relative z-10 group"
          >
            <div
              className="w-12 h-12 rounded-full bg-white border-2 border-slate-200
              group-hover:border-blue-600 group-hover:bg-blue-700 group-hover:shadow-lg group-hover:shadow-blue-100
              flex items-center justify-center font-display font-black text-slate-400 group-hover:text-white
              transition-all duration-300 text-sm mb-5"
            >
              {s.n}
            </div>
            <div className="text-2xl mb-2">{s.icon}</div>
            <div className="font-display font-bold text-slate-800 text-sm mb-1.5 tracking-tight">
              {s.title}
            </div>
            <div className="text-xs text-slate-400 leading-relaxed">
              {s.desc}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
