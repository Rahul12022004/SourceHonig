"use client";

import { useRef } from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight, Zap, Wrench, Cpu, Package, ShoppingCart, Wind, FlaskConical, Box } from "lucide-react";

const industries = [
  { icon: <Zap size={48} strokeWidth={1.5} />, label: "EV & Charging" },
  { icon: <Wrench size={48} strokeWidth={1.5} />, label: "Sheet Metal & Fabrication" },
  { icon: <Cpu size={48} strokeWidth={1.5} />, label: "Semiconductor" },
  { icon: <Package size={48} strokeWidth={1.5} />, label: "Food & Cold Storage" },
  { icon: <ShoppingCart size={48} strokeWidth={1.5} />, label: "Retail & Supermarket" },
  { icon: <Wind size={48} strokeWidth={1.5} />, label: "HVAC & Air Conditioning" },
  { icon: <FlaskConical size={48} strokeWidth={1.5} />, label: "Laboratory & Clean Room" },
  { icon: <Box size={48} strokeWidth={1.5} />, label: "Packaging & Consumer" },
];

export default function Industries() {
  const ref = useRef<HTMLDivElement>(null);

  const scroll = (dir: "prev" | "next") => {
    if (ref.current) {
      ref.current.scrollBy({ left: dir === "next" ? 320 : -320, behavior: "smooth" });
    }
  };

  return (
    <section id="industries" className="py-20" style={{ backgroundColor: "#f4f6f8" }}>
      <div className="max-w-[1240px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-3" style={{ color: "#0B1D3A" }}>
            Industries We Serve
          </h2>
          <p className="text-base max-w-[550px] mx-auto" style={{ color: "#6c757d" }}>
            Specialized manufacturing solutions for every industry vertical
          </p>
        </motion.div>

        <div className="relative -mx-3">
          <button
            onClick={() => scroll("prev")}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-[60%] z-10 w-11 h-11 rounded-full items-center justify-center border transition-all duration-300"
            style={{
              backgroundColor: "#fff",
              borderColor: "#e0e4e8",
              color: "#0B1D3A",
              boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "#0B1D3A";
              (e.currentTarget as HTMLElement).style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "#fff";
              (e.currentTarget as HTMLElement).style.color = "#0B1D3A";
            }}
          >
            <ChevronLeft size={24} />
          </button>

          <div ref={ref} className="carousel-scroll flex gap-6 pb-5 pt-1 px-12">
            {industries.map((ind, i) => (
              <motion.div
                key={ind.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="min-w-[180px] flex-[0_0_180px] text-center py-7 px-4 rounded-xl border-2 border-transparent cursor-pointer transition-all duration-300 group"
                style={{ backgroundColor: "#fff" }}
                whileHover={{
                  y: -4,
                  borderColor: "#D4AF37",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                }}
              >
                <div
                  className="w-18 h-18 w-[72px] h-[72px] mx-auto mb-3.5 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-[#0B1D3A] group-hover:text-[#D4AF37]"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(11,29,58,0.06), rgba(212,175,55,0.1))",
                    color: "#0B1D3A",
                  }}
                >
                  {ind.icon}
                </div>
                <span
                  className="text-[13px] font-semibold block"
                  style={{ color: "#0B1D3A" }}
                >
                  {ind.label}
                </span>
              </motion.div>
            ))}
          </div>

          <button
            onClick={() => scroll("next")}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-[60%] z-10 w-11 h-11 rounded-full items-center justify-center border transition-all duration-300"
            style={{
              backgroundColor: "#fff",
              borderColor: "#e0e4e8",
              color: "#0B1D3A",
              boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "#0B1D3A";
              (e.currentTarget as HTMLElement).style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "#fff";
              (e.currentTarget as HTMLElement).style.color = "#0B1D3A";
            }}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
