import { Outlet } from "react-router-dom"
import {Navbar} from "../../components/dashboard/layout/Navbar"
import { useState } from "react";
import { SideBarMenu } from "../../components/dashboard/layout/SideBarMenu";



export const DashboardLayout = () => {
    const [coords, setCoords] = useState(null);
      const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
     <>
     <Navbar
     isMenuOpen={isMenuOpen}
     setIsMenuOpen={setIsMenuOpen}
     />
     <div className="flex">
       <SideBarMenu/>
        <div className="bg-gradient-bg basis-full">
          <div className="lg:mr-[22px] lg:ml-[362px] mt-[72px] lg:mt-[29px] min-h-screen">
            <Outlet context={{ coords, setCoords, isMenuOpen, setIsMenuOpen}}/>
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
