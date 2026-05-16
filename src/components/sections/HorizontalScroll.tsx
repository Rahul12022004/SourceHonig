"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "motion/react";
import SectionLabel from "@/components/ui/SectionLabel";
import ContainerCard from "@/components/ui/ContainerCard";
import { BatteryCharging, Grid3x3, LayoutGrid, Rows3, SignpostBig, Truck } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const items = [
  { icon: <BatteryCharging size={28} strokeWidth={1.5} />, title: "EV Charging Panels", description: "Precision panels for electric vehicle charging infrastructure — built to UL standards.", stat: "500V", statLabel: "Max rated voltage" },
  { icon: <Truck size={28} strokeWidth={1.5} />, title: "Walk-in Coolers", description: "Display walk-in coolers and cold room systems for food and pharmaceutical storage.", stat: "-25°C", statLabel: "Operating temp" },
  { icon: <Grid3x3 size={28} strokeWidth={1.5} />, title: "Supermarket Storage", description: "Gondola and heavy-duty storage rack systems for retail environments.", stat: "1.2T", statLabel: "Load capacity" },
  { icon: <LayoutGrid size={28} strokeWidth={1.5} />, title: "Gondola Racks", description: "Retail display and merchandising rack systems built for durability.", stat: "8ft", statLabel: "Standard height" },
  { icon: <Rows3 size={28} strokeWidth={1.5} />, title: "Cigarette Display", description: "Customized secure display solutions for retail convenience environments.", stat: "100+", statLabel: "SKU configurations" },
  { icon: <SignpostBig size={28} strokeWidth={1.5} />, title: "Signage Solutions", description: "Metal and non-metal signage for commercial and retail applications.", stat: "Bespoke", statLabel: "Every project" },
];

export default function HorizontalScroll() {
  const outerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const outer = outerRef.current;
    const sticky = stickyRef.current;
    const track = trackRef.current;
    if (!outer || !sticky || !track) return;

    const getX = () => -(track.scrollWidth - window.innerWidth + 96);

    const st = gsap.to(track, {
      x: getX,
      ease: "none",
      scrollTrigger: {
        trigger: outer,
        pin: sticky,
        scrub: 1.2,
        start: "top top",
        end: () => `+=${track.scrollWidth - window.innerWidth + 96}`,
        invalidateOnRefresh: true,
      },
    });

    return () => {
      st.scrollTrigger?.kill();
    };
  }, []);

  return (
    <div
      ref={outerRef}
      id="horizontal"
      style={{ height: `${items.length * 420}px` }}
    >
      <div
        ref={stickyRef}
        className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center"
        style={{ backgroundColor: "#080808" }}
      >
        {/* Section label */}
        <div className="px-12 mb-8 flex items-center justify-between">
          <div>
            <SectionLabel>Services</SectionLabel>
            <h2
              className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold"
              style={{ color: "#E0E0E0" }}
            >
              Product Range
            </h2>
          </div>
          <span className="text-[11px] tracking-widest hidden md:block" style={{ color: "#666" }}>
            SCROLL TO EXPLORE →
          </span>
        </div>

        {/* Conveyor line */}
        <div
          className="h-px w-full mb-8 relative overflow-hidden"
          style={{ backgroundColor: "#1f1f1f" }}
        >
          <motion.div
            className="absolute inset-y-0 left-0 w-32"
            style={{
              background: "linear-gradient(90deg, transparent, #FF5500, transparent)",
            }}
            animate={{ x: ["-128px", "100vw"] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
          />
        </div>

        {/* Track */}
        <div
          ref={trackRef}
          className="flex gap-6 px-12 will-change-transform"
          style={{ width: "max-content" }}
        >
          {items.map((item) => (
            <ContainerCard
              key={item.title}
              {...item}
              className="w-[340px] flex-shrink-0"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
