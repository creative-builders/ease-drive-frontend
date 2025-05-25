import { useState } from 'react'
import { Link } from "react-router-dom"
import arrow from '../assets/images/Frame (4).png'
import keke from '../assets/images/keke-main.png'
import bike from '../assets/images/bike-main.png'
import motor from '../assets/images/Car.png'
// import locate from '../assets/images/Location-map .png'
import Imap from '../assets/icons/IconMain.png'
import BackArrow from './BackArrow'
import Header from '../layout/dashboard/header/Header'


export default function PickRide({ selected, setSelected }){

    // const [selectedRide, setSelectedRide] = useState(null);

    const options = [
        { id: 1, image: keke, text: "Keke ride" },
        { id: 2, image: bike, text: "Okada ride" },
        { id: 3, image: motor, text: "Shuttle ride" },
    ];

    const handleSubmit = (option) => {
        setSelected(option.id)
        console.log("Selected image", option.image);
        
    }

    // const handleSubmit = (option) => {
    //     setSelected(option.id)
    //     setSelectedRide(option.id)
    //     console.log("Selected image", option.image);
        
    // }

    return(
        <div className='h-screen w-full flex flex-col px-0  items-center gap-12 justify-around'>
            {/* <Header /> */}
           <BackArrow extendedStyles={"top-20 left-10 xl:left-24"} />

            <Link to="/dashboard/Page" className='w-11/12 flex items-center justify-center'>
                <div className="w-11/12 xl:w-[413px] ml-2 inline-flex px-2 py-3 justify-center items-center gap-2 rounded-3xl bg-[#20AE3A] mt-28">
                <span className='text-white font-[poppins] text-base xl:text-3xl not-italic font-medium leading-normal capitalize'>set your pickup place</span>
                <img src={arrow} alt="" className='h-6 w-6' />
                </div>
            </Link>
            
            <main className='w-full xl:w-[1176px] h-[462px] xl:h-[420px] flex flex-col items-center mt-2 justify-around mb-[-20px] xl:mb-0 rounded-t-[32px] rounded-r-[32px] rounded-b-none flex-shrink-0 bg-white'>
               <h2 className='text-center font-[poppins] text-2xl not-italic font-normal leading-normal'>Select your ride</h2>
               <figure className='w-4/5 xl:w-2/4 gap-5 flex items-center justify-evenly'>

                {options.map((option) => (
                    <div
                    key={option.id}
                    className={`cursor-pointer flex w-2/4 md:w-44 h-[78px] md:h-[121px] px-[1px] py-4 flex-col justify-center items-center gap-1 rounded-lg transition-all duration-300 ${
                        selected === option.id ? 'bg-[#20AE3A] text-white' : 'bg-[#EEFDF1] text-[#1E1E1E]'
                    }`}
                    onClick={() => handleSubmit(option)}
                    >
                    <img src={option.image}
                     className={`w-10 md:w-[77px] h-9 md:h-[71px]
                        ${
                            option.text === "Shuttle ride"
                            ? 'h-6 md:h-[71px] w-8 md:w-[77px]': ''
                        }
                        ${
                            option.text === "Keke ride"
                            ? 'h-7 md:h-[71px] w-8 md:w-[77px] ': ''
                        }`}
                      alt={option.text} 
                      
                    />
                    <p className='font-[poppins] text-center text-xs xl:text-xl font-normal not-italic leading-normal'>
                        {option.text}
                    </p>
                    </div>
                ))}
                
               </figure>
               
               <input type="date" className='w-4/5 xl:w-[437px] px-2 py-4 flex flex-row-reverse justify-end' id="" placeholder='Shedule a ride for later' />
               <div className="w-4/5 xl:w-[437px] px-2 py-4 gap-2 flex items-start">
                <img src={Imap} className='w-[15px] h-[18px]' alt="" />
                <span className='text-[#444] font-[poppins] text-xl not-italic font-light leading-normal capitalize'>unn 2nd gate</span>
               </div>
               <div className="w-4/5 xl:w-[437px] px-2 py-4 gap-2 flex items-start">
                <img src={Imap} className='w-[15px] h-[18px]' alt="" />
                <span className='text-[#444] font-[poppins] text-xl not-italic font-light leading-normal capitalize'>hill top gate</span>
               </div>
            </main>
        </div>
    );
}