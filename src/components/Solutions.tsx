"use client";

import { useRef } from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight, ArrowRight, Wrench, Zap, Truck, Globe, Shield } from "lucide-react";

const solutions = [
  {
    icon: <Wrench size={40} strokeWidth={1.5} />,
    title: "Sheet Metal Fabrication",
    desc: "Precision OEM enclosures for EV, semiconductor, air conditioning, and HVAC industries",
  },
  {
    icon: <Zap size={40} strokeWidth={1.5} />,
    title: "Laser Cutting & Bending",
    desc: "Fiber laser cutting, CNC press brake bending, and high-precision metal forming services",
  },
  {
    icon: <Truck size={40} strokeWidth={1.5} />,
    title: "Cold Room Solutions",
    desc: "Display walk-in coolers, environmental control systems, and clean room technology",
  },
  {
    icon: <Globe size={40} strokeWidth={1.5} />,
    title: "Custom Sourcing",
    desc: "Sourcing a wide range of products for the USA market including signage, racks, and packaging",
  },
  {
    icon: <Shield size={40} strokeWidth={1.5} />,
    title: "Offshoring Services",
    desc: "Innovative and efficient offshoring services ensuring global client success and cost optimization",
  },
];

export default function Solutions() {
  const ref = useRef<HTMLDivElement>(null);

  const scroll = (dir: "prev" | "next") => {
    if (ref.current) {
      ref.current.scrollBy({ left: dir === "next" ? 320 : -320, behavior: "smooth" });
    }
  };

  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="max-w-[1240px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-3" style={{ color: "#0B1D3A" }}>
            Our Solutions
          </h2>
          <p className="text-base max-w-[550px] mx-auto" style={{ color: "#6c757d" }}>
            End-to-end sourcing and manufacturing services for the North American market
          </p>
        </motion.div>

        <div className="relative -mx-3">
          {/* Prev */}
          <button
            onClick={() => scroll("prev")}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-[60%] z-10 w-11 h-11 rounded-full items-center justify-center border transition-all duration-300 hover:text-white"
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

          {/* Carousel */}
          <div ref={ref} className="carousel-scroll flex gap-6 pb-5 pt-1 px-12">
            {solutions.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="min-w-[280px] flex-[0_0_280px] p-8 rounded-xl border transition-all duration-300 group cursor-pointer"
                style={{
                  borderColor: "#e0e4e8",
                  backgroundColor: "#fff",
                }}
                whileHover={{
                  y: -4,
                  borderColor: "#D4AF37",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                }}
              >
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center mb-5 transition-all duration-300"
                  style={{
                    backgroundColor: "rgba(11,29,58,0.05)",
                    color: "#0B1D3A",
                  }}
                >
                  {s.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2.5" style={{ color: "#0B1D3A" }}>
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "#6c757d" }}>
                  {s.desc}
                </p>
                <span
                  className="inline-flex items-center gap-1.5 text-sm font-semibold transition-all duration-300 group-hover:gap-2.5"
                  style={{ color: "#D4AF37" }}
                >
                  Learn more <ArrowRight size={16} />
                </span>
              </motion.div>
            ))}
          </div>

          {/* Next */}
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

