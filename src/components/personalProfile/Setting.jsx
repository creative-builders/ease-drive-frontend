import React from 'react'
import { Link } from 'react-router-dom'
import arrowHead from '../../assets/images/arrow-top.png'
import BackArrow from '../BackArrow'


export default function Setting(){
    return(
        <div className="bg-[#444444] mt-20">
            <main className='min-h-screen xl:h-[434px] bg-[#F6F7F6]'>
                <BackArrow extendedStyles={'top-[60px] xl:top-16 left-0 xl:left-[480px]'} />
               <div className="h-fit  w-full xl:w-[430px] p-2 gap-6 m-auto flex flex-col items-start justify-center">


               {/* <h2 className='text-[#000] font-[poppins] text-base not-italic font-bold leading-normal'>EaseDrive</h2> */}
                <p className='text-[#000] font-[poppins] m-auto text-xl not-italic font-medium leading-normal'>Setting</p>
                <section className='w-full p-2 flex flex-col items-start gap-5'>
                    <Link className='w-full' to={'/Password'}>
                        <div className="flex w-full xl:w-[398px] cursor-pointer px-4 py-2 items-center justify-between rounded-lg border border-[#20AE3A] bg-[#f0f1f1]">
                            <span className='text-[#414141] font-[poppins] text-sm not-italic font-medium leading-normal'>Change password</span>
                            <img className='h-4 w-4 object-contain' src={arrowHead} alt="" />
                        </div>
                    </Link>

                     <div className="flex w-full xl:w-[398px] cursor-pointer px-4 py-2 items-center justify-between rounded-lg border border-[#20AE3A] bg-[#f0f1f1]">
                        <span className='text-[#414141] font-[poppins] text-sm not-italic font-medium leading-normal'>Contact us</span>
                        <img className='h-4 w-4 object-contain' src={arrowHead} alt="" />
                     </div>
                    
                     <div className="flex w-full xl:w-[398px] cursor-pointer px-4 py-2 items-center justify-between rounded-lg border border-[#20AE3A] bg-[#f0f1f1]">
                        <span className='text-[#414141] font-[poppins] text-sm not-italic font-medium leading-normal'>Delect Account</span>
                        <img className='h-4 w-4 object-contain' src={arrowHead} alt="" />
                     </div>
                </section>
               </div>
                
            </main>
        </div>
    )
}