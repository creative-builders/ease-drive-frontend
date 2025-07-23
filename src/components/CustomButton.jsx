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
    isLoading=false
}) => {
    const navigate = useNavigate();

    const sizes = {
    sm: 'text-base leading-normal',
    md: 'text-xl leading-normal',
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
     className={`${sizeClasses} ${className} ${extendedStyles } text-center bg-green-700 text-white rounded-xl py-4 text-[18px] font-bold disabled:opacity-50 `}>
     {isLoading ? <LoadingSpinner className="animate-spin" /> : name}
    </button>
  )
}

export default CustomButton