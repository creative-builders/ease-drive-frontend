    
import { BitcoinBag } from "../../../assets/icons/BitcoinBag";
import { Wallet } from "../../../assets/icons/Wallet";
import StatsCards from "../../../components/DashboardForDrivers/StatsCards";
import { data } from "../../../components/driverDashboardFolders/earnings/tripData";
import { TripsPage } from "../../../components/driverDashboardFolders/earnings/TripsTable";


export const Trips = () => {
  const tripData = [
    {
      date: "17 July 2024",
      pickup: "Bello Hostel",
      dropoff: "SUB",
      status: "Pending",
      earnings: "₦1,200",
    },
    {
      date: "12 June 2024",
      pickup: "Town",
      dropoff: "Hilltop",
      status: "Paid",
      earnings: "₦2,000",
    },
    {
      date: "28 August 2024",
      pickup: "Town",
      dropoff: "odenigwe",
      status: "Paid",
      earnings: "₦4,000",
    },
    {
      date: "3 Septmeber 2024",
      pickup: "city",
      dropoff: "Odim street",
      status: "Paid",
      earnings: "₦6,000",
    },
  ];

  const currentPassengers = 4;
  const totalPassengers = 102;

  const handleView = (trip) => {
    console.log("Viewing trip:", trip);
    // 👉 Navigate to trip details or open modal here
  };

  return (
    <div className="border border-red-500 flex px-3 py-0 flex-col items-start gap-4">
      <header className="flex flex-col md:flex-row w-full items-start md:items-center justify-between border border-red-500">
        <h2 className="capitalize text-[32px] not-italic font-semibold leading-normal">trips details</h2>
        <p className="not-italic text-base font-medium leading-6">Track your earnings and trip performance</p>
      </header>
      <div className="flex gap-2 w-full items-center">
        <StatsCards className="border border-[#E7E7E7] w-40 md:w-64 gap-3" title="Current Passengers" value={currentPassengers} image={<BitcoinBag className="h-5 w-5" />} />
        <StatsCards className="border border-[#E7E7E7] w-40 md:w-64 gap-3" title="Total Passengers" value={totalPassengers} image={<Wallet className="h-5 w-5" />} />
      </div>

      <TripsPage className="w-full" tripData={data} onView={handleView} />
    </div>
  );
};
