import React, { useState, useRef, useEffect } from 'react';
import Notification from '../../assets/icons/Notification'
import { userAtom } from '../atoms/userAtom';
import searchIcon from '/Search-icon.png'
import { useRecoilValue } from 'recoil'
import layout from '/Layout.svg'
import flag from '/flag.jpeg'
import { BsChevronDown } from "react-icons/bs";



export default function DriverNav({ className }){
    const userData = useRecoilValue(userAtom);
    const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [selectedCity, setSelectedCity] = useState({name: 'Nuskka', image: flag,})

   const cities = [
    { name: "Abuja", image: flag },
    { name: "Lagos", image: flag },
    { name: "Tokyo", image: flag },
  ];

  // Close dropdown if clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelectCity = (city) =>{
    setSelectedCity(city)
    setIsOpen(false)
  }


    return <div className={`h-16 w-full md:w-3/4 p-2 m-auto flex items-center justify-between ${className}`}>
        <article className=' flex items-center gap-2 bg-gray-300'>
            <div className="h-5 w-8 grid place-content-center"><img src={searchIcon} alt="" /></div>
            <input type="text" placeholder="Search" className="placeholder w-2/5 md:w-48 border-none outline-none focus:border-transparent focus:ring-0 bg-transparent" />
        </article>

        <section className='flex items-center justify-center'>
            
            <div
                ref={dropdownRef}
                className="relative inline-block float-right w-3/5 md:w-32 h-10 text-black"
                >
                <button
                    onClick={() => setIsOpen((prev) => !prev)}
                    className="flex items-center justify-between w-full h-full px-4 bg-[#97e99a] text-white text-base border-none cursor-pointer"
                >
                    <div className="flex items-center space-x-2">
                    <img src={selectedCity.image} alt="flag" className="w-4 h-4" />
                    <span>{selectedCity.name}</span>
                    </div>
                    <BsChevronDown className="ml-2 text-white text-sm" />
                </button>

                {isOpen && (
                    <div className="absolute w-32 mt-1 bg-[#f9f9f9] shadow z-10 rounded">
                        {cities.map((city, idx) => (
                            <div
                            key={idx}
                            className="flex items-center justify-between p-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => handleSelectCity(city)}
                            >
                            <img className="h-4 w-4" src={flag} alt="" />
                            <span className="text-base text-black text-center w-full">
                                {city.name}
                            </span>
                            </div>
                        ))}
                    </div>
                )}
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
                        <UserAvatar fullName={userData?.fullName}/>
                    )
                    }
                </div>
                
                </article>
            </div>
        </section>
    </div>
}