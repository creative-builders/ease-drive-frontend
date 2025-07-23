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


export const StepTwo = ({ nextStep, step, totalSteps }) => {

  const fileInputRef = useRef(null);
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles(files);
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
                  defaultHolder="Select Vehicle Type"
                  // iconSrc="/city-02.svg"
                  // value={formData.city}
                  // onChange={handleCityChange}
                  options={["Keke", "Car", "Shuttle Bus", "Motorcycle", "Regular Bus", "Truck"]}
                  rightIcon={FaChevronDown}
                >
                  <CarIcon className="w-6 h-6 text-gray-500" />

                </CustomSelectField>

                <CustomInputField
                  label="Plate Number"
                  // iconSrc="/call-02.svg"
                  placeholder="Enter Vehicle Plate  Number"
                  type="text"
                // value={formData.phone}
                // onChange={handleChange("phone")}
                >
                  <PlateNumberIcon className="w-6 h-6 text-gray-500" />
                </CustomInputField>

                <CustomSelectField
                  label="Service Area (Location)"
                  // iconSrc="/city-02.svg"
                  // value={formData.city}
                  // onChange={handleCityChange}
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
                    iconSrc="/user-03.svg"
                    placeholder="e.g 4"
                    type="text"
                  // value={formData.phone}
                  // onChange={handleChange("phone")}
                  >
                    <SeatIcon className="w-6 h-6 text-gray-500" />
                  </CustomInputField>

                  <CustomInputField
                    label="Vehicle Color"
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

            <div className=' flex flex-col  w-full -mt-4'>
              <div className='flex-col justify-start flex items-start w-full'>
                <p className=" font-semibold text-left text-[#333333] lg:text-[18px] max-990:text-[14px] font-inter lg:pb- pt-2">
                  Upload Vehicle Photo (front, Back and side)
                </p>
                <p className=" font-medium text-ledt text-[#333333] lg:text-[14px] max-990:text-[8px] font-inter -pt-2">
                  You can upload up to 4 images (JPG, PNG). Maximum file size: 5MB per image
                </p>
              </div>

              <div className="flex-col flex justify-center items-center w-full  mt-4">
                <AddFileIcon className="w-20 h-20 mb-4 cursor-pointer" onClick={handleUploadClick} />


                <button
                  type="button"
                  onClick={handleUploadClick}
                  className="lg:w-[30%] max-990:w-[50%] bg-green-200 text-gray-400 rounded-xl py-1.5 lg:text-[16px] max-990:text-[10px] font-bold mb-4"
                >
                  Upload Photos
                </button>

                {/* Hidden File Input */}
                <input
                  type="file"
                  ref={fileInputRef}
                  className="hidden"
                  accept="image/*"
                  onChange={handleFileChange}
                  multiple
                />

                {/* File Name List */}
                {selectedFiles.length > 0 && (
                  <ul className="w-[80%] mt-2 text-sm  text-gray-600 list-disc list-inside">
                    {selectedFiles.map((file, index) => (
                      <li key={index}>{file.name}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            <CustomButton
              name="Continue"
              extendedStyles={"w-full p-3 lg:p-4"}
              btnClick={() => nextStep()}
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
