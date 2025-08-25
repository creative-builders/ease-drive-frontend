import React, { useState } from "react";
import useIsMobile from "../hooks/useIsMobile";
import VehicleForm from "./VehicleForm";
import DriverProfile from "./DriverProfile";
import Crendentials from "./Crendentials";

const ProfilePage = () => {
  const [activeEdit, setActiveEdit] = useState(null); 

  const isMobile = useIsMobile();


  return (
    <div className="gap-5 items-center justify-center md:p-10 md:bg-[#f2f5f6]">
      <h2 className="font-semibold md:font-bold text-[14px] md:text-[24px] leading-6 md:leading-[100%] tracking-normal text-left ml-5 md:ml-0 mt-5 md:mt-0">Profile</h2>
      {/* Profile View */}
        <div className="mt-6 gap-5 flex flex-col sm:flex-row items-center justify-center w-full transition-all duration-300">

          {(!activeEdit || !isMobile) && (
            <div className={`${activeEdit ? "sm:flex-1" : "sm:flex-[2]"} w-full`}>
              <DriverProfile 
                onEditVehicle={() => setActiveEdit("vehicle")} 
                onEditCredentials={() => setActiveEdit("credentials")} 
              />
            </div>
          )}

          {activeEdit === "vehicle" && (
            <div className="w-full sm:flex-1">
              <VehicleForm onClose={() => setActiveEdit(null)} />
            </div>
          )}

          {activeEdit === "credentials" && (
            <div className="w-full sm:flex-1">
              <Crendentials onClose={() => setActiveEdit(null)} />
            </div>
          )}

        </div>
    </div>
  );
};

export default ProfilePage;
