// // "use client";
// // import Image from "next/image";
// // import React from "react";
// // import { motion, useMotionValue, useTransform } from "framer-motion";

// // // GameDevelopment.enhanced.jsx
// // // Rewritten with reliable Unsplash images, related visuals, and richer card animations:
// // // - Tilt effect on cards using framer-motion motion values
// // // - Stronger hover/press animations and staggered entrance
// // // - Accessible, lazy-loaded images and semantic markup
// // // - Replace logo path with your local asset if available

// // const logo = "/albos-technologies-logo.png"; // replace with local path if needed

// // const heroImage =
// //   "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1600&q=80";
// // const features = [
// //   {
// //     title: "Expert Game Designers",
// //     desc: "Immersive worlds, characters and loop design to retain players.",
// //     icon: "https://cdn-icons-png.flaticon.com/512/4208/4208394.png",
// //   },
// //   {
// //     title: "Unity & Unreal Specialists",
// //     desc: "Performance, VFX and cinematic visuals for every platform.",
// //     icon: "https://cdn-icons-png.flaticon.com/512/5969/5969346.png",
// //   },
// //   {
// //     title: "Multiplayer & Cloud Gaming",
// //     desc: "Scalable matchmaking, state sync and low-latency gameplay.",
// //     icon: "https://cdn-icons-png.flaticon.com/512/7374/7374304.png",
// //   },
// //   {
// //     title: "3D Art & Animation",
// //     desc: "Characters, rigs, cutscenes and optimized LOD assets.",
// //     icon: "https://cdn-icons-png.flaticon.com/512/1998/1998670.png",
// //   },
// // ];

// // const categories = [
// //   {
// //     title: "AAA / Cinematic Games",
// //     desc: "High-fidelity visuals, cinematic narratives and large worlds.",
// //     image:
// //       "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&w=1400&q=80",
// //     badge: "AAA",
// //   },
// //   {
// //     title: "Hyper Casual & Mobile",
// //     desc: "Fast prototyping, UA-ready features and P0 retention focus.",
// //     image:
// //       "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1400&q=80",
// //     badge: "Mobile",
// //   },
// //   {
// //     title: "RMG & Casino",
// //     desc: "Secure RNG, wallet integrations, and payout systems.",
// //     image:
// //       "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?q=80&w=1200&auto=format&fit=crop",
// //     badge: "RMG",
// //   },
// // ];

// // const portfolio = [
// //   {
// //     title: "Fantasy 3D RPG",
// //     image:
// //       "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1200&auto=format&fit=crop",
// //     badge: "Unity",
// //   },
// //   {
// //     title: "Casino UX Revamp",
// //     image:
// //       "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?q=80&w=1200&auto=format&fit=crop",
// //     badge: "RMG",
// //   },
// //   {
// //     title: "Space Shooter",
// //     image:
// //       "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
// //     badge: "Hyper Casual",
// //   },
// //   {
// //     title: "VR Exploration",
// //     image:
// //       "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?q=80&w=1200&auto=format&fit=crop",
// //     badge: "VR",
// //   },
// // ];
// // // motion variants
// // const list = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } };
// // const fade = {
// //   hidden: { opacity: 0, y: 18 },
// //   show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
// // };

// // function TiltCard({ children }) {
// //   // tilt effect using framer-motion values
// //   const x = useMotionValue(0);
// //   const y = useMotionValue(0);
// //   const rotateX = useTransform(y, [-50, 50], [8, -8]);
// //   const rotateY = useTransform(x, [-50, 50], [-8, 8]);

// //   function handleMove(e) {
// //     const rect = e.currentTarget.getBoundingClientRect();
// //     const px = (e.clientX - rect.left) / rect.width; // 0 -> 1
// //     const py = (e.clientY - rect.top) / rect.height; // 0 -> 1
// //     const newX = (px - 0.5) * 100; // -50 -> 50
// //     const newY = (py - 0.5) * 100; // -50 -> 50
// //     x.set(newX);
// //     y.set(newY);
// //   }

// //   function reset() {
// //     x.set(0);
// //     y.set(0);
// //   }

// //   return (
// //     <motion.div
// //       onMouseMove={handleMove}
// //       onMouseLeave={reset}
// //       style={{ rotateX, rotateY, x, y }}
// //       whileHover={{ scale: 1.02 }}
// //       transition={{ type: "spring", stiffness: 120, damping: 12 }}
// //       className="will-change-transform"
// //     >
// //       {children}
// //     </motion.div>
// //   );
// // }

// // export default function GameDevelopmentEnhanced() {
// //   return (
// //     <div className="min-h-screen bg-white text-slate-900 antialiased">
// //       {/* HERO */}
// //       <header className=" relative pt-20 pb-10">
// //         <div style={{ maxWidth: 1480, margin: "0 auto" }} className="  px-[5%]">
// //           <div className="flex flex-col md:flex-row items-center gap-10">
// //             <div className="flex-1">
// //               <style>{`
// //   /* ── Gradient Text ── */
// // .grad-text {
// // background: linear-gradient(135deg,#1d4ed8 0%,#3b82f6 50%,#60a5fa 100%);
// // background-size:200% auto;
// // -webkit-background-clip:text;
// // -webkit-text-fill-color:transparent;
// // background-clip:text;
// // animation: pan-grad 5s ease infinite;
// // `}</style>
// //               <h1
// //                 className="serif text-4xl sm:text-5xl md:text-[2.8rem] lg:text-[3.8rem] font-bold leading-[1.06] mb-7 hero-enter"
// //                 style={{ animationDelay: "120ms" }}
// //               >
// //                 Studio-grade game
// //                 <br />
// //                 <em className="grad-text not-italic ">development & LiveOps</em>
// //               </h1>
// //               <motion.p
// //                 initial={{ opacity: 0 }}
// //                 animate={{ opacity: 1 }}
// //                 transition={{ delay: 0.12 }}
// //                 className="mt-4 text-slate-600 max-w-2xl"
// //               >
// //                 From prototypes to AAA titles — design, build, scale and operate
// //                 live games with a focus on performance, monetization and
// //                 retention.
// //               </motion.p>

// //               <div className="mt-6 flex gap-3">
// //                 <a
// //                   href="/contact"
// //                   className="bg-gradient-to-br from-amber-500 btn-amber to-amber-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:-translate-y-1 transition"
// //                 >
// //                   Get a Free Quote
// //                 </a>
// //                 <a
// //                   href="/portfolio"
// //                   className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl border border-slate-200 bg-white text-slate-800"
// //                 >
// //                   View Portfolio
// //                 </a>
// //               </div>

// //               <dl className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
// //                 <div className="p-4 bg-blue-50 rounded-lg">
// //                   <dt className="text-lg font-semibold">100+</dt>
// //                   <dd className="text-xs text-slate-600">Projects Delivered</dd>
// //                 </div>
// //                 <div className="p-4 bg-blue-50 rounded-lg">
// //                   <dt className="text-lg font-semibold">50M+</dt>
// //                   <dd className="text-xs text-slate-600">Active Players</dd>
// //                 </div>
// //                 <div className="p-4 bg-emerald-50 rounded-lg">
// //                   <dt className="text-lg font-semibold">99.9%</dt>
// //                   <dd className="text-xs text-slate-600">Uptime SLA</dd>
// //                 </div>
// //                 <div className="p-4 bg-rose-50 rounded-lg">
// //                   <dt className="text-lg font-semibold">10+</dt>
// //                   <dd className="text-xs text-slate-600">LiveOps Engineers</dd>
// //                 </div>
// //               </dl>
// //             </div>

// //             <motion.div
// //               initial={{ opacity: 0, scale: 0.98 }}
// //               animate={{ opacity: 1, scale: 1 }}
// //               transition={{ duration: 0.6 }}
// //               className="flex-1 max-w-md w-full"
// //             >
// //               <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/30">
// //                 <Image
// //                   src={heroImage}
// //                   alt="Game studio hero"
// //                   width={1200}
// //                   height={800}
// //                   className="object-cover w-full h-64 sm:h-72 md:h-80"
// //                   loading="lazy"
// //                 />
// //               </div>
// //             </motion.div>
// //           </div>
// //         </div>
// //       </header>

// //       {/* FEATURES */}
// //       <section className="py-12">
// //         <div className="max-w-screen-2xl mx-auto px-[5%]">
// //           <motion.div
// //             variants={list}
// //             initial="hidden"
// //             animate="show"
// //             className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
// //           >
// //             {features.map((f, i) => (
// //               <motion.div
// //                 key={i}
// //                 variants={fade}
// //                 className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition"
// //               >
// //                 <div className="flex items-start gap-4">
// //                   <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-50 to-blue-50 inline-flex items-center justify-center">
// //                     <Image
// //                       src={f.icon}
// //                       alt=""
// //                       width={28}
// //                       height={28}
// //                       className="object-contain"
// //                     />
// //                   </div>
// //                   <div>
// //                     <h3 className="font-semibold">{f.title}</h3>
// //                     <p className="text-sm text-slate-600 mt-1">{f.desc}</p>
// //                   </div>
// //                 </div>
// //               </motion.div>
// //             ))}
// //           </motion.div>
// //         </div>
// //       </section>

// //       {/* CATEGORIES WITH TILT */}
// //       <section className="py-16 bg-blue-50">
// //         <div className=" mx-auto px-[5%]">
// //           <div className=" mb-8">
// //             <h2 className="text-3xl font-extrabold">
// //               Game Development Categories
// //             </h2>
// //             <p className="text-slate-600 mt-2  mx-auto">
// //               We ship genre-focused teams and pipelines — choose the category
// //               that matches your vision.
// //             </p>
// //           </div>

// //           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// //             {categories.map((c, idx) => (
// //               <motion.div key={idx} variants={fade} className="relative">
// //                 <TiltCard>
// //                   <motion.article
// //                     whileHover={{ scale: 1.02 }}
// //                     whileTap={{ scale: 0.995 }}
// //                     className="rounded-2xl overflow-hidden bg-white border shadow-lg"
// //                   >
// //                     <div className="relative h-56 w-full bg-slate-200">
// //                       <Image
// //                         fill
// //                         src={c.image}
// //                         alt={c.title}
// //                         className="object-cover w-full h-full"
// //                         loading="lazy"
// //                       />
// //                       <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/30 to-transparent"></div>
// //                     </div>
// //                     <div className="p-5">
// //                       <div className="flex items-center justify-between">
// //                         <div>
// //                           <h3 className="text-lg font-semibold">{c.title}</h3>
// //                           <p className="text-sm text-slate-600 mt-2">
// //                             {c.desc}
// //                           </p>
// //                         </div>
// //                         <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-600 text-white text-xs">
// //                           {c.badge}
// //                         </span>
// //                       </div>

