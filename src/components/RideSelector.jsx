import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import toast from 'react-hot-toast';

import arrow from '../assets/images/Frame (4).png';
import keke from '../assets/images/keke-main.png';
import bike from '../assets/images/bike-main.png';
import motor from '../assets/images/Car.png';
import Imap from '../assets/icons/IconMain.png';
import Sicon from '../assets/icons/Search-icon.png';

import BackArrow from './BackArrow';
import RideSelectorLocationIcon from '../assets/icons/RideSelectorLocationIcon';
import SearchIcon from '../assets/icons/SearchIcon';
import { LocationIcon } from '../assets/icons/LocationIcon';

const RideSelector = ({
  selected,
  setSelected,
  initialPickUpValue = '',
  isLocationBased = false
}) => {
  const navigate = useNavigate();
  const [pickupLocation, setPickupLocation] = useState(initialPickUpValue);

  const options = [
    { id: 1, image: keke, text: "Keke ride" },
    { id: 2, image: bike, text: "Okada ride" },
    { id: 3, image: motor, text: "Shuttle ride" },
  ];

  const handleRideClick = (option) => {
    setSelected(option.id);
    console.log("Selected ride:", option.image);
  };

  const handleNextPage = () => {
    if (!selected) {
      toast.error("Please select a ride first.");
      return;
    }

    navigate("set-routes", { state: { pickupLocation } });
  };

  return (
    <div className="h-screen w-full flex flex-col items-center justify-around gap-6 overflow-y-scroll">
      <BackArrow extendedStyles="top-20 left-10 xl:left-24" />

      {/* Top Input */}
      {isLocationBased ? (
        <label htmlFor='pickup-location' className="min-h-14 flex w-4/5 xl:w-[667px] pl-4 items-center mt-[56px] gap-6 rounded-2xl bg-white">
          <RideSelectorLocationIcon/>
          <input
            type="text"
            id='pickup-location'
            value={pickupLocation}
            onChange={(e) => setPickupLocation(e.target.value)}
            placeholder="UNN 2nd gate"
            className="w-full h-full font-medium rounded-r-2xl indent-2 text-xl bg-transparent placeholder:text-[#444]"
          />
        </label>
      ) : (
        <Link to="/dashboard/Page" className="w-11/12 flex justify-center mt-28">
          <div className="w-11/12 xl:w-[413px] ml-2 inline-flex px-2 py-3 justify-center items-center gap-2 rounded-3xl bg-[#20AE3A]">
            <span className="text-white text-base xl:text-3xl font-medium capitalize">set your pickup place</span>
            <img src={arrow} alt="arrow" className="h-6 w-6" />
          </div>
        </Link>
      )}

      {/* Main Ride Section */}
      <main className="w-full xl:w-[1176px] min-h-[462px] xl:h-[527px] flex flex-wrap rounded-t-[32px] bg-white">
        <div className='mx-auto'>
        <h2 className="text-center text-2xl font-normal mt-[40px] mb-4">Select your ride</h2>
        <figure className="flex gap-x-4 justify-evenly mb-6">
          {options.map((option) => (
            <div
              key={option.id}
              className={`cursor-pointer flex w-2/4 md:w-44 h-[73px] md:h-[121px] px-[1px] py-4 flex-col justify-center items-center gap-1 rounded-lg transition-all duration-300
              ${selected === option.id ? 'bg-[#20AE3A] text-white' : 'bg-[#EEFDF1] text-[#1E1E1E]'}`}
              onClick={() => handleRideClick(option)}
            >
              <img
                src={option.image}
                alt={option.text}
                className={`w-10 md:w-[77px] h-9 md:h-[71px] ${option.text === 'Shuttle ride' ? 'h-6 w-8' : ''}`}
              />
              <p className="text-xs md:text-xl text-center font-normal">{option.text}</p>
            </div>
          ))}
        </figure>

        {/* Bottom "Where to?" Input or Date Selector */}
        {isLocationBased ? (
          <label htmlFor='search-location' className="relative flex w-full xl:w-[437px] items-center mb-[34px] rounded-[32px] bg-[#F6F7F6]">
            {/* <img src={Sicon} alt="search icon" /> */}
            <span className='absolute left-4'>
            <SearchIcon/>
            </span>
            <input
              type="text"
              id='search-location'
              onClick={handleNextPage}
              placeholder="Where to?"
              className="indent-4 px-6 py-4 w-full rounded-full text-xl outline-0 bg-transparent placeholder:text-[#444]"
            />
          </label>
        ) : (
          <input
            type="date"
            className="w-4/5 xl:w-[437px] px-2 py-4 text-xl text-gray-600"
            placeholder="Schedule a ride"
          />
        )}

        {/* Example Suggested Locations */}
        <div className="w-4/5 xl:w-[437px] px-2 py-4 gap-2 flex items-center">
          <LocationIcon width={"20px"} height={"20px"}/>
          <span className="text-[#444] text-sm xl:text-xl font-light capitalize">unn 2nd gate</span>
        </div>
        <div className="w-4/5 xl:w-[437px] px-2 py-4 gap-2 flex items-center">
          <LocationIcon width={"20px"} height={"20px"}/>
          <span className="text-[#444] text-sm xl:text-xl font-light capitalize">hill top gate</span>
        </div>
        </div>
      </main>
    </div>
  );
};

export default RideSelector;
