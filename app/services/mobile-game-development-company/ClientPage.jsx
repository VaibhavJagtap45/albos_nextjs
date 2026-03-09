"use client";
import Image from "next/image";
import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

// GameDevelopment.enhanced.jsx
// Rewritten with reliable Unsplash images, related visuals, and richer card animations:
// - Tilt effect on cards using framer-motion motion values
// - Stronger hover/press animations and staggered entrance
// - Accessible, lazy-loaded images and semantic markup
// - Replace logo path with your local asset if available

const logo = "/albos-technologies-logo.png"; // replace with local path if needed

const heroImage =
  "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1600&q=80";
const features = [
  {
    title: "Expert Game Designers",
    desc: "Immersive worlds, characters and loop design to retain players.",
    icon: "https://cdn-icons-png.flaticon.com/512/4208/4208394.png",
  },
  {
    title: "Unity & Unreal Specialists",
    desc: "Performance, VFX and cinematic visuals for every platform.",
    icon: "https://cdn-icons-png.flaticon.com/512/5969/5969346.png",
  },
  {
    title: "Multiplayer & Cloud Gaming",
    desc: "Scalable matchmaking, state sync and low-latency gameplay.",
    icon: "https://cdn-icons-png.flaticon.com/512/7374/7374304.png",
  },
  {
    title: "3D Art & Animation",
    desc: "Characters, rigs, cutscenes and optimized LOD assets.",
    icon: "https://cdn-icons-png.flaticon.com/512/1998/1998670.png",
  },
];

const categories = [
  {
    title: "AAA / Cinematic Games",
    desc: "High-fidelity visuals, cinematic narratives and large worlds.",
    image:
      "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&w=1400&q=80",
    badge: "AAA",
  },
  {
    title: "Hyper Casual & Mobile",
    desc: "Fast prototyping, UA-ready features and P0 retention focus.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1400&q=80",
    badge: "Mobile",
  },
  {
    title: "RMG & Casino",
    desc: "Secure RNG, wallet integrations, and payout systems.",
    image:
      "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?q=80&w=1200&auto=format&fit=crop",
    badge: "RMG",
  },
];

const portfolio = [
  {
    title: "Fantasy 3D RPG",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1200&auto=format&fit=crop",
    badge: "Unity",
  },
  {
    title: "Casino UX Revamp",
    image:
      "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?q=80&w=1200&auto=format&fit=crop",
    badge: "RMG",
  },
  {
    title: "Space Shooter",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
    badge: "Hyper Casual",
  },
  {
    title: "VR Exploration",
    image:
      "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?q=80&w=1200&auto=format&fit=crop",
    badge: "VR",
  },
];
// motion variants
const list = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } };
const fade = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

function TiltCard({ children }) {
  // tilt effect using framer-motion values
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-50, 50], [8, -8]);
  const rotateY = useTransform(x, [-50, 50], [-8, 8]);

  function handleMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width; // 0 -> 1
    const py = (e.clientY - rect.top) / rect.height; // 0 -> 1
    const newX = (px - 0.5) * 100; // -50 -> 50
    const newY = (py - 0.5) * 100; // -50 -> 50
    x.set(newX);
    y.set(newY);
  }

  function reset() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ rotateX, rotateY, x, y }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 120, damping: 12 }}
      className="will-change-transform"
    >
      {children}
    </motion.div>
  );
}

