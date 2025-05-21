import React from 'react';

const Notification = ({ count = 0, className='' }) => {
  return (
    <div className={`relative ${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="29"
        viewBox="0 0 18 29"
        fill="none"
      >
        <path
          d="M2 21.0002H16V11.941C16 6.89267 12.866 2.8002 9 2.8002C5.13401 2.8002 2 6.89267 2 11.941V21.0002ZM9 0.200195C13.9706 0.200195 18 5.45672 18 11.941V23.6002H0V11.941C0 5.45672 4.02944 0.200195 9 0.200195ZM6.5 24.9002H11.5C11.5 26.6951 10.3807 28.1502 9 28.1502C7.6193 28.1502 6.5 26.6951 6.5 24.9002Z"
          fill="#F0F1F1"
        />
      </svg>

      {count > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
          {count}
        </span>
      )}
    </div>
  );
};

export default Notification;
