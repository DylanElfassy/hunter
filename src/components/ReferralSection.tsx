import Image from 'next/image';
import referralImage from '../assets/sign20.png'; // replace with actual image

export const ReferralSection = () => {
  return (
  <section className="py-12 md:py-20 px-4 md:px-20 bg-white">
  <div className="w-full bg-[#F5F5F5] rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between relative overflow-visible">

    {/* Left Part with padding-left */}
    <div className="flex-1 text-left pl-4 md:pl-12 mb-8 md:mb-0">
      <h4 className="text-xl font-Jakarta bg-gradient-to-r from-[#FF00BB] to-[#FF9D00] text-transparent bg-clip-text mb-2 font-bold">
        Referral Program
      </h4>
      <p className="text-black font-Unbounded text-3xl md:text-4xl leading-snug max-w-md font-bold uppercase">
        Share with pals and get +20XP free as a bonus
      </p>
    </div>

    {/* Middle Image */}
    <div 
      className="md:absolute md:left-1/2 md:top-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 z-0 w-full md:w-auto flex justify-center mb-8 md:mb-0"
      style={{ maxWidth: '375px' }}
    >
      <Image
        src={referralImage}
        alt="Referral"
        width={375}
        height={400}
        objectFit="contain"
        className="relative"
      />
    </div>

    {/* Right Part with increased font size on mobile */}
<div className="flex-1 text-left flex flex-col items-start pr-0 md:pr-40 md:max-w-[430px] text-lg md:text-base">
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
