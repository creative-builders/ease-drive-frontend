import React, { useState, useEffect } from "react";

const ProgressBar = ({progress, setProgress, title}) => {


  return (
    <div className="w-full mx-auto bg-white p-6 rounded-2xl  text-center">
      <h2 className="lg:text-xl text-[16px] font-bold font-poppins mb-4">{title}</h2>
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
