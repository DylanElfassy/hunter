import React from "react";
import Image from "next/image"; // or your preferred Image component
import thunderzImage from "../assets/ThunderzIMG.png"; // replace with your image path

const ThunderzLeague = () => {
  return (
<section className="relative w-full bg-[#040404] pt-5 pb-20 px-6 xl:px-32 flex flex-col xl:flex-row items-center">
  
  {/* Left side - Image */}
  <div className="xl:w-3/5 flex justify-center items-center">
    <Image
      src={thunderzImage}
      alt="Thunderz League"
      className="w-full h-[650px] md:h-[700px] xl:h-[700px] object-cover rounded-xl shadow-lg"
    />
  </div>

  {/* Right side - Text */}
  <div className="xl:w-2/5 flex flex-col justify-center items-center xl:items-start px-4 sm:px-8 mt-10 space-y-6">
    
    {/* Title with gradient */}
    <h3 className="font-Unbounded font-bold uppercase text-[14px] sm:text-[16px] tracking-[0.3em] text-transparent bg-clip-text bg-gradient-to-r from-[#FF00BB] via-[#FF5C00] to-[#FF9D00] inline-block text-center xl:text-left">
      THUNDERZ LEAGUE
    </h3>

    {/* Big white text */}
    <h2 className="font-Unbounded font-bold uppercase text-[32px] sm:text-[40px] md:text-[45px] xl:text-[55px] leading-[1.1] text-white text-center xl:text-left">
      PLAY HARD.<br />WIN REAL MONEY.
    </h2>

    {/* Description */}
    <p className="font-['Plus_Jakarta_Sans'] text-[18px] sm:text-[18px] text-[#ACACAC] max-w-md text-center xl:text-left">
      Collect the most Thunderz and <br ></br>claim the Weekly Super Prize!
    </p>

    {/* Button */}
    <div className="w-full sm:w-1/3 mt-6 relative">
      <span className="absolute -inset-0.5 rounded-[30px] bg-gradient-to-r from-[#FF00BB] via-[#FF5C00] to-[#FF9D00]"></span>
      <button className="relative z-10 w-full px-2 py-4 rounded-[30px] font-Unbounded font-bold uppercase text-white bg-[#040404]">
        GET STARTED
      </button>
    </div>

  </div>

</section>

  );
};

export default ThunderzLeague;
