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
    children
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
     className={`${sizeClasses} ${className} ${extendedStyles} flex items-center justify-center bg-green-700 text-gray-100 font-medium`}>
     {isLoading ? <LoadingSpinner className="animate-spin" /> : name}
     {children}
    </button>
  )
}

export default CustomButton