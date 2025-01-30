import React from 'react';
import google from '/Google-icon.png';
import { Link } from 'react-router-dom';

const DriVerify = () =>{
   return(
    <div className='h-full w-full flex flex-col items-center gap-5 bg-[#F0F1F1]'>
       <header className='h-20 w-full flex items-center justify-around'>
         <p className=' ml-[-220px] uppercase md:uppercase text-2xl font-bold'>ease drive</p>
         <ul className='h-16 w-96 hidden md:flex items-center justify-between'>
            <p>Already have an account?</p>
            <button className='h-12 w-20 cursor-pointer rounded-3xl border border-green-500'>Login</button>
         </ul>
       </header>
       <h2 className='text-3xl font-normal capitalize'>kYC Verification</h2>
       <p className="flex text-center gap-3 text-sm">
        <Link to="/DriVerify"><span>Identity Verification</span></Link>
        <Link to="/DrivUpload"><span>Address Verification</span></Link>
        </p>
       <section className='h-fit items-center md:h-108 w-4/5 flex flex-col items-left justify-center gap-4'>
         <p className='text-xl'>Identity Verification</p>
         <span className='text-left text-sm'>This Information will help us know you more</span>
         <form className='h-fit md:h-3/5 w-full p-4 grid grid-cols-1 md:grid-cols-2 gap-4 relative' action="">
            <article className='h-20 w-full flex flex-col items-left gap-2'>
                <label htmlFor="">Means of Identification</label>
                <select className='h-12 w-full border outline-none indent-3'>
                    <option value="" defaultValue></option>
                    <option value="">NIN</option>
                    <option value="">Driving Liesence</option>
                    <option value="">Voters Card</option>
                    <option value="">Birth Certificate</option>
                    <option value="">International Passport</option>
                </select>
            </article>

            <article className='h-20 w-full flex flex-col items-left gap-2'>
                <label htmlFor="">Document ID</label>
                <input className='h-12 w-full border outline-none indent-3' type="number" />
            </article>

            <article className='h-20 w-full flex flex-col items-left gap-2'>
                <label htmlFor="">Date of Birth</label>
                <input className='h-12 w-full border outline-none indent-3' type="date" />
            </article>

        </form>
            <div className="buttons md:h-16 w-2/5 flex items-center justify-around absolute right-3 top-[600px]">
                <button className='h-12 w-24 cursor-pointer rounded-lg border border-green-600'>Skip Now</button>
                <Link to="/DrivPlace"><button className='h-12 w-24 cursor-pointer rounded-lg bg-green-600 text-white'>Next</button></Link>
                
            </div>
            <div className="hidden h-[20px] w-full justify-around items-center">
                <span className=' border-b-2 w-2/5 border-black '></span> Or <span className=' border-b-2 w-2/5 border-black'></span>
            </div>
            <button className='tip h-39 w-full  bg-gray-300 text-black cursor-pointer rounded-lg relative'><aside className='h-5 md:h-6 w-8 absolute left-12 md:left-80'><img className='object-contain h-full w-full' src={google} alt="" /></aside> Contiue with Google</button>
            <p className='pair text-sm hidden'>Already have an account? <a className='text-green-500' href="">Login</a></p>
       </section>
    </div>
   )
}
export default DriVerify