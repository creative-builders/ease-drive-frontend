

const CustomButton = ({
    extendedStyles,
    name = "Learn More",
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
     className={`${extendedStyles} ${sizeClasses} px-3 py-2 lg:px-4 lg:py-4  inner-block rounded-lg bg-green-300 text-gray-100 font-bold `}>
     {name}
    </button>
  )
}

export default CustomButton