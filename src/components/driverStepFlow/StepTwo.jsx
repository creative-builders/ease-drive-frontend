import React from 'react';
// import google from '/Google-icon.png';
import { Link } from 'react-router-dom';
import { useStepFlowContext } from '../../hooks/useStepFlowFormContext';
import CustomButton from '../CustomButton';
import SectionLabel from '../SectionLabel';

const StepTwo = ({nextStep, prevStep, step , totalSteps}) =>{

    const{ formData , handleUpdateFormData } = useStepFlowContext();
        const handleSubmit  = (e) => {
          e.preventDefault();
          console.log(formData)
        }
    
   return(
    <div className='bg-[#F0F1F1] min-h-screen w-full flex flex-col items-center gap-5'>
       <header className='h-20 w-full flex items-center justify-around'>
         <p className='ml-4 xl:ml-[-220px] uppercase md:uppercase text-2xl font-bold'><Link to={"/"}>ease drive</Link></p>
         <ul className='h-16 w-96 hidden md:flex items-center justify-between'>
            <p>Already have an account?</p>
            <Link to="/login" className="text-green-300 border border-green-300 px-6 py-3 rounded-lg">Login</Link>
         </ul>
       </header>
       <div className="text-center mb-[29px]">
         <SectionLabel
            title={`${step} Step of ${totalSteps}`}
           />
        </div>
       <h2 className='text-3xl font-normal capitalize'>kYC Verification</h2>
       <p className="flex text-center gap-3 text-sm">
        <Link to="/DriVerify"><span>Identity Verification</span></Link>
        <Link to="/DrivUpload"><span>Address Verification</span></Link>
        </p>
       <section className='h-fit items-center md:h-108 w-full md:w-4/5 flex flex-col items-left justify-center gap-4  rounded-lg border-0 md:border border-green-600'>
         <p className='text-xl'>Identity Verification</p>
         <span className='text-left text-sm'>This Information will help us know you more</span>
        <div className='h-full md:h-3/5 w-full p-4 grid grid-cols-1 md:grid-cols-2 gap-4 relative'>
            <article className='h-20 w-full flex flex-col items-left gap-2'>
                <label htmlFor="identification">Means of Identification</label>
                <select className='h-12 w-full border outline-none indent-3 rounded-lg'
                  name="Identification"
                  id="identification"
                  onChange={handleUpdateFormData}
                  value={formData.Identification}
                 >
                    <option value="" defaultValue></option>
                    <option value="">NIN</option>
                    <option value="">Driving Liesence</option>
                    <option value="">Voters Card</option>
                    <option value="">Birth Certificate</option>
                    <option value="">International Passport</option>
                </select>
            </article>

            <article className='h-20 w-full flex flex-col items-left gap-2'>
                <label htmlFor="ID">Document ID</label>
                <input className='h-12 w-full border outline-none indent-3 rounded-lg'
                 type="number"
                 name="Document ID"
                id="ID"
                onChange={handleUpdateFormData}
                value={formData.password}
                  />
            </article>

            <article className='h-20 w-full flex flex-col items-left gap-2'>
                <label htmlFor="date">Date of Birth</label>
                <input className='h-12 w-full border outline-none indent-3 rounded-lg'
                 type="date"
                 name="DOB"
                id="date"
                onChange={handleUpdateFormData}
                value={formData.DOB}
                  />
            </article>

        </div>
            <div className="h-16 w-3/4 items-center md:w-2/5 gap-10 flex justify-end  md:mt-[-80px] translate-x-0 md:translate-x-52">
                <button 
                name="Skip Now"
                className='h-12 w-28 cursor-pointer rounded-lg border border-green-600'
                onClick={() => nextStep()}
                >
                    Skip Now
                </button>
                
                <button
                    name="Next"
                    className='h-12 w-28 cursor-pointer rounded-lg bg-green-600 text-white'
                    onClick={() => nextStep()}
                >
                    Next
                </button> 
                
                
            </div>
            <div className="hidden h-[20px] w-full justify-around items-center">
                <span className=' border-b-2 w-2/5 border-black '></span> Or <span className=' border-b-2 w-2/5 border-black'></span>
            </div>
           
            {/* <CustomButton 
                name="Continue"
                // extendedStyles={"w-full"}
                 className='bg-[#F0F1F1] mb-4 text-black w-11/12 gap-2 lg:hidden'
                btnClick={() => nextStep()}
            /> */}
            <Link to={"/login"}>
                <p className='pair mb-4 text-sm md:hidden'>Already have an account? <a className='text-green-500' href="">Login</a></p>
            </Link>
       </section>
    </div>
   )
}
export default StepTwo