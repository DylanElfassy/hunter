import Image from 'next/image';
import referralImage from '../assets/sign20.png'; // replace with actual image

export const ReferralSection = () => {
  return (
<section className="py-12 md:py-20 px-4 md:px-20 bg-white">
  <div className="w-full bg-[#F5F5F5] rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between relative overflow-visible">
    
    {/* Left Part with padding-left */}
    <div className="lg:flex-1 text-left pl-4 lg:pl-12 mb-8 md:mb-8">
      <h4 className="text-xl font-Jakarta bg-gradient-to-r from-[#FF00BB] to-[#FF9D00] text-transparent bg-clip-text mb-2 font-bold">
        Referral Program
      </h4>
      <p className="text-black font-Unbounded text-3xl lg:text-4xl md:text-xl leading-snug max-w-md font-bold uppercase">
        Share with pals and get +20XP free as a bonus
      </p>
    </div>

    {/* Middle Image */}
<div 
  className="lg:absolute lg:left-1/2 lg:top-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 z-0 md:w-[375px] lg:w-auto flex justify-center md:justify-start mb-8 lg:mb-0"
>
  <Image
    src={referralImage}
    alt="Referral"
    width={375}
    height={400}
    className="w-full md:w-[375px] lg:w-[375px] object-contain relative"
  />
</div>

    {/* Right Part with increased font size on mobile */}
    <div className="lg:flex-1 text-left flex flex-col items-start pr-0 lg:pr-40 md:max-w-[430px] text-lg md:text-base mt-0 md:mt-8">
      <p className="font-Jakarta text-[#6B6B6B] max-w-sm mb-4">
        Share your win on Instagram, TikTok, or Stories—and we&#39;ll instantly top up your account with +20 XP.
      </p>
      <div className="w-full flex justify-center md:justify-start">
        <button className="px-12 py-2 rounded-full text-white font-Jakarta text-base bg-gradient-to-r from-[#FF00BB] to-[#FF9D00] hover:brightness-110 transition-all">
          Sign Up
        </button>
      </div>
    </div>

  </div>
</section>

  );
};
export default ReferralSection;
