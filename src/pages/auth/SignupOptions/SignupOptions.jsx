import React from 'react'
import RideOptionSelector from "./RideOptionSelector"

export const SignupOptions = () => {
  return (
    <div lassName=" min-h-screen">
      <div className="min-h-screen flex flex-col lg:flex-row lg:items-center 
      justify-center bg-[linear-gradient(123deg,_#FDFDFD_3.85%,_#F4EDFA_35.58%,_#F1FBF2_56%,_#EEE1F8_81.24%,_#FDFDFD_101.6%)]">
        <div className="flex justify-center gap-x-[31px] bg-gradient-to-r
     lg:w-[1264px]
      lg:bg-white lg:bg-none shadow-[0_1px_15.5px_0_rgba(0,0,0,0.05)] p-4 lg:px-[40.5px]">
          <div className="flex items-center justify-center min-h-screen ">
            <div className="bg-white lg:w-[1216px] lg:h-[830px] w-[90%] h-[90vh] 
     m-auto opacity-100 flex flex-row items-center">
              <div className="lg:w-[647px] lg:h-[765px] w-[100%] h-[95vh] 
       m-auto flex justify-center items-center ml-0
          p-8 gap-8 opacity-100 bg-white flex flex-col items-center justify-center">
                <div className="lg:w-[556px] lg:h-[59px] w-[182px] h-[68px] flex flex-col
                    gap-[7.38px] opacity-100 pt-4 md:pt-2">
                  <div className='lg:flex flex-row flex  flex-col lg:flex-row w-full  items-center justify-center gap-2'>
                    <img src='/ease-drivelogo.png' className='lg:w-[64px] lg:h-[64px] w-[45px] h-[45px] lg:mr-2 ' />
                    <h1 className="font-inter text-gray-800 italic font-bold lg:text-[36px] text-[34px] leading-[100%]">
                      Ease Drive
                    </h1>

                  </div>

                </div>

                <div className="lg:w-[556px] lg:h-[540px] w-[347px]
             h-[429px]  lg:gap-4 opacity-100 pt-6 flex flex-col items-center">
                  <div>
                    <p className=" font-regular text-center text-gray-700 lg:text-[24px]
              text-[16px] font-inter lg:pb- pt-2">
                      Book safe, reliable campus shuttles or become a verified driver in minutes.
                    </p>
                  </div>

                  <RideOptionSelector />
                  {/* Content here */}
                </div>
                <div className="lg:mt-16 gap-8 opacity-100  ">

                  <div className='flex lg:gap-12 gap-12 items-center justify-center flex-row py-6'>
                    <a href="">
                      <p className=" font-medium text-center text-primary-700 
                  lg:text-[14px] text-[14px] font-inter pt-2">
                        Terms of use
                      </p>
                    </a>
                    <a href="">
                      <p className=" font-medium text-center text-primary-700 lg:text-[14px] text-[14px] font-inter   pt-2">
                        Privacy Policy
                      </p>
                    </a>

                  </div>
                </div>

              </div>

              <div className="lg:w-[528px] lg:h-[638px] md:block opacity-100 rounded-[45px]">
                <img src="/signup-banner.png" alt="Signup Banner " className='lg:w-[528px] lg:h-[623px] lg:rounded-[45px]' />
              </div>



            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
