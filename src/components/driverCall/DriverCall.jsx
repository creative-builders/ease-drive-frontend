import React from 'react'
import locate from '../../assets/images/location-icon.png'
import Header from '../../layout/dashboard/header/Header'
import { useLocation } from 'react-router-dom';

// import CustomButton from '../CustomButton';

// min-w-[363px]

export default function DriverCall(){

    const location = useLocation();
    const { profilePic, name, rating, distance, vehicleInfo, amount, imageUrl } = location.state || {};

    return(
        <div className='min-h-screen w-full bg-[url(/Group.png)] flex flex-col items-center justify-around gap-14'>
            <Header />
             <article className='h-17 flex w-4/5 xl:w-[667px] px-4 py-6 mt-24 items-center gap-6 rounded-2xl bg-[#fff]'>
                <img src={locate} alt="" />
                <input type="text" className='w-4/5 indent-2 text-xl outline-0 bg-transparent focus:outline-none focus:ring-0 placeholder:text-[#444]' placeholder='UNN 2nd gate' />
            </article>
            <main className='w-full xl:w-[1176px] h-[452px] flex flex-col bg-[#F8FDF9] p-3 items-center justify-around mt-8 rounded-t-[32px] rounded-r-[32px] rounded-b-none flex-shrink-0'>
            <div className="p-6 h-full w-full flex flex-wrap gap-4 justify-center">
                <div className="h-full w-4/5 bg-transparent rounded-2xl flex p-3 gap-3">
                    {/* first section */}
                    <div className="w-3/5 h-full text-sm flex flex-col gap-12">
                        {/* to rap the content neatly */}
                        <div className='w-3/5 h-2/4 text-sm flex flex-col gap-8'>
                            <p className='text-[#000] font-[poppins] text-base not-italic font-medium leading-[23px]'>your driver is coming in: <span></span></p>
                            
                            <div className="flex w-full items-center gap-10">
                                <img src={profilePic} alt="" className="w-[60px] h-[60px] rounded-full object-cover" />
                                <section className=' h-24 w-fit items-start flex flex-col gap-2'>
                                <p className="font-medium text-base leading-[100%] not-italic">{name}</p>
                                <p className="font-medium text-base leading-[100%] not-italic">{distance}</p>
                                <p className="font-medium text-base leading-6 not-italic">{rating}</p>
                                <p className="text-xs text-[#B8B8B8] font-medium not-italic gap-6">{vehicleInfo}</p>
                                </section>
                            </div>

                            <div className="flex gap-12">
                                
                                <span className='text-[#000] font-[poppins] text-base not-italic font-medium leading-normal'>Amount:</span>
                                <span className='text-[#000] font-[poppins] text-base not-italic font-medium leading-normal'>{amount}</span>
                            </div>
                            
                            
                        </div>
                    </div>

                    {/* second section */}
                    <div className="w-2/5 h-full flex flex-col gap-5">
                            <img src={imageUrl} alt="" className="h-20 xl:h-40 w-full object-contain" />
                            
                    </div>  
                </div>
            </div>
               
            </main>
        </div>
    )
}