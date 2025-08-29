import picture from "../assets/images/driver-picture.png"
import verify from "../assets/images/Create account.png"
import star from "../assets/icons/starVector.svg"
import { EmailSignedIcon } from "../assets/icons/EmailSignedIcon"
import { LocationIcon } from "../assets/icons/LocationIcon"; 
import { LocationHomeIcon } from "../assets/icons/LocationHomeIcon";
import { CarIcon } from "../assets/icons/CarIcon";;
import { ColorIcon } from "../assets/icons/ColorIcon";
import { HouseBuilding } from "../assets/icons/HouseBuilding.jsx";
import { PlateNumberIcon } from "../assets/icons/PlateNumberIcon.jsx";
import { CustomerService } from "../assets/icons/CustomerService.jsx";
import { LogoutIcon } from "../assets/icons/LogoutIcon.jsx";
import { DelectIcon } from "../assets/icons/DelectIcon.jsx";
import { PhoneIcon } from "../assets/icons/PhoneIcon.jsx";
import LogoutButton from "../pages/auth/logout/LogoutButton.jsx";
import { userAtom } from "../components/atoms/userAtom.jsx";
import { useRecoilValue } from "recoil";


export const DriverProfile = ({ onEditVehicle, onEditCredentials }) => {

  const userData = useRecoilValue(userAtom);
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md gap-4 flex flex-col h-[980px]">
      <div className="flex items-center justify-between">
        {/* User Info */}
        <div className="flex items-center space-x-4">
          <img src={picture} alt="Driver" className="w-14 h-14 rounded-full" />
          <div className="flex flex-col space-y-1">
            <div className="flex flex-col md:flex-row space-x-4">
              <h2 className="font-semibold not-italic leading-normal text-base">{userData?.fullName}</h2>
              <div><img src={verify} alt="" /></div>
            </div>
            <p className="hidden md:flex items-center gap-1 not-italic text-base leading-6 font-bold"> <LocationIcon className="w-4 h-4 text-green-600" /> You’re currently at: <span className="font-medium">UNN Hostel C, Nsukka</span></p>
            <span className="flex gap-1 not-italic leading-normal font-normal text-[10px]">4.2 <img src={star} className="h-3 w-3" alt="" />(42 Reviews)</span>
          </div>
        </div>

        {/* Edit Button */}
        <button
          className="text-[#4847EB] font-medium not-italic md:font-semibold text-base leading-normal md:leading-[100%] tracking-normal"
          onClick={onEditVehicle}
        
        >
          Edit
        </button>
      </div>

      {/* The rest of personal info... */}
      
        <section className=' gap-2 p-2 border-b-[1px] border-[#E7E7E7]'>
            <h2 className='font-semibold md:font-medium text-base md:text-[18px] leading-normal md:leading-[100%] tracking-normal capitalize'>personal information</h2>
            <div className='flex px-2 py-3 items-center justify-start gap-2'>
            <EmailSignedIcon className="h-[18px] md:h-6 w-[18px] md:w-6 aspect-square text-[#888]" />
            <input 
              type="email" 
              readOnly
              className='h-6 w-48 sm:w-40 font-medium text-[14px] pl-0 rounded-lg leading-6 tracking-normal not-italic border-none outline-none placeholder:text-[#888] focus:outline-none focus:border-none focus:ring-0' 
              placeholder={userData?.email || "Enter email"} 
              id=""
            />
            </div>

            <div className='flex px-2 py-3 items-center justify-start gap-2'>
            <PhoneIcon className="h-[18px] md:h-6 w-[18px] md:w-6 aspect-square text-[#888]" />
            <input 
                type="number"
                readOnly 
                className='h-6 w-48 sm:w-40 font-medium rounded-lg pl-0 text-[14px] leading-6 tracking-normal not-italic border-none placeholder:text-[#888] focus:outline-none focus:border-none focus:ring-0'
                placeholder={userData?.phone || "Enter phone number"}  
                id=""
            />
            </div>

            <div className='flex px-2 py-3 items-center justify-start gap-2'>
            <HouseBuilding className="h-[18px] md:h-6 w-[18px] md:w-6 aspect-square text-[#888]" />
            <input 
                type="text" 
                readOnly
                className='h-6 w-48 sm:w-40 font-medium rounded-lg pl-0 text-[14px] leading-6 tracking-normal not-italic border-none placeholder:text-[#888] focus:outline-none focus:border-none focus:ring-0'
                placeholder="enugu" 
                id=""
            />
            </div>
        </section>

        <section className=' gap-2 p-2 relative border-b-[1px] border-[#E7E7E7]'>

          <button
          className="text-[#4847EB] font-medium absolute right-2 top-2 not-italic md:font-semibold text-base leading-normal md:leading-[100%] tracking-normal"
          onClick={onEditCredentials}
          >
            Edit
          </button>
           
           <h2 className='font-semibold md:font-medium text-base md:text-[18px] leading-normal md:leading-[100%] tracking-normal capitalize'>Vehicle Information</h2>
          <div className='flex px-2 py-3 items-center justify-start gap-2'>
            <CarIcon className="h-[18px] md:h-6 w-[18px] md:w-6 aspect-square text-[#888]" />
            <input 
              type="email"
              readOnly 
              className='h-6 w-48 sm:w-40 font-medium text-[14px] pl-0 rounded-lg leading-6 tracking-normal not-italic border-none placeholder:text-[#888] focus:outline-none focus:border-none focus:ring-0'
              placeholder={userData?.email || "Enter email"} 
              id=""
            />
          </div>

          <div className='flex px-2 py-3 items-center justify-start gap-2'>
            <ColorIcon className="h-[18px] md:h-6 w-[18px] md:w-6 aspect-square text-[#888]" />
            <input 
              type="number" 
              readOnly
              className='h-6 w-48 sm:w-40 font-medium rounded-lg pl-0 text-[14px] leading-6 tracking-normal not-italic border-none placeholder:text-[#888] focus:outline-none focus:border-none focus:ring-0'
              placeholder="Black" 
              id=""
            />
          </div>

          <div className='flex px-2 py-3 items-center justify-start gap-2'>
            <PhoneIcon className="h-[18px] md:h-6 w-[18px] md:w-6 aspect-square text-[#888]" />
            <input 
              type="number" 
              readOnly
              className='h-6 w-48 sm:w-40 font-medium rounded-lg pl-0 text-[14px] leading-6 tracking-normal not-italic border-none placeholder:text-[#888] focus:outline-none focus:border-none focus:ring-0'
              placeholder="EUG20456" 
              id=""
            />
          </div>

          <div className='flex px-2 py-3 items-center justify-start gap-2'>
            <LocationHomeIcon className="h-[18px] md:h-6 w-[18px] md:w-6 aspect-square text-[#888]" />
            <input 
              type="number" 
              readOnly
              className='h-6 w-48 sm:w-40 font-medium rounded-lg pl-0 text-[14px] leading-6 tracking-normal not-italic border-none placeholder:text-[#888] focus:outline-none focus:border-none focus:ring-0'
              placeholder="Main-Gate" 
              id=""
            />
          </div>

          <div className='flex px-2 py-3 items-center justify-start gap-2'>
            <PlateNumberIcon className="h-[18px] md:h-6 w-[18px] md:w-6 aspect-square text-[#888]" />
            <input 
              type="number" 
              readOnly
              className='h-6 w-48 sm:w-40 font-medium rounded-lg pl-0 text-[14px] leading-6 tracking-normal not-italic border-none placeholder:text-[#888] focus:outline-none focus:border-none focus:ring-0'
              placeholder="Main-Gate" 
              id=""
            />
          </div>
        </section>

        <section className='gap-2 p-2 border-b-[1px] border-[#E7E7E7]'>
          <div className='flex px-2 py-3 items-center justify-start gap-2'>
            <CustomerService className="h-[18px] md:h-6 w-[18px] md:w-6 aspect-square text-[#888]" />
            <input 
              type="number" 
              readOnly
              className='h-6 w-48 sm:w-40 font-medium rounded-lg pl-0 text-[14px] leading-6 tracking-normal not-italic border-none placeholder:text-[#888] focus:outline-none focus:border-none focus:ring-0'
              placeholder="Main-Gate" 
              id=""
            />
          </div>
        </section>

        <section className='h-36 gap-2 p-2 border-b-[1px] border-[#E7E7E7]'>
            <p className='font-semibold md:font-medium text-[14px] md:text-[18px] leading-6 md:leading-[100%] tracking-normal capitalize'>account</p>

            <div className='flex px-2 py-3 items-center justify-start gap-2 cursor-pointer'>
             <LogoutButton className="bg-transparent" />
            <p className='font-medium text-[14px] leading-6 tracking-normal text-red-500'>log out</p>
            </div>

            <div className='flex px-2 mb-2 py-3 items-center justify-start gap-2 cursor-pointer'>
            <DelectIcon className="h-[18px] md:h-6 w-[18px] md:w-6" />
            <p className='font-medium text-[14px] leading-6 tracking-normal text-red-500'>delete account</p>
            </div>
        </section>
    </div>
  );
};