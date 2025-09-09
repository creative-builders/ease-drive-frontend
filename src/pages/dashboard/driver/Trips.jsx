import { useState } from "react";
import { BitcoinBag } from "../../../assets/icons/BitcoinBag";
import { Wallet } from "../../../assets/icons/Wallet";
import StatsCards from "../../../components/DashboardForDrivers/StatsCards";
import { data } from "../../../components/driverDashboardFolders/earnings/tripData";
import { TripDetailsModal } from "../../../components/driverDashboardFolders/earnings/TripDetailsModal";
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

  // mockTrips.js

  const mockTrip = {
    id: "trip-123",
    pickup: "Bello Hotel",
    dropoff: "SUB",
    droppedOff: 3,
    cancelled: 1,
    totalEarnings: 5200,
    status: "Completed",
    passengers: [
      {
        id: "p1",
        name: "John Ndubuisi Chukwuemeka",
        profileImage: "https://randomuser.me/api/portraits/men/32.jpg",
        tripType: "Drop-off",
        status: "Dropped off",
        fare: "₦1,500",
        location: "20 mins away from you",
        time: "08:15 AM",
        date: "Jun 24, 2024",
        rating: 4.2,
      },
      {
        id: "p2",
        name: "Jerome Bell",
        profileImage: "https://randomuser.me/api/portraits/men/22.jpg",
        tripType: "Drop-off",
        status: "Cancelled",
        fare: "₦2,500",
        location: "20 mins away from you",
        time: "08:15 AM",
        date: "Jun 24, 2024",
        rating: null,
      },
      {
        id: "p3",
        name: "Jerome Bell",
        profileImage: "https://randomuser.me/api/portraits/men/22.jpg",
        tripType: "Drop-off",
        status: "Dropped off",
        fare: "₦2,500",
        location: "20 mins away from you",
        time: "08:15 AM",
        date: "Jun 24, 2024",
        rating: null,
      },
      {
        id: "p4",
        name: "John Ndubuisi Chukwuemeka",
        profileImage: "https://randomuser.me/api/portraits/men/32.jpg",
        tripType: "Round-Trip",
        status: "Dropped off",
        fare: "₦3,700",
        location: "20 mins away from you",
        time: "08:15 AM",
        date: "Jun 24, 2024",
        rating: 3.5,
      },
    ],
  };



  const currentPassengers = 4;
  const totalPassengers = 102;

  const [selectedTrip, setSelectedTrip] = useState(null);



  return (
    <div className="flex px-3 py-0 flex-col items-start gap-4">
      <header className="flex flex-col md:flex-row w-full items-start md:items-center justify-between">
        <h2 className="capitalize text-[32px] not-italic font-semibold leading-normal">trips details</h2>
        <p className="not-italic text-base font-medium leading-6">Track your earnings and trip performance</p>
      </header>
      <div className="flex gap-2 w-full items-center">
        <StatsCards className="border border-[#E7E7E7] w-40 md:w-64 gap-3" title="Current Passengers" value={currentPassengers} image={<BitcoinBag className="h-5 w-5" />} />
        <StatsCards className="border border-[#E7E7E7] w-40 md:w-64 gap-3" title="Total Passengers" value={totalPassengers} image={<Wallet className="h-5 w-5" />} />
      </div>

      <TripsPage className="w-full" tripData={data} onView={setSelectedTrip} />
        {/* Modal */}
        <TripDetailsModal
          isOpen={!!selectedTrip}
          // trip={selectedTrip}
          trip={mockTrip}
          onClose={() => setSelectedTrip(null)}
        />
    </div>
  );
};
