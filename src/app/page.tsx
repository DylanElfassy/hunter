import Image from "next/image";
import { Header } from "@/components/Header";
import Hero from "@/components/Hero";
import StepIntoGame from "@/components/StepIntoGame/StepIntoGame";
import Premium from "@/components/Premium";
import ReferralSection from "@/components/ReferralSection";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import MapBackground from "@/components/MapBackground";
import HeroMap from "@/components/HeroMap";

export const metadata = {
  title: "Hunterz",
  description: "Real World Treasure Hunting Game",
};

export default function Home() {
  return (
    
    <main>
      {/* <Hero /> */}
      
      {/* <HeroMap /> */}
      <StepIntoGame />
      <Premium />
      <ReferralSection />
      <CTA />
      <Footer />

    </main>
  );
}
