// "use client";
// import Image from "next/image";
// // src/pages/BlockchainAndWeb3.jsx
// import React from "react";
// import { motion } from "framer-motion";

// // Animation variants
// const fadeUp = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
// };

// const staggerContainer = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.15,
//       delayChildren: 0.2,
//     },
//   },
// };

// const cardHover = {
//   rest: {
//     scale: 1,
//     boxShadow:
//       "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
//   },
//   hover: {
//     scale: 1.02,
//     boxShadow:
//       "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
//     borderColor: "#3b82f6",
//     transition: { duration: 0.2 },
//   },
// };

// const Hero = () => (
//   <section className="relative w-full pt-40 pb-20 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white">
//     {/* Animated background elements */}
//     <div className="absolute inset-0 -z-10">
//       <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl animate-pulse" />
//       <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl animate-pulse animation-delay-2000" />
//     </div>

//     <div className="relative z-10 max-w-screen-2xl mx-auto px-[5%]">
//       <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-14">
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           className="flex-1 text-center md:text-left"
//         >
//           <h1 className="text-3xl sm:text-4xl md:text-[2.6rem] lg:text-[3rem] font-bold leading-tight">
//             Blockchain & Web3 Software
//           </h1>
//           <h1 className="text-3xl sm:text-4xl md:text-[2.6rem] lg:text-[3rem] font-bold leading-tight mb-4 bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">
//             Development Services
//           </h1>
//           <p className="text-base sm:text-lg md:text-xl max-w-xl mx-auto md:mx-0 leading-relaxed text-slate-600">
//             We build secure, scalable and enterprise-grade Web3
//             applications—Smart Contracts, DApps, NFT Platforms, DeFi Systems,
//             Web3 Games and custom blockchain networks.
//           </p>

//           <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center md:justify-start">
//             <motion.button
//               // whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)" }}
//               whileTap={{ scale: 0.98 }}
//               className="bg-gradient-to-br from-amber-500 btn-amber to-amber-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:-translate-y-1 transition"
//             >
//               Get a Free Quote
//               <svg
//                 className="w-4 h-4"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//               >
//                 <path d="M13 2a9 9 0 0 1 9 9" />
//                 <path d="M13 6a5 5 0 0 1 5 5" />
//                 <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465" />
//               </svg>
//             </motion.button>

//             <motion.button
//               whileHover={{
//                 scale: 1.05,
//                 boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)",
//               }}
//               whileTap={{ scale: 0.98 }}
//               className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-slate-900 text-white font-medium text-base sm:text-lg shadow-lg"
//             >
//               View Our Work
//               <svg
//                 className="w-4 h-4"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//               >
//                 <rect x="2" y="6" width="14" height="12" rx="2" />
//                 <path d="m16 13 5.223 3.482" />
//               </svg>
//             </motion.button>
//           </div>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="flex-1 flex justify-center w-full max-w-[520px] overflow-hidden"
//         >
//           {/* <Image src="/blockchain.jpg"
//             alt="Blockchain development"
//             width="520"
//             height="520"
//             className="object-contain drop-shadow-2xl scale-95 sm:scale-100"
//             loading="lazy"
//           /> */}
//           <Image
//             src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2232&auto=format&fit=crop"
//             alt="Blockchain technology visualization"
//             width="520"
//             height="520"
//             className="object-contain drop-shadow-2xl scale-95 sm:scale-100"
//             loading="lazy"
//           />
//         </motion.div>
//       </div>
//     </div>
//   </section>
// );

// // Enhanced FeatureCard with motion and hover
// const FeatureCard = ({ img, title, children, index }) => (
//   <motion.div
//     variants={cardHover}
//     initial="rest"
//     whileHover="hover"
//     className="bg-white/80 backdrop-blur-sm flex flex-col gap-6 p-8 rounded-2xl border border-slate-200 shadow-md hover:shadow-xl hover:border-blue-300 transition-all"
//   >
//     <div className="flex flex-col items-center">
//       <Image
//         src={img}
//         alt={title}
//         width="60"
//         height="60"
//         className="object-contain"
//       />
//       <div className="mt-4 text-xl font-bold text-center bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
//         {title}
//       </div>
//     </div>
//     <div className="px-2">
//       <p className="text-slate-600 text-center mt-2">{children}</p>
//     </div>
//   </motion.div>
// );

// const WhyChoose = () => (
//   <section className="py-24 bg-white">
//     <div className=" px-[5%] ">
//       <motion.h2
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.5 }}
//         className="text-2xl md:text-3xl font-extrabold"
//       >
//         Why Choose Our Blockchain Team?
//       </motion.h2>
//       <motion.p
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.5, delay: 0.1 }}
//         className="text-lg md:text-xl text-slate-600 mt-4  mx-auto"
//       >
//         An elite Web3 engineering team delivering next-generation blockchain
//         solutions for startups, enterprises, and global brands.
//       </motion.p>

//       <motion.div
//         variants={staggerContainer}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-16"
//       >
//         {[
//           {
//             img: "https://cdn-icons-png.flaticon.com/512/706/706164.png",
//             title: "Expert Blockchain Engineers",
//             desc: "Skilled Web3 architects delivering secure, scalable blockchain ecosystems.",
//           },
//           {
//             img: "https://cdn-icons-png.flaticon.com/512/3064/3064197.png",
//             title: "Enterprise Security Standards",
//             desc: "Pen-tested smart contracts, audited networks & enterprise-grade protocols.",
//           },
//           {
//             img: "https://cdn-icons-png.flaticon.com/512/1006/1006771.png",
//             title: "Multi-Chain Expertise",
//             desc: "Ethereum, Solana, Polygon, BNB Chain, Avalanche, Hyperledger & more.",
//           },
//           {
//             img: "https://cdn-icons-png.flaticon.com/512/6472/6472187.png",
//             title: "Real-World Use Cases",
//             desc: "Web3 products for DeFi, gaming, supply chain, finance & enterprise.",
//           },
//         ].map((item, i) => (
//           <FeatureCard key={i} img={item.img} title={item.title}>
//             {item.desc}
//           </FeatureCard>
//         ))}
//       </motion.div>
//     </div>
//   </section>
// );

// const ServicesGrid = () => (
//   <section className="py-24 bg-gradient-to-b from-slate-50 to-blue-50">
//     <div className=" px-[5%] ">
//       <motion.h2
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         className="text-2xl md:text-3xl font-extrabold"
//       >
//         Blockchain & Web3 Services
//       </motion.h2>
//       <motion.p
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ delay: 0.1 }}
//         className="text-lg md:text-xl text-slate-600 mt-4 mx-auto w-full"
//       >
//         End-to-end blockchain development—from idea to enterprise deployment.
//       </motion.p>

