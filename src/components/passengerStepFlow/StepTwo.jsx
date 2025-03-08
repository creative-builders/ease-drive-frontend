import { Link } from "react-router-dom";
import { useStepFlowContext } from "../../hooks/useStepFlowFormContext";
import CustomButton from "../CustomButton"
import SectionLabel from "../SectionLabel";
import { FcGoogle } from "react-icons/fc";
import signupLeftCar from "../../../src/assets/images/signup-left-car.jpg"

const StepTwo = ({nextStep, prevStep, step , totalSteps}) => {
    const{ formData , handleUpdateFormData } = useStepFlowContext();
    const handleSubmit  = (e) => {
      e.preventDefault();
      console.log(formData)
    }

  return (
     <div className="lg:flex gap-x-[128px]">
       <div className="mb-[22px] relative z-4 basis-1/2">
         <div className="h-full">
         <img className="h-full w-full object-cover" src={signupLeftCar} alt="" />
          <span 
          style={{background:`rgba(43, 170, 66, 0.44)`}}
           className="absolute top-0 left-0 block h-full w-full z-10">
          </span>
         </div>
       </div>
      <div className="basis-1/2 px-[24px] lg:px-0 lg:pr-[48px] lg:pt-[48px]">
       <form onSubmit={handleSubmit}>
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

            <div className="mb-4">
            <CustomButton
            name="Continue"
            extendedStyles={"w-full"}
            // isLoading={true}
            />
        </div>
        {/* Or use Google auth */}
                <div className="flex mb-8 items-center gap-2 before:flex-1 before:border-gray-950 before:border-t after:flex-1 after:border-gray-950 after:border-t"> OR</div>

                {/* Google Login button*/}
                <button 
                 className="inline-block mb-16 lg:mb-0 w-full p-4 bg-gray-300 rounded-lg">
                    <span className="text-bold text-base text-gray-950 flex justify-center items-center gap-x-2">
                    <FcGoogle size={20} />
                    Continue with Google
                    </span>
                </button>

                <div className="lg:hidden flex justify-center gap-x-2">
                    <p>Already have an account ?</p>
                    <Link to="/login" className="text-green-300">Login</Link>
                </div>
        </div>
    </div>
    </form>
    </div>
     </div>
  )
}

export default StepTwo