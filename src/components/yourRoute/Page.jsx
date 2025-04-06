import React from 'react';
import caneled from '../../assets/images/canelled.png'
import location from '../../assets/images/location-icon.png'
import search from '../../assets/images/search.png'
import BackArrow from '../BackArrow';
import CustomButton from '../CustomButton';
import { Link } from "react-router-dom"

const Page = ({extendedStyles}) =>{
    return(
        <div className='min-h-screen bg-white flex flex-col'>

            <BackArrow extendedStyles='top-28 xl:top-24 left-8 xl:left-48' />

            <div className="w-11/12 mx-auto my-40 xl:w-8/12 px-2 py-4 flex flex-col gap-4 justify-around">
               <article className='h-10 w-40 flex items-center justify-around'>
                <img src={caneled} className='h-4 w-4 cursor-pointer' alt="" />
                <span className='font-[poppins] text-xl not-italic font-medium leading-normal'>your routes</span>
               </article>

               <section className='h-16 w-full xl:w-[835px] flex px-4 py-6 items-center gap-6 flex-shrink-0 rounded-2xl border border-[#20AE3A] bg-white'>
                <img src={search} className='h-4 w-4' alt="" />
                <input type="text" placeholder='Where to ?' className='w-4/5 border-none focus:outline-none focus:ring-0 placeholder:text-[#444] capitalize font-[poppins] text-xl not-italic font-light leading-normal' />
               </section>

               <section className='h-16 w-full xl:w-[835px] flex px-4 py-6 items-center gap-6 flex-shrink-0 rounded-2xl text-white'>
                <img src={location} className='h-4 w-4' alt="" />

                <input 

                type="button"
                value ='Ogige market'
                className='w-4/5 border-none focus:outline-none focus:ring-0 text-[#444] text-start capitalize font-[poppins] text-xl not-italic font-light leading-normal'

                />
               </section>

               <Link to="/Luggage">
                    <CustomButton 
                        name="Contiune"
                        extendedStyles={"w-full p-3 lg:p-4"}
                        // btnClick={() => nextStep()}
                    />
               </Link>
            </div>

        </div>
    )

}
export default Page