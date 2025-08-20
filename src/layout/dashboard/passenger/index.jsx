import { Outlet } from "react-router-dom"
import { Navbar } from "../../../components/dashboard/layout/NavBar"
import BackgroundMap from "../../../components/dashboard/BackgroundMap"
import { useState } from "react";



export const PassengerLayout = () => {
    const [coords, setCoords] = useState(null);
  return (
     <>
     <Navbar/>
     <BackgroundMap coords={coords} />
     
       {/* Page content */}
      <div className="relative z-10 pt-16 overflow-auto xl:pb-[74px]">
        <Outlet context={{ coords, setCoords}} />
      </div>
     </>
  )
}
