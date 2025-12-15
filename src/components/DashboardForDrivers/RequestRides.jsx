import { Link } from "react-router-dom";

import { useMutation } from "@tanstack/react-query";
import { getPendingBookings } from "../../store/auth/driver/api";
import { useEffect, useState } from "react";
import { Requests } from "../driverDashboardFolders/requests/Requests"
import { ConfirmBookingLoader } from "../dashboard/loaders/ConfirmBookingLoader";
import { RideRequestsList } from "../driverDashboardFolders/requests/RideRequestsList";


export default function RideRequests({ isPreview = false }) {
  const [requests, setRequests] = useState([])
  const [isFetching, setIsFetching] = useState(true)

  const { mutate: getPendingRideRequests, isLoading } = useMutation(
    getPendingBookings,
    {
      onSuccess: (data) => {
        const slicedRequest = data.slice(0, 3)
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
  }, [])

  // console.log(requests)

  if (isFetching) {
    return (
      <ConfirmBookingLoader type="list" />
    )
  }

  return requests.length == 0 ? (
    <Requests />
  ) : (
    <RideRequestsList
    viewAll={"/dashboard/requests"}
      requests={requests}
    />
   
  );
}
