import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { EyesOpen } from "../assets/icons/EyesOpen";
export const CustomInputField = ({
    label,
    iconSrc, // instead of icon: Icon
    placeholder,
    type = "text",
    value,
    onChange,
    name,
    children,
    onFormChange
}) => {
    const [showPassword, setShowPassword] = useState(false);
    const isPassword = type === "password";

    return (
        <div>
            <label className="block lg:text-[18px] mb-1 text-[16px] w-full font-medium text-gray-800">{label}</label>
            <div className="flex items-center border border-[#A1A1A1] w-full lg:rounded-[10px] 
           rounded-[8px] px-4 py-1 lg:px-4 lg:py-2">
                <div className="lg:w-[32px] lg:h-[32px] w-[18px] h-[18px] mr-1">
                    {children}
                </div>
                <input
                    type={isPassword && showPassword ? "text" : type}
                    placeholder={placeholder}
                    value={value}
                    name={name}
                    onChange={onFormChange}
                    className="w-full border-none outline-none focus:outline-none focus:ring-0 
             placeholder-placeholder  lg:text-[18px] text-[12px] font-inter"
                />
                {isPassword && (
                    <span
                        className="ml-2 cursor-pointer"
                        onClick={() => setShowPassword((prev) => !prev)}
                    >
                        {showPassword ? (
                            <FiEyeOff className="text-gray-400" />
                        ) : (
                            <EyesOpen className="text-gray-400" />
                        )}
                    </span>
                )}
            </div>
        </div>
    );
};
