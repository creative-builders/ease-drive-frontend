import React from 'react';

const Signupd = () =>{
   return(
    <div className='h-full w-full flex flex-col items-center gap-5 bg-[#F0F1F1]'>
       <header className='h-20 w-full flex items-center justify-around'>
         <p className=' ml-[-220px] uppercase md:uppercase text-2xl font-bold'>ease drive</p>
         <ul className='h-16 w-96 hidden md:flex items-center justify-between'>
            <p>Already have an account?</p>
            <button className='h-12 w-20 cursor-pointer rounded-3xl border border-green-500'>Login</button>
         </ul>
       </header>
       <h2 className='hidden md:text-3xl font-semibold capitalize'>create a driver account</h2>
       <section className='h-fit md:h-108 w-4/5 flex flex-col items-center justify-center gap-4'>
         <p className='text-2xl'>Let's get started</p>
         <span className='text-center text-sm'>Enter your name, phone number and email address,and <br /> we'll send you a four digit code to confirm it</span>
         <form className='h-fit md:h-3/5 w-full p-4 grid grid-cols-1 md:grid-cols-2 gap-4' action="">
           <article className='h-20 w-full flex flex-col items-left gap-2'>
            <label htmlFor="hhhh">First Name</label>
            <input className='h-12 w-full border outline-none indent-3' type="text" />
           </article>

           <article className='h-20 w-full flex flex-col items-left gap-2'>
            <label htmlFor="">Last Name</label>
            <input className='h-12 w-full border outline-none indent-3' type="text" />
           </article>

           <article className='h-20 w-full flex flex-col items-left gap-2'>
            <label htmlFor="">phone number</label>
            <input className='h-12 w-full border outline-none indent-3' type="number" />
           </article>

           <article className='h-20 w-full flex flex-col items-left gap-2'>
            <label htmlFor="">Email</label>
            <input className='h-12 w-full border outline-none indent-3' type="email" />
           </article>

           <article className='pa md:h-20 w-full flex flex-col items-left gap-2'>
            <label htmlFor="">Password</label>
            <input className='h-12 w-full border outline-none indent-3' type="password" />
           </article>

           <article className='pa h-20 w-full flex flex-col items-left gap-2'>
            <label htmlFor="">Confirm password</label>
            <input className='h-12 w-full border outline-none indent-3' type="password" />
           </article>
         </form>
         <div className="line h-[20px] w-full flex justify-around items-center">
         <span className=' border-b-2 w-2/5 border-black'></span> Or <span className=' border-b-2 w-2/5 border-black'></span>
         </div>
         <button className='h-39 w-full  bg-gray-300 text-black cursor-pointer rounded-lg relative'><aside className='h-5 md:h-6 w-8 absolute left-12 md:left-80'><img className='object-contain h-full w-full' src="" alt="" /></aside> Contiue with Google</button>
         <p className='pair text-sm hidden'>Already have an account? <a className='text-green-500' href="">Login</a></p>
       </section>
    </div>
   )
}
export default Signupd