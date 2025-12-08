import React, { useEffect, useRef } from "react";

export const ProgressBar = ({
  progress,
  setProgress,
  title,
  resetTrigger,
  maxDuration = 30000,
}) => {
  const passDuration = 10000; // 10s per forward or backward movement
  const passes = Math.floor(maxDuration / passDuration); // total movements
  const startTimeRef = useRef(null);
  const frameRef = useRef(null);

  const animate = () => {
    const now = Date.now();
    const elapsed = now - startTimeRef.current;

    if (elapsed >= maxDuration) {
      cancelAnimationFrame(frameRef.current);
      return;
    }

    // How far are we into the animation (0 to passes)?
    const totalProgress = elapsed / passDuration;

    // Determine which pass we are in
    const currentPass = Math.floor(totalProgress);

    // Fraction of the current pass
    const passFraction = totalProgress - currentPass;

    // Even pass = forward movement
    // Odd pass  = backward movement
    const isForward = currentPass % 2 === 0;

    const newProgress = isForward
      ? Math.min(100, passFraction * 100)      // 0 → 100
      : Math.max(0, 100 - passFraction * 100)  // 100 → 0

    setProgress(Math.round(newProgress));

    frameRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    startTimeRef.current = Date.now();
    frameRef.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frameRef.current);
  }, [resetTrigger, maxDuration]);

  return (
    <div className="w-full">
      <h2 className="mb-8 text-base lg:text-lg font-semibold text-gray-950">
        {title}
      </h2>
      <div
        className="h-3 bg-blue-600 rounded-full transition-all duration-100"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

