import React from "react";
import CustomButton from "../CustomButton";
import { Link } from 'react-router-dom'

const BidCard = ({
    profilePic,
    name,
    rating,
    transportMeans,
    amount,
    imageUrl,
   }) => {

    return (
        
        <div className="min-h-screen bg-gray-500">
            <div className="p-6 lg:h-fit flex flex-wrap gap-4 justify-center">
              <div className="h-fit min-w-[363px] w-full bg-[#EFF6E9] border-2 border-green-500 rounded-2xl flex p-3 gap-3">
                    {/* first section */}
                    <div className="w-3/5 h-full text-sm flex flex-col gap-3">
                        <div className="flex w-full items-center gap-2">
                            <img src={profilePic} alt="" className="w-10 h-10 rounded-full object-cover" />
                            <p className="font-medium text-base leading-[100%] not-italic">{name}</p>
                            <img src="/star.jpg" alt="" className="w-3" />
                            <p className="font-medium text-base leading-[100%] not-italic">{rating}</p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <p className="font-medium text-base leading-6 not-italic"><span className="text-[#5A5A5A]">{transportMeans}</span> <span><em className="decoration-double line-through">N</em>{amount}</span></p>
                            <p className="text-xs font-medium not-italic">800m (5mins away)</p>
                        </div>
                        <p className="text-xs text-[#B8B8B8] font-medium not-italic gap-6">Automatic | 3 seat | yellow</p>
                        <div className="h-10 flex items-center justify-center gap-4 rounded-2xl">
                            <CustomButton 
                                name="Decline"
                                extendedStyles={"w-full flex items-center justify-center py-2 px-4 cursor-pointer text-center rounded-lg gap-2 text-base font-normal text-green-300 bg-transparent border border-green-500"}
                                btnClick={() => close((prev) => !prev)}
                            />

                            <Link to='/DriverCall'
                               state={{
                                profilePic,
                                name,
                                rating,
                                distance: "800m (5mins away)",
                                vehicleInfo: "Automatic | 3 seat | yellow",
                                amount,
                                imageUrl
                              }}
                            >
                                <CustomButton 
                                    name="Accept"
                                    extendedStyles={"w-full py-2 px-4 cursor-pointer text-center rounded-lg gap-2 text-base font-normal text-white bg-green-300"}
                                    btnClick={() => close((prev) => !prev)}
                                />
                            </Link>
                            
                        </div>
                    </div>

                    {/* second section */}
                    <div className="w-2/5 h-full flex flex-col gap-5">
                        <img src={imageUrl} alt="" className="h-20 w-full object-contain" />
                        <div className="flex items-center justify-between text-sm">
                            <a className="text-green-500 w-full text-center font-normal text-base tracking-normal not-italic underline decoration-solid decoration-auto" href="#">View details</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
    )
}
export default BidCard

