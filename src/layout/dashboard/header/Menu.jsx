import { useState } from 'react';
import { Link } from 'react-router-dom'
import home from '../../../assets/icons/Home-3--Streamline-Plump.png.svg'
import bus from '../../../assets/icons/Bus-Front--Streamline-Flex-Remix.png.svg'
import booking from '../../../assets/icons/Bookmark-1--Streamline-Plump.png.svg'
import userIcon from '../../../assets/images/user-icon.png'
import dropdown from '../../../assets/icons/dropdown-arrow.png'
import { useRecoilValue } from 'recoil'
import { userAtom } from '../../../components/atoms/userAtom'
import UserIcon from '../../../assets/icons/UserIcon'
import BlockBar from '../../../assets/icons/BlockBar'
import Notification from '../../../assets/icons/Notification'

const Menu = ({ setIsOpen }) => {
  const [menuOpen, setMenuOpen] = useState(false);
   const userData = useRecoilValue(userAtom);
   
  return (
    <div className="flex items-center justify-between p-3 lg:justify-around gap-5 h-16 w-full">
        <Link to={'/'}>
        <h2 className='text-black md:text-[#20AE3A] font-[poppins] xl:font-[Arial] text-base xl:text-xl not-italic font-bold leading-normal'>Ease Drive</h2>
        </Link>
        {menuOpen && (
        <div 
          onClick={() => setMenuOpen(false)} 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
        />
        )}
        <section
            className={`
              ${menuOpen ? 'flex' : 'hidden'} 
              md:flex 
              fixed md:static 
              w-5/6 md:w-auto 
              h-fit md:h-fit 
              bg-white md:bg-transparent 
              z-50 top-10 left-8 mx-auto md:m-0
              p-10 md:p-0
              
            `}
            onClick={(e) => e.stopPropagation()}
          >
            <ul className=' w-full flex flex-col md:flex-row gap-3 md:gap-5 justify-start md:justify-around p-5 md:p-0 space-y-5 md:space-y-0 text-black md:text-white md:items-center bg-white md:bg-transparent'>
              <li>
                <Link className='flex items-center gap-2 justify-between'>
                  <span className='text-sm order-1 md:order-2'>Home</span>
                  <img src={home} alt="Home" className="h-5 w-5 md:invert order-2 md:order-1 md:brightness-0" />
                </Link>
              </li>
              <li>
                <Link className='flex items-center gap-2 justify-between'>
                  <span className='text-sm order-1 md:order-2'>My Bookings</span>
                  <img src={booking} alt="Bookings" className="h-6 w-6 md:invert order-2 md:order-1 md:brightness-0" />
                </Link>
              </li>
              <li>
                <Link className='flex items-center gap-2 justify-between'>
                  <span className='text-sm order-1 md:order-2'>Bus</span>
                  <img src={bus} alt="Bus" className="h-6 w-6 md:invert order-2 md:order-1 md:brightness-0" />
                </Link>
              </li>
              <li className='md:hidden'>
                <Link className='flex items-center gap-2 justify-between'>
                  <span className='text-sm'>Notification</span>
                  <Notification className='invert md:invert-0' />
                </Link>
              </li>
            </ul>
        </section>

        <div className="h-16 w-24 xl:w-52 flex items-center justify-around">
          {/* <img src={Notification} alt="" className="h-6 w-6 hidden xl:flex" /> */}
          
          {/* <Notification className="md:hidden" /> */}
          <Notification className="hidden md:block" />


        
          <article className='h-16 flex items-center justify-center gap-1 xl:justify-evenly w-40'>
          <BlockBar onClick={() => setMenuOpen(prev => !prev)} />
            <div
              className="h-10 w-10 rounded-full" 
            >
              <img src={userData?.profileImage || userIcon} alt="" className='h-full w-full rounded-full' />
            </div>
            <img src={dropdown} alt="" className='h-2 w-3 flex md:hidden lg:ml-6 cursor-pointer' onClick={() => setIsOpen(true)} />
            <p className='text-white font-[Arial] hidden xl:flex text-sm font-normal not-italic leading-normal'>Mabel Okoro</p>
          </article>
        </div>
    </div>
  )
}

export default Menu