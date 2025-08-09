import React, { useRef, useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { CameraIcon } from "../assets/icons/CameraIcon";
import FormInput from "../components/form/FormInput";
import CustomSelect from "../components/form/CustomSelect";
import CustomButton from "../components/CustomButton";
import picture from "../assets/images/driver-picture.png";
import { CarIcon } from "../assets/icons/CarIcon";
import { PlateNumberIcon } from "../assets/icons/PlateNumberIcon";
import { HouseBuilding } from "../assets/icons/HouseBuilding";
import { SeatIcon } from "../assets/icons/SeatIcon";
import { ColorIcon } from "../assets/icons/ColorIcon";
import { Document } from "../assets/icons/Document";
import UploadIcon from "../assets/images/add.png";


const Crendentials = ({ onClose }) => {
  const profileImageRef = useRef(null);
  const documentUploadRef = useRef(null);

  const [profileImage, setProfileImage] = useState(picture);
  const [previewImages, setPreviewImages] = useState([]);
  const [selectedCity, setSelectedCity] = useState();

  const handleProfileImageClick = () => profileImageRef.current.click();

  const handleProfileImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  const handleDocumentsChange = (e) => {
    const files = Array.from(e.target.files).filter(
      (file) => file.type === "image/jpeg" || file.type === "image/png"
    );
    setPreviewImages(files.map((file) => URL.createObjectURL(file)));
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-md w-full md:w-[439px] flex flex-col gap-20">
      <figure className="">
        <div className="flex items-center space-x-2 mb-4">
          <button onClick={onClose}>
            <FiArrowLeft className="text-xl" />
          </button>
          <h2 className="text-lg font-semibold">Vehicle Information</h2>
        </div>
        <button className="p-2 flex sm:hidden align-center text-[#4847EB] text-base leading-normal not-italic tracking-normal absolute top-3 right-2">
          Save
        </button>
        <div className="flex sm:hidden items-center space-x-4 relative">
          <img
            src={profileImage}
            alt="Profile"
            className="w-14 h-14 rounded-full object-cover"
          />
          <CameraIcon
            className="w-4 h-4 absolute left-7 cursor-pointer bottom-3"
            onClick={handleProfileImageClick}
          />
          <input
            type="file"
            accept="image/*"
            ref={profileImageRef}
            className="hidden"
            onChange={handleProfileImageChange}
          />
        </div>

        <form className="gap-4 mt-4" action="">
          <FormInput
            label="Vehicle type"
            id="vehicleType"
            type="text"
            placeholder="Enter document Id number"
            inputClassName="indent-1 flex items-center justify-center rounded-lg"
            required
            leftIcon={
              <CarIcon className="h-[18px] md:h-6 w-[18px] md:w-6 aspect-square text-[#888]" />
            }
          />

          <FormInput
            label="Plate Number"
            id="plateNumber"
            type="text"
            placeholder="Enter your new plate number"
            inputClassName="indent-1 flex items-center justify-center rounded-lg"
            required
            leftIcon={
              <PlateNumberIcon className="h-[18px] md:h-6 w-[18px] md:w-6 aspect-square text-[#888]" />
            }
          />

          <CustomSelect
            label="Service area (location)"
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            leftIcon={<HouseBuilding className="h-6 w-6 text-[#888]" />}
            options={["Main Gate", "UNN Hostel C", "Zik's Flat", "Library"]}
            placeholder="Choose service location"
            isRounded
          />


          <div className="flex space-x-2 items-center justify-between mt-3">
            <FormInput
              label="Vehicle Color"
              id="vehicleColor"
              type="text"
              placeholder="Eg.black"
              inputClassName="indent-1 flex items-center justify-center rounded-lg"
              required
              leftIcon={
                <ColorIcon className="h-[18px] md:h-6 w-[18px] md:w-6 aspect-square text-[#888]" />
              }
            />

            <FormInput
              label="Number of Seat"
              id="seatCount"
              type="text"
              placeholder="Eg.4"
              inputClassName="indent-1 flex items-center justify-center rounded-lg"
              required
              leftIcon={
                <SeatIcon className="h-[18px] md:h-6 w-[18px] md:w-6 aspect-square text-[#888]" />
                
              }
            />
          </div>

          <FormInput
            label="Document ID"
            id="driverLicence"
            type="text"
            placeholder="Driver’s licence"
            inputClassName="indent-1 flex items-center justify-center rounded-lg"
            required
            leftIcon={
              <Document className="h-[18px] md:h-6 w-[18px] md:w-6 aspect-square text-[#888]" />
            }
          />

          <div>
            <label className="text-base not-italic leading-[150%] font-medium text-gray-700 mb-1">
              Upload Vehicle photos (front, back and size)
            </label>
            <p className="text-xs not-italic leading-normal font-medium align-middle mb-2">
              You can upload up to 4 images (JPG, PNG). Maximum file size: 2MB
              per image
            </p>

            <input
              type="file"
              multiple
              accept="image/*"
              ref={documentUploadRef}
              onChange={handleDocumentsChange}
              className="hidden"
            />
            <div
              onClick={() => documentUploadRef.current.click()}
              className="border border-gray-300 rounded-md p-4 flex flex-col items-center justify-center text-center cursor-pointer"
            >
              {previewImages.length === 0 ? (
                <>
                  <img src={UploadIcon} className="h-14 w-14" alt="Upload Icon" />
                  <p className="text-xs mt-2 text-gray-400 flex p-3 gap-3 rounded-lg bg-[#DEFAE2]"> upload picture</p>
                </>
              ) : (
                <div className="grid grid-cols-2 gap-2 w-full">
                  {previewImages.map((src, index) => (
                    <img
                      key={index}
                      src={src}
                      alt={`preview-${index}`}
                      className="w-full h-full object-cover rounded-md border-2"
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </form>
      </figure>

      <CustomButton
        name="Save"
        className="hidden sm:flex px-4 py-4 w-full rounded-2xl gap-2 mt-6 bg-green-700"
      />
    </div>
  );
};

export default Crendentials;
