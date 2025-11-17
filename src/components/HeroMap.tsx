"use client";

import dynamic from "next/dynamic";
import { Header } from "./Header"; // optional

const MapBackground = dynamic(() => import("./MapBackground"), { ssr: false });

const HeroMap = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <MapBackground />

      {/* Optional Header */}
      <Header />

      {/* Hero Text */}
      {/* <div className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2 z-20 text-white text-center w-[90%] sm:w-[70%] md:w-[50%] px-4">
        <h2 className="font-Unbounded uppercase text-2xl sm:text-3xl md:text-5xl font-bold tracking-widest">
          A REAL-WORLD <br></br>MONEY HUNTING <br></br>GAME APP
        </h2>
      </div> */}

      {/* Strong gradient overlay on top of text */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 z-30 pointer-events-none">
        {/* Solid dark bottom */}
        <div className="absolute bottom-0 w-full h-1/5 bg-[#040404]" />
        {/* Strong gradient fading up */}
        <div className="absolute bottom-1/5 w-full h-4/5 bg-gradient-to-t from-[#040404] via-[#040404]/80 to-transparent" />
      </div>
    </section>
  );
};

export default HeroMap;
