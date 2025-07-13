import React from 'react';

export const DescCard = ({ title, desc }) => {
  return (
    <div
      className="
        w-[161px] h-[65px] md:w-[363px] md:h-[169px]
        p-[10px] md:p-[40px]
        gap-[4px] md:gap-[8px]
        rounded-[14px] md:rounded-[32px]
        opacity-100 rotate-0 bg-light
        flex flex-col
      "
    >
      <h3 className="font-bold font-inter text-[8px] sm:text-[18px] text-black">
        {title}
      </h3>

      <p className="font-inter font-regular text-black text-[8px] sm:text-[16px] pt-2 sm:pt-4">
        {desc}
      </p>
    </div>
  );
};
