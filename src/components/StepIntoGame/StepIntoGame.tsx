import React from "react";
import Image from "next/image";
import StepCard from "./StepCard";

import ellipse from "../../assets/Ellipse_2.png"; // update path as needed
import prizeIcon from "../../assets/Prize_2.png"; // update path as needed
import prizeIcon_2 from "../../assets/Prize.png"; // update path as needed
import prizeIcon_3 from "../../assets/Prize_3.png"; // update path as needed
import timer from "../../assets/Timer.png"; // update path as needed
import timer2 from "../../assets/Timer_2.png"; // update path as needed
import cardRose from "../../assets/Rose_card_2.png"; // update path as needed
import cardWhite from "../../assets/Golden_Card.png"; // update path as needed
import phone from "../../assets/Telephone_1.png"; // update path as needed
import confetti from "../../assets/Confetti.png"; // update path as needed
import ellipse_large from "../../assets/Ellipse_large.png"; // update path as needed
import ellipse_small from "../../assets/Ellipse_middle.png"; // update path as needed
import avatar from "../../assets/avatar.png"; // update path as needed
import friends from "../../assets/Friends.png"; // update path as needed
import pink from "../../assets/Pink_flash.png"; // update path as needed
import xp2 from "../../assets/XP2.png"; // update path as needed
import xp3 from "../../assets/XP4.png"; // update path as needed
import golden from "../../assets/gold.png"; // update path as needed

