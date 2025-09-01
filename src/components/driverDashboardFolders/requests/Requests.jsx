
import CustomButton from "../../CustomButton";
import { FilterIcon } from "../../../assets/icons/FilterIcon";
import noRequest from "../../../assets/images/norequest.png";

import {data} from "./requestData";

export function Requests({ request, refresh }) {

  return (
    <div className="py-2.5 relative  h-full inline-flex flex-col justify-start items-start gap-4">

      {/* Body */}
      <div className="inline-flex justify-start items-start gap-4">
        <div className="lg:w-[563px] w-[95%] m-auto font-poppins inline-flex flex-col lg:justify-start lg:items-start gap-4">
          <div className="lg:self-stretch lg:h-[853px] h-[426px] px-5 py-2.5 bg-white rounded-lg flex flex-col justify-start items-center gap-24">
            {/* Subheader */}
            <div className="lg:w-[543px] w-[346px] inline-flex justify-between items-center">
              <div className="text-black lg:text-2xl text-xl font-semibold font-poppins">
                Ongoing Ride Requests
              </div>

              {/* Filter button */}

              <div className="flex justify-start items-center gap-2 cursor-not-allowed">
                <button className="w-24 h-10 p-2.5 rounded-lg  disabled  cursor-not-allowed flex justify-center items-center gap-2.5 hover:bg-Primary-50">
                  <span className="text-accent-500 text-xl font-medium font-poppins">
                    Filter
                  </span>
                  <FilterIcon className="w-5 h-5 text-Accent-500" />
                </button>
              </div>
            </div>

            {/* Empty State */}
            <div className="flex lg:w-[543px]  w-[346px] flex-col  justify-start items-center gap-10">
              <div className="w-96 text-center font-poppins text-neutral-300 lg:text-lg text-[12px] font-medium font-['Inter']">
                No Customer has requested for a ride yet.
              </div>
              <div className=" lg:w-[377px] lg:h-[392px]  w-[149px] h-[155px] object-contain flex justify-center items-center inline-flex">
                <img src={noRequest} alt="No request" className="object-contain " />
              </div>

            </div>
            <div className="flex lg:w-[500px] w-[346px] flex-col lg:mt-[0%] mt-[10%] justify-start items-center lg:gap-10">
              <CustomButton name="Refresh" btnClick={() => refresh(data) } extendedStyles="w-full  bg-green-700 p-3 lg:p-4 rounded-lg">
              </CustomButton >
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