// //                       <div className="mt-4 flex items-center gap-3">
// //                         <a
// //                           href="/contact"
// //                           className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-amber-500 btn-amber to-amber-600 text-white text-sm shadow-sm"
// //                         >
// //                           Start a Project
// //                         </a>
// //                         <a
// //                           href="/portfolio"
// //                           className="text-sm text-blue-600 underline"
// //                         >
// //                           Explore
// //                         </a>
// //                       </div>
// //                     </div>
// //                   </motion.article>
// //                 </TiltCard>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* PROCESS */}
// //       <section className="py-16">
// //         <div className=" mx-auto px-[5%]">
// //           <div className=" mb-8">
// //             <h2 className="text-2xl md:text-3xl font-extrabold">Our Process</h2>
// //             <p className="text-slate-600 mt-2">
// //               Rapid prototyping, player-tested iterations and data-led LiveOps.
// //             </p>
// //           </div>

// //           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// //             <motion.div
// //               variants={fade}
// //               className="p-6 rounded-xl bg-gradient-to-br from-white to-blue-50 border shadow-sm"
// //             >
// //               <div className="flex items-center gap-4">
// //                 <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center font-bold text-blue-600">
// //                   01
// //                 </div>
// //                 <div>
// //                   <h4 className="font-semibold">Concept & Docs</h4>
// //                   <p className="text-sm text-slate-600 mt-1">
// //                     Design pillars, flow & monetization brief.
// //                   </p>
// //                 </div>
// //               </div>
// //             </motion.div>

// //             <motion.div
// //               variants={fade}
// //               className="p-6 rounded-xl bg-gradient-to-br from-white to-blue-50 border shadow-sm"
// //             >
// //               <div className="flex items-center gap-4">
// //                 <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center font-bold text-blue-600">
// //                   02
// //                 </div>
// //                 <div>
// //                   <h4 className="font-semibold">Prototype & Test</h4>
// //                   <p className="text-sm text-slate-600 mt-1">
// //                     Playable prototypes and rapid user validation.
// //                   </p>
// //                 </div>
// //               </div>
// //             </motion.div>

// //             <motion.div
// //               variants={fade}
// //               className="p-6 rounded-xl bg-gradient-to-br from-white to-blue-50 border shadow-sm"
// //             >
// //               <div className="flex items-center gap-4">
// //                 <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center font-bold text-blue-600">
// //                   03
// //                 </div>
// //                 <div>
// //                   <h4 className="font-semibold">LiveOps & Scale</h4>
// //                   <p className="text-sm text-slate-600 mt-1">
// //                     Server infra, A/B experiments and retention loops.
// //                   </p>
// //                 </div>
// //               </div>
// //             </motion.div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* PORTFOLIO */}
// //       <section className="py-16 bg-blue-50">
// //         <div className="max-w-screen-2xl mx-auto px-[5%] text-center">
// //           <h2 className="text-2xl md:text-3xl font-extrabold">
// //             Selected Portfolio
// //           </h2>
// //           <p className="text-slate-600 mt-2">
// //             Recent projects across genres and platforms.
// //           </p>

// //           <motion.div
// //             variants={list}
// //             initial="hidden"
// //             animate="show"
// //             className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8"
// //           >
// //             {portfolio.map((p, i) => (
// //               <motion.figure
// //                 key={i}
// //                 variants={fade}
// //                 whileHover={{ scale: 1.03, y: -6 }}
// //                 className="relative rounded-xl overflow-hidden shadow-lg border bg-white"
// //               >
// //                 <div className="relative h-44 w-full">
// //                   <Image
// //                     fill
// //                     src={p.image}
// //                     alt={p.title}
// //                     className="object-cover"
// //                     loading="lazy"
// //                   />
// //                 </div>
// //                 <figcaption className="p-4 text-left">
// //                   <div className="flex items-center justify-between">
// //                     <h3 className="font-semibold">{p.title}</h3>
// //                     <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded">
// //                       {p.badge}
// //                     </span>
// //                   </div>
// //                   <div className="mt-3 flex items-center gap-3">
// //                     <a
// //                       href="/portfolio"
// //                       className="text-sm text-blue-600 hover:underline"
// //                     >
// //                       View Case
// //                     </a>
// //                     <a
// //                       href="/contact"
// //                       className="ml-auto inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-xs"
// //                     >
// //                       Start Conversation
// //                     </a>
// //                   </div>
// //                 </figcaption>
// //               </motion.figure>
// //             ))}
// //           </motion.div>
// //         </div>
// //       </section>

// //       {/* CTA */}
// //       <section className="py-16">
// //         <div className="max-w-screen-2xl mx-auto px-[5%] text-center">
// //           <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
// //             Ready to launch your game?
// //           </h2>
// //           <p className="text-neutral-700 mt-3 sm:mt-4">
// //             Tell us your goals — we will map a roadmap, team and timeline to
// //             ship.
// //           </p>

// //           <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
// //             <a
// //               href="/contact"
// //               className="px-6 py-3 rounded-xl bg-gradient-to-br from-amber-500 btn-amber to-amber-600 text-white font-semibold shadow"
// //             >
// //               Get a Quote
// //             </a>
// //             <a
// //               href="tel:+919766650411"
// //               className="px-6 py-3 rounded-xl border border-blue-100 bg-white text-blue-700 font-semibold"
// //             >
// //               Call Sales
// //             </a>
// //           </div>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // }

// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import {
//   motion,
//   useMotionValue,
//   useTransform,
//   AnimatePresence,
//   useInView,
// } from "framer-motion";

// /* ─────────────────────────── DATA ─────────────────────────── */
// const features = [
//   {
//     title: "Expert Game Designers",
//     desc: "Immersive worlds, characters and loop design to retain players.",
//     icon: "🎮",
//   },
//   {
//     title: "Unity & Unreal Specialists",
//     desc: "Performance, VFX and cinematic visuals for every platform.",
//     icon: "⚙️",
//   },
//   {
//     title: "Multiplayer & Cloud Gaming",
//     desc: "Scalable matchmaking, state sync and low-latency gameplay.",
//     icon: "☁️",
//   },
//   {
//     title: "3D Art & Animation",
//     desc: "Characters, rigs, cutscenes and optimized LOD assets.",
//     icon: "🎨",
//   },
// ];

// const categories = [
//   {
//     title: "AAA / Cinematic Games",
//     desc: "High-fidelity visuals, cinematic narratives and large worlds with next-gen rendering.",
//     image:
//       "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&w=800&q=80",
//     badge: "AAA",
//     color: "#3b82f6",
//   },
//   {
//     title: "Hyper Casual & Mobile",
//     desc: "Fast prototyping, UA-ready features and P0 retention focus for mass-market audiences.",
//     image:
//       "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
//     badge: "Mobile",
//     color: "#10b981",
//   },
//   {
//     title: "RMG & Casino",
//     desc: "Secure RNG, wallet integrations, regulatory compliance and payout systems.",
//     image:
//       "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?q=80&w=800&auto=format&fit=crop",
//     badge: "RMG",
//     color: "#f59e0b",
//   },
// ];

// const portfolio = [
//   {
//     title: "Fantasy 3D RPG",
//     image:
//       "https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?auto=format&fit=crop&w=600&q=80",
//     badge: "Unity",
//     genre: "RPG",
//   },
//   {
//     title: "Casino UX Revamp",
//     image:
//       "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?q=80&w=600&auto=format&fit=crop",
//     badge: "RMG",
//     genre: "Casino",
//   },
//   {
//     title: "Space Shooter",
//     image:
//       "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop",
//     badge: "Hyper Casual",
//     genre: "Action",
//   },
//   {
//     title: "VR Exploration",
//     image:
//       "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?auto=format&fit=crop&w=600&q=80",
//     badge: "VR",
//     genre: "Immersive",
//   },
// ];

// const techStack = [
//   {
//     name: "Unity",
//     logo: "https://cdn-icons-png.flaticon.com/512/5969/5969346.png",
//   },
//   {
//     name: "Unreal",
//     logo: "https://cdn-icons-png.flaticon.com/512/5969/5969368.png",
//   },
//   {
//     name: "Blender",
//     logo: "https://cdn-icons-png.flaticon.com/512/5969/5969361.png",
//   },
//   {
//     name: "Firebase",
//     logo: "https://cdn-icons-png.flaticon.com/512/5968/5968205.png",
//   },
//   {
//     name: "AWS",
//     logo: "https://cdn-icons-png.flaticon.com/512/5968/5968312.png",
//   },
//   {
//     name: "Photon",
//     logo: "https://cdn-icons-png.flaticon.com/512/7374/7374304.png",
//   },
// ];

// const testimonials = [
//   {
//     name: "Ravi Mehta",
//     role: "CEO, PlayArena",
//     text: "They delivered our multiplayer title 2 weeks ahead of schedule. The LiveOps team keeps our DAU growing every month.",
//     avatar: "https://i.pravatar.cc/80?img=12",
//   },
//   {
//     name: "Sophie Laurent",
//     role: "Product Lead, CasinoX",
//     text: "The RMG pipeline they built handles 50k concurrent users without a hitch. Absolutely world-class engineering.",
//     avatar: "https://i.pravatar.cc/80?img=47",
//   },
//   {
//     name: "Marcus Chen",
//     role: "CTO, NeonStudios",
//     text: "Best AAA partner we've worked with. The cinematic cutscenes blew our publisher away.",
//     avatar: "https://i.pravatar.cc/80?img=33",
//   },
// ];

// const stats = [
//   { val: "100+", label: "Projects Delivered" },
//   { val: "50M+", label: "Active Players" },
//   { val: "99.9%", label: "Uptime SLA" },
//   { val: "10+", label: "LiveOps Engineers" },
// ];

// /* ─────────────────────────── ANIMATED HERO CANVAS ─────────────────────────── */
// function HeroCanvas() {
//   const canvasRef = useRef(null);
//   const animRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");
//     let W, H;

//     // Floating game elements
//     const emojis = [
//       "🎮",
//       "⚡",
//       "🏆",
//       "🎯",
//       "💎",
//       "🔥",
//       "⚔️",
//       "🛡️",
//       "🎲",
//       "🚀",
//       "🌟",
//       "🎪",
//     ];
//     const particles = Array.from({ length: 28 }, (_, i) => ({
//       x: Math.random() * 500,
//       y: Math.random() * 500,
//       vx: (Math.random() - 0.5) * 0.4,
//       vy: (Math.random() - 0.5) * 0.4,
//       emoji: emojis[i % emojis.length],
//       size: 18 + Math.random() * 20,
//       alpha: 0.25 + Math.random() * 0.55,
//       phase: Math.random() * Math.PI * 2,
//     }));

//     // Glowing orbs
//     const orbs = [
//       { x: 0.25, y: 0.3, r: 120, color: "#3b82f620" },
//       { x: 0.75, y: 0.7, r: 90, color: "#60a5fa18" },
//       { x: 0.5, y: 0.5, r: 140, color: "#dbeafe15" },
//       { x: 0.8, y: 0.2, r: 70, color: "#93c5fd20" },
//     ];

//     // Grid lines
//     function drawGrid(t) {
//       ctx.save();
//       ctx.strokeStyle = "#bfdbfe30";
//       ctx.lineWidth = 0.8;
//       const cols = 12,
//         rows = 10;
//       const cw = W / cols,
//         rh = H / rows;
//       for (let i = 0; i <= cols; i++) {
//         ctx.globalAlpha = 0.4 + 0.2 * Math.sin(t * 0.5 + i * 0.3);
//         ctx.beginPath();
//         ctx.moveTo(i * cw, 0);
//         ctx.lineTo(i * cw, H);
//         ctx.stroke();
//       }
//       for (let j = 0; j <= rows; j++) {
//         ctx.globalAlpha = 0.4 + 0.2 * Math.sin(t * 0.5 + j * 0.4);
//         ctx.beginPath();
//         ctx.moveTo(0, j * rh);
//         ctx.lineTo(W, j * rh);
//         ctx.stroke();
//       }
//       ctx.restore();
//     }

