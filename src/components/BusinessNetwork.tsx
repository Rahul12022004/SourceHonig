"use client";

import { motion } from "motion/react";
import { Wrench, Grid2x2, Snowflake, FlaskConical } from "lucide-react";

const companies = [
  {
    icon: <Wrench size={36} strokeWidth={1.5} />,
    name: "Metal-Tech CNC Pvt Ltd",
    desc: "Sheet metal fabrication specializing in OEM enclosures for EV, semiconductor, air conditioning, and HVAC industries.",
  },
  {
    icon: <Grid2x2 size={36} strokeWidth={1.5} />,
    name: "Micro Metal Industries",
    desc: "Deep-drawn metal parts and customized wire mesh solutions for industrial applications.",
  },
  {
    icon: <Snowflake size={36} strokeWidth={1.5} />,
    name: "Micro Puf Tech Pvt Ltd",
    desc: "Cold room solutions and environmental control clean room systems for food and pharma industries.",
  },
  {
    icon: <FlaskConical size={36} strokeWidth={1.5} />,
    name: "Lab Tech System Pvt Ltd",
    desc: "Laboratory furniture and accessories for research, healthcare, and educational institutions.",
  },
];

export default function BusinessNetwork() {
  return (
    <section id="network" className="py-20 bg-white">
      <div className="max-w-[1240px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-3" style={{ color: "#0B1D3A" }}>
            Business Network
          </h2>
          <p className="text-base max-w-[550px] mx-auto" style={{ color: "#6c757d" }}>
            Our group of companies delivering excellence across industries
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {companies.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start gap-5 p-7 rounded-xl border transition-all duration-300"
              style={{ borderColor: "#e0e4e8" }}
              whileHover={{
                y: -2,
                borderColor: "#D4AF37",
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
              }}
            >
              <div
                className="w-14 h-14 flex-shrink-0 rounded-xl flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, #0B1D3A, #132B55)",
                  color: "#D4AF37",
                }}
              >
                {c.icon}
              </div>
              <div>
                <h3
                  className="text-[17px] font-semibold mb-2"
                  style={{ color: "#0B1D3A" }}
                >
                  {c.name}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6c757d" }}>
                  {c.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
