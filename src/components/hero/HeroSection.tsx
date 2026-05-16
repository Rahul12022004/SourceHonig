"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import SectionLabel from "@/components/ui/SectionLabel";
import GlowButton from "@/components/ui/GlowButton";

const ContainerScene = dynamic(() => import("./ContainerScene"), { ssr: false });

export default function HeroSection() {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!textRef.current) return;
    const els = textRef.current.querySelectorAll("[data-reveal]");
    gsap.fromTo(
      els,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.12,
        ease: "expo.out",
        delay: 1.2,
      }
    );
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: "#080808" }}
    >
      {/* R3F Canvas — behind everything */}
      <div className="absolute inset-0 z-0">
        <ContainerScene />
      </div>

      {/* Gradient fade bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48 z-[1] pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, #080808)",
        }}
      />

      {/* DOM content */}
      <div
        ref={textRef}
        className="relative z-10 max-w-[1240px] mx-auto px-6 w-full pt-32 pb-20"
      >
        <div data-reveal>
          <SectionLabel color="orange">Logistics Operating System</SectionLabel>
        </div>

        <h1
          className="text-[clamp(2.5rem,7vw,6rem)] font-extrabold leading-none tracking-tight mb-6"
          style={{ fontFamily: "var(--font-lora)" }}
          data-reveal
        >
          <span style={{ color: "#E0E0E0" }}>THE POWER OF</span>
          <br />
          <span
            style={{
              color: "#FF5500",
              textShadow: "0 0 40px #FF550060, 0 0 80px #FF550030",
            }}
          >
            COLLABORATION
          </span>
        </h1>

        <p
          className="text-base max-w-[520px] leading-relaxed mb-10"
          style={{ color: "#666" }}
          data-reveal
        >
          Precision sheet metal fabrication, advanced manufacturing, and global
          sourcing solutions for the North American market.
        </p>

        <div className="flex flex-wrap gap-4" data-reveal>
          <GlowButton href="#solutions" variant="primary">
            Explore Solutions
          </GlowButton>
          <GlowButton href="#contact" variant="ghost">
            Get In Touch
          </GlowButton>
        </div>

        {/* Scroll hint */}
        <div
          className="absolute bottom-8 left-6 flex items-center gap-3"
          data-reveal
        >
          <div
            className="w-6 h-10 rounded-full border flex items-start justify-center p-1"
            style={{ borderColor: "#1f1f1f" }}
          >
            <div
              className="w-1 h-2 rounded-full"
              style={{
                backgroundColor: "#FF5500",
                animation: "bounce 1.5s ease-in-out infinite",
              }}
            />
          </div>
          <span
            className="text-[10px] tracking-[0.3em] uppercase"
            style={{ color: "#666" }}
          >
            Scroll
          </span>
        </div>
      </div>
    </section>
  );
}
