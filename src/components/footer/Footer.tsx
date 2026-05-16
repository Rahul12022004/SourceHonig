"use client";

import { motion } from "motion/react";
import MarqueeTicker from "@/components/ui/MarqueeTicker";
import { Share2, Globe, Send } from "lucide-react";

const cols = {
  Solutions: ["Sheet Metal Fabrication", "Laser Cutting & Bending", "Cold Room Solutions", "Custom Sourcing", "Offshoring Services"],
  Products: ["EV Charging Panels", "Walk-in Coolers", "Storage & Racks", "Signage Solutions", "Packaging"],
  Company: ["About Us", "Business Network", "Facilities", "Leadership", "Contact"],
};

const socials = [
  { icon: <Share2 size={16} />, label: "LinkedIn" },
  { icon: <Globe size={16} />, label: "Web" },
  { icon: <Send size={16} />, label: "Email" },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#050505" }}>
      <MarqueeTicker />

      <div className="max-w-[1240px] mx-auto px-6 pt-16 pb-0">
        <div
          className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10 pb-12 border-b"
          style={{ borderColor: "#1f1f1f" }}
        >
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-4">
              <span
                className="text-xl font-extrabold tracking-[0.2em] text-white"
                style={{ fontFamily: "var(--font-lora)" }}
              >
                HONEY
              </span>
              <span
                className="text-xl font-light tracking-[0.2em]"
                style={{ color: "#FF5500", fontFamily: "var(--font-lora)" }}
              >
                EXPORT
              </span>
            </div>
            <p className="text-xs leading-relaxed mb-6 max-w-[240px]" style={{ color: "#444" }}>
              Precision manufacturing and sourcing solutions. The power of
              collaboration.
            </p>

            {/* Social mini-cards */}
            <div className="flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  data-cursor="block"
                  className="w-10 h-10 flex items-center justify-center transition-all duration-300 relative group"
                  style={{ border: "1px solid #1f1f1f", color: "#444" }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.borderColor = "#FF5500";
                    el.style.color = "#FF5500";
                    el.style.boxShadow = "0 0 14px #FF550030";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.borderColor = "#1f1f1f";
                    el.style.color = "#444";
                    el.style.boxShadow = "none";
                  }}
                >
                  {/* top neon edge */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ backgroundColor: "#FF5500" }}
                  />
                  {s.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Link columns */}
          {Object.entries(cols).map(([heading, links], i) => (
            <motion.div
              key={heading}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i + 1) * 0.1 }}
            >
              <h4
                className="text-[11px] tracking-widest uppercase mb-5"
                style={{ color: "#E0E0E0" }}
              >
                {heading}
              </h4>
              <div className="flex flex-col gap-0">
                {links.map((l) => (
                  <a
                    key={l}
                    href="#"
                    className="text-xs py-1.5 transition-all duration-200"
                    style={{ color: "#444" }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#FF5500")}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#444")}
                  >
                    {l}
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center py-5 gap-3">
          <p className="text-[11px]" style={{ color: "#333" }}>
            © 2026 Honey Export. All Rights Reserved.
          </p>

          {/* Status indicator */}
          <div className="flex items-center gap-2 text-[10px] tracking-widest" style={{ color: "#333" }}>
            <span
              className="w-1.5 h-1.5 rounded-full blink"
              style={{ backgroundColor: "#22c55e" }}
            />
            SYSTEMS OPERATIONAL
          </div>

          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((l) => (
              <a
                key={l}
                href="#"
                className="text-[11px] transition-colors duration-200"
                style={{ color: "#333" }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#FF5500")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#333")}
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
