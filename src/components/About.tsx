"use client";

import { motion } from "motion/react";
import { CheckCircle2, Truck } from "lucide-react";

const highlights = [
  "Precision Sheet Metal Fabrication",
  "EV Charging & Semiconductor Focus",
  "USA/North America Market Expertise",
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-[1240px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2
            className="text-3xl font-bold mb-5"
            style={{ color: "#0B1D3A" }}
          >
            About Honey Export
          </h2>
          <p
            className="text-[15px] leading-[1.8] mb-4"
            style={{ color: "#4a4a5a" }}
          >
            Welcome to Honey Export, where we redefine procurement with the
            power of collaboration.
          </p>
          <p
            className="text-[15px] leading-[1.8] mb-4"
            style={{ color: "#4a4a5a" }}
          >
            We specialize in sourcing a wide range of products for the USA
            market, particularly North America. Our offerings include display
            walk-in coolers, metallic and wooden storage racks, signage
            solutions, laser-cut parts, sheet metal fabrication and assemblies,
            and customized packaging.
          </p>

          <div className="flex flex-col gap-3.5 my-7">
            {highlights.map((h) => (
              <div key={h} className="flex items-center gap-3">
                <CheckCircle2 size={24} style={{ color: "#D4AF37" }} />
                <span
                  className="text-[15px] font-medium"
                  style={{ color: "#0B1D3A" }}
                >
                  {h}
                </span>
              </div>
            ))}
          </div>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-block px-8 py-3.5 font-semibold rounded-lg transition-all duration-300 hover:-translate-y-0.5"
            style={{
              backgroundColor: "#D4AF37",
              color: "#0B1D3A",
            }}
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Image placeholder */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div
            className="w-full h-[420px] rounded-xl flex items-center justify-center relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #0B1D3A 0%, #132B55 100%)",
            }}
          >
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 50%, rgba(212,175,55,0.15) 0%, transparent 60%)",
              }}
            />
            <Truck
              size={80}
              style={{ color: "rgba(255,255,255,0.4)" }}
              strokeWidth={1}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
