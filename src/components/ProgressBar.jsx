import React, { useState, useEffect } from "react";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

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
    <div className="w-full mx-auto bg-white p-6 rounded-2xl  text-center">
      <h2 className="text-xl font-bold mb-4">Waiting for Passenger to Respond</h2>
      <div className="w-full bg-blue-100 h-3 rounded-full overflow-hidden">
        <div
          className="h-3 bg-blue-600 rounded-full transition-all duration-200"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
