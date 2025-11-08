
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

export default function MainDriverPage() {
  return (
    <div className="p-6 space-y-6 w-full">
      <DriverTrackInfo />
      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCards title="Total Trips" value="0" subtitle="Trips completed" change="+3.2%" image={<CarIcon className="h-5 w-5" />} />
        <StatsCards title="Current Earnings" value="₦0.00" subtitle="Earnings this month" change="+3.2%" image={<BitcoinBag />} />
        <StatsCards title="Total Earnings" value="₦0.00" subtitle="Since account activation" change="+3.2%" image={<Wallet />} />
        <StatsCards title="Average Rating" value="0.00" subtitle="Based on 58 reviews" change="-0.1%" image={<Star />} />
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

      <PaymentResult />
    </div>
  );
}
