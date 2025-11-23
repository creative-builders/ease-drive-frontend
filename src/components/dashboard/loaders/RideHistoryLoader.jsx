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
        className={`p-4 space-y-4 bg-white rounded-xl hidden md:block lg:block shadow-sm mb-6 w-full lg:w-[400px] md:w-[360px] ${className}`}
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
        className={`space-y-6 bg-white w-full lg:w-[686px] md:w-[520px] rounded-xl shadow-sm p-4 mb-6 ${className}`}
      >
        <div className="flex space-x-2">
          <ShimmerBlock className="h-7 w-[202px] rounded-md" />
        </div>

        {skeletonItems.map((i) => (
          <div
            key={i}
            className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b pb-4 mb-2 gap-4"
          >
            <div className="flex items-center gap-4 w-full sm:w-auto">
              <ShimmerBlock className="bg-red-500 h-[40px] w-[40px] lg:h-[80px] lg:w-[80px] rounded-full" />

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-16 items-start sm:items-baseline w-full">
                <div className="flex flex-col gap-2 w-full">
                  <div className="flex flex-wrap gap-2">
                    <ShimmerBlock className="h-3 w-2/3 lg:w-[282px] rounded" />
                    <ShimmerBlock className="h-3 w-1/4 lg:w-[85px] rounded" />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <ShimmerBlock className="h-3 w-1/3 lg:w-[146px] rounded" />
                    <ShimmerBlock className="h-3 w-1/4 lg:w-[76px] rounded" />
                    <ShimmerBlock className="h-3 w-1/3 lg:w-[130px] rounded" />
                  </div>
                  <ShimmerBlock className="h-2 w-1/4 lg:w-[97px] rounded" />
                </div>

                <div className="flex flex-row sm:flex-col gap-2 sm:gap-4 items-end justify-between sm:justify-center w-full sm:w-auto">
                  <ShimmerBlock className="h-4 w-[60px] lg:w-[81px] rounded-md" />
                  <ShimmerBlock className="h-4 w-[40px] lg:w-[41px] rounded-md" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return null;
};
