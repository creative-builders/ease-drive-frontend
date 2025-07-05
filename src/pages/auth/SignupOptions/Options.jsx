
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import carImage from '../../../assets/images/Car.svg';
import sideImage from '../../../assets/images/image.svg';
import frameCar from '../../../assets/images/Frame-car.svg';
import framewatch from '../../../assets/images/Frame-clock.svg';
import CustomButton from '../../../components/CustomButton';

const OptionCard = ({ icon, title, description, selected, onClick, className }) => (
  <div
    onClick={onClick}
    className={className}
  >
    <div className="h-24 flex items-center space-x-4">
      <span className="text-xl">
        <img src={icon} alt="" />
      </span>
      <div className='mt-10'>
        <h2 className="font-[inter] font-normal text-base md:text-xl">{title}</h2>
        <p className="text-[10px] md:text-sm font-[poppins] font-normal">{description}</p>
      </div>
    </div>
    <input
      type="radio"
      aria-label={title}
      checked={selected}
      readOnly
      className="accent-green-600 w-5 h-5"
    />
  </div>
);

export default function Option() {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  // const handleContinue = () => {
  //   if (selectedOption) navigate(`/${selectedOption}`);
  // };

  return (
    <div className="h-screen lg:flex lg:flex-row lg:gap-x-[45px] lg:items-center">
      <div className='flex flex-col md:flex-row items-center justify-center gap-5 w-full max-w-8xl mx-auto p-6 bg-white rounded-xl'>
        {/* Left side - options */}
        <div className="w-full flex flex-col items-center justify-between md:w-1/2 space-y-6">
          <div className="flex flex-col md:flex-row items-center space-x-2">
            <span className="h-12 md:h-14 w-12 md:w-16">
              <img src={carImage} alt="Ease Drive Logo" />
            </span>
            <h1 className="font-[inter] font-extrabold text-2xl md:text-4xl italic">Ease Drive</h1>
          </div>

          <p className="font-[inter] font-normal text-sm md:text-base text-center">
            Book safe, reliable campus shuttles or become a verified driver in minutes.
          </p>

          <div className="space-y-4 w-full">
            <OptionCard
              icon={frameCar}
              title="I want to Book Rides"
              description="Enjoy safe rides with live tracking and flexible payments"
              selected={selectedOption === '/passengers-signup'}
              onClick={() => handleSelect('/passengers-signup')}
              className={`cursor-pointer flex items-center justify-between p-4 rounded-lg border transition ${
              selectedOption === '/passengers-signup' ? 'bg-blue-50 border-blue-500' : 'bg-gray-50'
            }`}
            />

            <OptionCard
              icon={framewatch}
              title="I want to Drive"
              description="Earn on your schedule by driving anytime."
               selected={selectedOption === '/driver-signup'}
              onClick={() => handleSelect('/driver-signup')}
              className={`cursor-pointer flex items-center justify-between p-4 rounded-lg border transition ${
                 selectedOption === '/driver-signup' ? 'bg-yellow-50 border-yellow-500' : 'bg-gray-50'
              }`}
            />

          </div>

          <CustomButton
             btnClick={() => navigate(selectedOption)}
            name='Continue'
            className={`mt-4 w-full md:w-11/12 bg-green-700 hover:bg-green-800 text-white font-semibold p-4 rounded-lg ${
              !selectedOption ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={!selectedOption}
          />
          

          <div className="w-3/4 flex justify-between space-x-4 text-sm text-green-700 no-underline pt-2">
            <a href="#">Terms of use</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>

        {/* Right side - image */}
        <div className="h-108 w-3/5 mt-2 hidden md:flex">
          <img
            src={sideImage}
            alt="Campus shuttle"
            className="rounded-xl w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}


