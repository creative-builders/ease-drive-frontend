import React from 'react'
import { Link } from "react-router-dom";
import Emoji from "../../../assets/images/confirm-email-emoji.svg"
import Backarrow from "../../../assets/icons/arrow.svg"

export default function CheckEmailFile() {
    
return (
    <div className='min-h-screen bg-[#F6F7F6]'>
        <div className='w-11/12 mx-auto xl:w-8/12 px-2 py-4'>
            <h2 className="font-[poppins] text-[#20AE3A] text-xl md:text-4xl font-bold text-center mb-[51px]">
                <Link to="/">EaseDrive</Link> 
            </h2>
            <div className="flex items-center gap-2 justify-center">
            <h3 className="mb-4 text-2xl text-[#000000] font-medium font-[poppins] text-center leading-normal">Forget Password</h3>
            <img className='h-8 w-8 mt-[-20px]' src={Emoji} alt="" />
            </div>
            <p className="text-[#444444] font-medium mb-16 text-sm md:text-base text-center">Abeg no Vex, we’ll send you Instructions on how to get a new password</p>

            <form >
                
                {/* <Link to="/Otp" className="text-blue-500 underline"> */}
                <a 
                    href="https://mail.google.com/mail/u/0/#inbox" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block mb-8 w-full p-4 rounded-lg bg-green-500 text-white text-center"
                    >
                    Open email app
                </a>
                    
                {/* </Link>  */}

                
            </form>
            <Link 
                    to="/Otp"
                    className="w-full mx-auto p-2 rounded-lg bg-transparent text-[#20AE3A] text-center"
                >
                    Continue to enter OTP
            </Link>
           
        </div>
        <Link className='flex gap-2 w-40 mx-auto' to={'/login'}>
            <img src={Backarrow} alt="" />
            <p className='font-[poppins] font-normal text-base'>back to log in</p>
        </Link>
    </div>
)
}

