"use client";

import { motion } from "motion/react";
import SectionLabel from "@/components/ui/SectionLabel";

const nodes = [
  { id: "IND", label: "Ahmedabad, India", x: "62%", y: "52%", color: "#3B82F6" },
  { id: "DXB", label: "Dubai, UAE", x: "58%", y: "44%", color: "#F59E0B" },
  { id: "USA", label: "North America", x: "22%", y: "36%", color: "#3B82F6" },
];

const panels = [
  { label: "Active Shipments", value: "24", unit: "in transit" },
  { label: "On-Time Rate", value: "98.4", unit: "percent" },
  { label: "Countries Served", value: "12", unit: "markets" },
  { label: "Partner Network", value: "8+", unit: "group companies" },
];

export default function TerminalSection() {
  return (
    <section
      className="py-28 relative"
      style={{ backgroundColor: "#060A12" }}
    >
      <div className="absolute top-0 left-0 right-0 h-px" style={{ backgroundColor: "#1A2744" }} />
      <div className="max-w-[1240px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <SectionLabel color="cyan">Global Network</SectionLabel>
          <h2
            className="text-[clamp(2rem,4vw,3.5rem)] font-bold"
            style={{ color: "#F1F5F9" }}
          >
            Logistics Terminal
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-6">
          {/* Map panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-sm overflow-hidden"
            style={{
              backgroundColor: "#070B14",
              border: "1px solid #1A2744",
              minHeight: "420px",
            }}
          >
            {/* Grid overlay */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />

            {/* Route line SVG */}
            <svg
              className="absolute inset-0 w-full h-full"
              preserveAspectRatio="none"
            >
              {/* India â†’ Dubai */}
              <motion.path
                d="M 62% 52% Q 60% 40% 58% 44%"
                fill="none"
                stroke="#F59E0B"
                strokeWidth="1"
                strokeDasharray="4 4"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "linear", delay: 0.5 }}
              />
              {/* Dubai â†’ USA */}
              <motion.path
                d="M 58% 44% Q 40% 25% 22% 36%"
                fill="none"
                stroke="#3B82F6"
                strokeWidth="1"
                strokeDasharray="4 4"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2.5, ease: "linear", delay: 1.2 }}
              />
            </svg>

            {/* Nodes */}
            {nodes.map((n) => (
              <div
                key={n.id}
                className="absolute flex flex-col items-center"
                style={{ left: n.x, top: n.y, transform: "translate(-50%, -50%)" }}
              >
                <motion.div
                  className="w-3 h-3 rounded-full mb-1"
                  style={{
                    backgroundColor: n.color,
                    boxShadow: `0 0 12px ${n.color}, 0 0 30px ${n.color}40`,
                  }}
                  animate={{ scale: [1, 1.4, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
                <div
                  className="text-[9px] tracking-widest whitespace-nowrap px-2 py-0.5 rounded-sm"
                  style={{
                    backgroundColor: "rgba(8,8,8,0.8)",
                    border: `1px solid ${n.color}40`,
                    color: n.color,
                  }}
                >
                  {n.id} â€” {n.label}
                </div>
              </div>
            ))}

            {/* Corner labels */}
            <div className="absolute top-4 left-4 text-[9px] tracking-widest" style={{ color: "#333" }}>
              LIVE NETWORK VIEW
            </div>
            <div className="absolute bottom-4 right-4 text-[9px] tracking-widest flex items-center gap-1.5" style={{ color: "#333" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 blink" />
              ACTIVE
            </div>
          </motion.div>

          {/* Stats panels */}
          <div className="flex flex-col gap-3">
            {panels.map((p, i) => (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 relative"
                style={{
                  backgroundColor: "rgba(255,255,255,0.02)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid #1A2744",
                }}
              >
                <div className="absolute top-3 right-3 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full blink" style={{ backgroundColor: "#F59E0B" }} />
                  <span className="text-[9px] tracking-widest" style={{ color: "#666" }}>LIVE</span>
                </div>
                <div
                  className="text-3xl font-bold mb-1"
                  style={{ color: "#F59E0B", textShadow: "0 0 20px #F59E0B50" }}
                >
                  {p.value}
                </div>
                <div className="text-[11px] tracking-widest uppercase" style={{ color: "#666" }}>
                  {p.label}
                </div>
                <div className="text-[9px] mt-0.5" style={{ color: "#333" }}>
                  {p.unit}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