//     function resize() {
//       const rect = canvas.parentElement.getBoundingClientRect();
//       W = canvas.width = rect.width || 520;
//       H = canvas.height = rect.height || 480;
//       particles.forEach((p) => {
//         p.x = Math.random() * W;
//         p.y = Math.random() * H;
//       });
//     }

//     let t = 0;
//     function draw() {
//       t += 0.016;
//       ctx.clearRect(0, 0, W, H);

//       // Background gradient
//       const bg = ctx.createLinearGradient(0, 0, W, H);
//       bg.addColorStop(0, "#eff6ff");
//       bg.addColorStop(1, "#dbeafe");
//       ctx.fillStyle = bg;
//       ctx.fillRect(0, 0, W, H);

//       // Grid
//       drawGrid(t);

//       // Orbs
//       orbs.forEach((o) => {
//         const grd = ctx.createRadialGradient(
//           o.x * W,
//           o.y * H,
//           0,
//           o.x * W,
//           o.y * H,
//           o.r,
//         );
//         grd.addColorStop(0, o.color.replace(/[\d.]+\)$/, "0.35)"));
//         grd.addColorStop(1, "transparent");
//         ctx.fillStyle = grd;
//         ctx.beginPath();
//         ctx.arc(
//           o.x * W + Math.sin(t * 0.4) * 15,
//           o.y * H + Math.cos(t * 0.3) * 12,
//           o.r,
//           0,
//           Math.PI * 2,
//         );
//         ctx.fill();
//       });

//       // Particles
//       particles.forEach((p) => {
//         p.x += p.vx;
//         p.y += p.vy;
//         if (p.x < -50) p.x = W + 50;
//         if (p.x > W + 50) p.x = -50;
//         if (p.y < -50) p.y = H + 50;
//         if (p.y > H + 50) p.y = -50;

//         const bob = Math.sin(t * 0.8 + p.phase) * 4;
//         ctx.save();
//         ctx.globalAlpha = p.alpha * (0.7 + 0.3 * Math.sin(t * 1.2 + p.phase));
//         ctx.font = `${p.size}px serif`;
//         ctx.textAlign = "center";
//         ctx.textBaseline = "middle";
//         ctx.translate(p.x, p.y + bob);
//         ctx.rotate(Math.sin(t * 0.3 + p.phase) * 0.15);
//         ctx.fillText(p.emoji, 0, 0);
//         ctx.restore();
//       });

//       // Pulse rings
//       for (let i = 0; i < 3; i++) {
//         const progress = (t * 0.4 + i * 0.33) % 1;
//         const cx = W * 0.5,
//           cy = H * 0.5;
//         const maxR = Math.min(W, H) * 0.45;
//         ctx.save();
//         ctx.globalAlpha = (1 - progress) * 0.08;
//         ctx.strokeStyle = "#3b82f6";
//         ctx.lineWidth = 1.5;
//         ctx.beginPath();
//         ctx.arc(cx, cy, progress * maxR, 0, Math.PI * 2);
//         ctx.stroke();
//         ctx.restore();
//       }

//       animRef.current = requestAnimationFrame(draw);
//     }

//     resize();
//     draw();
//     window.addEventListener("resize", resize);
//     return () => {
//       cancelAnimationFrame(animRef.current);
//       window.removeEventListener("resize", resize);
//     };
//   }, []);

//   return (
//     <canvas
//       ref={canvasRef}
//       style={{
//         width: "100%",
//         height: "100%",
//         display: "block",
//         borderRadius: "1.5rem",
//       }}
//     />
//   );
// }

// /* ─────────────────────────── TILT CARD ─────────────────────────── */
// function TiltCard({ children }) {
//   const x = useMotionValue(0),
//     y = useMotionValue(0);
//   const rotateX = useTransform(y, [-50, 50], [6, -6]);
//   const rotateY = useTransform(x, [-50, 50], [-6, 6]);

//   return (
//     <motion.div
//       style={{ rotateX, rotateY, perspective: 900 }}
//       onMouseMove={(e) => {
//         const r = e.currentTarget.getBoundingClientRect();
//         x.set(((e.clientX - r.left) / r.width - 0.5) * 100);
//         y.set(((e.clientY - r.top) / r.height - 0.5) * 100);
//       }}
//       onMouseLeave={() => {
//         x.set(0);
//         y.set(0);
//       }}
//       whileHover={{ scale: 1.025, zIndex: 10 }}
//       transition={{ type: "spring", stiffness: 140, damping: 14 }}
//       className="will-change-transform"
//     >
//       {children}
//     </motion.div>
//   );
// }

// /* ─────────────────────────── SECTION WRAPPER ─────────────────────────── */
// function FadeSection({ children, className = "", delay = 0 }) {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true, margin: "-80px" });
//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, y: 32 }}
//       animate={inView ? { opacity: 1, y: 0 } : {}}
//       transition={{ duration: 0.55, delay, ease: "easeOut" }}
//       className={className}
//     >
//       {children}
//     </motion.div>
//   );
// }

// /* ─────────────────────────── COUNTER ─────────────────────────── */
// function CounterStat({ val, label, delay }) {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true });
//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, scale: 0.85 }}
//       animate={inView ? { opacity: 1, scale: 1 } : {}}
//       transition={{ duration: 0.45, delay }}
//       className="flex flex-col items-center py-6 px-4 rounded-2xl bg-white shadow-sm border border-slate-100"
//     >
//       <span
//         style={{
//           fontSize: "2rem",
//           fontWeight: 800,
//           color: "#1d4ed8",
//           fontFamily: "Georgia, serif",
//         }}
//       >
//         {val}
//       </span>
//       <span style={{ fontSize: "0.78rem", color: "#64748b", marginTop: 4 }}>
//         {label}
//       </span>
//     </motion.div>
//   );
// }

// /* ─────────────────────────── MAIN PAGE ─────────────────────────── */
// export default function GameDevelopmentEnhanced() {
//   const [activeTab, setActiveTab] = useState(0);

//   return (
//     <div
//       style={{
//         minHeight: "100vh",
//         background: "#f8fafc",
//         color: "#0f172a",
//         fontFamily: "'Segoe UI', system-ui, sans-serif",
//       }}
//     >
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600;700&display=swap');
//         .hero-title { font-family: 'DM Serif Display', Georgia, serif; }
//         .body-font { font-family: 'DM Sans', system-ui, sans-serif; }
//         .grad-text {
//           background: linear-gradient(135deg, #1d4ed8 0%, #3b82f6 50%, #60a5fa 100%);
//           background-size: 200% auto;
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           background-clip: text;
//           animation: pan-grad 6s ease infinite;
//         }
//         @keyframes pan-grad { 0%,100%{background-position:0% 50%} 50%{background-position:100% 50%} }
//         .badge-pill { display:inline-flex;align-items:center;padding:2px 10px;border-radius:999px;font-size:0.72rem;font-weight:600; }
//         .card-img { width:100%;height:100%;object-fit:cover;display:block;transition:transform 0.5s ease; }
//         .card-img:hover { transform:scale(1.06); }
//         .tab-btn { padding:8px 18px;border-radius:8px;font-weight:500;font-size:0.85rem;border:none;cursor:pointer;transition:all 0.2s; }
//         .tab-btn.active { background:#1d4ed8;color:#fff;box-shadow:0 4px 12px #1d4ed840; }
//         .tab-btn:not(.active) { background:#e2e8f0;color:#475569; }
//         .tech-pill { display:flex;align-items:center;gap:8px;padding:8px 14px;border-radius:12px;background:#fff;border:1px solid #e2e8f0;font-size:0.82rem;font-weight:500;box-shadow:0 2px 6px #1e40af0a; }
//         .process-line { position:absolute;top:28px;left:calc(50% + 28px);right:calc(-50% + 28px);height:2px;background:linear-gradient(90deg,#3b82f6,#bfdbfe);z-index:0; }
//         .star { color:#f59e0b; }
//         .amber-btn { background:linear-gradient(135deg,#f59e0b,#d97706);color:#fff;font-weight:600;border:none;cursor:pointer;transition:all 0.2s; }
//         .amber-btn:hover { transform:translateY(-2px);box-shadow:0 8px 20px #d9770640; }
//         .blue-outline-btn { background:#fff;border:1.5px solid #bfdbfe;color:#1d4ed8;font-weight:600;cursor:pointer;transition:all 0.2s; }
//         .blue-outline-btn:hover { background:#eff6ff; }
//       `}</style>

//       {/* ── HERO ── */}
//       <header
//         style={{
//           background: "linear-gradient(160deg,#ffffff 60%,#eff6ff 100%)",
//           borderBottom: "1px solid #e2e8f0",
//           paddingTop: "60px",
//           paddingBottom: "40px",
//           marginTop: "40px",
//         }}
//       >
//         <div style={{ maxWidth: 1480, padding: "0 5%" }}>
//           <div
//             style={{
//               display: "flex",
//               flexWrap: "wrap",
//               alignItems: "center",
//               gap: 48,
//             }}
//           >
//             {/* Left */}
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.65, ease: "easeOut" }}
//               style={{ flex: "1 1 340px" }}
//             >
//               <motion.span
//                 initial={{ opacity: 0, y: -10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.1 }}
//                 className="badge-pill"
//                 style={{
//                   background: "#dbeafe",
//                   color: "#1d4ed8",
//                   marginBottom: 16,
//                   display: "inline-flex",
//                 }}
//               >
//                 🎮 &nbsp; Game Development Studio
//               </motion.span>

//               <h1
//                 className="hero-title"
//                 style={{
//                   fontSize: "clamp(2.2rem,5vw,3.8rem)",
//                   lineHeight: 1.08,
//                   fontWeight: 700,
//                   margin: "0 0 20px 0",
//                 }}
//               >
//                 Studio-grade game
//                 <br />
//                 <em className="grad-text not-italic">development & LiveOps</em>
//               </h1>

//               <motion.p
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.2 }}
//                 className="body-font"
//                 style={{
//                   color: "#475569",
//                   maxWidth: 480,
//                   lineHeight: 1.65,
//                   marginBottom: 28,
//                   fontSize: "1.05rem",
//                 }}
//               >
//                 From indie prototypes to AAA titles — design, build, scale and
//                 operate live games with a focus on performance, monetization and
//                 player retention.
//               </motion.p>

//               <motion.div
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.3 }}
//                 style={{ display: "flex", gap: 12, flexWrap: "wrap" }}
//               >
//                 <button
//                   className="amber-btn"
//                   style={{
//                     padding: "13px 28px",
//                     borderRadius: 12,
//                     fontSize: "0.95rem",
//                   }}
//                 >
//                   Get a Free Quote →
//                 </button>
//                 <button
//                   className="blue-outline-btn"
//                   style={{
//                     padding: "13px 24px",
//                     borderRadius: 12,
//                     fontSize: "0.95rem",
//                   }}
//                 >
//                   View Portfolio
//                 </button>
//               </motion.div>

