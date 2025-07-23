import React, { useState, useRef } from 'react';
import SectionLabel from '../SectionLabel';
import { CustomInputField } from '../CustomInputField';
import { CustomSelectField } from '../CustomSelectField';
import { ProfileUploadIcon } from '../../assets/icons/ProfileUploadIcon';

import CustomButton from '../CustomButton';

export const StepFour = ({ nextStep, step, totalSteps }) => {
  const fileInputRef = useRef(null);
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleNext = () => {
    if (agreed) {
      setError('');
      nextStep();
    } else {
      setError('You must agree to the terms to continue.');
    }
  };

  return (
    <div className="min-h-screen lg:h-full max-990:h-[]">
      <div className="flex items-center justify-center h-full min-h-screen bg-gray-100">
        <div className="bg-white lg:w-[1216px] lg:h-[700px] max-990:w-[90%] max-990:h-[] max-990:m-auto py-6 lg:pt-12 lg:pb-12 opacity-100 flex flex-row items-center">
          <div className="lg:w-[637px] max-990:w-full max-990:h-[60vh] lg:h-[90vh] max-990:m-auto max-990:ml-0 ml-6 p-5 gap-8 bg-white flex flex-col items-center justify-center">
            <div className="lg:w-[556px] max-990:w-full max-990:flex max-990:flex-col gap-[7.38px] opacity-100 lg:-mb-4">
              <div className="flex flex-row items-center justify-start gap-2">
                <img src="/logocar.svg" className="lg:w-[65px] lg:h-[59px] max-990:w-[32px] max-990:h-[32px]" />
                <h1 className="font-inter text-[#1E1E1E] italic font-bold lg:text-[36px] max-990:text-[18px] leading-[100%]">
                  Ease Drive
                </h1>
              </div>
            </div>

            <div className="lg:w-[556px] max-990:w-[347px] justify-between opacity-100 flex flex-row items-start">
              <div className="text-left lg:w-[60%] max-990:w-[70%]">
                <h4 className="font-inter text-[#1E1E1E] italic font-semibold lg:text-[26px] max-990:text-[18px] leading-[100%]">
                  Upload Profile Photo
                </h4>
                <p className="font-medium text-left text-[#333333] lg:text-[18px] max-990:text-[14px] font-inter pt-2">
                  Show face clearly, no filters or group photos
                </p>
              </div>
              <div>
                <SectionLabel className="text-[#3733CF] bg-custom-gradient" title={`Step ${step} of ${totalSteps}`} />
              </div>
            </div>

            <div className="flex w-full">
              <div className="flex-col flex justify-center items-center w-full mt-4">
                {previewUrl ? (
                  <img
                    src={previewUrl}
                    alt="Preview"
                    className="w-32 h-32 object-cover rounded-full border border-gray-300"
                    onClick={handleUploadClick}
                  />
                ) : (
                  <ProfileUploadIcon className="w-30 h-30 cursor-pointer" onClick={handleUploadClick} />
                )}
                <p
                  onClick={handleUploadClick}
                  className="font-regular cursor-pointer text-center text-[#4847EB] lg:text-[20px] max-990:text-[14px] font-inter pt-2"
                >
                  Upload Profile Photo
                </p>
                <input
                  type="file"
                  ref={fileInputRef}
                  className="hidden"
                  accept="image/*"
                  onChange={handleFileChange}
                />
              </div>
            </div>

            

            <button
              type="button"
              className="lg:w-full max-990:w-full bg-green-200 text-primary-700 rounded-xl py-4 text-[18px] font-bold "
            >
              Skip
            </button>

            <CustomButton name="Submit" extendedStyles="w-full p-3 lg:p-4" btnClick={handleNext} />
          </div>

          <div className="lg:w-[617px] lg:h-[765px] max-990:hidden lg:p-5 gap-8 opacity-100 flex items-center justify-center">
            <img src="/optionimg.png" alt="Visual" className="lg:w-[528px] lg:h-[623px] rounded-[45px]" />
          </div>
        </div>
      </div>
    </div>
  );
};
