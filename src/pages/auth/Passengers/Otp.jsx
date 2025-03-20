import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { verifyResetPssowordOTP } from '../../../store/auth/otp/api';

export const Otp = () => {

    const [formData] = useState({ email: "" });

    localStorage.getItem("userEmail", formData.email);

    const [otp, setOtp] = useState(["", "", "", "",""]);
    const navigate = useNavigate();

    const handleChange = (index, e) => {
        const value = e.target.value;
        if (!/^\d?$/.test(value)) return;
    
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);
    
        if (value && index < 4) {
            document.getElementById(`otp-${index + 1}`).focus();
        }
    
        if (!value && index > 0 && e.nativeEvent.inputType === "deleteContentBackward") {
            document.getElementById(`otp-${index - 1}`).focus();
        }
    };

    const isOtpComplete = otp.every((digit) => digit !== "");

    const { mutate: submitverifyResetPssowordOTP, isLoading } = useMutation(verifyResetPssowordOTP, {
        onSuccess: (response) => {
            // alert("OTP Verified Successfully!");
            navigate("/Change-password");
            
        },
        onError: (error) => {
            alert(error?.response?.data?.message || "Invalid OTP. Please try again.");
        },
    });


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isOtpComplete) {
            alert("Please enter the full OTP.");
            return;
        }
        submitverifyResetPssowordOTP({ otp: otp.join("") });
    };

    return (
        <div className='min-h-screen bg-gray-500'>
            <div className='w-11/12 mx-auto xl:w-8/12 px-2 py-4'>
                <h2 className="font-bold text-base text-center text-gray-950 mb-[51px]">
                    <Link to="/">EaseDrive</Link>
                </h2>
                <div className="headingitems">
                    <p className="mb-4 text-xl text-gray-950 font-bold">OTP Verification</p>
                    <span className="text-gray-600 mb-16">Enter the OTP sent to <span className="link">{ formData.email}</span></span>
                </div>
                
                <form className='md:w-3/5 m-auto' onSubmit={handleSubmit}>
                    <div className="h-16 w-full  flex items-center justify-around mt-10 mb-10 mx-auto">
                        {otp.map((digit, index) => (
                            <input
                                key={index}
                                id={`otp-${index}`}
                                className="h-14 w-[15%] rounded-md text-center text-[20px] border border-gray-300 focus:border-green-500 focus:outline-none"
                                type="text"
                                maxLength="1"
                                value={digit}
                                onChange={(e) => handleChange(index, e)}
                            />
                        ))}
                    </div>
                    <Link to="/Change-password" className="text-blue-500 underline">
                        <button
                            type="submit"
                            className={`mb-8 w-full  p-4 rounded-lg ${
                                isOtpComplete ? "bg-green-500" : "bg-green-200 cursor-not-allowed"
                            }`}
                            disabled={!isOtpComplete || isLoading}
                        >
                            {isLoading ? "Verifying..." : <span className="font-bold text-base text-white">Continue</span>}
                        </button>
                    </Link>
                </form>

                <div className="flex justify-center gap-x-2">
                    <p className="details">
                        Didn't receive the OTP? <a href="#" className="text-green-300" id="resendOtp">Resend OTP</a>
                    </p>
                </div>
            </div>
        </div>
    );
};
