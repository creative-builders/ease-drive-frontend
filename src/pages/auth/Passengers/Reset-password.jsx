import React from 'react'
import { Link } from "react-router-dom";
import Emoji from "../../../assets/images/update-password-emoji.svg"
import Backarrow from "../../../assets/icons/arrow.svg"

export default function ResetPassword() {
    
return (
    <div className='min-h-screen bg-[#F6F7F6]'>
        <div className='w-11/12 mx-auto xl:w-8/12 px-2 py-4 text-center'>
            <h2 className="font-[poppins] text-[#20AE3A] text-xl md:text-3xl font-bold mb-[51px]">
                <Link to="/">EaseDrive</Link> 
            </h2>
            <div className="flex items-center gap-2 justify-center">
            <h3 className="mb-4 text-2xl text-[#000000] font-medium font-[poppins] text-center leading-normal">Password Reset</h3>
            <img className='h-8 w-8 mt-[-20px]' src={Emoji} alt="" />
            </div>
            <p className="text-[#444444] font-medium mb-16 text-sm md:text-base text-center">Your reset password don finally dey successfully. <br />Click here make you continue dey enjoy our services.</p>

            <form >
                
                <Link to="/login">
                    <button
                            type="submit"
                            className='mb-8 w-full  p-4 rounded-lg bg-green-500 text-bold text-base text-white'
                        >
                            Continue
                    </button>
                </Link> 

                
            </form>

            <Link className='flex gap-2 w-40 mx-auto' to={'/login'}>
                <img src={Backarrow} alt="" />
                <p className='font-[poppins] font-normal text-base'>back to log in</p>
            </Link>
           
        </div>
        
    </div>
)
}

