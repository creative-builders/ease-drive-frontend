// SkeletonLoader.jsx
import React from "react";

export const ConfirmBookingLoader = ({
  variant = "list",
  items = 4,
  className = "",
}) => {
  const skeletonItems = Array.from({ length: items }, (_, i) => i);

  // A reusable shimmer block
  const ShimmerBlock = ({ className }) => (
    <div
      className={`relative overflow-hidden bg-gray-300 ${className}`}
    >
      <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/90 to-transparent" />
    </div>
  );

  if (variant === "list") {
    return (
      <div
        className={`space-y-6 p-4 bg-white w-full rounded-xl z-0 ${className}`}
      >
        {/* Top bar */}
        <ShimmerBlock className="h-6 w-3/4 rounded-md" />

        {/* Repeated blocks */}
        {skeletonItems.map((i) => (
          <div key={i} className="flex space-x-4">
            {/* Circle avatar */}
            <ShimmerBlock className="h-10 w-10 rounded-full" />

            {/* Text + box */}
            <div className="flex-1 space-y-2 py-1">
              <ShimmerBlock className="h-3 w-1/2 rounded" />
              <ShimmerBlock className="h-3 w-1/4 rounded" />
              <ShimmerBlock className="h-3 w-1/3 rounded" />
              <ShimmerBlock className="h-3 w-1/6 rounded" />

              <ShimmerBlock className="h-8 w-full rounded-lg" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (variant === "card") {
    return (
      <div className={`p-4 space-y-4 bg-white w-full rounded-xl ${className}`}>
        {/* Top bar */}
        <ShimmerBlock className="h-6 w-1/2 rounded-md" />

        {/* Avatar + text */}
        <div className="flex items-start justify-between">
          <div className="flex space-x-4">
            <ShimmerBlock className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <ShimmerBlock className="h-3 w-32 rounded" />
              <ShimmerBlock className="h-3 w-24 rounded" />
              <ShimmerBlock className="h-3 w-16 rounded" />
            </div>
          </div>
          <ShimmerBlock className="h-3 w-3 rounded-md" />
        </div>

        {/* Big rectangle */}
        <ShimmerBlock className="h-4 w-3/4 rounded" />

        {/* Paragraph lines */}
        <div className="space-y-2">
          <ShimmerBlock className="h-3 w-4/5 rounded" />
          <ShimmerBlock className="h-3 w-4/6 rounded" />
          <ShimmerBlock className="h-3 w-3/5 rounded" />
          <ShimmerBlock className="h-3 w-2/5 rounded" />
          <ShimmerBlock className="h-3 w-2/6 rounded" />
        </div>

        <hr className="border-gray-300" />

        {/* Footer rectangle */}
        <ShimmerBlock className="h-8 w-full rounded-lg" />
      </div>
    );
  }

  console.warn(
    `SkeletonLoader: Unknown variant "${variant}". Using "list" as fallback.`
  );
  return <SkeletonLoader variant="list" items={items} className={className} />;
};
