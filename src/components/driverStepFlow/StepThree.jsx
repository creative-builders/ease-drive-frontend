
import React, { useState } from 'react';
import carImage from '../../assets/images/Car.svg';
import sideImage from '../../assets/images/sideImage.png';
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
          <article className="text-xl md:text-2xl font-semibold font-[inter] relative">
            <span className='font-[inter] text-[18px] md:text-[26px] leading-[36px] tracking-normal align-middle font-bold'>Bank/Wallet Setup</span>
            <div className="text-center mb-[29px] absolute right-1 top-3">
              <SectionLabel title={`${step} Step of ${totalSteps}`} />
            </div>
          </article>
          <p className="font-[inter] font-bold text-base align-middle">Your payments will be sent here. Please confirm the details are correct.</p>
        </div>

          <BackArrow
            extendedStyles="top-20 left-8 absolute"
            onClick={() => prevStep()}
          />

        {/* Form Fields */}

        <div className="space-y-4">
          {/* Vehicle Type */}
          <CustomSelect
            label="Bank Name"
            value={BankName}
            onChange={(e) => setBankName(e.target.value)}
             leftIcon={<img src={bank} alt="icon" className="h-8 w-8" />}
            rightIcon={arrowDown}
            options={["Zenith", "Ecobank", "firstbank", "kuda", "palmpay", "opay"]}
            placeholder="Select bank Name"
             selectClassName="indent-4"
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
            leftIcon={<img src={cardIcon} className="h-[18px] md:h-8 w-[18px] md:w-8" alt="" />}
            inputClassName = "indent-4 flex items-center justify-center"
          />

          <FormInput
            label="Account Holder's Name"
            id="AccountHolder"
            type='text'
            value={AccountHolder}
            onChange={(e) => setAccountHolder(e.target.value)}
            placeholder="black"
            required
            leftIcon={<img src={driverLise} className="h-[18px] md:h-8 w-[18px] md:w-8" alt="" />}
            inputClassName = "indent-4 flex items-center justify-center"
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
