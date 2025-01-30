
import { useState } from 'react';
import MobilePic from '/Rectangle.png'
import { useNavigate } from 'react-router-dom';

export default function Option() {
  const navigate =  useNavigate();
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  console.log(selectedOption)

  return (
    
    <div className="h-screen w-full flex flex-col items-center justify-evenly relative">
        
        <nav className="h-17 w-full flex items-center justify-around absolute top-0 border-b-2">
          <p className='text-white text-2xl z-30 font-semibold'>EaseDrive</p>
          <ul className="z-10 text-white w:2/5 md:h-14 w-96 flex items-center justify-evenly">
            <p className='text-wrap text-[12px] md:text-sm'>Already have an account</p>
            <button className="border border-green-900 h-10 w-24 cursor-pointer rounded-xl text-green-600">
              Login
            </button>
          </ul>
        </nav>

       
        <div className="box h-full w-full flex items-center justify-between">
          
          <div className="carPicture h-[70vh] md:h-full w-1/2 bg-red-300 relative">
            <img className=" w-full h-full object-cover object-bottom absolute" src={MobilePic} alt="" />
            <div className='relative w-full h-full z-50 flex items-end justify-center pb-20'>
              <p className='text-wrap text-white md:text-white text-2xl md:text-4xl font-bold'>Escape the usual <br className='hidden md:block'/> struggle of public buses.</p>
            </div>
          </div>

          
          <div className="form h-full w-7">
            <main className="sly h-106 w-91 mx-auto mt-36 px-5 py-3 flex flex-col gap-5 items-center justify-around">
              <p>Sign up as a</p>

              {/* Passenger Section */}
              <section
                className={`h-24 w-4/5 relative border px-2 py-3 flex flex-col gap-2 rounded-lg cursor-pointer ${
                  selectedOption === 'passenger-login'
                    ? 'border-purple-900'
                    : 'border-gray-300'
                }`}
                onClick={() => handleSelect('/passenger-login')}
              >
                <h2 className="font-semibold">Passenger</h2>
                <p>Effortlessly book your trip with Easedrive</p>
                <i className="pin absolute text-base right-1 top-8 fa fa-angle-right" aria-hidden="true"></i>
              </section>

              <section
                className={`h-28 w-4/5 relative border px-2 py-2 flex flex-col gap-2 rounded-lg cursor-pointer text-sm ${
                  selectedOption === 'vehicleOwner'
                    ? 'border-purple-900'
                    : 'border-gray-300'
                }`}
                onClick={() => handleSelect('/driver-signup')}
              >
                <h2 className="font-semibold">Vehicle Owners</h2>
                <p>
                  Join us as a Vehicle owner and start earning income from your
                  Vehicle when they are in active use for trip
                </p>
                <i className="pin absolute text-base right-1 top-10 fa fa-angle-right" aria-hidden="true"></i>
              </section>

              <button
               onClick={() => navigate(selectedOption)}
                className="h-12 w-4/5 rounded-md bg-green-600 text-white disabled:bg-gray-400"
                disabled={!selectedOption}
              >
                Continue
              </button>
            </main>
          </div>
        </div>
      </div>
  );
}
