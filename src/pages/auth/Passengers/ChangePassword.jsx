import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";

export const ChangePassword = () => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const[togglePassword,setTogglePassword] = useState(false);
    const [toggleConfirmPassword, setToggleConfirmPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    
    const handleTogglePassword = () => {
        setTogglePassword(prev => !prev)
    }

    const handleToggleConfirmPassword = () => {
        setToggleConfirmPassword(prev => !prev);
    };

    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/;

    const isPasswordValid = passwordRegex.test(password);
  
    const isFormValid = isPasswordValid && password === confirmPassword;

  return (
    <div className='min-h-screen bg-gray-500'>
        <div className='w-11/12 mx-auto xl:w-8/12 px-2 py-4'>
            <h2 className="font-bold text-base text-center text-gray-950 mb-[51px]">
                <Link to="/">EaseDrive</Link>
            </h2>
            <h3 className="mb-4 text-xl text-gray-950 font-bold">Welcome back</h3>
            <p className="text-gray-600 mb-16">Enter a new Password</p>

            <form onSubmit={handleSubmit}>
                <div className="mb-[30px] relative">
                    <label className="text-gray-400 mb-2 block" htmlFor="new-password">
                    New Password
                    </label>
                    <input
                    className="p-4 rounded-lg w-full bg-gray-300"
                    type={togglePassword ? "text" : "password"}
                    name="new-password"
                    id="new-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                    <span
                    onClick={handleTogglePassword}
                    className="inline-block absolute right-4 top-1/2 cursor-pointer translate-y-1/2"
                    >
                    {togglePassword ? <FiEyeOff fontSize={"18"} /> : <FiEye fontSize={"18"} />}
                    </span>
                    {/* Password validation message */}
                    {!isPasswordValid && password.length > 0 && (
                    <p className="text-red-500 text-sm mt-1">
                        Password must contain at least:
                        <br />• 1 uppercase letter
                        <br />• 1 number
                        <br />• 1 special character
                        <br />• Minimum 6 characters
                    </p>
                    )}
                </div>

                <div className="mb-[30px] relative">
                    <label className="text-gray-400 mb-2 block" htmlFor="confirm-password">
                    Confirm Password
                    </label>
                    <input
                    className="p-4 rounded-lg w-full bg-gray-300"
                    type={toggleConfirmPassword ? "text" : "password"}
                    name="confirm-password"
                    id="confirm-password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <span
                    onClick={handleToggleConfirmPassword}
                    className="inline-block absolute right-4 top-1/2 cursor-pointer translate-y-1/2"
                    >
                    {toggleConfirmPassword ? <FiEyeOff fontSize={"18"} /> : <FiEye fontSize={"18"} />}
                    </span>

                    {/* Password match message */}
                    {confirmPassword.length > 0 && password !== confirmPassword && (
                    <p className="text-red-500 text-sm mt-1">Passwords do not match</p>
                    )}
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className={`inline-block mb-8 w-full p-4 rounded-lg transition-all duration-300 ${
                    isFormValid ? "bg-green-600 hover:bg-green-700" : "bg-green-200 cursor-not-allowed"
                    }`}
                    disabled={!isFormValid}
                >
                    <span className="text-bold text-base text-white">Submit</span>
                </button>
            </form>
        </div>
    </div>
  )
}
