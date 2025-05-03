import LoadingSpinner from "./LoadingSpinner";


const CustomButton = ({
    extendedStyles,
    name = "Book Now",
    size = "sm",
    className = "",
    btnClick,
    isLoading=false
}) => {

 const sizes = {
	sm: 'text-base leading-normal',
	md: 'text-xl leading-normal',
    }

    const sizeClasses = sizes[size];
  
  return (
    <button 
     onClick={btnClick}
     className={`${sizeClasses} ${className} ${extendedStyles} flex items-center justify-center bg-green-300 text-gray-100 font-bold `}>
     {isLoading ? <LoadingSpinner className="animate-spin" /> : name}
    </button>
  )
}

export default CustomButton