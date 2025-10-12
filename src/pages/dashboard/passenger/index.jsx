import { useState } from "react";
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
import { useMutation } from "@tanstack/react-query";
import { createRide } from "../../../store/users/api";

const PassengerDashboardIndexContext = () => {
  const [expanded, setExpanded] = useState(false);
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
  } = useStepFlowContext();

  const { mutate:submitCreateRide , isLoading } = useMutation(createRide, {
     onSuccess: (response) => {
      toast.success(response?.message);
      queryClient.invalidateQueries(["getUserProfile"]);
      setFormData(prev => ({
        ...prev,
        destination:"",
        location:"",
        phoneNumber:"",
        luggageImage:"",
        vehicleType:"",
        tripType:"",
        luggage:""
      }))
     },
     onError:(error) => {
      toast.error(error.response?.data?.message || error.message);
     }
  })


   const handleLuggageUpload = (files) => {
    if(files){
      setFormData(prev => ({
      ...prev,
      luggageImage: files
    }))
    }
  };




  const handleSubmit = () => {
    if (selectedLuggage === "yes" && luggageFiles.length === 0) {
      alert("Please upload at least one luggage image");
      return;
    }

    const data = {
      rideType: "Car",
      tripType: "Round Trip",
      hasLuggage: selectedLuggage === "yes",
      luggageFiles,
    };

    console.log("Ride data ready to submit:", data);
  };

  // console.log(locationName);

  return (
    <>
      {/* modal prompt */}
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
          handleLuggageUpload={handleLuggageUpload}
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
    luggage:""
  }}>
        <PassengerDashboardIndexContext/>
      </FormProvider>
  )
}

export default PassengerDashboardIndex;
