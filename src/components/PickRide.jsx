import { useState } from 'react'
import arrow from '../assets/images/Frame (4).png'
import keke from '../assets/images/keke-main.png'
import bike from '../assets/images/bike-main.png'
import motor from '../assets/images/Car.png'
import Search from '../assets/images/search.png'
import locate from '../assets/images/location-icon.png'


export default function PickRide({ selected, setSelected }){

    // const [selected, setSelected] = useState(null);

    const options = [
        { id: 1, image: keke, text: "Keke ride" },
        { id: 2, image: bike, text: "Okada ride" },
        { id: 3, image: motor, text: "Shuttle ride" },
    ];

    const handleSubmit = (id) => {
        setSelected(id)
        setSelectedRide(id)
    }

    return(
        <div className='min-h-screen w-full bg-[url(/Group.png)] flex flex-col items-center justify-around'>
           
            <div className="w-3/5 xl:w-[413px] inline-flex px-2 py-3 justify-center items-center gap-2 rounded-3xl bg-[#20AE3A]">
               <span className='text-white font-[poppins] text-base xl:text-3xl not-italic font-medium leading-normal capitalize'>set your pickup place</span>
               <img src={arrow} alt="" className='h-6 w-6' />
            </div>
            <main className='w-full xl:w-[1176px] h-[462px] xl:h-[450px] flex flex-col items-center justify-around mb-0 xl:mb-8 rounded-t-[32px] rounded-r-[32px] rounded-b-none flex-shrink-0 bg-white'>
               <h2 className='text-center font-[poppins] text-2xl not-italic font-normal leading-normal'>Select your ride</h2>
               <figure className='w-4/5 xl:w-2/4 gap-5 flex items-center justify-evenly'>

                {options.map((option) => (
                    <div
                    key={option.id}
                    className={`cursor-pointer flex w-2/4 xl:w-44 h-[73px] xl:h-[121px] px-[1px] py-4 flex-col justify-center items-center gap-1 rounded-lg transition-all duration-300 ${
                        selected === option.id ? 'bg-[#20AE3A] text-white' : 'bg-[#EEFDF1] text-[#1E1E1E]'
                    }`}
                    onClick={() => handleSubmit(option.id)}
                    >
                    <img src={option.image} className='w-10 xl:w-[77px] h-9 xl:h-[71px]' alt={option.text} />
                    <p className='font-[poppins] text-center text-base xl:text-xl font-normal not-italic leading-normal'>
                        {option.text}
                    </p>
                    </div>
                ))}
                
               </figure>
               
               <input type="date" className='w-4/5 xl:w-[437px] px-2 py-4 flex flex-row-reverse justify-end' id="" placeholder='Shedule a ride for later' />
               <div className="w-4/5 xl:w-[437px] px-2 py-4 gap-2 flex items-start">
                <img src={locate} className='w-[15px] h-[18px]' alt="" />
                <span className='text-[#444] font-[poppins] text-xl not-italic font-light leading-normal capitalize'>unn 2nd gate</span>
               </div>
               <div className="w-4/5 xl:w-[437px] px-2 py-4 gap-2 flex items-start">
                <img src={locate} className='w-[15px] h-[18px]' alt="" />
                <span className='text-[#444] font-[poppins] text-xl not-italic font-light leading-normal capitalize'>hill top gate</span>
               </div>
            </main>
        </div>
    );
}