export default function GameDevelopmentEnhanced() {
  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased">
      {/* HERO */}
      <header className=" relative pt-20 pb-10">
        <div style={{ maxWidth: 1480, margin: "0 auto" }} className="  px-[5%]">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1">
              <style>{`
  /* ── Gradient Text ── */
.grad-text {
background: linear-gradient(135deg,#1d4ed8 0%,#3b82f6 50%,#60a5fa 100%);
background-size:200% auto;
-webkit-background-clip:text;
-webkit-text-fill-color:transparent;
background-clip:text;
animation: pan-grad 5s ease infinite;
`}</style>
              <h1
                className="serif text-5xl sm:text-6xl md:text-[3.8rem] lg:text-[4.4rem] font-normal leading-[1.06] mb-7 hero-enter"
                style={{ animationDelay: "120ms" }}
              >
                Studio-grade game
                <br />
                <em className="grad-text not-italic ">development & LiveOps</em>
              </h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.12 }}
                className="mt-4 text-slate-600 max-w-2xl"
              >
                From prototypes to AAA titles — design, build, scale and operate
                live games with a focus on performance, monetization and
                retention.
              </motion.p>

              <div className="mt-6 flex gap-3">
                <a
                  href="/contact"
                  className="bg-gradient-to-br from-amber-500 btn-amber to-amber-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:-translate-y-1 transition"
                >
                  Get a Free Quote
                </a>
                <a
                  href="/portfolio"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl border border-slate-200 bg-white text-slate-800"
                >
                  View Portfolio
                </a>
              </div>

              <dl className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <dt className="text-lg font-semibold">100+</dt>
                  <dd className="text-xs text-slate-600">Projects Delivered</dd>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <dt className="text-lg font-semibold">50M+</dt>
                  <dd className="text-xs text-slate-600">Active Players</dd>
                </div>
                <div className="p-4 bg-emerald-50 rounded-lg">
                  <dt className="text-lg font-semibold">99.9%</dt>
                  <dd className="text-xs text-slate-600">Uptime SLA</dd>
                </div>
                <div className="p-4 bg-rose-50 rounded-lg">
                  <dt className="text-lg font-semibold">10+</dt>
                  <dd className="text-xs text-slate-600">LiveOps Engineers</dd>
                </div>
              </dl>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="flex-1 max-w-md w-full"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/30">
                <Image
                  src={heroImage}
                  alt="Game studio hero"
                  width={1200}
                  height={800}
                  className="object-cover w-full h-64 sm:h-72 md:h-80"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      {/* FEATURES */}
      <section className="py-12">
        <div className="max-w-screen-2xl mx-auto px-[5%]">
          <motion.div
            variants={list}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {features.map((f, i) => (
              <motion.div
                key={i}
                variants={fade}
                className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-50 to-blue-50 inline-flex items-center justify-center">
                    <Image
                      src={f.icon}
                      alt=""
                      width={28}
                      height={28}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">{f.title}</h3>
                    <p className="text-sm text-slate-600 mt-1">{f.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CATEGORIES WITH TILT */}
      <section className="py-16 bg-blue-50">
        <div className=" mx-auto px-[5%]">
          <div className=" mb-8">
            <h2 className="text-3xl font-extrabold">
              Game Development Categories
            </h2>
            <p className="text-slate-600 mt-2  mx-auto">
              We ship genre-focused teams and pipelines — choose the category
              that matches your vision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((c, idx) => (
              <motion.div key={idx} variants={fade} className="relative">
                <TiltCard>
                  <motion.article
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.995 }}
                    className="rounded-2xl overflow-hidden bg-white border shadow-lg"
                  >
                    <div className="relative h-56 w-full bg-slate-200">
                      <Image
                        fill
                        src={c.image}
                        alt={c.title}
                        className="object-cover w-full h-full"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/30 to-transparent"></div>
                    </div>
                    <div className="p-5">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-lg font-semibold">{c.title}</h3>
                          <p className="text-sm text-slate-600 mt-2">
                            {c.desc}
                          </p>
                        </div>
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-600 text-white text-xs">
                          {c.badge}
                        </span>
                      </div>

                      <div className="mt-4 flex items-center gap-3">
                        <a
                          href="/contact"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-amber-500 btn-amber to-amber-600 text-white text-sm shadow-sm"
                        >
                          Start a Project
                        </a>
                        <a
                          href="/portfolio"
                          className="text-sm text-blue-600 underline"
                        >
                          Explore
                        </a>
                      </div>
                    </div>
                  </motion.article>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-16">
        <div className=" mx-auto px-[5%]">
          <div className=" mb-8">
            <h2 className="text-2xl md:text-3xl font-extrabold">Our Process</h2>
            <p className="text-slate-600 mt-2">
              Rapid prototyping, player-tested iterations and data-led LiveOps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              variants={fade}
              className="p-6 rounded-xl bg-gradient-to-br from-white to-blue-50 border shadow-sm"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center font-bold text-blue-600">
                  01
                </div>
                <div>
                  <h4 className="font-semibold">Concept & Docs</h4>
                  <p className="text-sm text-slate-600 mt-1">
                    Design pillars, flow & monetization brief.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fade}
              className="p-6 rounded-xl bg-gradient-to-br from-white to-blue-50 border shadow-sm"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center font-bold text-blue-600">
                  02
                </div>
                <div>
                  <h4 className="font-semibold">Prototype & Test</h4>
                  <p className="text-sm text-slate-600 mt-1">
                    Playable prototypes and rapid user validation.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fade}
              className="p-6 rounded-xl bg-gradient-to-br from-white to-blue-50 border shadow-sm"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center font-bold text-blue-600">
                  03
                </div>
                <div>
                  <h4 className="font-semibold">LiveOps & Scale</h4>
                  <p className="text-sm text-slate-600 mt-1">
                    Server infra, A/B experiments and retention loops.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-screen-2xl mx-auto px-[5%] text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold">
            Selected Portfolio
          </h2>
          <p className="text-slate-600 mt-2">
            Recent projects across genres and platforms.
          </p>

          <motion.div
            variants={list}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8"
          >
            {portfolio.map((p, i) => (
              <motion.figure
                key={i}
                variants={fade}
                whileHover={{ scale: 1.03, y: -6 }}
                className="relative rounded-xl overflow-hidden shadow-lg border bg-white"
              >
                <div className="relative h-44 w-full">
                  <Image
                    fill
                    src={p.image}
                    alt={p.title}
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
                <figcaption className="p-4 text-left">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">{p.title}</h3>
                    <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded">
                      {p.badge}
                    </span>
                  </div>
                  <div className="mt-3 flex items-center gap-3">
                    <a
                      href="/portfolio"
                      className="text-sm text-blue-600 hover:underline"
                    >
                      View Case
                    </a>
                    <a
                      href="/contact"
                      className="ml-auto inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-xs"
                    >
                      Start Conversation
                    </a>
                  </div>
                </figcaption>
              </motion.figure>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-screen-2xl mx-auto px-[5%] text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Ready to launch your game?
          </h2>
          <p className="text-neutral-700 mt-3 sm:mt-4">
            Tell us your goals — we will map a roadmap, team and timeline to
            ship.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/contact"
              className="px-6 py-3 rounded-xl bg-gradient-to-br from-amber-500 btn-amber to-amber-600 text-white font-semibold shadow"
            >
              Get a Quote
            </a>
            <a
              href="tel:+919766650411"
              className="px-6 py-3 rounded-xl border border-blue-100 bg-white text-blue-700 font-semibold"
            >
              Call Sales
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
