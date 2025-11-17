"use client";

import React, { useState } from "react";
import Image from "next/image";
import iphone1 from "@/assets/iphone1.png";
import iphone2 from "@/assets/iphone2.png";
import iphone3 from "@/assets/iphone3.png";

const KeyStep = () => {
  const [activeImage, setActiveImage] = useState(0);
  const images = [iphone1, iphone2, iphone3];

  const handlePrev = () => setActiveImage((prev) => (prev - 1 + images.length) % images.length);
  const handleNext = () => setActiveImage((prev) => (prev + 1) % images.length);

  return (
    <section className="relative w-full bg-[#040404] pt-5 pb-20 px-6 md:px-32 flex flex-col xl:flex-row gap-20">
      
      {/* Left side */}
   <div className="flex-1 flex flex-col justify-center items-center xl:items-start px-4 sm:px-8 mt-10 space-y-8 xl:space-y-4">
  {/* Gradient text */}
  <h3 className="font-Unbounded font-bold uppercase text-[14px] sm:text-[16px] tracking-[0.3em] text-transparent bg-clip-text bg-gradient-to-r from-[#FF00BB] via-[#FF5C00] to-[#FF9D00] inline-block text-center md:text-left">
    Your city is now a playground
  </h3>

  {/* Big white text */}
<h2 className="font-Unbounded font-bold uppercase text-[32px] sm:text-[40px] md:text-[45px] xl:text-[55px] leading-[1.1] text-white text-center md:text-left">
  Every Day.<br />New Hunts.<br />Real Prizes
</h2>


  {/* Description text */}
  <p className="font-['Plus_Jakarta_Sans'] text-[18px] sm:text-[18px] text-[#ACACAC] max-w-md text-center md:text-left">
    Hundreds of players meet at a secret city location to race through real-world clues and chase one mega prize. It’s not just a game — it’s a live citywide battle.
  </p>

  {/* Button */}
  <div className="w-full sm:w-1/3 mt-6 relative">
    <span className="absolute -inset-0.5 rounded-[30px] bg-gradient-to-r from-[#FF00BB] via-[#FF5C00] to-[#FF9D00]"></span>
    <button className="relative z-10 w-full px-4 py-4 rounded-[30px] font-Unbounded font-bold uppercase text-white bg-[#040404]">
      GET STARTED
    </button>
  </div>
</div>


      {/* Right side */}
<div className="xl:w-1/2 bg-[#161616] rounded-xl p-4 sm:p-6 flex flex-col items-center space-y-4 md:space-y-6">
  
  {/* Top text */}
  <h4 className="font-Unbounded font-bold text-white text-[16px] text-center">
    Unlock Hints
  </h4>

  {/* Description */}
  <p className="font-['Plus_Jakarta_Sans'] text-[#FAF9F9] text-[16px] text-center opacity-[0.62]">
    Need a boost? Spend TZ to reveal an exact location — or reduce zone radius.
  </p>

  {/* iPhone screens with overlapping layout */}
  <div className="relative w-full mt-2 flex justify-center items-center min-h-[450px] sm:min-h-[500px]">
    
    {/* Left image behind */}
    <Image
      src={images[(activeImage + 2) % images.length]}
      alt="left screen"
      className="absolute left-[10%] top-1/2 transform -translate-y-1/2 w-[32%] sm:w-[28%] h-auto rounded-xl opacity-60 z-10"
    />

    {/* Right image behind */}
    <Image
      src={images[(activeImage + 1) % images.length]}
      alt="right screen"
      className="absolute right-[10%] top-1/2 transform -translate-y-1/2 w-[32%] sm:w-[28%] h-auto rounded-xl opacity-60 z-10"
    />

    {/* Middle image on top */}
    <Image
      src={images[activeImage]}
      alt="middle screen"
      className="relative w-1/2 sm:w-1/3 max-h-100 sm:max-h-105 h-auto rounded-xl shadow-lg z-20 -mt-6 sm:-mt-8 transition-transform duration-500"
    />

    {/* Left/Right buttons */}
    <button
      onClick={handlePrev}
      className="border-1 border-[#EAEBF0] absolute -left-10 sm:-left-14 top-[40%] transform -translate-y-1/2 w-14 sm:w-16 h-14 sm:h-16 flex justify-center items-center rounded-full bg-[#292828] text-[#EAEBF0] z-30 hover:bg-opacity-80 transition"
    >
     <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" // arrow size inside the circle 
    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1} > <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /> </svg>
  
    </button>

    <button
      onClick={handleNext}
      className="border-1 border-[#EAEBF0] absolute -right-10 sm:-right-14 top-[40%] transform -translate-y-1/2 w-14 sm:w-16 h-14 sm:h-16 flex justify-center items-center rounded-full bg-[#292828] text-[#EAEBF0] z-30 hover:bg-opacity-80 transition"
    >
   <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" // arrow size inside the circle \
   fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1} > <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /> </svg>
   </button>

  </div>
</div>

    </section>
  );
};

export default KeyStep;