//               {/* Stats row */}
//               <motion.div
//                 initial={{ opacity: 0, y: 16 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.45 }}
//                 style={{
//                   display: "grid",
//                   gridTemplateColumns: "repeat(4,1fr)",
//                   gap: 10,
//                   marginTop: 32,
//                 }}
//               >
//                 {stats.map((s, i) => (
//                   <div
//                     key={i}
//                     style={{
//                       background:
//                         i % 2 === 0
//                           ? "#eff6ff"
//                           : i === 1
//                             ? "#ecfdf5"
//                             : "#fff7ed",
//                       borderRadius: 12,
//                       padding: "12px 8px",
//                       textAlign: "center",
//                     }}
//                   >
//                     <div
//                       style={{
//                         fontWeight: 800,
//                         fontSize: "1.2rem",
//                         fontFamily: "'DM Serif Display',serif",
//                         color: "#1e40af",
//                       }}
//                     >
//                       {s.val}
//                     </div>
//                     <div
//                       style={{
//                         fontSize: "0.7rem",
//                         color: "#64748b",
//                         marginTop: 2,
//                       }}
//                     >
//                       {s.label}
//                     </div>
//                   </div>
//                 ))}
//               </motion.div>
//             </motion.div>

//             {/* Right — Animated Canvas */}
//             <motion.div
//               initial={{ opacity: 0, scale: 0.94 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.7, delay: 0.15 }}
//               style={{
//                 flex: "1 1 320px",
//                 minHeight: 400,
//                 maxWidth: 520,
//                 borderRadius: 24,
//                 overflow: "hidden",
//                 boxShadow: "0 24px 60px #1d4ed820",
//                 border: "1px solid #bfdbfe",
//               }}
//             >
//               <HeroCanvas />
//             </motion.div>
//           </div>
//         </div>
//       </header>

//       {/* ── FEATURES ── */}
//       <section style={{ padding: "34px 0", background: "#fff" }}>
//         <div style={{ maxWidth: 1480, margin: "0 auto", padding: "0 5%" }}>
//           <FadeSection>
//             <h2
//               className="hero-title"
//               style={{ fontSize: "2rem", fontWeight: 700, marginBottom: 8 }}
//             >
//               What we bring to the table
//             </h2>
//             <p style={{ color: "#64748b", marginBottom: 36 }}>
//               End-to-end capabilities across design, engineering and live
//               operations.
//             </p>
//           </FadeSection>
//           <div
//             style={{
//               display: "grid",
//               gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
//               gap: 20,
//             }}
//           >
//             {features.map((f, i) => (
//               <FadeSection key={i} delay={i * 0.07}>
//                 <motion.div
//                   whileHover={{ y: -6, boxShadow: "0 16px 40px #1d4ed812" }}
//                   transition={{ type: "spring", stiffness: 200, damping: 18 }}
//                   style={{
//                     padding: 24,
//                     background: "#f8fafc",
//                     borderRadius: 18,
//                     border: "1px solid #e2e8f0",
//                     height: "100%",
//                   }}
//                 >
//                   <div style={{ fontSize: "2.2rem", marginBottom: 14 }}>
//                     {f.icon}
//                   </div>
//                   <h3
//                     style={{
//                       fontWeight: 700,
//                       marginBottom: 8,
//                       fontSize: "1rem",
//                     }}
//                   >
//                     {f.title}
//                   </h3>
//                   <p
//                     style={{
//                       color: "#64748b",
//                       fontSize: "0.875rem",
//                       lineHeight: 1.6,
//                     }}
//                   >
//                     {f.desc}
//                   </p>
//                 </motion.div>
//               </FadeSection>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── CATEGORIES ── */}
//       <section
//         style={{
//           padding: "34px 0",
//           background: "linear-gradient(180deg,#eff6ff 0%,#f0f9ff 100%)",
//         }}
//       >
//         <div style={{ maxWidth: 1480, margin: "0 auto", padding: "0 5%" }}>
//           <FadeSection>
//             <h2
//               className="hero-title"
//               style={{ fontSize: "2rem", fontWeight: 700, marginBottom: 8 }}
//             >
//               Game Development Categories
//             </h2>
//             <p style={{ color: "#64748b", marginBottom: 40 }}>
//               Genre-focused teams and pipelines — choose the category that
//               matches your vision.
//             </p>
//           </FadeSection>
//           <div
//             style={{
//               display: "grid",
//               gridTemplateColumns: "repeat(auto-fit,minmax(290px,1fr))",
//               gap: 24,
//             }}
//           >
//             {categories.map((c, idx) => (
//               <FadeSection key={idx} delay={idx * 0.1}>
//                 <TiltCard>
//                   <motion.div
//                     whileTap={{ scale: 0.98 }}
//                     style={{
//                       borderRadius: 20,
//                       overflow: "hidden",
//                       background: "#fff",
//                       border: "1px solid #e2e8f0",
//                       boxShadow: "0 6px 24px #1e40af0c",
//                     }}
//                   >
//                     {/* Image */}
//                     <div
//                       style={{
//                         height: 210,
//                         overflow: "hidden",
//                         position: "relative",
//                       }}
//                     >
//                       <img
//                         src={c.image}
//                         alt={c.title}
//                         className="card-img"
//                         style={{
//                           height: "100%",
//                           width: "100%",
//                           objectFit: "cover",
//                         }}
//                       />
//                       <div
//                         style={{
//                           position: "absolute",
//                           inset: 0,
//                           background:
//                             "linear-gradient(180deg,transparent 50%,rgba(0,0,0,0.22))",
//                         }}
//                       />
//                       <span
//                         className="badge-pill"
//                         style={{
//                           position: "absolute",
//                           top: 12,
//                           right: 12,
//                           background: c.color,
//                           color: "#fff",
//                         }}
//                       >
//                         {c.badge}
//                       </span>
//                     </div>
//                     {/* Body */}
//                     <div style={{ padding: "20px 22px" }}>
//                       <h3
//                         style={{
//                           fontWeight: 700,
//                           fontSize: "1.05rem",
//                           marginBottom: 8,
//                         }}
//                       >
//                         {c.title}
//                       </h3>
//                       <p
//                         style={{
//                           color: "#64748b",
//                           fontSize: "0.875rem",
//                           lineHeight: 1.6,
//                           marginBottom: 18,
//                         }}
//                       >
//                         {c.desc}
//                       </p>
//                       <div
//                         style={{
//                           display: "flex",
//                           alignItems: "center",
//                           gap: 12,
//                         }}
//                       >
//                         <button
//                           className="amber-btn"
//                           style={{
//                             padding: "8px 18px",
//                             borderRadius: 9,
//                             fontSize: "0.83rem",
//                           }}
//                         >
//                           Start a Project
//                         </button>
//                         <button
//                           style={{
//                             background: "none",
//                             border: "none",
//                             color: "#1d4ed8",
//                             fontSize: "0.83rem",
//                             cursor: "pointer",
//                             textDecoration: "underline",
//                           }}
//                         >
//                           Explore →
//                         </button>
//                       </div>
//                     </div>
//                   </motion.div>
//                 </TiltCard>
//               </FadeSection>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── PROCESS ── */}
//       <section style={{ padding: "34px 0", background: "#fff" }}>
//         <div style={{ maxWidth: 1480, margin: "0 auto", padding: "0 5%" }}>
//           <FadeSection>
//             <h2
//               className="hero-title"
//               style={{ fontSize: "2rem", fontWeight: 700, marginBottom: 8 }}
//             >
//               Our Process
//             </h2>
//             <p style={{ color: "#64748b", marginBottom: 48 }}>
//               Rapid prototyping, player-tested iterations and data-led LiveOps.
//             </p>
//           </FadeSection>

//           <div
//             style={{
//               display: "grid",
//               gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
//               gap: 0,
//               position: "relative",
//             }}
//           >
//             {[
//               {
//                 step: "01",
//                 title: "Concept & GDD",
//                 desc: "Design pillars, core loop, monetization strategy and technical brief.",
//                 icon: "📋",
//               },
//               {
//                 step: "02",
//                 title: "Prototype & Validate",
//                 desc: "Playable prototypes, user testing and rapid iteration cycles.",
//                 icon: "🔬",
//               },
//               {
//                 step: "03",
//                 title: "Production Sprint",
//                 desc: "Full asset pipeline, engine integration and milestone QA.",
//                 icon: "🏗️",
//               },
//               {
//                 step: "04",
//                 title: "Launch & LiveOps",
//                 desc: "Server infra, A/B experiments, events and retention loops.",
//                 icon: "🚀",
//               },
//             ].map((p, i) => (
//               <FadeSection key={i} delay={i * 0.1}>
//                 <div
//                   style={{
//                     position: "relative",
//                     padding: "28px 24px",
//                     background: i % 2 === 0 ? "#f8fafc" : "#fff",
//                     border: "1px solid #e2e8f0",
//                     borderRadius:
//                       i === 0 ? "16px 0 0 16px" : i === 3 ? "0 16px 16px 0" : 0,
//                     marginRight: i < 3 ? -1 : 0,
//                     zIndex: i,
//                   }}
//                 >
//                   <div
//                     style={{
//                       display: "flex",
//                       alignItems: "flex-start",
//                       gap: 14,
//                     }}
//                   >
//                     <div
//                       style={{
//                         minWidth: 44,
//                         height: 44,
//                         borderRadius: 12,
//                         background: "linear-gradient(135deg,#dbeafe,#bfdbfe)",
//                         display: "flex",
//                         alignItems: "center",
//                         justifyContent: "center",
//                         fontWeight: 800,
//                         color: "#1d4ed8",
//                         fontSize: "0.85rem",
//                       }}
//                     >
//                       {p.step}
//                     </div>
//                     <div>
//                       <div style={{ fontSize: "1.3rem", marginBottom: 6 }}>
//                         {p.icon}
//                       </div>
//                       <h4
//                         style={{
//                           fontWeight: 700,
//                           marginBottom: 6,
//                           fontSize: "0.95rem",
//                         }}
//                       >
//                         {p.title}
//                       </h4>
//                       <p
//                         style={{
//                           color: "#64748b",
//                           fontSize: "0.82rem",
//                           lineHeight: 1.6,
//                         }}
//                       >
//                         {p.desc}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </FadeSection>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── PORTFOLIO TABS ── */}
//       <section
//         style={{
//           padding: "34px 0",
//           background: "linear-gradient(180deg,#eff6ff,#fff)",
//         }}
//       >
//         <div style={{ maxWidth: 1480, margin: "0 auto", padding: "0 5%" }}>
//           <FadeSection>
//             <div
//               style={{
//                 display: "flex",
//                 flexWrap: "wrap",
//                 alignItems: "center",
//                 justifyContent: "space-between",
//                 gap: 16,
//                 marginBottom: 32,
//               }}
//             >
//               <div>
//                 <h2
//                   className="hero-title"
//                   style={{ fontSize: "2rem", fontWeight: 700, marginBottom: 6 }}
//                 >
//                   Selected Portfolio
//                 </h2>
//                 <p style={{ color: "#64748b" }}>
//                   Recent projects across genres and platforms.
//                 </p>
//               </div>
//               <div style={{ display: "flex", gap: 8 }}>
//                 {["All", "Unity", "RMG", "VR"].map((t, i) => (
//                   <button
//                     key={i}
//                     className={`tab-btn ${activeTab === i ? "active" : ""}`}
//                     onClick={() => setActiveTab(i)}
//                   >
//                     {t}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           </FadeSection>

