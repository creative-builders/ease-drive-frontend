
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import carImage from '../../../assets/images/Car.svg';
// import sideImage from '../../../assets/images/image.svg';
import sideImage from '../../../assets/images/sideImage.png';
import frameCar from '../../../assets/images/Frame-car.svg';
import framewatch from '../../../assets/images/Frame-clock.svg';
import CustomButton from '../../../components/CustomButton';

const OptionCard = ({ icon, title, description, selected, onClick, className }) => (
  <div
    onClick={onClick}
    className={`${className} relative`}
  >
    <div className="h-40 rounded-2xl flex items-center relative space-x-4">
      <span className="text-xl absolute top-8 left-3">
        <img src={icon} className='h-8 w-8' alt="" />
      </span>
      <div className='mt-10'>
        <h2 className="font-[inter] font-medium leading-[100%] tracking-normal text-[14px] md:text-2xl">{title}</h2>
        <p className="text-[8px] md:text-base font-[inter] leading-[100%] tracking-normal font-normal">{description}</p>
      </div>
    </div>
    <input
      type="radio"
      aria-label={title}
      checked={selected}
      readOnly
      className={`accent-green-600 w-6 h-6 border border-green-600 absolute top-12 right-3 ${
        selected ? 'ring-2 ring-green-300 p-2' : ''
      }`}
    />
  </div>
);

export default function Option() {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  const handleContinue = () => {
    if (selectedOption) navigate(`/${selectedOption}`);
  };

  return (
    <div className="min-h-screen bg-[rgba(255, 255, 255, 1)]">
      <div className='w-11/12 flex items-center justify-around mx-auto xl:w-10/12 px-2 py-4'>
        {/* Left side - options */}
        <div className="w-full flex flex-col items-center justify-between md:w-1/2 space-y-6">
          <div className="flex flex-col md:flex-row items-center space-x-2">
            <span className="h-12 md:h-14 w-12 md:w-16">
              <img src={carImage} className='w-[65px] h-[59px]' alt="Ease Drive Logo" />
            </span>
            <h1 className="font-[inter] font-extrabold text-2xl md:text-4xl italic leading-[100%] tracking-normal">Ease Drive</h1>
          </div>

          <p className="font-[inter] font-normal text-base md:text-2xl leading-9 not-italic align-middle text-center">
            Book safe, reliable campus shuttles or become a verified driver in minutes.
          </p>

          <div className="space-y-4 w-full">
            <OptionCard
              icon={frameCar}
              title="I want to Book Rides"
              description="Enjoy safe rides with live tracking and flexible payments"
              selected={selectedOption === '/passengers-signup'}
              onClick={() => handleSelect('/passengers-signup')}
              className={`cursor-pointer flex items-center justify-between p-2 rounded-lg border transition ${
              selectedOption === '/passengers-signup' ? 'bg-blue-50 border-blue-500' : 'bg-gray-50'
            }`}
            />

            <OptionCard
              icon={framewatch}
              title="I want to Drive"
              description="Earn on your schedule by driving anytime."
               selected={selectedOption === '/driver-create'}
              onClick={() => handleSelect('/driver-create')}
              className={`cursor-pointer flex items-center justify-between p-2 rounded-lg border transition ${
                 selectedOption === '/driver-create' ? 'bg-yellow-50 border-yellow-500' : 'bg-gray-50'
              }`}
            />

          </div>

          <CustomButton
             btnClick={() => navigate(selectedOption)}
            name='Continue'
            className={`mt-4 w-full md:w-11/13 bg-green-700 hover:bg-green-800 text-white font-semibold p-4 rounded-lg ${
              !selectedOption ? 'opacity-80 cursor-not-allowed' : ''
            }`}
            disabled={!selectedOption}
          />
          

          <div className="w-3/4 flex justify-between space-x-4 text-sm text-green-700 no-underline pt-2">
            <a className='font-medium font-[inter] leading-[150%] text-[14px] tracking-normal align-middle' href="#">Terms of use</a>
            <a className='font-medium font-[inter] leading-[150%] text-[14px] tracking-normal align-middle' href="#">Privacy Policy</a>
          </div>
        </div>

        {/* Right side - image */}
        <div className="h-[623px] w-[528px] ml-12 mt-2 hidden md:flex">
          <img
            src={sideImage}
            alt="Campus shuttle"
            className="rounded-[45px] w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}


