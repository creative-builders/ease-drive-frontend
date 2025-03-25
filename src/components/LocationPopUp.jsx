import React from 'react'
import Location from '/src/assets/images/Location.png'


const LocationPopUp = () =>{
  return(
    <div className='min-h-screen bg-black/70 flex items-center justify-center blur-0'>
        <div className="h-fit-content w-1/4 bg-white flex flex-col items-center justify-around gap-5 p-3 rounded-lg">
            <div className="h-24 w-24 rounded-full"><img className='h-full w-full' src={Location} alt="" /></div>
            <h2 className='capitalize text-xl leading-8 tracking-normal font-medium'>enable your location</h2>
            <p className='text-center text-sm opacity-50'>Choose your location to start find the request around you</p>
            <button className='h-12 w-full rounded-lg bg-[#20AE3A] text-white'>Use my location</button>
        </div>
    </div>
  )
}
export default LocationPopUp

// fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2