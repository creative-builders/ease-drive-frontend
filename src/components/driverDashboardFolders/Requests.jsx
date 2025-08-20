import { MapPin, RefreshCw, Filter } from "lucide-react";
import CustomButton from "../CustomButton";
import { Info } from "./Info";

export function Requests() {
  return (
    <div className="py-2.5 relative top-0 left- h-full inline-flex flex-col justify-start items-start gap-4">
      {/* Header */}


      {/* Body */}
      <div className="inline-flex justify-start items-start gap-4">
        <div className="w-[563px] inline-flex flex-col justify-start items-start gap-4">
          <div className="self-stretch h-[853px] px-5 py-2.5 bg-white rounded-lg flex flex-col justify-start items-center gap-24">
            {/* Subheader */}
            <div className="w-[543px] inline-flex justify-between items-center">
              <div className="text-black text-2xl font-semibold font-['Inter']">
                Ongoing Ride Requests
              </div>

              {/* Filter button */}
              <div className="flex justify-start items-center gap-2">
                <button className="w-24 h-10 p-2.5 rounded-lg flex justify-center items-center gap-2.5 hover:bg-Primary-50">
                  <span className="text-Accent-500 text-base font-medium font-['Poppins']">
                    Filter
                  </span>
                  <Filter className="w-5 h-5 text-Accent-500" />
                </button>
              </div>
            </div>

            {/* Empty State */}
            <div className="flex flex-col justify-start items-center gap-52">
              <div className="w-96 text-center text-Neutral-300 text-lg font-medium font-['Inter']">
                No Customer has requested for a ride yet.
              </div>

              {/* Refresh button */}
              <button className="w-96 h-14 px-4 bg-Primary-700 rounded-2xl inline-flex justify-center items-center gap-2 hover:bg-Primary-600">

                <span className="text-Neutral-50 text-lg font-medium font-['Inter']">
                  <CustomButton name="Refresh" extendedStyles="w-full p-3 lg:p-4 rounded-lg">
                    <RefreshCw className="w-5 h-5 ml-2 text-Neutral-50" />
                  </CustomButton >

                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