//           <div
//             style={{
//               display: "grid",
//               gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
//               gap: 20,
//             }}
//           >
//             {portfolio.map((p, i) => (
//               <FadeSection key={i} delay={i * 0.08}>
//                 <motion.div
//                   whileHover={{ y: -8 }}
//                   transition={{ type: "spring", stiffness: 180, damping: 16 }}
//                   style={{
//                     borderRadius: 18,
//                     overflow: "hidden",
//                     background: "#fff",
//                     border: "1px solid #e2e8f0",
//                     boxShadow: "0 4px 18px #1e40af08",
//                   }}
//                 >
//                   <div
//                     style={{
//                       height: 180,
//                       overflow: "hidden",
//                       position: "relative",
//                     }}
//                   >
//                     <img
//                       src={p.image}
//                       alt={p.title}
//                       style={{
//                         width: "100%",
//                         height: "100%",
//                         objectFit: "cover",
//                         transition: "transform 0.5s",
//                       }}
//                       onMouseOver={(e) =>
//                         (e.target.style.transform = "scale(1.08)")
//                       }
//                       onMouseOut={(e) =>
//                         (e.target.style.transform = "scale(1)")
//                       }
//                     />
//                     <div
//                       style={{
//                         position: "absolute",
//                         inset: 0,
//                         background:
//                           "linear-gradient(180deg,transparent 55%,rgba(0,0,0,0.3))",
//                       }}
//                     />
//                     <span
//                       className="badge-pill"
//                       style={{
//                         position: "absolute",
//                         bottom: 12,
//                         left: 12,
//                         background: "#1d4ed8",
//                         color: "#fff",
//                       }}
//                     >
//                       {p.badge}
//                     </span>
//                   </div>
//                   <div style={{ padding: "16px 18px" }}>
//                     <div
//                       style={{
//                         display: "flex",
//                         alignItems: "center",
//                         justifyContent: "space-between",
//                         marginBottom: 12,
//                       }}
//                     >
//                       <h3 style={{ fontWeight: 700, fontSize: "0.95rem" }}>
//                         {p.title}
//                       </h3>
//                       <span
//                         style={{
//                           fontSize: "0.72rem",
//                           color: "#64748b",
//                           background: "#f1f5f9",
//                           padding: "3px 9px",
//                           borderRadius: 20,
//                         }}
//                       >
//                         {p.genre}
//                       </span>
//                     </div>
//                     <div
//                       style={{ display: "flex", gap: 10, alignItems: "center" }}
//                     >
//                       <button
//                         style={{
//                           fontSize: "0.8rem",
//                           color: "#1d4ed8",
//                           background: "none",
//                           border: "none",
//                           cursor: "pointer",
//                           padding: 0,
//                           textDecoration: "underline",
//                         }}
//                       >
//                         View Case →
//                       </button>
//                       <button
//                         style={{
//                           marginLeft: "auto",
//                           fontSize: "0.78rem",
//                           background: "#eff6ff",
//                           color: "#1d4ed8",
//                           border: "none",
//                           borderRadius: 8,
//                           padding: "5px 12px",
//                           cursor: "pointer",
//                         }}
//                       >
//                         Start Conversation
//                       </button>
//                     </div>
//                   </div>
//                 </motion.div>
//               </FadeSection>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── TECH STACK ── */}
//       <section
//         style={{
//           padding: "56px 0",
//           background: "#fff",
//           borderTop: "1px solid #e2e8f0",
//         }}
//       >
//         <div
//           style={{
//             maxWidth: 1480,
//             margin: "0 auto",
//             padding: "0 5%",
//             textAlign: "center",
//           }}
//         >
//           <FadeSection>
//             <h2
//               className="hero-title"
//               style={{ fontSize: "1.8rem", fontWeight: 700, marginBottom: 8 }}
//             >
//               Our Tech Stack
//             </h2>
//             <p style={{ color: "#64748b", marginBottom: 36 }}>
//               Industry-leading tools and engines powering every title.
//             </p>
//           </FadeSection>
//           <FadeSection delay={0.1}>
//             <div
//               style={{
//                 display: "flex",
//                 flexWrap: "wrap",
//                 gap: 14,
//                 justifyContent: "center",
//               }}
//             >
//               {techStack.map((t, i) => (
//                 <motion.div
//                   key={i}
//                   className="tech-pill"
//                   whileHover={{ y: -4, boxShadow: "0 8px 20px #1d4ed812" }}
//                   transition={{ type: "spring", stiffness: 200 }}
//                 >
//                   <img
//                     src={t.logo}
//                     alt={t.name}
//                     style={{ width: 22, height: 22, objectFit: "contain" }}
//                   />
//                   {t.name}
//                 </motion.div>
//               ))}
//             </div>
//           </FadeSection>
//         </div>
//       </section>

//       {/* ── TESTIMONIALS ── */}
//       <section
//         style={{
//           padding: "34px 0",
//           background: "linear-gradient(160deg,#eff6ff,#f0f9ff)",
//         }}
//       >
//         <div style={{ maxWidth: 1480, margin: "0 auto", padding: "0 5%" }}>
//           <FadeSection>
//             <h2
//               className="hero-title"
//               style={{ fontSize: "2rem", fontWeight: 700, marginBottom: 8 }}
//             >
//               What Our Clients Say
//             </h2>
//             <p style={{ color: "#64748b", marginBottom: 40 }}>
//               Trusted by studios and publishers worldwide.
//             </p>
//           </FadeSection>
//           <div
//             style={{
//               display: "grid",
//               gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
//               gap: 22,
//             }}
//           >
//             {testimonials.map((t, i) => (
//               <FadeSection key={i} delay={i * 0.1}>
//                 <motion.div
//                   whileHover={{ y: -5, boxShadow: "0 18px 40px #1e40af10" }}
//                   transition={{ type: "spring", stiffness: 180 }}
//                   style={{
//                     padding: "26px 24px",
//                     background: "#fff",
//                     borderRadius: 20,
//                     border: "1px solid #e2e8f0",
//                     boxShadow: "0 4px 16px #1e40af07",
//                   }}
//                 >
//                   <div style={{ display: "flex", gap: 4, marginBottom: 14 }}>
//                     {"★★★★★".split("").map((s, j) => (
//                       <span
//                         key={j}
//                         className="star"
//                         style={{ fontSize: "0.9rem" }}
//                       >
//                         {s}
//                       </span>
//                     ))}
//                   </div>
//                   <p
//                     style={{
//                       color: "#475569",
//                       fontSize: "0.9rem",
//                       lineHeight: 1.65,
//                       marginBottom: 20,
//                       fontStyle: "italic",
//                     }}
//                   >
//                     "{t.text}"
//                   </p>
//                   <div
//                     style={{ display: "flex", alignItems: "center", gap: 12 }}
//                   >
//                     <img
//                       src={t.avatar}
//                       alt={t.name}
//                       style={{
//                         width: 42,
//                         height: 42,
//                         borderRadius: "50%",
//                         objectFit: "cover",
//                         border: "2px solid #bfdbfe",
//                       }}
//                     />
//                     <div>
//                       <div style={{ fontWeight: 700, fontSize: "0.88rem" }}>
//                         {t.name}
//                       </div>
//                       <div style={{ color: "#94a3b8", fontSize: "0.75rem" }}>
//                         {t.role}
//                       </div>
//                     </div>
//                   </div>
//                 </motion.div>
//               </FadeSection>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── CTA ── */}
//       <section
//         style={{
//           padding: "72px 0",
//           background:
//             "linear-gradient(135deg,#1d4ed8 0%,#1e40af 50%,#1d4ed8 100%)",
//           position: "relative",
//           overflow: "hidden",
//         }}
//       >
//         {/* Animated background rings */}
//         {[0, 1, 2].map((i) => (
//           <motion.div
//             key={i}
//             style={{
//               position: "absolute",
//               borderRadius: "50%",
//               border: "1px solid rgba(255,255,255,0.1)",
//               left: "50%",
//               top: "50%",
//               transform: "translate(-50%,-50%)",
//               width: 400 + i * 180,
//               height: 400 + i * 180,
//             }}
//             animate={{ scale: [1, 1.04, 1], opacity: [0.4, 0.15, 0.4] }}
//             transition={{ duration: 4 + i, repeat: Infinity, delay: i * 1.2 }}
//           />
//         ))}
//         <div
//           style={{
//             maxWidth: 700,
//             margin: "0 auto",
//             padding: "0 5%",
//             textAlign: "center",
//             position: "relative",
//           }}
//         >
//           <FadeSection>
//             <h2
//               className="hero-title"
//               style={{
//                 fontSize: "clamp(1.8rem,4vw,3rem)",
//                 fontWeight: 700,
//                 color: "#fff",
//                 marginBottom: 16,
//               }}
//             >
//               Ready to launch your game?
//             </h2>
//             <p
//               style={{
//                 color: "#bfdbfe",
//                 lineHeight: 1.65,
//                 marginBottom: 36,
//                 fontSize: "1.05rem",
//               }}
//             >
//               Tell us your goals — we will map a roadmap, dedicated team and
//               timeline to ship your vision to players worldwide.
//             </p>
//             <div
//               style={{
//                 display: "flex",
//                 flexWrap: "wrap",
//                 gap: 14,
//                 justifyContent: "center",
//               }}
//             >
//               <motion.button
//                 whileHover={{
//                   y: -3,
//                   boxShadow: "0 12px 28px rgba(0,0,0,0.25)",
//                 }}
//                 whileTap={{ scale: 0.97 }}
//                 style={{
//                   padding: "14px 32px",
//                   borderRadius: 12,
//                   background: "linear-gradient(135deg,#f59e0b,#d97706)",
//                   color: "#fff",
//                   fontWeight: 700,
//                   fontSize: "1rem",
//                   border: "none",
//                   cursor: "pointer",
//                 }}
//               >
//                 Get a Free Quote
//               </motion.button>
//               <motion.button
//                 whileHover={{ y: -3 }}
//                 whileTap={{ scale: 0.97 }}
//                 style={{
//                   padding: "14px 28px",
//                   borderRadius: 12,
//                   background: "rgba(255,255,255,0.12)",
//                   border: "1.5px solid rgba(255,255,255,0.3)",
//                   color: "#fff",
//                   fontWeight: 600,
//                   fontSize: "1rem",
//                   cursor: "pointer",
//                 }}
//               >
//                 📞 Call Sales
//               </motion.button>
//             </div>
//           </FadeSection>
//         </div>
//       </section>
//     </div>
//   );
// }

"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useTransform, useInView } from "framer-motion";

