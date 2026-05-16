"use client";

import { motion } from "motion/react";
import { Wrench, Zap, Snowflake, BatteryCharging, Grid3x3, LayoutGrid, Rows3, SignpostBig } from "lucide-react";

const products = [
  {
    icon: <Wrench size={40} strokeWidth={1.5} />,
    title: "Sheet Metal Fabrication",
    desc: "OEM enclosures and assemblies for EV, semiconductor, HVAC",
  },
  {
    icon: <Zap size={40} strokeWidth={1.5} />,
    title: "Laser Cutting & Bending",
    desc: "High-precision fiber laser cutting and CNC press brake services",
  },
  {
    icon: <Snowflake size={40} strokeWidth={1.5} />,
    title: "Display Walk-in Coolers",
    desc: "Cold room and environmental control clean room systems",
  },
  {
    icon: <BatteryCharging size={40} strokeWidth={1.5} />,
    title: "EV Charging Panels",
    desc: "Precision panels for electric vehicle charging infrastructure",
  },
  {
    icon: <Grid3x3 size={40} strokeWidth={1.5} />,
    title: "Supermarket Storage Systems",
    desc: "Gondola and heavy-duty storage rack solutions",
  },
  {
    icon: <LayoutGrid size={40} strokeWidth={1.5} />,
    title: "Gondola Display Racks",
    desc: "Retail display and merchandising rack systems",
  },
  {
    icon: <Rows3 size={40} strokeWidth={1.5} />,
    title: "Cigarette Display Racks",
    desc: "Customized display solutions for retail environments",
  },
  {
    icon: <SignpostBig size={40} strokeWidth={1.5} />,
    title: "Signage Solutions",
    desc: "Metal and non-metal signage for commercial applications",
  },
];

export default function Products() {
  return (
    <section id="products" className="py-20" style={{ backgroundColor: "#f4f6f8" }}>
      <div className="max-w-[1240px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-3" style={{ color: "#0B1D3A" }}>
            Product Range
          </h2>
          <p className="text-base max-w-[550px] mx-auto" style={{ color: "#6c757d" }}>
            Precision-manufactured products for diverse industry needs
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {products.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="p-7 rounded-xl text-center border group cursor-pointer transition-all duration-300"
              style={{ backgroundColor: "#fff", borderColor: "#e0e4e8" }}
              whileHover={{
                y: -4,
                borderColor: "#D4AF37",
                boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
              }}
            >
              <div
                className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-[#0B1D3A] group-hover:text-[#D4AF37]"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(11,29,58,0.06), rgba(212,175,55,0.1))",
                  color: "#0B1D3A",
                }}
              >
                {p.icon}
              </div>
              <h3 className="text-[15px] font-semibold mb-2" style={{ color: "#0B1D3A" }}>
                {p.title}
              </h3>
              <p className="text-[13px] leading-relaxed" style={{ color: "#6c757d" }}>
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

