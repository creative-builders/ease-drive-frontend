import { useState } from "react";
import { RideRequestCard } from "./RideRequestCard";
import { FilterIcon } from "../../assets/icons/FilterIcon";

export function RideRequestsList({ requests, onSelect }) {
  const [filter, setFilter] = useState("Filter");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Sort based on filter
  const sortedRequests = [...requests].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);

    if (filter === "Recent") {
      return dateB - dateA; // newest first
    } else {
      return dateA - dateB; // oldest first
    }
  });

  return (
    <div className="self-stretch px-5 py-3 pb-4 bg-white rounded-lg inline-flex flex-col justify-start items-start gap-2 relative">
      <div className="w-[560px] inline-flex justify-start items-center gap-[40%]">
        <div className="text-black text-xl font-semibold font-['Inter']">
          Ongoing Ride Requests
        </div>

        {/* Filter dropdown */}
        <div className="relative">
          <div
            className="w-24 h-10 p-2.5 rounded-lg flex justify-center items-center gap-2.5 cursor-pointer"
            onClick={() => setDropdownOpen((prev) => !prev)}
          >
            <div className="text-accent-500 text-base font-medium font-['Poppins']">
              {filter}
            </div>
            <div className="w-6 h-6 relative">
              <FilterIcon />
            </div>
          </div>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
              <div
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  setFilter("Recent");
                  setDropdownOpen(false);
                }}
              >
                Recent
              </div>
              <hr />
              <div
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  setFilter("Older");
                  setDropdownOpen(false);
                }}
              >
                Older
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Render filtered requests */}
      {sortedRequests.map((req) => (
        <div
          key={req.id}
          onClick={() => onSelect(req)}
          className="cursor-pointer w-full"
        >
          <RideRequestCard request={req} />
        </div>
      ))}
    </div>
  );
}
