import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import toast from "react-hot-toast";
import BackgroundMap from "../../../components/dashboard/BackgroundMap";
import { Modal } from "../../../components/Modal";
import { LiveGPSIcon } from "../../../assets/icons/LiveGPSIcon";
import CustomButton from "../../../components/CustomButton";
import { InputField } from "../../../components/customFormFields/InputField";
import { useSetRecoilState } from "recoil";
import { locationAtom } from "../../../components/atoms/locationAtom";
import { ChooseDestination } from "../../../components/dashboard/ChooseDestination";
import { SelectRide } from "../../../components/dashboard/SelectRide";

const PassengerDashboardIndex = () => {
  const { coords, setCoords } = useOutletContext();
  const [isOpen, setIsOpen] = useState(true);
  const [popupActionType, setPopupActionType] = useState(null);
  const [locationName, setLocationName] = useState("");
  const [loading, setLoading] = useState(false);
  const [locationEnabled, setLocationEnabled] = useState(false);
  const setLiveLocation = useSetRecoilState(locationAtom)

  const getLocationName = async (lat, lon) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`
      );
      const data = await response.json();
      return data.display_name;
    } catch (err) {
      toast.error("Failed to fetch location name, Please try again", err?.message);
      return "";
    } finally {
      setLoading(false);
    }
  };

  const handleUseLocation = () => {
    setLoading(true);

    if (!navigator.geolocation) {
      toast.error("Geolocation is not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async ({ coords: { latitude, longitude } }) => {
        const location = await getLocationName(latitude, longitude);
        setCoords({ lat: latitude, lon: longitude });
        setLocationName(location);
        setLiveLocation(location);
        setPopupActionType("use-location");
        setIsOpen(false);
        setLocationEnabled(true); // 👈 slide up
      },
      (error) => {
        toast.error(`Location access denied, Please try again : ${error.message}`);
        setPopupActionType("cancel");
        setIsOpen(false);
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );
  };

  const handleCancel = () => {
    setPopupActionType("cancel");
    setLocationEnabled(true);
    setIsOpen(false);
  };

  return (
    <>
      {/* modal prompt */}
      {isOpen && (
        <Modal
          closeModal={handleCancel}
          modalIcon={<LiveGPSIcon />}
          title={"Allow access to your live location"}
          bodyText={
            "Use My Current Location and Auto-fill the search bar with coordinates/nearest landmark"
          }
        >
          <CustomButton
            isLoading={loading}
            name="Allow Access"
            extendedStyles="w-full font-normal rounded-2xl bg-[#20AE3A] text-white inline-flex items-center justify-center gap-3 disabled:opacity-50"
            size="lg"
            btnClick={handleUseLocation}
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
          className={`w-full transform transition-transform duration-500 lg:basis-full p-4 lg:p-0 bg-white lg:bg-transparent fixed bottom-0 left-0 z-[1008] lg:relative rounded-t-[32px]
          ${locationEnabled ? "translate-y-0" : "translate-y-full"} 
          `}
        >
          <ChooseDestination />
          <SelectRide/>
        </div>
      </div>
    </>
  );
};

export default PassengerDashboardIndex;
