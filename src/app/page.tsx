"use client";

import { useState } from "react";
import LoadingScreen from "@/components/loading/LoadingScreen";
import NavHeader from "@/components/nav/NavHeader";
import HeroSection from "@/components/hero/HeroSection";
import SolutionsSection from "@/components/sections/SolutionsSection";
import AnimatedWorld from "@/components/sections/AnimatedWorld";
import HorizontalScroll from "@/components/sections/HorizontalScroll";
import StatsSection from "@/components/sections/StatsSection";
import TerminalSection from "@/components/sections/TerminalSection";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/footer/Footer";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <LoadingScreen onComplete={() => setLoaded(true)} />}
      <NavHeader />
      <main>
        <HeroSection />
        <AnimatedWorld />
        <SolutionsSection />
        <HorizontalScroll />
        <StatsSection />
        <TerminalSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

