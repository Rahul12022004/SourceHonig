"use client";

import { Share2, Globe, Send } from "lucide-react";

const solutions = [
  "Sheet Metal Fabrication",
  "Laser Cutting & Bending",
  "Cold Room Solutions",
  "Custom Sourcing",
  "Offshoring Services",
];

const products = [
  "EV Charging Panels",
  "Walk-in Coolers",
  "Storage & Display Racks",
  "Signage Solutions",
  "Packaging",
];

const company = ["About Us", "Business Network", "Facilities", "Leadership", "Contact"];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#071428", color: "rgba(255,255,255,0.7)" }}>
      <div className="max-w-[1240px] mx-auto px-6 pt-16 pb-0">
        <div
          className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10 pb-10 border-b"
          style={{ borderColor: "rgba(255,255,255,0.1)" }}
        >
          {/* Brand */}
          <div>
            <div className="mb-4">
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
            </div>
            <p className="text-sm leading-[1.7] mb-6 max-w-[280px]">
              Precision manufacturing and sourcing solutions. The power of
              collaboration.
            </p>
            <div className="flex gap-3">
              {[Share2, Globe, Send].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:text-[#0B1D3A]"
                  style={{ backgroundColor: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.7)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = "#D4AF37";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255,255,255,0.1)";
                  }}
                >
                  <Icon size={20} fill="currentColor" />
                </a>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-white text-[15px] font-semibold mb-5 tracking-[0.5px]">
              Solutions
            </h4>
            <div className="flex flex-col gap-0">
              {solutions.map((s) => (
                <a
                  key={s}
                  href="#"
                  className="text-sm py-1.5 transition-all duration-300 hover:text-[#D4AF37] hover:pl-1"
                  style={{ color: "rgba(255,255,255,0.6)" }}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white text-[15px] font-semibold mb-5 tracking-[0.5px]">
              Products
            </h4>
            <div className="flex flex-col gap-0">
              {products.map((p) => (
                <a
                  key={p}
                  href="#"
                  className="text-sm py-1.5 transition-all duration-300 hover:text-[#D4AF37] hover:pl-1"
                  style={{ color: "rgba(255,255,255,0.6)" }}
                >
                  {p}
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white text-[15px] font-semibold mb-5 tracking-[0.5px]">
              Company
            </h4>
            <div className="flex flex-col gap-0">
              {company.map((c) => (
                <a
                  key={c}
                  href="#"
                  className="text-sm py-1.5 transition-all duration-300 hover:text-[#D4AF37] hover:pl-1"
                  style={{ color: "rgba(255,255,255,0.6)" }}
                >
                  {c}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center py-5 gap-3 text-[13px]">
          <p>&copy; 2026 Honey Export. All Rights Reserved.</p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((l) => (
              <a
                key={l}
                href="#"
                className="transition-colors duration-300 hover:text-[#D4AF37]"
                style={{ color: "rgba(255,255,255,0.5)" }}
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

