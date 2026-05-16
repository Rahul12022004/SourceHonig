"use client";

import { motion } from "motion/react";
import { Target, Eye } from "lucide-react";

const cards = [
  {
    icon: <Target size={40} strokeWidth={1.5} />,
    title: "Our Mission",
    text: "To excel in precision sheet metal fabrication for microelectronics, EV charging panels, and semiconductor manufacturing. We deliver innovative and efficient offshoring services ensuring global client success.",
  },
  {
    icon: <Eye size={40} strokeWidth={1.5} />,
    title: "Our Vision",
    text: "To become a leader in precision sheet metal fabrication and advanced manufacturing, with a focus on retail applications, cutting-edge solutions, and global market success.",
  },
];

export default function MissionVision() {
  return (
    <section className="py-20" style={{ backgroundColor: "#f4f6f8" }}>
      <div className="max-w-[1240px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {cards.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="p-10 rounded-xl bg-white border transition-all duration-300"
            style={{ borderColor: "#e0e4e8" }}
            whileHover={{
              borderColor: "#D4AF37",
              boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
            }}
          >
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mb-5"
              style={{
                background: "linear-gradient(135deg, #0B1D3A 0%, #132B55 100%)",
                color: "#D4AF37",
              }}
            >
              {c.icon}
            </div>
            <h3
              className="text-2xl font-bold mb-3"
              style={{ color: "#0B1D3A" }}
            >
              {c.title}
            </h3>
            <p
              className="text-[15px] leading-[1.8]"
              style={{ color: "#64748B" }}
            >
              {c.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

