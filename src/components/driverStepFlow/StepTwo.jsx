
import React, { useState, useRef } from 'react';
import carImage from '../../assets/images/Car.svg';
import sideImage from '../../assets/images/sideImage.png';
import SectionLabel from '../SectionLabel';
import BackArrow from '../BackArrow';
import CustomSelect from '../forms/CustomSelect';
import arrowDown from "../../assets/icons/arrow-down-01.svg"
import iconCity from "../../assets/icons/city-02.svg"
import iconCar from "../../assets/icons/car-01.svg"
import FormInput from '../forms/FormInput';
import driverLise from "../../assets/icons/driver-lisence.svg"
import driverSeat from "../../assets/icons/airplane-seat.svg"
import driverColor from "../../assets/icons/colors.svg"
import downloadIcon from "../../assets/icons/upload-icon.svg"


export default function StepTwo({ nextStep, prevStep, step, totalSteps }) {
  const [plateNumber, setPlateNumber] = useState('EUG20456');
  const [vehicleColor, setVehicleColor] = useState('Black');
  const [seatNumber, setSeatNumber] = useState('');
  const [VehicleType, setVehicleType] = useState('');
  const [location, setLocation] = useState('');

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
      <div className="w-full md:w-1/2 p-6 md:p-10 relative">
        {/* Header */}
        <div className="flex items-center space-x-2 mb-6">
          <img src={carImage} alt="Ease Drive" className="h-8 w-8 md:h-10 md:w-10" />
          <h1 className="text-2xl md:text-3xl font-bold italic font-[inter]">Ease Drive</h1>
        </div>

        {/* Title & Description */}
        <div className="mb-4">
          <article className="text-xl md:text-2xl font-semibold font-[inter] mb-3 relative">
            <span className='font-[inter] text-[18px] md:text-[26px] leading-[36px] tracking-normal align-middle font-bold'>Vehicle Information </span>
            <div className="text-center mb-[29px] absolute right-1 top-3">
              <SectionLabel title={`${step} Step of ${totalSteps}`} />
            </div>
          </article>
          <p className="font-[inter] font-bold text-base align-middle">Ensure your vehicle image is clean, recent, and shows the number plate.</p>
        </div>

          <BackArrow
            extendedStyles="top-16 md:top-20 left-8 absolute"
            onClick={() => prevStep()}
          />

        {/* Form Fields */}

        <div className="space-y-4">
          {/* Vehicle Type */}
          <CustomSelect
            label="Vehicle Type"
            value={VehicleType}
            onChange={(e) => setVehicleType(e.target.value)}
            leftIcon={<img src={iconCar} alt="icon" className="h-8 w-8" />}
            rightIcon={arrowDown}
            options={["Keke", "Bus", "Car"]}
            placeholder="Car"
             selectClassName="indent-4"
          />

          {/* Plate Number */}
          <FormInput
            label="Plate Number"
            id="PlateNumber"
            type='text'
            value={plateNumber}
            onChange={(e) => setPlateNumber(e.target.value)}
            placeholder="Enter document Id number"
            inputClassName = "indent-4 flex items-center justify-center"
            required
            leftIcon={<img src={driverLise} className="h-[18px] md:h-8 w-[18px] md:w-8" alt="" />}
          />

          {/* Service Area */}
          <CustomSelect
            label="Service Area (Location)"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            leftIcon={<img src={iconCity} alt="icon" className="h-8 w-8" />}
            rightIcon={arrowDown}
            options={["Main-Gate", "Back-Gate"]}
            // isRounded
            placeholder="UNN"
            selectClassName="indent-4"
          />

          {/* Vehicle Colour */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormInput
              label="Vehicle Colour"
              id="VehicleColour"
              type='text'
              value={vehicleColor}
              onChange={(e) => setVehicleColor(e.target.value)}
              placeholder="black"
              inputClassName = "indent-4 flex items-center justify-center"
              required
              leftIcon={<img src={driverColor} className="h-[18px] md:h-8 w-[18px] md:w-8" alt="" />}
            />
            
            <FormInput
              label="Vehicle Colour"
              id="VehicleColour"
              type='text'
              value={seatNumber}
              onChange={(e) => setSeatNumber(e.target.value)}
              placeholder="black"
              inputClassName = "indent-4 flex items-center justify-center"
              required
              leftIcon={<img src={driverSeat} className="h-[18px] md:h-8 w-[18px] md:w-8" alt="" />}
            />
          </div>

          {/* Upload Photo */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Upload Vehicle Photo (front, Back and side)
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
      <div className="h-[870px] w-[528px] ml-12 mt-2 mb-2 hidden md:flex">
        <img
          src={sideImage}
          alt="Driver in vehicle"
          className="w-full rounded-[45px] object-cover"
        />
      </div>
    </div>
  );
}
