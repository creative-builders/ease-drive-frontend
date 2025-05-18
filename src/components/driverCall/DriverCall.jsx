
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../layout/dashboard/header/Header';
import IconMap from '../../assets/icons/NewIcon.png';
// import locate from '../../assets/images/Location-map .png'
import BackArrow from '../BackArrow';

export default function DriverCall() {
  const location = useLocation();

  const [driverData, setDriverData] = useState({
    profilePic: '',
    name: '',
    rating: '',
    distance: '',
    vehicleInfo: '',
    amount: '',
    imageUrl: '',
  });

  useEffect(() => {
    if (location.state) {
      setDriverData(location.state);
    }
  }, [location.state]);

  const {
    profilePic,
    name,
    rating,
    distance,
    vehicleInfo,
    amount,
    imageUrl,
  } = driverData;

  const isDataAvailable = name || distance || rating || vehicleInfo || amount;

  return (
    <div className='min-h-screen w-full bg-[url(/Group.png)] flex flex-col items-center justify-around gap-14'>
      <Header />
      <BackArrow extendedStyles="top-20 left-10 xl:left-24" />

      <article className='h-17 flex w-4/5 xl:w-[667px] px-4 py-6 mt-24 items-center gap-6 rounded-2xl bg-[#fff]'>
        <img src={IconMap} alt="location-icon" />
        <input
          type="text"
          className='w-4/5 indent-2 text-xl outline-0 bg-transparent focus:outline-none focus:ring-0 placeholder:text-[#444]'
          placeholder='UNN 2nd gate'
        />
      </article>

      <main className='w-full xl:w-[1176px] h-[452px] flex flex-col bg-[#F8FDF9] p-3 mb-[-150px] xl:mb-0 items-center justify-around mt-8 rounded-t-[32px] rounded-r-[32px] rounded-b-none flex-shrink-0'>
        <div className="p-6 h-full w-full flex flex-wrap gap-4 justify-center">
          <div className="h-full w-full sm:w-4/5 bg-transparent rounded-2xl flex p-3 gap-3">

            {/* Left Side Info */}
            <div className="w-4/5 h-full text-sm flex flex-col gap-12">
              <div className='w-full h-3/4 text-sm flex flex-col gap-8'>
                <p className='text-[#000] font-[poppins] text-base not-italic font-medium leading-[23px]'>
                  Your driver is coming in: <span></span>
                </p>

                <div className="flex w-full items-center gap-10">
                  <img
                    src={profilePic || '/default-profile.jpg'}
                    alt="driver-pic"
                    className="w-[60px] h-[60px] rounded-full object-cover"
                  />
                  <section className='h-fit xl:h-28 w-fit items-start flex flex-col gap-2'>
                    <p className="font-normal xl:font-medium text-[14px] xl:text-base not-italic">{name || 'N/A'}</p>
                    <p className="font-normal xl:font-medium text-[14px] xl:text-base not-italic">{distance || 'Unknown distance'}</p>
                    <p className="font-normal xl:font-medium text-[14px] xl:text-base not-italic">{rating || 'No rating'}</p>
                    <p className="font-normal xl:font-medium text-xs text-[#B8B8B8] not-italic gap-6">{vehicleInfo || 'Vehicle info unavailable'}</p>
                  </section>
                </div>

                <div className="flex gap-12">
                  <span className='text-[#000] font-[poppins] text-base not-italic font-medium leading-normal'>Amount:</span>
                  <span className='text-[#000] font-[poppins] text-base not-italic font-medium leading-normal'>{amount || '₦0'}</span>
                </div>
              </div>
            </div>

            {/* Right Side Image */}
            <div className="w-2/5 h-full flex flex-col gap-5">
              {imageUrl ? (
                <img src={imageUrl} alt="driver-vehicle" className="h-20 xl:h-40 w-full object-contain" />
              ) : (
                <div className="h-20 xl:h-40 w-full bg-gray-200 flex items-center justify-center text-gray-500 rounded-md">
                  No Image
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
