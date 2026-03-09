import Link from "next/link";
import STag from "@/components/ui/STag";
import Tag from "@/components/ui/Tag";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import TechMarquee from "@/components/sections/TechMarquee";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Our Services | Web, Mobile, IoT & App Development | Albos Technologies",
  description: "End-to-end software development services serving robust Web Apps, Mobile Apps, Blockchain, & IoT platforms.",
  path: "/services",
});

function ServicesHero() {
  return (
    <section className="relative pt-32 pb-20 px-[5%] overflow-hidden z-10">
      <div className="hero-grid absolute inset-0 pointer-events-none" />
      <div className="gold-line" />
      <div className="relative z-10 max-w-3xl">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-px bg-gradient-to-r from-amber-500 btn-amber to-transparent" />
          <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-amber-600">
            What We Build
          </span>
        </div>
        <h1
          className="font-display font-black leading-[0.97] tracking-tight mb-6"
          style={{ fontSize: "clamp(2.8rem, 5vw, 5rem)" }}
        >
          Every Service<br />
          <span className="text-slate-400 font-bold">You Need to</span><br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-400">
            Ship & Scale.
          </span>
        </h1>
        <p className="text-slate-500 text-lg max-w-[520px] leading-relaxed mb-8">
          From MVPs to enterprise platforms — web, mobile, blockchain, IoT, and everything in between.
          We bring senior engineering to every engagement.
        </p>
        <Link
          href="/contact"
          className="bg-gradient-to-br from-amber-500 btn-amber to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold px-8 py-3.5 rounded-xl shadow-lg transition-all text-sm"
        >
          Discuss Your Project →
        </Link>
      </div>
    </section>
  );
}

const DETAILED = [
  {
    icon: "🌐",
    title: "Web App Development",
    color: "blue",
    path: "/services/website-development-services-company",
    desc: "We build full-stack web applications that are fast, secure, and scalable...",
    stack: ["React", "Next.js", "Node.js", "Laravel", "Django", "PostgreSQL", "Redis", "AWS"],
    highlights: ["SEO-optimised & Core Web Vitals ready", "OWASP security hardened", "CI/CD from sprint 1", "Fully responsive & accessible (WCAG 2.1)"],
  },
  {
    icon: "📱",
    title: "Mobile App Development",
    color: "teal",
    path: "/services/android-app-development-services",
    desc: "Native performance, beautiful UX, App Store & Play Store ready...",
    stack: ["Flutter", "Kotlin", "Swift", "React Native", "Firebase", "Push Notifications"],
    highlights: ["Offline-first architecture", "Biometrics & secure storage", "Deep-linking & universal links", "OTA updates (Flutter)"],
  },
  {
    icon: "⛓️", title: "Blockchain & Web3", color: "purple",
    path: "/services/blockchain-development-company",
    desc: "Smart contracts, DeFi protocols, NFT platforms, custom wallets, and DApps. Audit-ready Solidity from day one on Ethereum, Polygon, Solana, and EVM-compatible chains.",
    stack: ["Solidity", "Ethereum", "Polygon", "Solana", "Hardhat", "ethers.js", "Chainlink"],
    highlights: ["Smart contract audit review", "Gas optimisation", "Multi-sig wallet integration", "Subgraph indexing"],
  },
  {
    icon: "🔌", title: "IoT & Embedded", color: "gold",
    path: "/services/iot-embedded-development",
    desc: "End-to-end IoT: from ESP32/STM32 firmware to cloud dashboards. OTA management, MQTT telemetry, and real-time monitoring for industrial and consumer hardware.",
    stack: ["ESP32", "STM32", "MQTT", "AWS IoT Core", "Azure IoT", "FreeRTOS"],
    highlights: ["OTA firmware management", "End-to-end encryption", "Edge AI inference", "Custom PCB design consulting"],
  },
];

const colorMap = { blue: "blue", teal: "teal", purple: "purple", gold: "gold" };

function DetailedServices() {
  return (
    <section className="py-24 px-[5%] bg-white relative z-10">
      <div className="mb-14 reveal">
        <STag color="blue">Deep Dive</STag>
        <h2 className="font-display font-black text-4xl md:text-5xl tracking-tight leading-tight">
          Service<br />
          <span className="text-slate-400 font-bold">Breakdown</span>
        </h2>
      </div>
      <div className="flex flex-col gap-6 reveal">
        {DETAILED.map((s, i) => (
         <Link
            key={i}
            href={s.path || "#"}
            className="block bg-stone-50 border border-slate-200 rounded-2xl p-8 hover:shadow-md hover:-translate-y-1 transition-all"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="font-display font-bold text-slate-800 text-2xl mb-3">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-5">{s.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {s.stack.map((t) => <Tag key={t} variant={colorMap[s.color]}>{t}</Tag>)}
                </div>
              </div>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3">What you get</div>
                <ul className="flex flex-col gap-2">
                  {s.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-sm text-slate-600">
                      <span className="text-teal-500 font-bold">✓</span>{h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <Services />
      <DetailedServices />
      <Process />
      <TechMarquee />
    </>
  );
}
