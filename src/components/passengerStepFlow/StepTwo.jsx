import { Link } from "react-router-dom";
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
       <div>
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
        <div className="mb-4 p-6 bg-white rounded-3xl">
          <h3 className="text-xl lg:text-2xl mb-5 lg:mb-4 text-gray-900 font-normal text-center">You are almost there</h3>
          <div className="mb-4">
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

          <div className="mb-4">
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

            <div className="">
            <CustomButton
            name="Continue"
            extendedStyles={"w-full"}
            // btnClick={() => nextStep()}
            />
        </div>
        </div>
    </div>
    </form>
    </div>
  )
}

export default StepTwo