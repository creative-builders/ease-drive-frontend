import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useStepFlowContext } from '../../hooks/useStepFlowFormContext';
import { CgChevronDown } from "react-icons/cg";
import SectionLabel from '../SectionLabel';

const StepTwo = ({ nextStep, prevStep, step, totalSteps }) => {
  const { formData, handleUpdateFormData } = useStepFlowContext();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='bg-[#F0F1F1] min-h-screen w-full flex flex-col items-center gap-5'>
      <header className='h-20 w-full flex items-center justify-around'>
        <p className='ml-4 xl:ml-[-220px] uppercase md:uppercase text-2xl font-bold'>
          <Link to={"/"}>ease drive</Link>
        </p>
        <ul className='h-16 w-96 hidden md:flex items-center justify-between'>
          <p>Already have an account?</p>
          <Link to="/login" className="text-green-300 border border-green-300 px-6 py-3 rounded-lg">Login</Link>
        </ul>
      </header>

      <div className="text-center mb-[29px]">
        <SectionLabel title={`${step} Step of ${totalSteps}`} />
      </div>
      <h2 className='text-3xl font-normal capitalize'>KYC Verification</h2>
      <p className="flex text-center gap-3 text-sm">
        <Link to="/DriVerify"><span>Identity Verification</span></Link>
        <Link to="/DrivUpload"><span>Address Verification</span></Link>
      </p>

      <section className='h-fit items-center md:h-108 w-full md:w-4/5 flex flex-col items-left justify-center gap-4 rounded-lg border-0 md:border border-green-600'>
        <p className='text-xl'>Identity Verification</p>
        <span className='text-left text-sm'>This Information will help us know you more</span>

        <div className='h-full md:h-3/5 w-full p-4 grid grid-cols-1 md:grid-cols-2 gap-4 relative'>
          <article className='h-20 w-full flex flex-col items-left gap-2 relative'>
            <label htmlFor="identification">Means of Identification</label>
            <select
              className='h-20 w-full border outline-none gap-6 rounded-lg'
              name="documentType"
              id="identification"
              onChange={handleUpdateFormData}
              value={formData.documentType || ""}
              onFocus={() => setIsOpen(true)}
              onBlur={() => setIsOpen(false)}
            >
              <option value="" disabled>Preference ID</option>
              <option value="NIN">NIN</option>
              <option value="Driving License">Driving Lisense</option>
              <option value="Voters Card">Voters Card</option>
              <option value="Birth Certificate">Birth Certificate</option>
              <option value="International Passport">International Passport</option>
            </select>
            
            <CgChevronDown
              className={`absolute right-4 top-1/2 cursor-pointer translate-y-1/2 inline-block transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
              fontSize={'18px'}
            />
          </article>

          <article className='h-20 w-full flex flex-col items-left gap-2'>
            <label htmlFor="documentID">Document ID</label>
            <input
              className='h-12 w-full border outline-none gap-6 rounded-lg'
              type="number"
              name="documentID"
              id="documentID"
              onChange={handleUpdateFormData}
              value={formData.documentID || ""}
            />
          </article>

          <article className='h-20 w-full flex flex-col items-left gap-2'>
            <label htmlFor="date">Date of Birth</label>
            <input
              className='h-12 w-full border outline-none gap-6 rounded-lg'
              type="date"
              name="dob"
              id="date"
              onChange={handleUpdateFormData}
              value={formData.dob || ""}
            />
          </article>
        </div>

        <div className="h-16 w-3/4 items-center md:w-2/5 gap-10 flex justify-end md:mt-[-80px] translate-x-0 md:translate-x-52">
          <button
            name="Skip Now"
            className='h-12 w-32 cursor-pointer rounded-lg border border-green-600'
            onClick={() => nextStep()}
          >
            Skip Now
          </button>
          <button
            name="Next"
            className='h-12 w-32 cursor-pointer rounded-lg bg-green-600 text-white'
            onClick={() => nextStep()}
          >
            Next
          </button>
        </div>

        <div className="hidden h-[20px] w-full justify-around items-center">
          <span className=' border-b-2 w-2/5 border-black '></span> Or <span className=' border-b-2 w-2/5 border-black'></span>
        </div>

        <Link to={"/login"}>
          <p className='pair mb-4 text-sm md:hidden'>Already have an account? <span className='text-green-500'>Login</span></p>
        </Link>
      </section>
    </div>
  );
};

export default StepTwo;
