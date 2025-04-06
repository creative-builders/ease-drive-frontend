import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import locate from '../../assets/images/location-icon.png'
import Search from '../../assets/images/search.png'
import Header from '../../layout/dashboard/header/Header';
import motor from '../../assets/images/Car.png';


export default function LookingFor(){

    const [isOpen,close] = useState(true)
    const handleBackgroundClick = (e) => {
        if (e.target.id === "popup-overlay") {
          close(false);
        }
      };

    return(
        <div className='min-h-screen w-full bg-[url(/Group.png)] flex flex-col items-center justify-around gap-14 relative'>
            <Header />
            <article className='h-17 flex w-4/5 xl:w-[667px] px-4 py-6 mt-24 items-center gap-6 rounded-2xl bg-[#fff]'>
                <img src={locate} alt="" />
                <input type="text" className='w-4/5 indent-2 text-xl outline-0 focus:outline-none focus:ring-0 bg-transparent placeholder:text-[#444]' placeholder='UNN 2nd gate' />
            </article>
            <main className='w-full xl:w-[1176px] h-fit flex flex-col mb-[-50px] xl:mb-3 bg-[#F8FDF9] z-50 p-3 items-center justify-around mt-8 rounded-t-[32px] rounded-r-[32px] rounded-b-none flex-shrink-0'>
               
               <figure className='w-4/5 xl:w-4/5 gap-6 flex flex-col items-start justify-center h-fit'>
                <h2 className='text-[#000] font-[poppins] text-2xl not-italic font-semibold leading-normal'>looking for driver</h2>
                <p className='text-[#444] font-[poppins] text-xl not-italic font-light leading-normal'>Connnecting to available driver nearby</p>
                <div className="h-5 w-full flex-shrink-0 rounded-xl bg-[#BFFBCA]">
                    <div className="bg-[#20AE3A] h-5 w-1/3 flex-shrink-0 rounded-xl"></div>
                </div>
                
                <section className='h-40 w-32 flex flex-col items-center justify-evenly m-auto'>
                    <div className="h-17 w-20 bg-[#DEFFE4] rounded-[50%] flex flex-col items-center justify-center">
                      <img src={motor} className='h-2/4 w-2/4 object-contain' alt="" />
                    </div>
                    <Link to='/Cancelled'>
                      <a 
                      className='font-[poppins] text-xl not-italic font-light leading-normal text-center text-[#20AE3A]' href=''
                        onClick={()=>close(true)}
                      >
                      cancel ride
                      </a>
                    </Link>
                </section>

               
               </figure>
               
            </main>
            { isOpen && (<div
                id="popup-overlay"
                onClick={handleBackgroundClick}
                className="h-full w-full flex items-center justify-center blur-0 absolute top-0 bg-[rgba(0,0,0,0.43)]"
                >
                    
            </div>)}
        </div>
    );
}