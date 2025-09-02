import React from "react";
import Image from "next/image";
import type { StaticImageData } from 'next/image';


interface SmallRectangleProps {
  imgSrc: StaticImageData | string;
  alt: string;
  text: string;
}

const SmallRectangle: React.FC<SmallRectangleProps> = ({ imgSrc, alt, text }) => (

<div
  className="relative flex flex-col rounded-lg p-4 w-[45%] md:w-[45%] lg:w-1/3 max-w-[300px] lg:max-w-[200px] my-0 hover:shadow-xl hover:scale-105 transition-all duration-300 items-center sm:items-start min-h-[120px] gap-y-0"
  style={{
    background:
      "linear-gradient(215deg, rgba(255, 255, 255, 1) 0%, rgba(196, 168, 123, 1) 64%, rgba(196, 168, 123, 1) 80%)",
    color: "#030102",
    boxShadow: "inset 0px 3.35px 35.95px 0px #FFFFFF"
  }}

>
  <div className="w-4 h-4 mb-2 relative">
    <Image src={imgSrc} alt={alt} layout="fill" objectFit="contain" />
  </div>
  <p className="font-Jakarta text-center text-lg break-words mt-0 pr-0 lg:text-left lg:pr-4">
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
