import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useMutation } from "@tanstack/react-query";
import { resetPassword } from '../../../store/auth/changePass/api';
import toast from "react-hot-toast";

export const ChangePassword = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ password: "", confirmPassword: "" });
    const [togglePassword, setTogglePassword] = useState(false);
    const [toggleConfirmPassword, setToggleConfirmPassword] = useState(false);

    const handleTogglePassword = () => setTogglePassword(prev => !prev);
    const handleToggleConfirmPassword = () => setToggleConfirmPassword(prev => !prev);

    const isPasswordValid = formData.password.length >= 6;
    const doPasswordsMatch = formData.password === formData.confirmPassword;
    const isFormValid = isPasswordValid && doPasswordsMatch;

    const { mutate: submitResetPassword, isLoading } = useMutation(resetPassword, {
        onSuccess: () => {
            setFormData({ password: "", confirmPassword: "" });
            navigate("/login");
        },
        onError: (error) => {
            toast.error(error.message);
        }
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isFormValid) {
            submitResetPassword({ newPassword: formData.password, confirmNewPassword: formData?.confirmPassword });
        }
    };

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
                        <label className="text-gray-400 mb-2 block" htmlFor="new-password">New Password</label>
                        <input
                            className="p-4 rounded-lg w-full bg-gray-300"
                            type={togglePassword ? "text" : "password"}
                            id="new-password"
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        />
                        <span
                            onClick={handleTogglePassword}
                            className="inline-block absolute right-4 top-1/2 cursor-pointer translate-y-1/2"
                        >
                            {togglePassword ? <FiEyeOff fontSize={"18"} /> : <FiEye fontSize={"18"} />}
                        </span>
                    </div>

                    <div className="mb-[30px] relative">
                        <label className="text-gray-400 mb-2 block" htmlFor="confirm-password">Confirm Password</label>
                        <input
                            className="p-4 rounded-lg w-full bg-gray-300"
                            type={toggleConfirmPassword ? "text" : "password"}
                            id="confirm-password"
                            value={formData.confirmPassword}
                            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                        />
                        <span
                            onClick={handleToggleConfirmPassword}
                            className="inline-block absolute right-4 top-1/2 cursor-pointer translate-y-1/2"
                        >
                            {toggleConfirmPassword ? <FiEyeOff fontSize={"18"} /> : <FiEye fontSize={"18"} />}
                        </span>
                    </div>

                    <button
                        type="submit"
                        className={`inline-block mb-8 w-full p-4 rounded-lg transition-all duration-300 
                             ${isFormValid ? "bg-green-500 hover:bg-green-600 cursor-pointer" : "bg-green-200 cursor-not-allowed"}
                            `}
                        disabled={!isFormValid || isLoading}
                    >
                        <span className="text-bold text-base text-white">{isLoading ? "Submitting..." : "Submit"}</span>
                    </button>
                </form>
            </div>
        </div>
    );
};
