

const CustomButton = ({
    extendedStyles,
    name = "Book Now",
    size = "sm",
    btnClick
}) => {

 const sizes = {
	sm: 'text-base leading-normal',
	md: 'text-xl leading-normal',
    }

    const sizeClasses = sizes[size];
  
  return (
    <button 
     onClick={btnClick}
     className={`${extendedStyles} ${sizeClasses} p-2 lg:p-4 inner-block rounded-lg bg-green-300 text-gray-100 font-bold `}>
     {name}
    </button>
  )
}

export default CustomButton