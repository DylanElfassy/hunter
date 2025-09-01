import React from "react";
import Image from "next/image";
import crown from "@/assets/crown.png"; // Replace with your actual image path
import SmallRectanglesGroup from "./SmallRectanglesGroup";
import icon1 from "../assets/IC1.png";
import icon2 from "../assets/IC2.png";
import icon3 from "../assets/IC3.png";
import icon4 from "../assets/IC4.png";
import icon5 from "../assets/IC5.png";
import icon6 from "../assets/IC6.png";

const items = [
  { imgSrc: icon1, alt: "Icon 1", text: "Exclusive Daily Hunts " },
  { imgSrc: icon2, alt: "Icon 2", text: "MEGA PRIZE of the month" },
  { imgSrc: icon3, alt: "Icon 1", text: "Smaller Drop Zone Radius" },
  { imgSrc: icon4, alt: "Icon 1", text: "800 Bonus XP every month" },
  { imgSrc: icon5, alt: "Icon 1", text: "VIP Premium Badge " },
  { imgSrc: icon6, alt: "Icon 1", text: "10% Off every in-app purchase" },

  // Add 6 total
];

const Premium = () => {
  return (
  <section 
   id="premium"
   className="py-12 md:py-20 px-4 md:px-20 bg-white">
  <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
    
    {/* Left Rectangle with Image (hidden on md) */}
 <div
  className="rounded-3xl w-full h-auto min-h-[400px] bg-[lightgray] bg-cover bg-center block md:hidden lg:block"
  style={{ backgroundImage: `url(${crown.src})` }}
>
      {/* Content if needed */}
    </div>

    {/* Right Rectangle with black background — full width on md */}
    <div className="rounded-3xl w-full h-auto bg-black relative p-8 flex flex-col justify-start">
      {/* <h3
        className="font-Jakarta text-xl font-bold"
        style={{
          background: "linear-gradient(90deg, #FF00BB 0%, #FF9D00 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          marginBottom: '1rem',
          alignSelf: 'flex-start',
        }}
      >
        HunterZ Premium
      </h3> */}
      <h3
  className="font-Jakarta text-xl font-bold text-white text-center mb-4"
>
  Premium Plan
</h3>

      <h2
  className="font-Unbounded text-white text-3xl md:text-5xl font-extrabold mb-8 text-center uppercase"
>
  Join the Elite Hunters and unlock:
</h2>

      <div className="mt-4">
        <SmallRectanglesGroup items={items} />
      </div>

      <button
        className="mt-6 px-6 py-4 rounded-full text-white text-base font-Jakarta font-semibold 
                   bg-gradient-to-r from-[#FF00BB] to-[#FF9D00] shadow-md hover:opacity-90 transition"
      >
        Subscribe $7.99/month
      </button>
        <h3
  className="font-Jakarta text-lg font-bold text-white text-center mt-6 mb-4"
>
  Upgrade now and hunt like a pro!
</h3>
    </div>
  </div>
</section>


  );
};

export default Premium;
