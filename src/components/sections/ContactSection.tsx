"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { MapPin, Phone, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SectionLabel from "@/components/ui/SectionLabel";
import GlowButton from "@/components/ui/GlowButton";

export default function ContactSection() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="py-28" style={{ backgroundColor: "#050505" }}>
      <div className="absolute left-0 right-0 h-px" style={{ backgroundColor: "#1f1f1f" }} />
      <div className="max-w-[1240px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <SectionLabel>Contact</SectionLabel>
          <h2
            className="text-[clamp(2rem,4vw,3.5rem)] font-bold"
            style={{ color: "#E0E0E0" }}
          >
            Start a Collaboration
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm leading-relaxed mb-10" style={{ color: "#666" }}>
              Ready to collaborate? Reach out to our team for customized
              manufacturing and sourcing solutions tailored to the North
              American market.
            </p>

            {[
              {
                icon: <MapPin size={16} />,
                label: "Office",
                value: "G-9, Mahavir Tower, C.P. Nagar Cross Road, Ghatlodia, Ahmedabad, Gujarat, India — 380061",
              },
              { icon: <Phone size={16} />, label: "Phone", value: "+91-9825004550" },
              { icon: <Mail size={16} />, label: "Email", value: "honeyexports33@gmail.com" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex gap-4 mb-6 p-5"
                style={{ backgroundColor: "#0d0d0d", border: "1px solid #1f1f1f" }}
              >
                <div style={{ color: "#FF5500", flexShrink: 0, marginTop: 2 }}>
                  {item.icon}
                </div>
                <div>
                  <div className="text-[10px] tracking-widest mb-1" style={{ color: "#666" }}>
                    {item.label}
                  </div>
                  <div className="text-sm" style={{ color: "#E0E0E0" }}>
                    {item.value}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            onSubmit={handleSubmit}
            className="p-8 space-y-4 relative"
            style={{ backgroundColor: "#0d0d0d", border: "1px solid #1f1f1f" }}
          >
            {/* top neon edge */}
            <div
              className="absolute top-0 left-0 right-0 h-[2px]"
              style={{ background: "linear-gradient(90deg, #FF5500, #FF550000)" }}
            />

            <div className="grid grid-cols-2 gap-4">
              <Input
                placeholder="Full Name"
                required
                className="bg-[#080808] border-[#1f1f1f] text-[#E0E0E0] text-sm placeholder:text-[#333] focus-visible:ring-[#FF5500] focus-visible:border-[#FF5500]"
              />
              <Input
                type="email"
                placeholder="Email Address"
                required
                className="bg-[#080808] border-[#1f1f1f] text-[#E0E0E0] text-sm placeholder:text-[#333] focus-visible:ring-[#FF5500] focus-visible:border-[#FF5500]"
              />
            </div>
            <Input
              placeholder="Company Name"
              className="bg-[#080808] border-[#1f1f1f] text-[#E0E0E0] text-sm placeholder:text-[#333] focus-visible:ring-[#FF5500] focus-visible:border-[#FF5500]"
            />
            <Input
              placeholder="Product / Service of Interest"
              className="bg-[#080808] border-[#1f1f1f] text-[#E0E0E0] text-sm placeholder:text-[#333] focus-visible:ring-[#FF5500] focus-visible:border-[#FF5500]"
            />
            <Textarea
              placeholder="Tell us about your requirements..."
              rows={5}
              className="bg-[#080808] border-[#1f1f1f] text-[#E0E0E0] text-sm placeholder:text-[#333] focus-visible:ring-[#FF5500] focus-visible:border-[#FF5500] resize-none"
            />
            <button
              type="submit"
              className="w-full py-3.5 text-sm font-semibold tracking-widest uppercase transition-all duration-300"
              style={{
                backgroundColor: sent ? "#00a040" : "#FF5500",
                color: "#080808",
                boxShadow: sent ? "0 0 20px #00a04050" : "0 0 20px #FF550040",
              }}
            >
              {sent ? "✓ MESSAGE SENT" : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
