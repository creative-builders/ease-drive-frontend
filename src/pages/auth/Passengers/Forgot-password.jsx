import React, { useState } from 'react'
import { Link } from "react-router-dom";
import LoadingSpinner from "../../../components/LoadingSpinner";
import { sendResetPasswordOTP } from '../../../store/auth/general/api.js';
import { useMutation } from "@tanstack/react-query";

export const ForgotPassword = () => {
    
    const [email, setEmail] = useState("");

    const isValidEmail = (email) =>{
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    const { mutate:submitSendResetPasswordOTP, isLoading } = useMutation(sendResetPasswordOTP, {
            onSuccess: (response) => {
            toast.success(response?.message);
            navigate("/otp");
            setInputs( prev => ({
            ...prev,
            email:"",
            }))
    
            },
            onError : (error) => {
            toast.error(error.message)
            }
        })
    
        const handleSubmit = (e) => {
            e.preventDefault();
            submitSendResetPasswordOTP(inputs)
    
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
                <div className="mb-4">
                    <label htmlFor="email">Enter your email</label>
                    <input 
                    className="p-4 rounded-lg w-full bg-gray-300"
                    type="email"
                    name="email"
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                
                {/* <div className="flex mb-4 items-center gap-2 before:flex-1 before:border-gray-950 before:border-t after:flex-1 after:border-gray-950 after:border-t"> OR</div> */}
                    
                <Link 
                    to={isValidEmail(email) ? '/Otp' : '#'} 
                    onClick={(e) => !isValidEmail(email) && e.preventDefault()}
                >
                    <button 
                    className={`inline-block mb-8 w-full p-4 rounded-lg ${isValidEmail(email) ? "bg-green-500" : "bg-green-200 cursor-not-allowed"}`}
                    disabled={!isValidEmail(email)}
                    >
                    <span className="text-bold text-base text-white">
                         { isLoading ? <LoadingSpinner className="animate-spin"/> : "Contiune" }
                    </span>
                    </button>
                </Link>


            </form>
        </div>

    </div>
  )
}
