import { useState } from "react"
import { useStepFlowContext } from "../../hooks/useStepFlowFormContext"
import CustomButton from "../CustomButton";

const StepOne = ({ nextStep }) => {
   const{ formData , handleUpdateFormData } = useStepFlowContext();

  return (
    <div>
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