"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";
import SectionLabel from "@/components/ui/SectionLabel";

const stats = [
  { target: 8,    suffix: "+", label: "Group Companies" },
  { target: 5000, suffix: "+", label: "Products Delivered" },
  { target: 50,   suffix: "+", label: "Trusted Clients" },
  { target: 15,   suffix: "+", label: "Years Experience" },
];

function AnimatedNumber({ target, started }: { target: number; started: boolean }) {
  const [val, setVal] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!started) return;
    let cur = 0;
    const step = target / (2000 / 16);
    timer.current = setInterval(() => {
      cur += step;
      if (cur >= target) { cur = target; clearInterval(timer.current!); }
      setVal(Math.floor(cur));
    }, 16);
    return () => clearInterval(timer.current!);
  }, [started, target]);

  return <>{val.toLocaleString()}</>;
}

export default function StatsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="stats"
      ref={ref}
      className="py-28 relative overflow-hidden"
      style={{ backgroundColor: "#080808" }}
    >
      {/* radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,85,0,0.05) 0%, transparent 65%)",
        }}
      />
      {/* top border */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ backgroundColor: "#1f1f1f" }} />
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ backgroundColor: "#1f1f1f" }} />

      <div className="max-w-[1240px] mx-auto px-6 relative">
        <div className="text-center mb-20">
          <SectionLabel>By The Numbers</SectionLabel>
          <h2
            className="text-[clamp(2rem,4vw,3rem)] font-bold"
            style={{ color: "#E0E0E0" }}
          >
            The Power of Collaboration
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px" style={{ backgroundColor: "#1f1f1f" }}>
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center justify-center py-16 px-8 text-center"
              style={{ backgroundColor: "#080808" }}
            >
              <div className="leading-none mb-3">
                <span
                  className="text-[clamp(3rem,6vw,5rem)] font-extrabold tabular-nums"
                  style={{
                    color: "#FF5500",
                    textShadow: "0 0 40px #FF550050",
                  }}
                >
                  <AnimatedNumber target={s.target} started={inView} />
                </span>
                <span
                  className="text-[clamp(2rem,4vw,3.5rem)] font-bold"
                  style={{ color: "#FF5500" }}
                >
                  {s.suffix}
                </span>
              </div>
              <span
                className="text-[11px] tracking-[0.25em] uppercase"
                style={{ color: "#666" }}
              >
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
