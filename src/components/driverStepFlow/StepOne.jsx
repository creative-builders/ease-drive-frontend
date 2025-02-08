import React, { useState } from 'react';
import { useStepFlowContext } from '../../hooks/useStepFlowFormContext';
import SectionLabel from '../SectionLabel';
import CustomButton from "../CustomButton"
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { FiEye, FiEyeOff } from 'react-icons/fi';


const StepOne = ({ nextStep, step, totalSteps }) =>{

    const{ formData , handleUpdateFormData } = useStepFlowContext();
    const [togglePassword, setTogglePassword] = useState(false);
    const [toggleConfirmPassword, setToggleConfirmPassword] = useState(false);

const handleTogglePassword = () => {
  setTogglePassword(prev => !prev);
};

const handleToggleConfirmPassword = () => {
  setToggleConfirmPassword(prev => !prev);
};

   return(
    <div className='min-h-screen bg-gray-500'>
      <div className="h-full w-full mx-auto xl:w-8/12 px-2 py-4">
       <header className='h-20 w-full flex items-center justify-around'>
         <p className='ml-4 xl:ml-[-220px] uppercase md:uppercase text-2xl font-bold'><Link to={"/"}>ease drive</Link></p>
         <ul className='h-16 w-96 hidden md:flex items-center justify-between'>
            <p>Already have an account?</p>
            <Link to="/login" className="text-green-300 border border-green-300 px-6 py-3 rounded-lg">Login</Link>
         </ul>
       </header>
       <h2 className='hidden md:text-3xl font-semibold capitalize'>create a driver account</h2>
       <div className="text-center mb-[29px]">
         <SectionLabel
            title={`${step} Step of ${totalSteps}`}
           />
        </div>
       <section className='border-0 md:border border-green-600 h-fit p-4 w-full rounded-lg flex flex-col items-center justify-center gap-4'>
         <p className='text-2xl'>Let's get started</p>
         <span className='text-center text-sm'>Enter your name, phone number and email address,and <br /> we'll send you a four digit code to confirm it</span>
         <div className='h-fit md:h-3/5 w-full p-4 grid grid-cols-1 md:grid-cols-2 gap-4'>
           <article className='h-20 w-full flex flex-col items-left gap-2'>
            <label htmlFor="first-name">First Name</label>
            <input 
            className='h-12 w-full border outline-none indent-3 rounded-lg' 
            type="text"
             name="firstName"
             id="first-name"
             onChange={handleUpdateFormData}
             value={formData.firstName}
            />
           </article>

           <article className='h-20 w-full flex flex-col items-left gap-2'>
            <label htmlFor="last-name">Last Name</label>
            <input className='h-12 w-full border outline-none indent-3 rounded-lg'
             type="text"
             name="lastName"
             id="last-name"
             onChange={handleUpdateFormData}
             value={formData.lastName}
            />
           </article>

           <article className='h-20 w-full flex flex-col items-left gap-2'>
            <label htmlFor="phone-number">Phone Number</label>
            <input className='h-12 w-full border outline-none indent-3 rounded-lg'
             type="number"
             name="phoneNumber"
             id="phone-number"
             onChange={handleUpdateFormData}
             value={formData.phoneNumber}
            />
           </article>

           <article className='h-20 w-full flex flex-col items-left gap-2'>
            <label htmlFor="email">Email</label>
            <input className='h-12 w-full border outline-none indent-3 rounded-lg'
             type="email"
             name="email"
             id="email"
             onChange={handleUpdateFormData}
             value={formData.Email}
            />
           </article>

           <article className='pa md:h-20 w-full flex flex-col items-left gap-2 relative'>
              <label htmlFor="password">Password</label>
              <input
                className='h-12 w-full border outline-none indent-3 rounded-lg'
                type={togglePassword ? "text" : "password"}
                name="password"
                id="password"
                onChange={handleUpdateFormData}
                value={formData.password}
              />
              <span
                onClick={handleTogglePassword}
                className='inline-block absolute right-4 top-1/2 cursor-pointer translate-y-1/2'
              >
                {togglePassword ? <FiEyeOff fontSize={"18"} /> : <FiEye fontSize={"18"} />}
              </span>
            </article>

            <article className='pa h-20 w-full flex flex-col items-left gap-2 relative'>
              <label htmlFor="con-pass">Confirm password</label>
              <input
                className='h-12 w-full border outline-none indent-3 rounded-lg'
                type={toggleConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                id="con-pass"
                onChange={handleUpdateFormData}
                value={formData.confirmPassword}
              />
              <span
                onClick={handleToggleConfirmPassword}
                className='inline-block absolute right-4 top-1/2 cursor-pointer translate-y-1/2'
              >
                {toggleConfirmPassword ? <FiEyeOff fontSize={"18"} /> : <FiEye fontSize={"18"} />}
              </span>
            </article>

          </div>
         <CustomButton 
            name="Continue"
            extendedStyles={"w-full"}
            btnClick={() => nextStep()}
          />
         <div className="line h-[20px] w-11/12 flex justify-around items-center">
         <span className=' border-b-2 w-2/5 border-gray-600'></span> OR <span className=' border-b-2 w-2/5 border-gray-600'></span>
         </div>
          {/* <div className="flex mb-8 items-center gap-2 before:flex-1 before:border-gray-950 before:border-t after:flex-1 after:border-gray-950 after:border-t"> OR</div> */}
          <button 
            className="inline-block mb-2 w-full p-4 bg-gray-300 rounded-lg">
              <span className="text-bold text-base text-gray-950 flex justify-center items-center gap-x-2">
              <FcGoogle size={20} />
              Continue with Google
              </span>
          </button>
         
         <p className='pair text-sm md:hidden'>Already have an account? <Link className='text-green-500' to={"/login"}>Login</Link></p>
         
       </section> 
      </div>
    </div>
   )
}
export default StepOne


 