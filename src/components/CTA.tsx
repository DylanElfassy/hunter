import React from "react";
import Image from "next/image";

// Replace these with your actual images
import readyToHuntImage from "@/assets/Prize_2.png";
import appleBadge from "@/assets/White_BG_apple.png";
import googleBadge from "@/assets/White_Black.png";
import bgImage from "@/assets/CTA_Back.png"; // or use public URL if preferred

export const CTA = () => {
  return (
    <section className="w-full py-12 md:py-20 px-4 md:px-20">
      <div
        className="w-full rounded-3xl bg-cover bg-center bg-no-repeat flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12"
        style={{
          backgroundImage: `url(${bgImage.src})`,
        }}
      >
        {/* Left Part: Image */}
        <div className="flex-1 flex justify-center mb-8 md:mb-0">
          <Image
            src={readyToHuntImage}
            alt="Ready to Hunt"
            width={400}
            height={400}
            objectFit="contain"
            className="max-w-full h-auto"
          />
        </div>

        {/* Right Part: Text + Buttons */}
   <div className="flex-1 text-white text-center md:text-left pl-0 md:pl-12">
  <h2 className="text-4xl md:text-5xl font-Unbounded font-bold mb-4 uppercase">
    Ready to Hunt?
  </h2>
  <p className="font-Jakarta text-lg md:text-xl mb-6 mx-auto md:mx-0 text-center md:text-left">
    Download the app,  join the hunt and win cash now!
  </p>

  <div className="flex justify-center md:justify-start gap-4 flex-wrap">
    <Image
      src={appleBadge}
      alt="Download on the App Store"
      width={160}
      height={52}
    />
    <Image
      src={googleBadge}
      alt="Get it on Google Play"
      width={160}
      height={52}
    />
  </div>
        </div>
      </div>
    </section>
  );
};
export default CTA;
