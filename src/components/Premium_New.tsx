import React from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";

import premiumImage from "@/assets/Premium_BG.png"; // change to your real image
import icon1 from "../assets/IC1.png";
import icon2 from "../assets/IC2.png";
import icon3 from "../assets/IC3.png";
import icon4 from "../assets/IC4.png";
import icon5 from "../assets/IC5.png";
import icon6 from "../assets/IC6.png";


/* -------------------------------------------------------
   SMALL RECTANGLE
------------------------------------------------------- */
interface SmallRectangleProps {
  imgSrc: StaticImageData | string;
  alt: string;
  text: string;
}

const SmallRectangle: React.FC<SmallRectangleProps> = ({ imgSrc, alt, text }) => (
  <div
    className="relative flex flex-col rounded-lg p-4 
               w-[45%] md:w-[45%] lg:w-1/3 
               max-w-[300px] lg:max-w-[200px] 
               hover:shadow-xl hover:scale-105 
               transition-all duration-300 
               items-center sm:items-start 
               min-h-[120px] gap-y-1"
    style={{
      background: "#272727",
      color: "#ffffff",
    }}
  >
<div className="mb-2">
  <Image
    src={imgSrc}
    alt={alt}
    width={64}  // pixels
    height={64} // pixels
    className="object-cover rounded"
  />
</div>


    <p className="font-Jakarta text-center text-lg break-words mt-0 sm:text-left">
      {text}
    </p>
  </div>
);

/* -------------------------------------------------------
   GROUP OF SMALL RECTANGLES
------------------------------------------------------- */
const SmallRectanglesGroup = ({ items }: { items: SmallRectangleProps[] }) => (
  <div className="flex flex-wrap gap-4 justify-center">
    {items.map((item, idx) => (
      <SmallRectangle key={idx} {...item} />
    ))}
  </div>
);

/* -------------------------------------------------------
   MAIN PREMIUM SECTION
------------------------------------------------------- */
const PremiumSection = () => {
  const items: SmallRectangleProps[] = [
    { imgSrc: icon1, alt: "Icon 1", text: "Exclusive Daily Hunts" },
    { imgSrc: icon2, alt: "Icon 2", text: "MEGA PRIZE of the month" },
    { imgSrc: icon5, alt: "Icon 5", text: "Win Bigger Prizes" },
    { imgSrc: icon3, alt: "Icon 3", text: "Smaller Drop Zone Radius" },
    { imgSrc: icon4, alt: "Icon 4", text: "800 Bonus XP every month" },
    { imgSrc: icon6, alt: "Icon 6", text: "AR -Mode Navigation" },
  ];

  return (
<section className="w-full bg-[#040404] pt-10 pb-0 md:pb-20 px-6 2xl:px-32">

  {/* Image & Card Container */}
  <div className="relative w-full mb-10 flex justify-center">

    {/* Background image — only visible on 2xl screens */}
    <Image
      src={premiumImage}
      alt="Premium Background"
      className="hidden 2xl:block w-full h-auto rounded-3xl object-contain"
    />

    {/* Black Overlay Card */}
   {/* Black Overlay Card */}
<div
  className="
    relative 2xl:absolute 
    top-0 2xl:top-0 left-0 2xl:left-0 right-0 
    mt-6 mb-6 
    xl:mx-40 2xl:ml-170 2xl:mx-6
    rounded-3xl 
    p-4 sm:p-6 
    shadow-xl 
    flex flex-col
    items-center
  "
  style={{
    background: "linear-gradient(135deg, #292929 0%, #040404 100%)"
  }}
>

      {/* Top title */}
      <h3
        className="
          font-Unbounded 
          text-center 
          text-md sm:text-md
          font-bold 
          mb-4 mt-4
          tracking-[0.25em]
        "
        style={{ color: "#C89B54" }}
      >
        HUNTERZ PREMIUM
      </h3>

      {/* Main title */}
      <h2
        className="
          font-Unbounded text-white
          text-2xl sm:text-4xl
          font-extrabold 
          mb-6 
          text-center 
          uppercase
        "
      >
        More hunts. Bigger prizes. Better chances
      </h2>

      {/* Grid — items aligned left */}
      <div className="w-full mt-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="
                flex flex-col 
                items-start 
                bg-[#272727] 
                rounded-lg 
                p-3 sm:p-4
                min-h-[110px]
                hover:scale-105 transition-all duration-300
              "
            >
              <div className="w-8 h-8 mb-2 relative">
                <Image src={item.imgSrc} alt={item.alt} fill className="object-contain" />
              </div>

              <p className="font-Jakarta text-white text-sm sm:text-base leading-tight text-left">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Centered button */}
      <button
        className="
          mt-6 px-5 py-3 mb-2
          rounded-full 
          text-white text-sm sm:text-base font-Unbounded font-bold
          uppercase
          bg-gradient-to-r from-[#FF00BB] via-[#FF5C00] to-[#FF9D00] 
          shadow-md hover:opacity-90 transition
          w-full md:w-[80%]
        "
      >
        SUBSCRIBE
      </button>
    </div>

  </div>
</section>



  );
};

export default PremiumSection;
