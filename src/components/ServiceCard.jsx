import { useNavigate } from "react-router-dom"
import CustomButton from "./CustomButton"



const ServiceCard = ({
 imgSrc,
 bgColor,
 title,
 description,
}) => {
  const navigate = useNavigate();
  return (
    <div 
    style={{background:`${bgColor}`}}
    className={`mb-[42px] inline-block rounded min-h-[392px] w-full mx-auto overflow-x-hidden`}>
    <div 
    style={{background:`url(${imgSrc}) no-repeat lightgray 50% / contain`}}
    className="mb-4 h-[340px] w-full rounded">
        {/* This div has no content as it serves for the background purpose */}
    </div>
     <div className="p-4">
     <h3 className="mb-[13px] text-left text-2xl font-bold text-gray-900 lg:text-[2rem] ">{title}</h3>
    <p className="mb-[18px] text-left text-xs font-normal text-gray-900 lg:text-base">{description}</p>
    <CustomButton
     title={"Book Now"}
     extendedStyles={"flex mb-4"}
     btnClick={() => navigate('/login')}
    />
     </div>
    </div>
  )
}

export default ServiceCard