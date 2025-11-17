import React from "react";
import Image from "next/image";
import battleHunterImage from "../assets/battleword.png"; // Replace with your image path

const BattleHunter = () => {
  return (
<section className="w-full bg-[#040404] pt-10 px-6 2xl:px-32 flex flex-col items-center">
      
      {/* Text Container */}
      <div className="flex flex-col justify-center items-center px-4 sm:px-8 mt-10 space-y-6 text-center z-10 relative">

        {/* Gradient Title */}
        <h3 className="font-Unbounded font-bold uppercase text-[14px] sm:text-[16px] tracking-[0.3em] text-transparent bg-clip-text bg-gradient-to-r from-[#FF00BB] via-[#FF5C00] to-[#FF9D00] inline-block">
          THE ULTIMATE HUNT
        </h3>

        {/* Big White Title */}
        <h2 className="font-Unbounded font-bold uppercase text-[32px] sm:text-[40px] md:text-[45px] xl:text-[55px] leading-[1.1] text-white">
          Once a month,<br />Hunterz goes live.
        </h2>

        {/* Description */}
        <p className="font-['Plus_Jakarta_Sans'] text-[18px] sm:text-[18px] text-[#ACACAC] max-w-xl">
          Hundreds of players meet at a secret city location to race through real-world locations and chase one mega prize. It’s not just a game — it’s a live citywide battle.
        </p>

        {/* Button for small screens (lg:hidden) */}
        <div className="w-full sm:w-1/3 mt-6 relative lg:hidden">
          <span className="absolute -inset-0.5 rounded-[30px] bg-gradient-to-r from-[#FF00BB] via-[#FF5C00] to-[#FF9D00]"></span>
          <button className="relative z-10 w-full px-2 py-4 rounded-[30px] font-Unbounded font-bold uppercase text-white bg-[#040404]">
            JOIN THE HUNT
          </button>
        </div>
      </div>

      {/* Image */}
      <div className="w-full relative mt-6 lg:mt-0">
        <Image
          src={battleHunterImage}
          alt="Battle Hunter"
          className="w-full rounded-2xl object-cover"
          priority
        />

        {/* Overlay button for lg+ screens */}
        <div className="hidden lg:absolute top-10 left-1/2 transform -translate-x-1/2 w-1/3 sm:w-1/4 lg:flex">
          <span className="absolute -inset-0.5 rounded-[30px] bg-gradient-to-r from-[#FF00BB] via-[#FF5C00] to-[#FF9D00]"></span>
          <button className="relative z-10 w-full px-2 py-4 rounded-[30px] font-Unbounded font-bold uppercase text-white bg-[#040404]">
            JOIN THE HUNT
          </button>
        </div>
      </div>

    </section>
  );
};

export default BattleHunter;
