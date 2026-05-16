"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#solutions", label: "Solutions" },
  { href: "#horizontal", label: "Services" },
  { href: "#stats", label: "Network" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function NavHeader() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 2800);
    return () => clearTimeout(t);
  }, []);

  const go = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-[900] px-6 py-4"
      style={{
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        backgroundColor: "rgba(8,8,8,0.7)",
        borderBottom: "1px solid #1f1f1f",
      }}
    >
      <div className="max-w-[1240px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); go("#home"); }}
          className="flex items-center gap-1"
        >
          <span
            className="text-lg font-extrabold tracking-[0.2em] text-white"
            style={{ fontFamily: "var(--font-lora)" }}
          >
            HONEY
          </span>
          <span
            className="text-lg font-light tracking-[0.2em]"
            style={{ color: "#FF5500", fontFamily: "var(--font-lora)" }}
          >
            EXPORT
          </span>
        </a>

        {/* Status dot */}
        <div className="hidden md:flex items-center gap-2 text-[10px] tracking-widest" style={{ color: "#666" }}>
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 blink" />
          SYSTEMS OPERATIONAL
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => { e.preventDefault(); go(l.href); }}
              className="text-[11px] tracking-widest uppercase px-4 py-2 transition-colors duration-300"
              style={{ color: "#666" }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#E0E0E0")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#666")}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); go("#contact"); }}
            className="text-[11px] tracking-widest uppercase px-4 py-2 ml-2 transition-all duration-300"
            style={{
              border: "1px solid #FF5500",
              color: "#FF5500",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.backgroundColor = "#FF5500";
              el.style.color = "#080808";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.backgroundColor = "transparent";
              el.style.color = "#FF5500";
            }}
          >
            Request Quote
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden border-t mt-4"
            style={{ borderColor: "#1f1f1f" }}
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => { e.preventDefault(); go(l.href); }}
                className="block px-2 py-3 text-[11px] tracking-widest uppercase transition-colors"
                style={{ color: "#666" }}
              >
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
