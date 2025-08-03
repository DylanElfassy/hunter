import React from "react";
import Image from "next/image";

// Import your social icons
import tiktokIcon from "@/assets/Tik.png";
import twitterIcon from "@/assets/X.png";       // or twitter.svg
import facebookIcon from "@/assets/Facebook.png";
import instagramIcon from "@/assets/Insta.png";

export const Footer = () => {
  return (
<footer className="w-full px-4 md:px-20 py-4 mb-8">
<div className="mx-auto px-4 md:px-20 flex flex-col md:flex-row items-center justify-between gap-2 text-sm font-Jakarta text-black">        
        {/* Left: Copyright */}
        <div className="font-semibold text-center md:text-left">
          All Rights Reserved © Hunterz
        </div>

        {/* Center: Terms & Privacy (bold) */}
        <div className="flex gap-4 justify-center font-semibold">
          <a href="/terms" className="hover:underline">Terms</a>
          <span>|</span>
          <a href="/privacy" className="hover:underline">Privacy</a>
        </div>

        {/* Right: Social Icons */}
        <div className="flex gap-3 justify-center md:justify-end">
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
            <Image src={tiktokIcon} alt="TikTok" width={15} height={15} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <Image src={twitterIcon} alt="X (Twitter)" width={15} height={15} />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <Image src={facebookIcon} alt="Facebook" width={15} height={15} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <Image src={instagramIcon} alt="Instagram" width={15} height={15} />
          </a>
        </div>

      </div>
    </footer>
  );
};
export default Footer;
