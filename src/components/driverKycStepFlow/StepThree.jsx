import React from 'react'
import SectionLabel from '../SectionLabel'
import { CustomSelectField } from "../customFormFields/CustomSelectField"
import { useState, useRef } from 'react';
import { useStepFlowContext } from '../../hooks/useStepFlowFormContext';
import { InputField } from '../customFormFields/InputField';
import CustomButton from '../CustomButton';
import { FaChevronDown } from "react-icons/fa";
import { PlateNumberIcon } from '../../assets/icons/PlateNumberIcon'
import { CreditCardIcon } from '../../assets/icons/CreditCardIcon';
import { BankHouseIcon } from '../../assets/icons/BankHouseIcon';
import { Link } from 'react-router-dom';

export const StepThree = ({ nextStep, step, totalSteps }) => {

   const fileInputRef = useRef(null);
   const [checked, setChecked] = useState(false);
   const [agreed, setAgreed] = useState(false);
   const [error, setError] = useState("");

   const {
      formData,
      inputTouched,
      setFormData,
      handleUpdateFormData,
   } = useStepFlowContext();

   const [errors, setErrors] = useState({});

   const isaccountNumberValid = (formData?.bankAccountNumber || "").length >= 10;
   const showaccountNumbererror =
      inputTouched && formData?.bankAccountNumber.length > 0 && !isaccountNumberValid;

   const isaccountNameValid = (formData?.bankAccountHolderName || "").length >= 3;
   const showaccountNameerror =
      inputTouched && formData?.bankAccountHolderName.length > 0 && !isaccountNameValid;



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
      <div lassName=" min-h-screen lg:h-full m ">
         <div className="flex items-center justify-center h-full min-h-screen ">
            <div className="bg-white lg:w-[1216px] lg:h-[740px] w-[100%]  m-auto py-6  lg:pb-12 
            opacity-100 flex flex-row justify-center items-center">
               <div className="lg:w-[637px] w-[100%] h-[90vh] m-auto 
                  flex justify-center items-center 
                p-5 gap-8 opacity-100 bg-white flex flex-col items-center justify-center">
                  <div className="lg:w-[100%] lg:h-[59px] w-[100%]  flex flex-col
                   gap-[7.38px] opacity-100  ">
                     <Link to="/"> 
                     <div className='flex-row flex  w-full items-center  items-center  justify-start gap-2'>
                        <img src='/ease-drivelogo.png' className='lg:w-[64px] lg:h-[64px] w-[45px] h-[45px] mr-2' />
                        <h1 className="font-inter text-gary-700 italic font-bold lg:text-[36px] text-[18px] leading-[120%]">
                           Ease Drive
                        </h1>

                     </div>
                     </Link >
                  </div>

                  <div className="lg:w-[100%]  w-[100%]  justify-between opacity-100 flex flex-row items-start">
                     <div className='text-left lg:w-[60%] w-[70%]'>
                        <h4 className="font-inter text-gray-700  font-semibold lg:text-[26px] text-[18px] leading-[100%]">
                           Bank/Wallet Setup
                        </h4>
                        <p className=" font-medium text-left text-gray-800 lg:text-[18px] text-[14px] font-inter lg:pb- pt-2">
                           Your payments will be sent here. Please confirm the details are correct.
                        </p>
                     </div>
                     <div>
                        <SectionLabel className="text-blue-800 bg-custom-gradient"

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
                           <BankHouseIcon className="lg:w-8 lg:h-8 w-6 h-6 text-gray-500" />

                        </CustomSelectField>
                        {errors.bankName && (
                           <p className="text-red-500 text-sm -mt-2">{errors.bankName}</p>
                        )}

                        <InputField
                           label="Account Number"
                           // iconSrc="/call-02.svg"
                           placeholder="Enter Account Number"
                           name="bankAccountNumber"
                           value={formData.bankAccountNumber}
                           onChange={handleUpdateFormData}
                           leftIcon={CreditCardIcon}
                           error={
                              showaccountNumbererror ? " Account Number must be at least 10 characters" : ""
                           }
                        />

                        <InputField
                           label="Account Holder’s Name"
                           // iconSrc="/call-02.svg"
                           placeholder="Enter Account Holder’s Name"
                           name="bankAccountHolderName"
                           value={formData.bankAccountHolderName}
                           onChange={handleUpdateFormData}
                           leftIcon={PlateNumberIcon}
                           error={
                              showaccountNameerror ? " Account Holder’s Name must be greater than 3 characters" : ""
                           }
                        />

                        {errors.bankAccountNumber && (
                           <p className="text-red-500 text-sm -mt-2">{errors.bankAccountNumber}</p>
                        )}

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

                        <span className={`${agreed ? "text-green-600" : "text-gray-800"} lg:text-[14px] text-[12px] font-inter`}>
                           I agree to the driver guidelines and terms of service.
                        </span>
                     </label>

                     {error && <p className="text-red-500 lg:text-[14px] text-[12px] font-inter">{error}</p>}

                  </div>

                  <button
                     type="button"
                     className="lg:w-full w-full bg-green-200 text-primary-700 rounded-xl py-4 text-[18px] font-bold "
                     onClick={() => {
                        nextStep()
                     }}>
                     Skip
                  </button>

                  <CustomButton
                     name="Continue"
                     extendedStyles={"w-full p-3 lg:p-4 rounded-lg"}
                     btnClick={() => handleNext()}
                  />

               </div>

               <div className="lg:w-[528px] lg:h-[638px] hidden lg:block opacity-100 rounded-[45px]">
                  <img src="/signup-banner.png" alt="Signup banner" className=' lg:rounded-[45px]' />
               </div>


            </div>
         </div>
      </div>
   )
}

