"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { MapPin, Phone, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-[1240px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2
            className="text-3xl font-bold mb-3"
            style={{ color: "#0B1D3A" }}
          >
            Get In Touch
          </h2>
          <p className="text-[15px] mb-8" style={{ color: "#6c757d" }}>
            Ready to collaborate? Reach out to our team for customized
            manufacturing and sourcing solutions.
          </p>

          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-3.5">
              <MapPin
                size={20}
                className="flex-shrink-0 mt-0.5"
                style={{ color: "#D4AF37" }}
              />
              <div>
                <strong
                  className="text-sm block mb-0.5"
                  style={{ color: "#0B1D3A" }}
                >
                  Office
                </strong>
                <p className="text-sm" style={{ color: "#6c757d" }}>
                  G-9, Mahavir Tower, C.P. Nagar Cross Road, Ghatlodia,
                  Ahmedabad, Gujarat, India - 380061
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <Phone
                size={20}
                className="flex-shrink-0 mt-0.5"
                style={{ color: "#D4AF37" }}
              />
              <div>
                <strong
                  className="text-sm block mb-0.5"
                  style={{ color: "#0B1D3A" }}
                >
                  Phone
                </strong>
                <p className="text-sm" style={{ color: "#6c757d" }}>
                  +91-9825004550
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <Mail
                size={20}
                className="flex-shrink-0 mt-0.5"
                style={{ color: "#D4AF37" }}
              />
              <div>
                <strong
                  className="text-sm block mb-0.5"
                  style={{ color: "#0B1D3A" }}
                >
                  Email
                </strong>
                <p className="text-sm" style={{ color: "#6c757d" }}>
                  honeyexports33@gmail.com
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          onSubmit={handleSubmit}
          className="p-9 rounded-xl space-y-3"
          style={{ backgroundColor: "#f4f6f8" }}
        >
          <div className="grid grid-cols-2 gap-3">
            <Input
              placeholder="Full Name"
              required
              className="bg-white border-[#e0e4e8] focus-visible:ring-[#D4AF37] text-sm"
            />
            <Input
              type="email"
              placeholder="Email Address"
              required
              className="bg-white border-[#e0e4e8] focus-visible:ring-[#D4AF37] text-sm"
            />
          </div>
          <Input
            placeholder="Company Name"
            className="bg-white border-[#e0e4e8] focus-visible:ring-[#D4AF37] text-sm"
          />
          <Input
            placeholder="Product / Service of Interest"
            className="bg-white border-[#e0e4e8] focus-visible:ring-[#D4AF37] text-sm"
          />
          <Textarea
            placeholder="Tell us about your requirements..."
            rows={5}
            className="bg-white border-[#e0e4e8] focus-visible:ring-[#D4AF37] text-sm resize-y"
          />
          <Button
            type="submit"
            className="w-full font-semibold py-3 transition-all duration-300 hover:-translate-y-0.5"
            style={{
              backgroundColor: sent ? "#28a745" : "#D4AF37",
              color: "#0B1D3A",
              height: "auto",
            }}
          >
            {sent ? "Message Sent!" : "Send Message"}
          </Button>
        </motion.form>
      </div>
    </section>
  );
}

