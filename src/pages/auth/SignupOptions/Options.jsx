
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import leftCarImage from "../../../assets/images/signup-options-left-image.svg"
import { BiChevronRight } from 'react-icons/bi';

export default function Option() {
  const navigate =  useNavigate();
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  console.log(selectedOption)

  return (
    
    <div className="h-screen lg:flex lg:flex-row lg:gap-x-[45px] lg:items-center">
      <div 
      style={{background:`linear-gradient(0deg, rgba(43, 170, 66, 0.44) 0%, rgba(43, 170, 66, 0.44) 100%), url(${leftCarImage}) lightgray bottom left / cover no-repeat`}}
      className="mb-6 basis-1/2 h-[421px] lg:h-screen border border-red-900">
        {/* <img  alt="" /> */}
      </div>

        <div className="lg:basis-1/2 pb-[40px] px-[4%]">
            <div className="hidden lg:flex justify-center items-center gap-x-[42px]">
                    <p>Already have have an account ?</p>
                    <Link to="/login" className="text-green-300 border border-green-300 px-6 py-3 rounded-lg">Login</Link>
                </div>

              <h1 className='font-bold mb-8 text-gray-900 text-xl lg:text-2xl'>Sign up as a</h1>
              {/* Passenger Section */}
              <div
                className={`mb-8 min-h-[93px] border p-4 rounded-[20px] cursor-pointer ${
                  selectedOption === '/passenger-signup'
                    ? 'border-green-300'
                    : 'border-gray-300'
                }`}
                onClick={() => handleSelect('/passenger-signup')}
              >
               <div className="flex items-center">
                <div className='basis-[calc(100%-54px)]'>
                <h2 className="font-black mb-2 text-gray-900 text-base lg:text-xl">Passenger</h2>
                <p className='text-gray-400 text-xs lg:text-base'>Effortlessly book your trips with EaseDrive and easily manage all your bookings in one convenient place</p>
                </div>
                <span className='inline-block ml-auto'>
                  <BiChevronRight fontSize={"24px"}/>
                </span>
               </div>
                {/* <i className="pin absolute text-base right-1 top-8 fa fa-angle-right" aria-hidden="true"></i> */}
              </div>

              <div
                className={`mb-8 min-h-[93px] border p-4 rounded-[20px] cursor-pointer text-sm ${
                  selectedOption === '/driver-signup'
                    ? 'border-green-300'
                    : 'border-gray-300'
                }`}
                onClick={() => handleSelect('/driver-signup')}
              >
               <div className="flex items-center">
                <div className='basis-[calc(100%-54px)]'>
                <h2 className="font-black mb-2 text-gray-900 text-base lg:text-xl">Vehicle Owners</h2>
                <p className='text-gray-400 text-xs lg:text-base'>
                  Join us as a Vehicle owner and start earning income from your
                  Vehicle when they are in active use for trip
                </p>
                </div>
                <span className='inline-block ml-auto'>
                  <BiChevronRight fontSize={"24px"}/>
                </span>
               </div>
                {/* <i className="pin absolute text-base right-1 top-10 fa fa-angle-right" aria-hidden="true"></i> */}
              </div>

              <button
               onClick={() => navigate(selectedOption)}
                className="mb-[42px] px-3 py-4 w-full rounded-md bg-green-600 text-white disabled:bg-green-100"
                disabled={!selectedOption}
              >
                Continue
              </button>

               <div className="lg:hidden flex justify-center gap-x-2">
                    <p>Already have have an account ?</p>
                    <Link to="/login" className="text-green-300">Login</Link>
                </div>
        </div>
      </div>
  );
}
