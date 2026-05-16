"use client";

import { motion } from "motion/react";
import { Wrench, Zap, Snowflake, Globe, Shield } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import ContainerCard from "@/components/ui/ContainerCard";

const solutions = [
  {
    icon: <Wrench size={32} strokeWidth={1.5} />,
    title: "Sheet Metal Fabrication",
    description: "Precision OEM enclosures for EV, semiconductor, air conditioning, and HVAC industries.",
    stat: "16mm", statLabel: "Max mild steel capacity",
  },
  {
    icon: <Zap size={32} strokeWidth={1.5} />,
    title: "Laser Cutting & Bending",
    description: "Fiber laser cutting, CNC press brake bending, high-precision metal forming services.",
    stat: "0.05mm", statLabel: "Tolerance precision",
  },
  {
    icon: <Snowflake size={32} strokeWidth={1.5} />,
    title: "Cold Room Solutions",
    description: "Display walk-in coolers, environmental control systems, and clean room technology.",
    stat: "-40Â°C", statLabel: "Temperature range",
  },
  {
    icon: <Globe size={32} strokeWidth={1.5} />,
    title: "Custom Sourcing",
    description: "Wide range of products for the USA market â€” signage, racks, packaging, and more.",
    stat: "50+", statLabel: "Trusted clients",
  },
  {
    icon: <Shield size={32} strokeWidth={1.5} />,
    title: "Offshoring Services",
    description: "Innovative and efficient offshoring services ensuring global client success.",
    stat: "15+", statLabel: "Years of experience",
  },
];

export default function SolutionsSection() {
  return (
    <section id="solutions" className="py-28" style={{ backgroundColor: "#070B14" }}>
      <div className="max-w-[1240px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <SectionLabel>Solutions</SectionLabel>
          <h2
            className="text-[clamp(2rem,4vw,3.5rem)] font-bold leading-none"
            style={{ color: "#F1F5F9" }}
          >
            What We Build
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {solutions.map((s, i) => (
            <ContainerCard
              key={s.title}
              {...s}
              className={i === 0 ? "lg:col-span-2" : ""}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

