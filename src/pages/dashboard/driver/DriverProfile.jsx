
import React, { useState, useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";

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
import { InputField } from "../../../components/customFormFields/InputField.jsx";
import { DocumentIcon } from "../../../assets/icons/DocumentIcon.jsx";
import { VerifiedBadgeIcon } from "../../../assets/icons/VerifiedBadgeIcon.jsx";


export const DriverProfile = ({ onEditVehicle, onEditCredentials }) => {
  const userData = useRecoilValue(userAtom);

  const [isOpen, setIsOpen] = useState(false);
  const location = useRecoilValue(locationAtom)

  const handleDelete = () => {
    console.log("Account deleted");
    setIsOpen(false);
  };

  return (
    <>
      {/* Reusable Modal */}
      {isOpen && (
        <Modal
          closeModal={() => setIsOpen(false)}
          title="Delete Account?"
          position="bottom"
          width="100%"
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

      <div className="bg-white rounded-2xl p-6 shadow-md gap-4 flex flex-col">
      {/* Top section: Profile */}
      <div className="flex items-center justify-between">
        <div className="flex gap-x-4">
          <div className='rounded-lg48 bg-accent-50 flex justify-center items-center w-[38px] h-[37px] lg:w-[90px] lg:h-[87px]'>
            {
            userData?.profileImage ? (
            <img
            src={userData?.profileImage}
            alt="Profile"
            className="w-full h-full rounded-full object-cover"
            />
              )
              :
             (
             <AvatarIcon
             className="w-[24px] h-[24px] lg:w-[48px] lg:h-[48px]"
              />)
            }
          </div>

          <div className="flex flex-col">
            <div className="flex flex-col md:flex-row md:items-center md:gap-x-4">
              <h2 className="mb-2 font-semibold text-base capitalize">
                {userData?.fullName || "John Ndubuisi Chukwuemeka"}
              </h2>
              <div className="flex gap-x-2 mb-2">
                <VerifiedBadgeIcon/>
                <span className="text-xs font-normal text-primary-500">Verified</span>
              </div>
            </div>
            <p className="mb-2 hidden lg:flex text-xs lg:text-sm font-bold text-[#262626] flex items-center">
              <LocationIcon className="text-green-600" />
               You’re currently at:{" "}
              <span className="font-normal">
                {location
                  ? location
                  : "UNN Hostel C, Nsukka"}
              </span>
            </p>
            <span className="flex text-[10px]">
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
        <h3 className="font-semibold text-sm lg:text-lg">
          Personal Information
        </h3>
        
         <InputField
         type='email'
         leftIcon={EmailSignedIcon}
         placeholder={userData?.email || "Enter email"}
         inputWrapperStyles = {"border-none"}
         readOnly
         />

        <InputField
         type='number'
         leftIcon={PhoneIcon}
         placeholder={userData?.phoneNumber || "---"}
         inputWrapperStyles = {"border-none"}
         readOnly
         />
       
         <InputField
         leftIcon={HouseBuilding}
         placeholder={userData?.address || "---"}
         inputWrapperStyles = {"border-none"}
         readOnly
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
        <h3 className="font-semibold text-base md:text-[18px] capitalize">
          Vehicle Information
        </h3>
        <InputField
         leftIcon={CarIcon}
         value={userData?.vehicleModel || "---"}
         placeholder={"Enter Vehicle Model"}
         inputWrapperStyles = {"border-none"}
         readOnly
         />
         
        <InputField
         leftIcon={ColorIcon}
         value={userData?.vehicleColor || "---"}
         placeholder={"Black"}
         inputWrapperStyles = {"border-none"}
         readOnly
         />

         <InputField
         leftIcon={PlateNumberIcon}
         value={userData?.plateNumber || "---"}
         placeholder={"ABC123"}
         inputWrapperStyles = {"border-none"}
         readOnly
         />

         <InputField
         leftIcon={LocationHomeIcon}
         value={userData?.pickupPoint || "---"}
         placeholder={"Main Gate"}
         inputWrapperStyles = {"border-none"}
         readOnly
         />

        <InputField
         leftIcon={DocumentIcon}
         value={userData?.documentId || "---"}
         placeholder={"Document ID"}
         inputWrapperStyles = {"border-none"}
         readOnly
         />
         
      </section>

      {/* Support */}
      <section className="gap-2 p-2 border-b border-[#E7E7E7]">
         <InputField
         leftIcon={CustomerService}
         value={userData?.supportContact }
         placeholder={"Support contact"}
         inputWrapperStyles = {"border-none"}
         readOnly
         />
         
      </section>

      {/* Account */}
        <h4 className="font-semibold lg:font-medium text-sm lg:text-lg">Account</h4>

        <div className="flex px-2.5 mb-2">
          <LogoutButton 
           strokeColor="#fe2a22"
           text={"Log Out"}
           textStyles={"font-medium text-sm lg:text-lg leading-6 text-red-500"}
          />
        </div>
 
        <div 
        className="flex px-2.5 items-center justify-start gap-2 cursor-pointer"
        onClick={() => setIsOpen(true)}
        >
          <DelectIcon/>
          <span className="font-medium text-sm lg:text-lg leading-6 text-red-500">Delete Account</span>
        </div>
      </div>
    </>

  );
};
