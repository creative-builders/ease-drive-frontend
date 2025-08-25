import { useState } from "react";
import { RideRequestsList } from "./RideRequestsList";
import { RideRequestDetails } from "./RideRequestDetails";
import { Requests } from "./Requests";
import { LiveGPSIcon } from "../../assets/icons/LiveGPSIcon";



export function RideRequests() {
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [requests, setRequests] = useState([]);

  const handleRefresh = (data) => {
    setRequests(data);
  };


  const handleBack = () => {
    setSelectedRequest(null);
  };

  return (
    // <div className="lg:w-full w-full min-h-screen relative bg-gradient-to-br from-white via-purple-100 to-white overflow-hidden">
    <div className="flex lg:w-full w-[100%] lg:justify-start justify-center  ">
      <div className="">
        {/* 1. If there are no requests */}

        <div className="lg:w-[1000px] w-[351px] flex lg:flex-row flex-col gap-1  lg:justify-between justify-center m-auto lg:-ml-5 items-start py-2 mt-2 mb-2">
          <h2 className="lg:text-2xl font-semibold text-[18px]">Customers Ride Request</h2>
          <p className="lg:text-[16px] text-base">
            <LiveGPSIcon className="inline mr-4 mb-1" />
            You’re currently at: UNN Hostel C, Nsukka</p>
        </div>
        <div className="flex lg:w-[100%] w-[80%] lg:justify-start justify-center m-auto items-start
           lg:mt-0 mt-4 lg:-ml-10 ml lg:h-full gap-4">
          {requests.length === 0 ? (
            <Requests refresh={handleRefresh} />
          ) : (
            <>
              {/* --- Large screens: always show list --- */}
              <div className="hidden lg:block">
                <RideRequestsList requests={requests} onSelect={setSelectedRequest} />
              </div>

              {/* --- Large screens: show details if selected --- */}
              {selectedRequest && (
                <div className="hidden lg:block">
                  <RideRequestDetails request={{ ...selectedRequest, onBack: handleBack }} />
                </div>
              )}

              {/* --- Mobile: show list OR details --- */}
              <div className="block lg:hidden ">
                {!selectedRequest ? (
                  <RideRequestsList requests={requests} onSelect={setSelectedRequest} />
                ) : (
                  <RideRequestDetails request={{ ...selectedRequest, onBack: handleBack }} />
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
    // </div>
  );
}
