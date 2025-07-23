import React from "react";
import {DriverSignupForm} from "./DriverSignupForm"; // Reuse the form component
// import carImage from "/optionimg.png"; // Replace with your image path

export const DriverSignup = () => {
    return (

        <div className="bg-white lg:w-[1264px] lg:h-[1077px] 
        max-990:h-[100%] max-990:w-[90%] m-auto  max-990:pt-6 max-990:pb-6 max-990:justify-center max-990:items-center 
        max-990:flex-col lg:opacity-100 flex flex-row">
            {/* Your content goes here */}
            <div className=" lg:flex lg:w-[669px] lg:h-[1077px] max-990:m-auto max-990:items-center  
            max-990:h-[100%] max-990:w-[90%]  max-990:pt-4 max-990:pb-4  lg:pt-[40px] lg:pr-[39px] lg:pb-[40px] lg:pl-[39px] 
            lg:gap-[32px] lg:opacity-100">
                {/* Content goes here */}
                <DriverSignupForm />
            </div>
            <div className="lg:w-[669px] lg:h-[1000px] max-990:hidden lg:p-5 gap-8 opacity-100  flex items-center justify-center">
                <img src="/optionimg.png" alt="" className='lg:w-[528px] lg:h-[800px] lg:rounded-[45px]' />
            </div>

        </div>


    );
};

