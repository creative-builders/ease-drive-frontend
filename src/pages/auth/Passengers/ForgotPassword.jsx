import React from 'react'
import { Link } from "react-router-dom";

export const ForgotPassword = () => {
  return (
    <div className='min-h-screen bg-gray-500'>
        <div className='w-11/12 mx-auto xl:w-8/12 px-2 py-4'>
            <h2 className="font-bold text-base text-center text-gray-950 mb-[51px]">
                <Link to="/">EaseDrive</Link>
            </h2>
            <h3 className="mb-4 text-xl text-gray-950 font-bold">Welcome back</h3>
            <p className="text-gray-600 mb-16">Recover your account.</p>

            
            <form>
                <div className="mb-4">
                    <label htmlFor="email">Enter your email</label>
                    <input 
                    className="p-4 rounded-lg w-full bg-gray-300"
                    type="email"
                    name="email"
                    id="email"
                    // onChange={handleUpdateFormData}
                    // value={formData.email}
                    />
                </div>
                
                {/* <div className="flex mb-4 items-center gap-2 before:flex-1 before:border-gray-950 before:border-t after:flex-1 after:border-gray-950 after:border-t"> OR</div> */}

                <button 
                 className="inline-block mb-8 w-full p-4 bg-green-200 rounded-lg">
                    <Link to={'/Otp'}>
                    <span className="text-bold text-base text-white">Contiune</span>
                    </Link>
                </button>
                

                
                {/* <div className="flex justify-center gap-x-2">
                    <p>Don't have an account ?</p>
                    <Link to="/passenger-signup" className="text-green-300">Sign Up</Link>
                </div> */}

            </form>
        </div>

    </div>
  )
}
