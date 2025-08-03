import React from "react";
import Image from "next/image";
import crown from "@/assets/crown.png"; // Replace with your actual image path
import SmallRectanglesGroup from "./SmallRectanglesGroup";
import icon1 from "../assets/Vector.png";

const items = [
  { imgSrc: icon1, alt: "Icon 1", text: "Access to All Money Drops" },
  { imgSrc: icon1, alt: "Icon 2", text: "Big prize of the month" },
  { imgSrc: icon1, alt: "Icon 1", text: "Smaller Drop Zone Radius" },
  { imgSrc: icon1, alt: "Icon 1", text: "Early Access to Zone Drops" },
  { imgSrc: icon1, alt: "Icon 1", text: "Exclusive XP Hunt Access" },
  { imgSrc: icon1, alt: "Icon 1", text: "Real-Life Battle Mode" },

  // Add 6 total
];

const Premium = () => {
  return (
    <section className="py-12 md:py-20 px-4 md:px-20 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Rectangle with Image */}
      <div className="rounded-3xl w-full h-auto min-h-[400px]" style={{ backgroundImage: `url(${crown.src})` ,     backgroundColor: 'lightgray',
backgroundSize: 'cover', backgroundPosition: 'center' }}>
  {/* Content if needed */}
</div>

        {/* Right Rectangle with black background */}
   <div className="rounded-3xl w-full h-auto bg-black relative p-8 flex flex-col justify-start">
  {/* HunterZ Premium (top-left) */}
  <h3
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
  </h3>

  {/* Go Premium. Win Bigger. Hunt Smarter. */}
 <h2 className="font-Unbounded text-white text-3xl md:text-4xl font-extrabold max-w-md mb-8 text-center md:text-left uppercase">
  Go Premium. Win Bigger. Hunt Smarter.
</h2>

  {/* Add margin-top to separate from above text */}
  <div className="mt-4">
    <SmallRectanglesGroup items={items} />
  </div>

<button
  className="mt-6 px-6 py-3 rounded-full text-white text-base font-Jakarta font-semibold 
             bg-gradient-to-r from-[#FF00BB] to-[#FF9D00] shadow-md hover:opacity-90 transition"
>
  Subscribe $9.99/month
</button>
</div>


      </div>
    </section>
  );
};

export default Premium;
