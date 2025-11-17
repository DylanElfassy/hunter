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
import KeyStep from "@/components/About";
import ThunderzLeague from "@/components/Thunderz";
import PremiumSection from "@/components/Premium_New";
import BattleHunter from "@/components/BattleWorld";



export const metadata = {
  title: "Hunterz",
  description: "Real World Treasure Hunting Game",
};

export default function Home() {
  return (
    
    <main>
      {/* <Hero /> */}
      
      <HeroMap />
      {/* <StepIntoGame /> */}
      <KeyStep />
      {/* <Premium /> */}
      <ThunderzLeague />
      <PremiumSection />
       <BattleHunter />
       {/* <Premium />
      <ReferralSection />
      <CTA /> */}
      <Footer />

    </main>
  );
}
