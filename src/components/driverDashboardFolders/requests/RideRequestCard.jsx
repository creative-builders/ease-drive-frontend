import { useState, useEffect } from "react";
import { LocationIcon } from "../../../assets/icons/LocationIcon";
import { getETA } from "../../../utils/getETA"
import { useGeolocation } from "../../../hooks/useGeolocation";



export function RideRequestCard({ request }) {
  const { booker, location, destination, status, tripType, luggages, luggageImages, totalBids, updatedAt } = request
  // const [eta, setEta] = useState({})

  const {
    coords,
    locationEnabled,
    isOpen, loading,
    fetchLocation,
    setLocationEnabled,
    setIsOpen,
    setIsMenuOpen
  } = useGeolocation();


  // useEffect(() => {

  //   if (!coords || !destination?.coordinates) return;

  //   const fetchETA = async () => {
  //     const result = await getETA(coords, destination.coordinates);
  //     setEta(result);

  //   };

  //   fetchETA();
  // }, [coords, destination]);



  return (
    <div className="self-stretch w-full py-2.5 border-b border-neutral-100 inline-flex justify-start items-center gap-4 -z-1">
      <div className="flex justify-start flex-1 w-full lg:items-center items-start lg:gap-2 gap-2 font-poppins">

        <div className=" rounded-full overflow-hidden w-[40px] h-[40px] lg:w-[80px] lg:h-[80px] flex-shrink-0">
          <img
            className="w-full h-full object-cover"
            src={booker.profileImage}
            alt={booker.name}
          />
        </div>


        <div className="basis-[280px] lg:basis-[500px] inline-flex flex-col justify-start items-start gap-2">
          <div className="inline-flex justify-start items-center gap-4">
            <div className="justify-start text-black lg:text-base text-sm font-semibold font-poppins">
              {booker.name}
            </div>
          </div>

          <div className="flex flex-col justify-start items-start gap-1">
            <div className="inline-flex justify-start items-start gap-4">
              <div className="flex lg:justify-center items-center lg:gap-2 gap-2">
                <div className="lg:w-5 lg:h-5 w-4 h-4 relative text-primary-700">
                  <LocationIcon fill="#1A7B2C" className={`text-primary-700`} />
                </div>
                <div className="justify-start text-black lg:text-xs text-[10px] font-normal font-poppins leading-normal">
                  {/* {eta && eta.formattedETA ? (

                    <p>{eta.formattedETA} away from you</p>
                  ) : (
                    <p>Calculating ETA...</p>
                  )} */}

                     <p>1hour 20mins away from you</p>
                </div>
              </div>
            </div>

            <div className="self-stretch inline-flex w-full justify-start items-baseline gap-2">
              <div className="flex-shrink-0 whitespace-nowrap text-primary-950 lg:text-sm text-xs font-semibold font-poppins">
                Current location:
              </div>
              <div className="text-neutral-900 lg:text-xs text-[10px] font-normal font-poppins">
                {location.locationName}
              </div>
            </div>

            <div className="self-stretch w-full flex justify-start items-baseline gap-2">
              <div className="flex-shrink-0 whitespace-nowrap text-primary-950 lg:text-sm text-xs font-semibold font-poppins">
                Going to:
              </div>
              <div className="text-neutral-900 lg:text-xs text-[10px] font-normal font-poppins">
                {destination.destinationName}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


// 