import { Outlet } from "react-router-dom"



import BackgroundMap from "../../../components/dashboard/BackgroundMap"
import {Navbar} from "../../../components/dashboard/layout/Navbar"
import { useState } from "react";
import { SideBarMenu } from "../../../components/dashboard/layout/SideBarMenu";



export const PassengerLayout = () => {
    const [coords, setCoords] = useState(null);
  return (
     <>
     {/* <Navbar/> */}
     <div className="flex">
       <SideBarMenu/>
        <div className="bg-custom-gradient basis-full">
          <div className="mr-[22px] ml-[82px] mt-[29px] border border-red-500 min-h-screen">
            <Outlet context={{ coords, setCoords}}/>
          </div>
        </div>
     </div>
     {/* <BackgroundMap coords={coords} /> */}
     
       {/* Page content */}
      {/* <div className="relative z-10 pt-16 overflow-auto xl:pb-[74px]">
        <Outlet context={{ coords, setCoords}} />
      </div> */}
     </>
  )
}
