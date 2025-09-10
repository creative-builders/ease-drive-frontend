// SkeletonLoader.jsx
import React from "react";

export const SkeletonLoader = ({
  variant = "list",
  items = 4,
  className = "" }) => {

  const skeletonItems = Array.from({ length: items }, (_, i) => i);

  if (variant === "list") {
    return (
      <div className="animate-pulse space-y-6 p-4 bg-white w-full rounded-xl z-0">
        {/* Top bar */}
        <div className="h-6 w-3/4 rounded-md bg-gray-300"></div>

        {/* Repeated blocks */}
        {skeletonItems.map((i) => (
          <div key={i} className="flex space-x-4">
            {/* Circle avatar */}
            <div className="h-10 w-10 rounded-full bg-gray-300"></div>

            {/* Text + box */}
            <div className="flex-1 space-y-2 py-1">
              <div className="h-3 w-1/2 rounded bg-gray-300"></div>
              <div className="h-3 w-1/4 rounded bg-gray-300"></div>
              <div className="h-3 w-1/3 rounded bg-gray-300"></div>
              <div className="h-3 w-1/6 rounded bg-gray-300"></div>

              <div className="h-8 w-full rounded-lg bg-gray-300"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (variant === "card") {
    // === Second UI (card style from your second image) ===
    return (
      <div className="animate-pulse p-4 space-y-4 bg-white w-full rounded-xl">
        {/* Top bar */}
        <div className="h-6 w-1/2 rounded-md bg-gray-300"></div>

        {/* Avatar + text */}
        <div className="flex items-start justify-between ">
          <div className="flex space-x-4">
            <div className="h-12 w-12 rounded-full bg-gray-300"></div>
            <div className="space-y-2">
              <div className="h-3 w-32 rounded bg-gray-300"></div>
              <div className="h-3 w-24 rounded bg-gray-300"></div>
              <div className="h-3 w-16 rounded bg-gray-300"></div>
            </div>
          </div>
          <div className="h-3 w-3 rounded-md bg-gray-300"></div>
        </div>

        {/* Big rectangle */}
        <div className="h-4 w-3/4 rounded bg-gray-300"></div>

        {/* Paragraph lines */}
        <div className="space-y-2">
          <div className="h-3 w-4/5 rounded bg-gray-300"></div>
          <div className="h-3 w-4/6 rounded bg-gray-300"></div>
          <div className="h-3 w-3/5 rounded bg-gray-300"></div>
          <div className="h-3 w-2/5 rounded bg-gray-300"></div>
          <div className="h-3 w-2/6 rounded bg-gray-300"></div>
        </div>

        <hr className="border-gray-300" />

        {/* Footer rectangle */}
        <div className="h-8 w-full rounded-lg bg-gray-300"></div>
      </div>
    );
  }

  console.warn(`SkeletonLoader: Unknown variant "${variant}". Using "list" as fallback.`);
  return <SkeletonLoader variant="list" items={items} className={className} />;
};

