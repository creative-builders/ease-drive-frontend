import React, { useState, useRef } from 'react';
import SectionLabel from '../SectionLabel';
import { CustomSelectField } from "../customFormFields/CustomSelectField";
import { FaChevronDown } from "react-icons/fa";
import { AddFileIcon } from '../../assets/icons/AddFileIcon';
import { useStepFlowContext } from '../../hooks/useStepFlowFormContext';
import { DocumentIcon } from '../../assets/icons/DocumentIcon';
import { IdCardIcon } from '../../assets/icons/IdCardIcon';
import { InputField } from '../customFormFields/InputField';
import CustomButton from '../CustomButton';
import { Skip } from '../Skip';
import { Link } from 'react-router-dom';
import { AddFile } from '../AddFile'

export const StepOne = ({ nextStep, step, totalSteps }) => {
  const fileInputRef = useRef(null);
  const [selectedFiles, setSelectedFiles] = useState([]);

  const {
    formData,
    inputTouched,
    setFormData,
    handleUpdateFormData,
  } = useStepFlowContext();


  const handleFileFieldUpdate = (files) => {
      handleUpdateFormData("documentPhotos", files)
      setSelectedFiles(files)
  }

  const [errors, setErrors] = useState({});

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles(files);
  };

  const isDocumentValid = (formData?.documentID || "").length >= 9;
  const showDocumenterror =
    inputTouched && formData?.documentID.length > 0 && !isDocumentValid;


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
    console.log(newErrors)

    if (Object.keys(newErrors).length === 0) {
      nextStep(); // Proceed only if no validation error
    }
  };

  return (
    <div className=" min-h-screen lg:h-full">
      <div className="flex items-center justify-center min-h-screen ">
        <div className="bg-white lg:w-[1116px] lg:h-[720px] w-[90%] m-auto flex
         lg:pt-12 lg:pb-12 opacity-100 flex flex-row items-center py-auto">

          <div className="lg:w-[637px] lg:h-[734px]  w-[400px] 
            p-5 gap-6 bg-white flex flex-col items-center justify-center">
            {/* Logo */}
            <div className="lg:w-[100%] w-full text-left flex flex-col justify-start   opacity-100 ">
              <div className="flex flex-row items-center justify-start">
                <SectionLabel
                  className="text-blue-800 bg-custom-gradient"
                  title={` Step ${step}  of ${totalSteps}`}
                />

              </div>
            </div>
            {/* Section Header */}
            <div className="lg:w-[100%] w-[100%] justify-between flex flex-row items-start">
              <div className='text-left lg:w-[50%] '>
                <h4 className="font-inter text-gray-800 italic font-semibold lg:text-[26px] text-lg leading-[100%]">
                  KYC Verification
                </h4>
                <p className="font-medium text-left text-gray-700 lg:text-lg text-sm font-inter pt-2">
                  Personal Identity Verification
                </p>
              </div>
              <button onClick={() => nextStep()}>
                <Skip title="Skip" />
              </button>

            </div>

            {/* Form Section */}
            <form className="space-y-4 w-full">
              <CustomSelectField
                name="meansOfIdentification"
                label="Means of Identification"
                value={formData.meansOfIdentification}
                onChange={handleUpdateFormData}
                options={["NIN", "Driver's License", "International Passport", "Voter’s Card"]}
                defaultHolder="Select means of identification"
                rightIcon={FaChevronDown}
                leftIcon={DocumentIcon}
              >
                {/* <DocumentIcon className="lg:w-8 lg:h-8 w-6 h-6 text-gray-500" /> */}
              </CustomSelectField>
              {errors.meansOfIdentification && (
                <p className="text-red-500 text-sm -mt-2">{errors.meansOfIdentification}</p>
              )}

              <InputField
                label="Document ID"
                name="documentID"
                placeholder="Enter Document ID Number"
                value={formData.documentID}
                onChange={handleUpdateFormData}
                leftIcon={IdCardIcon}
                error={
                  showDocumenterror ? "Document ID must be at least 11 characters" : ""
                }
              />
              {errors.documentID && (
                <p className="text-red-500 text-sm -mt-2">{errors.documentID}</p>
              )}
            </form>

            {/* Upload Section */}

            <div className="flex flex-col w-full">
              <AddFile 
                name="documentPhotos"
                title={"Upload photos of document"}
                extendedStyles={"text-center"}
                onFilesChange={handleFileFieldUpdate}
              >
                <p className=" text-xs text-center font-medium text-neutral-700">
                  You can upload up to 4 images (JPG, PNG). <br />
                  Maximum file size: 10MB per image
                </p>
              </AddFile>
            </div>

            <CustomButton
              name="Continue"
              extendedStyles="w-full p-3 bg-green-700 lg:p-3 rounded-lg"
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
