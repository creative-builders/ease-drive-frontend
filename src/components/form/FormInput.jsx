// import { useState, isValidElement, cloneElement } from "react";
import { useState } from "react";

import { FiEye, FiEyeOff } from "react-icons/fi";
import { EyeOpenIcon } from "../../assets/icons/EyeOpenIcon";
import { EyeCloseIcon } from "../../assets/icons/EyeCloseIcon";


export default function FormInput({
  label,
  type = "",
  id,
  name,
  value,
  onChange,
  placeholder,
  required,
  error,
  className = "",
  leftIcon,
  rightIcon,
  inputClassName = "",
}) {
  const [showPassword, setShowPassword] = useState(false);
  const isPasswordType = type === "password";

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  // Determine which icon to show
  const visibilityIcon = showPassword ?  <EyeOpenIcon size={16} /> : <EyeCloseIcon size={16} />;

  return (
    <div className={`mb-4 ${className}`}>
      {label && (
        <label htmlFor={id} className="block text-[14px] font-medium mb-2">
          {label}
        </label>
      )}
      <div className="relative">
        {leftIcon && (
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            {leftIcon}
          </span>
        )}
        <input
          type={isPasswordType && showPassword ? "text" : type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          placeholder={placeholder}
          className={`w-full px-5 py-2 border border-gray-300 rounded-2xl focus:outline-none placeholder-gray-200 ${
            leftIcon ? "pl-10" : ""
          } ${rightIcon ? "pr-10" : ""} ${inputClassName}`}
        />
        {isPasswordType && rightIcon && (
          <span
            className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
            onClick={togglePasswordVisibility}
          >
            {visibilityIcon}
          </span>
        )}
        {/* {!isPasswordType && rightIcon && (
          <span className="absolute inset-y-0 right-0 flex items-center pr-3">
            {rightIcon}
          </span>
        )} */}
        {type !== "password" && rightIcon && (
          <span className="absolute inset-y-0 right-0 flex items-center pr-3">
            {rightIcon}
          </span>
        )}
      </div>
      {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
    </div>
  );
}


import { useState } from "react";

import { FiEye, FiEyeOff } from "react-icons/fi";


export default function FormInput({
  label,
  type = "",
  id,
  name,
  value,
  onChange,
  placeholder,
  required,
  error,
  className = "",
  leftIcon,
  rightIcon,
  inputClassName = "",
}) {
  const [showPassword, setShowPassword] = useState(false);
  const isPasswordType = type === "password";

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  // Determine which icon to show
  const visibilityIcon = showPassword ?  <FiEyeOff size={16} /> : <FiEye size={16} />;

  return (
    <div className={`mb-4 ${className}`}>
      {label && (
        <label htmlFor={id} className="block text-[14px] font-medium leading-normal not-italic mb-2">
          {label}
        </label>
      )}
      <div className="relative">
        {leftIcon && (
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            {leftIcon}
          </span>
        )}
        <input
          type={isPasswordType && showPassword ? "text" : type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          placeholder={placeholder}
          className={`w-full px-5 py-2 border border-gray-300 rounded-2xl focus:outline-none focus:border-gray-300 focus:ring-0 placeholder-[#AEAEB2] ${
            leftIcon ? "pl-10" : ""
          } ${rightIcon ? "pr-10" : ""} ${inputClassName}`}
        />
        {isPasswordType && rightIcon && (
          <span
            className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
            onClick={togglePasswordVisibility}
          >
            {visibilityIcon}
          </span>
        )}
        {/* {!isPasswordType && rightIcon && (
          <span className="absolute inset-y-0 right-0 flex items-center pr-3">
            {rightIcon}
          </span>
        )} */}
        {type !== "password" && rightIcon && (
          <span className="absolute inset-y-0 right-0 flex items-center pr-3">
            {rightIcon}
          </span>
        )}
      </div>
      {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
    </div>
  );
}