//       <motion.div
//         variants={staggerContainer}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-16"
//       >
//         {[
//           {
//             img: "https://cdn-icons-png.flaticon.com/512/1006/1006771.png",
//             title: "DApp Development",
//             desc: "Decentralized applications with secure authentication, wallet integration & scalable backend.",
//           },
//           {
//             img: "https://cdn-icons-png.flaticon.com/512/6229/6229280.png",
//             title: "Smart Contract Development",
//             desc: "Audited, gas-optimized smart contracts for tokens, NFTs, DAOs & DeFi protocols.",
//           },
//           {
//             img: "https://cdn-icons-png.flaticon.com/512/9281/9281778.png",
//             title: "DeFi Platform Development",
//             desc: "DEX, staking, yield farming, liquidity pools, lending & automated strategies.",
//           },
//           {
//             img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
//             title: "NFT Marketplace Solutions",
//             desc: "Create NFT platforms for art, gaming, collectibles, music & phygital assets.",
//           },
//           {
//             img: "https://cdn-icons-png.flaticon.com/512/7525/7525879.png",
//             title: "Blockchain Gaming (Web3 Games)",
//             desc: "Play-to-earn, metaverse worlds, Unity/Unreal game integration with blockchain.",
//           },
//           {
//             img: "https://cdn-icons-png.flaticon.com/512/13559/13559798.png",
//             title: "Custom Blockchain Development",
//             desc: "Private chains, permissioned networks, Layer 1/L2 chains, validator setup.",
//           },
//         ].map((item, i) => (
//           <FeatureCard key={i} img={item.img} title={item.title}>
//             {item.desc}
//           </FeatureCard>
//         ))}
//       </motion.div>
//     </div>
//   </section>
// );

// const Categories = () => (
//   <section className="py-24 bg-white">
//     <div className="max-w-screen-2xl mx-auto px-[5%]">
//       <motion.h2
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         className="text-2xl md:text-3xl text-center font-extrabold mb-14"
//       >
//         Web3 Development Categories
//       </motion.h2>

//       <motion.div
//         variants={staggerContainer}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
//       >
//         {[
//           {
//             img: "https://cdn-icons-png.flaticon.com/512/14251/14251687.png",
//             title: "Token Development",
//             items: [
//               "ERC-20, BEP-20, SPL Tokens",
//               "Tokenomics & Whitepaper",
//               "Deflationary & Utility Tokens",
//               "ICO / IDO Launchpad Solutions",
//             ],
//           },
//           {
//             img: "https://cdn-icons-png.flaticon.com/512/12990/12990952.png",
//             title: "Smart Contract Solutions",
//             items: [
//               "Smart Contract Development",
//               "Audits (Manual & Automated)",
//               "Gas Optimization",
//               "Testnet & Mainnet Deployment",
//             ],
//           },
//           {
//             img: "https://cdn-icons-png.flaticon.com/512/2991/2991148.png",
//             title: "Web3 Wallet Solutions",
//             items: [
//               "Crypto Wallet Apps",
//               "Multi-chain Wallet Integration",
//               "NFT & Token Storage",
//               "WalletConnect, Metamask Integration",
//             ],
//           },
//           {
//             img: "https://cdn-icons-png.flaticon.com/512/13556/13556724.png",
//             title: "Enterprise Blockchain",
//             items: [
//               "Hyperledger Fabric Development",
//               "Supply Chain Blockchain",
//               "Private Networks",
//               "Corporate Data Security Chains",
//             ],
//           },
//         ].map((category, idx) => (
//           <motion.div
//             key={idx}
//             variants={fadeUp}
//             whileHover={{
//               y: -5,
//               boxShadow:
//                 "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
//             }}
//             className="p-8 bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200 shadow-md hover:shadow-xl hover:border-blue-300 transition-all"
//           >
//             <Image
//               src={category.img}
//               alt={category.title}
//               className="mx-auto"
//               width="50"
//               height="50"
//             />
//             <h3 className="mt-4 text-xl font-semibold text-slate-800">
//               {category.title}
//             </h3>
//             <ul className="text-slate-600 text-sm mt-4 space-y-2">
//               {category.items.map((item, i) => (
//                 <li key={i} className="flex items-center gap-2">
//                   <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
//                   {item}
//                 </li>
//               ))}
//             </ul>
//           </motion.div>
//         ))}
//       </motion.div>
//     </div>
//   </section>
// );

// const UseCases = () => (
//   <section className="py-24 bg-gradient-to-b from-blue-50 to-blue-100">
//     <div className="max-w-screen-2xl mx-auto px-[5%] text-center">
//       <motion.h2
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         className="text-2xl md:text-3xl font-extrabold"
//       >
//         Blockchain Use Cases & Real-World Applications
//       </motion.h2>

//       <motion.div
//         variants={staggerContainer}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mt-16"
//       >
//         {[
//           {
//             img: "https://cdn-icons-png.flaticon.com/512/14251/14251684.png",
//             title: "DeFi Platforms",
//             desc: "DEX, staking, lending, liquidity farming & automated trading systems.",
//           },
//           {
//             img: "https://cdn-icons-png.flaticon.com/512/13559/13559808.png",
//             title: "Web3 Games",
//             desc: "P2E gaming, in-game NFTs, blockchain-powered rewards & metaverse items.",
//           },
//           {
//             img: "https://cdn-icons-png.flaticon.com/512/3063/3063553.png",
//             title: "Supply Chain",
//             desc: "Track & verify real-time product movement, logistics, and ownership.",
//           },
//           {
//             img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
//             title: "Digital Identity & KYC",
//             desc: "Decentralized identity systems ensuring privacy & secure verification.",
//           },
//         ].map((item, i) => (
//           <FeatureCard key={i} img={item.img} title={item.title}>
//             {item.desc}
//           </FeatureCard>
//         ))}
//       </motion.div>
//     </div>
//   </section>
// );

// const TechStack = () => (
//   <section className="py-24 bg-white">
//     <div className="max-w-screen-2xl mx-auto px-[5%] text-center">
//       <motion.h2
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         className="text-2xl md:text-3xl font-extrabold"
//       >
//         Blockchain Tech Stack
//       </motion.h2>

