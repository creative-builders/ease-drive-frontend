    
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

  return (
    <div>
      <TripsPage tripData={data} />
    </div>
  );
};
