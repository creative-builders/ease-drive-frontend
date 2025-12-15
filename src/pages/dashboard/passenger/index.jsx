import { useEffect, useRef, useState } from "react";
import BackgroundMap from "../../../components/dashboard/BackgroundMap";
import { Modal } from "../../../components/Modal";
import { LiveGPSIcon } from "../../../assets/icons/LiveGPSIcon";
import CustomButton from "../../../components/CustomButton";
import { GoBackIcon } from "../../../assets/icons/GoBackIcon";
import { HamburgerIcon } from "../../../assets/icons/HamburgerIcon";
import { useGeolocation } from "../../../hooks/useGeolocation";
import { FormProvider, useStepFlowContext } from "../../../hooks/useStepFlowFormContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createRide, fetchRideById, initializePayment } from "../../../store/users/api";
import toast from "react-hot-toast";
import { ProgressBar } from "../../../components/ProgressBar";
import { useRecoilValue } from "recoil";
import { userAtom } from "../../../components/atoms/userAtom";
import { useLocation, useNavigate } from "react-router-dom";
import { CreateRideSection } from "../../../components/dashboard/CreateRideSection";
import { format } from "date-fns";
import { trimText } from "../../../utils/trimeText";
import { ReviewBadgeIcon } from "../../../assets/icons/ReviewBadgeIcon";
import { Divider } from "../../../components/Divider/Divider";
import { TaxiCarIcon } from "../../../assets/icons/TaxiCarIcon";
import { MotorcycleIcon } from "../../../assets/icons/MotocycleIcon";
import { BusIcon } from "../../../assets/icons/BusIcon";


const PassengerDashboardIndexContext = () => {
  const [expanded, setExpanded] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isSearchingDrivers, setIsSearchingDrivers] = useState(false);
  const [refreshTrigger, setRefreshTrigger] = useState(0); 
  const [rideId, setRideId] = useState(null);
  const [driverStatus, setDriverStatus] = useState("searching"); 
  const currentUser  = useRecoilValue(userAtom);
  const navigate = useNavigate();
  const location = useLocation();

  const isFromBookDriver =
  location.state?.source === "book-driver" &&
  location.state?.confirmBooking;

 const VEHICLE_ICON_MAP = {
  Keke: TaxiCarIcon,
  Motorcylcle: MotorcycleIcon,
  "Regular Bus": BusIcon,
  Truck: BusIcon,
  Car: TaxiCarIcon,
 "Shuttle Bus": BusIcon,

};

  const pollingRef = useRef(null);

  const { 
    coords,  
    locationEnabled, 
    isOpen, 
    loading, 
    fetchLocation,
    setLocationEnabled,
    setIsOpen,
    setIsMenuOpen,
    locationName
  } = useGeolocation();

  const {
      setFormData,
      formData
  } = useStepFlowContext();

  const queryClient = useQueryClient();


  useEffect(() => {
    setFormData(prev => ({
      ...prev,
      location:{
        locationName,
        coordinates:{
          lat:coords?.lat,
          long:coords?.lon
        }
      }
    }))
  },[coords,locationName]);


