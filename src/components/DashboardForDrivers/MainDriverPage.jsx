
import RecentTrips from "./RecentTrips";
// import { Trips as RecentTrips } from "./RecentTrips";
import StatsCards from "./StatsCards";
import DriverTrackInfo from "./DriverTrackInfo";
import DriverNotifications from "./DriverNotifications";
import RideRequests from "./RequestRides";
import { CarIcon } from "../../assets/icons/CarIcon";
import { Wallet } from "../../assets/icons/Wallet";
import { BitcoinBag } from "../../assets/icons/BitcoinBag";
import { Star } from "../../assets/icons/Star";
import PaymentResult from "../../components/PaymentResult"
import { userAtom } from "../atoms/userAtom";
import { useMutation } from "@tanstack/react-query";
import { useRecoilValue } from "recoil";
import { useState, useEffect } from "react";
import { getDriverBids } from "../../store/auth/driver/api";


export default function MainDriverPage() {

  const userData = useRecoilValue(userAtom);
  const [driverData, setDriverData] = useState({})
  const [rideRequests, setRideRequests] = useState([])

  const userId = userData?._id;

  const { mutate: getBidedRides, isLoading } = useMutation(
    getDriverBids,
    {
      onSuccess: (data) => {
        setRideRequests(data);
      },
      onError: (error) => {
        toast.error(error.response?.data?.message || error.message);
      }
    }
  );

  useEffect(() => {
    setDriverData(userData?.driverProfile)
    getBidedRides({ userId: userId })
  }, [userData]);

 const totalTrip = rideRequests?.filter(
      (booking) => booking?.status?.toLowerCase()  == "completed"
    );
  const { current_earnings, total_earnings_, average_rating, total_trip } = driverData


  return (
    <div className="p-6 space-y-6 w-full">
      <DriverTrackInfo />
      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCards title="Total Trips" value={totalTrip?.length} subtitle="Trips completed" change="+3.2%" image={<CarIcon className="h-5 w-5" />} />
        <StatsCards title="Current Earnings" value={`₦${current_earnings?.toFixed(2)}`} subtitle="Earnings this month" change="+3.2%" image={<BitcoinBag />} />
        <StatsCards title="Total Earnings" value={`₦${total_earnings_?.toFixed(2)}`} subtitle="Since account activation" change="+3.2%" image={<Wallet />} />
        <StatsCards title="Average Rating" value={average_rating} subtitle="Based on 58 reviews" change="-0.1%" image={<Star />} />
      </div>

      {/* Middle Section */}
      <div className="flex gap-2 lg:flex-row flex-col ">
        <RideRequests isPreview={true} />
        <DriverNotifications isPreview={true} />
      </div>

      {/* Recent Trips */}
      <div className=" lg:w-full w-[395px]">
        <RecentTrips />
      </div>

      {/* <PaymentResult /> */}
    </div>
  );
}
