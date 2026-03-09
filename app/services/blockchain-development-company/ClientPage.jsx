"use client";
import Image from "next/image";
// src/pages/BlockchainAndWeb3.jsx
import React from "react";
import { motion } from "framer-motion";

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
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

const Hero = () => (
  <section className="relative w-full pt-40 pb-20 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white">
    {/* Animated background elements */}
    <div className="absolute inset-0 -z-10">
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl animate-pulse animation-delay-2000" />
    </div>

    <div className="relative z-10 max-w-screen-2xl mx-auto px-[5%]">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-14">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 text-center md:text-left"
        >
          <h1 className="text-3xl sm:text-4xl md:text-[2.6rem] lg:text-[3rem] font-bold leading-tight">
            Blockchain & Web3 Software
          </h1>
          <h1 className="text-3xl sm:text-4xl md:text-[2.6rem] lg:text-[3rem] font-bold leading-tight mb-4 bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">
            Development Services
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-xl mx-auto md:mx-0 leading-relaxed text-slate-600">
            We build secure, scalable and enterprise-grade Web3
            applications—Smart Contracts, DApps, NFT Platforms, DeFi Systems,
            Web3 Games and custom blockchain networks.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center md:justify-start">
            <motion.button
              // whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)" }}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-br from-amber-500 btn-amber to-amber-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:-translate-y-1 transition"
            >
              Get a Free Quote
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M13 2a9 9 0 0 1 9 9" />
                <path d="M13 6a5 5 0 0 1 5 5" />
                <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465" />
              </svg>
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)",
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 flex justify-center w-full max-w-[520px] overflow-hidden"
        >
          {/* <Image src="/blockchain.jpg"
            alt="Blockchain development"
            width="520"
            height="520"
            className="object-contain drop-shadow-2xl scale-95 sm:scale-100"
            loading="lazy"
          /> */}
          <Image
            src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2232&auto=format&fit=crop"
            alt="Blockchain technology visualization"
            width="520"
            height="520"
            className="object-contain drop-shadow-2xl scale-95 sm:scale-100"
            loading="lazy"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

// Enhanced FeatureCard with motion and hover
const FeatureCard = ({ img, title, children, index }) => (
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

const WhyChoose = () => (
  <section className="py-24 bg-white">
    <div className=" px-[5%] ">
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
        className="text-lg md:text-xl text-slate-600 mt-4  mx-auto"
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
    <div className=" px-[5%] ">
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
        End-to-end blockchain development—from idea to enterprise deployment.
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
              boxShadow:
                "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
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
              boxShadow:
                "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
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
    {/* Animated background shapes */}
    <div className="absolute inset-0 -z-10">
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl animate-pulse animation-delay-1000" />
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
          Ready to Grow Your Business?
        </h2>
        <p className="text-slate-700 mt-3 sm:mt-4 text-base sm:text-lg">
          Speak with our experts today. We help brands scale with powerful
          development, design, automation, and cloud solutions.
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
          // whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)" }}
          whileTap={{ scale: 0.98 }}
          className="bg-gradient-to-br from-amber-500 btn-amber to-amber-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:-translate-y-1 transition"
        >
          Get a Free Quote
        </motion.button>

        <motion.a
          href="tel:+919766650411"
          whileHover={{
            scale: 1.05,
            boxShadow: "0 10px 25px -5px rgba(22, 163, 74, 0.5)",
          }}
          whileTap={{ scale: 0.98 }}
          className="w-full sm:w-auto px-6 sm:px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-amber-500 btn-amber to-amber-600 text-white shadow-lg"
        >
          Call Sales
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
              boxShadow:
                "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
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

export default function BlockchainAndWeb3() {
  return (
    <div className="antialiased text-slate-900 overflow-x-hidden">
      <main>
        <Hero />
        <WhyChoose />
        <ServicesGrid />
        <Categories />
        <UseCases />
        <TechStack />
        <CTA />
      </main>
    </div>
  );
}
