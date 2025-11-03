import { useState, useEffect } from "react";
import { RideRequestCard } from "./RideRequestCard";
import { FilterIcon } from "../../../assets/icons/FilterIcon";
import { Filter } from "../Filter";

export function RideRequestsList({ requests, onSelect }) {
  const [filter, setFilter] = useState("Filter");
  const [displayList, setDisplayList] = useState("block");
  const [sortedRequests, setSortedRequests] = useState(requests);

  useEffect(() => {
    setSortedRequests(requests);
  }, [requests]);

  // Handle filter change
  const handleFilterChange = (option) => {
    let sorted = [...requests];

    if (option === "Recent") {
      sorted.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    } else if (option === "Older") {
      sorted.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    }

    setSortedRequests(sorted);
  };


  return (
    <div className={`self-stretch lg:w-[560px] lg:mb-6 px-5 py-3 pb-4 bg-white rounded-lg inline-flex flex-col
     lg:justify-start justify-center lg:items-start gap-2 relative`}>
      <div className="lg:w-[490px] w-[335px]  justify-center items-center 
      inline-flex lg:justify-start lg:items-center gap-[10%] lg:gap-[30%]">
        <div className="text-black lg:text-lg text-base font-semibold font-poppins">
          Ongoing Ride Requests
        </div>

        <div className="mx-4">
          <Filter
            options={["Recent", "Older"]}
            title="Filter"
            onChange={handleFilterChange}
          />
        </div>
      </div>

      {/* Render filtered requests */}
      {
        sortedRequests.map((req, index) => (
          <div
            key={index}
            onClick={() => {
              onSelect(req)
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
              }}
      className="cursor-pointer w-full font-poppins"
          >
      <RideRequestCard request={req} />
    </div>
  ))
}
    </div >
  );
}

