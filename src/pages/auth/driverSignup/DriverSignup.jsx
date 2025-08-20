import React from "react";
import {DriverSignupForm} from "./DriverSignupForm"; // Reuse the form component
// import carImage from "/optionimg.png"; // Replace with your image path

export const DriverSignup = () => {
    return (

        <div className="bg-white lg:w-[1264px] lg:h-[1077px] 
        h-[100%] w-[100%] m-auto justify-center items-center pt-6 pb-6 
        justify-center items-center lg:flex lg:flex-row
        flex-col lg:opacity-100 flex flex-row">
            {/* Your content goes here */}
            <div className=" lg:flex lg:w-[669px] lg:h-[1077px] m-auto items-center  
            h-[100%] w-[90%]  pt-4 pb-4  lg:pt-[80px] lg:pr-[39px] lg:pb-[40px] lg:pl-[39px] 
            lg:gap-[32px] lg:opacity-100">
                {/* Content goes here */}
                <DriverSignupForm />
            </div>
            <div className="lg:w-[528px] lg:h-[881px] hidden md:block lg:p-5 gap-8 opacity-100 
             flex items-center justify-center">
                <img src="/signup-banner-l.png" alt="Signup banner" className=' lg:rounded-[45px]' />
            </div>

        </div>


    );
};

