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
    // style={{background:`${bgColor}`}}
    className={`relative mb-[42px] border p-4 border-2 border-green-300 rounded-2xl inline-block rounded min-h-[471px] w-[392px] mx-auto overflow-x-hidden`}>
    <div 
    style={{background:`url(${imgSrc}) no-repeat lightgray 50% / contain`}}
    className="mb-4 min-h-[260px] w-full rounded-t-[24px]">
        {/* This div has no content as it serves for the background purpose */}
    </div>
    <div className="absolute left-0 bottom-4 mx-4 p-4 bg-white min-h-[193px] rounded-[24px] p-2">
     <h3 className="mb-2 text-left text-base xl:text-xl font-bold text-gray-900">{title}</h3>
    <p className="mb-2 text-[#666464] text-left text-xs font-normal text-gray-900 lg:text-base">{description}</p>
    <CustomButton
     title={"Book Now"}
     extendedStyles={"flex p-2 xl:p-4 rounded-lg"}
     btnClick={() => navigate('/login')}
    />
     </div>
    </div>
  )
}

export default ServiceCard