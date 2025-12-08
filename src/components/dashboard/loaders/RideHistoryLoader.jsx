import React from "react";
import { Divider } from "../../Divider/Divider";

// Reusable shimmer block
const ShimmerBlock = ({ className }) => (
  <div className={`relative overflow-hidden bg-gray-300 ${className}`}>
    <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/100 to-transparent" />
  </div>
);

export const RideHistoryLoader = ({ variant = "card", items = 5, className = "" }) => {
  const skeletonItems = Array.from({ length: items }, (_, i) => i);


  if (variant === "card") {
    return (
      <div
        className={`p-4 space-y-4 bg-white rounded-xl hidden lg:block shadow-sm mb-6 w-full lg:w-[394px]${className}`}
      >
        <ShimmerBlock className="h-6 w-1/2 rounded-md" />

        <div className="flex items-start gap-4">
          <ShimmerBlock className="h-10 w-10 lg:h-12 lg:w-12 rounded-full" />
          <div className="flex-1 space-y-2">
            <ShimmerBlock className="h-3 w-2/3 rounded" />
            <ShimmerBlock className="h-3 w-1/2 rounded" />
            <ShimmerBlock className="h-3 w-1/3 rounded" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-16">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="space-y-2">
              {[...Array(3)].map((_, j) => (
                <ShimmerBlock key={j} className="h-3 w-2/3 lg:w-32 rounded" />
              ))}
            </div>
          ))}
        </div>

        <ShimmerBlock className="h-20 w-full rounded-lg" />

        <Divider className="text-neutral-400" />

        <ShimmerBlock className="h-10 w-full rounded-lg" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-16">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="space-y-2">
              {[...Array(5)].map((_, j) => (
                <ShimmerBlock key={j} className="h-3 w-2/3 lg:w-32 rounded" />
              ))}
            </div>
          ))}
        </div>

        <Divider className="text-neutral-400" />

        <ShimmerBlock className="h-12 w-full rounded-lg" />
      </div>
    );
  }

  if (variant === "list") {
    return (
      <div
        className={`space-y-6 bg-white basis-full lg:basis-auto rounded-xl shadow-sm p-4 mb-6 ${className}`}
      >
        <div className="flex space-x-2">
          <ShimmerBlock className="h-7 w-[202px] rounded-md" />
        </div>

        {skeletonItems.map((i) => (
          <div
            key={i}
            className="py-2.5 flex flex-col lg:flex-row justify-between items-start lg:items-center border-b border-neutral-100 mb-2 gap-4"
          >
           <div className="basis-full lg:basis-[480px] h-full">
             <div className="py-2.5 flex items-center gap-x-2 w-full">
              <ShimmerBlock className="w-[40px] aspect-square rounded-full shrink-0 lg:w-[80px]" />


              <div className="basis-auto flex flex-col lg:flex-row gap-4 lg:gap-16 items-start w-full">
                <div className="flex flex-col gap-2 w-full">
                  <div className="mb-4 flex flex-wrap gap-2">
                    <ShimmerBlock className="h-5 w-[282px] rounded" />
                    <ShimmerBlock className="h-5 w-[85px] rounded" />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <ShimmerBlock className="h-5 w-[146px] rounded" />
                    <ShimmerBlock className="h-5 w-[76px] rounded" />
                    <ShimmerBlock className="h-3 w-[130px] rounded" />
                  </div>
                  <ShimmerBlock className="h-2 w-[97px] rounded" />
                </div>
           </div>
            </div>
            </div>
            <div className="flex flex-row lg:flex-col gap-2 lg:gap-4 items-end justify-between lg:justify-center w-full">
              <ShimmerBlock className="h-5 w-[81px] rounded-md" />
              <ShimmerBlock className="h-5 w-[41px] rounded-md" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  return null;
};
