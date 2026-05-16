"use client";

import { motion } from "motion/react";
import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";
import GlowButton from "@/components/ui/GlowButton";
import { CheckCircle2 } from "lucide-react";

const highlights = [
  "Precision Sheet Metal Fabrication",
  "EV Charging & Semiconductor Focus",
  "USA / North America Market Expertise",
  "8+ Group Companies, One Vision",
];

const network = [
  { name: "Metal-Tech CNC Pvt Ltd", desc: "OEM sheet metal enclosures" },
  { name: "Micro Metal Industries", desc: "Deep-drawn parts & wire mesh" },
  { name: "Micro Puf Tech Pvt Ltd", desc: "Cold room & clean room systems" },
  { name: "Lab Tech System Pvt Ltd", desc: "Laboratory furniture" },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-28" style={{ backgroundColor: "#070B14" }}>
      <div className="absolute left-0 right-0 h-px" style={{ backgroundColor: "#1A2744" }} />
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <SectionLabel>About</SectionLabel>
            <h2
              className="text-[clamp(2rem,4vw,3rem)] font-bold mb-6 leading-tight"
              style={{ color: "#F1F5F9" }}
            >
              Redefining Procurement with the Power of Collaboration
            </h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#666" }}>
              Welcome to Honey Export, where we redefine procurement with
              the power of collaboration. Established June 2018 by Piyush
              Patel, we specialize in sourcing products for the North American
              market â€” from display walk-in coolers and metallic storage racks
              to laser-cut parts and custom packaging.
            </p>
            <p className="text-sm leading-relaxed mb-8" style={{ color: "#666" }}>
              With a strong commitment to quality, innovation, and customer
              satisfaction, we have consistently achieved steady growth in a
              competitive global market.
            </p>

            <div className="space-y-3 mb-10">
              {highlights.map((h) => (
                <div key={h} className="flex items-center gap-3">
                  <CheckCircle2 size={16} style={{ color: "#3B82F6", flexShrink: 0 }} />
                  <span className="text-sm" style={{ color: "#F1F5F9" }}>{h}</span>
                </div>
              ))}
            </div>

            <GlowButton href="#contact">Get In Touch</GlowButton>
          </motion.div>

          {/* Leadership + image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Leader card */}
            <div
              className="relative p-6 mb-6"
              style={{ backgroundColor: "#111", border: "1px solid #1A2744" }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-[2px]"
                style={{ background: "linear-gradient(90deg, #3B82F6, #3B82F600)" }}
              />
              <div className="flex gap-5 items-start">
                <div
                  className="w-20 h-20 flex-shrink-0 overflow-hidden"
                  style={{ border: "1px solid #1A2744" }}
                >
                  <Image
                    src="/piyush-patel.jpeg"
                    alt="Piyush Patel"
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-base font-semibold mb-0.5" style={{ color: "#F1F5F9" }}>
                    Piyush Patel
                  </div>
                  <div className="text-[11px] tracking-widest uppercase mb-3" style={{ color: "#3B82F6" }}>
                    Founder & CEO
                  </div>
                  <p className="text-xs leading-relaxed" style={{ color: "#666" }}>
                    Founded Honey Exports in June 2018 with a clear vision to become
                    a leading provider of offshoring and outsourcing solutions for the
                    retail trade sector in the United States.
                  </p>
                </div>
              </div>
            </div>

            {/* Network grid */}
            <div className="grid grid-cols-2 gap-3">
              {network.map((n) => (
                <div
                  key={n.name}
                  className="p-4 relative"
                  style={{ backgroundColor: "#080E1C", border: "1px solid #1A2744" }}
                >
                  <div className="text-xs font-semibold mb-1" style={{ color: "#F1F5F9" }}>
                    {n.name}
                  </div>
                  <div className="text-[11px]" style={{ color: "#666" }}>{n.desc}</div>
                </div>
              ))}
            </div>

            {/* Clients */}
            <div className="mt-6 pt-6 border-t" style={{ borderColor: "#1A2744" }}>
              <div className="text-[10px] tracking-widest mb-3" style={{ color: "#666" }}>
                TRUSTED BY
              </div>
              <div className="flex flex-wrap gap-2">
                {["Baba Trading", "Johnson Controls", "Hitachi", "Tirex", "Prasad Group", "Desi Brothers", "Ammann Apollo"].map((c) => (
                  <span
                    key={c}
                    className="px-3 py-1 text-[11px] tracking-wide"
                    style={{ border: "1px solid #1A2744", color: "#666" }}
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

