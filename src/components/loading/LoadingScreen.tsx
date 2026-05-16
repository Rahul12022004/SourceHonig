"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface Props {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: Props) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(wrapRef.current, {
          clipPath: "inset(0 0 100% 0)",
          duration: 0.7,
          ease: "power4.inOut",
          onComplete,
        });
      },
    });

    tl.to(barRef.current, {
      scaleX: 1,
      duration: 2,
      ease: "power2.inOut",
      onUpdate() {
        setPct(Math.round(this.progress() * 100));
      },
    }).to({}, { duration: 0.3 });

    return () => { tl.kill(); };
  }, [onComplete]);

  return (
    <div
      ref={wrapRef}
      className="fixed inset-0 z-[9990] flex flex-col items-center justify-center"
      style={{
        backgroundColor: "#080808",
        clipPath: "inset(0 0 0% 0)",
      }}
    >
      {/* HUD corners */}
      <div className="absolute top-6 left-6 text-[11px] tracking-widest" style={{ color: "#666" }}>
        SYS v2.6.1
      </div>
      <div className="absolute top-6 right-6 text-[11px] tracking-widest" style={{ color: "#666" }}>
        CARGO OS
      </div>

      {/* Container silhouette */}
      <div className="mb-12 relative">
        <svg width="220" height="80" viewBox="0 0 220 80" fill="none">
          {/* body */}
          <rect x="2" y="10" width="216" height="60" rx="2" stroke="#1f1f1f" strokeWidth="1.5" fill="#0d0d0d" />
          {/* ridges */}
          {Array.from({ length: 14 }).map((_, i) => (
            <line key={i} x1={2 + i * 16} y1="10" x2={2 + i * 16} y2="70" stroke="#1a1a1a" strokeWidth="1" />
          ))}
          {/* left door */}
          <rect x="2" y="10" width="107" height="60" stroke="#FF5500" strokeWidth="0.5" fill="none" />
          {/* right door */}
          <rect x="111" y="10" width="107" height="60" stroke="#FF5500" strokeWidth="0.5" fill="none" />
          {/* corner posts */}
          <rect x="2" y="8" width="6" height="64" fill="#222" />
          <rect x="212" y="8" width="6" height="64" fill="#222" />
          {/* orange glow top */}
          <line x1="2" y1="10" x2="218" y2="10" stroke="#FF5500" strokeWidth="1" opacity="0.6" />
        </svg>
        {/* interior glow */}
        <div
          className="absolute inset-0 rounded"
          style={{
            background: "radial-gradient(ellipse at center, rgba(0,240,255,0.06) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Status text */}
      <div className="text-[11px] tracking-[0.3em] mb-6" style={{ color: "#666" }}>
        INITIALIZING CARGO SYSTEM
        <span className="blink ml-1">_</span>
      </div>

      {/* Progress bar */}
      <div className="w-[280px] h-[2px] relative" style={{ backgroundColor: "#1f1f1f" }}>
        <div
          ref={barRef}
          className="absolute inset-y-0 left-0 w-full origin-left"
          style={{
            backgroundColor: "#FF5500",
            transform: "scaleX(0)",
            boxShadow: "0 0 12px #FF5500, 0 0 30px #FF550060",
          }}
        />
      </div>
      <div className="mt-3 text-[11px] font-mono" style={{ color: "#FF5500" }}>
        {String(pct).padStart(3, "0")}%
      </div>
    </div>
  );
}