/* ─────────────────────────── DATA ─────────────────────────── */
const features = [
  {
    title: "Expert Game Designers",
    desc: "Immersive worlds, characters and loop design to retain players.",
    icon: "🎮",
  },
  {
    title: "Unity & Unreal Specialists",
    desc: "Performance, VFX and cinematic visuals for every platform.",
    icon: "⚙️",
  },
  {
    title: "Multiplayer & Cloud Gaming",
    desc: "Scalable matchmaking, state sync and low-latency gameplay.",
    icon: "☁️",
  },
  {
    title: "3D Art & Animation",
    desc: "Characters, rigs, cutscenes and optimized LOD assets.",
    icon: "🎨",
  },
];

const categories = [
  {
    title: "AAA / Cinematic Games",
    desc: "High-fidelity visuals, cinematic narratives and large worlds with next-gen rendering.",
    image:
      "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&w=800&q=80",
    badge: "AAA",
    color: "#3b82f6",
  },
  {
    title: "Hyper Casual & Mobile",
    desc: "Fast prototyping, UA-ready features and P0 retention focus for mass-market audiences.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
    badge: "Mobile",
    color: "#10b981",
  },
  {
    title: "RMG & Casino",
    desc: "Secure RNG, wallet integrations, regulatory compliance and payout systems.",
    image:
      "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?q=80&w=800&auto=format&fit=crop",
    badge: "RMG",
    color: "#f59e0b",
  },
];

const portfolio = [
  {
    title: "Fantasy 3D RPG",
    image:
      "https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?auto=format&fit=crop&w=600&q=80",
    badge: "Unity",
    genre: "RPG",
  },
  {
    title: "Casino UX Revamp",
    image:
      "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?q=80&w=600&auto=format&fit=crop",
    badge: "RMG",
    genre: "Casino",
  },
  {
    title: "Space Shooter",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop",
    badge: "Hyper Casual",
    genre: "Action",
  },
  {
    title: "VR Exploration",
    image:
      "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?auto=format&fit=crop&w=600&q=80",
    badge: "VR",
    genre: "Immersive",
  },
];

const techStack = [
  {
    name: "Unity",
    logo: "https://cdn-icons-png.flaticon.com/512/5969/5969346.png",
  },
  {
    name: "Unreal",
    logo: "https://cdn-icons-png.flaticon.com/512/5969/5969368.png",
  },
  {
    name: "Blender",
    logo: "https://cdn-icons-png.flaticon.com/512/5969/5969361.png",
  },
  {
    name: "Firebase",
    logo: "https://cdn-icons-png.flaticon.com/512/5968/5968205.png",
  },
  {
    name: "AWS",
    logo: "https://cdn-icons-png.flaticon.com/512/5968/5968312.png",
  },
  {
    name: "Photon",
    logo: "https://cdn-icons-png.flaticon.com/512/7374/7374304.png",
  },
];

const testimonials = [
  {
    name: "Ravi Mehta",
    role: "CEO, PlayArena",
    text: "They delivered our multiplayer title 2 weeks ahead of schedule. The LiveOps team keeps our DAU growing every month.",
    avatar: "https://i.pravatar.cc/80?img=12",
  },
  {
    name: "Sophie Laurent",
    role: "Product Lead, CasinoX",
    text: "The RMG pipeline they built handles 50k concurrent users without a hitch. Absolutely world-class engineering.",
    avatar: "https://i.pravatar.cc/80?img=47",
  },
  {
    name: "Marcus Chen",
    role: "CTO, NeonStudios",
    text: "Best AAA partner we've worked with. The cinematic cutscenes blew our publisher away.",
    avatar: "https://i.pravatar.cc/80?img=33",
  },
];

const stats = [
  { val: "100+", label: "Projects Delivered" },
  { val: "50M+", label: "Active Players" },
  { val: "99.9%", label: "Uptime SLA" },
  { val: "10+", label: "LiveOps Engineers" },
];

/* ─────────────── FLOATING 3D GAME SHOWCASE ─────────────── */
const GAMES = [
  {
    name: "BGMI",
    genre: "Battle Royale",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=600&q=80",
    accentColor: "#f59e0b",
    glowColor: "rgba(245,158,11,0.45)",
    players: "100M+",
    rating: "4.8",
    tag: "🏆 Top Grossing",
  },
  {
    name: "Clash of Clans",
    genre: "Strategy",
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=600&q=80",
    accentColor: "#10b981",
    glowColor: "rgba(16,185,129,0.4)",
    players: "500M+",
    rating: "4.9",
    tag: "⚔️ Strategy",
  },
  {
    name: "Free Fire",
    genre: "Battle Royale",
    image:
      "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&w=600&q=80",
    accentColor: "#ef4444",
    glowColor: "rgba(239,68,68,0.4)",
    players: "150M+",
    rating: "4.7",
    tag: "🔥 Trending",
  },
  {
    name: "Teen Patti",
    genre: "Card / RMG",
    image:
      "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?q=80&w=600&auto=format&fit=crop",
    accentColor: "#8b5cf6",
    glowColor: "rgba(139,92,246,0.4)",
    players: "50M+",
    rating: "4.6",
    tag: "🃏 RMG",
  },
  {
    name: "Candy Crush",
    genre: "Hyper Casual",
    image:
      "https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?auto=format&fit=crop&w=600&q=80",
    accentColor: "#ec4899",
    glowColor: "rgba(236,72,153,0.4)",
    players: "250M+",
    rating: "4.8",
    tag: "🍬 Casual",
  },
];

/* Layout positions for the 5 cards — a staggered 3‑D stack */
const LAYOUT = [
  // Main hero card (center-left, largest)
  { x: 0, y: 0, rotate: -4, scale: 1, zIndex: 5, width: 210 },
  // Top-right
  { x: 160, y: -80, rotate: 6, scale: 0.78, zIndex: 4, width: 170 },
  // Bottom-right
  { x: 185, y: 120, rotate: -7, scale: 0.74, zIndex: 3, width: 160 },
  // Far-right top (peeking)
  { x: 310, y: -20, rotate: 10, scale: 0.62, zIndex: 2, width: 145 },
  // Far-right bottom (peeking)
  { x: 320, y: 140, rotate: -9, scale: 0.58, zIndex: 1, width: 135 },
];

/* Float keyframes per card so they move independently */
const FLOAT_VARIANTS = [
  { yAnim: [0, -14, 0], dur: 5.5 },
  { yAnim: [0, 10, 0], dur: 4.8 },
  { yAnim: [0, -12, 3, 0], dur: 6.2 },
  { yAnim: [0, 8, -4, 0], dur: 5.0 },
  { yAnim: [0, -10, 5, 0], dur: 4.4 },
];

