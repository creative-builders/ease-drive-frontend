import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../layout/dashboard/header/Header'
import emoji from '../../assets/images/downcast-face-with-sweat-svgrepo-com 1.png'
import BackArrow from '../BackArrow';
import toast from "react-hot-toast";

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
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = (reason) => {
    setSelectedReasons((prev) =>
      prev.includes(reason)
        ? prev.filter((item) => item !== reason)
        : [...prev, reason]
    );
  };

  const handleBackgroundClick = (e) => {
    if (e.target.id === "popup-overlay") {
      setIsOpen(false);
    }
  };

  const handleSubmit = () => { 
    if (selectedReasons.length === 0) {
      toast.error('Please select a reason for your cancellation.');
      return;
    }
    setIsOpen(true);
  };
  

  return (
    <div>
      <Header />
      {/* <BackArrow extendedStyles={'top-20 xl:top-24 left-2 xl:left-20'} /> */}
      <main className="h-full w-full mx-auto xl:w-8/12 px-2 py-4 flex flex-col gap-5 items-center justify-around mt-20">
        <h2 className='text-[#000] font-poppins text-xl xl:text-3xl font-semibold not-italic leading-normal'>Cancel Ride</h2>
        <p className='text-[#444] font-poppins text-sm xl:text-2xl font-normal not-italic leading-normal'>
          Please select the reason for the cancellation
        </p>
        <div className="w-full h-fit flex flex-col items-center justify-evenly gap-2">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`w-11/12 xl:w-3/5 border ${
                selectedReasons.includes(reason)
                  ? 'bg-green-100 border-green-500'
                  : 'border-[#CCC2B8]'
              } flex items-center gap-5 rounded-lg p-4 cursor-pointer`}
              onClick={() => handleToggle(reason)}
            >
              <input
                type="checkbox"
                checked={selectedReasons.includes(reason)}
                readOnly
                className="border-[#CCC2B8] h-5 w-5 ring-offset-transparent pointer-events-none"
              />
              <p className="text-[#5A5A5A] font-poppins text-base font-normal not-italic leading-normal">
                {reason}
              </p>
            </div>
          ))}
        </div>

        <button
          onClick={handleSubmit}
          className="p-3 lg:p-4 rounded-lg w-full bg-[#20AE3A] hover:bg-green-600 text-white inline-flex items-center justify-center gap-3 transition duration-200"
        >
          Submit
        </button>

      </main>

      {isOpen && (
        <div
          id="popup-overlay"
          onClick={handleBackgroundClick}
          className="min-h-screen sm:h-[760px] w-full flex items-center justify-center blur-0 absolute top-0 bg-[rgba(0,0,0,0.43)]"
        >
          <div className="h-[459px] sm:h-fit w-4/5 xl:w-[788px] bg-white flex flex-col items-center justify-around gap-5 p-4 rounded-xl">
            <div className="h-28 w-28 rounded-full">
              <img className='h-full w-full' src={emoji} alt="sad emoji" />
            </div>
            <h2 className='capitalize text-2xl font-medium text-center'>No be your fault say you wan cancel this ride</h2>
            <p className='text-center text-sm text-[#A0A0A0] mt-3 w-full sm:w-[280px]'>
              We go make sure say we do better well, well next time, make you fit enjoy your next ride.
            </p>
            <Link className='w-full' to='/LocationPopUp'>
              <button className='h-14 w-full bg-[#20AE3A] text-white inline-flex items-center justify-center gap-3'>
                Back to home
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