//       <motion.div
//         variants={staggerContainer}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 mt-16"
//       >
//         {[
//           {
//             src: "https://cdn.worldvectorlogo.com/logos/ethereum-eth.svg",
//             name: "Ethereum",
//           },
//           {
//             src: "https://cryptologos.cc/logos/polygon-matic-logo.png?v=040",
//             name: "Polygon",
//           },
//           {
//             src: "https://cryptologos.cc/logos/solana-sol-logo.png?v=040",
//             name: "Solana",
//           },
//           {
//             src: "https://vectorlogo.zone/logos/hyperledger/hyperledger-icon.svg",
//             name: "Hyperledger",
//           },
//           {
//             src: "https://cryptologos.cc/logos/bnb-bnb-logo.png?v=029",
//             name: "Binance Smart Chain",
//           },
//           {
//             src: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
//             name: "Rust, Solidity, Go",
//           },
//           {
//             src: "https://upload.wikimedia.org/wikipedia/commons/1/18/Ipfs-logo-1024-ice-text.png",
//             name: "IPFS / Filecoin",
//           },
//           {
//             src: "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/5/web3js-fkc6l6evntwzqrc1ac18.png/web3js-bqu5uc0cbrwxmkzlzt2ods.png?_a=DATAg1AAZAA0",
//             name: "Web3.js / Ethers.js",
//           },
//         ].map((t, i) => (
//           <motion.div
//             key={i}
//             variants={fadeUp}
//             whileHover={{
//               y: -5,
//               boxShadow:
//                 "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
//             }}
//             className="bg-white p-6 border border-slate-200 rounded-2xl flex flex-col items-center shadow-md hover:shadow-xl transition-all"
//           >
//             <Image
//               src={t.src}
//               alt={t.name}
//               width="60"
//               height="60"
//               className="max-h-14 object-contain"
//             />
//             <p className="mt-4 font-semibold text-slate-800">{t.name}</p>
//           </motion.div>
//         ))}
//       </motion.div>
//     </div>
//   </section>
// );

// const CTA = () => (
//   <section className="relative w-full py-16 sm:py-20 md:py-24 bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 overflow-hidden">
//     {/* Animated background shapes */}
//     <div className="absolute inset-0 -z-10">
//       <div className="absolute top-0 left-0 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl animate-pulse" />
//       <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl animate-pulse animation-delay-1000" />
//     </div>

//     <div className="max-w-screen-2xl mx-auto px-[5%] text-center relative z-10">
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.6 }}
//         className="max-w-2xl sm:max-w-3xl mx-auto mb-12"
//       >
//         <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
//           Ready to Grow Your Business?
//         </h2>
//         <p className="text-slate-700 mt-3 sm:mt-4 text-base sm:text-lg">
//           Speak with our experts today. We help brands scale with powerful
//           development, design, automation, and cloud solutions.
//         </p>
//       </motion.div>

//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ delay: 0.2 }}
//         className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-14 px-4"
//       >
//         <motion.button
//           // whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)" }}
//           whileTap={{ scale: 0.98 }}
//           className="bg-gradient-to-br from-amber-500 btn-amber to-amber-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:-translate-y-1 transition"
//         >
//           Get a Free Quote
//         </motion.button>

//         <motion.a
//           href="tel:+919766650411"
//           whileHover={{
//             scale: 1.05,
//             boxShadow: "0 10px 25px -5px rgba(22, 163, 74, 0.5)",
//           }}
//           whileTap={{ scale: 0.98 }}
//           className="w-full sm:w-auto px-6 sm:px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-amber-500 btn-amber to-amber-600 text-white shadow-lg"
//         >
//           Call Sales
//         </motion.a>
//       </motion.div>

//       <motion.div
//         variants={staggerContainer}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 px-2 sm:px-0"
//       >
//         {[
//           {
//             icon: (
//               <>
//                 <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.09 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.63 2.63a2 2 0 0 1-.45 2.11L8.1 9.91a16 16 0 0 0 6 6l1.45-1.14a2 2 0 0 1 2.11-.45c.85.3 1.73.51 2.63.63A2 2 0 0 1 22 16.92z" />
//               </>
//             ),
//             title: "Phone Number",
//             value: "+91 97666 50411",
//           },
//           {
//             icon: (
//               <>
//                 <rect x="2" y="4" width="20" height="16" rx="2" />
//                 <path d="m22 6-10 7L2 6" />
//               </>
//             ),
//             title: "Email Address",
//             value: "info@albostechnologies.com",
//           },
//           {
//             icon: (
//               <>
//                 <path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0 1 18 0z" />
//                 <circle cx="12" cy="10" r="3" />
//               </>
//             ),
//             title: "Office Location",
//             value:
//               "Office no. 78, 5th floor, Kunal Plaza, Pune, Maharashtra 411019",
//           },
//           {
//             icon: (
//               <>
//                 <circle cx="12" cy="12" r="10" />
//                 <path d="M12 6v6l4 2" />
//               </>
//             ),
//             title: "Office Hours",
//             value: "Mon – Sat, 10:00 AM – 7:00 PM",
//           },
//         ].map((item, i) => (
//           <motion.div
//             key={i}
//             variants={fadeUp}
//             whileHover={{
//               y: -5,
//               boxShadow:
//                 "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
//             }}
//             className="p-6 bg-white/90 backdrop-blur-sm rounded-2xl border border-slate-200 shadow-md hover:shadow-xl hover:border-blue-300 text-center"
//           >
//             <div className="mx-auto w-12 h-12 flex items-center justify-center bg-blue-100 rounded-xl">
//               <svg
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 className="text-blue-600"
//               >
//                 {item.icon}
//               </svg>
//             </div>
//             <h3 className="text-lg sm:text-xl font-semibold mt-4 text-slate-800">
//               {item.title}
//             </h3>
//             <p className="text-slate-600 mt-2 text-sm">{item.value}</p>
//           </motion.div>
//         ))}
//       </motion.div>
//     </div>
//   </section>
// );

// export default function BlockchainAndWeb3() {
//   return (
//     <div className="antialiased text-slate-900 overflow-x-hidden">
//       <main>
//         <Hero />
//         <WhyChoose />
//         <ServicesGrid />
//         <Categories />
//         <UseCases />
//         <TechStack />
//         <CTA />
//       </main>
//     </div>
//   );
// }

"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  AnimatePresence,
} from "framer-motion";

