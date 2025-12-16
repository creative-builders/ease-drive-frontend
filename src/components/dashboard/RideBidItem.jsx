import { useNavigate } from "react-router-dom";
import { RidesLocationIcon } from "../../assets/icons/RidesLocationIcon";
import useIsMobile from "../../hooks/useIsMobile";
import { trimText } from "../../utils/trimeText";
import CustomButton from "../CustomButton";


export const RideBidItem = ({ rideBid }) => {
   const isMobile = useIsMobile(1024);
   const navigate = useNavigate();
  return(
       <div className="cursor-pointer border-b border-neutral-100 py-4">
        <div className="flex justify-between items-center w-full">
          <div className="mb-1 lg:mb-0 flex items-center gap-x-4">
            <div className="w-[50px] h-[50px] lg:w-[80px] lg:h-[80px] shrink-0 rounded-full overflow-hidden">
                <img loading="lazy" className="h-full w-full object-cover" src={rideBid?.bidder?.profileImage} alt={rideBid?.bidder?.name} />
            </div>
             <div className="flex flex-col lg:flex-row justify-between lg:w-[610px]">
               <div>
                 <div className="mb-1 lg:mb-4">
                    <h3 className="text-xs lg:text-base capitalize font-semibold text-gray-900">{rideBid?.bidder?.name}</h3>
                </div>
                <div className="flex flex-col lg:items-center lg:flex-row gap-x-4">
                    <div className="flex items-center">
                        <RidesLocationIcon className="lg:block w-[18px] h-[18px]"/>
                        <span className="font-normal text-[12px]">20 mins away from you</span>
                  </div>
                  <p className="font-medium text-[11px]">Going to : {trimText(rideBid?.destination?.destinationName)} </p>
                </div>
               </div>
                <div className="flex lg:flex-col gap-x-1 lg:gap-y-[24px] lg:items-center mr-[22px] lg:mr-0">
                <h4 className="font-normal lg:font-bold text-neutral-950 text-xs lg:text-sm">Price <span className="lg:hidden"> : </span> </h4>
                <span className="font-bold flex items-center justify-center w-[69px] h-[20px] lg:w-[88px] lg:h-[29px] text-red-56 bg-[rgba(234,67,53,0.08)] rounded-full px-4 text-xs">₦{rideBid?.bidPrice}</span>
                </div>
            </div>
           </div>
            <CustomButton
            name={ isMobile ? "Book " : "Book Driver"}
            extendedStyles={"font-medium text-xs lg:text-sm text-neutral-950 bg-primary-200 w-[69px] lg:w-[165px] h-[28px] lg:h-[50px] rounded-[32px] lg:rounded-2xl px-4"}
            btnClick={() => navigate("/dashboard",  {  
              state:{
                source:"book-driver", 
                confirmBooking: true, 
                selectedRideBid: rideBid 
              }
            })}
             />
       </div>
       </div>
)}
