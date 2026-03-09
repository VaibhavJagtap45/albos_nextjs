import React from "react";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Careers & Jobs | Albos Technologies",
  description: "Join Albos Technologies. We are hiring Customer Support Executives, Developers, and Sales Professionals to fuel our global software operations.",
  path: "/careers",
});

const Pill = ({ children }) => (
  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/20 backdrop-blur text-white border border-white/20">
    {children}
  </span>
);

const Feature = ({ icon, title, text }) => (
  <div className="group p-5 rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
    <div className="text-2xl mb-2">{icon}</div>
    <h4 className="font-semibold text-slate-800 mb-1">{title}</h4>
    <p className="text-sm text-slate-600">{text}</p>
  </div>
);

export default function CareerPage() {

  const responsibilities = [
    "Make outbound calls to potential clients",
    "Explain company services (Software, Website, IT Services)",
    "Understand client requirements and record details",
    "Maintain daily call & follow-up records",
    "Generate and forward qualified leads",
    "Coordinate with internal team for meetings",
  ];

  const candidate = [
    "Female candidate preferred",
    "Telugu & English speaking required",
    "Good communication & convincing skills",
    "Basic computer knowledge",
    "Freshers & experienced both can apply",
    "Positive & target-oriented attitude",
  ];

  return (
    <main className="bg-white">

      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-700 via-sky-600 to-indigo-700 text-white py-20">
        
        {/* background glow */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-white/10 rounded-full blur-3xl"/>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-indigo-300/20 rounded-full blur-3xl"/>

        <div className="mx-auto w-full px-[5%] grid lg:grid-cols-2 gap-12 items-center">

          {/* Left content */}
          <div className="space-y-6 animate-[fadeUp_0.7s_ease-out]">
            <Pill>We're Hiring</Pill>

            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Customer Support Executive
            </h1>

            <p className="text-sky-100 text-lg">
              Join <span className="font-semibold text-white">Albos Technologies Pvt. Ltd.</span> and
              start your career in the IT industry. Work with real software projects,
              real clients, and a growing tech team.
            </p>

            <div className="flex gap-4 flex-wrap">
              <a
                href="mailto:hr@albostechnologies.com"
                className="px-6 py-3 rounded-lg bg-white text-sky-700 font-semibold shadow hover:bg-sky-50 transition"
              >
                Apply Now
              </a>

              <a
                href="tel:+918446209343"
                className="px-6 py-3 rounded-lg border border-white/40 hover:bg-white/10 transition"
              >
                Call HR
              </a>
            </div>

            <div className="flex gap-6 text-sm text-sky-100 pt-2">
              <span>📍 Chinchwad (Office)</span>
              <span>🕙 10AM – 7PM</span>
              <span>💰 ₹11k–18k</span>
            </div>
          </div>

          {/* Floating Job Card */}
          <div className="relative z-10">
            <div className="bg-white text-slate-800 rounded-2xl p-8 shadow-2xl animate-[float_6s_ease-in-out_infinite]">
              <h3 className="text-xl font-bold mb-4">Job Overview</h3>

              <div className="space-y-3 text-sm">
                <p><strong>Company:</strong> Albos Technologies Pvt. Ltd.</p>
                <p><strong>Shift:</strong> Day Shift (Mon–Sat)</p>
                <p><strong>Location:</strong> Work From Office</p>
                <p><strong>Languages:</strong> Telugu + English</p>
                <p><strong>Salary:</strong> ₹11,000 – ₹18,000/month</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= JOB DESCRIPTION ================= */}
      <section className="py-16 mx-auto w-full px-[5%] grid md:grid-cols-2 gap-12">

        {/* Responsibilities */}
        <div>
          <h2 className="text-2xl font-bold mb-6 text-slate-800">
            Roles & Responsibilities
          </h2>

          <ul className="space-y-4">
            {responsibilities.map((item, i) => (
              <li key={i} className="flex gap-3 items-start text-slate-700">
                <span className="mt-1 w-6 h-6 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center text-xs font-bold">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Candidate */}
        <div>
          <h2 className="text-2xl font-bold mb-6 text-slate-800">
            Ideal Candidate
          </h2>

          <ul className="space-y-4">
            {candidate.map((item, i) => (
              <li key={i} className="flex gap-3 items-start text-slate-700">
                <span className="mt-1 w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs font-bold">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

      </section>

      {/* ================= BENEFITS ================= */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto w-full px-[5%]">

          <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
            Why Join Albos Technologies?
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Feature icon="🚀" title="Career Growth" text="Start your IT career with real client interaction & experience."/>
            <Feature icon="💻" title="Software Industry Exposure" text="Learn about websites, apps & software services."/>
            <Feature icon="🤝" title="Supportive Team" text="Friendly environment with training & guidance."/>
            <Feature icon="📚" title="Learning Opportunity" text="Improve communication & professional skills."/>
            <Feature icon="🏢" title="Office Environment" text="Professional workplace setup and structured work hours."/>
            <Feature icon="📈" title="Performance Incentives" text="Salary growth based on performance."/>
          </div>

        </div>
      </section>

      {/* ================= APPLY CTA ================= */}
      <section className="py-16 text-center bg-gradient-to-r from-sky-600 to-indigo-700 text-white">
        <h2 className="text-3xl font-bold mb-4">
          Start Your Career With Us 🚀
        </h2>

        <p className="mb-6 text-sky-100">
          Send your resume today and our HR team will contact you.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <a href="mailto:hr@albostechnologies.com" className="px-6 py-3 bg-white text-sky-700 rounded-lg font-semibold hover:bg-sky-100 transition">
            hr@albostechnologies.com
          </a>

          <a href="tel:+918446209343" className="px-6 py-3 border border-white rounded-lg hover:bg-white/10 transition">
            +91 8446209343
          </a>
        </div>
      </section>

    </main>
  );
}
