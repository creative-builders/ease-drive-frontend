import React from 'react'
import RideOptionSelector from "./RideOptionSelector"

export const SignupOptions = () => {
  return (
 <div lassName="bg-[#FDFDFD] min-h-screen">
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white lg:w-[1216px] lg:h-[830px] max-990:w-[90%] max-990:h-[90vh] max-990:m-auto opacity-100 flex flex-row items-center">
        <div className="lg:w-[637px] lg:h-[765px] max-990:w-[100%] max-990:h-[90vh] max-990:m-auto max-990:flex max-990:justify-center max-990:items-center max-990:ml-0
         ml-6  p-5 gap-8 opacity-100 bg-white flex flex-col items-center justify-center">
          <div className="lg:w-[556px] lg:h-[59px] max-990:w-[182px] max-990:h-[108px] max-990:flex max-990:flex-col
           gap-[7.38px] opacity-100 ">
            <div className='flex flex-row max-990:flex max-990:flex-col w-full  items-center justify-center gap-2'>
              <img src='/logocar.svg' className='lg:w-[65px] lg:h-[59px]' />
              <h1 className="font-inter text-[#1E1E1E] italic font-bold lg:text-[36px] max-990:text-[34px] leading-[100%]">
                Ease Drive
              </h1>
              
            </div>

          </div>


          <div className="lg:w-[556px] lg:h-[540px] max-990:w-[347px] max-990:h-[429px]  lg:gap-4 opacity-100 flex flex-col items-center">
            <div>
              <p className=" font-regular text-center text-[#333333] lg:text-[24px] max-990:text-[16px] font-inter lg:pb- pt-2">
                Book safe, reliable campus shuttles or become a verified driver in minutes.
              </p>
            </div>

            <RideOptionSelector />
            {/* Content here */}
          </div>
          <div className="lg:w-[556px] lg:h-[125px] max-990:pt-12 gap-8 opacity-100 ">

            <div className='flex lg:gap-12 max-990:gap-12 items-center justify-center flex-row py-6'>
             <a href="">
              <p className=" font-medium text-center text-primary-700 lg:text-[14px] max-990:text-[14px] font-inter pt-2">
                Terms of use
              </p>
              </a> 
              <a href="">
                <p className=" font-medium text-center text-primary-700 lg:text-[14px] max-990:text-[14px] font-inter   pt-2">
                Privacy Policy
              </p>
              </a>
              
            </div>
          </div>

        </div>

        <div className="lg:w-[617px] lg:h-[765px] max-990:hidden lg:p-5 gap-8 opacity-100  flex items-center justify-center">
          <img src="/optionimg.png" alt="" className='lg:w-[528px] lg:h-[623px] lg:rounded-[45px]' />
        </div> 
       


      </div>
    </div>
</div>
  )
}
