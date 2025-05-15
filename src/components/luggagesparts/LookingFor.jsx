import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import locate from '../../assets/images/Location-map .png';
import Search from '../../assets/images/Search map.png';
import Header from '../../layout/dashboard/header/Header';
import motor from '../../assets/images/Car.png';
import BackArrow from '../BackArrow';
import CustomButton from '../CustomButton';
import Preloader from '../Preloader';
import IconMap from '../../assets/icons/NewIcon.png'

export default function LookingFor() {
  const [isOpen, setIsOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRefresh = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate('/Bidder');
    }, 15000);
  };
  
  // const handleBackgroundClick = (e) => {
  //   if (e.target.id === "popup-overlay") {
  //     setIsOpen(false);
  //   }
  // };

  // Progress bar animation logic
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsOpen(true); // Show cover when progress hits 100
          return 100;
        }
        return prev + (100 / 15);
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='min-h-screen w-full bg-[url(/Group.png)] flex flex-col items-center justify-around gap-14 relative'>
      <Header />
      {/* <BackArrow extendedStyles={'top-20 xl:top-24 left-2 xl:left-20'} /> */}
      
       
      <article className='h-17 flex w-11/12 xl:w-[667px] px-4 py-6 mt-24 items-center gap-6 rounded-2xl bg-[#fff]'>
        <img src={IconMap} alt="" />
        <input
          type="text"
          className='w-4/5 indent-2 text-xl outline-0 focus:outline-none focus:ring-0 bg-transparent placeholder:text-[#444]'
          placeholder='UNN 2nd gate'
        />
      </article>

      {/* MAIN container only visible when progress < 100 */}
      {!isOpen && (
        <main className='w-full xl:w-[1176px] h-fit flex flex-col mb-[-50px] xl:mb-3 bg-[#F8FDF9] z-30 p-3 items-center justify-around mt-8 rounded-t-[32px] rounded-r-[32px] rounded-b-none flex-shrink-0'>
          <figure className='w-4/5 xl:w-4/5 gap-6 flex flex-col items-start justify-center h-fit'>
            <h2 className='text-[#000] font-[poppins] text-2xl not-italic font-semibold leading-normal'>looking for driver</h2>
            <p className='text-[#444] font-[poppins] text-xl not-italic font-light leading-normal'>Connecting to available driver nearby</p>

            {/* progressive bar */}
            <div className="h-5 w-full flex-shrink-0 rounded-xl bg-[#BFFBCA] overflow-hidden">
              <div
                className="bg-[#20AE3A] h-full transition-all duration-500 ease-in-out rounded-xl"
                style={{ width: `${progress}%` }}
              ></div>
            </div>

            <section className='h-40 w-32 flex flex-col items-center justify-evenly m-auto'>
              <div className="h-17 w-20 bg-[#DEFFE4] rounded-[50%] flex flex-col items-center justify-center">
                <img src={motor} className='h-2/4 w-2/4 object-contain' alt="" />
              </div>
              <Link className='w-full' to='/Cancelled'>
                <CustomButton
                  name="Cancel Ride"
                  extendedStyles={"p-2 lg:p-2 rounded-lg w-full"}
                  btnClick={() => setIsOpen(true)}
                />
              </Link>
            </section>
          </figure>
        </main>
      )}

      {/* COVER section becomes visible when progress hits 100 or isOpen is true */}
      {isOpen && (
        <div className="cover h-screen md:h-full w-full flex items-center justify-center blur-0 fixed z-40 top-0 bg-[rgba(0,0,0,0.43)]">
          <main className='w-full xl:w-[1176px] h-fit flex flex-col mb-[-50px] xl:mb-3 bg-[#F8FDF9] z-50 p-3 items-center justify-around mt-12 rounded-3xl flex-shrink-0'>
            <figure className='w-4/5 xl:w-4/5 gap-6 flex flex-col items-center justify-center h-fit'>
              <h2 className='text-[#000] font-[poppins] text-2xl not-italic font-semibold leading-normal'>no available driver at your Location</h2>
              <p className='text-[#444] font-[poppins] text-base lg:text-xl not-italic font-light leading-normal'>We will let you know when a driver is on your way</p>

              {loading ? (
                <Preloader />
              ) : (
                <button
                  onClick={handleRefresh}
                  className="text-white bg-[#20AE3A] h-10 w-24 rounded-lg"
                >
                  Refresh
                </button>
              )}



              <section className='h-40 w-32 flex flex-col items-center justify-evenly m-auto'>
                <div className="h-17 w-20 bg-[#DEFFE4] rounded-[50%] flex flex-col items-center justify-center">
                  <img src={motor} className='h-2/4 w-2/4 object-contain' alt="" />
                </div>
                <Link className='w-full' to='/Cancelled'>
                  <CustomButton
                    name="Cancel Ride"
                    extendedStyles={"p-2 lg:p-2 rounded-lg w-full bg-transparent text-green-400"}
                    onClick={() => setIsOpen(true)}
                  />
                </Link>
              </section>
            </figure>
          </main>
        </div>
      )}
    </div>
  );
}
