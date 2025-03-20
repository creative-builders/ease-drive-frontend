import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { sendResetPasswordOTP } from '../../../store/auth/forgetPassword/api';
import LoadingSpinner from '../../../components/LoadingSpinner';
import toast from "react-hot-toast";

export const ForgotPassword = () => {
    const [formData, setFormData] = useState({ email: "" });
    const [isVerified, setIsVerified] = useState(false);

    const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const navigate = useNavigate();

    const { mutate: submitSendResetPasswordOTP, isLoading } = useMutation(sendResetPasswordOTP, {
        onSuccess: (response) => {
            setIsVerified(true); // ✅ Set success flag
            localStorage.setItem("userEmail", formData.email);
            setFormData({ email: "" });
            navigate("/Otp"); 
        },
        onError: (error) => {
            toast.error(error?.response?.data?.message === "No account associated with this email"? `${error?.response?.data?.message} enter email associated with this account ` : error?.response?.data?.message)
        },
    });

    const handleUpdateFormData = (e) => {
        setFormData((prev) => ({ ...prev, email: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isValidEmail(formData.email)) {
            alert("Please enter a valid email.");
            return;
        }
        submitSendResetPasswordOTP({ email: formData.email });
    };

    return (
        <div className='min-h-screen bg-gray-500'>
            <div className='w-11/12 mx-auto xl:w-8/12 px-2 py-4'>
                <h2 className="font-bold text-base text-center text-gray-950 mb-[51px]">
                    <Link to="/">EaseDrive</Link> 
                </h2>
                <h3 className="mb-4 text-xl text-gray-950 font-bold">Welcome back</h3>
                <p className="text-gray-600 mb-16">Recover your account.</p>

                <form onSubmit={handleSubmit}>
                    {isVerified && (
                        // <div className="border border-green-300 rounded-md text-green-700 p-2 mb-4">
                        //     Verification email sent! <br />
                        //     <Link to="/Otp" className="text-blue-500 underline">Go to OTP page</Link> {/* ✅ Navigate after success */}
                        // </div>
                        navigate("/Otp")
                    )}
                    <div className="mb-4">
                        <label htmlFor="email">Enter your email</label>
                        <input
                            className="p-4 rounded-lg w-full bg-gray-300"
                            type="email"
                            name="email"
                            id="email"
                            onChange={handleUpdateFormData}
                            value={formData.email}
                        />
                    </div>
                    {/* <Link to="/Otp" className="text-blue-500 underline"> */}
                        <button 
                            type="submit"
                            className={`inline-block mb-8 w-full p-4 rounded-lg ${
                                isValidEmail(formData.email) ? "bg-green-500" : "bg-green-200 cursor-not-allowed"
                            }`}
                            disabled={!isValidEmail(formData.email) || isLoading}
                        >
                            <span className="text-bold text-base text-white flex items-center justify-center">
                            { isLoading ? <LoadingSpinner className="animate-spin"/> : "Continue"}
                                </span>
                        </button>
                    {/* </Link>  */}
                </form>
            </div>
        </div>
    );
};