const StepIntoGameSection: React.FC = () => (
  <section 
  id="about"
  className="py-12 md:py-20 px-4 md:px-20 bg-white">
    <div className="text-center mb-12 md:mb-16">
      <p className="text-xl md:text-2xl font-Jakarta font-bold mb-2 gradient-text">
        Your city is now a playground.
      </p>
      <h2 className="text-hunterz-black font-Unbounded font-bold text-2xl md:text-3xl lg:text-4xl uppercase mb-4">
        STEP INTO THE GAME
      </h2>
      <p className="text-hunterz-black font-Jakarta text-lg md:text-xl max-w-2xl mx-auto">
        Your city just got a whole lot more exciting. Every day we hide real cash prizes around town—find them first and it&#39;s yours.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
     
      {/* <StepCard
        title="Claim to Win & Share"
        description="When you&#39;e inside the zone, launch our AR Mode, tap the capture the treasure, and watch your cash land in your wallet."
        contentClassName="mb-auto" 
        className="pb-0"
      >
     <div className="flex flex-col justify-center items-center mt-6 w-full ml-10">
  <Image
    src={phone}
    alt="Phone"
    width={400}
    height={150}
    className="w-full max-w-[300px] max-h-[450px] h-auto z-[1]"
  />
<div className="absolute bottom-[61px] md:bottom-[150px] left-1/2 transform -translate-x-1/2 z-0 w-[320px]">
    <Image
      src={confetti}
      alt="confetti"
      width={500}
      height={150}
      className="w-full h-auto"
    />
  </div>
</div>
      </StepCard> */}
 <StepCard
  title="Your city is now a playground."
  description="Your city just got a whole lot more exciting. Every day we hide real cash prizes around town—find them first and it’s yours."
  className="back-image-3 relative"
>
  {/* Container for line + circle */}
  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
    
    {/* Bigger white circle with larger image */}
    <div className="bg-white rounded-full w-28 h-28 flex items-center justify-center z-10 shadow-md">
      <Image
        src={prizeIcon_2}
        alt="prize icon"
        width={100}
        height={100}
        className="w-27 h-27" // bigger inside circle
      />
    </div>

    {/* Shorter dashed vertical line */}
    <div
      className="mt-2 w-[2px] h-20 md:h-26 bg-transparent"
      style={{
 backgroundImage: `repeating-linear-gradient(
      to bottom,
      black 0px,
      black 12px,
      transparent 12px,
      transparent 24px
    )`,      }}
    ></div>
  </div>

    {/* Secondary line + circle on the left */}
  <div className="absolute bottom-[5px] left-[10%] flex flex-col items-center">
    {/* Smaller white circle with image */}
    <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center z-10 shadow-md">
      <Image
        src={pink}
        alt="prize icon"
        width={60}
        height={60}
        className="w-10 h-12"
      />
    </div>

    {/* Slightly higher dashed vertical line */}
    <div
      className="mt-1 w-[2px] h-40 bg-transparent"
      style={{
 backgroundImage: `repeating-linear-gradient(
      to bottom,
      black 0px,
      black 12px,
      transparent 12px,
      transparent 24px
    )`,      }}
    ></div>
  </div>

    {/* Thrid line + circle on the left */}
  <div className="absolute bottom-[5px] right-[10%] flex flex-col items-center">
    {/* Smaller white circle with image */}
    <div className="bg-black rounded-full w-16 h-16 flex items-center justify-center z-10 shadow-md">
      <Image
        src={prizeIcon_3}
        alt="prize icon"
        width={60}
        height={60}
        className="w-10 h-12"
      />
    </div>

    {/* Slightly higher dashed vertical line */}
    <div
      className="mt-1 w-[2px] h-16 bg-transparent"
      style={{
 backgroundImage: `repeating-linear-gradient(
      to bottom,
      black 0px,
      black 12px,
      transparent 12px,
      transparent 24px
    )`,      }}
    ></div>
  </div>

   {/* 4th line + circle on the left */}
  <div className="invisible md:visible absolute bottom-[190px] right-[29%] flex flex-col items-center">
    {/* Smaller white circle with image */}
    <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center z-10 shadow-md">
      <Image
        src={pink}
        alt="prize icon"
        width={60}
        height={60}
        className="w-6 h-8"
      />
    </div>

    {/* Slightly higher dashed vertical line */}
    <div
      className="mt-1 w-[2px] h-16 bg-transparent"
      style={{
 backgroundImage: `repeating-linear-gradient(
      to bottom,
      black 0px,
      black 12px,
      transparent 12px,
      transparent 24px
    )`,      }}
    ></div>
  </div>

  {/* 5th line + circle on the left */}
  <div className="invisible md:visible  absolute bottom-[100px] right-[6%] flex flex-col items-center">
    {/* Smaller white circle with image */}
    <div className="bg-white rounded-full w-14 h-14 flex items-center justify-center z-10 shadow-md">
      <Image
        src={xp2}
        alt="prize icon"
        width={60}
        height={60}
        className="w-10 h-10"
      />
    </div>

    {/* Slightly higher dashed vertical line */}
    <div
      className="mt-1 w-[2px] h-16 bg-transparent"
      style={{
 backgroundImage: `repeating-linear-gradient(
      to bottom,
      black 0px,
      black 12px,
      transparent 12px,
      transparent 24px
    )`,      }}
    ></div>
  </div>

  {/* 6th line + circle on the left */}
  <div className=" invisible md:visible absolute bottom-[195px] left-[28%] flex flex-col items-center">
    {/* Smaller white circle with image */}
    <div className="bg-white rounded-full w-13 h-13 flex items-center justify-center z-10 shadow-md">
      <Image
        src={xp3}
        alt="prize icon"
        width={60}
        height={60}
        className="w-10 h-12"
      />
    </div>

    {/* Slightly higher dashed vertical line */}
    <div
      className="mt-1 w-[2px] h-20 bg-transparent"
      style={{
 backgroundImage: `repeating-linear-gradient(
      to bottom,
      black 0px,
      black 12px,
      transparent 12px,
      transparent 24px
    )`,      }}
    ></div>
  </div>

    {/* 7th line + circle on the left */}
  <div className="invisible md:visible absolute bottom-[225px] left-[44%] flex flex-col items-center">
    {/* Smaller white circle with image */}
    <div className="bg-white rounded-full w-13 h-13 flex items-center justify-center z-10 shadow-md">
      <Image
        src={golden}
        alt="prize icon"
        width={60}
        height={60}
        className="w-10 h-10"
      />
    </div>

    {/* Slightly higher dashed vertical line */}
    <div
      className="mt-1 w-[2px] h-26 bg-transparent"
      style={{
 backgroundImage: `repeating-linear-gradient(
      to bottom,
      black 0px,
      black 12px,
      transparent 12px,
      transparent 24px
    )`,      }}
    ></div>
  </div>
</StepCard>


      <StepCard
        title="See Drop Zones"
        description="Our live map shows circles where cash is waiting. Tap a zone to peek at the reward and clue cost."
        className="back-image"
      >
{/* Combined Timer + Prize + Ellipse */}
<div className="absolute top-[12rem] sm:top-[13rem] xl:top-[14rem]  2xl:top-[18rem] left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center md:w-[250px]">
  {/* Timer icon */}
  <Image
    src={timer}
    alt="timer icon"
    width={120}
    height={64}
    className="w-[90px] sm:w-[110px] md:w-[130px] h-auto mb-[-0.5rem] sm:mb-[-0.75rem] md:mb-[-1rem]"
  />

  {/* Prize icon with Ellipse */}
  <div className="relative mt-5">
  <Image
    src={prizeIcon}
    alt="prize icon"
    width={400}      // intrinsic width
  height={64}   
    className="w-[150px] sm:w-[200px] md:w-[250px] h-auto z-20 relative"
  />

    {/* Ellipse background */}
    <Image
      src={ellipse}
      alt="ellipse"
      width={220}
      height={70}
      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-[-10%] w-[140px] sm:w-[180px] md:w-[220px] h-auto z-10"
    />
  </div>
</div>


      </StepCard>

    
      {/* <StepCard
        title="Connect & Earn"
        description="Rise up the real-world treasure leaderboard, swap tips in the community chat, and invite friends to score bonus cash and XP."
        className="!p-0 pb-40 min-h-[600px] md:min-h-[555px]"
        contentClassName="p-8 pb-0" 
      >
<div className="relative min-h-[300px] md:min-h-[350px] lg:min-h-[470px] overflow-visible md:overflow-hidden">
 <div
  className="absolute top-0 left-1/2 rounded-full w-[90vw]  h-[90vw] sm:w-[90vw] sm:h-[90vw] md:w-[45vw] md:h-[45vw] max-w-[470px] max-h-[470px]"
  style={{
    transform: 'translateX(-50%)',
    background: 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 100%)',
  }}
>
  <div
    className="absolute top-1/2 left-1/2 rounded-full w-[55vw] h-[55vw] sm:w-[55vw] sm:h-[55vw] md:w-[40vw] md:h-[40vw] max-w-[325px] max-h-[325px] transform -translate-x-1/2 -translate-y-1/2"
    style={{
      background: 'radial-gradient(circle, rgba(255,255,255,1) 30%, rgba(255,255,255,0) 100%)',
    }}
  >
    <div className="relative w-full h-full">
      <Image
        src={friends}
        alt="Second Image"
        layout="fill"
        objectFit="contain"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Image
          src={avatar}
          alt="First Image"
          width={125}
          height={125}
          className="object-contain"
        />
      </div>
    </div>
  </div>
</div>
</div>

      </StepCard>  */}

        <StepCard
        title="Find XP. Get Closer to the Cash."
        description="XP is everywhere and easy to grab — collect it daily, unlock powerful hints, and climb the leaderboard for a shot at the MEGA PRIZE."
        className="back-image-2"
      >
{/* Combined Timer + Prize + Ellipse */}
<div className="absolute top-[12rem] sm:top-[9rem] md:top-[16rem]   xl:top-[17rem] lg:top-[14rem] 2xl:top-[18rem] left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center md:w-[250px]">
  {/* Timer icon */}
  <Image
    src={timer2}
    alt="timer icon"
    width={120}
    height={64}
    className="w-[90px] sm:w-[110px] md:w-[130px] h-auto mb-[-0.5rem] sm:mb-[-0.75rem] md:mb-[-1rem]"
  />

  {/* Prize icon with Ellipse */}
  <div className="relative mt-2 md:mt-7">
  <Image
    src={pink}
    alt="prize icon"
    width={400}      // intrinsic width
  height={64}   
    className="w-[100px] sm:w-[150px] md:w-[180px] xl:w-[150px] h-auto z-20 relative"
  />


  </div>
</div>


      </StepCard>

        {/* Other StepCards */}
   <StepCard
  title="Unlock Hints"
description={
    <>
      <strong className="font-bold">Need a boost?</strong> Spend XP to reveal a photo of an exact location — or reduce zone radius.
    </>
  }> 
<div className="flex flex-col justify-center items-center mt-6 w-full">
  <Image
    src={cardRose}
    alt="Card Rose"
    width={400}
    height={150}
    className="w-full max-w-[350px] w-[350px] h-auto z-[1]"
  />
  <Image
    src={cardWhite}
    alt="Card White"
    width={400}
    height={150}
    className="-mt-25 w-full max-w-[350px] w-[350px]  h-auto"
  />
</div>

</StepCard>


    </div>
  </section>
);

export default StepIntoGameSection;
