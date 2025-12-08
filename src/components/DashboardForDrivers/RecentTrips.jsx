import React, { useState, useEffect } from "react";
import { FilterIcon } from "../../assets/icons/FilterIcon";
import { getDriverBids } from "../../store/auth/driver/api";
import { useMutation } from "@tanstack/react-query";
import { userAtom } from "../atoms/userAtom";
import { useRecoilValue } from "recoil"
import { formatDate } from "../../utils/formatDate";
import { ConfirmBookingLoader } from "../dashboard/loaders/ConfirmBookingLoader";
import { TripsPage } from "../driverDashboardFolders/earnings/TripsTable";
import { Modal } from "../Modal";
import { TripDetailsModal } from "../driverDashboardFolders/earnings/TripDetailsModal";




export default function RecentTrips() {
  const [showMenu, setShowMenu] = useState(false);
  const [selected, setSelected] = useState("Weekly");
  const [rideRequests, setRideRequests] = useState([]);
  const [isFetching, setIsFetching] = useState(true)
  const userData = useRecoilValue(userAtom);
  const userId = userData?._id;



  const handleSelect = (option) => {
    setSelected(option);
    setShowMenu(false);
  };

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

  
  const [selectedTrip, setSelectedTrip] = useState(null);


  const slicedRequest = rideRequests.slice(0, 4)

  if (isFetching) {
    return (
      <ConfirmBookingLoader type="card" items={2} />
    )
  }

  return (
    <>
      <TripsPage className="w-full" tripData={slicedRequest} onView={setSelectedTrip} />

      {
        selectedTrip && (
          <Modal closeModal={() => setSelectedTrip(null)} position="bottom">
            <TripDetailsModal trip={selectedTrip} />
          </Modal>
        )
      }
    </>
    // <div className="bg-white shadow rounded-lg p-4 border">

    //   <div className="flex justify-between items-center mb-4 relative">
    //     <h2 className="font-semibold text-2xl">Recent Trips</h2>

    //     {/* Dropdown */}
    //     <div className="relative">
    //       {/* Selected Option as Button */}
    //       <button
    //         onClick={() => setShowMenu((prev) => !prev)}
    //         className="text-[#5E69F6] text-base flex items-center gap-2 w-fit font-medium not-italic leading-normal"
    //       >
    //         {selected}
    //         <FilterIcon className="w-4 h-4" />
    //       </button>

    //       {/* Dropdown Menu */}
    //       {showMenu && (
    //         <div className="absolute right-0 mt-2 w-[134px] p-3 flex items-start
    //         flex-col flex-shrink-0 bg-white rounded-lg shadow-[0_4px_4px_0_rgba(0,0,0,0.09)] border border-gray-200 z-50">
    //           {["Daily", "Weekly", "Monthly"].map((option) => (
    //             <div
    //               key={option}
    //               onClick={() => handleSelect(option)}
    //               className={`px-4 py-2 cursor-pointer hover:bg-gray-500 w-full border-b-2 border-gray-200 ${selected === option ? "text-green-500 font-semibold" : ""
    //                 }`}
    //             >

    //               {option}
    //             </div>
    //           ))}
    //         </div>
    //       )}
    //     </div>
    //   </div>

    //   <table className="w-full table-fixed border-collapse text-sm">
    //     <thead>
    //       <tr className="text-left text-gray-700 lg:text-base text-xs font-semibold leading-[140%] capitalize border-b">
    //         <th className="py-2 w-[12%]">Date</th>
    //         <th className="w-[22%]">Pick-Up</th>
    //         <th className="w-[22%]">Drop-Off</th>
    //         <th className="w-[14%]">Status</th>
    //         <th className="w-[14%]">Earnings</th>
    //         <th className="w-[10%]">Action</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {slicedRequest.map((trip, i) => (
    //         <tr
    //           key={i}
    //           className="border-b text-gray-900 lg:text-sm text-[10px] font-medium leading-normal"
    //         >
    //           <td className="py-2 truncate">{formatDate(trip.createdAt).date}</td>
    //           <td className="break-words whitespace-normal max-w-[180px]">
    //             {trip.location.locationName}
    //           </td>
    //           <td className="break-words whitespace-normal max-w-[180px]">
    //             {trip.destination.destinationName}
    //           </td>
    //           <td>
    //             <span
    //               className={`px-2 py-1 text-xs rounded ${trip.status === "Completed"
    //                   ? "bg-green-100 text-green-600"
    //                   : "bg-yellow-100 text-yellow-600"
    //                 }`}
    //             >
    //               {trip.status}
    //             </span>
    //           </td>
    //           <td>₦{trip.bidPrice}</td>
    //           <td>
    //             <a href="#" className="text-green-600 hover:underline">
    //               view
    //             </a>
    //           </td>
    //         </tr>
    //       ))}
    //     </tbody>
    //   </table>
    // </div>
  );
}


// import { data } from "../driverDashboardFolders/earnings/tripData";
// import { TripsPage } from "../driverDashboardFolders/earnings/TripsTable";


// export const Trips = () => {
//   const tripData = [
//     {
//       date: "17 July 2024",
//       pickup: "Bello Hostel",
//       dropoff: "SUB",
//       status: "Pending",
//       earnings: "₦1,200",
//     },
//     {
//       date: "12 June 2024",
//       pickup: "Town",
//       dropoff: "Hilltop",
//       status: "Paid",
//       earnings: "₦2,000",
//     },
//     {
//       date: "28 August 2024",
//       pickup: "Town",
//       dropoff: "odenigwe",
//       status: "Paid",
//       earnings: "₦4,000",
//     },
//     {
//       date: "3 Septmeber 2024",
//       pickup: "city",
//       dropoff: "Odim street",
//       status: "Paid",
//       earnings: "₦6,000",
//     },
//   ];

//   return (
//     <div>
//       <TripsPage tripData={data} />
//     </div>
//   );
// };
