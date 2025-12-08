import { useState } from "react";
import { useRecoilValue } from "recoil";
import { userAtom } from "../../../components/atoms/userAtom";
import { useQuery } from "@tanstack/react-query";
import { getUserRides } from "../../../store/users/api";
import { RideHistoryLoader } from "../../../components/dashboard/loaders/RideHistoryLoader";
import toast from "react-hot-toast";
import { LocationIcon } from "../../../assets/icons/LocationIcon";
import { RidesLocationIcon } from "../../../assets/icons/RidesLocationIcon";
import { useLocation } from "react-router-dom";
import CustomButton from "../../../components/CustomButton";
import useIsMobile from "../../../hooks/useIsMobile";
import { RideBidLists } from "../../../components/dashboard/RideBidLists";
import { RideHistoryLists } from "../../../components/dashboard/RideHistoryLists";


export const Rides = () => {
  const location = useLocation();
  const defaultTab = location.state?.activeTab || "Ongoing Bids";
  const tabs = ["Ride History", "Ongoing Bids"];
  const logginedUser = useRecoilValue(userAtom);

  const [activeTab, setActiveTab] = useState(defaultTab);
  const [rideHistory,setRideHistory] = useState([]);
  const [rideBids,setRideBids] = useState([]);

   const { data:rideBidsData,  isLoading } = useQuery(["getUserRides", logginedUser?.id || logginedUser?._id], getUserRides,
      {
        onSuccess: (response) => {
          setRideBids(response?.data?.bookings);
        },
        
        onError:(error) => {
        toast.error(error?.message || error?.response?.data?.message)
        // If authentication fails (no token or invalid token), redirect to login page
        navigate('/dashboard'); 
        }
      }
    );

  
  // query to fetch the user ride history

  //  const { data:rideBidsData,  isLoading } = useQuery(["getUserRides", logginedUser?.id || logginedUser?._id], getUserRides,
  //     {
  //       onSuccess: (response) => {
  //         setRideBids(response?.data?.bookings);
  //       },
        
  //       onError:(error) => {
  //       toast.error(error?.message || error?.response?.data?.message)
  //       navigate('/dashboard'); 
  //       }
  //     }
  //   );


  //filter bookings with non-empty bids
   const bookingsWithBids = rideBidsData?.data?.bookings?.filter(
    (ride) => Array.isArray(ride.bids) && ride.bids.length > 0
   ) || [];

  const allBids = bookingsWithBids.flatMap((ride) =>
  ride.bids.map((bid) => ({
    ...bid,
    rideId: ride._id,
    destination: ride.destination,
    booker: ride.booker,
  }))
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
      <div className="mb-3 flex flex-col lg:flex-row items-center gap-y-4 lg:gap-y-0 lg:gap-x-2.5">
        <h2 className="lg:basis-[178px] text-lg font-bold text-gray-950">Your Rides</h2>
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
        </div>
      </div>

        {/* render the ongoing bids and  rideHistory */}
        <div className="bg-white p-4 rounded-2xl">
          {
           activeTab === "Ongoing Bids" ? 
           (<RideBidLists rideBids={allBids} />)
           :
           <RideHistoryLists/>
          }
        </div>
    </div>
  )
}