/* ─────────────────── ANIMATION VARIANTS (unchanged) ─────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};
const cardHover = {
  rest: {
    scale: 1,
    boxShadow:
      "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
  },
  hover: {
    scale: 1.02,
    boxShadow:
      "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
    borderColor: "#3b82f6",
    transition: { duration: 0.2 },
  },
};

/* ─────────────────── BLOCKCHAIN HERO CANVAS ─────────────────── */
function BlockchainCanvas() {
  const canvasRef = useRef(null);
  const animRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let W, H;

    // Blockchain nodes
    const chains = [
      { label: "Ethereum", icon: "⟠", col: "#627eea" },
      { label: "Solana", icon: "◎", col: "#9945ff" },
      { label: "Polygon", icon: "⬡", col: "#8247e5" },
      { label: "BNB", icon: "◈", col: "#f3ba2f" },
      { label: "Avalanche", icon: "△", col: "#e84142" },
      { label: "IPFS", icon: "⊕", col: "#65c2cb" },
    ];

    // Hash-looking floating text particles
    const hashParticles = Array.from({ length: 18 }, () => ({
      x: Math.random() * 600,
      y: Math.random() * 500,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      text: "0x" + Math.random().toString(16).slice(2, 8).toUpperCase(),
      alpha: 0.08 + Math.random() * 0.12,
      size: 9 + Math.random() * 5,
      phase: Math.random() * Math.PI * 2,
    }));

    // Data packets flowing along edges
    const packets = [];
    let nodePositions = [];
    let t = 0;
    let spawnT = 0;

    function resize() {
      const rect = canvas.parentElement.getBoundingClientRect();
      W = canvas.width = rect.width || 520;
      H = canvas.height = rect.height || 460;
      const cx = W / 2,
        cy = H / 2;
      const r = Math.min(W, H) * 0.31;
      nodePositions = chains.map((_, i) => {
        const a = (i / chains.length) * Math.PI * 2 - Math.PI / 2;
        return { x: cx + Math.cos(a) * r, y: cy + Math.sin(a) * r };
      });
      hashParticles.forEach((p) => {
        p.x = Math.random() * W;
        p.y = Math.random() * H;
      });
    }

    function spawnPacket() {
      const a = Math.floor(Math.random() * chains.length);
      const b =
        (a + 1 + Math.floor(Math.random() * (chains.length - 1))) %
        chains.length;
      packets.push({
        from: a,
        to: b,
        p: 0,
        speed: 0.007 + Math.random() * 0.009,
        col: chains[a].col,
      });
    }

    function hexPath(ctx, x, y, r) {
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const a = (i / 6) * Math.PI * 2 - Math.PI / 6;
        i === 0
          ? ctx.moveTo(x + Math.cos(a) * r, y + Math.sin(a) * r)
          : ctx.lineTo(x + Math.cos(a) * r, y + Math.sin(a) * r);
      }
      ctx.closePath();
    }

    function draw() {
      t += 0.014;
      spawnT++;
      if (spawnT % 35 === 0) spawnPacket();

      ctx.clearRect(0, 0, W, H);

      // Background
      const bg = ctx.createLinearGradient(0, 0, W, H);
      bg.addColorStop(0, "#f0f7ff");
      bg.addColorStop(1, "#e8f4fd");
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, W, H);

      // Subtle hex grid bg
      ctx.save();
      ctx.strokeStyle = "#bfdbfe22";
      ctx.lineWidth = 0.7;
      const gs = 42;
      for (let gx = 0; gx < W + gs; gx += gs * 1.5) {
        for (let gy = 0; gy < H + gs; gy += gs * Math.sqrt(3)) {
          hexPath(ctx, gx, gy, gs * 0.46);
          ctx.stroke();
          hexPath(ctx, gx + gs * 0.75, gy + (gs * Math.sqrt(3)) / 2, gs * 0.46);
          ctx.stroke();
        }
      }
      ctx.restore();

      // Floating hash text
      hashParticles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -80) p.x = W + 80;
        if (p.x > W + 80) p.x = -80;
        if (p.y < -30) p.y = H + 30;
        if (p.y > H + 30) p.y = -30;
        ctx.save();
        ctx.globalAlpha = p.alpha * (0.7 + 0.3 * Math.sin(t * 0.9 + p.phase));
        ctx.font = `${p.size}px 'Courier New', monospace`;
        ctx.fillStyle = "#1d4ed8";
        ctx.fillText(p.text, p.x, p.y);
        ctx.restore();
      });

      const cx = W / 2,
        cy = H / 2;

      // Center glow
      const hubG = ctx.createRadialGradient(cx, cy, 0, cx, cy, 70);
      hubG.addColorStop(0, "#3b82f622");
      hubG.addColorStop(1, "transparent");
      ctx.fillStyle = hubG;
      ctx.beginPath();
      ctx.arc(cx, cy, 70, 0, Math.PI * 2);
      ctx.fill();

      // Pulse rings
      for (let i = 0; i < 3; i++) {
        const prog = (t * 0.32 + i * 0.33) % 1;
        ctx.save();
        ctx.globalAlpha = (1 - prog) * 0.1;
        ctx.strokeStyle = "#3b82f6";
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(cx, cy, prog * 85, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
      }

      // Edges between nodes (blockchain links)
      for (let i = 0; i < nodePositions.length; i++) {
        for (let j = i + 1; j < nodePositions.length; j++) {
          const a = nodePositions[i],
            b = nodePositions[j];
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < W * 0.55) {
            ctx.save();
            ctx.strokeStyle = chains[i].col + "28";
            ctx.lineWidth = 1;
            ctx.setLineDash([3, 7]);
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
            ctx.restore();
          }
        }
      }
      // Hub spokes
      nodePositions.forEach((pos, i) => {
        ctx.save();
        ctx.strokeStyle = chains[i].col + "35";
        ctx.lineWidth = 1.2;
        ctx.setLineDash([4, 5]);
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(pos.x, pos.y);
        ctx.stroke();
        ctx.restore();
      });

      // Packets
      for (let i = packets.length - 1; i >= 0; i--) {
        const pk = packets[i];
        pk.p += pk.speed;
        if (pk.p >= 1) {
          packets.splice(i, 1);
          continue;
        }
        const fp = nodePositions[pk.from],
          tp = nodePositions[pk.to];
        if (!fp || !tp) continue;
        const px = fp.x + (tp.x - fp.x) * pk.p;
        const py = fp.y + (tp.y - fp.y) * pk.p;
        const fade = 1 - Math.abs(pk.p - 0.5) * 1.8;
        ctx.save();
        ctx.globalAlpha = Math.max(0, fade) * 0.9;
        const grd = ctx.createRadialGradient(px, py, 0, px, py, 6);
        grd.addColorStop(0, pk.col);
        grd.addColorStop(1, pk.col + "00");
        ctx.fillStyle = grd;
        ctx.beginPath();
        ctx.arc(px, py, 6, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // Node hexagons
      nodePositions.forEach((pos, i) => {
        const bob = Math.sin(t * 0.65 + i * 1.05) * 3.5;
        const nd = chains[i];
        ctx.save();
        ctx.translate(pos.x, pos.y + bob);

        // Shadow
        ctx.shadowColor = nd.col + "50";
        ctx.shadowBlur = 16;

        // Hex bg
        hexPath(ctx, 0, 0, 30);
        ctx.fillStyle = "#fff";
        ctx.fill();
        ctx.strokeStyle = nd.col + "80";
        ctx.lineWidth = 1.8;
        ctx.stroke();
        ctx.shadowBlur = 0;

        // Color accent ring
        hexPath(ctx, 0, 0, 30);
        ctx.strokeStyle = nd.col;
        ctx.lineWidth = 2.5;
        ctx.globalAlpha = 0.35 + 0.2 * Math.sin(t * 0.9 + i);
        ctx.stroke();
        ctx.globalAlpha = 1;

        // Icon
        ctx.font = "14px serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(nd.icon, 0, -4);

        // Label
        ctx.font = "bold 7px 'DM Sans',sans-serif";
        ctx.fillStyle = "#374151";
        ctx.fillText(nd.label, 0, 18);

        ctx.restore();
      });

      // Center hub — blockchain core
      ctx.save();
      ctx.shadowColor = "#3b82f650";
      ctx.shadowBlur = 20;
      hexPath(ctx, cx, cy, 34);
      ctx.fillStyle = "#1d4ed8";
      ctx.fill();
      ctx.shadowBlur = 0;
      ctx.font = "20px serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("⛓️", cx, cy);
      ctx.font = "bold 8px 'DM Sans',sans-serif";
      ctx.fillStyle = "#1d4ed8";
      ctx.fillText("Web3 Core", cx, cy + 46);
      ctx.restore();

      animRef.current = requestAnimationFrame(draw);
    }

    resize();
    draw();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: "100%", height: "100%", display: "block" }}
    />
  );
}

