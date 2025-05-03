
const DropDown = ({ setIsOpen }) => {
    return(
        <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="13" 
        height="8" 
        viewBox="0 0 13 8" 
        fill="none"
        className='lg:ml-6 cursor-pointer'
        onClick={() => {
            console.log("Dropdown clicked"); 
            setIsOpen(true);
          }}
        >
        <path d="M6.36391 5.06105L11.3137 0.111328L12.7279 1.52554L6.36391 7.88955L0 1.52554L1.41421 0.111328L6.36391 5.06105Z" fill="black"/>
        </svg>
    )
}
export default DropDown