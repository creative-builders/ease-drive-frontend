import React from 'react'
import { MapPin, RefreshCw, Filter } from "lucide-react";

export const Info = () => {
  return (
    <div className="self-stretch inline-flex justify-start items-center gap-2">
            <div className="w-[665.35px] text-black/20 text-3xl font-semibold font-['Inter']">
              Customers Ride Request
            </div>
    
            <div className="flex justify-center items-center gap-2">
              {/* Location Icon */}
              <div className="w-9 h-9 bg-Primary-50 rounded-full flex justify-center items-center">
                <MapPin className="w-5 h-5 text-lime-900" />
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
  )
}
