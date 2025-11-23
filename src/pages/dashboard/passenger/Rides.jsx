import { useState } from "react";
import { useRecoilValue } from "recoil";
import { userAtom } from "../../../components/atoms/userAtom";
import { useQuery } from "@tanstack/react-query";
import { getUserRides } from "../../../store/users/api";
import { RideHistoryLoader } from "../../../components/dashboard/loaders/RideHistoryLoader";
import toast from "react-hot-toast";


export const Rides = () => {
  // const tabs = ["Ride History", "Ongoing Rides", "Scheduled Rides"];
  const tabs = ["Ride History", "Ongoing Rides"];
  const logginedUser = useRecoilValue(userAtom);
  console.log(logginedUser);

  const [activeTab, setActiveTab] = useState(tabs[0]);

   const { isLoading } = useQuery(["getUserRides", logginedUser?.id || logginedUser?._id], getUserRides,
      {
        onSuccess: (response) => {
          setUser(response?.data)
        },
        
        onError:(error) => {
        toast.error(error?.message || error?.response?.data?.message)
        // If authentication fails (no token or invalid token), redirect to login page
        navigate('/dashboard'); 
        }
      }
    );

    if(isLoading){
      return(
        <div className="flex flex-col lg:flex-row lg:gap-x-4">
        <RideHistoryLoader variant="list"/>
        <RideHistoryLoader variant="card"/>
        </div>
      )
    }

  return (
    <div className="ml-4 lg:ml-0">
      <div className="flex items-center gap-x-2.5">
        <h2 className="basis-[178px] text-lg font-bold text-gray-950">Your Rides</h2>
        <div>
          {/* Tabs */}
          <div className="flex gap-x-1.5 ml-auto justify-center items-center bg-white rounded-[10px] h-[51px] border-b border-gray-300">
            {tabs.map((tab) => (
              <button
                onClick={() => setActiveTab(tab)}
                key={tab}
                className={`block w-[166px] h-full lg:w-[241px] px-[5px] py-2 rounded-[10px] lg:px-4 text-gray-950 font-medium ${activeTab === tab ? 'bg-primary-700 text-white' : ''}`}
              >
                {tab}
              </button>
            ))}
          </div>
          {/* Tab Content */}
          <div>
            {/* Content for the selected tab goes here */}
          </div>
          
        </div>
      </div>
    </div>
  )
}
