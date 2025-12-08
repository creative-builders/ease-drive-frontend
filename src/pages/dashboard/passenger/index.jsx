import { useEffect, useRef, useState } from "react";
import BackgroundMap from "../../../components/dashboard/BackgroundMap";
import { Modal } from "../../../components/Modal";
import { LiveGPSIcon } from "../../../assets/icons/LiveGPSIcon";
import CustomButton from "../../../components/CustomButton";
import { ChooseDestination } from "../../../components/dashboard/ChooseDestination";
import { SelectRide } from "../../../components/dashboard/SelectRide";
import { GoBackIcon } from "../../../assets/icons/GoBackIcon";
import { HamburgerIcon } from "../../../assets/icons/HamburgerIcon";
import { useGeolocation } from "../../../hooks/useGeolocation";
import { FormProvider, useStepFlowContext } from "../../../hooks/useStepFlowFormContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createRide, fetchRideById } from "../../../store/users/api";
import toast from "react-hot-toast";
import { ProgressBar } from "../../../components/ProgressBar";
import { useRecoilValue } from "recoil";
import { userAtom } from "../../../components/atoms/userAtom";
import { useNavigate } from "react-router-dom";


const PassengerDashboardIndexContext = () => {
  const [expanded, setExpanded] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isSearchingDrivers, setIsSearchingDrivers] = useState(false);
  const [refreshTrigger, setRefreshTrigger] = useState(0); 
  const [rideId, setRideId] = useState(null);
  const [driverStatus, setDriverStatus] = useState("searching"); 
  const currentUser  = useRecoilValue(userAtom);
  const navigate = useNavigate();




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
        console.log("CUrrent Ride",ride?.data?.booking?.bids);

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
    phoneNumber:"",
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


  const handleSubmit = () => {
    if (formData?.luggages === "yes" && formData?.luggageImage.length === 0) {
      toast.error("Upload at least one luggage image !");

      return;
    }
    
    submitCreateRide(formData)
  };


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

  console.log(driverStatus)
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

    if (driverStatus === "none") {
      return (
        <CustomButton
          name="No Drivers Available - Refresh"
          extendedStyles="w-full h-[50px] bg-primary-200 text-primary-950 rounded-2xl font-medium"
          btnClick={handleRefresh}
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
      {isOpen && (
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
          <ChooseDestination
           onFocus={() => setExpanded(true)}
           onBlur={() => setExpanded(false)} 
           />
          <SelectRide 
          handleSubmit={handleSubmit}
          isLoading={isLoading}
          />
        </div>
      </div>
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
    phoneNumber:"",
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
