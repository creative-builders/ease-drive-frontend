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
    children,
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
     className={`${sizeClasses} ${className} ${extendedStyles} flex items-center justify-center bg-green-300 text-gray-100 font-bold `}>
     {/* {isLoading ? <LoadingSpinner className="animate-spin" /> : name} */}
     {isLoading ? (
        <LoadingSpinner className="animate-spin" />
      ) : (
        children || name
      )}
    </button>
  )
}

export default CustomButton