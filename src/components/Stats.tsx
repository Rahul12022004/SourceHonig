"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";

const stats = [
  { target: 8, suffix: "+", label: "Group Companies" },
  { target: 5000, suffix: "+", label: "Products Delivered" },
  { target: 50, suffix: "+", label: "Trusted Clients" },
  { target: 15, suffix: "+", label: "Years of Experience" },
];

function CountUp({ target, started }: { target: number; started: boolean }) {
  const [value, setValue] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!started) return;
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;
    timerRef.current = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(timerRef.current!);
      }
      setValue(Math.floor(current));
    }, 16);
    return () => clearInterval(timerRef.current!);
  }, [started, target]);

  return <>{value.toLocaleString()}</>;
}

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-20 text-center relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0B1D3A 0%, #132B55 100%)",
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 30% 50%, rgba(212,175,55,0.1) 0%, transparent 50%),
            radial-gradient(ellipse at 70% 30%, rgba(212,175,55,0.06) 0%, transparent 40%)
          `,
        }}
      />
      <div className="max-w-[1240px] mx-auto px-6 relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-white mb-12"
          style={{ fontFamily: "var(--font-lora)" }}
        >
          The Power of Collaboration
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="leading-none mb-3">
                <span
                  className="text-[56px] font-extrabold"
                  style={{ color: "#D4AF37" }}
                >
                  <CountUp target={s.target} started={inView} />
                </span>
                <span
                  className="text-[40px] font-bold"
                  style={{ color: "#D4AF37" }}
                >
                  {s.suffix}
                </span>
              </div>
              <span
                className="text-[15px] font-normal block"
                style={{ color: "rgba(255,255,255,0.7)" }}
              >
                {s.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

