import React from 'react'
import SectionLabel from '../SectionLabel'
import { CustomInputField } from '../CustomInputField'
import { CustomSelectField } from "../CustomSelectField"
import { useState, useRef } from 'react';
import { useStepFlowContext } from '../../hooks/useStepFlowFormContext';


import CustomButton from '../CustomButton';

import { FaChevronDown } from "react-icons/fa";
import addfile from '../../assets/images/addFile.svg'
import { CarIcon } from '../../assets/icons/CarIcon'
import { AddFileIcon } from '../../assets/icons/AddFileIcon'
import { PlateNumberIcon } from '../../assets/icons/PlateNumberIcon'
import { CreditCardIcon } from '../../assets/icons/CreditCardIcon';
import { BankHouseIcon } from '../../assets/icons/BankHouseIcon';



export const StepThree = ({ nextStep, step, totalSteps }) => {

   const fileInputRef = useRef(null);
   const [checked, setChecked] = useState(false);
   const [agreed, setAgreed] = useState(false);
   const [error, setError] = useState("");
   const { formData, handleUpdateFormData } = useStepFlowContext();
   const [errors, setErrors] = useState({});




   const handleNext = () => {
      const newErrors = {};

      if (!formData.bankName) {
         newErrors.bankName = "Please select your bank";
      }

      if (!formData.bankAccountHolderName || formData.bankAccountHolderName.trim() === "") {
         newErrors.bankAccountHolderName = "Please provide a name";
      }
      if (!formData.bankAccountNumber || formData.bankAccountNumber.trim() === "") {
         newErrors.bankAccountNumber = "Please provide account number";
      }


      setErrors(newErrors);

      if (Object.keys(newErrors).length === 0) {
         nextStep(); // Proceed only if no validation error
      }
   };

   return (
      <div lassName=" min-h-screen lg:h-full max-990:h-[] ">
         <div className="flex items-center justify-center h-full min-h-screen bg-gray-100">
            <div className="bg-white lg:w-[1216px] lg:h-[740px] max-990:w-[90%] max-990:h-[] max-990:m-auto py-6 lg:pt-12 lg:pb-12 opacity-100 flex flex-row items-center">
               <div className="lg:w-[637px] lg:h-[734px] max-990:w-[100%] max-990:h-[70vh] max-990:m-auto 
          max-990:flex max-990:justify-center max-990:items-center max-990:ml-0
         ml-6  p-5 gap-8 opacity-100 bg-white flex flex-col items-center justify-center">
                  <div className="lg:w-[100%] lg:h-[59px] max-990:w-[100%] max-990:h-[] max-990:flex max-990:flex-col
                   gap-[7.38px] opacity-100  ">
                     <div className='flex flex-row max-990:flex max-990:flex-row w-full max-990:items-center max-990:w-full items-center  justify-start gap-2'>
                        <img src='/ease-drivelogo.png' className='lg:w-[64px] lg:h-[64px] max-990:w-[45px] max-990:h-[45px] mr-2' />
                        <h1 className="font-inter text-[#1E1E1E] italic font-bold lg:text-[36px] max-990:text-[18px] leading-[120%]">
                           Ease Drive
                        </h1>

                     </div>
                  </div>


                  <div className="lg:w-[556px] lg:h-[] max-990:w-[347px] max-990:h-[] justify-between opacity-100 flex flex-row items-start">
                     <div className='text-left lg:w-[60%] max-990:w-[70%]'>
                        <h4 className="font-inter text-[#1E1E1E] italic font-semibold lg:text-[26px] max-990:text-[18px] leading-[100%]">
                           Bank/Wallet Setup
                        </h4>
                        <p className=" font-medium text-left text-[#333333] lg:text-[18px] max-990:text-[14px] font-inter lg:pb- pt-2">
                           Your payments will be sent here. Please confirm the details are correct.
                        </p>
                     </div>
                     <div>
                        <SectionLabel className="text-[#3733CF] bg-custom-gradient"

                           title={` Step ${step}  of ${totalSteps}`}
                        />
                     </div>
                     {/* Content here */}
                  </div>
                  <div className='flex w-[100%]'>
                     <form className="space-y-4 w-[100%]">
                        <CustomSelectField
                           label="Bank Name"
                           defaultHolder="Select Bank Name"
                           // iconSrc="/city-02.svg"
                           // value={formData.city}
                           // onChange={handleCityChange}
                           name="bankName"
                           value={formData.bankName}
                           onChange={handleUpdateFormData}
                           options={[
                              "Access Bank",
                              "Zenith Bank",
                              "Guaranty Trust Bank (GTBank)",
                              "First Bank of Nigeria",
                              "United Bank for Africa (UBA)",
                              "Fidelity Bank",
                              "Union Bank",
                              "Stanbic IBTC Bank",
                              "Polaris Bank",
                              "Sterling Bank",
                              "Wema Bank",
                              "Ecobank Nigeria",
                              "Heritage Bank",
                              "Keystone Bank",
                              "Jaiz Bank"
                           ]}
                           rightIcon={FaChevronDown}
                        >
                           <BankHouseIcon className="w-8 h-8 text-gray-500" />

                        </CustomSelectField>
                        {errors.bankName && (
                           <p className="text-red-500 text-sm -mt-2">{errors.bankName}</p>
                        )}

                        <CustomInputField
                           label="Account Number"
                           // iconSrc="/call-02.svg"
                           placeholder="Enter Account Number"
                           name="bankAccountNumber"
                           value={formData.bankAccountNumber}
                           onFormChange={handleUpdateFormData}
                           type="text"

                        >
                           <CreditCardIcon className="w-8 h-8 text-gray-500" />
                        </CustomInputField>
                        {errors.bankAccountNumber && (
                           <p className="text-red-500 text-sm -mt-2">{errors.bankAccountNumber}</p>
                        )}

                        <CustomInputField
                           label="Account Holder’s Name"
                           // iconSrc="/call-02.svg"
                           placeholder="Enter Account Holder’s Name"
                           type="text"
                           name="bankAccountHolderName"
                           value={formData.bankAccountHolderName}
                           onFormChange={handleUpdateFormData}

                        >
                           <PlateNumberIcon className="w-8 h-8 text-gray-500" />
                        </CustomInputField>
                        {errors.bankAccountHolderName && (
                           <p className="text-red-500 text-sm -mt-2">{errors.bankAccountHolderName}</p>
                        )}
                     </form>

                  </div>


                  <div className="flex  flex-col items-start w-full -mt-4">
                     <label className="flex items-center gap-2 cursor-pointer select-none">
                        <input
                           type="checkbox"
                           checked={agreed}
                           onChange={(e) => setAgreed(e.target.checked)}
                           className="hidden"
                        />

                        <div
                           className={`w-5 h-5 rounded-sm border flex items-center justify-center ${agreed ? "border-green-600" : "border-[#333333]"
                              }`}
                        >
                           {agreed && (
                              <svg
                                 className="w-4 h-4 text-green-600"
                                 viewBox="0 0 24 24"
                                 fill="none"
                                 stroke="currentColor"
                                 strokeWidth="3"
                              >
                                 <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                           )}
                        </div>

                        <span className={`${agreed ? "text-green-600" : "text-[#333333]"} lg:text-[14px] max-990:text-[12px] font-inter`}>
                           I agree to the driver guidelines and terms of service.
                        </span>
                     </label>

                     {error && <p className="text-red-500 lg:text-[14px] max-990:text-[12px] font-inter">{error}</p>}


                  </div>

                  <CustomButton
                     name="Continue"
                     extendedStyles={"w-full p-3 lg:p-4 rounded-lg"}
                     btnClick={() => handleNext()}
                  />

               </div>

               <div className="lg:w-[528px] lg:h-[638px] max-990:hidden opacity-100 rounded-[45px]">
                  <img src="/signup-banner.png" alt="" className='lg:w-[528px] lg:h-[623px] lg:rounded-[45px]' />
               </div>



            </div>
         </div>
      </div>
   )
}
