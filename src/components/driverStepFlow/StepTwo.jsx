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


import React, { useState } from 'react';
import carImage from '../../assets/images/Car.svg';
import sideImage from '../../assets/images/image.svg'
import SectionLabel from '../SectionLabel';

export default function StepTwo() {
  const [plateNumber, setPlateNumber] = useState('EUG20456');
  const [vehicleColor, setVehicleColor] = useState('Black');
  const [seatColor, setSeatColor] = useState('Black');

  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row bg-white">
      {/* Left Form Section */}
      <div className="w-full md:w-1/2 p-6 md:p-10">
        {/* Header */}
        <div className="flex items-center space-x-2 mb-6">
          <img src={carImage} alt="Ease Drive" className="h-8 w-8 md:h-10 md:w-10" />
          <h1 className="text-2xl md:text-3xl font-bold italic font-[inter]">Ease Drive</h1>
        </div>

        {/* Title & Description */}
        <div className="mb-4">
          <article className="text-xl md:text-2xl font-semibold font-[inter]">
            <span>Vehicle Information </span>
            <div className="text-center mb-[29px]">
              <SectionLabel title={`${step} Step of ${totalSteps}`} />
            </div>
          </article>
          <p className="text-sm text-gray-600 mt-1 font-[inter]">Ensure your vehicle image is clean, recent, and shows the number plate.</p>
        </div>

        {/* Form Fields */}
        <div className="space-y-4">
          {/* Vehicle Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Vehicle Type</label>
            <div className="relative">
              <select className="w-full border border-gray-300 rounded-md pl-10 pr-4 py-2 focus:ring-green-500 focus:outline-none">
                <option>Keke</option>
                <option>Bus</option>
                <option>Car</option>
              </select>
              {/* <Icon icon="ic:baseline-directions-car" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" /> */}
            </div>
          </div>

          {/* Plate Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Plate Number</label>
            <div className="relative">
              <input
                type="text"
                value={plateNumber}
                onChange={(e) => setPlateNumber(e.target.value)}
                className="w-full border border-gray-300 rounded-md pl-10 pr-4 py-2 focus:ring-green-500 focus:outline-none"
              />
              {/* <Icon icon="mdi:car-brake-parking" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" /> */}
            </div>
          </div>

          {/* Service Area */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Service Area (Location)</label>
            <div className="relative">
              <select className="w-full border border-gray-300 rounded-md pl-10 pr-4 py-2 focus:ring-green-500 focus:outline-none">
                <option>Main-Gate</option>
                <option>Back-Gate</option>
              </select>
              {/* <Icon icon="mdi:map-marker" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" /> */}
            </div>
          </div>

          {/* Vehicle Colour */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Vehicle Colour</label>
              <div className="relative">
                <input
                  type="text"
                  value={vehicleColor}
                  onChange={(e) => setVehicleColor(e.target.value)}
                  className="w-full border border-gray-300 rounded-md pl-10 pr-4 py-2 focus:ring-green-500 focus:outline-none"
                />
                {/* <Icon icon="mdi:palette" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" /> */}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Number of Seats</label>
              <div className="relative">
                <input
                  type="text"
                  value={seatColor}
                  onChange={(e) => setSeatColor(e.target.value)}
                  className="w-full border border-gray-300 rounded-md pl-10 pr-4 py-2 focus:ring-green-500 focus:outline-none"
                />
                {/* <Icon icon="mdi:seat" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" /> */}
              </div>
            </div>
          </div>

          {/* Upload Photo */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Upload Vehicle Photo (front, Back and side)
            </label>
            <p className="text-xs text-gray-500 mb-2">
              You can upload up to 4 images (JPG, PNG). Maximum file size: 2MB per image
            </p>
            <div className="border border-gray-300 rounded-md p-4 flex flex-col items-center justify-center text-center">
              {/* <Icon icon="ic:round-add" className="text-gray-400 text-3xl mb-2" /> */}
              <button className="text-sm text-white bg-green-600 hover:bg-green-700 px-4 py-2 rounded">Upload photos</button>
            </div>
          </div>
        </div>

        {/* Continue Button */}
        <button className="mt-6 w-full bg-green-700 hover:bg-green-800 text-white font-semibold p-4 rounded-lg">
          Continue
        </button>
      </div>

      {/* Right Image Section */}
      <div className="w-full md:w-1/2 hidden md:flex items-center justify-center p-4">
        <img
          src={sideImage}  // replace with actual image path
          alt="Driver in vehicle"
          className="rounded-xl w-full max-w-[90%] object-cover"
        />
      </div>
    </div>
  );
}
