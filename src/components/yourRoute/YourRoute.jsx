import React, { useState, useEffect } from 'react';
import caneled from '../../assets/images/canelled.png';
import location from '../../assets/images/Location-map .png';
import search from '../../assets/images/Search map.png';
import BackArrow from '../BackArrow';
import CustomButton from '../CustomButton';
// import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';



const Page = ({ extendedStyles }) => {
    const [activeInput, setActiveInput] = useState('whereTo');
    const [whereTo, setWhereTo] = useState('');
    const [ogigeMarket, setOgigeMarket] = useState('');
    const navigate = useNavigate();
    const routeLocation = useLocation();


    // console.log(routeLocation)

    useEffect(() => {
        if (routeLocation.state?.pickupLocation) {
            setOgigeMarket(routeLocation.state.pickupLocation);
        }
    }, [routeLocation]);

  


    const ContinueButton = () =>{
        // console.log('Where to:', whereTo);
        // console.log('Destination:', ogigeMarket);

        navigate('/dashboard/luggage', {
            state: {
                to: whereTo,
                from: ogigeMarket,
            },
        });
    }

    return (
        <div className='min-h-screen bg-white flex flex-col'>

            <BackArrow extendedStyles='top-28 xl:top-24 left-8 xl:left-48' />

            <div className="w-11/12 mx-auto my-40 xl:w-8/12 px-2 py-4 flex flex-col gap-4 justify-around">
                <article className='h-10 w-40 flex items-center justify-around'>
                    <img src={caneled} className='h-4 w-4 cursor-pointer' alt="" />
                    <span className='font-[poppins] text-xl not-italic font-medium leading-normal'>your routes</span>
                </article>

                {/* FIRST INPUT SECTION */}
                <section
                    className={`h-16 w-full xl:w-[835px] flex px-4 py-6 items-center gap-6 flex-shrink-0 rounded-2xl bg-white transition-all duration-300 ${
                        activeInput === 'whereTo' ? 'border border-[#20AE3A]' : ''
                    }`}
                >
                    <img src={search} className='h-4 w-4' alt="" />
                    <input
                        type="text"
                        placeholder="Where to ?"
                        className="w-4/5 border-none focus:outline-none focus:ring-0 placeholder:text-[#444] capitalize font-[poppins] text-xl not-italic font-light leading-normal"
                        onChange={(e) => setWhereTo(e.target.value)}
                        onFocus={() => setActiveInput('whereTo')}
                    />
                </section>

                {/* SECOND INPUT SECTION */}
                <section
                    className={`h-16 w-full xl:w-[835px] flex px-4 py-6 items-center gap-6 flex-shrink-0 rounded-2xl text-white transition-all duration-300 ${
                        activeInput === 'ogigeMarket' ? 'border border-[#20AE3A]' : ''
                    }`}
                >
                    <img src={location} className="h-4 w-4" alt="" />

                    <input
                        type="text"
                        placeholder="Ogige market"
                        className="w-4/5 border-none focus:outline-none focus:ring-0 text-[#444] text-start capitalize placeholder:text-[#444] font-[poppins] text-xl not-italic font-light leading-normal"
                        value={ogigeMarket} 
                        onChange={(e) => setOgigeMarket(e.target.value)}
                        onFocus={() => setActiveInput('ogigeMarket')}
                    />

                </section>

                <CustomButton 
                    name="Continue"
                    extendedStyles={"w-full p-3 lg:p-4"}
                    btnClick={ContinueButton}
                />
            </div>

        </div>
    );
};

export default Page;
