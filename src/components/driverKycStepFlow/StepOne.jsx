import React from 'react'
import SectionLabel from '../SectionLabel'
import { CustomInputField } from '../CustomInputField'
import { CustomSelectField } from "../CustomSelectField"
import { useState, useRef } from 'react';
import { FaChevronDown } from "react-icons/fa";
import addfile from '../../assets/images/addFile.svg'


export const StepOne = ({ nextStep, step, totalSteps }) => {

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
    <div lassName="bg-[#FDFDFD] min-h-screen">
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white lg:w-[1216px] lg:h-[800px] max-990:w-[90%] max-990:h-[95vh] max-990:m-auto pt-12 pb-12 opacity-100 flex flex-row items-center">
          <div className="lg:w-[637px] lg:h-[734px] max-990:w-[100%] max-990:h-[90vh] max-990:m-auto 
          max-990:flex max-990:justify-center max-990:items-center max-990:ml-0
         ml-6  p-5 gap-8 opacity-100 bg-white flex flex-col items-center justify-center">
            <div className="lg:w-[556px] lg:h-[59px] max-990:w-[182px] max-990:h-[108px] max-990:flex max-990:flex-col
                   gap-[7.38px] opacity-100 -mb-4 ">
              <div className='flex flex-row max-990:flex max-990:flex-col w-full  items-center  justify-start gap-2'>
                <img src='/logocar.svg' className='lg:w-[65px] lg:h-[59px]' />
                <h1 className="font-inter text-[#1E1E1E] italic font-bold lg:text-[36px] max-990:text-[34px] leading-[100%]">
                  Ease Drive
                </h1>

              </div>
            </div>


            <div className="lg:w-[556px] lg:h-[] max-990:w-[347px] max-990:h-[429px] justify-between lg:gap-14 opacity-100 flex flex-row items-start">
              <div className='text-left'>
                <h4 className="font-inter text-[#1E1E1E] italic font-semibold lg:text-[26px] max-990:text-[24px] leading-[100%]">
                  KYC Verification
                </h4>
                <p className=" font-medium text-center text-[#333333] lg:text-[18px] max-990:text-[16px] font-inter lg:pb- pt-2">
                  Personal Identity Verification
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
                  label="Means of Identification"
                  iconSrc="/city-02.svg"
                  // value={formData.city}
                  // onChange={handleCityChange}
                  options={["NIN", "Voter’s Card", "International Passport", "National ID Card"]}
                  rightIcon={FaChevronDown}
                />
                <CustomInputField
                  label="Document ID"
                  iconSrc="/call-02.svg"
                  placeholder="Enter your document ID"
                  type="tel"
                // value={formData.phone}
                // onChange={handleChange("phone")}
                />

              </form>

            </div>

            <div className=' flex flex-col  w-full -mt-4'>
              <div className='flex-col justify-start flex items-start w-full'>
                <p className=" font-semibold text-left text-[#333333] lg:text-[18px] max-990:text-[16px] font-inter lg:pb- pt-2">
                  Upload a document
                </p>
                <p className=" font-medium text-ledt text-[#333333] lg:text-[14px] max-990:text-[14px] font-inter -pt-2">
                  You can upload up to 4 images (JPG, PNG). Maximum file size: 5MB per image
                </p>
              </div>

              <div className="flex-col flex justify-center items-center w-full  mt-4">

                <img
                  src={addfile}
                  alt="Upload Icon"
                  onClick={handleUploadClick}
                  className="cursor-pointer w-20 h-20 mb-4"
                />

                <button
                  type="button"
                  onClick={handleUploadClick}
                  className="lg:w-[30%] max-990:w-[50%] bg-green-200 text-gray-400 rounded-xl py-1.5 text-[18px] font-bold mb-4"
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

            <button
              type="submit"
              className="w-full bg-green-700 text-white rounded-xl py-4 text-[18px] font-bold disabled:opacity-50"

            >
              Continue
            </button>

          </div>

          <div className="lg:w-[617px] lg:h-[765px] max-990:hidden lg:p-5 gap-8 opacity-100  flex items-center justify-center">
            <img src="/optionimg.png" alt="" className='lg:w-[528px] lg:h-[623px] lg:rounded-[45px]' />
          </div>



        </div>
      </div>
    </div>
  )
}
