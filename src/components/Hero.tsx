import React from "react";
import { Header } from "./Header";
import mapImg from "../assets/Map2.png";
import ellipseImg from "../assets/ellipse.png";
import appStoreImg from "../assets/APPWhiteBG.png";
import playStoreImg from "../assets/PlayBG.png";
import treasureImg from "../assets/Treasure_Point_1.png";
import treasureImg_2 from "../assets/Treasure_Point_2.png";
import treasureImg_3 from "../assets/Treasure_Point_3.png";
import Image from "next/image";
import "../app/globals.css";

const Hero = () => {
  return (
    <section className="hero-container relative w-full h-screen overflow-hidden">
      {/* Background map container */}
      <div className="relative w-full h-full">
        <Image src={mapImg} alt="Map background" fill className="map object-cover z-0" />

        {/* Treasure icons positioned relative to bottom of map image */}
<div className="absolute bottom-25 left-6 sm:bottom-80 sm:left-30 z-20">
          <Image src={treasureImg_3} alt="Treasure Left" width={100} height={40} className="w-20 sm:w-30" />
        </div>
<div className="absolute bottom-40 left-1/2 -translate-x-1/2 z-20 hidden sm:block">
          <Image src={treasureImg} alt="Treasure Center" width={100} height={40} className="w-8 sm:w-30" />
        </div>
<div className="absolute bottom-50 right-1 sm:bottom-80 sm:right-30 z-20">
          <Image src={treasureImg_2} alt="Treasure Right" width={100} height={40} className="w-20 sm:w-30" />
        </div>
      </div>

      {/* Color gradient overlay */}
      <Image
        src={ellipseImg}
        alt="Color gradient overlay"
        width={800}
        height={600}
        className="degrade top-0 absolute z-10 pointer-events-none"
      />

      {/* Header */}
      <Header />

      {/* Hero content */}
<div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-20 text-white text-center mt-30 sm:mt-20 md:mt-35 w-[90%] sm:w-[80%] md:w-[60%] lg:w-[110%] px-4">
        <h1   className=" font-bold  uppercase  font-Unbounded 
    text-[25px] 
    leading-[97%] 
    sm:text-[36px] 
    md:text-[46px] 
    w-[90%] 
    sm:w-[70%] 
    md:w-1/2 
    mx-auto 
    text-center
  "
>
          Hunterz is a real-world money hunting game — chase clues, find the cash, win big.
        </h1>

        {/* Store buttons */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-12">
          <a href="https://apps.apple.com/your-app-id" target="_blank" rel="noopener noreferrer">
            <Image
              src={appStoreImg}
              alt="Download on the App Store"
              width={160}
              height={50}
              className="download-image hover:scale-105 transition-transform"
            />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=your.app.id"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={playStoreImg}
              alt="Get it on Google Play"
              width={160}
              height={50}
              className="download-image hover:scale-105 transition-transform"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
