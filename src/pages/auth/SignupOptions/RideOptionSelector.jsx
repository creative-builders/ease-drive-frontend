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
        <div className="flex flex-col items-center justify-center gap-4 max-990:pt-8 max-900:w-[347px]">
            {options.map((option) => (
                <div
                    key={option.url}
                    className={`lg:w-[556px] lg:h-[171px] max-990:w-[347px] max-990:h-[98px] max-990:m-auto max-990:p-[40px_10px_40px_10px] 
                         lg:p-[50px_30px_60px_20px] rounded-[16px] shadow-sm  flex items-center justify-between gap-6 cursor-pointer ${option.bgColor}`}
                    onClick={() => setSelected(option.url)}
                >
                    {/* Left: Icon + Text */}
                    <div className="flex flex-col items-start gap-4 max-990:w-[347px]  ">
                        <div className="lg:w-[48px] lg:h-[48px] max-990:w-[33px] max-990:h-[33px] rounded-full flex items-center justify-center ">
                            {/* {option.icon} */}
                            <img src={option.svgUrl} />
                        </div>
                        <div className="flex flex-col">
                            <h3 className="text-[#0F172A] font-semibold font-inter max-990:text-[14px] lg:text-[24px]">{option.title}</h3>
                            <p className="text-[#475569] lg:text-[16px] max-990:text-[8px] font-poppins">{option.description}</p>
                        </div>
                    </div>

                    {/* Right: Radio Button */}
                    <div className="lg:w-[34px] lg:h-[34px] max-990:w-[28px] max-990:h-[26px] 
                    lg:-mt-20 max-990:-mt-10 rounded-full border-2 border-green-600 flex items-center justify-center">
                        {selected === option.url && (
                            <div className="lg:w-[24px] lg:h-[24px] max-990:w-[12px] max-990:h-[12px]  rounded-full bg-green-600" />
                        )}
                    </div>
                </div>
            ))}
            <div className="pt-6 max-990:pt-8">
                {selected === "" && (<button
                    className="bg-[#1A7B2C] opacity-5 cursor-not-allowed lg:w-[556px] lg:h-[72px] max-990:w-[347px] max-990:h-[45px] px-[10px] rounded-[16px]
                      text-white flex items-center justify-center gap-[10px] text-lg font-medium"
                    onClick={() => selected === "" ? navigate("/easesignup") :
                        navigate(`/${selected}`)
                    }
                >
                    Continue
                </button>)}
                {selected !== "" && (<button
                    className="bg-[#1A7B2C] lg:w-[556px] lg:h-[72px] max-990:w-[347px] max-990:h-[45px] px-[10px] rounded-[16px]
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
