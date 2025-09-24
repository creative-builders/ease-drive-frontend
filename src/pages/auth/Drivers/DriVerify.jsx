import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';

const DriVerify = () => {
    return (
        <div className='min-h-screen bg-gray-500 w-full flex flex-col items-center gap-5'>
            <header className='w-11/12 mx-auto xl:w-8/12 px-2 py-4 flex items-center justify-around'>
                <p className='ml-1 md:ml-[-220px] uppercase md:uppercase text-2xl font-bold'>ease drive</p>
                <ul className='h-16 w-96 hidden md:flex items-center justify-between'>
                    <p>Already have an account?</p>
                    <button className='h-12 w-20 cursor-pointer rounded-3xl border border-green-500'>Login</button>
                </ul>
            </header>
            <h2 className='text-xl lg:text-3xl font-medium md:font-normal capitalize'>kYC Verification</h2>
            <p className="flex text-center gap-3 text-sm">
                <Link to="/DriVerify"><span className="text-xs lg:text-xl">Identity Verification</span></Link>
                <Link to="/DrivUpload"><span className="text-xs lg:text-xl">Address Verification</span></Link>
            </p>
            <section className='h-fit md:h-108 w-11/12 md:xl:w-8/12 flex flex-col items-left justify-center gap-4'>
                <p className='font-medium lg:text-xl'>Identity Verification</p>
                <span className='text-base lg:text-xl text-center lg:text-left'>This Information will help us know you more</span>
                <form className='h-fit md:h-3/5 w-full p-4 grid grid-cols-1 md:grid-cols-2 gap-4 relative' action="">
                    <article className='h-20 w-full flex flex-col items-left gap-2'>
                        <label className="text-base lg:text-xl" htmlFor="">Means of Identification</label>
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
                        <label className="md:text-base lg:text-xl" htmlFor="">Document ID</label>
                        <input className='h-12 w-full border outline-none indent-3' type="number" />
                    </article>

                    <article className='h-20 w-full flex flex-col items-left gap-2'>
                        <label className="text-base lg:text-xl" htmlFor="">Date of Birth</label>
                        <input className='h-12 w-full border outline-none indent-3' type="date" />
                    </article>

                </form>
                <div className=" md:h-16 w-2/5 hidden lg:flex items-center justify-around absolute right-3 top-[600px]">
                    <button className='h-12 w-24 cursor-pointer rounded-lg border border-green-600'>Skip Now</button>
                    <Link to="/DrivPlace"><button className='h-12 w-24 cursor-pointer rounded-lg bg-green-600 text-white'>Next</button></Link>

                </div>
                {/* <div className="h-[20px] w-full justify-around items-center">
                <span className=' border-b-2 w-2/5 border-black '></span> Or <span className=' border-b-2 w-2/5 border-black'></span>
            </div> */}
                <button className='mb-4 h-39 w-full  bg-gray-300 text-black cursor-pointer rounded-lg relative lg:hidden'>
                    <span className="text-bold text-xs lg:text-xl text-gray-950 flex justify-center items-center gap-x-2">
                        <FcGoogle size={20} />
                        Continue with Google
                    </span>
                </button>
                <div className="flex justify-center gap-x-2b lg:hidden">
                    <p>Don't have an account ?</p>
                    <Link to="/DrivPlace" className="text-green-300">login</Link>
                </div>
            </section>
        </div>
    )
}
export default DriVerify