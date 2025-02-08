import { useStepFlowContext } from "../../hooks/useStepFlowFormContext";
import CustomButton from "../CustomButton"
import SectionLabel from "../SectionLabel";


const StepTwo = ({nextStep, prevStep, step , totalSteps}) => {
    const{ formData , handleUpdateFormData } = useStepFlowContext();
    const handleSubmit  = (e) => {
      e.preventDefault();
      console.log(formData)
    }

  return (
    <div>
       <form onSubmit={handleSubmit}>
       <div className="text-center mb-[29px]">
         <SectionLabel
            title={`${step} Step of ${totalSteps}`}
           />
         </div>

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
            extendedStyles={"w-full px-5 py-4 text-base lg:text-2xl"}
            btnClick={() => console.log(formData)}
            />
        </div>
       </form>
    </div>
  )
}

export default StepTwo