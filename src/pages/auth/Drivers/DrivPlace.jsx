import React from 'react';
import { Link } from 'react-router-dom';


const DrivPlace = () =>{
   return(
    <div className='min-h-screen bg-gray-500 flex flex-col items-center gap-5'>
       <header className='h-20 w-full flex items-center justify-around'>
         <p className='ml-0 lg:ml-[-220px] uppercase md:uppercase text-2xl font-bold'>ease drive</p>
         <ul className='h-16 w-96 hidden md:flex items-center justify-between'>
            <p>Already have an account?</p>
            <Link to='/DrivUpload'>
            <button className='h-12 w-20 cursor-pointer rounded-3xl border border-green-500'>Login</button>
            </Link>
         </ul>
       </header>
       <h2 className='text-center lg:text-3xl font-normal capitalize'>Create a driver account</h2>
       
       <section className='h-screen items-center gap-5 md:h-108 w-full md:w-4/5 flex flex-col items-left justify-center'>
         <p className='text-base lg:text-xl'>Places you want to operate in</p>
         <span className='text-center lg:text-left text-base lg:text-xl'>We would love to know the places you will want to operate</span>
         <form className='h-fit md:h-3/5 w-full p-4 flex flex-col gap-4 relative' action="">
              
            <article className='h-20 w-full flex flex-col items-left gap-2'>
                <label htmlFor="">Address</label>
               
                <select className='h-12 w-full border outline-none indent-3'>
                    <option value="" defaultValue></option>
                    <option value="">Odenigwe</option>
                    <option value="">Hill-top</option>
                    <option value="">Odeim gate</option>
                    <option value="">Behind flat</option>
                    <option value="">Main gate</option>
                </select>
            </article>

            <button className='h-39 w-full  bg-green-200 text-black cursor-pointer rounded-lg relative'> Next</button>

        </form>
            
       </section>
    </div>
   )
}
export default DrivPlace