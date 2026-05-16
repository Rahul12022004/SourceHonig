"use client";

import { motion } from "motion/react";

export default function RebrandBanner() {
  return (
    <section className="pt-10 pb-0 bg-white">
      <div className="max-w-[1240px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-start gap-5 p-7 rounded-xl border"
          style={{
            background:
              "linear-gradient(135deg, rgba(212,175,55,0.08) 0%, rgba(11,29,58,0.04) 100%)",
            borderColor: "rgba(212,175,55,0.25)",
          }}
        >
          <span
            className="flex-shrink-0 px-3.5 py-1 text-[11px] font-bold uppercase tracking-widest rounded"
            style={{ backgroundColor: "#D4AF37", color: "#0B1D3A" }}
          >
            New
          </span>
          <div>
            <h3
              className="text-lg font-bold mb-2"
              style={{ color: "#0B1D3A" }}
            >
              Precision Manufacturing &amp; Global Sourcing
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "#64748B" }}>
              Honey Export delivers sourcing excellence and collaborative
              partnerships in the procurement industry â€” specializing in sheet
              metal fabrication, cold room solutions, and custom manufacturing
              for the North American market.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

