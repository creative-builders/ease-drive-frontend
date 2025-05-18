import { useState } from 'react'
// import { Link } from "react-router-dom"
import arrow from '../assets/images/Frame (4).png'
import keke from '../assets/images/keke-main.png'
import bike from '../assets/images/bike-main.png'
import motor from '../assets/images/Car.png'
import IconMap from '../assets/icons/NewIcon.png'
import Imap from '../assets/icons/IconMain.png'
import Sicon from '../assets/icons/Search-icon.png'
import BackArrow from './BackArrow'
import Header from '../layout/dashboard/header/Header'
import { useNavigate } from 'react-router-dom';
import toast from "react-hot-toast";


export default function PickRideSecond({ selected, setSelected }){
    const navigate = useNavigate();
    const [pickupLocation, setPickupLocation] = useState("");

    // const [selected, setSelected] = useState(null);

    const options = [
        { id: 1, image: keke, text: "Keke ride" },
        { id: 2, image: bike, text: "Okada ride" },
        { id: 3, image: motor, text: "Shuttle ride" },
    ];

    // const handleNextPage = () => {
    //     if (!selected) {
    //       toast.error("Please select a ride first.");
    //       return;
    //     }
    
    //     if (!pickupLocation.trim()) {
    //       toast.error("Please enter your pickup location.");
    //       return;
    //     }
    
    //     navigate("/Page", { state: { pickupLocation } });
    // };

    const handleNextPage = () => {
        if (!selected) {
          toast.error("Please select a ride first.");
          return;
        }
      
        // ✅ Allow navigation even if pickupLocation is empty
        navigate("page", { state: { pickupLocation } });
    };
      
    

    return(
        <div className='h-screen w-full bg-[url(/Group.png)] flex flex-col items-center justify-around gap-6 overflow-y-scroll'>
           <Header />
            <BackArrow extendedStyles='top-20 left-10 xl:left-24' />
            <article className='h-14 xl:h-17 flex w-4/5 xl:w-[667px] px-4 py-6 items-center mt-28 gap-6 rounded-2xl bg-[#fff]'>
                <img src={IconMap} alt="" />
                <input 
                    type="text" 
                    className='w-4/5 indent-2 text-xl focus:outline-none focus:ring-0 outline-0 bg-transparent placeholder:text-[#444]' 
                    placeholder='UNN 2nd gate' 
                    value={pickupLocation}
                    onChange={(e) => setPickupLocation(e.target.value)}
                />
            </article>
            <main className='w-full xl:w-[1176px] h-[462px] xl:h-[420px] flex flex-col items-center justify-around mb-[-50px] xl:mb-0 rounded-t-[32px] rounded-r-[32px] rounded-b-none flex-shrink-0 bg-white'>
               <h2 className='text-center font-[poppins] text-2xl not-italic font-normal leading-normal'>Select your ride</h2>
               <figure className='w-4/5 xl:w-2/4 gap-5 flex items-center justify-evenly'>

                {options.map((option) => (
                    <div
                    key={option.id}
                    className={`cursor-pointer flex w-2/4 xl:w-44 h-[73px] xl:h-[121px] px-[1px] py-4 flex-col justify-center items-center gap-1 rounded-lg transition-all duration-300 ${
                        selected === option.id ? 'bg-[#20AE3A] text-white' : 'bg-[#EEFDF1] text-[#1E1E1E]'
                    }`}
                    onClick={() => (setSelected(option.id), console.log(option.image))}
                    >
                    <img src={option.image} className='w-10 xl:w-[77px] h-9 xl:h-[71px]' alt={option.text} />
                    <p className='font-[poppins] text-center text-base xl:text-xl font-normal not-italic leading-normal'>
                        {option.text}
                    </p>
                    </div>
                ))}
                
               </figure>
               
               {/* <Link to="/Page"> */}
                <article className='flex w-4/5 xl:w-[437px] px-3 py-4 items-center gap-6 rounded-[32px] bg-[#F6F7F6]'>
                    <img src={Sicon} alt="" />
                    <input type="text" onClick={handleNextPage} className='w-4/5 indent-2 text-xl outline-0 bg-transparent placeholder:text-[#444]' placeholder='Where to?' />
                </article>
               {/* </Link> */}

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