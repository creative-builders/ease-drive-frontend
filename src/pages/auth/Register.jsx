import React from 'react';
import google from '/Google-icon.png';
import MobilePic from '/Rectangle.png';

const Register = () => {
  return (
    <div className="h-fit md:h-screen w-full flex flex-col md:flex-row relative">
      <nav className="h-[100px] w-full flex items-center md:justify-around flex-wrap absolute top-0 z-50">
        <p className='text-white text-2xl font-semibold'>EaseDrive</p>
        <ul className="h-14 md:w-96 flex items-center md:justify-evenly flex-wrap">
          <p className=''>Already have an account</p>
          <button className="border border-green-900 h-10 w-24 cursor-pointer rounded-xl text-green-600">
            Login
          </button>
        </ul>
      </nav>

      
      <div className="carPicture h-[70vh] md:h-full w-1/2 bg-red-300 relative">
        <img className=" w-full h-full object-cover object-bottom absolute" src={MobilePic} alt="" />
        <div className='relative w-full h-full z-50 flex items-end justify-center pb-20'>
          <p className='text-white text-4xl font-bold'>Escape the usual <br className='hidden md:block'/> struggle of public buses.</p>
        </div>
      </div>

          {/* Form */}
      <div className="form h-full w-1/2 bg-gray-300 p-3 md:p-0">
        <main className="h-fit w-full md:w-[80%]  bg-white rounded-xl mx-auto mt-[100px] px-5 py-3 flex flex-col gap-5 items-center justify-around">
          <h2 className='font-bold'>Let's get Started</h2>
          <p className='text-center'>Enter your name, phone number and email address, and we 'll send 4-digit code to confirm it</p>
            <form action="" className='h-[450px] w-full flex flex-col items-center justify-around'>
              <div className="input relative h-[80px] w-full flex items-center justify-between px-2">
              <label className='absolute top-1' htmlFor="">firstname</label>
              <input className='h-[45px] w-full md:w-[200px] outline-none bg-gray-200 px-3 mt-5' type="text" id="" />

              <label className='absolute top-1 right-32' htmlFor="">lastname</label>
              <input className='h-[45px] w-full md:w-[200px] outline-none bg-gray-200 px-3 mt-5' type="text" id="" />
              </div>
              <label className='translate-x-[-210px]' htmlFor="">Phone Number</label>
              <input className='h-[45px] w-[95%] outline-none bg-gray-200 px-3' type="number" id="" />
              <label className='translate-x-[-210px]' htmlFor="">Email address</label>
              <input className='h-[45px] w-[95%] outline-none bg-gray-200 px-3' type="email" id="" />
              <button className='h-[45px] w-[95%] bg-green-600 text-white cursor-pointer rounded-lg'>Continue</button>
              <div className="line h-[20px] w-[95%] flex justify-around items-center">
              <span className='h-1 border-b-2 w-[180px] border-black'></span> Or <span className='h-1 border-b-2 w-[180px] border-black'></span>
              </div>
              <button className='h-[45px] w-[95%]  bg-gray-300 text-black cursor-pointer rounded-lg relative'><aside className='h-6 w-8 absolute left-24'><img className='object-contain h-full w-full' src={google} alt="" /></aside> Contiue with Google</button>
            </form>
        </main>
      </div>
    </div>
  )
}

export default Register