"use client";

import { motion } from "motion/react";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden pt-[100px]"
      style={{ backgroundColor: "#0B1D3A" }}
    >
      {/* Background image overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `
            linear-gradient(135deg, rgba(11,29,58,0.95) 0%, rgba(19,43,85,0.85) 50%, rgba(11,29,58,0.95) 100%),
            url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1600') center/cover
          `,
        }}
      />

      {/* Gold radial glows */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: `
            radial-gradient(ellipse at 20% 50%, rgba(212,175,55,0.08) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 20%, rgba(212,175,55,0.05) 0%, transparent 40%)
          `,
        }}
      />

      <div className="max-w-[1240px] mx-auto px-6 relative z-[2] w-full text-center text-white py-10">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-[52px] font-extrabold leading-tight tracking-wide mb-4"
          style={{ fontFamily: "var(--font-lora)" }}
        >
          THE POWER OF COLLABORATION
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg font-light max-w-[600px] mx-auto"
          style={{ color: "rgba(255,255,255,0.75)" }}
        >
          Precision sheet metal fabrication, advanced manufacturing, and
          sourcing solutions for the USA market
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-10 flex flex-wrap gap-4 justify-center"
        >
          <a
            href="#solutions"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("solutions")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-3.5 font-semibold rounded-lg transition-all duration-300 hover:-translate-y-0.5"
            style={{
              backgroundColor: "#D4AF37",
              color: "#0B1D3A",
            }}
          >
            Explore Solutions
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-3.5 font-semibold rounded-lg border transition-all duration-300 hover:bg-white/10"
            style={{
              borderColor: "rgba(255,255,255,0.4)",
              color: "#fff",
            }}
          >
            Get In Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
