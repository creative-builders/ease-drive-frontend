import React from "react";
import { FiCheck } from "react-icons/fi"; // clean checkmark icon

const FeatureCard = ({
  title,
  description,
  imgSrc,
  flex_direction = "flex-col justify-start items-start",
  cardBg = "bg-white",
  borerColor = "border-primary-100",
  className=""
}) => {
  return (
    <div
      className={`
        ${cardBg} ${borerColor}
        w-full max-w-[500px]
        px-6 py-5
        border-[1px] shadow-xl
        sm:rounded-[24px] rounded-[18px]
        hover:-translate-y-2 transition-all duration-300
        ${className}
      `}
    >
      <div className="flex flex-col items-start gap-3">
        {/* Icon + Title */}
        <div className={`flex ${flex_direction} gap-3`}>
          <img src={imgSrc} alt="check" className="w-6 sm:w-10" />
          <h3 className="font-inter font-bold text-[14px] sm:text-[18px] text-black">
            {title}
          </h3>
        </div>

        {/* Description */}
        <p className="font-poppins font-regular text-[12px] sm:text-[14px] text-black">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
