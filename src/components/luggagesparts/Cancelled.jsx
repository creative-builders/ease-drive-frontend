import React, { useState } from 'react'
import Header from '../../layout/dashboard/header/Header'
import emoji from '../../assets/images/downcast-face-with-sweat-svgrepo-com 1.png'

export default function Cancelled() {

    const reasons = [
        "Waiting for a long time",
        "Unable to contact driver",
        "Driver decline to go to the destination",
        "The price is not reasonable",
        "Wrong address show up",
        "Other reasons"
      ];

      const [selectedReasons, setSelectedReasons] = useState([]);

        const handleToggle = (reason) => {
            setSelectedReasons((prev) =>
            prev.includes(reason)
                ? prev.filter((item) => item !== reason)
                : [...prev, reason]
            );
        };

        const [isOpen,close] = useState(true)
            const handleBackgroundClick = (e) => {
                if (e.target.id === "popup-overlay") {
                  close(false);
                }
              };

    return(
        <div className=''>
         <Header />
         <main className="h-full w-full mx-auto xl:w-8/12 px-2 py-4 flex flex-col gap-5 items-center justify-around">
             <h2 className='text-[#000] font-[poppins] text-3xl font-semibold not-italic leading-normal'>Cancel Ride</h2>
             <p className='text-[#444] font-[poppins] text-2xl font-normal not-italic leading-normal'>please select the reason for the Cancelletion</p>
             <div className="eye w-full h-fit flex flex-col items-center justify-evenly gap-2">
                {reasons.map((reason, index) => (
                    <div
                        key={index}
                        className={`teeth w-3/5 border ${
                        selectedReasons.includes(reason) ? 'bg-green-100 border-green-500' : 'border-[#CCC2B8]'
                        } flex items-center gap-5 rounded-lg p-4 cursor-pointer`}
                        onClick={() => handleToggle(reason)}
                    >
                        <input
                        type="checkbox"
                        checked={selectedReasons.includes(reason)}
                        readOnly
                        className="border-[#CCC2B8] h-5 w-5 ring-offset-transparent pointer-events-none"
                        />
                        <p className="text-[#5A5A5A] font-[poppins] text-base font-normal not-italic leading-normal">
                        {reason}
                        </p>
                    </div>
                ))}
             </div>
                <button 
                    className='h-16 w-full flex p-2 items-center justify-center gap-[10px] flex-shrink-0 rounded-lg bg-[#20AE3A]'
                    onClick={()=>close(true)}
                    >
                    Submit
                </button>
         </main>

            { isOpen && (<div
            id="popup-overlay"
            onClick={handleBackgroundClick}
            className="h-[760px] w-full flex items-center justify-center blur-0 absolute top-0 bg-[rgba(0,0,0,0.43)]"
            >

                <div className="h-[459px] sm:h-fit-content w-4/5 xl:w-[788px] bg-white flex flex-col items-center justify-around gap-5 p-4 rounded-xl">
                    <div className="h-28 w-28 rounded-full">
                      <img className='h-full w-full' src={emoji} alt="" />
                    </div>
                    <h2 className='capitalize text-2xl font-medium text-center'>Wow, plaese could you tell us the reason</h2>
                    <p className='text-center text-sm text-[#A0A0A0] mt-3 w-full sm:w-[280px]'>
                      We appologies for the inconviencese and we promise to tackle the issue
                    </p>
                    <button
                    //   onClick={handleUseLocation}
                      className='h-14 w-full rounded-lg bg-[#20AE3A] text-white inline-flex items-center justify-center gap-3'
                    >
                      Back to home
                    </button>
                </div>
                
            </div>)}
        </div>
    )
}