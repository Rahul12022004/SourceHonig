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
          backgroundColor: "#FF5500",
          color: "#080808",
          border: "1px solid #FF5500",
          boxShadow: "0 0 20px #FF550040",
        }
      : {
          backgroundColor: "transparent",
          color: "#E0E0E0",
          border: "1px solid #1f1f1f",
        };

  const hoverStyle =
    variant === "primary"
      ? { boxShadow: "0 0 40px #FF550070, 0 0 80px #FF550030" }
      : { borderColor: "#FF5500", color: "#FF5500" };

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
