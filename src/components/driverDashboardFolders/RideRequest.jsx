import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";
import { RideRequestsList } from "./RideRequestsList";
import { RideRequestDetails } from "./RideRequestDetails";
import { Requests } from "./Requests";

const mockRequests = [
  {
    id: "1",
    name: "Chibuike Emmanuel Emmanuel",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    eta: "5 mins",
    currentLocation: "University of Lagos",
    destination: "Yaba Market",
    fare: "₦2,500",
    rideType: "Standard",
    status: "Pending",
    date: "2023-10-01",
    pickup: "University Main Gate",
    luggage: [
      "https://randomuser.me/api/portraits/men/32.jpg",
      "https://randomuser.me/api/portraits/women/44.jpg",
      "https://randomuser.me/api/portraits/men/45.jpg",
    ],
    type: "Standard",
    time: "10:00 AM",
  },
  {
    id: "2",
    name: "Amaka Obi",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    eta: "8 mins",
    currentLocation: "Ikeja City Mall",
    destination: "Ojota Bus Stop",
    fare: "₦1,800",
    rideType: "Pool",
    status: "Accepted",
  },
  {
    id: "3",
    name: "Tunde Balogun",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    eta: "3 mins",
    currentLocation: "CMS Lagos Island",
    destination: "Lekki Phase 1",
    fare: "₦3,200",
    rideType: "Luxury",
    status: "Ongoing",
  },
];

export default function RideRequests() {
  const [selectedRequest, setSelectedRequest] = useState(null);

  // Simulating if there are no requests
  const requestsAvailable = mockRequests.length > 0;

  return (
    <div className="w-full min-h-screen relative bg-gradient-to-br from-white via-purple-100 to-white overflow-hidden">
      <Topbar />

      <div className="flex w-full">
        <Sidebar />

        <div className="flex w-[1057px] mt-40 ml-10 h-full gap-4">
          {/* 1. If there are NO requests, show Requests component */}
          {!requestsAvailable && <Requests />}

          {/* 2. If requests exist but no request is selected, show the list */}
          {requestsAvailable && !selectedRequest && (
            <RideRequestsList
              requests={mockRequests}
              onSelect={(req) => setSelectedRequest(req)}
            />
          )}

          {/* 3. If a request is selected, show details */}
          {selectedRequest && (
            <RideRequestDetails
              request={selectedRequest}
              onBack={() => setSelectedRequest(null)}
            />
          )}
        </div>
      </div>
    </div>
  );
}
