import { useState } from "react";
import { RideRequestsList } from "./RideRequestsList";
import { RideRequestDetails } from "./RideRequestDetails";
import { Requests } from "./Requests";
import {data} from "./requestData";



export function RideRequests() {
  const [selectedRequest, setSelectedRequest] = useState(null);


  const handleBack = () => {
    setSelectedRequest(null);
  };

  return (
    // <div className="lg:w-full w-full min-h-screen relative bg-gradient-to-br from-white via-purple-100 to-white overflow-hidden">
      <div className="flex lg:w-full w-[100%] lg:justify-start justify-center  ">
        <div className="flex lg:w-[100%] w-[80%] lg:justify-start  justify-center m-auto items-start lg:mt-0 mt-4 lg:-ml-10 ml lg:h-full gap-4">
           {/* 1. If there are no requests */}
          {data.length === 0 ? (
            <Requests />
          ) : (
            <>
              {/* --- Large screens: always show list --- */}
              <div className="hidden lg:block">
                <RideRequestsList requests={data} onSelect={setSelectedRequest} />
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
                  <RideRequestsList requests={data} onSelect={setSelectedRequest} />
                ) : (
                  <RideRequestDetails request={{ ...selectedRequest, onBack: handleBack }} />
                )}
              </div>
            </>
          )}
        </div>
      </div>
    // </div>
  );
}
