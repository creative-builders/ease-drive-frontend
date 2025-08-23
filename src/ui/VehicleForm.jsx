import React, { useRef, useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { CameraIcon } from "../assets/icons/CameraIcon";
import { UserIcon } from "../assets/icons/UserIcon";
import FormInput from "../components/form/FormInput"
import { LockedIcon } from "../assets/icons/LockedIcon";
import { EyeOpenIcon } from "../assets/icons/EyeOpenIcon";
import CustomButton from "../components/CustomButton";
import picture from "../assets/images/driver-picture.png"
import { EmailSignedIcon } from "../assets/icons/EmailSignedIcon";
import { CallIcon } from "../assets/icons/CallIcon";


const VehicleForm = ({ onClose }) => {

  const [profileImage, setProfileImage] = useState(picture);
  const fileInputRef = useRef(null);

  const handleIconClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
     console.log(imageUrl)
    }
  };
 

  return (
    <div className="bg-white rounded-2xl p-6 shadow-md h-[683px] w-full md:w-[439px] flex flex-col gap-20 sm:mt-[-145px]">
      <figure className="">
        <div className="flex items-center space-x-2 mb-4">
          <button onClick={onClose}>
            <FiArrowLeft className="text-xl" />
          </button>
          <h2 className="text-lg font-semibold">Personal Information</h2>
        </div>
         <button className="p-2 flex sm:hidden align-center text-[#4847EB] text-base leading-normal not-italic tracking-normal absolute top-3 right-2">Save</button>
        <div className="flex items-center space-x-4 relative">
          <img
            src={profileImage}
            alt="Profile"
            className="w-14 h-14 rounded-full object-cover"
          />
          <CameraIcon
            className="w-4 h-4 absolute left-7 cursor-pointer bottom-3"
            onClick={handleIconClick}
          />
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            className="hidden"
            onChange={handleFileChange}
          />
        </div>

        <form className="gap-4 mt-4" action="">
          <FormInput
              label="full name"
              id="name"
              type='text'
              placeholder="Enter document Id number"
              inputClassName = "indent-1 flex items-center justify-center"
              required
              leftIcon={<UserIcon className="h-[18px] md:h-6 w-[18px] md:w-6 aspect-square text-[#888]" />}
          />

          <FormInput
              label="Email"
              id="email"
              type='email'
              placeholder="Enter document Id number"
              inputClassName = "indent-1 flex items-center justify-center"
              required
              leftIcon={<EmailSignedIcon className="h-[18px] md:h-6 w-[18px] md:w-6 aspect-square text-[#888]" />}
          />

          <FormInput
              label="Phone number"
              id="number"
              type='number'
              placeholder="Enter document Id number"
              inputClassName = "indent-1 flex items-center justify-center"
              required
              leftIcon={<CallIcon className="h-[18px] md:h-6 w-[18px] md:w-6 aspect-square text-[#888]" />}
          />

          <FormInput
            label="Update Password"
            id="password"
            type='password'
            placeholder="Enter document Id number"
            inputClassName = "indent-1 flex items-center justify-center"
            required
            leftIcon={<LockedIcon className="h-[18px] md:h-6 w-[18px] md:w-6 aspect-square text-[#888]" />}
            rightIcon={<EyeOpenIcon />}
          />

          <p className="font-medium text-base md:text-base leading-normal not-italic tracking-normal text-left mt-4 text-[#4847EB]">change password</p>
        </form>
      </figure>

      <CustomButton
        name="Save"
        className="hidden sm:flex px-4 py-4 w-full rounded-2xl gap-2 mt-6 bg-green-700"
        />

    </div>
  );
};
export default VehicleForm 