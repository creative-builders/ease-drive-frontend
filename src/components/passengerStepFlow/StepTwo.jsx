import { useStepFlowContext } from "../../hooks/useStepFlowFormContext";
import CustomButton from "../CustomButton"


const StepTwo = ({nextStep, prevStep}) => {
    const{ formData , handleUpdateFormData } = useStepFlowContext();
  return (
    <div>
        <div className="mb-4 flex gap-x-8">
            <p onClick={() => prevStep()}>back</p>
         <div className="basis-1/2">
             <label htmlFor="password">Password</label>
             <input 
             className="p-4 rounded-lg w-full bg-gray-300"
             type="text"
             name="password"
             id="password"
             onChange={handleUpdateFormData}
              value={formData?.password}
             />
          </div>
          <div className="basis-1/2">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input 
            className="p-4 rounded-lg w-full bg-gray-300"
            type="text"
            name="confirmPassword"
            id="confirm-password"
            onChange={handleUpdateFormData}
            value={formData?.confirmPassword}
             />
            </div>
        </div>
        <div className="">
            <CustomButton 
            name="Continue"
            extendedStyles={"w-full"}
            btnClick={() => console.log(formData)}
            />
        </div>
    </div>
  )
}

export default StepTwo