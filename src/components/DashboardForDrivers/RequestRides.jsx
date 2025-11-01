import { Link } from "react-router-dom";

import { useMutation } from "@tanstack/react-query";
import { getPendingBookings } from "../../store/auth/driver/api";
import { useEffect, useState } from "react";
import {Requests} from "../driverDashboardFolders/requests/Requests"
import { ConfirmBookingLoader } from "../dashboard/loaders/ConfirmBookingLoader";


export default function RideRequests({ isPreview = false }) {
 const [requests, setRequests] = useState([])
 const [isFetching, setIsFetching] = useState(true)

const { mutate: getPendingRideRequests, isLoading } = useMutation(
    getPendingBookings,
    {
      onSuccess: (data) => {       
        const slicedRequest = data.slice(0,3)
         setRequests(slicedRequest);
        setIsFetching(false)
      },
      onError: (error) => {
        toast.error(error.response?.data?.message || error.message);
      }
    }
  );
  
  useEffect(() => {
    getPendingRideRequests()
  },[])

// console.log(requests)

 if(isFetching){
  return (
    <ConfirmBookingLoader type="list" />
  )
 }

  return requests.length == 0 ? (
    <Requests />
  ) : (
    <div className="bg-white shadow rounded-lg p-4 border">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold text-[#000] text-2xl not-italic leading-normal">Ongoing Ride Requests</h2>
        {/* <a href="#"></a> */}
        {isPreview && (
          <Link className="text-[#2ABD45] text-sm font-semibold" to={'/dashboard/requests'}>
            View all
          </Link>
        )}
      </div>
      {requests.map((ride, i) => (
        <div key={i} className="flex items-start gap-3 mb-4 border-b-[1px] border-[#E7E7E7]">
          <div className=" rounded-full overflow-hidden w-[40px] h-[40px] lg:w-[80px] lg:h-[80px] flex-shrink-0">
          <img
            className="w-full h-full object-cover"
            src={ride.booker.profileImage}
            alt={ride.booker.name}
          />
        </div>

          {/* <img src={ride.booker.profileImage} alt={ride.booker.name} className=" w-[40px] h-[40px] lg:w-[80px] lg:h-[80px] rounded-full" /> */}
          <div className="gap-20 md:gap-3">
            <h3 className="font-semibold text-base not-italic leading-normal text-[#000]">{ride.booker.name}</h3>
            <p className="font-normal text-xs not-italic leading-normal text-[#000]">1hour 20 mins away from you</p>
            <p className="text-sm not-italic font-semibold leading-6 tracking-wide text-[#072C0F]">
              <strong>Current location:</strong> {ride.location.locationName}
            </p>
            <p className="text-sm not-italic font-semibold leading-6 tracking-wide text-[#072C0F]">
              <strong>Going to:</strong> {ride.destination.destinationName}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
