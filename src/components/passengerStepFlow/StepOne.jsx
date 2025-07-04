
import { useStepFlowContext } from "../../hooks/useStepFlowFormContext"
import CustomButton from "../CustomButton";
import SectionLabel from "../SectionLabel";
import { Link } from "react-router-dom";
import signupLeftCar from "../../../src/assets/images/signup-left-car.jpg"
import GoogleAuthV3 from "../GoogleAuthV3";

const StepOne = ({ nextStep, step, totalSteps }) => {
   const{ formData , handleUpdateFormData } = useStepFlowContext();

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

            <div className="mb-4">
            <CustomButton 
            name="Continue"
            extendedStyles={"inline-block mb-8 w-full p-4 rounded-lg"}
            btnClick={() => nextStep()}
            />
            </div>

              {/* Or use Google auth */}
                <div className="flex mb-8 items-center gap-2 before:flex-1 before:border-gray-950 before:border-t after:flex-1 after:border-gray-950 after:border-t"> OR</div>

                <div className="flex justify-center mb-16 p-4 ">
                    <GoogleAuthV3/>
                 </div>

                <div className="lg:hidden flex justify-center gap-x-2">
                    <p>Already have an account ?</p>
                    <Link to="/login" className="text-green-300">Login</Link>
                </div>
        </div>
    </div>
     </div>
  )
}

export default StepOne