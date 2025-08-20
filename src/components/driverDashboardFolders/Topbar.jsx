import { Search, MapPin, ChevronDown } from "lucide-react";

import {GpsLocationIcon} from "../../assets/icons/GpsLocationIcon"
import {LogoutIcon} from "../../assets/icons/LogoutIcon"

export function Topbar() {
    return (
        <div className="flex absolute left-[12%]   justify-between flex-col items-center h-20 px-20  justify-center ">
            <header className="w-[1160px] h-20 px-20  py-5 bg-white inline-flex justify-between items-center">
                {/* Search box */}
                <div className="w-[529px] h-12 px-5 bg-white rounded-2xl border border-neutral-200 flex items-center justify-between">
                    <span className="text-gray-400 text-lg font-medium font-inter">Search...</span>
                    <Search className="w-5 h-5 text-zinc-500" />
                </div>

                {/* User info */}
                <div className="flex items-center gap-3">
                    <span className="text-neutral-400 text-lg font-medium font-inter leading-relaxed">
                        Abubakar Job Chukwuemeka
                    </span>
                    <div className="w-14 h-12 bg-primary-50 rounded-[32px] flex justify-center items-center">
                         <LogoutIcon />
                    </div>
                </div>


            </header>

            <div className="self-stretch top-[10%] relative  left-[8%] inline-flex pt-4 justify-start items-center gap-2">
                <div className="w-[665.35px] text-black/20 text-3xl font-semibold font-['Inter']">
                    Customers Ride Request
                </div>

                <div className="flex justify-center -ml-8 items-center gap-2">
                    {/* Location Icon */}
                    <div className="w-9 h-9 bg-Primary-50 rounded-full flex justify-center items-center">
                        <GpsLocationIcon stroke = "#1A7B2C" />
                        {/* <MapPin className="w-5 h-5 text-lime-900" /> */}
                    </div>

                    <div className="justify-start">
                        <span className="text-Neutral-950 text-base font-bold font-['Inter'] leading-normal">
                            You’re currently at:
                        </span>
                        <span className="text-Neutral-950 text-base font-medium font-['Inter'] leading-normal">
                            {" "}
                            UNN Hostel C, Nsukka
                        </span>
                    </div>
                </div>
            </div>

        </div>
    );
}
