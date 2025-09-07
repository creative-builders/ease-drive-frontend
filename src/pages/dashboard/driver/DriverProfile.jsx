
import React, { useState, useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";

import fallbackProfile from "../../../assets/images/driver-picture.png";
import verify from "../../../assets/images/Create account.png";
import star from "../../../assets/icons/starVector.svg";
import { EmailSignedIcon } from "../../../assets/icons/EmailSignedIcon.jsx";
import { LocationIcon } from "../../../assets/icons/LocationIcon.jsx";
import { LocationHomeIcon } from "../../../assets/icons/LocationHomeIcon.jsx";
import { CarIcon } from "../../../assets/icons/CarIcon.jsx";
import { ColorIcon } from "../../../assets/icons/ColorIcon.jsx";
import { HouseBuilding } from "../../../assets/icons/HouseBuilding.jsx";
import { PlateNumberIcon } from "../../../assets/icons/PlateNumberIcon.jsx";
import { CustomerService } from "../../../assets/icons/CustomerService.jsx";
import { DelectIcon } from "../../../assets/icons/DelectIcon.jsx";
import { PhoneIcon } from "../../../assets/icons/PhoneIcon.jsx";
import LogoutButton from "../../auth/logout/LogoutButton.jsx";
import { userAtom } from "../../../components/atoms/userAtom.jsx";
import { locationAtom } from "../../../components/atoms/locationAtom.jsx";
import { Modal } from "../../../components/Modal.jsx";


const InfoField = ({ icon: Icon, placeholder, type = "text", value }) => (
  <div className="flex px-2 py-3 items-center justify-start gap-2">
    <Icon className="h-[18px] md:h-6 w-[18px] md:w-6 text-[#888]" />
    <input
      type={type}
      readOnly
      value={value}
      placeholder={placeholder}
      className="h-6 w-48 sm:w-40 font-medium text-[14px] pl-0 rounded-lg leading-6 tracking-normal not-italic border-none outline-none placeholder:text-[#888] focus:outline-none focus:border-none focus:ring-0"
    />
  </div>
);

export const DriverProfile = ({ onEditVehicle, onEditCredentials }) => {
  const userData = useRecoilValue(userAtom);
  const setLiveLocation = useSetRecoilState(locationAtom);

  const [locationEnabled, setLocationEnabled] = useState(false);
  const [locationName, setLocationName] = useState("");

  // 🔹 get location name
  const getLocationName = async (lat, lon) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`
      );
      const data = await response.json();
      return data.display_name;
    } catch (err) {
      console.error("Failed to fetch location name:", err);
      return "";
    }
  };

  // 🔹 set live location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async ({ coords: { latitude, longitude } }) => {
          const name = await getLocationName(latitude, longitude);
          setLiveLocation({ lat: latitude, lon: longitude, name });
          setLocationName(name);
          setLocationEnabled(true);
        },
        (error) => {
          console.error("Location access denied:", error);
          setLocationEnabled(false);
        },
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
      );
    }
  }, [setLiveLocation]);

  const [isOpen, setIsOpen] = useState(false);

  const handleDelete = () => {
    console.log("Account deleted");
    setIsOpen(false);
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-md gap-4 flex flex-col h-[980px]">
      {/* Top section: Profile */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img
            src={userData?.profileImage || fallbackProfile}
            alt="Driver"
            className="w-14 h-14 rounded-full"
          />
          <div className="flex flex-col space-y-1">
            <div className="flex flex-col md:flex-row space-x-4">
              <h2 className="font-semibold text-base">
                {userData?.fullName || "John Ndubuisi Chukwuemeka"}
              </h2>
              <img src={verify} alt="verified" />
            </div>
            <p className="text-sm md:text-base font-bold text-[#262626] flex items-center gap-1">
              <LocationIcon className="w-4 h-4 text-green-600" />
              You’re currently at:{" "}
              <span className="font-normal">
                {locationEnabled && locationName
                  ? locationName
                  : "UNN Hostel C, Nsukka"}
              </span>
            </p>
            <span className="flex gap-1 text-[10px]">
              4.2 <img src={star} className="h-3 w-3" alt="rating" />
              (42 Reviews)
            </span>
          </div>
        </div>

        <button
          className="text-[#4847EB] font-medium md:font-semibold text-base"
          onClick={onEditVehicle}
        >
          Edit
        </button>
      </div>

      {/* Personal Info */}
      <section className="gap-2 p-2 border-b border-[#E7E7E7]">
        <h2 className="font-semibold text-base md:text-[18px] capitalize">
          personal information
        </h2>
        <InfoField
          icon={EmailSignedIcon}
          type="email"
          value={userData?.email}
          placeholder="Enter email"
        />
        <InfoField
          icon={PhoneIcon}
          type="text"
          value={userData?.phone}
          placeholder="Enter phone number"
        />
        <InfoField
          icon={HouseBuilding}
          type="text"
          value={userData?.address}
          placeholder="Enugu"
        />
      </section>

      {/* Vehicle Info */}
      <section className="gap-2 p-2 relative border-b border-[#E7E7E7]">
        <button
          className="text-[#4847EB] font-medium absolute right-2 top-2 md:font-semibold text-base"
          onClick={onEditCredentials}
        >
          Edit
        </button>
        <h2 className="font-semibold text-base md:text-[18px] capitalize">
          Vehicle Information
        </h2>
        <InfoField
          icon={CarIcon}
          value={userData?.vehicleModel}
          placeholder="Enter vehicle model"
        />
        <InfoField
          icon={ColorIcon}
          value={userData?.vehicleColor}
          placeholder="Black"
        />
        <InfoField
          icon={PlateNumberIcon}
          value={userData?.plateNumber}
          placeholder="ABC123"
        />
        <InfoField
          icon={LocationHomeIcon}
          value={userData?.pickupPoint}
          placeholder="Main Gate"
        />
      </section>

      {/* Support */}
      <section className="gap-2 p-2 border-b border-[#E7E7E7]">
        <InfoField
          icon={CustomerService}
          value={userData?.supportContact}
          placeholder="Support contact"
        />
      </section>

      {/* Account */}
      <section className="h-36 gap-2 p-2 border-b border-[#E7E7E7]">
        <p className="font-semibold text-[14px] md:text-[18px] capitalize">
          account
        </p>
        <div className="flex px-2 py-3 items-center gap-2 cursor-pointer">
          <LogoutButton className="bg-transparent" />
          <p className="font-medium text-[14px] text-red-500">log out</p>
        </div>
        <div className="flex px-2 mb-2 py-3 items-center gap-2 cursor-pointer">
          <DelectIcon 
          className="h-[18px] md:h-6 w-[18px] md:w-6"
          onClick={() => setIsOpen(true)} />
          <p className="font-medium text-[14px] text-red-500">delete account</p>
        </div>

         {/* Reusable Modal */}
      {isOpen && (
        <Modal
          closeModal={() => setIsOpen(false)}
          title="Delete Account?"
          bodyText="We would miss you if you go, are you sure you want to delete your account?"
        >
          {/* Buttons inside modal */}
          <div className="flex flex-col gap-3 w-full mt-6">
            <button
              className="w-full py-3 rounded-lg bg-green-200 text-black font-medium"
              onClick={() => setIsOpen(false)}
            >
              Back
            </button>
            <button
              className="w-full py-3 rounded-lg bg-red-500 text-white font-medium"
              onClick={handleDelete}
            >
              Yes, Delete Account
            </button>
          </div>
        </Modal>
      )}
      </section>
    </div>
  );
};
