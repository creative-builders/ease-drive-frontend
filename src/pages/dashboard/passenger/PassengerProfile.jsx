
import React, { useState } from "react";
import { EditProfileView } from "../../../components/dashboard/EditProfile";
import ProfileView from "./user-profile/ProfileView";
import useIsMobile from "../../../hooks/useIsMobile";

export const PassengerProfile = () => {
  const [showEdit, setShowEdit] = useState(false);

  const isMobile = useIsMobile();

  return (
    <div className="h-full gap-5 items-center justify-center md:p-10 md:bg-transparent relative">
      <h2 className="font-semibold md:font-bold text-sm md:text-2xl leading-6 md:leading-[100%] tracking-normal text-left ml-5 md:ml-0 mt-5 md:mt-0">Profile</h2>
      {/* Profile View */}
      <div className="mt-6 gap-5 flex flex-col sm:flex-row items-center justify-center w-full transition-all duration-300">
        {(!showEdit || !isMobile) && (
          <div className={`${showEdit ? "sm:flex-1" : "sm:flex-[2]"} w-full`}>
            <ProfileView onEdit={() => setShowEdit(true)} />
          </div>
        )}

        {showEdit && (
          <div className="w-full sm:flex-1">
            <EditProfileView onClose={() => setShowEdit(false)} />
          </div>
        )}
      </div>
    </div>
  );
};

