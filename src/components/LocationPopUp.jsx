import React from 'react'
import Location from '/src/assets/images/Location.png'


const LocationPopUp = ({close}) =>{

  const handleBackgroundClick = (e) => {
    if (e.target.id === "popup-overlay") {
      close(false);
    }
  };

  return(
    <div
     id="popup-overlay"
     onClick={handleBackgroundClick}
     className='min-h-screen w-full flex items-center justify-center blur-0 fixed top-0 bg-[url(/Map.png)]'
      >
        <div className="h-[459px] sm:h-fit-content w-4/5 sm:w-[788px] bg-white flex flex-col items-center justify-around gap-5 p-4 rounded-xl">
            <div className="h-28 w-28 rounded-full"><img className='h-full w-full' src={Location} alt="" /></div>
            <h2 className='capitalize text-2xl not-italic leading-8 tracking-normal font-medium text-center'>enable your location</h2>
            <p className='text-center text-sm text-[#A0A0A0] font-medium not-italic mt-3 w-full sm:w-[280px]'>Choose your location to start find the request around you</p>
            <button className='h-14 w-full rounded-lg bg-[#20AE3A] text-white inline-flex items-center justify-center gap-3' onClick={() => close((prev) => !prev)}>Use my location</button>
        </div>
    </div>
  )
}
export default LocationPopUp
