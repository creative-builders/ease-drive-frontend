import React, { useState } from "react";
import EditProfileView from "./user-profile/EditProfile";
import ProfileView from "./user-profile/ProfileView";
import useIsMobile from "../hooks/useIsMobile";

const Profile = () => {
  const [showEdit, setShowEdit] = useState(false);

  const isMobile = useIsMobile();

  return (
    <div className="gap-5 items-center justify-center md:p-10 md:bg-[#f2f5f6] relative">
      <h2 className="font-semibold md:font-bold text-[14px] md:text-[24px] leading-6 md:leading-[100%] tracking-normal text-left ml-5 md:ml-0 mt-5 md:mt-0">Profile</h2>
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

export default Profile;


// useIsMobile.js
// import { useEffect, useState } from "react";

// const useIsMobile = () => {
//   const [isMobile, setIsMobile] = useState(
//     typeof window !== "undefined" ? window.innerWidth < 640 : false
//   );

//   useEffect(() => {
//     const handleResize = () => setIsMobile(window.innerWidth < 640);
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return isMobile;
// };

// export default useIsMobile;



// import useIsMobile from "./hooks/useIsMobile";

// const isMobile = useIsMobile();



// {(!showEdit || !isMobile) && (
//   <div className={`${showEdit ? "sm:flex-1" : "sm:flex-[2]"} w-full`}>
//     <ProfileView onEdit={() => setShowEdit(true)} />
//   </div>
// )}

// {showEdit && (
//   <div className="w-full sm:flex-1">
//     <EditProfileView onClose={() => setShowEdit(false)} />
//   </div>
// )}
