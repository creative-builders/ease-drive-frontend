import { useState, useMemo, useEffect } from "react";
import { Pagination } from "./Pagination";
import { Filter } from "../Filter";

// Table only renders data
function TripsTable({ columns, data }) {
  return (
    <div className="p-4 bg-white rounded-2xl ">
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left border-collapse">
          <thead>
            <tr>
              {columns.map((col) => (
                <th
                  key={col.accessor}
                  className="px-4 py-2 font-semibold text-gray-800 lg:text-base text-xs border-b"
                >
                  {col.Header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id || row._id} className="border-b hover:bg-gray-50">
                {columns.map((col) => (
                  <td className="py-3" key={col.accessor}>
                    <div
                      className={`px-4 py-2 -mb-2 lg:text-xs text-[10px] font-medium
                        ${col.accessor === "status" && row[col.accessor] === "Paid"
                          ? "text-green-600 bg-green-50 rounded-[4px] text-center"
                          : ""}
                        ${col.accessor === "status" && row[col.accessor] === "Pending"
                          ? "text-orange-600 bg-orange-50 rounded-[4px] text-center"
                          : ""}
                        ${col.accessor === "status" && row[col.accessor] === "Cancelled"
                          ? "text-red-600 bg-red-50 rounded-[4px] text-center"
                          : ""}
                        ${col.accessor !== "status" ? "text-gray-600" : ""}
                      `}
                    >
                      {typeof col.Cell === "function"
                        ? col.Cell(row[col.accessor], row)
                        : row[col.accessor]}
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Empty state */}
      {data.length === 0 && (
        <div className="text-center py-6 text-gray-500 text-sm font-poppins">
          No trips found
        </div>
      )}
    </div>
  );
}

// Filter helper with improved date handling
function filterTripsByRange(trips, range) {
  if (!trips || !Array.isArray(trips)) return [];
  
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Normalize to start of day

  return trips.filter((trip) => {
    if (!trip.date) return false;
    
    const tripDate = new Date(trip.date);
    if (isNaN(tripDate.getTime())) return false;
    
    tripDate.setHours(0, 0, 0, 0); // Normalize to start of day

    if (range === "Recent") return true;
    
    const diffInDays = Math.max(0, Math.floor((today - tripDate) / (1000 * 60 * 60 * 24)));
    
    if (range === "Weekly") return diffInDays <= 7;
    if (range === "Monthly")
      return (
        tripDate.getMonth() === today.getMonth() &&
        tripDate.getFullYear() === today.getFullYear()
      );
    if (range === "Yearly") return tripDate.getFullYear() === today.getFullYear();

    return true;
  });
}

// Page handles filter + pagination
export function TripsPage({ tripData = [] }) {
  const [filter, setFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;

  // Apply filtering
  const filteredTrips = useMemo(() => {
    return filterTripsByRange(tripData, filter);
  }, [tripData, filter]);

  // Reset to page 1 when filter changes - this is safe
  useEffect(() => {
    setCurrentPage(1);
  }, [filter]);

  // Pagination
  const totalPages = Math.ceil(filteredTrips.length / pageSize);
  
  // Ensure currentPage doesn't exceed totalPages after filtering
  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(totalPages);
    }
  }, [totalPages, currentPage]);

  const currentData = useMemo(() => {
    return filteredTrips.slice(
      (currentPage - 1) * pageSize,
      currentPage * pageSize
    );
  }, [filteredTrips, currentPage, pageSize]);

  const columns = [
    { Header: "Date", accessor: "date" },
    { Header: "Pick-Up", accessor: "pickup" },
    { Header: "Drop-Off", accessor: "dropoff" },
    { Header: "Status", accessor: "status" },
    { Header: "Earnings", accessor: "earnings" },
  ];

  return (
    <div className="flex flex-col lg:gap-6 gap-4">
      <div className="bg-white rounded-2xl shadow">
        {/* Header with Filter */}
        <div className="flex justify-between items-center lg:px-6 lg:py-4 px-6 py-4">
          <h1 className="lg:text-2xl text-sm font-semibold font-poppins">
            Recent Trips
          </h1>
          <Filter
            options={["Recent", "Weekly", "Monthly", "Yearly"]}
            onChange={(selected) => setFilter(selected)}
            title="All"
          />
        </div>

        {/* Table */}
        <TripsTable columns={columns} data={currentData} />
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
}