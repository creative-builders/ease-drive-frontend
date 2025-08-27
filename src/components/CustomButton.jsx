import React from "react";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";


const CustomButton = ({
    extendedStyles,
    name = "Book Now",
    size = "sm",
    className = "",
    btnClick,
    navigateTo,
    navigateState,
    isLoading=false,
    disabled

}) => {
    const navigate = useNavigate();

    const sizes = {
    sm: 'text-xs lg:text-lg leading-normal',
    lg: 'text-base lg:text-lg leading-normal',
    }

    const sizeClasses = sizes[size];

     const handleClick = () => {
    if (navigateTo) {
      navigate(navigateTo, { state: navigateState });
    } else if (btnClick) {
      btnClick();
    }
  };
  
  return (
    <button 
     onClick={handleClick}
     className={`${sizeClasses} ${className} ${extendedStyles} flex items-center justify-center ${disabled ? "bg-primary-50 cursor-not-allowed text-primary-300" : "bg-primary-700"} text-gray-100 font-medium `}>
     {isLoading ? <LoadingSpinner className="animate-spin" /> : name}
     
    </button>
  )
}

export default CustomButton