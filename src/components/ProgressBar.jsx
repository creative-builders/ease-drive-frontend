import React, { useState, useEffect } from "react";

const ProgressBar = ({ progress, setProgress, title }) => {
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((old) => {
        if (old >= 100) {
          clearInterval(interval);
          return 100;
        }
                return old + 1; // increase 1% every tick
            });
        }, 100); // speed (100ms per step)

        return () => clearInterval(interval);
    }, []);

  return (
    <>
      <h2 className="mb-8 text-base lg:text-lg font-semibold text-gray-950">{title}</h2>
        <div
          className="h-3 bg-blue-600 rounded-full transition-all duration-200"
          style={{ width: `${progress}%` }}
        ></div>
    </>
  );
};

export default ProgressBar;
