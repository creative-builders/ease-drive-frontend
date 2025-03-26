import { useNavigate } from "react-router-dom"
import CustomButton from "../../components/CustomButton"


const Menu = () => {
    const navigate = useNavigate();

    const handleButtonClick = (path) => navigate(path);

  return (
    <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-green-300">EaseDrive</h2>
        <div>
            <CustomButton 
            name="Create Account"
            extendedStyles={"rounded-full p-2 lg:p-4 text-xs lg:text-base font-bold"}
            btnClick={() => handleButtonClick("/signup-as")}
            />
        </div>
    </div>
  )
}

export default Menu