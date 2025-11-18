import React from "react";
import Image from "next/image";
import battleHunterImage from "../assets/battleword.png"; // Replace with your image path

const BattleHunter = () => {
  return (
<section
  id="battle"
  className="w-full bg-[#040404] pt-0 md:pt-10 px-6 2xl:px-32 flex flex-col items-center"
>
      
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
      

{/* Image Container */}
<div className="w-full relative mt-6 lg:mt-0">
  <Image
    src={battleHunterImage}
    alt="Battle Hunter"
    className="w-full rounded-2xl object-cover"
    priority
  />

   {/* JOIN THE HUNT overlay */}
  <div className="hidden lg:absolute top-10 left-1/2 -translate-x-1/2 w-1/3 sm:w-1/4 lg:flex">
    <span className="absolute -inset-0.5 rounded-[30px] bg-gradient-to-r from-[#FF00BB] via-[#FF5C00] to-[#FF9D00]"></span>
    <button className="relative z-10 w-full px-2 py-4 rounded-[30px] font-Unbounded font-bold uppercase text-white bg-[#040404]">
      JOIN THE HUNT
    </button>
  </div>

  {/* LG+ overlay */}
  <div className="
    hidden lg:flex
    absolute bottom-6 left-1/2 -translate-x-1/2
    bg-white rounded-2xl p-4 w-3/4
    items-center justify-between shadow-lg
  ">
    <p className="font-Unbounded font-bold text-black uppercase text-sm">
      Referral Program
    </p>

    <p className="font-Unbounded font-bold text-black uppercase text-center">
      Share with pals and get a bonus
    </p>

    <button className="bg-[#040404] px-5 py-2 rounded-xl font-Unbounded font-bold uppercase">
      <span className="bg-gradient-to-r from-[#FF00BB] via-[#FF5C00] to-[#FF9D00] bg-clip-text text-transparent">
        SHARE
      </span>
    </button>
  </div>
</div>

{/* Mobile & Tablet version (stacked below image) */}
<div className="flex flex-col gap-2 text-center bg-white rounded-2xl p-4 mt-4 w-full sm:w-3/4 mx-auto lg:hidden">
  {/* Left text smaller */}
  <p className="font-Unbounded font-bold text-black uppercase text-xs">
    Referral Program
  </p>

  {/* Center text bigger */}
  <p className="font-Unbounded font-bold text-black uppercase text-sm">
    Share with pals and get a bonus
  </p>

  {/* Button */}
  <button className="bg-[#040404] px-4 py-2 rounded-xl font-Unbounded font-bold uppercase mx-auto">
    <span className="bg-gradient-to-r from-[#FF00BB] via-[#FF5C00] to-[#FF9D00] bg-clip-text text-transparent">
      SHARE
    </span>
  </button>
</div>

    </section>
  );
};

export default BattleHunter;
