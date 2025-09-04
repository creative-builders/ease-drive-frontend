
import { useState } from "react";
import { LiveGPSIcon } from "../../../assets/icons/LiveGPSIcon";
import { locationAtom } from "../../atoms/locationAtom";
import { useRecoilValue } from "recoil";
import { NoEarnings } from "./NoEarnings";
import { Earnings } from "./Earnings";

import { userAtom } from "../../atoms/userAtom";


export function DriverEarnings() {
  const [selectedRequest, setSelectedRequest] = useState(null);

  const user = useRecoilValue(userAtom);

  const location = useRecoilValue(locationAtom);

  const myLocation = { lat: 6.5244, lng: 3.3792 };      // Driver (Lagos mainland)
  const destination = { lat: 6.465422, lng: 3.406448 };



  return (
    <div className="flex lg:w-full w-[100%] lg:justify-start justify-center m-auto items-center">
      <div>
        <div className="lg:w-[990px] w-[351px] flex lg:flex-row flex-col gap-1 
        lg:justify-between justify-center m-auto lg:-ml-10 ml-4 items-start py-2">
          <h2 className="lg:text-2xl font-semibold text-[18px] font-poppins">
            Earnings Overview
          </h2>
          <p className="lg:text-base text-base inline-flex items-center font-poppins">
            {/* <div className="bg-primary-50 text-green-900 lg:w-[38px] lg:h-[36px] w-[28px] h-[26px] rounded-full px-2 py-1 mr-2 justify-center inline-flex items-center">
              {/* <LiveGPSIcon className="inline font-poppins" /> 
            </div> */}
            Track your earnings and trip performance
          </p>
        </div>

        <div className="flex lg:w-[100%] w-[80%] lg:justify-start justify-center m-auto items-start 
        lg:mt-0 mt-4 lg:-ml-10 ml lg:h-full gap-4">
          {/* <NoEarnings /> */}
          <Earnings />

        </div>
      </div>
    </div>
  );
}
