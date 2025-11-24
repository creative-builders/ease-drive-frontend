import { useState } from "react";
import { useRecoilValue } from "recoil";
import { userAtom } from "../../../components/atoms/userAtom";
import { useQuery } from "@tanstack/react-query";
import { getUserRides } from "../../../store/users/api";
import { RideHistoryLoader } from "../../../components/dashboard/loaders/RideHistoryLoader";
import toast from "react-hot-toast";
import { LocationIcon } from "../../../assets/icons/LocationIcon";
import { RidesLocationIcon } from "../../../assets/icons/RidesLocationIcon";


export const Rides = () => {
  // const tabs = ["Ride History", "Ongoing Rides", "Scheduled Rides"];
  const tabs = ["Ride History", "Ongoing Bids"];
  const logginedUser = useRecoilValue(userAtom);

  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [rideHistory,setRideHistory] = useState([])

   const { isLoading } = useQuery(["getUserRides", logginedUser?.id || logginedUser?._id], getUserRides,
      {
        onSuccess: (response) => {
          setRideHistory(response?.data?.bookings);
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
        <>
        <div className="mb-3 flex gap-x-2.5">
          <div className="w-[180px] h-[33px] rounded-[10px] bg-white"></div>
          <div className="w-[145px] h-[33px] rounded-[10px] bg-white"></div>
          <div className="w-[145px] h-[33px] rounded-[10px] bg-white"></div>
        </div>
        <div className="flex flex-col lg:flex-row lg:gap-x-4">
        <RideHistoryLoader variant="list"/>
        <RideHistoryLoader variant="card"/>
        </div>
        </>
      )
    }

  return (
    <div className="ml-4 lg:ml-0">
      <div className="mb-3 flex items-center gap-x-2.5">
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


        {/* render rideHistory and check if empty */}
        <div className="bg-white p-4 rounded-2xl">
          {rideHistory.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-xl">
              <p className="text-neutral-400 font-semibold text-sm lg:text-2xl">No rides yet! <br /> Your Past trips will appear here.</p>
            </div>
          ) : (
            rideHistory.map((ride) => (
              <div key={ride?._id} className="cursor-pointer border-b border-neutral-100 py-4">
                <div className="flex justify-between items-center w-full">
                  <div className="mb-1 lg:mb-4 flex items-center gap-x-4">
                    <div className="w-[50px] h-[50px] lg:w-[80px] lg:h-[80px] shrink-0 rounded-full overflow-hidden">
                      <img className="h-full w-full object-cover" src={ride?.booker?.profileImage} alt={ride?.booker?.name} />
                    </div>
                    <div>
                      <div className="mb-4 flex gap-x-4 items-center">
                        <h3 className="text-sm font-semibold text-gray-900">{ride?.booker?.name}</h3>
                        {/* ride button with a prefix dot matching the color of the status bg for a status background for completed, pending and ongoing */}
                        <button className={`flex items-center gap-x-2 px-2 py-1 text-xs font-medium rounded-full ${ride?.status === 'Completed' ? 'bg-green-100 text-green-600' : ride?.status === 'Pending' ? 'bg-yellow-100 text-yellow-600' : 'bg-blue-100 text-blue-600'}`}>
                          <span className={`inline-block w-[5px] h-[5px] rounded-full ${ride?.status === 'Completed' ? 'bg-green-600' : ride?.status === 'Pending' ? 'bg-yellow-600' : 'bg-blue-600'}`}></span>
                          {ride?.status}
                        </button>
                      </div>
                             {/* for desktop ui */}
                 <div className="flex gap-x-4">
                  <div>
                    <RidesLocationIcon className="w-[18px] h-[18px]"/>
                    <span>20 mins away from you</span>
                  </div>
                  <div>
                    <RidesLocationIcon className="w-[18px] h-[18px]"/>
                    <span>20 mins away from you</span>
                  </div>
                 </div>
                    </div>
                  </div>
                  <button className="text-sm text-green-600 text-xs lg:text-sm font-medium">View Details</button>
                </div>
              </div>
            ))
          )}
        </div>
    </div>
  )
}
