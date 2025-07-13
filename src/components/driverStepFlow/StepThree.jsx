// import React, { useState } from 'react';
// import SectionLabel from '../SectionLabel';
// import CustomButton from '../CustomButton';
// import { Link } from "react-router-dom";

// const StepThree = ({nextStep, prevStep, step , totalSteps}) => {
//    // const [step, setStep] = useState(3);
//    // const totalSteps = 4;
  

//    return (
//       <div className='min-h-screen w-full flex flex-col items-center p-2 gap-5 bg-[#F0F1F1]'>
//          <header className='h-20 w-full flex items-center justify-around'>
//             <p className='ml-4 xl:ml-[-220px] uppercase md:uppercase text-2xl font-bold'><Link to={"/"}>ease drive</Link></p>
//             <ul className='h-16 w-96 hidden md:flex items-center justify-between'>
//                <p>Already have an account?</p>
//                <Link to="/login" className="text-green-300 border border-green-300 px-6 py-3 rounded-lg">Login</Link>
//             </ul>
            
//          </header>
//          <h2 className='font-base lg:text-3xl font-normal capitalize'>Create a driver account</h2>
//          <div className="text-center mb-[29px]">
//             <SectionLabel title={`${step} Step of ${totalSteps}`} />
//          </div>
//          <section className='h-full items-center gap-8 md:h-108 w-full md:w-4/5 flex flex-col items-left justify-center  rounded-lg border-0 md:border border-green-600'>
//             <p className='text-center font-normal md:text-xl'>Places you want to operate in</p>
//             <span className='text-center md:text-left text-base'>We would love to know the places you will want to operate</span>
//             <div className='h-fit md:h-3/5 w-full p-4 flex flex-col gap-8 relative'>
//                <article className='h-20 w-full flex flex-col items-left gap-2'>
//                   <label htmlFor="place">Address</label>
//                   <select className='h-12 w-full border outline-none indent-3 rounded-lg'
//                      name=" documentURL"
//                      id="place"
//                   >
//                      <option value="" defaultValue></option>
//                      <option value="Odenigwe">Odenigwe</option>
//                      <option value="Hill-top">Hill-top</option>
//                      <option value="Odeim gate">Odeim gate</option>
//                      <option value="Behind flat">Behind flat</option>
//                      <option value="Main gate">Main gate</option>
//                   </select>
//                </article>

//                <CustomButton 
//                   name="Next"
//                   extendedStyles={"w-full p-3 lg:p-4"}
//                   btnClick={() => nextStep()}
//                />
//             </div>
//             <Link to={"/login"}>
//                <p className='pair text-sm md:hidden'>Already have an account? <a className='text-green-500' href="">Login</a></p>
//             </Link>
//          </section>
//       </div>
//    );
// };

// export default StepThree;


import React, { useState } from 'react';
import carImage from '../../assets/images/Car.svg';
import sideImage from '../../assets/images/image.svg'
import SectionLabel from '../SectionLabel';
import BackArrow from '../BackArrow';
import CustomSelect from '../forms/CustomSelect';
import arrowDown from "../../assets/icons/arrow-down-01.svg"
import FormInput from '../forms/FormInput';
import driverLise from "../../assets/icons/driver-lisence.svg"
import bank from "../../assets/icons/bank.svg"
import cardIcon from "../../assets/icons/credit-card-pos.svg"

export default function StepThree({nextStep, prevStep, step , totalSteps}) {
  const [AccountNumber, setAccountNumber] = useState('');
  const [AccountHolder, setAccountHolder] = useState('');
  const [BankName, setBankName] = useState('');

  console.log("RENDERING STEP THREE");

   const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => setIsChecked((prev) => !prev);


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
            <span className='font-[inter] font-bold text-3xl align-middle'>Bank/Wallet Setup</span>
            <div className="text-center mb-[29px]">
              <SectionLabel title={`${step} Step of ${totalSteps}`} />
            </div>
          </article>
          <p className="font-[inter] font-bold text-base align-middle">Your payments will be sent here. Please confirm the details are correct.</p>
        </div>

          <BackArrow
            extendedStyles="top-36 left-8 absolute"
            onClick={() => prevStep()}
          />

        {/* Form Fields */}

        <div className="space-y-4">
          {/* Vehicle Type */}
          <CustomSelect
            label="Bank Name"
            value={BankName}
            onChange={(e) => setBankName(e.target.value)}
            leftIcon={bank}
            rightIcon={arrowDown}
            options={["Zenith", "Ecobank", "firstbank", "kuda", "palmpay", "opay"]}
            placeholder="Select bank Name"
          />

          {/* Plate Number */}
          <FormInput
            label="Account Number"
            id="AccountNumber"
            type='number'
            value={AccountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
            placeholder="Enter account number"
            required
            leftIcon={<img src={cardIcon} className="h-5 w-5" alt="" />}
          />

          <FormInput
            label="Account Holder's Name"
            id="AccountHolder"
            type='text'
            value={AccountHolder}
            onChange={(e) => setAccountHolder(e.target.value)}
            placeholder="black"
            required
            leftIcon={<img src={driverLise} className="h-5 w-5" alt="" />}
         />
          
        </div>
            
            {/* agreement option */}
         <label 
            className="flex justify-start items-center gap-2 text-sm mt-2 cursor-pointer select-none"
            onClick={handleToggle}
         >
            <input 
            type="checkbox" 
            checked={isChecked}
            onChange={handleToggle}
            className="h-4 w-4 accent-green-600"
            />
            <p className={`${isChecked ? "text-green-600 font-medium" : "text-gray-700"}`}>
            I agree to the driver guidelines and terms of service.
            </p>
         </label>

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
