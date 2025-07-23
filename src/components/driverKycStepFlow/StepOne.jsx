import React, { useState, useRef } from 'react';
import SectionLabel from '../SectionLabel';
import { CustomInputField } from '../CustomInputField';
import { CustomSelectField } from "../CustomSelectField";
import { FaChevronDown } from "react-icons/fa";
import { PlateNumberIcon } from '../../assets/icons/PlateNumberIcon';
import { AddFileIcon } from '../../assets/icons/AddFileIcon';
import { useStepFlowContext } from '../../hooks/useStepFlowFormContext';
import CustomButton from '../CustomButton';

export const StepOne = ({ nextStep, step, totalSteps }) => {
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

    if (!formData.meansOfIdentification) {
      newErrors.meansOfIdentification = "Please select means of identification";
    }

    if (!formData.documentID || formData.documentID.trim() === "") {
      newErrors.documentID = "Please enter document ID";
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
    <div className="bg-[#FDFDFD] min-h-screen lg:h-full">
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white lg:w-[1216px] lg:h-[800px] max-990:w-[90%] max-990:m-auto max-990:flex
         lg:pt-12 lg:pb-12 opacity-100 flex flex-row items-center max-990:py-auto">

          <div className="lg:w-[637px] lg:h-[734px] max-990:w-full max-990:h-[90vh] py-auto ml-6 p-5 gap-8 bg-white flex flex-col items-center justify-center">
            {/* Logo */}
            <div className="lg:w-[556px] gap-[7.38px] opacity-100 lg:-mb-4">
              <div className='flex flex-row w-full items-center justify-start gap-2'>
                <img src='/logocar.svg' className='lg:w-[65px] lg:h-[59px] max-990:w-[32px] max-990:h-[32px]' />
                <h1 className="font-inter text-[#1E1E1E] italic font-bold lg:text-[36px] max-990:text-[18px] leading-[100%]">
                  Ease Drive
                </h1>
              </div>
            </div>

            {/* Section Header */}
            <div className="lg:w-[556px] justify-between flex flex-row items-start">
              <div className='text-left lg:w-[50%]'>
                <h4 className="font-inter text-[#1E1E1E] italic font-semibold lg:text-[26px] max-990:text-[18px] leading-[100%]">
                  KYC Verification
                </h4>
                <p className="font-medium text-left text-[#333333] lg:text-[18px] max-990:text-[14px] font-inter pt-2">
                  Personal Identity Verification
                </p>
              </div>
              <SectionLabel
                className="text-[#3733CF] bg-custom-gradient"
                title={` Step ${step}  of ${totalSteps}`}
              />
            </div>

            {/* Form Section */}
            <form className="space-y-4 w-full">
              <CustomSelectField
                name="meansOfIdentification"
                label="Means of Identification"
                value={formData.meansOfIdentification}
                onChange={handleUpdateFormData}
                // onChange={(val) => handleUpdateFormData("meansOfIdentification", val)}
                options={["NIN", "Driver's License", "International Passport", "Voter’s Card"]}
                defaultHolder="Select means of identification"
                rightIcon={FaChevronDown}
              >
                <PlateNumberIcon className="w-6 h-6 text-gray-500" />
              </CustomSelectField>
              {errors.meansOfIdentification && (
                <p className="text-red-500 text-sm -mt-2">{errors.meansOfIdentification}</p>
              )}

              <CustomInputField
                label="Document ID"
                name="documentID"
                placeholder="Enter Document ID"
                value={formData.documentID}
                onFormChange={handleUpdateFormData}
              >
                <PlateNumberIcon className="w-6 h-6 text-gray-500" />
              </CustomInputField>

              {errors.documentID && (
                <p className="text-red-500 text-sm -mt-2">{errors.documentID}</p>
              )}
            </form>

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
                  name="documentPhotos"
                  className="hidden"
                  accept="image/*"
                  onChange={(e) => {
                    const files = Array.from(e.target.files);
                    setSelectedFiles(files);
                    handleUpdateFormData("documentPhotos", files);
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
              extendedStyles="w-full p-3 lg:p-4 rounded-lg"
              btnClick={handleNext}
            />
          </div>

          {/* Image section */}
          <div className="lg:w-[528px] lg:h-[638px] max-990:hidden opacity-100 rounded-[45px]">
            <img src="/optionimg.png" alt="KYC" className="w-full h-full lg:rounded-[45px]" />
          </div>
        </div>
      </div>
    </div >
  );
};
