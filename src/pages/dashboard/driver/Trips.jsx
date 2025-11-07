

import { useState, useEffect } from "react";
import { BitcoinBag } from "../../../assets/icons/BitcoinBag";
import { Wallet } from "../../../assets/icons/Wallet";
import StatsCards from "../../../components/DashboardForDrivers/StatsCards";
import { data as tripData } from "../../../components/driverDashboardFolders/earnings/tripData";
import { TripDetailsModal } from "../../../components/driverDashboardFolders/earnings/TripDetailsModal";
import { TripsPage } from "../../../components/driverDashboardFolders/earnings/TripsTable";
import { Modal } from "../../../components/Modal";
import { getDriverBids } from "../../../store/auth/driver/api";
import { useMutation } from "@tanstack/react-query";
import { userAtom } from "../../../components/atoms/userAtom";
import { useRecoilValue } from "recoil"
import { formatDate } from "../../../utils/formatDate";
import { ConfirmBookingLoader } from "../../../components/dashboard/loaders/ConfirmBookingLoader";


export const Trips = () => {

  const [rideRequests, setRideRequests] = useState([]);
  const [isFetching, setIsFetching] = useState(true)
  const userData = useRecoilValue(userAtom);
  const userId = userData?._id;


  const { mutate: getBidedRides, isLoading } = useMutation(
    getDriverBids,
    {
      onSuccess: (data) => {
        setRideRequests(data);
        setIsFetching(false)
      },
      onError: (error) => {
        toast.error(error.response?.data?.message || error.message);
      }
    }
  );

  useEffect(() => {
    getBidedRides({ userId: userId })
  }, [])

  // console.log(rideRequests)

  const currentPassengers = rideRequests.filter(
    (ride) => ride.status === "Ongoing"
  ).length;

  // Count rides with status = "Ongoing" or "Completed"
  const totalPassengers = rideRequests.filter((ride) =>
    ["Ongoing", "Completed"].includes(ride.status)
  ).length;



  // const currentPassengers = 4;
  // const totalPassengers = 102;
  const [selectedTrip, setSelectedTrip] = useState(null);

  if (isFetching) {
    return (
      <ConfirmBookingLoader type="card" items={4} />
    )
  }

  return (
    <div className="flex px-3 py-0 flex-col items-start gap-4 lg:-ml-12">
      <header className="flex flex-col md:flex-row w-full items-start md:items-center justify-between">
        <h2 className="capitalize text-4xl not-italic font-semibold leading-normal">
          Trips Details
        </h2>
        <p className="not-italic text-base font-medium leading-6">
          Track your earnings and trip performance
        </p>
      </header>

      <div className="flex gap-2 w-full items-center">
        <StatsCards
          className="border border-gray-300 w-40 md:w-64 gap-2"
          title="Current Passengers"
          value={currentPassengers}
          image={<BitcoinBag className="h-4 w-4 aspect-square flex-shrink-0" />}
        />
        <StatsCards
          className="border border-gray-300 w-40 md:w-64 gap-2"
          title="Total Passengers"
          value={totalPassengers}
          image={<Wallet className="h-4 w-4 aspect-square flex-shrink-0" />}
        />
      </div>

      <div className="lg:w-[1050px]">
        <TripsPage className="" tripData={rideRequests} onView={setSelectedTrip} />
      </div>

      {selectedTrip && (
        <Modal closeModal={() => setSelectedTrip(null)} position="bottom">
          <TripDetailsModal trip={selectedTrip} />
        </Modal>
      )}
    </div>
  );
};
