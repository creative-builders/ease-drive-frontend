import React from 'react'
import { Link } from 'react-router-dom'
import daily from '../../../assets/icons/daily.png'
import discovery from '../../../assets/icons/Discovery.png'
import booking from '../../../assets/icons/booings.png'
import Notification from '../../../assets/icons/Notification.png'
import userIcon from '../../../assets/images/user-icon.png'
import dropdown from '../../../assets/icons/dropdown-arrow.png'
import { useRecoilValue } from 'recoil'
import { userAtom } from '../../../components/atoms/userAtom'

const Menu = ({ setIsOpen }) => {
   const userData = useRecoilValue(userAtom);
   
  return (
    <div className="flex items-center justify-between p-3 xl:justify-around gap-5 h-16 w-full">
        <h2 className='text-[#20AE3A] font-[Arial] text-xl not-italic font-bold leading-normal'>Ease Drive</h2>
        <ul className='gap-5 hidden xl:flex justify-around h-12 w-[400px] top-3 text-white'>
            <li>
            <Link className=' w-24 h-8 flex items-center justify-evenly'>
            <img src={daily} alt="" className= "h-5 w-5" />
            <span className='font-[Arial] not-italic font-normal font-base leading-normal'>Daily</span>
            </Link>
            </li>
            <li>
              <Link className=' w-32 h-8 flex items-center justify-evenly'>
              <img src={booking} alt="" className="h-6 w-6" />
              <span className='font-[Arial] not-italic font-normal font-base leading-normal'>My Bookings</span>
              </Link>
            </li>
            <li>
              <Link className=' w-32 h-8 flex items-center justify-evenly'>
              <img src={discovery} alt="" className="h-6 w-6" />
              <span className='font-[Arial] not-italic font-normal font-base leading-normal'>Discvery</span>
              </Link>
            </li>
        </ul>
        <div className="h-16 w-52 flex items-center justify-around">
          <img src={Notification} alt="" className="h-6 w-6 hidden xl:flex" />
          <article className='h-16 flex items-center justify-evenly w-40'>
            <div
              className="h-10 w-10 rounded-full" 
            >
              <img src={userData?.profileImage || userIcon} alt="" className='h-full w-full rounded-full' />
            </div>
            <img src={dropdown} alt="" className='h-2 w-2 fill-black lg:fill-white ml-[-45px] lg:ml-6 cursor-pointer' onClick={() => setIsOpen(true)} />
            <p className='text-white font-[Arial] hidden xl:flex text-sm font-normal not-italic leading-normal'>Mabel Okoro</p>
          </article>
        </div>
    </div>
  )
}

export default Menu