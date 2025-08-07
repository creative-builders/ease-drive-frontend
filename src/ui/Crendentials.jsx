import React, { useRef, useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { CameraIcon } from "../assets/icons/CameraIcon";
import FormInput from "../components/form/FormInput"
import CustomSelect from "../components/form/CustomSelect"
import CustomButton from "../components/CustomButton";
import picture from "../assets/images/driver-picture.png"
import { CarIcon } from "../assets/icons/CarIcon";
import { PlateNumberIcon } from "../assets/icons/PlateNumberIcon";
import { HouseBuilding } from "../assets/icons/HouseBuilding";
import { SeatIcon } from "../assets/icons/SeatIcon";
import { ColorIcon } from "../assets/icons/ColorIcon";
import { Document } from "../assets/icons/Document";


const Crendentials = ({ onClose }) => {

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
    <div className="bg-white rounded-2xl p-6 shadow-md h-[683px] w-full md:w-[439px] flex flex-col gap-20">
      <figure className="">
        <div className="flex items-center space-x-2 mb-4">
          <button onClick={onClose}>
            <FiArrowLeft className="text-xl" />
          </button>
          <h2 className="text-lg font-semibold">Vehicle Information</h2>
        </div>
         
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
              label="Vehicle type"
              id="name"
              type='text'
              placeholder="Enter document Id number"
              inputClassName = "indent-1 flex items-center justify-center rounded-lg"
              required
              leftIcon={<CarIcon className="h-[18px] md:h-6 w-[18px] md:w-6 aspect-square text-[#888]" />}
          />

          <FormInput
              label="Plate Number"
              id="number"
              type='number'
              placeholder="Enter your new plate number"
              inputClassName = "indent-1 flex items-center justify-center rounded-lg"
              required
              leftIcon={<PlateNumberIcon className="h-[18px] md:h-6 w-[18px] md:w-6 aspect-square text-[#888]" />}
          />

          <CustomSelect
            label="Service area (location)"
            id="serviceArea"
            placeholder="Choose service location"
            required
            leftIcon={<HouseBuilding className="h-[18px] md:h-6 w-[18px] md:w-6 text-[#888]" />}
            options={["Main Gate", "UNN Hostel C", "Zik's Flat", "Library"]}
            />


          <div className="flex space-x-2 items-center justify-between mt-3">
            <FormInput
              label="Vehicle Color"
              id="name"
              type='text'
              placeholder="Eg.black"
              inputClassName = "indent-1 flex items-center justify-center rounded-lg"
              required
              leftIcon={<ColorIcon className="h-[18px] md:h-6 w-[18px] md:w-6 aspect-square text-[#888]" />}
          />

          <FormInput
              label="Number of Seat"
              id="name"
              type='text'
              placeholder="Eg.4"
              inputClassName = "indent-1 flex items-center justify-center rounded-lg"
              required
              leftIcon={<SeatIcon className="h-[18px] md:h-6 w-[18px] md:w-6 aspect-square text-[#888]" />}
          />
          </div>

          <FormInput
            label="Plate Number"
            id="number"
            type='number'
            placeholder="Driver’s licence"
            inputClassName = "indent-1 flex items-center justify-center rounded-lg"
            required
            leftIcon={<Document className="h-[18px] md:h-6 w-[18px] md:w-6 aspect-square text-[#888]" />}
          />

          <p className="font-medium text-base md:text-base leading-normal not-italic tracking-normal text-left mt-4 text-[#4847EB]">change password</p>
        </form>
      </figure>

      

    </div>
  );
};
export default Crendentials 