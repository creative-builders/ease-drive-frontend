import React, { useState } from "react";
// import { FilterIcon } from "../../assets/icons/filterIcon";
import { FilterIcon } from "../../assets/icons/FilterIcon";



const trips = [
  { date: "17 July 2024", pickup: "Bello Hostel", dropoff: "SUB", status: "Pending", earnings: "₦1,200" },
  { date: "17 July 2024", pickup: "Town", dropoff: "Hilltop", status: "Paid", earnings: "₦2,000" },
  { date: "17 July 2024", pickup: "Town", dropoff: "Hilltop", status: "Paid", earnings: "₦2,000" }
];

export default function RecentTrips() {

  const [showMenu, setShowMenu] = useState(false);
  const [selected, setSelected] = useState("Weekly");

  const handleSelect = (option) => {
    setSelected(option);
    setShowMenu(false);
  };

  return (
    <div className="bg-white shadow rounded-lg p-4 border">

      <div className="flex justify-between items-center mb-4 relative">
        <h2 className="font-semibold text-2xl">Recent Trips</h2>

        {/* Dropdown */}
        <div className="relative">
          {/* Selected Option as Button */}
          <button
            onClick={() => setShowMenu((prev) => !prev)}
            className="text-[#5E69F6] text-base flex items-center gap-2 w-fit font-medium not-italic leading-normal"
          >
            {selected}
            <FilterIcon className="w-4 h-4" />
          </button>

          {/* Dropdown Menu */}
          {showMenu && (
            <div className="absolute right-0 mt-2 w-[134px] p-3 flex items-start
            flex-col flex-shrink-0 bg-white rounded-lg shadow-[0_4px_4px_0_rgba(0,0,0,0.09)] border border-gray-200 z-50">
              {["Daily", "Weekly", "Monthly"].map((option) => (
                <div
                  key={option}
                  onClick={() => handleSelect(option)}
                  className={`px-4 py-2 cursor-pointer hover:bg-gray-500 w-full border-b-2 border-gray-200 ${
                    selected === option ? "text-green-500 font-semibold" : ""
                  }`}
                >
                  
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left text-[#333] text-base not-italic font-semibold leading-[140%] capitalize border-b">
            <th className="py-2">Date</th>
            <th>Pick-Up</th>
            <th>Drop-Off</th>
            <th>Status</th>
            <th>Earnings</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {trips.map((trip, i) => (
            <tr key={i} className="border-b text-[#4B5563] text-xs font-medium not-italic leading-normal">
              <td className="py-2">{trip.date}</td>
              <td>{trip.pickup}</td>
              <td>{trip.dropoff}</td>
              <td>
                <span className={`px-2 py-1 text-xs rounded ${trip.status === "Paid" ? "bg-green-100 text-green-600" : "bg-yellow-100 text-yellow-600"}`}>
                  {trip.status}
                </span>
              </td>
              <td>{trip.earnings}</td>
              <td><a href="#" className="text-green-600">view</a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
