import React from 'react'
import SectionLabel from '../SectionLabel'
import { CustomInputField } from '../CustomInputField'
import { CustomSelectField } from "../CustomSelectField"
import { useState, useRef } from 'react';

import CustomButton from '../CustomButton';
import { FaChevronDown } from "react-icons/fa";
import addfile from '../../assets/images/addFile.svg'
import { CarIcon } from '../../assets/icons/CarIcon'
import { AddFileIcon } from '../../assets/icons/AddFileIcon'
import { PlateNumberIcon } from '../../assets/icons/PlateNumberIcon'
import { ColorIcon } from '../../assets/icons/ColorIcon'
import { SeatIcon } from '../../assets/icons/SeatIcon'
import { LocationIcon } from '../../assets/icons/LocationIcon';
import { LocationHomeIcon } from '../../assets/icons/LocationHomeIcon';
import { useStepFlowContext } from '../../hooks/useStepFlowFormContext';


export const StepTwo = ({ nextStep, step, totalSteps }) => {

  const fileInputRef = useRef(null);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const { formData, handleUpdateFormData } = useStepFlowContext();
  const [errors, setErrors] = useState({});

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles(files);
  };

  const handleNext = () => {
    const newErrors = {};

    if (!formData.vehicleType) {
      newErrors.vehicleType = "Please select you vehicle type";
    }

    if (!formData.plateNumber || formData.plateNumber.trim() === "") {
      newErrors.plateNumber = "Please provide plate number";
    }

    if (selectedFiles.length === 0) {
      newErrors.files = "Please upload at least one document image";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      nextStep(); // Proceed only if no validation error
    }
  };

  return (
    <div lassName=" min-h-screen lg:h-full max-990:h-[95vh] ">
      <div className="flex items-center justify-center h-full min-h-screen bg-gray-100">
        <div className="bg-white lg:w-[1216px] lg:h-[990px] max-990:w-[90%] max-990:h-[95vh] max-990:m-auto py-6 lg:pt-12 lg:pb-12 opacity-100 flex flex-row items-center">
          <div className="lg:w-[637px] lg:h-[734px] max-990:w-[100%] max-990:h-[90vh] max-990:m-auto 
          max-990:flex max-990:justify-center max-990:items-center max-990:ml-0
         ml-6  p-5 gap-8 opacity-100 bg-white flex flex-col items-center justify-center">
            <div className="lg:w-[556px] lg:h-[59px] max-990:w-[100%] max-990:h-[108px] max-990:flex max-990:flex-col
                   gap-[7.38px] opacity-100 lg:-mb-4 ">
              <div className='flex flex-row max-990:flex max-990:flex-row w-full max-990:items-center max-990:w-full items-center  justify-start gap-2'>
                <img src='/logocar.svg' className='lg:w-[65px] lg:h-[59px] max-990:w-[32px] max-990:h-[32px]' />
                <h1 className="font-inter text-[#1E1E1E] italic font-bold lg:text-[36px] max-990:text-[18px] leading-[100%]">
                  Ease Drive
                </h1>

              </div>
            </div>


            <div className="lg:w-[556px] lg:h-[] max-990:w-[347px] max-990:h-[429px] justify-between opacity-100 flex flex-row items-start">
              <div className='text-left lg:w-[60%] max-990:w-[70%]'>
                <h4 className="font-inter text-[#1E1E1E] italic font-semibold lg:text-[26px] max-990:text-[18px] leading-[100%]">
                  Vehicle Information
                </h4>
                <p className=" font-medium text-left text-[#333333] lg:text-[18px] max-990:text-[14px] font-inter lg:pb- pt-2">
                  Ensure your vehicle image is clean, recent, and shows the number plate.
                </p>
              </div>
              <div>
                <SectionLabel className="text-[#3733CF] bg-custom-gradient"

                  title={` Step ${step}  of ${totalSteps}`}
                />
              </div>
              {/* Content here */}
            </div>
            <div className='flex w-[100%]'>
              <form className="space-y-4 w-[100%]">
                <CustomSelectField
                  label="Vehicle Type"
                  name="vehicleType"
                  defaultHolder="Select Vehicle Type"
                  value={formData.vehicleType}
                  onChange={handleUpdateFormData}
                  // iconSrc="/city-02.svg"
                  // value={formData.city}
                  // onChange={handleCityChange}
                  options={["Keke", "Car", "Shuttle Bus", "Motorcycle", "Regular Bus", "Truck"]}
                  rightIcon={FaChevronDown}
                >
                  <CarIcon className="w-6 h-6 text-gray-500" />

                </CustomSelectField>
                {errors.vehicleType && (
                  <p className="text-red-500 text-sm -mt-2">{errors.vehicleType}</p>
                )}
                <CustomInputField
                  label="Plate Number"
                  name="plateNumber"
                  value={formData.plateNumber}
                  onFormChange={handleUpdateFormData}

                  placeholder="Enter Vehicle Plate  Number"
                  type="text"

                >
                  <PlateNumberIcon className="w-6 h-6 text-gray-500" />
                </CustomInputField>
                 {errors.plateNumber && (
                <p className="text-red-500 text-sm -mt-2">{errors.plateNumber}</p>
              )}

                <CustomSelectField
                  label="Service Area (Location)"
                  name="serviceArea"
                  value={formData.serviceArea}
                  onChange={handleUpdateFormData}

                  defaultHolder="Select Service Area"
                  options={["Odenigwe", "Hill-Top", "Main gate", "Behind Flat", "Odeim gate",]}
                  rightIcon={FaChevronDown}
                >
                  <LocationHomeIcon className="w-6 h-6 text-gray-500" />
                </CustomSelectField>

                {/* <CustomInputField
                  label="Service Area (Location)"
                  iconSrc="/call-02.svg"
                  placeholder="Enter your usual route"
                  type="text"
                // value={formData.phone}
                // onChange={handleChange("phone")}
                /> */}

                <div className='flex flex-row w-full gap-4'>
                  <CustomInputField
                    label="Number Seats"
                    name="numberOfSeats"
                    value={formData.numberOfSeats}
                    onFormChange={handleUpdateFormData}
                    placeholder="e.g 4"
                    type="text"
                  >
                    <SeatIcon className="w-6 h-6 text-gray-500" />
                  </CustomInputField>

                  <CustomInputField
                    label="Vehicle Color"
                    name="vehicleColor"
                    value={formData.vehicleColor}
                    onFormChange={handleUpdateFormData}
                    // iconSrc="/call-02.svg"
                    placeholder="e.g Black"
                    type="text"
                  // value={formData.phone}
                  // onChange={handleChange("phone")}
                  >
                    <ColorIcon className="w-6 h-6 text-gray-500" />
                  </CustomInputField>
                </div>


              </form>

            </div>

            {/* Upload Section */}
            <div className="flex flex-col w-full -mt-4">
              <p className="font-semibold text-left text-[#333333] lg:text-[18px] max-990:text-[16px] font-inter pt-2">
                Upload a document
              </p>
              <p className="font-medium text-left text-[#333333] lg:text-[14px] font-inter">
                You can upload up to 4 images (JPG, PNG). Max size: 5MB each
              </p>

              <div className="flex-col flex justify-center items-center w-full mt-4">
                <AddFileIcon className="w-20 h-20 mb-4 cursor-pointer" onClick={handleUploadClick} />
                <button
                  type="button"
                  onClick={handleUploadClick}
                  className="lg:w-[30%] max-990:w-[50%] bg-green-200 text-gray-400 rounded-xl py-1.5 text-[18px] font-bold mb-4"
                >
                  Upload Photos
                </button>
                <input
                  type="file"
                  ref={fileInputRef}
                  name="vehiclePhotos"
                  className="hidden"
                  accept="image/*"
                  onChange={(e) => {
                    const files = Array.from(e.target.files);
                    setSelectedFiles(files);
                    handleUpdateFormData("vehiclePhotos", files);
                  }}
                  multiple
                />
                {selectedFiles.length > 0 && (
                  <ul className="w-[80%] mt-2 text-sm text-gray-600 list-disc list-inside">
                    {selectedFiles.map((file, index) => (
                      <li key={index}>{file.name}</li>
                    ))}
                  </ul>
                )}
                {errors.files && (
                  <p className="text-red-500 text-sm mt-1">{errors.files}</p>
                )}
              </div>
            </div>

            <CustomButton
              name="Continue"
              extendedStyles={"w-full p-3 lg:p-4 rounded-lg"}
              btnClick={() => handleNext()}
            />

          </div>

          <div className="lg:w-[617px] lg:h-[765px] max-990:hidden lg:p-5 gap-8 opacity-100  flex items-center justify-center">
            <img src="/optionimg.png" alt="" className='lg:w-[528px] lg:h-[623px] lg:rounded-[45px]' />
          </div>



        </div>
      </div>
    </div>
  )
}
