import { useState } from "react"
import { useStepFlowContext } from "../../hooks/useStepFlowFormContext"
import CustomButton from "../CustomButton";
import SectionLabel from "../SectionLabel";
import { Link } from "react-router-dom";

const StepOne = ({ nextStep, step, totalSteps }) => {
   const{ formData , handleUpdateFormData } = useStepFlowContext();

  return (
    <div>
           <div className="hidden lg:flex justify-end items-center gap-x-[42px]">
            <p>Already have have an account ?</p>
            <Link to="/login" className="text-green-300 border border-green-300 px-6 py-3 rounded-lg">Login</Link>
          </div>
          {/* show the current step */}
         <div className="text-center mb-[29px]">
         <SectionLabel
            title={`${step} Step of ${totalSteps}`}
           />
         </div>
        <div className="mb-4 p-6 bg-white rounded-3xl">
          <h3 className="text-xl lg:text-2xl mb-5 lg:mb-4 text-gray-900 font-normal text-center">Let's get Started</h3>
          <p className="mb-[32px] lg:mb-[47px] text-gray-600 text-sm lg:text-base text-center">Enter your name, phone number and email address, and we’ll send a 4-digit code to confirm it</p>
          <div className="mb-4 md:flex gap-x-8">
          <div className="mb-4 md:mb-0 basis-1/2">
             <label htmlFor="first-name">First Name</label>
             <input 
             className="p-4 rounded-lg w-full bg-gray-300"
             type="text"
             name="firstName"
             id="first-name"
             onChange={handleUpdateFormData}
             value={formData.firstName}
             />
          </div>
          <div className="basis-1/2">
            <label htmlFor="last-name">Last Name</label>
            <input 
            className="p-4 rounded-lg w-full bg-gray-300"
            type="text"
            name="lastName"
            id="last-name"
            onChange={handleUpdateFormData}
            value={formData.lastName}
             />
            </div>
          </div>
          
          <div className="mb-4">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input 
            className="p-4 rounded-lg w-full bg-gray-300"
            type="number"
            name="phoneNumber"
            id="phoneNumber"
            onChange={handleUpdateFormData}
            value={formData.phoneNumber}
             />
            </div>
            <div className="mb-4">
            <label htmlFor="email">Email</label>
            <input 
            className="p-4 rounded-lg w-full bg-gray-300"
            type="email"
            name="email"
            id="email"
            onChange={handleUpdateFormData}
            value={formData.email}
             />
            </div>

            <div className="">
            <CustomButton 
            name="Continue"
            extendedStyles={"w-full"}
            btnClick={() => nextStep()}
            />
        </div>
        </div>
    </div>
  )
}

export default StepOne