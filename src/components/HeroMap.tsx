"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import appStoreImg from "@/assets/APPWhiteBG.png";
import playStoreImg from "@/assets/PlayBG.png";
import { Header } from "./Header"; // optional

// Dynamically import the map to disable SSR
const MapBackground = dynamic(() => import("./MapBackground"), {
  ssr: false,
});

const HeroMap = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <MapBackground />

      {/* Optional Header */}
      <Header />

      {/* Hero Text and Buttons */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 z-20 text-white text-center mt-32 w-[90%] sm:w-[70%] md:w-[50%] px-4">
        {/* <h1 className="font-bold uppercase font-Unbounded text-[25px] lg:text-[36px] xl:text-[46px]  leading-tight">
          Hunterz is a real-world money hunting game — chase clues, find the cash, win big.
        </h1> */}

        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-12">
          <a href="https://apps.apple.com/your-app-id" target="_blank" rel="noopener noreferrer">
            <Image
              src={appStoreImg}
              alt="Download on the App Store"
              width={160}
              height={50}
              className="hover:scale-105 transition-transform"
            />
          </a>
          <a href="https://play.google.com/store/apps/details?id=your.app.id" target="_blank" rel="noopener noreferrer">
            <Image
              src={playStoreImg}
              alt="Get it on Google Play"
              width={160}
              height={50}
              className="hover:scale-105 transition-transform"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroMap;
