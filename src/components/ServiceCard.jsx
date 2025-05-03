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
    className={`relative mb-[42px] border p-4 border-2 border-green-300 rounded-2xl inline-block rounded min-h-[471px] xl:min-h-[672px] w-full overflow-x-hidden`}>
    <div 
    style={{background:`url(${imgSrc}) no-repeat lightgray 50% / cover`}}
    className="mb-4 min-h-[260px] xl:min-h-[472px] w-full rounded-t-[24px]">
        {/* This div has no content as it serves for the background purpose */}
    </div>
    <div className="absolute left-0 bottom-4 mx-4 p-4 bg-white min-h-[193px] xl:min-h-[248px] rounded-[24px] p-2">
     <h3 className="mb-2 text-left text-base xl:text-xl font-bold text-gray-900">{title}</h3>
    <p className="mb-2 text-[#666464] text-left text-xs font-normal text-gray-900 lg:text-base">{description}</p>
    <CustomButton
     extendedStyles={"flex p-2 xl:p-4 rounded-lg"}
     btnClick={() => navigate('/login')}
    />
     </div>
    </div>
  )
}

export default ServiceCard