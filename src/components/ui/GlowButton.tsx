"use client";

import { motion } from "motion/react";

interface Props {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "ghost";
  onClick?: () => void;
}

export default function GlowButton({ children, href, variant = "primary", onClick }: Props) {
  const base =
    "inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold tracking-widest uppercase transition-all duration-300";

  const styles =
    variant === "primary"
      ? {
          backgroundColor: "#3B82F6",
          color: "#070B14",
          border: "1px solid #3B82F6",
          boxShadow: "0 0 20px #3B82F640",
        }
      : {
          backgroundColor: "transparent",
          color: "#F1F5F9",
          border: "1px solid #1A2744",
        };

  const hoverStyle =
    variant === "primary"
      ? { boxShadow: "0 0 40px #3B82F670, 0 0 80px #3B82F630" }
      : { borderColor: "#3B82F6", color: "#3B82F6" };

  const el = (
    <motion.span
      className={base}
      style={styles}
      whileHover={hoverStyle}
      whileTap={{ scale: 0.97 }}
      data-cursor="block"
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <a
        href={href}
        onClick={(e) => {
          e.preventDefault();
          const target = document.querySelector(href);
          if (target) target.scrollIntoView({ behavior: "smooth" });
          onClick?.();
        }}
      >
        {el}
      </a>
    );
  }
  return <button onClick={onClick}>{el}</button>;
}

