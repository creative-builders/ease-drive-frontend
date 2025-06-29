import React, { useState, useRef, useEffect } from 'react';
import Notification from '../../assets/icons/Notification'
import { userAtom } from '../atoms/userAtom';
import searchIcon from '/Search-icon.png'
import { useRecoilValue } from 'recoil'
import layout from '/Layout.svg'
import flag from '/flag.jpeg'
import { FaMapMarkerAlt } from 'react-icons/fa';


export default function DriverNav({ className }){
    const userData = useRecoilValue(userAtom);
  
    return <div className={`h-16 w-full md:w-3/4 p-2 m-auto flex items-center justify-between ${className}`}>
        <article className=' flex items-center gap-2 bg-gray-300'>
            <div className="h-5 w-8 grid place-content-center"><img src={searchIcon} alt="" /></div>
            <input type="text" placeholder="Search" className="placeholder w-2/5 md:w-48 border-none outline-none focus:border-transparent focus:ring-0 bg-transparent" />
        </article>

        <section className='flex items-center justify-center'>
            
            <div
                className="relative flex items-center justify-center gap-2 float-right w-3/5 md:w-32 h-10 text-black"
                >
                <FaMapMarkerAlt className="text-green-500" size={15} />
                <p>Nuskka</p>
               
            </div>
            <div className="h-12 w-24 xl:w-52 flex items-center justify-around">
                <Notification className="hidden md:block" />
                <article className='h-16 flex items-center justify-center gap-1 xl:justify-evenly w-40'>
                <img src={layout} alt="" />
                <div className="h-10 w-10">
                    {
                    userData?.profileImage ? (
                        <img src={userData?.profileImage} alt="Profile" className='h-full w-full object-cover rounded-full' />
                    ) : (
                        <userAvatar fullName={userData?.fullName}/>
                    )
                    }
                </div>
                
                </article>
            </div>
        </section>
    </div>
}