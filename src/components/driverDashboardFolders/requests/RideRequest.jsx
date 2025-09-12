
import { useState, useEffect } from "react";
import { RideRequestsList } from "./RideRequestsList";
import { RideRequestDetails } from "./RideRequestDetails";
import { Requests } from "./Requests";
import { LiveGPSIcon } from "../../../assets/icons/LiveGPSIcon";
import { RequestsMap } from "./RequestsMap";
import { locationAtom } from "../../atoms/locationAtom";
import { useRecoilValue } from "recoil";
import { useGeolocation } from "../../../hooks/useGeolocation";
import { Modal } from "../../Modal"
import CustomButton from "../../CustomButton"

export function RideRequests() {
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [requests, setRequests] = useState([]);
  const [showMap, setShowMap] = useState(false);
  const [acceptedRequest, setAcceptedRequest] = useState(null);
  const [toggleMapList, setToggleMapList] = useState(false)
  const [myLocation, setMyLocation] = useState(null);

  const location = useRecoilValue(locationAtom);

  const {
    coords,
    locationEnabled,
    isOpen, loading,
    fetchLocation,
    setLocationEnabled,
    setIsOpen,
    setIsMenuOpen
  } = useGeolocation();

  useEffect(() => {
    if (!location) {
      setIsOpen(true);
    } else if (coords && coords.lat && coords.lon) {
      setMyLocation({ lat: coords.lat, lng: coords.lon });
      setIsOpen(false);
    }
  }, [location, coords, setIsOpen]);
  // console.log(coords)
  const destination = { lat: 6.8570, lng: 7.3928 };
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

  const handleMapToggle = () => {
    setToggleMapList(!toggleMapList)
  }

  return (
    <div className="flex lg:w-full w-[100%] lg:justify-start justify-center">
      <div>
        <div className="lg:w-[990px] w-[351px] flex lg:flex-row flex-col gap-1 lg:justify-between justify-center m-auto lg:-ml-10 items-start py-2">
          <h2 className="lg:text-2xl font-semibold text-lg font-poppins">
            Customers Ride Request
          </h2>
          <div className="lg:text-base text-base inline-flex items-center font-poppins">
            <div className="bg-primary-50 text-green-900 lg:w-[38px] lg:h-[36px] w-[28px] h-[26px] rounded-full px-2 py-1 mr-2 justify-center inline-flex items-center">
              <LiveGPSIcon className="inline font-poppins" />
            </div>
            <p>{location ? location : "Fetching location..."}</p>
          </div>
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
                  request={{ ...acceptedRequest, onBack: handleBack }}
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
                    request={{ ...acceptedRequest, onBack: handleBack }}
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
                    btnFn={() => { }}
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
                    btnFn={() => { }}
                  />
                )}
              </div>
            </>
          )}
        </div>
      </div>
      {isOpen && (
        <Modal
          closeModal={() => setIsOpen(false)}
          modalIcon={<LiveGPSIcon />}
          title="Allow access to your live location"
          bodyText="Use My Current Location and Auto-fill the search bar with coordinates/nearest landmark"
        >
          <CustomButton
            isLoading={loading}
            name="Allow Access"
            extendedStyles="w-full h-[45px] lg:h-[60px] px-4 font-medium rounded-2xl bg-primary-700 text-white flex items-center justify-center"
            size="lg"
            btnClick={fetchLocation}
          />
        </Modal>
      )}
    </div>
  );
}
