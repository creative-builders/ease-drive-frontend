import { Outlet } from "react-router-dom"
import {Navbar} from "../../components/dashboard/layout/Navbar"
import { useState } from "react";
import { SideBarMenu } from "../../components/dashboard/layout/SideBarMenu";
import { useQuery } from "@tanstack/react-query";
import { getUserProfile } from "../../store/users/api";
import { userAtom } from "../../components/atoms/userAtom";
import useAuth from "../../hooks/useAuth";
import { useRecoilValue, useSetRecoilState } from "recoil";
import toast from "react-hot-toast";
import { DashboardHomeLoader } from "../../components/dashboard/loaders/DashboardHomeLoader";



export const DashboardLayout = () => {
    const [coords, setCoords] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const setUser = useSetRecoilState(userAtom); 
    const logginedUser = useRecoilValue(userAtom);

    const { isLoading } = useQuery(["getUserProfile", logginedUser?.id || logginedUser?._id], getUserProfile,
      {
        onSuccess: (response) => {
          setUser(response?.data)
        },
        
        onError:(error) => {
        toast.error(error?.message || error?.response?.data?.message)
        // If authentication fails (no token or invalid token), redirect to login page
        navigate('/'); 
        }
      }
    );

    // if(isLoading){
    //   return <DashboardHomeLoader/>
    // }


  return (
     <>
     <Navbar
     isMenuOpen={isMenuOpen}
     setIsMenuOpen={setIsMenuOpen}
     />
     <div className="flex">
       <SideBarMenu isLoading = {isLoading} />
        <div className="bg-gradient-bg basis-full">
          <div className="lg:mr-[22px] lg:ml-[362px] mt-[72px] lg:mt-[29px] min-h-screen">
            {
              isLoading ? <DashboardHomeLoader/> : <Outlet context={{ coords, setCoords, isMenuOpen, setIsMenuOpen}}/>
            }
          </div>
        </div>
     </div>
     </>
  )
}
