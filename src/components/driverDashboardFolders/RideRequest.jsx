import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";
import { RideRequestsList } from "./RideRequestsList";
import { RideRequestDetails } from "./RideRequestDetails";
import { Requests } from "./Requests";
import {data} from "./requestData";



export default function RideRequests() {
  const [selectedRequest, setSelectedRequest] = useState(null);
  const handleBack = () => {
    setSelectedRequest(null);
  };

  return (
    <div className="w-full min-h-screen relative bg-gradient-to-br from-white via-purple-100 to-white overflow-hidden">
      <div className="flex w-full">
        <div className="flex w-[100%] justify-center m-auto items-center lg:mt-20 mt-4 lg:ml-10 ml h-full gap-4">
          {/* 1. If there are no requests */}
          {data.length === 0 ? (
            <Requests />
          ) : (
            <>
              {/* 2. Always show the list */}
              <RideRequestsList
                requests={data}
                onSelect={setSelectedRequest}
              />

              {/* 3. Show details only if a request is selected */}
              {selectedRequest && (
                <RideRequestDetails
                  request={{ ...selectedRequest, onBack: handleBack }}
                />
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