function GameCard({ game, layout, floatVariant, entryDelay }) {
  const { x, y, rotate, scale, zIndex, width } = layout;
  const { yAnim, dur } = floatVariant;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6, y: 40 }}
      animate={{
        opacity: 1,
        scale,
        x,
        y: yAnim.map((v) => y + v),
        rotate,
      }}
      transition={{
        opacity: { duration: 0.55, delay: entryDelay },
        scale: { duration: 0.55, delay: entryDelay },
        x: { duration: 0.55, delay: entryDelay },
        rotate: { duration: 0.55, delay: entryDelay },
        y: {
          duration: dur,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
          delay: entryDelay,
          times: yAnim.map((_, i) => i / (yAnim.length - 1)),
        },
      }}
      whileHover={{ scale: scale * 1.06, zIndex: 20, rotate: 0 }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width,
        zIndex,
        transformOrigin: "center center",
        cursor: "pointer",
      }}
    >
      {/* Glow behind */}
      <div
        style={{
          position: "absolute",
          inset: -12,
          borderRadius: 24,
          background: game.glowColor,
          filter: "blur(24px)",
          opacity: 0.55,
          zIndex: 0,
        }}
      />

      {/* Card body */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          borderRadius: 18,
          overflow: "hidden",
          background: "#0f172a",
          border: `1.5px solid ${game.accentColor}44`,
          boxShadow: `0 12px 40px ${game.glowColor}, 0 2px 8px rgba(0,0,0,0.4)`,
        }}
      >
        {/* Game image */}
        <div
          style={{
            position: "relative",
            aspectRatio: "16/10",
            overflow: "hidden",
          }}
        >
          <img
            src={game.image}
            alt={game.name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
          {/* Gradient overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, transparent 30%, rgba(0,0,0,0.75) 100%)",
            }}
          />
          {/* Live badge */}
          <div
            style={{
              position: "absolute",
              top: 8,
              left: 8,
              display: "flex",
              alignItems: "center",
              gap: 5,
              background: "rgba(0,0,0,0.55)",
              backdropFilter: "blur(8px)",
              borderRadius: 999,
              padding: "3px 9px",
              border: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            <div
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#10b981",
                boxShadow: "0 0 6px #10b981",
              }}
            />
            <span
              style={{
                fontSize: "0.6rem",
                fontWeight: 800,
                color: "#fff",
                letterSpacing: "0.08em",
              }}
            >
              LIVE
            </span>
          </div>
          {/* Tag */}
          <div
            style={{
              position: "absolute",
              top: 8,
              right: 8,
              fontSize: "0.58rem",
              fontWeight: 700,
              color: "#fff",
              background: `${game.accentColor}cc`,
              borderRadius: 6,
              padding: "2px 7px",
            }}
          >
            {game.tag}
          </div>
          {/* Rating */}
          <div
            style={{
              position: "absolute",
              bottom: 8,
              right: 8,
              display: "flex",
              alignItems: "center",
              gap: 3,
              background: "rgba(0,0,0,0.6)",
              borderRadius: 6,
              padding: "2px 7px",
            }}
          >
            <span style={{ color: "#f59e0b", fontSize: "0.6rem" }}>★</span>
            <span
              style={{ fontSize: "0.62rem", fontWeight: 700, color: "#fff" }}
            >
              {game.rating}
            </span>
          </div>
        </div>

        {/* Info strip */}
        <div
          style={{
            padding: "9px 11px",
            background: "linear-gradient(135deg,#0f172a,#1e293b)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: "0.72rem",
                  fontWeight: 800,
                  color: "#f8fafc",
                  lineHeight: 1.2,
                }}
              >
                {game.name}
              </div>
              <div
                style={{ fontSize: "0.58rem", color: "#64748b", marginTop: 1 }}
              >
                {game.genre}
              </div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div
                style={{
                  fontSize: "0.62rem",
                  fontWeight: 800,
                  color: game.accentColor,
                }}
              >
                {game.players}
              </div>
              <div style={{ fontSize: "0.52rem", color: "#475569" }}>
                players
              </div>
            </div>
          </div>
          {/* Color bar */}
          <div
            style={{
              marginTop: 7,
              height: 2,
              borderRadius: 999,
              background: `linear-gradient(90deg, ${game.accentColor}, ${game.accentColor}44)`,
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}

function FloatingGameShowcase() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: 480,
        overflow: "visible",
      }}
    >
      {/* Background glow orb */}
      <motion.div
        animate={{ scale: [1, 1.12, 1], opacity: [0.18, 0.28, 0.18] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          top: "50%",
          left: "40%",
          transform: "translate(-50%,-50%)",
          width: 380,
          height: 380,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, #3b82f680, #1d4ed840, transparent 70%)",
          filter: "blur(30px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      {/* Decorative grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          backgroundImage:
            "linear-gradient(rgba(59,130,246,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.08) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          borderRadius: 24,
        }}
      />

      {/* Cards container — positioned absolutely so cards can overlap freely */}
      <div
        style={{
          position: "absolute",
          top: 60,
          left: 20,
          width: "100%",
          height: "100%",
          zIndex: 1,
        }}
      >
        {GAMES.map((game, i) => (
          <GameCard
            key={game.name}
            game={game}
            layout={LAYOUT[i]}
            floatVariant={FLOAT_VARIANTS[i]}
            entryDelay={i * 0.12}
          />
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────── TILT CARD ─────────────────────────── */
function TiltCard({ children }) {
  const x = useMotionValue(0),
    y = useMotionValue(0);
  const rotateX = useTransform(y, [-50, 50], [6, -6]);
  const rotateY = useTransform(x, [-50, 50], [-6, 6]);
  return (
    <motion.div
      style={{ rotateX, rotateY, perspective: 900 }}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        x.set(((e.clientX - r.left) / r.width - 0.5) * 100);
        y.set(((e.clientY - r.top) / r.height - 0.5) * 100);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      whileHover={{ scale: 1.025, zIndex: 10 }}
      transition={{ type: "spring", stiffness: 140, damping: 14 }}
      className="will-change-transform"
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────────────── SECTION WRAPPER ─────────────────────────── */
function FadeSection({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────────────── MAIN PAGE ─────────────────────────── */
export default function GameDevelopmentPage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f8fafc",
        color: "#0f172a",
        fontFamily: "'Segoe UI', system-ui, sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600;700&display=swap');
        .hero-title { font-family: 'DM Serif Display', Georgia, serif; }
        .body-font  { font-family: 'DM Sans', system-ui, sans-serif; }
        .grad-text {
          background: linear-gradient(135deg, #1d4ed8 0%, #3b82f6 50%, #60a5fa 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: pan-grad 6s ease infinite;
        }
        @keyframes pan-grad { 0%,100%{background-position:0% 50%} 50%{background-position:100% 50%} }
        .badge-pill { display:inline-flex;align-items:center;padding:2px 10px;border-radius:999px;font-size:0.72rem;font-weight:600; }
        .tab-btn { padding:8px 18px;border-radius:8px;font-weight:500;font-size:0.85rem;border:none;cursor:pointer;transition:all 0.2s; }
        .tab-btn.active { background:#1d4ed8;color:#fff;box-shadow:0 4px 12px #1d4ed840; }
        .tab-btn:not(.active) { background:#e2e8f0;color:#475569; }
        .tech-pill { display:flex;align-items:center;gap:8px;padding:8px 14px;border-radius:12px;background:#fff;border:1px solid #e2e8f0;font-size:0.82rem;font-weight:500;box-shadow:0 2px 6px #1e40af0a; }
        .amber-btn { background:linear-gradient(135deg,#f59e0b,#d97706);color:#fff;font-weight:600;border:none;cursor:pointer;transition:all 0.2s; }
        .amber-btn:hover { transform:translateY(-2px);box-shadow:0 8px 20px #d9770640; }
        .blue-outline-btn { background:#fff;border:1.5px solid #bfdbfe;color:#1d4ed8;font-weight:600;cursor:pointer;transition:all 0.2s; }
        .blue-outline-btn:hover { background:#eff6ff; }
        .star { color:#f59e0b; }
      `}</style>

      {/* ── HERO ── */}
      <header
        style={{
          background: "linear-gradient(160deg,#ffffff 60%,#eff6ff 100%)",
          borderBottom: "1px solid #e2e8f0",
          paddingTop: 60,
          paddingBottom: 40,
          marginTop: 40,
        }}
      >
        <div style={{ maxWidth: 1480, margin: "0 auto", padding: "0 5%" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: 48,
            }}
          >
            {/* LEFT — text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, ease: "easeOut" }}
              style={{ flex: "1 1 340px" }}
            >
              <motion.span
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="badge-pill"
                style={{
                  background: "#dbeafe",
                  color: "#1d4ed8",
                  marginBottom: 16,
                  display: "inline-flex",
                }}
              >
                🎮 &nbsp; Game Development Studio
              </motion.span>

              <h1
                className="hero-title"
                style={{
                  fontSize: "clamp(2.2rem,5vw,3.8rem)",
                  lineHeight: 1.08,
                  fontWeight: 700,
                  margin: "0 0 20px 0",
                }}
              >
                Studio-grade game
                <br />
                <em className="grad-text not-italic">development & LiveOps</em>
              </h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="body-font"
                style={{
                  color: "#475569",
                  maxWidth: 480,
                  lineHeight: 1.65,
                  marginBottom: 28,
                  fontSize: "1.05rem",
                }}
              >
                From indie prototypes to AAA titles — design, build, scale and
                operate live games with a focus on performance, monetization and
                player retention.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                style={{ display: "flex", gap: 12, flexWrap: "wrap" }}
              >
                <button
                  className="amber-btn"
                  style={{
                    padding: "13px 28px",
                    borderRadius: 12,
                    fontSize: "0.95rem",
                  }}
                >
                  Get a Free Quote →
                </button>
                <button
                  className="blue-outline-btn"
                  style={{
                    padding: "13px 24px",
                    borderRadius: 12,
                    fontSize: "0.95rem",
                  }}
                >
                  View Portfolio
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4,1fr)",
                  gap: 10,
                  marginTop: 32,
                }}
              >
                {stats.map((s, i) => (
                  <div
                    key={i}
                    style={{
                      background:
                        i % 2 === 0
                          ? "#eff6ff"
                          : i === 1
                            ? "#ecfdf5"
                            : "#fff7ed",
                      borderRadius: 12,
                      padding: "12px 8px",
                      textAlign: "center",
                    }}
                  >
                    <div
                      style={{
                        fontWeight: 800,
                        fontSize: "1.2rem",
                        fontFamily: "'DM Serif Display',serif",
                        color: "#1e40af",
                      }}
                    >
                      {s.val}
                    </div>
                    <div
                      style={{
                        fontSize: "0.7rem",
                        color: "#64748b",
                        marginTop: 2,
                      }}
                    >
                      {s.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* RIGHT — Floating 3D Game Showcase */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              style={{
                flex: "1 1 420px",
                minHeight: 480,
                position: "relative",
              }}
            >
              <FloatingGameShowcase />
            </motion.div>
          </div>
        </div>
      </header>

      {/* ── FEATURES ── */}
      <section style={{ padding: "72px 0", background: "#fff" }}>
        <div style={{ maxWidth: 1480, margin: "0 auto", padding: "0 5%" }}>
          <FadeSection>
            <h2
              className="hero-title"
              style={{ fontSize: "2rem", fontWeight: 700, marginBottom: 8 }}
            >
              What we bring to the table
            </h2>
            <p style={{ color: "#64748b", marginBottom: 36 }}>
              End-to-end capabilities across design, engineering and live
              operations.
            </p>
          </FadeSection>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
              gap: 20,
            }}
          >
            {features.map((f, i) => (
              <FadeSection key={i} delay={i * 0.07}>
                <motion.div
                  whileHover={{ y: -6, boxShadow: "0 16px 40px #1d4ed812" }}
                  transition={{ type: "spring", stiffness: 200, damping: 18 }}
                  style={{
                    padding: 24,
                    background: "#f8fafc",
                    borderRadius: 18,
                    border: "1px solid #e2e8f0",
                    height: "100%",
                  }}
                >
                  <div style={{ fontSize: "2.2rem", marginBottom: 14 }}>
                    {f.icon}
                  </div>
                  <h3
                    style={{
                      fontWeight: 700,
                      marginBottom: 8,
                      fontSize: "1rem",
                    }}
                  >
                    {f.title}
                  </h3>
                  <p
                    style={{
                      color: "#64748b",
                      fontSize: "0.875rem",
                      lineHeight: 1.6,
                    }}
                  >
                    {f.desc}
                  </p>
                </motion.div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CATEGORIES ── */}
      <section
        style={{
          padding: "72px 0",
          background: "linear-gradient(180deg,#eff6ff 0%,#f0f9ff 100%)",
        }}
      >
        <div style={{ maxWidth: 1480, margin: "0 auto", padding: "0 5%" }}>
          <FadeSection>
            <h2
              className="hero-title"
              style={{ fontSize: "2rem", fontWeight: 700, marginBottom: 8 }}
            >
              Game Development Categories
            </h2>
            <p style={{ color: "#64748b", marginBottom: 40 }}>
              Genre-focused teams and pipelines — choose the category that
              matches your vision.
            </p>
          </FadeSection>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(290px,1fr))",
              gap: 24,
            }}
          >
            {categories.map((c, idx) => (
              <FadeSection key={idx} delay={idx * 0.1}>
                <TiltCard>
                  <motion.div
                    whileTap={{ scale: 0.98 }}
                    style={{
                      borderRadius: 20,
                      overflow: "hidden",
                      background: "#fff",
                      border: "1px solid #e2e8f0",
                      boxShadow: "0 6px 24px #1e40af0c",
                    }}
                  >
                    <div
                      style={{
                        height: 210,
                        overflow: "hidden",
                        position: "relative",
                      }}
                    >
                      <img
                        src={c.image}
                        alt={c.title}
                        style={{
                          height: "100%",
                          width: "100%",
                          objectFit: "cover",
                          transition: "transform 0.5s",
                          display: "block",
                        }}
                        onMouseOver={(e) =>
                          (e.target.style.transform = "scale(1.06)")
                        }
                        onMouseOut={(e) =>
                          (e.target.style.transform = "scale(1)")
                        }
                      />
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          background:
                            "linear-gradient(180deg,transparent 50%,rgba(0,0,0,0.22))",
                        }}
                      />
                      <span
                        className="badge-pill"
                        style={{
                          position: "absolute",
                          top: 12,
                          right: 12,
                          background: c.color,
                          color: "#fff",
                        }}
                      >
                        {c.badge}
                      </span>
                    </div>
                    <div style={{ padding: "20px 22px" }}>
                      <h3
                        style={{
                          fontWeight: 700,
                          fontSize: "1.05rem",
                          marginBottom: 8,
                        }}
                      >
                        {c.title}
                      </h3>
                      <p
                        style={{
                          color: "#64748b",
                          fontSize: "0.875rem",
                          lineHeight: 1.6,
                          marginBottom: 18,
                        }}
                      >
                        {c.desc}
                      </p>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 12,
                        }}
                      >
                        <button
                          className="amber-btn"
                          style={{
                            padding: "8px 18px",
                            borderRadius: 9,
                            fontSize: "0.83rem",
                          }}
                        >
                          Start a Project
                        </button>
                        <button
                          style={{
                            background: "none",
                            border: "none",
                            color: "#1d4ed8",
                            fontSize: "0.83rem",
                            cursor: "pointer",
                            textDecoration: "underline",
                          }}
                        >
                          Explore →
                        </button>
                      </div>
                    </div>
                  </motion.div>
                </TiltCard>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section style={{ padding: "72px 0", background: "#fff" }}>
        <div style={{ maxWidth: 1480, margin: "0 auto", padding: "0 5%" }}>
          <FadeSection>
            <h2
              className="hero-title"
              style={{ fontSize: "2rem", fontWeight: 700, marginBottom: 8 }}
            >
              Our Process
            </h2>
            <p style={{ color: "#64748b", marginBottom: 48 }}>
              Rapid prototyping, player-tested iterations and data-led LiveOps.
            </p>
          </FadeSection>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
              gap: 0,
              position: "relative",
            }}
          >
            {[
              {
                step: "01",
                title: "Concept & GDD",
                desc: "Design pillars, core loop, monetization strategy and technical brief.",
                icon: "📋",
              },
              {
                step: "02",
                title: "Prototype & Validate",
                desc: "Playable prototypes, user testing and rapid iteration cycles.",
                icon: "🔬",
              },
              {
                step: "03",
                title: "Production Sprint",
                desc: "Full asset pipeline, engine integration and milestone QA.",
                icon: "🏗️",
              },
              {
                step: "04",
                title: "Launch & LiveOps",
                desc: "Server infra, A/B experiments, events and retention loops.",
                icon: "🚀",
              },
            ].map((p, i) => (
              <FadeSection key={i} delay={i * 0.1}>
                <div
                  style={{
                    position: "relative",
                    padding: "28px 24px",
                    background: i % 2 === 0 ? "#f8fafc" : "#fff",
                    border: "1px solid #e2e8f0",
                    borderRadius:
                      i === 0 ? "16px 0 0 16px" : i === 3 ? "0 16px 16px 0" : 0,
                    marginRight: i < 3 ? -1 : 0,
                    zIndex: i,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 14,
                    }}
                  >
                    <div
                      style={{
                        minWidth: 44,
                        height: 44,
                        borderRadius: 12,
                        background: "linear-gradient(135deg,#dbeafe,#bfdbfe)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: 800,
                        color: "#1d4ed8",
                        fontSize: "0.85rem",
                      }}
                    >
                      {p.step}
                    </div>
                    <div>
                      <div style={{ fontSize: "1.3rem", marginBottom: 6 }}>
                        {p.icon}
                      </div>
                      <h4
                        style={{
                          fontWeight: 700,
                          marginBottom: 6,
                          fontSize: "0.95rem",
                        }}
                      >
                        {p.title}
                      </h4>
                      <p
                        style={{
                          color: "#64748b",
                          fontSize: "0.82rem",
                          lineHeight: 1.6,
                        }}
                      >
                        {p.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO TABS ── */}
      <section
        style={{
          padding: "72px 0",
          background: "linear-gradient(180deg,#eff6ff,#fff)",
        }}
      >
        <div style={{ maxWidth: 1480, margin: "0 auto", padding: "0 5%" }}>
          <FadeSection>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 16,
                marginBottom: 32,
              }}
            >
              <div>
                <h2
                  className="hero-title"
                  style={{ fontSize: "2rem", fontWeight: 700, marginBottom: 6 }}
                >
                  Selected Portfolio
                </h2>
                <p style={{ color: "#64748b" }}>
                  Recent projects across genres and platforms.
                </p>
              </div>
              <div style={{ display: "flex", gap: 8 }}>
                {["All", "Unity", "RMG", "VR"].map((t, i) => (
                  <button
                    key={i}
                    className={`tab-btn ${activeTab === i ? "active" : ""}`}
                    onClick={() => setActiveTab(i)}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </FadeSection>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
              gap: 20,
            }}
          >
            {portfolio.map((p, i) => (
              <FadeSection key={i} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 180, damping: 16 }}
                  style={{
                    borderRadius: 18,
                    overflow: "hidden",
                    background: "#fff",
                    border: "1px solid #e2e8f0",
                    boxShadow: "0 4px 18px #1e40af08",
                  }}
                >
                  <div
                    style={{
                      height: 180,
                      overflow: "hidden",
                      position: "relative",
                    }}
                  >
                    <img
                      src={p.image}
                      alt={p.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: "transform 0.5s",
                      }}
                      onMouseOver={(e) =>
                        (e.target.style.transform = "scale(1.08)")
                      }
                      onMouseOut={(e) =>
                        (e.target.style.transform = "scale(1)")
                      }
                    />
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background:
                          "linear-gradient(180deg,transparent 55%,rgba(0,0,0,0.3))",
                      }}
                    />
                    <span
                      className="badge-pill"
                      style={{
                        position: "absolute",
                        bottom: 12,
                        left: 12,
                        background: "#1d4ed8",
                        color: "#fff",
                      }}
                    >
                      {p.badge}
                    </span>
                  </div>
                  <div style={{ padding: "16px 18px" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: 12,
                      }}
                    >
                      <h3 style={{ fontWeight: 700, fontSize: "0.95rem" }}>
                        {p.title}
                      </h3>
                      <span
                        style={{
                          fontSize: "0.72rem",
                          color: "#64748b",
                          background: "#f1f5f9",
                          padding: "3px 9px",
                          borderRadius: 20,
                        }}
                      >
                        {p.genre}
                      </span>
                    </div>
                    <div
                      style={{ display: "flex", gap: 10, alignItems: "center" }}
                    >
                      <button
                        style={{
                          fontSize: "0.8rem",
                          color: "#1d4ed8",
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          padding: 0,
                          textDecoration: "underline",
                        }}
                      >
                        View Case →
                      </button>
                      <button
                        style={{
                          marginLeft: "auto",
                          fontSize: "0.78rem",
                          background: "#eff6ff",
                          color: "#1d4ed8",
                          border: "none",
                          borderRadius: 8,
                          padding: "5px 12px",
                          cursor: "pointer",
                        }}
                      >
                        Start Conversation
                      </button>
                    </div>
                  </div>
                </motion.div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH STACK ── */}
      <section
        style={{
          padding: "72px 0",
          background: "#fff",
          borderTop: "1px solid #e2e8f0",
        }}
      >
        <div
          style={{
            maxWidth: 1480,
            margin: "0 auto",
            padding: "0 5%",
            textAlign: "center",
          }}
        >
          <FadeSection>
            <h2
              className="hero-title"
              style={{ fontSize: "1.8rem", fontWeight: 700, marginBottom: 8 }}
            >
              Our Tech Stack
            </h2>
            <p style={{ color: "#64748b", marginBottom: 36 }}>
              Industry-leading tools and engines powering every title.
            </p>
          </FadeSection>
          <FadeSection delay={0.1}>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 14,
                justifyContent: "center",
              }}
            >
              {techStack.map((t, i) => (
                <motion.div
                  key={i}
                  className="tech-pill"
                  whileHover={{ y: -4, boxShadow: "0 8px 20px #1d4ed812" }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <img
                    src={t.logo}
                    alt={t.name}
                    style={{ width: 22, height: 22, objectFit: "contain" }}
                  />
                  {t.name}
                </motion.div>
              ))}
            </div>
          </FadeSection>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section
        style={{
          padding: "72px 0",
          background: "linear-gradient(160deg,#eff6ff,#f0f9ff)",
        }}
      >
        <div style={{ maxWidth: 1480, margin: "0 auto", padding: "0 5%" }}>
          <FadeSection>
            <h2
              className="hero-title"
              style={{ fontSize: "2rem", fontWeight: 700, marginBottom: 8 }}
            >
              What Our Clients Say
            </h2>
            <p style={{ color: "#64748b", marginBottom: 40 }}>
              Trusted by studios and publishers worldwide.
            </p>
          </FadeSection>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
              gap: 22,
            }}
          >
            {testimonials.map((t, i) => (
              <FadeSection key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -5, boxShadow: "0 18px 40px #1e40af10" }}
                  transition={{ type: "spring", stiffness: 180 }}
                  style={{
                    padding: "26px 24px",
                    background: "#fff",
                    borderRadius: 20,
                    border: "1px solid #e2e8f0",
                    boxShadow: "0 4px 16px #1e40af07",
                  }}
                >
                  <div style={{ display: "flex", gap: 4, marginBottom: 14 }}>
                    {"★★★★★".split("").map((s, j) => (
                      <span
                        key={j}
                        className="star"
                        style={{ fontSize: "0.9rem" }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <p
                    style={{
                      color: "#475569",
                      fontSize: "0.9rem",
                      lineHeight: 1.65,
                      marginBottom: 20,
                      fontStyle: "italic",
                    }}
                  >
                    "{t.text}"
                  </p>
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 12 }}
                  >
                    <img
                      src={t.avatar}
                      alt={t.name}
                      style={{
                        width: 42,
                        height: 42,
                        borderRadius: "50%",
                        objectFit: "cover",
                        border: "2px solid #bfdbfe",
                      }}
                    />
                    <div>
                      <div style={{ fontWeight: 700, fontSize: "0.88rem" }}>
                        {t.name}
                      </div>
                      <div style={{ color: "#94a3b8", fontSize: "0.75rem" }}>
                        {t.role}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        style={{
          padding: "72px 0",
          background:
            "linear-gradient(135deg,#1d4ed8 0%,#1e40af 50%,#1d4ed8 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            style={{
              position: "absolute",
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.1)",
              left: "50%",
              top: "50%",
              transform: "translate(-50%,-50%)",
              width: 400 + i * 180,
              height: 400 + i * 180,
            }}
            animate={{ scale: [1, 1.04, 1], opacity: [0.4, 0.15, 0.4] }}
            transition={{ duration: 4 + i, repeat: Infinity, delay: i * 1.2 }}
          />
        ))}
        <div
          style={{
            maxWidth: 700,
            margin: "0 auto",
            padding: "0 5%",
            textAlign: "center",
            position: "relative",
          }}
        >
          <FadeSection>
            <h2
              className="hero-title"
              style={{
                fontSize: "clamp(1.8rem,4vw,3rem)",
                fontWeight: 700,
                color: "#fff",
                marginBottom: 16,
              }}
            >
              Ready to launch your game?
            </h2>
            <p
              style={{
                color: "#bfdbfe",
                lineHeight: 1.65,
                marginBottom: 36,
                fontSize: "1.05rem",
              }}
            >
              Tell us your goals — we will map a roadmap, dedicated team and
              timeline to ship your vision to players worldwide.
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 14,
                justifyContent: "center",
              }}
            >
              <motion.button
                whileHover={{
                  y: -3,
                  boxShadow: "0 12px 28px rgba(0,0,0,0.25)",
                }}
                whileTap={{ scale: 0.97 }}
                style={{
                  padding: "14px 32px",
                  borderRadius: 12,
                  background: "linear-gradient(135deg,#f59e0b,#d97706)",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: "1rem",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Get a Free Quote
              </motion.button>
              <motion.button
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  padding: "14px 28px",
                  borderRadius: 12,
                  background: "rgba(255,255,255,0.12)",
                  border: "1.5px solid rgba(255,255,255,0.3)",
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: "1rem",
                  cursor: "pointer",
                }}
              >
                📞 Call Sales
              </motion.button>
            </div>
          </FadeSection>
        </div>
      </section>
    </div>
  );
}
