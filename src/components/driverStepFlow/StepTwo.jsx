// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useStepFlowContext } from '../../hooks/useStepFlowFormContext';
// import { CgChevronDown } from "react-icons/cg";
// import SectionLabel from '../SectionLabel';
// import BackArrow from '../BackArrow';

// const StepTwo = ({ nextStep, prevStep, step, totalSteps }) => {
//   const { formData, handleUpdateFormData } = useStepFlowContext();
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className='bg-[#F0F1F1] min-h-screen w-full flex flex-col items-center gap-5'>
//       <header className='h-20 w-full flex items-center justify-around'>
//         <p className='ml-4 xl:ml-[-220px] uppercase md:uppercase text-2xl font-bold'>
//           <Link to={"/"}>ease drive</Link>
//         </p>
//         <ul className='h-16 w-96 hidden md:flex items-center justify-between'>
//           <p>Already have an account?</p>
//           <Link to="/login" className="text-green-300 border border-green-300 px-6 py-3 rounded-lg">Login</Link>
//         </ul>
//       </header>
//       <BackArrow extendedStyles="top-16 left-8" />

//       <div className="text-center mb-[29px]">
//         <SectionLabel title={`${step} Step of ${totalSteps}`} />
//       </div>
//       <h2 className='text-3xl font-normal capitalize'>KYC Verification</h2>
//       <p className="flex text-center gap-3 text-sm">
//         <Link to="/DriVerify"><span>Identity Verification</span></Link>
//         <Link to="/DrivUpload"><span>Address Verification</span></Link>
//       </p>

//       <section className='h-fit items-center md:h-108 w-full md:w-4/5 flex flex-col items-left justify-center gap-4 rounded-lg border-0 md:border border-green-600'>
//         <p className='text-xl'>Identity Verification</p>
//         <span className='text-left text-sm'>This Information will help us know you more</span>

//         <div className='h-full md:h-3/5 w-full p-4 grid grid-cols-1 md:grid-cols-2 gap-4 relative'>
//           <article className='h-20 w-full flex flex-col items-left gap-2 relative'>
//             <label htmlFor="identification">Means of Identification</label>
//             <select
//               className='h-20 w-full border outline-none gap-6 rounded-lg'
//               name="documentType"
//               id="identification"
//               onChange={handleUpdateFormData}
//               value={formData.documentType || ""}
//               onFocus={() => setIsOpen(true)}
//               onBlur={() => setIsOpen(false)}
//             >
//               <option value="" disabled>Preference ID</option>
//               <option value="NIN">NIN</option>
//               <option value="Driving License">Driving Lisense</option>
//               <option value="Voters Card">Voters Card</option>
//               <option value="Birth Certificate">Birth Certificate</option>
//               <option value="International Passport">International Passport</option>
//             </select>
            
//             <CgChevronDown
//               className={`absolute right-4 top-1/2 cursor-pointer translate-y-1/2 inline-block transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
//               fontSize={'18px'}
//             />
//           </article>

//           <article className='h-20 w-full flex flex-col items-left gap-2'>
//             <label htmlFor="documentID">Document ID</label>
//             <input
//               className='h-12 w-full border outline-none gap-6 rounded-lg'
//               type="number"
//               name="documentID"
//               id="documentID"
//               onChange={handleUpdateFormData}
//               value={formData.documentID || ""}
//             />
//           </article>

//           <article className='h-20 w-full flex flex-col items-left gap-2'>
//             <label htmlFor="date">Date of Birth</label>
//             <input
//               className='h-12 w-full border outline-none gap-6 rounded-lg'
//               type="date"
//               name="dob"
//               id="date"
//               onChange={handleUpdateFormData}
//               value={formData.dob || ""}
//             />
//           </article>
//         </div>

//         <div className="h-16 w-3/4 items-center md:w-2/5 gap-10 flex justify-end md:mt-[-80px] translate-x-0 md:translate-x-52">
//           <button
//             name="Skip Now"
//             className='h-12 w-32 cursor-pointer rounded-lg border border-green-600'
//             onClick={() => nextStep()}
//           >
//             Skip Now
//           </button>
//           <button
//             name="Next"
//             className='h-12 w-32 cursor-pointer rounded-lg bg-green-600 text-white'
//             onClick={() => nextStep()}
//           >
//             Next
//           </button>
//         </div>

//         <div className="hidden h-[20px] w-full justify-around items-center">
//           <span className=' border-b-2 w-2/5 border-black '></span> Or <span className=' border-b-2 w-2/5 border-black'></span>
//         </div>

//         <Link to={"/login"}>
//           <p className='pair mb-4 text-sm md:hidden'>Already have an account? <span className='text-green-500'>Login</span></p>
//         </Link>
//       </section>
//     </div>
//   );
// };

// export default StepTwo;


import React, { useState, useRef } from 'react';
import carImage from '../../assets/images/Car.svg';
import sideImage from '../../assets/images/image.svg'
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
          <article className="text-xl md:text-2xl font-semibold font-[inter]">
            <span className='font-[inter] font-bold text-3xl align-middle'>Vehicle Information </span>
            <div className="text-center mb-[29px]">
              <SectionLabel title={`${step} Step of ${totalSteps}`} />
            </div>
          </article>
          <p className="font-[inter] font-bold text-base align-middle">Ensure your vehicle image is clean, recent, and shows the number plate.</p>
        </div>

          <BackArrow
            extendedStyles="top-36 left-8 absolute"
            onClick={() => prevStep()}
          />

        {/* Form Fields */}

        <div className="space-y-4">
          {/* Vehicle Type */}
          <CustomSelect
            label="Vehicle Type"
            value={VehicleType}
            onChange={(e) => setVehicleType(e.target.value)}
            leftIcon={iconCar}
            rightIcon={arrowDown}
            options={["Keke", "Bus", "Car"]}
            placeholder="Car"
          />

          {/* Plate Number */}
          <FormInput
            label="Plate Number"
            id="PlateNumber"
            type='text'
            value={plateNumber}
            onChange={(e) => setPlateNumber(e.target.value)}
            placeholder="Enter document Id number"
            required
            leftIcon={<img src={driverLise} className="h-5 w-5" alt="" />}
          />

          {/* Service Area */}
          <CustomSelect
            label="Service Area (Location)"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            leftIcon={iconCity}
            rightIcon={arrowDown}
            options={["Main-Gate", "Back-Gate"]}
            // isRounded
            placeholder="UNN"
            selectClassName=""
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
              required
              leftIcon={<img src={driverColor} className="h-5 w-5" alt="" />}
            />
            
            <FormInput
              label="Vehicle Colour"
              id="VehicleColour"
              type='text'
              value={seatNumber}
              onChange={(e) => setSeatNumber(e.target.value)}
              placeholder="black"
              required
              leftIcon={<img src={driverSeat} className="h-5 w-5" alt="" />}
            />
          </div>

          {/* Upload Photo */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Upload Vehicle Photo (front, Back and side)
            </label>
            <p className="text-xs text-gray-600 mb-2">
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