// Fetch ride status every 2 seconds
  const startPollingRide = (id) => {
    stopPollingRide();

    pollingRef.current = setInterval(async () => {
      try {
        const ride = await fetchRideById(currentUser?._id , id);
        // console.log("CUrrent Ride",ride?.data?.booking?.bids);

        if (ride?.data?.booking?.bids?.length > 0) {
          // DRIVER FOUND
          stopPollingRide();
          setProgress(100);
          setDriverStatus("found");
        }
      } catch (err) {
        toast.error("Error fetching ride:", err);
      }
    }, 2000);
  };

  const stopPollingRide = () => {
    if (pollingRef.current) {
      clearInterval(pollingRef.current);
      pollingRef.current = null;
    }
  };


  const { mutate:submitCreateRide , isLoading } = useMutation(createRide, {
     onSuccess: (response) => {
     toast.success(response?.message);
     queryClient.invalidateQueries(["getUserProfile"]);
     setFormData(prev => ({
    ...prev,
    destination:{
    destinationName:"",
    coordinates:{
        lat:"",
        long:""
      }
    },
    // phoneNumber:"",
    luggageImage:[],
    vehicleType:"",
    tripType:"",
    luggages:"",
    searchValue:""
      }));

    setRideId(response?.data?._id);
    setDriverStatus("searching");
    setProgress(0);
    setIsSearchingDrivers(true);

    //start polling this ride
    startPollingRide(response?.data?._id);
     },

     onError:(error) => {
      toast.error(error.response?.data?.message || error.message);
     }
  })

  const { mutate:submitHandlePayment, isLoading:isPaymentLoading } = useMutation(initializePayment, {
     onSuccess: (response) => {
     toast.success(response?.message);
     queryClient.invalidateQueries(["getUserProfile"]);

      const redirectUrl = response?.data?.authorization_url;

      if (redirectUrl) {
        window.location.href = redirectUrl;
      } else {
        toast.error("Payment link not available");
      }

     },

     onError:(error) => {
      toast.error(error.response?.data?.message || error.message);
     }
  })


  const handleSubmit = () => {
    if (formData?.luggages === "yes" && formData?.luggageImage.length === 0) {
      toast.error("Upload at least one luggage image !");

      return;
    }
    
    submitCreateRide({
      ...formData, 
      phoneNumber:currentUser?.phoneNumber})
  };

 const handleInitializePayment = () => {
    submitHandlePayment({
      amount: location?.state?.selectedRideBid?.totalPrice,
    })
}

  //to prevent memory leaks on route changes
  useEffect(() => {
  return () => stopPollingRide();
   }, []);

  //Stop polling when progress completes but no drivers
  useEffect(() => {
    if (progress >= 100 && driverStatus === "searching") {
      stopPollingRide();
      setDriverStatus("none"); // no drivers available
    }
  }, [progress]);

  // Determine if progress is actively loading (0-99%)
  const isProgressLoading = progress > 0 && progress < 100;

  const handleRefresh = () => {
  if(isProgressLoading) return;

  setProgress(0);
  setDriverStatus("searching");
  setRefreshTrigger(prev => prev + 1);

  startPollingRide(rideId);
  }

  const Icon = VEHICLE_ICON_MAP[location?.state?.selectedRideBid?.bidder?.vehicleType] || TaxiCarIcon;
  
   const renderDriverActionButton = () => {
    if (driverStatus === "found") {
      return (
        <CustomButton
          name="See Available Drivers"
          extendedStyles="w-full h-[50px] bg-green-600 text-white rounded-2xl font-medium"
           btnClick={() => {
           // Navigate to /rides page and set active tab to "Ongoing Bids"
           navigate("/dashboard/rides", { state: { activeTab: "Ongoing Bids" } });
          }}
        />
      );
    }

    if (driverStatus === "searching") {
      return (
        <CustomButton
          name="Searching..."
          extendedStyles="w-full h-[50px] bg-primary-200 text-primary-950 rounded-2xl font-medium"
          // btnClick={handleRefresh}
          disabled={isProgressLoading}
        />
      );
    }

    return (
      <CustomButton
       name ="Refresh"
       extendedStyles= { "w-full h-[50px] lg:h-[60px] bg-primary-200 text-primary-950 rounded-2xl font-medium" }
       btnClick={handleRefresh}
       disabled={isProgressLoading}
      /> 
    );
  };
  
  return (
    <>
      {/* Driver Search Modal - Shows after ride creation */}
      {
        isSearchingDrivers && (
          <Modal position="center" closeModal={() => setIsSearchingDrivers(prev => !prev)}>
            <div className="mb-8 w-full">
              <ProgressBar resetTrigger={refreshTrigger} progress={progress} setProgress={setProgress} title="Searching for Available Drivers" />
            </div>

            { renderDriverActionButton() }
          </Modal>
         )
      }
      
      {/* Location Permission Modal */}
      {isOpen && !isFromBookDriver &&  (
        <Modal
          closeModal={() => {
           setLocationEnabled(true);
           setIsOpen(false); 
          }}
          modalIcon={<LiveGPSIcon />}
          title={"Allow access to your live location"}
          position="bottom"
          width="100%"
          bodyText={
            "Use My Current Location"
          }
        >
          <CustomButton
            isLoading={loading}
            name="Allow Access"
            extendedStyles="w-full h-[45px] lg:h-[60px] px-4 font-medium rounded-2xl bg-primary-700 text-white flex items-center justify-center"
            size="lg"
            btnClick={() => fetchLocation()}
          />
        </Modal>
      )}

      {/* render this if it is not from book driver route */}
      {
        !isFromBookDriver && (
          <div className="flex flex-col lg:flex-row lg:gap-x-4">
        {/* map */}
        <div className="bg-white rounded-[10px] lg:p-4 w-full h-screen lg:min-w-[480px] lg:min-h-[734px]">
          <BackgroundMap coords={coords} />
        </div>

        {/* bottom sheet */}
        <div
          className={`w-full transform transition-transform duration-500 lg:basis-full ${expanded ? "h-full" : "h-[540px]"} lg:h-full overflow-y-auto custom-scrollbar p-4 lg:p-0 bg-white lg:bg-transparent fixed bottom-0 left-0 z-[1012] lg:relative rounded-t-[32px]
          ${locationEnabled ? "translate-y-0" : "translate-y-full"} 
          `}
        >
          {
           expanded && (
           <div className="mb-2 lg:mb-4 lg:hidden px-4 flex justify-between">
            <GoBackIcon   
              onClick={() => setExpanded(false)}
              className="cursor-pointer" 
              />
             <HamburgerIcon 
             className="cursor-pointer"
             onClick={() => setIsMenuOpen(prev => !prev)}
            />
          </div>
           )
          }

          <CreateRideSection
           onFocus={() => setExpanded(true)}
           onBlur={() => setExpanded(false)} 
           handleSubmit={handleSubmit }
           isLoading={ isLoading }

          />
        </div>
      </div>
        )
      }

      {/* render if it it from book driver */}
      {
        isFromBookDriver && (
          <div className="flex flex-col lg:flex-row lg:gap-x-4">
            <div className="hidden lg:block lg:flex-1">
               <CreateRideSection
            />
            </div>
            <div className="bg-white py-5 px-[14px] lg:rounded-xl lg:w-[557px] shrink-0">
              <div>
                <div className="mb-4">
                  {/* <span>
                    <GoBackIcon/>
                  </span> */}
                  <h2 className="text-center">Make Payment</h2>
                </div>
                <div className="mb-4 bg-accent-500 flex items-center justify-center h-[26px] lg:h-[38px] px-4">
                  <p className="font-medium text-neutral-50 text-xs lg:text-base">Your driver will arrive in 7 minutes</p>
                </div>
                <div className="mb-4">
                  <div className="flex flex-col gap-x-2 lg:flex-row lg:gap-y-2 items-center lg:items-start">
                    <div className="relative w-[89px] z-4 h-[89px] rounded-full">
                      <img className="w-full h-full object-cover rounded-full" src={location?.state?.selectedRideBid?.bidder?.profileImage} alt={location?.state?.selectedRideBid?.bidder?.name} />
                      <div className="absolute bottom-0 z-8 right-0 w-[29px] h-[28px] rounded-full bg-neutral-50 flex justify-center items-center">
                        {
                         Icon && <Icon className="w-6 h-6"/>
                        }
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-base text-gray-950 capitalize">{location?.state?.selectedRideBid?.bidder?.name}</h3>
                      <p className="flex text-xs items-center gap-x-1 font-normal text-gray-950">
                        4.2
                        <span>
                        <ReviewBadgeIcon/>
                      </span>
                       (45 reviews)
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-5">
                  <div className="mb-[14px] flex justify-between items-center">
                    <h5 className="font-semibold text-base text-gray-950">Plate Number</h5>
                    <p className="font-normal text-base text-gray-950">{location?.state?.selectedRideBid?.bidder?.plateNumber}</p>
                  </div>
                  <div className="mb-[14px] flex justify-between items-center">
                    <h5 className="font-semibold text-base text-gray-950">Vehicle Type</h5>
                    <p className="font-normal text-base text-gray-950">{location?.state?.selectedRideBid?.bidder?.vehicleType}</p>
                  </div>
                   {/* <div className="mb-[14px] flex justify-between items-center">
                    <h5 className="font-semibold text-base text-gray-950">Model</h5>
                    <p className="font-normal text-base text-gray-950">{location?.state?.selectedRideBid?.bidder?.vehicleType}</p>
                  </div> */}
                </div>
                <Divider extendedStyles={"mb-4"}/>
                <div className="mb-4 lg:mb-[22px]">
                  <div className="mb-2 flex items-center bg-neutral-50 rounded-lg px-4 h-[45px] lg:h-[53px]">
                    <h4 className="font-medium text-gray-950 text-base">Trip Details</h4>
                  </div>
                  <div className="mb-[14px] flex justify-between items-center">
                    <h5 className="font-semibold text-base text-gray-950">Date</h5>
                    <p className="font-normal text-base text-gray-950">{format(location?.state?.selectedRideBid?.createdAt,"h:mma, do MMMM")}</p>
                  </div>
                  <div className="mb-[14px] flex justify-between items-center">
                    <h5 className="font-semibold text-base text-gray-950">Pickup Location</h5>
                    <p className="font-normal text-base text-gray-950">{trimText(location?.state?.selectedRideBid?.location?.locationName, 38)}</p>
                   
                  </div>
                  <div className="mb-[14px] flex justify-between items-center">
                    <h5 className="font-semibold text-base text-gray-950">Destination</h5>
                    <p className="font-normal text-base text-gray-950">{trimText(location?.state?.selectedRideBid?.destination?.destinationName, 38)}</p>
                  </div>
                  <div className="mb-[14px] flex justify-between items-center">
                    <h5 className="font-semibold text-base text-gray-950">Trip Type</h5>
                    <p className="font-normal text-base text-gray-950">{location?.state?.selectedRideBid?.tripType}</p>
                  </div>
                  <div className="mb-[14px] flex justify-between items-center">
                    <h5 className="font-semibold text-base text-gray-950">Luggage</h5>
                    <p className="font-normal text-base text-gray-950">{location?.state?.selectedRideBid?.luggages === "no" ? "None" : "Yes"}</p>
                  </div>
                  <div className="mb-[14px] flex justify-between items-center">
                    <h5 className="font-semibold text-base text-gray-950">Price</h5>
                    <p className="font-normal text-base text-red-56 flex items-center justify-center w-[88px] h-[29px] rounded-full bg-[rgba(234,67,53,0.08)] px-4">₦{location?.state?.selectedRideBid?.totalPrice}</p>
                  </div>
                </div>
                <div>
                  <CustomButton
                  name="Make Payment"
                  extendedStyles="w-full h-[45px] lg:h-[60px] px-4 font-medium rounded-2xl bg-primary-700 text-white flex items-center justify-center"
                  btnClick={handleInitializePayment}
                  isLoading={isPaymentLoading}
                  />
                </div>
              </div>
            </div>
          </div>
        )
      }
    </>
  );
};

const PassengerDashboardIndex = () => {
  
  return(
   <FormProvider initialInputFields={{
    destination:{
    destinationName:"",
    coordinates:{
        lat:"",
        long:""
      }
    },
    location:{
    locationName:"",
    coordinates:{
        lat:"",
        long:""
      }
    },
    luggageImage:[],
    vehicleType:"",
    tripType:"",
    luggages:"",
    searchValue:""
  }}>
        <PassengerDashboardIndexContext/>
      </FormProvider>
  )
}

export default PassengerDashboardIndex;
