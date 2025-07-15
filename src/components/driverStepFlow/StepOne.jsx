
import React, { useState, useRef } from 'react';
import carImage from '../../assets/images/Car.svg';
import sideImage from '../../assets/images/sideImage.png';
import SectionLabel from '../SectionLabel';
import CustomSelect from '../forms/CustomSelect';
import arrowDown from "../../assets/icons/arrow-down-01.svg"
import validation from "../../assets/icons/document-validation.svg"
import driverLise from "../../assets/icons/driver-lisence.svg"
import downloadIcon from "../../assets/icons/upload-icon.svg"
import FormInput from '../forms/FormInput';

export default function StepOne({ nextStep, step, totalSteps }) {
  const [documentnumber, setdocumentnumber] = useState('EUG20456');
  const [DriverLisence, setDriverLisence] = useState('');

  const fileInputRef = useRef();
  const [previewImages, setPreviewImages] = useState([]);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);

    const validImages = files.filter((file) =>
      file.type === "image/jpeg" || file.type === "image/png"
    );

    const previews = validImages.map((file) => URL.createObjectURL(file));
    setPreviewImages(previews);
  };

  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row bg-white">
      {/* Left Form Section */}
      <div className="w-full md:w-1/2 p-6 md:p-10">
        {/* Header */}
        <div className="flex flex-row gap-0 md:gap-3 items-center">
          <span className="h-12 md:h-14 w-12 md:w-16 flex items-center justify-center ">
            <img src={carImage} className='w-[33px] md:w-[65px] h-[30px] md:h-[59px]' alt="Ease Drive Logo" />
          </span>
          <h1 className="font-[inter] font-extrabold text-[18px] md:text-4xl italic leading-[100%] tracking-normal">Ease Drive</h1>
        </div>

        {/* Title & Description */}
        <div className="mb-4">
          <article className="text-xl md:text-2xl font-semibold font-[inter] relative">
            <span className='font-[inter] text-[18px] md:text-[26px] leading-[36px] tracking-normal align-middle font-bold'>KYC Verification </span>
            <div className="text-center mb-[29px] absolute right-1 top-3">
              <SectionLabel extendeStyles={"bg-accent-700"} title={`${step} Step of ${totalSteps}`} />
            </div>
          </article>
          <p className="font-[inter] font-bold text-base align-middle">Personal Identity Verfication</p>
        </div>

        {/* Form Fields */}
        <div className="space-y-4">
          <CustomSelect
            label="Means of Identification"
            value={DriverLisence}
            onChange={(e) => setDriverLisence(e.target.value)}
            // leftIcon={validation}
             leftIcon={<img src={validation} alt="icon" className="h-6 w-6"/>}
            rightIcon={arrowDown}
            options={["Driver Lisence", "Voters card", "International passport", "National ID Card"]}
            placeholder="DriverLisence"
          />

          <FormInput
            label="Document ID"
            id="DocumentID"
            type='number'
            value={documentnumber}
            onChange={(e) => setdocumentnumber(e.target.value)}
            placeholder="Enter document Id number"
            required
            leftIcon={<img src={driverLise} className="h-6 w-6" alt="" />}
          />

          {/* Upload Photo */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Upload documents
            </label>
            <p className="font-[inter] font-medium text-[14px] align-middle mb-2">
              You can upload up to 4 images (JPG, PNG). Maximum file size: 2MB per image
            </p>

            {/* Hidden file input */}
            <input
              type="file"
              multiple
              accept=".jpg,.jpeg,.png"
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
            />
            <div onClick={handleClick} className="border border-gray-300 rounded-md p-4 flex flex-col items-center justify-center text-center">
              {previewImages.length === 0 ? (
                <>
                  <img src={downloadIcon} className="h-16 w-20" alt="Upload Icon" />
                  <p className="text-xs mt-2 text-gray-500">Click to upload</p>
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
        </div>

        {/* Continue Button */}
        <button 
        className="mt-6 w-full bg-green-700 hover:bg-green-800 text-white font-semibold p-4 rounded-lg"
        onClick={() => nextStep()}
        >
          Continue
        </button>
      </div>

      {/* Right Image Section */}
      <div className="w-full md:w-1/2 hidden md:flex items-center justify-center p-4">
        <img
          src={sideImage} 
          alt="Driver in vehicle"
          className="rounded-xl w-full max-w-[90%] object-cover"
        />
      </div>
    </div>
  );
}

 