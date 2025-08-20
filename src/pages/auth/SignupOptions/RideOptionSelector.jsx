import { useState } from "react";
import { FaCarSide } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const options = [
    {
        url: "passengers-signup",
        title: "I want to Book Rides",
        description: "Enjoy safe rides with live tracking and flexible payments",
        icon: <FaCarSide className="text-[#1E293B] text-xl" />,
        svgUrl: "/car.svg",
        bgColor: "bg-[#E2E8F0]",
    },
    {
        url: "driver-signup",
        title: "I want to Drive",
        description: "Earn on your schedule by driving anytime.",
        icon: <FaRegClock className="text-[#78350F] text-xl" />,
        svgUrl: "/clock.svg",
        bgColor: "bg-[#FDF6E3]",
    },
];

const RideOptionSelector = () => {
    const [selected, setSelected] = useState("");
    const navigate = useNavigate()


    return (
        <div className="flex flex-col items-center justify-center gap-4 pt-6 w-[347px]">
            {options.map((option) => (
                <div
                    key={option.url}
                    className={`lg:w-[556px] lg:h-[171px] w-[347px] h-[98px]  p-[40px_10px_40px_10px] 
                         lg:p-[50px_30px_60px_20px] rounded-[16px] shadow-sm  flex items-center justify-between
                          gap-6 cursor-pointer ${option.bgColor}`}
                    onClick={() => setSelected(option.url)}
                >
                    {/* Left: Icon + Text */}
                    <div className="flex flex-col items-start gap-4 
                    w-[347px]  ">
                        <div className="lg:w-[48px] lg:h-[48px] 
                        w-[33px] h-[33px] rounded-full flex items-center justify-center ">
                            {/* {option.icon} */}
                            <img src={option.svgUrl} />
                        </div>
                        <div className="flex flex-col">
                            <h3 className="text-gray-700 font-semibold font-inter 
                            text-[14px] lg:text-[24px]">{option.title}</h3>
                            <p className="text-gray-700 lg:text-[16px] text-[8px] font-poppins">{option.description}</p>
                        </div>
                    </div>

                    {/* Right: Radio Button */}
                    <div className="lg:w-[34px] lg:h-[34px] w-[28px] h-[24px] 
                    lg:-mt-20 -mt-10 rounded-full border-2 border-green-600 flex items-center justify-center">
                        {selected === option.url && (
                            <div className="lg:w-[24px] lg:h-[24px] w-[16px] h-[16px]  rounded-full bg-green-600" />
                        )}
                    </div>
                </div>
            ))}
            <div className="pt-6 pt-8">
                {selected === "" && (<button
                    className="bg-green-700 opacity-5 cursor-not-allowed lg:w-[556px] lg:h-[72px] 
                    w-[347px] h-[45px] px-[10px] rounded-[16px]
                      text-white flex items-center justify-center gap-[10px] text-lg font-medium"
                    onClick={() => selected === "" ? null :
                        navigate(`/${selected}`)
                    }
                >
                    Continue
                </button>)}
                {selected !== "" && (<button
                    className="bg-green-700 lg:w-[556px] lg:h-[72px] w-[347px] h-[45px] px-[10px] rounded-[16px]
                     opacity-100 text-white flex items-center justify-center gap-[10px] text-lg font-medium"
                    onClick={() => selected === "" ? navigate("/easesignup") :
                        navigate(`/${selected}`)
                    }
                >
                    Continue
                </button>)}

            </div>

        </div>
    );
};

export default RideOptionSelector;
