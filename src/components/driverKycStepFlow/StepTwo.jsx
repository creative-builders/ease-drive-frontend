import React from 'react'
import SectionLabel from '../SectionLabel'
import { CustomSelectField } from "../customFormFields/CustomSelectField"
import { useState, useRef } from 'react';

import CustomButton from '../CustomButton';
import { FaChevronDown, FaArrowLeft } from "react-icons/fa";
import { CarIcon } from '../../assets/icons/CarIcon'
import { AddFileIcon } from '../../assets/icons/AddFileIcon'
import { PlateNumberIcon } from '../../assets/icons/PlateNumberIcon'
import { ColorIcon } from '../../assets/icons/ColorIcon'
import { SeatIcon } from '../../assets/icons/SeatIcon'
import { LocationHomeIcon } from '../../assets/icons/LocationHomeIcon';
import { useStepFlowContext } from '../../hooks/useStepFlowFormContext';
import { InputField } from '../customFormFields/InputField';
import { Skip } from '../Skip';
import { Link } from 'react-router-dom';
import { AddFile } from "../AddFile"


export const StepTwo = ({ nextStep, prevStep, step, totalSteps }) => {

  const fileInputRef = useRef(null);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const {
    formData,
    inputTouched,
    setFormData,
    handleUpdateFormData,
  } = useStepFlowContext();
  const [errors, setErrors] = useState({});

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles(files);
  };

  const isplateNumberValid = (formData?.plateNumber || "").length >= 5;
  const showplateNumbererror =
    inputTouched && formData?.plateNumber.length > 0 && !isplateNumberValid;

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
    <div lassName=" min-h-screen lg:h-full ">
      <div className="flex items-center justify-center  min-h-screen ">
        <div className=" lg:w-[1116px] lg:h-[1040px] w-[100%] h-[100%] m-auto 
         opacity-100 flex flex-row items-center py-auto">
          <div className="lg:w-[637px] lg:h-[700px] w-[360px]  h-[100%] m-auto 
          flex justify-center items-center ml-0
           p-5 gap-8 opacity-100 bg-white flex flex-col items-center justify-center">
            <div className="lg:w-[100%] w-full text-left flex flex-col justify-start   opacity-100 ">

              <div className='flex gap-4 -ml-2 lg:-ml-0 lg:px-2 py-3'>
                <button onClick={prevStep} className='flex font-regular text-xl'>
                  <FaArrowLeft />
                </button>
              </div>

              <div className="flex -ml-3 lg:-ml-0 flex-row items-center justify-start">
                <SectionLabel
                  className="text-blue-800 bg-custom-gradient"
                  title={` Step ${step}  of ${totalSteps}`}
                />
            
              </div>
            </div>

            <div className="lg:w-[100%] lg:h-[] w-[347px] justify-between opacity-100 flex flex-row items-start">
              <div className='text-left lg:w-[60%] w-[70%]'>
                <h4 className="font-inter text-gray-700 italic font-semibold lg:text-[26px] text-lg leading-[100%]">
                  Vehicle Information
                </h4>
                <p className=" font-medium text-left text-gray-800 lg:text-lg text-sm font-inter lg:pb- pt-2">
                  Ensure your vehicle image is clean, recent, and shows the number plate.
                </p>
              </div>
              <div>
                <button onClick={() => nextStep()}>
                  <Skip title="Skip" />
                </button>

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
                
                  options={["Keke", "Car", "Shuttle Bus", "Motorcycle", "Regular Bus", "Truck"]}
                  rightIcon={FaChevronDown}
                  leftIcon={CarIcon}
                >

                </CustomSelectField>
                {errors.vehicleType && (
                  <p className="text-red-500 text-sm -mt-2">{errors.vehicleType}</p>
                )}

                <InputField
                  label="Plate Number"
                  name="plateNumber"
                  placeholder="Enter Vehicle Plate  Number"
                  value={formData.plateNumber}
                  onChange={handleUpdateFormData}
                  leftIcon={PlateNumberIcon}
                  error={
                    showplateNumbererror ? " Plate Number must be at least 5 characters" : ""
                  }
                />


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
                  leftIcon={LocationHomeIcon}
                >
                  {/* <LocationHomeIcon className="lg:w-8 lg:h-8 w-6 h-6 text-gray-500" /> */}
                </CustomSelectField>

                <div className='flex flex-row w-full gap-4'>

                  <InputField
                    label="Number Seats"
                    name="numberOfSeats"
                    value={formData.numberOfSeats}
                    placeholder="e.g 4"
                    onChange={handleUpdateFormData}
                    leftIcon={SeatIcon}
               
                  />
                  <InputField
                    label="Vehicle Color"
                    name="vehicleColor"
                    value={formData.vehicleColor}
                    placeholder="e.g Black"
                    onChange={handleUpdateFormData}
                    leftIcon={ColorIcon}
                  
                  />

                </div>

              </form>

            </div>

            {/* Upload Section */}
            <div className="flex flex-col w-full -mt-4">
              <AddFile
                name="vehiclePhotos"
                title={"Upload photos of vehicle"}
                extendedStyles={"text-center"}
                onFilesChange={handleUpdateFormData}
              >
                <p className=" text-xs text-center font-medium text-neutral-700">
                  You can upload up to 4 images (JPG, PNG). <br />
                  Maximum file size: 10MB per image
                </p>
              </AddFile>
            </div>


            <CustomButton
              name="Continue"
              extendedStyles={"w-full p-3 lg:p-3 bg-green-700 rounded-lg"}
              btnClick={() => handleNext()}
            />

          </div>

          <div className="lg:w-[528px] lg:h-[960px] hidden lg:block lg:p-5 gap-8 opacity-100  flex items-center justify-center">
            <img src="/signup-banner-l.png" alt="" className=' lg:rounded-[45px] h-full w-full' />
          </div>


        </div>
      </div>
    </div>
  )
}
