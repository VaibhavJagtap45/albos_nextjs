"use client";
import React from "react";
import { motion } from "framer-motion";
import STag from "@/components/ui/STag";
import Tag from "@/components/ui/Tag";

/* =========================
   SVG thumbs with small SVG/Framer animations
   ========================= */

function FinTechThumb() {
  return (
    <svg
      viewBox="0 0 480 180"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <rect width="480" height="180" fill="#EFF6FF" />
      <rect
        x="30"
        y="28"
        width="190"
        height="110"
        rx="12"
        fill="rgba(59,130,246,0.08)"
        stroke="rgba(59,130,246,0.2)"
        strokeWidth="1"
      />
      <text x="50" y="62" fill="#94A3B8" fontSize="10" fontFamily="monospace">
        Balance
      </text>
      <text
        x="50"
        y="90"
        fill="#1E3A5F"
        fontSize="20"
        fontFamily="Arial"
        fontWeight="bold"
      >
        ₹ 84,230
      </text>
      <text x="50" y="113" fill="#0D9488" fontSize="10">
        ↑ +12.4% this month
      </text>

      {/* background ring */}
      <circle
        cx="380"
        cy="84"
        r="52"
        fill="none"
        stroke="rgba(59,130,246,0.15)"
        strokeWidth="12"
      />

      {/* animated main arc */}
      <motion.circle
        cx="380"
        cy="84"
        r="52"
        fill="none"
        stroke="#1D4ED8"
        strokeWidth="12"
        strokeDasharray="196 131"
        strokeLinecap="round"
        initial={{ strokeDashoffset: 196 }}
        animate={{ strokeDashoffset: 49 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      {/* animated secondary arc */}
      <motion.circle
        cx="380"
        cy="84"
        r="52"
        fill="none"
        stroke="#0D9488"
        strokeWidth="12"
        strokeDasharray="75 327"
        strokeLinecap="round"
        initial={{ strokeDashoffset: -147 }}
        animate={{ strokeDashoffset: -20 }}
        transition={{ duration: 1.6, ease: "circOut", repeat: 0 }}
      />

      <text
        x="380"
        y="81"
        fill="#1E3A5F"
        fontSize="12"
        textAnchor="middle"
        fontWeight="bold"
      >
        60%
      </text>
      <text x="380" y="95" fill="#94A3B8" fontSize="9" textAnchor="middle">
        Invested
      </text>
    </svg>
  );
}

function HealthThumb() {
  return (
    <svg
      viewBox="0 0 480 180"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <rect width="480" height="180" fill="#F0FDFA" />
      <rect
        x="160"
        y="18"
        width="160"
        height="144"
        rx="18"
        fill="white"
        stroke="rgba(13,148,136,0.2)"
        strokeWidth="1"
      />
      <rect x="172" y="30" width="136" height="120" rx="10" fill="#F0FDFA" />
      <text
        x="240"
        y="65"
        fill="#94A3B8"
        fontSize="9"
        textAnchor="middle"
        fontFamily="Arial"
      >
        Heart Rate
      </text>
      <text
        x="240"
        y="92"
        fill="#0D9488"
        fontSize="28"
        textAnchor="middle"
        fontFamily="Arial"
        fontWeight="bold"
      >
        72
      </text>
      <text x="240" y="108" fill="#94A3B8" fontSize="9" textAnchor="middle">
        bpm · Normal
      </text>

      {/* animated sparkline (line draw) */}
      <motion.polyline
        points="172,135 190,120 210,126 230,110 250,122 270,106 290,118 308,112"
        fill="none"
        stroke="#0D9488"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="300"
        initial={{ strokeDashoffset: 300 }}
        animate={{ strokeDashoffset: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      <rect
        x="28"
        y="38"
        width="112"
        height="44"
        rx="8"
        fill="rgba(13,148,136,0.08)"
        stroke="rgba(13,148,136,0.2)"
        strokeWidth="1"
      />
      <text x="84" y="57" fill="#0D9488" fontSize="9" textAnchor="middle">
        Today's Steps
      </text>
      <text
        x="84"
        y="74"
        fill="#1E3A5F"
        fontSize="14"
        textAnchor="middle"
        fontWeight="bold"
      >
        8,420
      </text>

      <rect
        x="340"
        y="68"
        width="112"
        height="44"
        rx="8"
        fill="rgba(29,78,216,0.08)"
        stroke="rgba(29,78,216,0.2)"
        strokeWidth="1"
      />
      <text x="396" y="87" fill="#1D4ED8" fontSize="9" textAnchor="middle">
        Next Appt.
      </text>
      <text
        x="396"
        y="104"
        fill="#1E3A5F"
        fontSize="11"
        textAnchor="middle"
        fontWeight="bold"
      >
        Dr. Sharma
      </text>
    </svg>
  );
}

function IoTThumb() {
  return (
    <svg
      viewBox="0 0 480 180"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <rect width="480" height="180" fill="#FFFBEB" />
      <circle
        cx="240"
        cy="88"
        r="48"
        fill="none"
        stroke="rgba(217,119,6,0.15)"
        strokeWidth="18"
      />
      <motion.circle
        cx="240"
        cy="88"
        r="48"
        fill="none"
        stroke="#D97706"
        strokeWidth="3"
        strokeDasharray="195 106"
        initial={{ strokeDashoffset: 195 }}
        animate={{ strokeDashoffset: 0 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
      />
      <text
        x="240"
        y="84"
        fill="#92400E"
        fontSize="20"
        textAnchor="middle"
        fontFamily="Arial"
        fontWeight="bold"
      >
        74°C
      </text>
      <text x="240" y="102" fill="#94A3B8" fontSize="8" textAnchor="middle">
        Core Temp
      </text>

      <rect
        x="28"
        y="28"
        width="94"
        height="50"
        rx="8"
        fill="rgba(217,119,6,0.06)"
        stroke="rgba(217,119,6,0.2)"
        strokeWidth="1"
      />
      <text x="75" y="50" fill="#D97706" fontSize="8" textAnchor="middle">
        Vibration
      </text>
      <text
        x="75"
        y="68"
        fill="#1E3A5F"
        fontSize="15"
        textAnchor="middle"
        fontWeight="bold"
      >
        0.2g
      </text>

      <rect
        x="28"
        y="100"
        width="94"
        height="50"
        rx="8"
        fill="rgba(13,148,136,0.06)"
        stroke="rgba(13,148,136,0.2)"
        strokeWidth="1"
      />
      <text x="75" y="122" fill="#0D9488" fontSize="8" textAnchor="middle">
        OTA Status
      </text>
      <text
        x="75"
        y="141"
        fill="#1E3A5F"
        fontSize="10"
        textAnchor="middle"
        fontWeight="bold"
      >
        v3.1.2 ✓
      </text>

      <rect
        x="358"
        y="53"
        width="94"
        height="74"
        rx="8"
        fill="rgba(29,78,216,0.06)"
        stroke="rgba(29,78,216,0.2)"
        strokeWidth="1"
      />
      <text x="405" y="76" fill="#1D4ED8" fontSize="8" textAnchor="middle">
        Online
      </text>
      <text
        x="405"
        y="98"
        fill="#1E3A5F"
        fontSize="22"
        textAnchor="middle"
        fontWeight="bold"
      >
        247
      </text>
      <text x="405" y="114" fill="#0D9488" fontSize="8" textAnchor="middle">
        / 250
      </text>
    </svg>
  );
}

const PROJECTS = [
  {
    thumb: <FinTechThumb />,
    ind: "Fintech · Dubai, UAE",
    title: "PayFlow — Real-Time Payments Platform",
    desc: "Multi-currency payment gateway with wallet, KYC, analytics, and merchant dashboard for a UAE fintech startup.",
    metrics: [
      ["₹2.4Cr", "Daily Volume"],
      ["99.97%", "Uptime SLA"],
      ["14 wks", "Ship Time"],
    ],
    stack: ["React", "Node.js", "PostgreSQL", "AWS"],
  },
  {
    thumb: <HealthThumb />,
    ind: "HealthTech · London, UK",
    title: "CareSync — Patient Health & Appointments",
    desc: "Cross-platform Flutter app with vitals tracking, doctor booking, prescription history, and HIPAA-compliant backend.",
    metrics: [
      ["50K+", "Active Users"],
      ["4.8★", "App Store"],
      ["10 wks", "MVP Launch"],
    ],
    stack: ["Flutter", "Firebase", "Node.js", "HIPAA"],
  },
  {
    thumb: <IoTThumb />,
    ind: "Industrial IoT · Frankfurt, Germany",
    title: "SensorMesh — Industrial Fleet Monitoring",
    desc: "ESP32 firmware with OTA updates, real-time telemetry to AWS IoT Core, and web dashboard for 250-device factory floor.",
    metrics: [
      ["250", "Devices Managed"],
      ["60%", "Less Downtime"],
      ["8 wks", "Deployment"],
    ],
    stack: ["ESP32", "AWS IoT", "MQTT", "React"],
  },
];

const headerVariant = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 20, scale: 0.995 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" },
  }),
};

const hoverVariant = {
  rest: { scale: 1, boxShadow: "var(--shadow-md)" },
  hover: { scale: 1.02, boxShadow: "0 18px 40px rgba(15,23,42,0.12)" },
};

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-12 px-[5%] bg-stone-50 relative z-10">
      <motion.div
        className="flex justify-between items-end flex-wrap gap-6 mb-14"
        variants={headerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div>
          <STag color="blue">Our Work</STag>
          <h2 className="font-display font-black text-4xl md:text-5xl tracking-tight leading-tight">
            Products We've
            <br />
            <span className="text-slate-400 font-bold">Built & Shipped</span>
          </h2>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {PROJECTS.map((p, i) => (
          <motion.article
            key={i}
            className="port-card bg-white border border-slate-200 rounded-2xl overflow-hidden"
            style={{ boxShadow: "var(--shadow-md)" }}
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            custom={i}
            whileHover="hover"
            animate="rest"
            variants={{ ...cardVariant, ...hoverVariant }}
          >
            <motion.div
              className="h-44 overflow-hidden"
              initial={{ y: 0 }}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 120, damping: 14 }}
              style={{ transformOrigin: "center" }}
            >
              {p.thumb}
            </motion.div>

            <motion.div
              className="p-5"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 + 0.2, duration: 0.5 }}
            >
              <div className="text-[10px] font-bold uppercase tracking-widest text-blue-700 mb-1.5">
                {p.ind}
              </div>
              <h3 className="font-display font-bold text-slate-800 text-base mb-1.5 tracking-tight">
                {p.title}
              </h3>
              <p className="text-slate-500 text-xs leading-relaxed mb-4">
                {p.desc}
              </p>

              <div className="flex gap-5 mb-4">
                {p.metrics.map(([val, lbl]) => (
                  <div key={lbl}>
                    <div className="font-display font-black text-xl text-slate-800 leading-none tracking-tight">
                      {val}
                    </div>
                    <div className="text-[10px] text-slate-400 mt-0.5">
                      {lbl}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100">
                {p.stack.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </motion.div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
