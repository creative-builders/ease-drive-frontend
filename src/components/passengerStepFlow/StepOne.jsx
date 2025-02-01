import { useState } from "react"
import { useStepFlowContext } from "../../hooks/useStepFlowFormContext"
import CustomButton from "../CustomButton";
import SectionLabel from "../SectionLabel";
import { Link } from "react-router-dom";

const StepOne = ({ nextStep, step, totalSteps }) => {
   const{ formData , handleUpdateFormData } = useStepFlowContext();

  return (
    <div className="">
           <div className="hidden lg:flex justify-center items-center gap-x-[42px]">
            <p>Already have have an account ?</p>
            <Link to="/login" className="text-green-300 border border-green-300 px-6 py-3 rounded-lg">Login</Link>
          </div>
          {/* show the current step */}
         <div className="text-center mb-[29px]">
         <SectionLabel
            title={`${step} Step of ${totalSteps}`}
           />
         </div>
        <div className="mb-4 flex gap-x-8">
        <div className="basis-1/2">
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
        <div className="">
            <CustomButton 
            name="Continue"
            extendedStyles={"w-full"}
            btnClick={() => nextStep()}
            />
        </div>
    </div>
  )
}

export default StepOne