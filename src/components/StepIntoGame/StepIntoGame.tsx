import React from "react";
import Image from "next/image";
import StepCard from "./StepCard";

import ellipse from "../../assets/Ellipse_2.png"; // update path as needed
import prizeIcon from "../../assets/Prize.png"; // update path as needed
import timer from "../../assets/Timer.png"; // update path as needed
import cardRose from "../../assets/Card-rose.png"; // update path as needed
import cardWhite from "../../assets/Card-White.png"; // update path as needed
import phone from "../../assets/Telephone_1.png"; // update path as needed
import confetti from "../../assets/Confetti.png"; // update path as needed
import ellipse_large from "../../assets/Ellipse_large.png"; // update path as needed
import ellipse_small from "../../assets/Ellipse_middle.png"; // update path as needed
import avatar from "../../assets/avatar.png"; // update path as needed
import friends from "../../assets/Friends.png"; // update path as needed

const StepIntoGameSection: React.FC = () => (
  <section className="py-12 md:py-20 px-4 md:px-20 bg-white">
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
      <StepCard
        title="See Drop Zones"
        description="Our live map shows circles where cash is waiting. Tap a zone to peek at the reward and clue cost."
        className="back-image"
      >
{/* Combined Timer + Prize + Ellipse */}
<div className="absolute top-[11rem] sm:top-[13rem] md:top-[15rem] left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center">
  {/* Timer icon */}
  <Image
    src={timer}
    alt="timer icon"
    width={120}
    height={64}
    className="w-[90px] sm:w-[110px] md:w-[120px] h-auto mb-[-0.5rem] sm:mb-[-0.75rem] md:mb-[-1rem]"
  />

  {/* Prize icon with Ellipse */}
  <div className="relative">
    <Image
      src={prizeIcon}
      alt="prize icon"
      width={200}
      height={64}
      className="w-[130px] sm:w-[170px] md:w-[200px] h-auto z-20 relative"
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
    className="w-full max-w-[300px] h-auto z-[1]"
  />
  <Image
    src={cardWhite}
    alt="Card White"
    width={400}
    height={150}
    className="-mt-25 w-full max-w-[300px] h-auto"
  />
</div>

</StepCard>


      <StepCard
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
      </StepCard>
 
      <StepCard
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

      </StepCard> 
    </div>
  </section>
);

export default StepIntoGameSection;
