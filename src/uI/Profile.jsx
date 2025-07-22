import React, { useState } from "react";
import EditProfileView from "./user-profile/EditProfile";
import ProfileView from "./user-profile/ProfileView";

const Profile = () => {
  const [showEdit, setShowEdit] = useState(false);

  return (
    <div className="h-screen gap-5 items-center justify-center p-10 bg-[#f2f5f6]">
        <h2 className="font-[inter] font-bold text-[24px] leading-[100%] tracking-normal">Profile</h2>
      {/* Profile View */}
        <div className="mt-6 gap-5 flex flex-col sm:flex-row w-full transition-all duration-300">
            {(!showEdit || window.innerWidth >= 640) && (
            <div
            className={`${
                showEdit ? "sm:flex-1" : "sm:flex-[2]"
            } w-full sm:w-auto`}
            >
            <ProfileView onEdit={() => setShowEdit(true)} />
            </div>
            )}

         {/* Edit View */}
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
