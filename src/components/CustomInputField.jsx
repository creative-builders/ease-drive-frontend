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
    children
}) => {
    const [showPassword, setShowPassword] = useState(false);
    const isPassword = type === "password";

    return (
        <div>
            <label className="block lg:text-[18px] mb-1 max-990:text-[16px] w-full font-medium text-[#333333]">{label}</label>
            <div className="flex items-center border border-[#A1A1A1] w-full lg:rounded-[16px] max-990:rounded-[8px] max-990:px-4 max-990:py-1 lg:px-4 lg:py-3">
                <div className="lg:w-[32px] lg:h-[32px] max-990:w-[18px] max-990:h-[18px]  mt-[6px]">
                        {children}
                    </div>
                <input
                    type={isPassword && showPassword ? "text" : type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    className="w-full border-none outline-none focus:outline-none focus:ring-0 
             placeholder-placeholder  lg:text-[18px] max-990:text-[12px] font-inter"
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
