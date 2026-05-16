"use client";

import { useRef, MouseEvent } from "react";
import { motion } from "motion/react";

interface Props {
  title: string;
  description: string;
  icon?: React.ReactNode;
  stat?: string;
  statLabel?: string;
  children?: React.ReactNode;
  className?: string;
}

export default function ContainerCard({
  title,
  description,
  icon,
  stat,
  statLabel,
  children,
  className = "",
}: Props) {
  const cardRef = useRef<HTMLDivElement>(null);

  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rotX = (-y / rect.height) * 8;
    const rotY = (x / rect.width) * 8;
    el.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
  };

  const onMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform =
        "perspective(1000px) rotateX(0deg) rotateY(0deg)";
    }
  };

  return (
    <motion.div
      ref={cardRef}
      className={`relative flex flex-col p-8 transition-transform duration-300 ${className}`}
      style={{
        backgroundColor: "#0D1525",
        border: "1px solid #1A2744",
        borderRadius: "2px",
        willChange: "transform",
      }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      data-cursor="block"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{
        borderColor: "#3B82F660",
        boxShadow: "0 0 30px #3B82F620, 0 20px 40px rgba(0,0,0,0.4)",
      }}
      transition={{ duration: 0.5 }}
    >
      {/* top neon edge */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{
          background: "linear-gradient(90deg, #3B82F6, #3B82F600)",
        }}
      />

      {icon && (
        <div className="mb-6 text-[#3B82F6]">{icon}</div>
      )}

      <h3
        className="text-base font-semibold mb-3 tracking-wide"
        style={{ color: "#F1F5F9" }}
      >
        {title}
      </h3>

      <p className="text-sm leading-relaxed flex-1" style={{ color: "#666" }}>
        {description}
      </p>

      {stat && (
        <div className="mt-6 pt-6 border-t" style={{ borderColor: "#1A2744" }}>
          <div className="text-3xl font-bold" style={{ color: "#3B82F6" }}>
            {stat}
          </div>
          {statLabel && (
            <div className="text-[11px] tracking-widest mt-1" style={{ color: "#666" }}>
              {statLabel}
            </div>
          )}
        </div>
      )}

      {children}
    </motion.div>
  );
}

