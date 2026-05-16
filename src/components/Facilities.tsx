"use client";

import { motion } from "motion/react";
import { Zap, SquareStack, Flame, Droplets, ArrowUpDown } from "lucide-react";

const facilities = [
  {
    icon: <Zap size={32} strokeWidth={1.5} />,
    title: "Laser Machines",
    items: [
      "Fiber laser cutting machines",
      "16mm Mild Steel capacity",
      "10mm Stainless Steel",
      "4mm Aluminum",
    ],
  },
  {
    icon: <SquareStack size={32} strokeWidth={1.5} />,
    title: "CNC Press Brake",
    items: [
      "High precision bending machines",
      "Auto back gauge system",
      "8 feet (2500mm) capacity",
    ],
  },
  {
    icon: <Flame size={32} strokeWidth={1.5} />,
    title: "Welding Machines",
    items: [
      "30 KVA & 50 KVA projection welding",
      "Spot welding machines",
      "Precision joinery",
    ],
  },
  {
    icon: <Droplets size={32} strokeWidth={1.5} />,
    title: "Powder Coating",
    items: [
      "Advanced coating plants",
      "Durable, high-quality finishes",
      "Wide color range",
    ],
  },
  {
    icon: <ArrowUpDown size={32} strokeWidth={1.5} />,
    title: "Hydraulic Press",
    items: [
      "Heavy duty: 150–500 tons",
      "Medium/light: 10–75 tons",
      "Versatile forming",
    ],
  },
];

export default function Facilities() {
  return (
    <section id="facilities" className="py-20 bg-white">
      <div className="max-w-[1240px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-3" style={{ color: "#0B1D3A" }}>
            Our Facilities
          </h2>
          <p className="text-base max-w-[550px] mx-auto" style={{ color: "#6c757d" }}>
            State-of-the-art manufacturing infrastructure for precision output
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {facilities.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-7 rounded-xl border transition-all duration-300 group"
              style={{ borderColor: "#e0e4e8" }}
              whileHover={{
                y: -2,
                borderColor: "#D4AF37",
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
              }}
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                style={{
                  backgroundColor: "rgba(11,29,58,0.05)",
                  color: "#0B1D3A",
                }}
              >
                {f.icon}
              </div>
              <h3
                className="text-base font-semibold mb-3"
                style={{ color: "#0B1D3A" }}
              >
                {f.title}
              </h3>
              <ul className="list-none p-0 space-y-1">
                {f.items.map((item) => (
                  <li
                    key={item}
                    className="text-[13px] pl-4 relative leading-relaxed"
                    style={{ color: "#6c757d" }}
                  >
                    <span
                      className="absolute left-0 top-[10px] w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: "#D4AF37" }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
