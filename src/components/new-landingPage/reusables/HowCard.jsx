import React from 'react';

export const HowCard = ({ cardNumber, imgSrc, children, className = "" }) => {
  return (
    <div className={`flex flex-col items-center bg-light opacity-100 z-3
                    sm:w-[379px] w-[169px] sm:h-[530px] h-[234px] ${className} mt-12`}>

      {/* Card Box */}
      <div className="flex flex-col items-center bg-[#F3F7FF] opacity-100 rotate-0
                      sm:w-[363px] w-[161px] sm:h-[354px] h-[157px]
                      sm:rounded-tl-[8px] sm:rounded-tr-[8px] sm:rounded-br-[45px] sm:rounded-bl-[45px]
                      rounded-tl-[4px] rounded-tr-[4px] rounded-br-[20px] rounded-bl-[20px]
                      transition-all duration-300 hover:shadow-xl hover:scale-[1.01]">

        {/* Card Number Bubble */}
        <div className="flex items-center justify-center text-center text-white
                        relative mb-6 bg-primary-600 rounded-full
                        sm:w-[40px] sm:h-[45px] w-[18px] h-[24px]
                        sm:text-2xl text-xs font-bold font-poppins
                        sm:-left-40 sm:-ml-4 sm:-mt-3 -left-20 ml-2 -mt-1
                        transition-all duration-300 hover:shadow-xl hover:scale-[1.01] hover:translate-x-1 hover:translate-y-1">
          {cardNumber}
        </div>

        {/* Image Container */}
        <div className="flex items-center justify-center bg-[#E7E7E726]
                        sm:w-[278px] w-[121px] sm:h-[370px]
                        rounded-tl-[45px] rounded-tr-[45px] rounded-br-[25px] rounded-bl-[25px]">
          <img
            src={imgSrc}
            loading="lazy"
            alt={`Card ${cardNumber}`}
            className="w-[265px] h-full object-contain"
          />
        </div>
      </div>

      {/* Optional Children */}
      {children}
    </div>
  );
};




{/* <div className="sm:w-[379px] w-full  h-[530px] flex flex-col 
                         opacity-100 rotate-0 bg-light items-center">


                <div className=" w-[363px] h-[354px] opacity-100 rotate-0 rounded-tl-[8px]
                            rounded-tr-[8px] rounded-br-[45px] rounded-bl-[45px] bg-[#F3F7FF]  flex flex-col items-center">

                    <div className="w-[45px] h-[55px] flex flex-col 
                                 opacity-100 rotate-0 bg-primary_600 items-center relative 
                                 rounded-[50%] mb-6 text-2xl text-poppins  text-bold -left-40 -ml-4 -mt-3 text-center text-white">
                        {cardNumber}
                    </div>

                    <div className=" w-[278px] h-[370px] opacity-100 rotate-0 rounded-tl-[45px] 
                                flex flex-col items-center
                            rounded-tr-[45px] rounded-br-[25px] rounded-bl-[25px] bg-[#E7E7E726]  ">
                        <img src={imgSrc} className=' w-[265px]  h-full object-contain ' />
                    </div>
                </div>

                {children}

            </div> */}