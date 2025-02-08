import React, { useState } from 'react';
import SectionLabel from '../SectionLabel';
import CustomButton from '../CustomButton';
import { Link } from "react-router-dom";

const StepThree = ({nextStep, prevStep, step , totalSteps}) => {
   // const [step, setStep] = useState(3);
   // const totalSteps = 4;

   return (
      <div className='min-h-screen w-full flex flex-col items-center p-2 gap-5 bg-[#F0F1F1]'>
         <header className='h-20 w-full flex items-center justify-around'>
            <p className='ml-4 xl:ml-[-220px] uppercase md:uppercase text-2xl font-bold'><Link to={"/"}>ease drive</Link></p>
            <ul className='h-16 w-96 hidden md:flex items-center justify-between'>
               <p>Already have an account?</p>
               <Link to="/login" className="text-green-300 border border-green-300 px-6 py-3 rounded-lg">Login</Link>
            </ul>
         </header>
         <h2 className='font-base lg:text-3xl font-normal capitalize'>Create a driver account</h2>
         <div className="text-center mb-[29px]">
            <SectionLabel title={`${step} Step of ${totalSteps}`} />
         </div>
         <section className='h-full items-center gap-8 md:h-108 w-full md:w-4/5 flex flex-col items-left justify-center  rounded-lg border-0 md:border border-green-600'>
            <p className='text-center font-normal md:text-xl'>Places you want to operate in</p>
            <span className='text-center md:text-left text-base'>We would love to know the places you will want to operate</span>
            <div className='h-fit md:h-3/5 w-full p-4 flex flex-col gap-8 relative'>
               <article className='h-20 w-full flex flex-col items-left gap-2'>
                  <label htmlFor="place">Address</label>
                  <select className='h-12 w-full border outline-none indent-3 rounded-lg'
                     name="sectionAddress"
                     id="place"
                  >
                     <option value="" defaultValue></option>
                     <option value="Odenigwe">Odenigwe</option>
                     <option value="Hill-top">Hill-top</option>
                     <option value="Odeim gate">Odeim gate</option>
                     <option value="Behind flat">Behind flat</option>
                     <option value="Main gate">Main gate</option>
                  </select>
               </article>

               <CustomButton 
                  name="Next"
                  extendedStyles={"w-full"}
                  btnClick={() => nextStep()}
               />
            </div>
            <Link to={"/login"}>
               <p className='pair text-sm md:hidden'>Already have an account? <a className='text-green-500' href="">Login</a></p>
            </Link>
         </section>
      </div>
   );
};

export default StepThree;
