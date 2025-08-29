
import { useState } from "react";
import { RideRequestsList } from "./RideRequestsList";
import { RideRequestDetails } from "./RideRequestDetails";
import { Requests } from "./Requests";
import { LiveGPSIcon } from "../../assets/icons/LiveGPSIcon";
import { RequestsMap } from "./RequestsMap";


export function RideRequests() {
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [requests, setRequests] = useState([]);
  const [showMap, setShowMap] = useState(false);
  const [acceptedRequest, setAcceptedRequest] = useState(null);
  const [toggleMapList, setToggleMapList] = useState(false)


  const myLocation = { lat: 6.5244, lng: 3.3792 };      // Driver (Lagos mainland)
  const destination = { lat: 6.465422, lng: 3.406448 };
  const activeRequest = acceptedRequest || selectedRequest;

  const handleRefresh = (data) => {
    setRequests(data);
  };

  const handleBack = () => {
    setSelectedRequest(null);
  };

  // called when success modal closes
  const handleRideAccepted = (request) => {
    setAcceptedRequest(request);
    setShowMap(true);
  };

  const handleMapToggle = () =>{
    setToggleMapList(!toggleMapList)
  }

  return (
    <div className="flex lg:w-full w-[100%] lg:justify-start justify-center">
      <div>
        <div className="lg:w-[990px] w-[351px] flex lg:flex-row flex-col gap-1 lg:justify-between justify-center m-auto lg:-ml-10 items-start py-2">
          <h2 className="lg:text-2xl font-semibold text-[18px] font-poppins">
            Customers Ride Request
          </h2>
          <p className="lg:text-[16px] text-base inline-flex items-center font-poppins">
            <div className="bg-primary-50 text-green-900 lg:w-[38px] lg:h-[36px] w-[28px] h-[26px] rounded-full px-2 py-1 mr-2 justify-center inline-flex items-center">
              <LiveGPSIcon className="inline font-poppins" />
            </div>
            You’re currently at: UNN Hostel C, Nsukka
          </p>
        </div>

        <div className="flex lg:w-[100%] w-[80%] lg:justify-start justify-center m-auto items-start lg:mt-0 mt-4 lg:-ml-10 ml lg:h-full gap-4">
          {showMap && acceptedRequest ? (
            <>
              <div className="hidden lg:block">
                <RequestsMap
                  driverLocation={myLocation}
                  passengerLocation={destination}
                  request={acceptedRequest}
                   btnFn={handleMapToggle}

                />
              </div>

              <div className="hidden lg:block">
                <RideRequestDetails
                  request={{ ...acceptedRequest, onBack: handleBack  }}
                  onRideAccepted={handleRideAccepted}
                  btnName="Track Passenger"
                  btnFn={handleMapToggle}
                  
                  
                />
              </div>
              {/* Mobile */}
              <div className="block lg:hidden">
                {toggleMapList ? (
                  <RequestsMap
                    driverLocation={myLocation}
                    passengerLocation={destination}
                    request={acceptedRequest}
                     btnFn={handleMapToggle}

                  />
                ) : (
                  <RideRequestDetails
                    request={{ ...acceptedRequest, onBack:handleBack }}
                    onRideAccepted={handleRideAccepted}
                    btnName="Track Passenger"
                    btnFn={() => handleMapToggle()}
                  />
                )}
              </div>

            </>
          ) : requests.length === 0 ? (
            <Requests refresh={handleRefresh} />
          ) : (
            <>
              {/* Large screens */}
              <div className="hidden lg:block">
                <RideRequestsList
                  requests={requests}
                  onSelect={setSelectedRequest}
                />
              </div>

              {activeRequest && (
                <div className="hidden lg:block">
                  <RideRequestDetails
                    request={{ ...activeRequest, onBack: handleBack }}
                    onRideAccepted={handleRideAccepted}
                     btnFn={() => {}}
                  />
                </div>
              )}

              {/* Mobile */}
              <div className="block lg:hidden">
                {!activeRequest ? (
                  <RideRequestsList
                    requests={requests}
                    onSelect={setSelectedRequest}
                  />
                ) : (
                  <RideRequestDetails
                    request={{ ...activeRequest, onBack: handleBack }}
                    onRideAccepted={handleRideAccepted}
                        btnFn={() => {}}
                  />
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
