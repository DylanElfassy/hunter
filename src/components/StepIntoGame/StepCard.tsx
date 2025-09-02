import React from "react";
import Image from "next/image";

export interface StepCardProps {
  title: string;
  description: React.ReactNode;
  children?: React.ReactNode;
  icon?: React.ReactNode;
  className?: string; // For outer wrapper
  contentClassName?: string; // For inner content container
}

const StepCard: React.FC<StepCardProps> = ({
  title,
  description,
  children,
  icon,
  className = "",
  contentClassName = "",
}) => {
  return (
    <div
      className={`relative rounded-4xl p-8 h-auto min-h-[400px] md:min-h-[555px] overflow-hidden
        hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group bg-[#f5f5f5] flex flex-col ${className}`}
    >
      <div className={`relative z-10 flex flex-col ${contentClassName}`}>
        {icon && <div className="mb-4">{icon}</div>}
        <div className="text-center mb-6">
          <h3 className="text-hunterz-grey font-Jakarta font-bold text-lg md:text-xl mb-2 group-hover:text-hunterz-black transition-colors">
            {title}
          </h3>
          <p className="text-[#606060] font-Jakarta text-lg leading-relaxed">
            {description}
          </p>
        </div>
       
      </div>
       {children}
    </div>
  );
};

export default StepCard;
