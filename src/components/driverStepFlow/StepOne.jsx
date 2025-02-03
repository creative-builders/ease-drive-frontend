import React from 'react';
import { useStepFlowContext } from '../../hooks/useStepFlowFormContext';
import SectionLabel from '../SectionLabel';
import CustomButton from "../CustomButton"
import { Link } from "react-router-dom";


const StepOne = ({ nextStep, step, totalSteps }) =>{

    const{ formData , handleUpdateFormData } = useStepFlowContext();

   return(
    <div className='min-h-screen bg-gray-500'>
      <div className="w-11/12 mx-auto xl:w-8/12 px-2 py-4">
       <header className='h-20 w-full flex items-center justify-around'>
         <p className=' ml-[-220px] uppercase md:uppercase text-2xl font-bold'>ease drive</p>
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
       <section className='h-fit md:h-108 w-full flex flex-col items-center justify-center gap-4'>
         <p className='text-2xl'>Let's get started</p>
         <span className='text-center text-sm'>Enter your name, phone number and email address,and <br /> we'll send you a four digit code to confirm it</span>
         <form className='h-fit md:h-3/5 w-full p-4 grid grid-cols-1 md:grid-cols-2 gap-4' action="">
           <article className='h-20 w-full flex flex-col items-left gap-2'>
            <label htmlFor="first-name">First Name</label>
            <input 
            className='h-12 w-full border outline-none indent-3' 
            type="text"
             name="firstName"
             id="first-name"
             onChange={handleUpdateFormData}
             value={formData.firstName}
            />
           </article>

           <article className='h-20 w-full flex flex-col items-left gap-2'>
            <label htmlFor="last-name">Last Name</label>
            <input className='h-12 w-full border outline-none indent-3'
             type="text"
             name="lastName"
             id="last-name"
             onChange={handleUpdateFormData}
             value={formData.lastName}
            />
           </article>

           <article className='h-20 w-full flex flex-col items-left gap-2'>
            <label htmlFor="phone-number">phone number</label>
            <input className='h-12 w-full border outline-none indent-3'
             type="number"
             name="phoneNumber"
             id="phone-number"
             onChange={handleUpdateFormData}
             value={formData.phoneNumber}
            />
           </article>

           <article className='h-20 w-full flex flex-col items-left gap-2'>
            <label htmlFor="email">Email</label>
            <input className='h-12 w-full border outline-none indent-3'
             type="email"
             name="email"
             id="email"
             onChange={handleUpdateFormData}
             value={formData.Email}
            />
           </article>

           <article className='pa md:h-20 w-full flex flex-col items-left gap-2'>
            <label htmlFor="password">Password</label>
            <input className='h-12 w-full border outline-none indent-3'
             type="password"
             name="password"
             id="password"
             onChange={handleUpdateFormData}
             value={formData.password}
            />
           </article>

           <article className='pa h-20 w-full flex flex-col items-left gap-2'>
            <label htmlFor="con-pas">Confirm password</label>
            <input className='h-12 w-full border outline-none indent-3'
             type="password"
             name="confirmPassword"
             id="con-pass"
             onChange={handleUpdateFormData}
             value={formData.confirmPassword}
            />
           </article>
         </form>
         <div className="line h-[20px] w-full flex justify-around items-center">
         <span className=' border-b-2 w-2/5 border-black'></span> Or <span className=' border-b-2 w-2/5 border-black'></span>
         </div>
          {/* <button className='h-39 w-full  bg-gray-300 text-black cursor-pointer rounded-lg relative'><aside className='h-5 md:h-6 w-8 absolute left-12 md:left-80'><img className='object-contain h-full w-full' src="" alt="" /></aside> Contiue with Google</button> */}
         <CustomButton 
            name="Continue"
            extendedStyles={"w-full"}
            btnClick={() => nextStep()}
        />
         <p className='pair text-sm hidden'>Already have an account? <a className='text-green-500' href="">Login</a></p>
       </section> 
      </div>
    </div>
   )
}
export default StepOne


 