/* ─────────────────── UNCHANGED FeatureCard ─────────────────── */
const FeatureCard = ({ img, title, children }) => (
  <motion.div
    variants={cardHover}
    initial="rest"
    whileHover="hover"
    className="bg-white/80 backdrop-blur-sm flex flex-col gap-6 p-8 rounded-2xl border border-slate-200 shadow-md hover:shadow-xl hover:border-blue-300 transition-all"
  >
    <div className="flex flex-col items-center">
      <Image
        src={img}
        alt={title}
        width="60"
        height="60"
        className="object-contain"
      />
      <div className="mt-4 text-xl font-bold text-center bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
        {title}
      </div>
    </div>
    <div className="px-2">
      <p className="text-slate-600 text-center mt-2">{children}</p>
    </div>
  </motion.div>
);

/* ─────────────────── TICKER ─────────────────── */
const tickerItems = [
  "Smart Contracts",
  "DApp Development",
  "DeFi Protocols",
  "NFT Platforms",
  "Web3 Gaming",
  "Token Launchpad",
  "DAO Governance",
  "Cross-chain Bridges",
  "ZK Proofs",
  "Layer 2 Solutions",
];

function Ticker() {
  return (
    <div
      style={{
        borderTop: "1px solid #e2e8f0",
        borderBottom: "1px solid #e2e8f0",
        padding: "13px 0",
        background: "#fff",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "max-content",
          animation: "marquee 26s linear infinite",
        }}
      >
        {[...tickerItems, ...tickerItems].map((t, i) => (
          <span
            key={i}
            style={{
              padding: "0 28px",
              fontSize: "0.78rem",
              fontWeight: 600,
              color: "#334155",
              whiteSpace: "nowrap",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            {t} <span style={{ color: "#3b82f6", margin: "0 6px" }}>◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────── PROCESS SECTION (new) ─────────────────── */
function ProcessSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-70px" });
  const steps = [
    {
      step: "01",
      icon: "🔍",
      title: "Discovery & Scoping",
      desc: "We audit your requirements, define smart contract logic, tokenomics and technical architecture.",
    },
    {
      step: "02",
      icon: "🏗️",
      title: "Architecture & Design",
      desc: "Network selection, contract ABI design, wallet flows and security threat modelling.",
    },
    {
      step: "03",
      icon: "⚙️",
      title: "Development & Audit",
      desc: "Agile sprints, testnet deployments, automated tests and third-party security audits.",
    },
    {
      step: "04",
      icon: "🚀",
      title: "Mainnet Launch & Support",
      desc: "Gas-optimized mainnet deployment, liquidity setup and 24/7 monitoring & LiveOps.",
    },
  ];
  return (
    <section className="py-24 bg-white">
      <div className="max-w-screen-2xl mx-auto px-[5%]">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 10,
            }}
          >
            <div
              style={{
                width: 24,
                height: 2,
                background: "#1d4ed8",
                borderRadius: 2,
              }}
            />
            <span
              style={{
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#1d4ed8",
              }}
            >
              How we work
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-12">
            Our Web3 Delivery Process
          </h2>
        </motion.div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 0,
          }}
        >
          {steps.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              style={{
                padding: "28px 24px",
                background: i % 2 === 0 ? "#f8fafc" : "#fff",
                border: "1px solid #e2e8f0",
                borderRadius:
                  i === 0
                    ? "16px 0 0 16px"
                    : i === steps.length - 1
                      ? "0 16px 16px 0"
                      : 0,
                marginRight: i < steps.length - 1 ? -1 : 0,
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  background: "linear-gradient(135deg,#dbeafe,#bfdbfe)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 800,
                  color: "#1d4ed8",
                  fontSize: "0.82rem",
                  marginBottom: 12,
                }}
              >
                {p.step}
              </div>
              <div style={{ fontSize: "1.5rem", marginBottom: 8 }}>
                {p.icon}
              </div>
              <h4
                style={{
                  fontWeight: 700,
                  fontSize: "0.93rem",
                  marginBottom: 7,
                }}
              >
                {p.title}
              </h4>
              <p
                style={{
                  fontSize: "0.82rem",
                  color: "#64748b",
                  lineHeight: 1.65,
                }}
              >
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────── STATS BAR (new) ─────────────────── */
function StatsBar() {
  const stats = [
    { num: "120+", label: "Web3 Projects" },
    { num: "40+", label: "Smart Contracts Audited" },
    { num: "$2B+", label: "TVL Secured" },
    { num: "15+", label: "Blockchains Supported" },
    { num: "99.9%", label: "Contract Uptime" },
  ];
  return (
    <section
      className="bg-white"
      style={{
        borderTop: "1px solid #e2e8f0",
        borderBottom: "1px solid #e2e8f0",
      }}
    >
      <div className="max-w-screen-2xl mx-auto px-[5%]">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))",
            borderLeft: "1px solid #e2e8f0",
          }}
        >
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              style={{
                borderRight: "1px solid #e2e8f0",
                borderTop: "1px solid #e2e8f0",
                borderBottom: "1px solid #e2e8f0",
                padding: "28px 16px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "2rem",
                  fontWeight: 800,
                  color: "#1d4ed8",
                  lineHeight: 1,
                }}
              >
                {s.num}
              </div>
              <div
                style={{
                  fontSize: "0.75rem",
                  color: "#64748b",
                  marginTop: 6,
                  fontWeight: 500,
                }}
              >
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────── TESTIMONIALS (new) ─────────────────── */
function Testimonials() {
  const reviews = [
    {
      name: "Alex Kovacs",
      role: "CTO, DeFi Nexus",
      text: "They audited and deployed our staking contracts with zero vulnerabilities. TVL crossed $50M in the first week.",
      avatar: "https://i.pravatar.cc/80?img=15",
    },
    {
      name: "Mei Lin",
      role: "Founder, NFT Studio",
      text: "Our marketplace went live on Ethereum + Polygon in 5 weeks. Gas optimizations saved our users thousands.",
      avatar: "https://i.pravatar.cc/80?img=44",
    },
    {
      name: "Rahul Desai",
      role: "CEO, ChainTrust",
      text: "The Hyperledger supply chain solution eliminated fraud in our logistics network. Exceptional team.",
      avatar: "https://i.pravatar.cc/80?img=68",
    },
  ];
  return (
    <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-screen-2xl mx-auto px-[5%]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 10,
            }}
          >
            <div
              style={{
                width: 24,
                height: 2,
                background: "#1d4ed8",
                borderRadius: 2,
              }}
            />
            <span
              style={{
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#1d4ed8",
              }}
            >
              Client Stories
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-12">
            Trusted by Web3 pioneers worldwide
          </h2>
        </motion.div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{
                y: -5,
                boxShadow: "0 20px 40px -10px rgba(29,78,216,0.1)",
              }}
              className="bg-white p-7 rounded-2xl border border-slate-200 shadow-md hover:border-blue-300 transition-all"
            >
              <div style={{ display: "flex", gap: 3, marginBottom: 14 }}>
                {"★★★★★".split("").map((s, j) => (
                  <span
                    key={j}
                    style={{ color: "#f59e0b", fontSize: "0.9rem" }}
                  >
                    {s}
                  </span>
                ))}
              </div>
              <p className="text-slate-600 text-sm leading-relaxed italic mb-5">
                "{r.text}"
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <img
                  src={r.avatar}
                  alt={r.name}
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: "2px solid #bfdbfe",
                  }}
                />
                <div>
                  <div style={{ fontWeight: 700, fontSize: "0.85rem" }}>
                    {r.name}
                  </div>
                  <div style={{ color: "#94a3b8", fontSize: "0.72rem" }}>
                    {r.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────── HERO (canvas replaces image) ─────────────────── */
const Hero = () => (
  <section className="relative w-full pt-20 pb-20 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white">
    <style>{`
      @keyframes marquee { from{transform:translateX(0)} to{transform:translateX(-50%)} }
    `}</style>
    <div className="absolute inset-0 -z-10">
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-20 right-10 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "2s" }}
      />
    </div>

    <div className="relative z-10 max-w-screen-2xl mx-auto px-[5%]">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-14">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 text-center md:text-left"
        >
          {/* Badges */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 8,
              marginBottom: 22,
              justifyContent: "flex-start",
            }}
          >
            {[
              { label: "Multi-chain", dot: "#3b82f6" },
              { label: "Audited Contracts", dot: "#22c55e" },
              { label: "Enterprise Ready", dot: "#f59e0b" },
            ].map((b, i) => (
              <span
                key={i}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 7,
                  padding: "5px 14px",
                  borderRadius: 999,
                  border: "1px solid #e2e8f0",
                  background: "#fff",
                  fontSize: "0.78rem",
                  fontWeight: 500,
                }}
              >
                <span
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    background: b.dot,
                    display: "inline-block",
                    boxShadow: `0 0 0 3px ${b.dot}30`,
                  }}
                />
                {b.label}
              </span>
            ))}
          </motion.div>

          <h1 className="text-3xl sm:text-4xl md:text-[2.6rem] lg:text-[3rem] font-bold leading-tight">
            Blockchain & Web3 Software
          </h1>
          <h1 className="text-3xl sm:text-4xl md:text-[2.6rem] lg:text-[3rem] font-bold leading-tight mb-4 bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">
            Development Services
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-xl mx-auto md:mx-0 leading-relaxed text-slate-600">
            We build secure, scalable and enterprise-grade Web3 applications —
            Smart Contracts, DApps, NFT Platforms, DeFi Systems, Web3 Games and
            custom blockchain networks.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center md:justify-start">
            <motion.button
              whileTap={{ scale: 0.98 }}
              whileHover={{
                y: -2,
                boxShadow: "0 10px 24px rgba(245,158,11,0.4)",
              }}
              className="bg-gradient-to-br from-amber-500 to-amber-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition inline-flex items-center gap-2"
            >
              Get a Free Quote
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </motion.button>
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(0,0,0,0.3)",
              }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-slate-900 text-white font-medium text-base sm:text-lg shadow-lg"
            >
              View Our Work
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="2" y="6" width="14" height="12" rx="2" />
                <path d="m16 13 5.223 3.482" />
              </svg>
            </motion.button>
          </div>

          {/* Quick stats */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8 grid grid-cols-3 gap-3"
          >
            {[
              { v: "120+", l: "Projects" },
              { v: "$2B+", l: "TVL Secured" },
              { v: "15+", l: "Chains" },
            ].map((s, i) => (
              <div key={i} className="bg-blue-50 rounded-xl p-3 text-center">
                <div
                  className="font-extrabold text-blue-700 text-lg"
                  style={{ fontFamily: "Georgia,serif" }}
                >
                  {s.v}
                </div>
                <div className="text-xs text-slate-500 mt-1">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* ── Animated Canvas replaces static image ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.85, delay: 0.2 }}
          className="flex-1 w-full"
          style={{
            maxWidth: 520,
            minHeight: 420,
            borderRadius: 24,
            overflow: "hidden",
            boxShadow: "0 28px 64px rgba(29,78,216,0.12)",
            border: "1px solid #bfdbfe",
          }}
        >
          <BlockchainCanvas />
        </motion.div>
      </div>
    </div>
  </section>
);

/* ─────────────────── UNCHANGED SECTIONS ─────────────────── */
const WhyChoose = () => (
  <section className="py-24 bg-white">
    <div className="px-[5%]">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-2xl md:text-3xl font-extrabold"
      >
        Why Choose Our Blockchain Team?
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-lg md:text-xl text-slate-600 mt-4 mx-auto"
      >
        An elite Web3 engineering team delivering next-generation blockchain
        solutions for startups, enterprises, and global brands.
      </motion.p>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-16"
      >
        {[
          {
            img: "https://cdn-icons-png.flaticon.com/512/706/706164.png",
            title: "Expert Blockchain Engineers",
            desc: "Skilled Web3 architects delivering secure, scalable blockchain ecosystems.",
          },
          {
            img: "https://cdn-icons-png.flaticon.com/512/3064/3064197.png",
            title: "Enterprise Security Standards",
            desc: "Pen-tested smart contracts, audited networks & enterprise-grade protocols.",
          },
          {
            img: "https://cdn-icons-png.flaticon.com/512/1006/1006771.png",
            title: "Multi-Chain Expertise",
            desc: "Ethereum, Solana, Polygon, BNB Chain, Avalanche, Hyperledger & more.",
          },
          {
            img: "https://cdn-icons-png.flaticon.com/512/6472/6472187.png",
            title: "Real-World Use Cases",
            desc: "Web3 products for DeFi, gaming, supply chain, finance & enterprise.",
          },
        ].map((item, i) => (
          <FeatureCard key={i} img={item.img} title={item.title}>
            {item.desc}
          </FeatureCard>
        ))}
      </motion.div>
    </div>
  </section>
);

const ServicesGrid = () => (
  <section className="py-24 bg-gradient-to-b from-slate-50 to-blue-50">
    <div className="px-[5%]">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-2xl md:text-3xl font-extrabold"
      >
        Blockchain & Web3 Services
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-lg md:text-xl text-slate-600 mt-4 mx-auto w-full"
      >
        End-to-end blockchain development — from idea to enterprise deployment.
      </motion.p>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-16"
      >
        {[
          {
            img: "https://cdn-icons-png.flaticon.com/512/1006/1006771.png",
            title: "DApp Development",
            desc: "Decentralized applications with secure authentication, wallet integration & scalable backend.",
          },
          {
            img: "https://cdn-icons-png.flaticon.com/512/6229/6229280.png",
            title: "Smart Contract Development",
            desc: "Audited, gas-optimized smart contracts for tokens, NFTs, DAOs & DeFi protocols.",
          },
          {
            img: "https://cdn-icons-png.flaticon.com/512/9281/9281778.png",
            title: "DeFi Platform Development",
            desc: "DEX, staking, yield farming, liquidity pools, lending & automated strategies.",
          },
          {
            img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
            title: "NFT Marketplace Solutions",
            desc: "Create NFT platforms for art, gaming, collectibles, music & phygital assets.",
          },
          {
            img: "https://cdn-icons-png.flaticon.com/512/7525/7525879.png",
            title: "Blockchain Gaming (Web3 Games)",
            desc: "Play-to-earn, metaverse worlds, Unity/Unreal game integration with blockchain.",
          },
          {
            img: "https://cdn-icons-png.flaticon.com/512/13559/13559798.png",
            title: "Custom Blockchain Development",
            desc: "Private chains, permissioned networks, Layer 1/L2 chains, validator setup.",
          },
        ].map((item, i) => (
          <FeatureCard key={i} img={item.img} title={item.title}>
            {item.desc}
          </FeatureCard>
        ))}
      </motion.div>
    </div>
  </section>
);

const Categories = () => (
  <section className="py-24 bg-white">
    <div className="max-w-screen-2xl mx-auto px-[5%]">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-2xl md:text-3xl text-center font-extrabold mb-14"
      >
        Web3 Development Categories
      </motion.h2>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
      >
        {[
          {
            img: "https://cdn-icons-png.flaticon.com/512/14251/14251687.png",
            title: "Token Development",
            items: [
              "ERC-20, BEP-20, SPL Tokens",
              "Tokenomics & Whitepaper",
              "Deflationary & Utility Tokens",
              "ICO / IDO Launchpad Solutions",
            ],
          },
          {
            img: "https://cdn-icons-png.flaticon.com/512/12990/12990952.png",
            title: "Smart Contract Solutions",
            items: [
              "Smart Contract Development",
              "Audits (Manual & Automated)",
              "Gas Optimization",
              "Testnet & Mainnet Deployment",
            ],
          },
          {
            img: "https://cdn-icons-png.flaticon.com/512/2991/2991148.png",
            title: "Web3 Wallet Solutions",
            items: [
              "Crypto Wallet Apps",
              "Multi-chain Wallet Integration",
              "NFT & Token Storage",
              "WalletConnect, Metamask Integration",
            ],
          },
          {
            img: "https://cdn-icons-png.flaticon.com/512/13556/13556724.png",
            title: "Enterprise Blockchain",
            items: [
              "Hyperledger Fabric Development",
              "Supply Chain Blockchain",
              "Private Networks",
              "Corporate Data Security Chains",
            ],
          },
        ].map((category, idx) => (
          <motion.div
            key={idx}
            variants={fadeUp}
            whileHover={{
              y: -5,
              boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)",
            }}
            className="p-8 bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200 shadow-md hover:shadow-xl hover:border-blue-300 transition-all"
          >
            <Image
              src={category.img}
              alt={category.title}
              className="mx-auto"
              width="50"
              height="50"
            />
            <h3 className="mt-4 text-xl font-semibold text-slate-800">
              {category.title}
            </h3>
            <ul className="text-slate-600 text-sm mt-4 space-y-2">
              {category.items.map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

const UseCases = () => (
  <section className="py-24 bg-gradient-to-b from-blue-50 to-blue-100">
    <div className="max-w-screen-2xl mx-auto px-[5%] text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-2xl md:text-3xl font-extrabold"
      >
        Blockchain Use Cases & Real-World Applications
      </motion.h2>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mt-16"
      >
        {[
          {
            img: "https://cdn-icons-png.flaticon.com/512/14251/14251684.png",
            title: "DeFi Platforms",
            desc: "DEX, staking, lending, liquidity farming & automated trading systems.",
          },
          {
            img: "https://cdn-icons-png.flaticon.com/512/13559/13559808.png",
            title: "Web3 Games",
            desc: "P2E gaming, in-game NFTs, blockchain-powered rewards & metaverse items.",
          },
          {
            img: "https://cdn-icons-png.flaticon.com/512/3063/3063553.png",
            title: "Supply Chain",
            desc: "Track & verify real-time product movement, logistics, and ownership.",
          },
          {
            img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
            title: "Digital Identity & KYC",
            desc: "Decentralized identity systems ensuring privacy & secure verification.",
          },
        ].map((item, i) => (
          <FeatureCard key={i} img={item.img} title={item.title}>
            {item.desc}
          </FeatureCard>
        ))}
      </motion.div>
    </div>
  </section>
);

const TechStack = () => (
  <section className="py-24 bg-white">
    <div className="max-w-screen-2xl mx-auto px-[5%] text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-2xl md:text-3xl font-extrabold"
      >
        Blockchain Tech Stack
      </motion.h2>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 mt-16"
      >
        {[
          {
            src: "https://cdn.worldvectorlogo.com/logos/ethereum-eth.svg",
            name: "Ethereum",
          },
          {
            src: "https://cryptologos.cc/logos/polygon-matic-logo.png?v=040",
            name: "Polygon",
          },
          {
            src: "https://cryptologos.cc/logos/solana-sol-logo.png?v=040",
            name: "Solana",
          },
          {
            src: "https://vectorlogo.zone/logos/hyperledger/hyperledger-icon.svg",
            name: "Hyperledger",
          },
          {
            src: "https://cryptologos.cc/logos/bnb-bnb-logo.png?v=029",
            name: "Binance Smart Chain",
          },
          {
            src: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
            name: "Rust, Solidity, Go",
          },
          {
            src: "https://upload.wikimedia.org/wikipedia/commons/1/18/Ipfs-logo-1024-ice-text.png",
            name: "IPFS / Filecoin",
          },
          {
            src: "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/5/web3js-fkc6l6evntwzqrc1ac18.png/web3js-bqu5uc0cbrwxmkzlzt2ods.png?_a=DATAg1AAZAA0",
            name: "Web3.js / Ethers.js",
          },
        ].map((t, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            whileHover={{
              y: -5,
              boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)",
            }}
            className="bg-white p-6 border border-slate-200 rounded-2xl flex flex-col items-center shadow-md hover:shadow-xl transition-all"
          >
            <Image
              src={t.src}
              alt={t.name}
              width="60"
              height="60"
              className="max-h-14 object-contain"
            />
            <p className="mt-4 font-semibold text-slate-800">{t.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

const CTA = () => (
  <section className="relative w-full py-16 sm:py-20 md:py-24 bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 overflow-hidden">
    <div className="absolute inset-0 -z-10">
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />
    </div>
    <div className="max-w-screen-2xl mx-auto px-[5%] text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl sm:max-w-3xl mx-auto mb-12"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
          Ready to Build on Web3?
        </h2>
        <p className="text-slate-700 mt-3 sm:mt-4 text-base sm:text-lg">
          Speak with our blockchain experts today. We help brands build secure,
          scalable and audited Web3 products that ship fast.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-14 px-4"
      >
        <motion.button
          whileTap={{ scale: 0.98 }}
          whileHover={{ y: -2, boxShadow: "0 10px 25px rgba(245,158,11,0.4)" }}
          className="bg-gradient-to-br from-amber-500 to-amber-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition"
        >
          Get a Free Quote
        </motion.button>
        <motion.a
          href="tel:+919766650411"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="w-full sm:w-auto px-6 sm:px-8 py-4 rounded-xl font-semibold bg-slate-900 text-white shadow-lg inline-flex items-center justify-center gap-2"
        >
          📞 Call Sales
        </motion.a>
      </motion.div>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 px-2 sm:px-0"
      >
        {[
          {
            icon: (
              <>
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.09 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.63 2.63a2 2 0 0 1-.45 2.11L8.1 9.91a16 16 0 0 0 6 6l1.45-1.14a2 2 0 0 1 2.11-.45c.85.3 1.73.51 2.63.63A2 2 0 0 1 22 16.92z" />
              </>
            ),
            title: "Phone Number",
            value: "+91 97666 50411",
          },
          {
            icon: (
              <>
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 6-10 7L2 6" />
              </>
            ),
            title: "Email Address",
            value: "info@albostechnologies.com",
          },
          {
            icon: (
              <>
                <path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </>
            ),
            title: "Office Location",
            value:
              "Office no. 78, 5th floor, Kunal Plaza, Pune, Maharashtra 411019",
          },
          {
            icon: (
              <>
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </>
            ),
            title: "Office Hours",
            value: "Mon – Sat, 10:00 AM – 7:00 PM",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            whileHover={{
              y: -5,
              boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)",
            }}
            className="p-6 bg-white/90 backdrop-blur-sm rounded-2xl border border-slate-200 shadow-md hover:shadow-xl hover:border-blue-300 text-center"
          >
            <div className="mx-auto w-12 h-12 flex items-center justify-center bg-blue-100 rounded-xl">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-blue-600"
              >
                {item.icon}
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mt-4 text-slate-800">
              {item.title}
            </h3>
            <p className="text-slate-600 mt-2 text-sm">{item.value}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

/* ─────────────────── PAGE ASSEMBLY ─────────────────── */
export default function BlockchainAndWeb3() {
  return (
    <div className="antialiased text-slate-900 overflow-x-hidden">
      <main>
        <Hero />
        <Ticker />
        <StatsBar />
        <WhyChoose />
        <ProcessSection />
        <ServicesGrid />
        <Categories />
        <UseCases />
        <Testimonials />
        <TechStack />
        <CTA />
      </main>
    </div>
  );
}
