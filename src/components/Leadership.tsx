"use client";

import { motion } from "motion/react";
import Image from "next/image";

const clients = [
  "Baba Trading",
  "Johnson Controls",
  "Hitachi",
  "Tirex",
  "Prasad Group",
  "Desi Brothers",
  "Ammann Apollo",
];

export default function Leadership() {
  return (
    <section className="py-20" style={{ backgroundColor: "#f4f6f8" }}>
      <div className="max-w-[1240px] mx-auto px-6 flex flex-col gap-8">
        {/* Leadership card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-9 bg-white rounded-xl border shadow"
          style={{ borderColor: "#e0e4e8", boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}
        >
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2" style={{ color: "#0B1D3A" }}>
              Leadership
            </h2>
            <p style={{ color: "#6c757d" }}>Guided by experience, driven by vision</p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div
              className="w-full md:w-[280px] h-[340px] flex-shrink-0 rounded-2xl overflow-hidden shadow-xl"
              style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.12)" }}
            >
              <Image
                src="/piyush-patel.jpeg"
                alt="Piyush Patel"
                width={280}
                height={340}
                className="object-cover w-full h-full"
              />
            </div>

            <div className="flex-1">
              <h3
                className="text-3xl font-bold mb-1.5"
                style={{ color: "#0B1D3A" }}
              >
                Piyush Patel
              </h3>
              <span
                className="text-sm font-semibold uppercase tracking-wider block mb-4"
                style={{ color: "#D4AF37" }}
              >
                Founder &amp; Chief Executive Officer
              </span>
              <p
                className="text-[15px] leading-[1.9] mb-4"
                style={{ color: "#4a4a5a" }}
              >
                I am the Founder and Chief Executive Officer of Honey Exports, a
                company established in June 2018. The organization was founded
                with a clear vision to become a leading provider of offshoring
                and outsourcing solutions, delivering cost-effective and
                high-quality products to the retail trade sector in the United
                States.
              </p>
              <p
                className="text-[15px] leading-[1.9] mb-4"
                style={{ color: "#4a4a5a" }}
              >
                Honey Exports specializes in the manufacturing and export of
                cold room and display walk-in cooler solutions, along with
                gondola display racks and wall unit shelving systems. With a
                strong commitment to quality, innovation, and customer
                satisfaction, the company has consistently achieved steady
                growth in a competitive global market.
              </p>
              <p
                className="text-[15px] leading-[1.9]"
                style={{ color: "#4a4a5a" }}
              >
                Our focus remains on delivering reliable, efficient, and
                customized solutions that meet the evolving needs of our clients
                while maintaining the highest standards of excellence in product
                design and execution.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Clients card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="p-9 bg-white rounded-xl border shadow"
          style={{ borderColor: "#e0e4e8", boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}
        >
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2" style={{ color: "#0B1D3A" }}>
              Trusted By
            </h2>
            <p style={{ color: "#6c757d" }}>
              From small businesses to large corporations
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {clients.map((c) => (
              <span
                key={c}
                className="px-5 py-2.5 rounded-full text-sm font-medium border cursor-default transition-all duration-300 hover:bg-[#0B1D3A] hover:text-white hover:border-[#0B1D3A]"
                style={{
                  backgroundColor: "#f4f6f8",
                  borderColor: "#e0e4e8",
                  color: "#0B1D3A",
                }}
              >
                {c}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
