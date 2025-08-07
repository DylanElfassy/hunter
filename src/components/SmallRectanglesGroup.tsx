import React from "react";
import Image from "next/image";
import type { StaticImageData } from 'next/image';


interface SmallRectangleProps {
  imgSrc: StaticImageData | string;
  alt: string;
  text: string;
}

const SmallRectangle: React.FC<SmallRectangleProps> = ({ imgSrc, alt, text }) => (
<div className="flex flex-col bg-[#24232B] rounded-lg p-4 w-full sm:w-1/2 md:w-[45%] lg:w-1/3 max-w-[300px] lg:max-w-[200px] my-4 hover:shadow-xl hover:scale-105 transition-all duration-300 items-center sm:items-start">
  <div className="w-4 h-4 mb-2 relative">
    <Image src={imgSrc} alt={alt} layout="fill" objectFit="contain" />
  </div>
  <p className="text-[#CCCCCC] font-Jakarta text-left text-base break-words mt-0 pr-4">
    {text}
  </p>
</div>
);

interface SmallRectanglesGroupProps {
  items: SmallRectangleProps[];
}

const SmallRectanglesGroup: React.FC<SmallRectanglesGroupProps> = ({ items }) => (
  <div className="flex flex-wrap gap-4 justify-center">
    {items.map(({ imgSrc, alt, text }, idx) => (
      <SmallRectangle key={idx} imgSrc={imgSrc} alt={alt} text={text} />
    ))}
  </div>
);

export default SmallRectanglesGroup;
