import React, { useState, useRef } from 'react';
import SectionLabel from '../SectionLabel';
import { CustomInputField } from '../CustomInputField';
import { CustomSelectField } from "../CustomSelectField";
import { FaChevronDown } from "react-icons/fa";
import { PlateNumberIcon } from '../../assets/icons/PlateNumberIcon';
import { AddFileIcon } from '../../assets/icons/AddFileIcon';
import { useStepFlowContext } from '../../hooks/useStepFlowFormContext';
import { DocumentIcon } from '../../assets/icons/DocumentIcon';
import { IdCardIcon } from '../../assets/icons/IdCardIcon';
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
    <div className=" min-h-screen lg:h-full">
      <div className="flex items-center justify-center min-h-screen ">
        <div className="bg-white lg:w-[1216px] lg:h-[800px] w-[90%] m-auto flex
         lg:pt-12 lg:pb-12 opacity-100 flex flex-row items-center py-auto">

          <div className="lg:w-[637px] lg:h-[734px] w-full h-[] 
          p-5 gap-6 bg-white flex flex-col items-center justify-center">
            {/* Logo */}
            <div className="lg:w-[100%] w-full flex flex-col  gap-[7px] opacity-100 ">
              <div className="flex flex-row items-center justify-start gap-2">
                <img src='/ease-drivelogo.png' className='lg:w-[64px] lg:h-[64px] w-[45px] h-[45px] mr-2' />
                <h1 className="font-inter text-gray-700 italic font-bold lg:text-[36px] text-[18px] leading-[100%]">
                  Ease Drive
                </h1>
              </div>
            </div>
            {/* Section Header */}
            <div className="lg:w-[100%] w-[100%] justify-between flex flex-row items-start">
              <div className='text-left lg:w-[50%] '>
                <h4 className="font-inter text-gray-800 italic font-semibold lg:text-[26px] text-[18px] leading-[100%]">
                  KYC Verification
                </h4>
                <p className="font-medium text-left text-gray-700 lg:text-[18px] text-[14px] font-inter pt-2">
                  Personal Identity Verification
                </p>
              </div>
              <SectionLabel
                className="text-blue-800 bg-custom-gradient"
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
                <DocumentIcon className="lg:w-8 lg:h-8 w-6 h-6 text-gray-500" />
              </CustomSelectField>
              {errors.meansOfIdentification && (
                <p className="text-red-500 text-sm -mt-2">{errors.meansOfIdentification}</p>
              )}

              <CustomInputField
                label="Document ID"
                name="documentID"
                placeholder="Enter Document ID Number"
                value={formData.documentID}
                onFormChange={handleUpdateFormData}
              >
                <IdCardIcon className="lg:w-8 lg:h-8 w-6 h-6 text-gray-500" />
              </CustomInputField>

              {errors.documentID && (
                <p className="text-red-500 text-sm -mt-2">{errors.documentID}</p>
              )}
            </form>

            {/* Upload Section */}
            <div className="flex flex-col w-full -mt-4">
              <p className="font-semibold text-left text-gray-700 lg:text-[18px] text-[16px] font-inter pt-2">
                Upload a document
              </p>
              <p className="font-medium text-left text-gray-700 lg:text-[14px] text-[12px] font-inter">
                You can upload up to 4 images (JPG, PNG). Max size: 5MB each
              </p>

              <div className="flex-col flex justify-center items-center w-full mt-4">
                <AddFileIcon className="w-20 h-20 mb-4 cursor-pointer" onClick={handleUploadClick} />
                <button
                  type="button"
                  onClick={handleUploadClick}
                  className="lg:w-[30%] w-[50%] bg-green-200 text-gray-400 rounded-xl py-1.5 text-[18px] font-bold mb-4"
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
          <div className="lg:w-[528px] lg:h-[638px] hidden lg:block opacity-100 rounded-[45px]">
            <img src="/signup-banner.png" alt="" className='lg:w-[528px] lg:h-[623px] lg:rounded-[45px]' />
          </div>
        </div>
      </div>
    </div >
  );
};
