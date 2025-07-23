import React from 'react'
import SectionLabel from '../SectionLabel'
import { CustomInputField } from '../CustomInputField'
import { CustomSelectField } from "../CustomSelectField"
import { useState, useRef } from 'react';

import CustomButton from '../CustomButton';

import { FaChevronDown } from "react-icons/fa";
import addfile from '../../assets/images/addFile.svg'
import { CarIcon } from '../../assets/icons/CarIcon'
import { AddFileIcon } from '../../assets/icons/AddFileIcon'
import { PlateNumberIcon } from '../../assets/icons/PlateNumberIcon'
import { ColorIcon } from '../../assets/icons/ColorIcon'
import { SeatIcon } from '../../assets/icons/SeatIcon'
import { LocationIcon } from '../../assets/icons/LocationIcon';
import { LocationHomeIcon } from '../../assets/icons/LocationHomeIcon';


export const StepThree = ({ nextStep, step, totalSteps }) => {

   const fileInputRef = useRef(null);
   const [checked, setChecked] = useState(false);
   const [agreed, setAgreed] = useState(false);
   const [error, setError] = useState("");



   const handleNext = () => {
      if (agreed) {
         setError("");
         nextStep();
      } else {
         setError("You must agree to the terms to continue.");
      }
   };

   return (
      <div lassName=" min-h-screen lg:h-full max-990:h-[] ">
         <div className="flex items-center justify-center h-full min-h-screen bg-gray-100">
            <div className="bg-white lg:w-[1216px] lg:h-[740px] max-990:w-[90%] max-990:h-[] max-990:m-auto py-6 lg:pt-12 lg:pb-12 opacity-100 flex flex-row items-center">
               <div className="lg:w-[637px] lg:h-[734px] max-990:w-[100%] max-990:h-[70vh] max-990:m-auto 
          max-990:flex max-990:justify-center max-990:items-center max-990:ml-0
         ml-6  p-5 gap-8 opacity-100 bg-white flex flex-col items-center justify-center">
                  <div className="lg:w-[556px] lg:h-[59px] max-990:w-[100%] max-990:h-[] max-990:flex max-990:flex-col
                   gap-[7.38px] opacity-100 lg:-mb-4 ">
                     <div className='flex flex-row max-990:flex max-990:flex-row w-full max-990:items-center max-990:w-full items-center  justify-start gap-2'>
                        <img src='/logocar.svg' className='lg:w-[65px] lg:h-[59px] max-990:w-[32px] max-990:h-[32px]' />
                        <h1 className="font-inter text-[#1E1E1E] italic font-bold lg:text-[36px] max-990:text-[18px] leading-[100%]">
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
                           <CarIcon className="w-6 h-6 text-gray-500" />

                        </CustomSelectField>

                        <CustomInputField
                           label="Account Number"
                           // iconSrc="/call-02.svg"
                           placeholder="Enter Account Number"
                           type="text"
                        // value={formData.phone}
                        // onChange={handleChange("phone")}
                        >
                           <PlateNumberIcon className="w-6 h-6 text-gray-500" />
                        </CustomInputField>

                        <CustomInputField
                           label="Account Holder’s Name"
                           // iconSrc="/call-02.svg"
                           placeholder="Enter Account Holder’s Name"
                           type="text"
                        // value={formData.phone}
                        // onChange={handleChange("phone")}
                        >
                           <PlateNumberIcon className="w-6 h-6 text-gray-500" />
                        </CustomInputField>

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
                     extendedStyles={"w-full p-3 lg:p-4"}
                     btnClick={handleNext}
                  />

               </div>

               <div className="lg:w-[617px] lg:h-[765px] max-990:hidden lg:p-5 gap-8 opacity-100  flex items-center justify-center">
                  <img src="/optionimg.png" alt="" className='lg:w-[528px] lg:h-[623px] lg:rounded-[45px]' />
               </div>



            </div>
         </div>
      </div>
   )
}
