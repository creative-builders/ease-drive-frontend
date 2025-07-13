// import { useState } from 'react';
// import { useStepFlowContext } from '../../hooks/useStepFlowFormContext';
// import SectionLabel from '../SectionLabel';
// import CustomButton from "../CustomButton"
// import { Link } from "react-router-dom";
// import { FiEye, FiEyeOff } from 'react-icons/fi';
// import GoogleAuthV3 from '../GoogleAuthV3';


// const StepOne = ({ nextStep, step, totalSteps }) =>{


//     const{ formData , handleUpdateFormData } = useStepFlowContext();
//     const [togglePassword, setTogglePassword] = useState(false);
//     const [toggleConfirmPassword, setToggleConfirmPassword] = useState(false);

// const handleTogglePassword = () => {
//   setTogglePassword(prev => !prev);
// };

// const handleToggleConfirmPassword = () => {
//   setToggleConfirmPassword(prev => !prev);
// };

//    return(
//     <div className='min-h-screen bg-gray-500'>
//       <div className="h-full w-full mx-auto xl:w-8/12 px-2 py-4">
//        <header className='h-20 w-full flex items-center justify-around'>
//          <p className='ml-4 xl:ml-[-220px] uppercase md:uppercase text-2xl font-bold'><Link to={"/"}>ease drive</Link></p>
//          <ul className='h-16 w-96 hidden md:flex items-center justify-between'>
//             <p>Already have an account?</p>
//             <Link to="/login" className="text-green-300 border border-green-300 px-6 py-3 rounded-lg">Login</Link>
//          </ul>
//        </header>
//        <h2 className='hidden md:text-3xl font-semibold capitalize'>create a driver account</h2>
//        <div className="text-center mb-[29px]">
//          <SectionLabel
//             title={`${step} Step of ${totalSteps}`}
//            />
//         </div>
//        <section className='border-0 md:border border-green-600 h-fit p-4 w-full rounded-lg flex flex-col items-center  gap-4'>
//          <p className='text-2xl'>Let's get started</p>
//          <span className='text-center text-sm'>Enter your name, phone number and email address,and <br /> we'll send you a four digit code to confirm it</span>
//          <div className='h-fit md:h-3/5 w-full p-4 grid grid-cols-1 md:grid-cols-2 gap-4'>
//            <article className='h-20 w-full flex flex-col items-left gap-2'>
//             <label htmlFor="first-name">First Name</label>
//             <input 
//             className='h-12 w-full border outline-none p-4 lg:p-6 rounded-lg' 
//             type="text"
//              name="firstName"
//              id="first-name"
//              onChange={handleUpdateFormData}
//              value={formData.firstName}
//             />
//            </article>

//            <article className='h-20 w-full flex flex-col items-left gap-2'>
//             <label htmlFor="last-name">Last Name</label>
//             <input className='h-12 w-full border outline-none p-4 lg:p-6 rounded-lg'
//              type="text"
//              name="lastName"
//              id="last-name"
//              onChange={handleUpdateFormData}
//              value={formData.lastName}
//             />
//            </article>

//            <article className='h-20 w-full flex flex-col items-left gap-2'>
//             <label htmlFor="phone-number">Phone Number</label>
//             <input className='h-12 w-full border outline-none p-4 lg:p-6 rounded-lg'
//              type="number"
//              name="phoneNumber"
//              id="phone-number"
//              onChange={handleUpdateFormData}
//              value={formData.phoneNumber}
//             />
//            </article>

//            <article className='h-20 w-full flex flex-col items-left gap-2'>
//             <label htmlFor="email">Email</label>
//             <input className='h-12 w-full border outline-none p-4 lg:p-6 rounded-lg'
//              type="email"
//              name="email"
//              id="email"
//              onChange={handleUpdateFormData}
//              value={formData.Email}
//             />
//            </article>

//            <article className='pa md:h-20 w-full flex flex-col items-left gap-2 relative'>
//               <label htmlFor="password">Password</label>
//               <input
//                 className='h-12 w-full border outline-none p-4 lg:p-6 rounded-lg'
//                 type={togglePassword ? "text" : "password"}
//                 name="password"
//                 id="password"
//                 onChange={handleUpdateFormData}
//                 value={formData.password}
//               />
//               <span
//                 onClick={handleTogglePassword}
//                 className='inline-block absolute right-4 top-1/2 cursor-pointer translate-y-1/2'
//               >
//                 {togglePassword ? <FiEyeOff fontSize={"18"} /> : <FiEye fontSize={"18"} />}
//               </span>
//             </article>

//             <article className='pa h-20 w-full flex flex-col items-left gap-2 relative'>
//               <label htmlFor="con-pass">Confirm password</label>
//               <input
//                 className='h-12 w-full border outline-none p-4 lg:p-6 rounded-lg'
//                 type={toggleConfirmPassword ? "text" : "password"}
//                 name="confirmPassword"
//                 id="con-pass"
//                 onChange={handleUpdateFormData}
//                 value={formData.confirmPassword}
//               />
//               <span
//                 onClick={handleToggleConfirmPassword}
//                 className='inline-block absolute right-4 top-1/2 cursor-pointer translate-y-1/2'
//               >
//                 {toggleConfirmPassword ? <FiEyeOff fontSize={"18"} /> : <FiEye fontSize={"18"} />}
//               </span>
//             </article>

//           </div>
//          <CustomButton 
//             name="Continue"
//             extendedStyles={"w-full p-3 lg:p-4"}
//             btnClick={() => nextStep()}
//           />
//          <div className="line h-[20px] w-11/12 flex justify-around items-center">
//          </div>

//            {/* Or use Google auth */}
//           <div className="flex mb-8 items-center gap-2 before:flex-1 before:border-gray-950 before:border-t after:flex-1 after:border-gray-950 after:border-t"> OR</div>

//             <div className="flex justify-center mb-16 p-4 ">
//               <GoogleAuthV3 role='driver'/>
//             </div>
//          <p className='pair text-sm md:hidden'>Already have an account? <Link className='text-green-500' to={"/login"}>Login</Link></p>
         
//        </section> 
//       </div>
//     </div>
//    )
// }
// export default StepOne

import React, { useState, useRef } from 'react';
import carImage from '../../assets/images/Car.svg';
import sideImage from '../../assets/images/image.svg'
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
        <div className="flex items-center space-x-2 mb-6">
          <img src={carImage} alt="Ease Drive" className="h-8 w-8 md:h-10 md:w-10" />
          <h1 className="text-2xl md:text-3xl font-extrabold italic font-[inter]">Ease Drive</h1>
        </div>

        {/* Title & Description */}
        <div className="mb-4">
          <article className="text-xl md:text-2xl font-semibold font-[inter]">
            <span className='font-[inter] font-bold text-3xl align-middle'>KYC Verification </span>
            <div className="text-center mb-[29px]">
              <SectionLabel title={`${step} Step of ${totalSteps}`} />
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
            leftIcon={validation}
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
            leftIcon={<img src={driverLise} className="h-5 w-5" alt="" />}
          />

          {/* Upload Photo */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Upload documents
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
          src={sideImage}  // replace with actual image path
          alt="Driver in vehicle"
          className="rounded-xl w-full max-w-[90%] object-cover"
        />
      </div>
    </div>
  );
}

 