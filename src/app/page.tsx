import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import RebrandBanner from "@/components/RebrandBanner";
import Solutions from "@/components/Solutions";
import Products from "@/components/Products";
import Industries from "@/components/Industries";
import Facilities from "@/components/Facilities";
import Stats from "@/components/Stats";
import About from "@/components/About";
import MissionVision from "@/components/MissionVision";
import BusinessNetwork from "@/components/BusinessNetwork";
import Leadership from "@/components/Leadership";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        <Hero />
        <RebrandBanner />
        <Solutions />
        <Products />
        <Industries />
        <Facilities />
        <Stats />
        <About />
        <MissionVision />
        <BusinessNetwork />
        <Leadership />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
