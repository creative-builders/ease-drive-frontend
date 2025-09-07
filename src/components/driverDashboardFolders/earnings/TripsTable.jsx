import { useState } from "react";
import { Pagination } from './Pagination'
import { Filter } from '../Filter'


function filterTripsByRange(trips, range) {
  const today = new Date();

  return trips.filter((trip) => {
    const tripDate = new Date(trip.date);
    const diffInDays = (today - tripDate) / (1000 * 60 * 60 * 24);

    if (range === "Recent") {
      return true; // show all
    }
    if (range === "Weekly") {
      return diffInDays <= 7;
    }
    if (range === "Monthly") {
      return (
        tripDate.getMonth() === today.getMonth() &&
        tripDate.getFullYear() === today.getFullYear()
      );
    }
    if (range === "Yearly") {
      return tripDate.getFullYear() === today.getFullYear();
    }
    return true;
  });
}


export function TripsTable({ columns, data }) {
  const [filter, setFilter] = useState("All");
  const [sortedItems, setSortedItems] = useState(data);

 
  return (
    <div className="p-4 bg-white rounded-2xl shadow ">
      {/* Header */}
      <div className="flex w-[100%] m-auto items-center">
        <div className="flex w-[100%] justify-start">
          <h1 className="lg:text-2xl text-sm font-semibold font-poppins">Recent Trips</h1>
        </div>
        <div className="flex w-[90%] justify-end">
          {/* <Filter
            itemsArray={data}
            options={["Recent", "Weekly", "Monthly", "Yearly"]}
            onSort={(sortedItems) => setSortedItems(sortedItems)}
            title="All"
          /> */}

          <Filter
            itemsArray={data}
            options={["Recent", "Weekly", "Monthly", "Yearly"]}
            onSort={(selected) => {
              const filtered = filterTripsByRange(data, selected);
              setSortedItems(filtered);
            }}
            title="All"
          />
        </div>
      </div>

      {/* Table */}
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
            {sortedItems.map((row, i) => (
              <tr key={i} className="border-b hover:bg-gray-50">
                {columns.map((col) => (
                  <td
                    className="py-3"
                    key={col.accessor}

                  >
                    <div className={`px-4 py-2 -mb-2 lg:text-xs text-[10px] font-medium
                      ${col.accessor === "status" && row[col.accessor] === "Paid" ? "text-green-600 bg-green-50 rounded-[4px] text-center  " : ""}
                      ${col.accessor === "status" && row[col.accessor] === "Pending" ? "text-orange-600 bg-orange-50 rounded-[4px] text-center" : ""}
                      ${col.accessor === "status" && row[col.accessor] === "Cancelled" ? "text-red-600 bg-red-50 rounded-[4px] text-center" : ""}
                      ${col.accessor !== "status" ? "text-gray-600" : ""}
                    `}>
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
    </div>
  );
}

// import { Pagination } from './Pagination'
export function TripsPage({tripData}) {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;



const data = tripData
  const totalPages = Math.ceil(data.length / pageSize);

  // Slice data per page
  const currentData = data.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  const columns = [
    { Header: "Date", accessor: "date" },
    { Header: "Pick-Up", accessor: "pickup" },
    { Header: "Drop-Off", accessor: "dropoff" },
    { Header: "Status", accessor: "status" },
    { Header: "Earnings", accessor: "earnings" },
  ];

  return (
    <div className="flex flex-col lg:gap-6 gap-4 ">
      <TripsTable columns={columns} data={currentData} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
