import React, { useState } from 'react'
import { Link } from "react-router-dom";

export const Otp = () => {
    const [otp, setOtp] = useState(["","","",""]);

    const handleChange = (index, e) => {
        const value = e.target.value;
        if (!/^\d?$/.test(value)) return;
    
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);
    
        if (value && index < 3) {
            document.getElementById(`otp-${index + 1}`).focus();
        }

        if (!value && index > 0 && e.nativeEvent.inputType === "deleteContentBackward") {
            document.getElementById(`otp-${index - 1}`).focus();
        }
    };
    
    
    const isOtpComplete = otp.every((digit) => digit !== "");

  return (
    <div className='min-h-screen bg-gray-500'>
      <div  className='w-11/12 mx-auto xl:w-8/12 px-2 py-4'>
            <h2 className="font-bold text-base text-center text-gray-950 mb-[51px]">
                <Link to="/">EaseDrive</Link>
            </h2>
            <div className="headingitems">
                <p className="mb-4 text-xl text-gray-950 font-bold">OTP Verification</p>
                <span className="text-gray-600 mb-16">Enter the OTP sent to <span class="link">nanocodes.ng@gmail.com</span></span>
                
            </div>
            
            <div className="h-16 w-full md:w-2/5 flex items-center justify-around mt-10 mb-10 mx-auto">
                
                {otp.map((digit, index) => (
                <input
                key={index}
                id={`otp-${index}`}
                className="h-14 w-[20%] rounded-md text-center text-[20px] border border-gray-300 focus:border-green-500 focus:outline-none"
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(index, e)}
                />
                    ))}
            </div>

            <button
                className={`mb-8 w-full mx-auto p-4 rounded-lg ${
                    isOtpComplete ? "bg-green-500" : "bg-green-200 cursor-not-allowed"
                }`}
                disabled={!isOtpComplete}
                >
                <Link to={isOtpComplete ? "/ChangePassword" : "#"}>
                    <span className="font-bold text-base text-white">Continue</span>
                </Link>
            </button>

            <div className="flex justify-center gap-x-2">
                <p className="details">Didn't receive the OTP? <a href="#" className="text-green-300" id="resendOtp">Resend OTP</a></p>
                {/* <button>verify otp</button> */}
            </div>
      </div>
    </div>
  )
}

{/* <input className='h-14 w-[20%] rounded-md text-center text-[20px]' id="input" type="text" maxlength="1" />
    <input className='h-14 w-[20%] rounded-md text-center text-[20px]' type="text" maxlength="1" />
    <input className='h-14 w-[20%] rounded-md text-center text-[20px]' type="text" maxlength="1" />
    <input className='h-14 w-[20%] rounded-md text-center text-[20px]' type="text" maxlength="1" /> */}