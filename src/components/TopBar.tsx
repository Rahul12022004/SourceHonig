"use client";

import { Phone, Mail, Globe } from "lucide-react";

export default function TopBar() {
  return (
    <div
      className="fixed top-0 w-full z-[1001] text-[13px] py-2"
      style={{ backgroundColor: "#071428", color: "rgba(255,255,255,0.7)" }}
    >
      <div className="max-w-[1240px] mx-auto px-6 flex justify-between items-center">
        <div className="hidden md:flex gap-6">
          <span className="flex items-center gap-1.5">
            <Phone size={14} />
            +91-9825004550
          </span>
          <span className="flex items-center gap-1.5">
            <Mail size={14} />
            honeyexports33@gmail.com
          </span>
        </div>
        <div className="flex items-center gap-2 ml-auto md:ml-0">
          <a
            href="#contact"
            className="transition-colors duration-300 font-medium hover:text-[#D4AF37]"
          >
            Request a Quote
          </a>
          <span className="opacity-30">|</span>
          <div className="flex items-center gap-1.5 cursor-pointer hover:text-white transition-colors">
            <Globe size={14} />
            India
          </div>
        </div>
      </div>
    </div>
  );
}

