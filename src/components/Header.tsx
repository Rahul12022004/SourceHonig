"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#solutions", label: "Solutions" },
  { href: "#products", label: "Products" },
  { href: "#facilities", label: "Facilities" },
  { href: "#about", label: "About" },
  { href: "#network", label: "Network" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((l) => l.href.slice(1));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(`#${id}`);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (href: string) => {
    setActive(href);
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className="fixed w-full z-[1000] shadow-[0_2px_20px_rgba(0,0,0,0.15)]"
      style={{ backgroundColor: "#0B1D3A", top: "36px" }}
    >
      <div className="max-w-[1240px] mx-auto px-6 flex justify-between items-center h-16 relative">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleClick("#home");
          }}
          className="flex items-center"
        >
          <span
            className="text-2xl font-extrabold text-white tracking-widest"
            style={{ fontFamily: "var(--font-lora)" }}
          >
            HONEY
          </span>
          <span
            className="text-2xl font-light tracking-widest"
            style={{ color: "#D4AF37", fontFamily: "var(--font-lora)" }}
          >
            EXPORT
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleClick(link.href);
              }}
              className="text-sm font-medium px-4 py-2 rounded-lg transition-all duration-300 relative"
              style={{
                color: active === link.href ? "#fff" : "rgba(255,255,255,0.85)",
                background:
                  active === link.href
                    ? "rgba(255,255,255,0.1)"
                    : "transparent",
              }}
            >
              {link.label}
              {active === link.href && (
                <span
                  className="absolute bottom-0 left-4 right-4 h-0.5"
                  style={{ backgroundColor: "#D4AF37" }}
                />
              )}
            </a>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-white"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile menu */}
        {open && (
          <div
            className="absolute top-16 left-0 right-0 flex flex-col p-4 gap-1 shadow-2xl md:hidden"
            style={{ backgroundColor: "#0B1D3A" }}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(link.href);
                }}
                className="text-sm font-medium px-4 py-3 rounded-lg transition-colors"
                style={{ color: "rgba(255,255,255,0.85)" }}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}

