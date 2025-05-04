import { useState } from 'react';
import { Link } from 'react-router-dom'
import home from '../../../assets/icons/Home-3--Streamline-Plump.png.svg'
import bus from '../../../assets/icons/Bus-Front--Streamline-Flex-Remix.png.svg'
import booking from '../../../assets/icons/Bookmark-1--Streamline-Plump.png.svg'
import dropdown from '../../../assets/icons/dropdown-arrow.png'
import { useRecoilValue } from 'recoil'
import { userAtom } from '../../../components/atoms/userAtom'
import BlockBar from '../../../assets/icons/BlockBar'
import Notification from '../../../assets/icons/Notification'
import UserAvatar from '../../../assets/icons/UserAvatar';

const Menu = ({ setIsOpen }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Home'); // 👈 new: active tab
  const userData = useRecoilValue(userAtom);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    setMenuOpen(false); // optionally close menu on mobile after click
  };

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

      <section className={`
        ${menuOpen ? 'flex' : 'hidden'} 
        md:flex 
        fixed md:static 
        w-5/6 md:w-auto 
        h-fit md:h-fit 
        bg-white md:bg-transparent 
        z-50 top-10 left-8 mx-auto md:m-0
        p-10 md:p-0
      `} onClick={(e) => e.stopPropagation()}>
      
        <ul className='w-full flex flex-col md:flex-row gap-3 z-40 md:z-0 md:gap-5 justify-start md:justify-around p-5 md:p-0 space-y-5 md:space-y-0 text-black md:text-white md:items-center bg-white md:bg-transparent'>
          
        <li 
            onClick={() => handleTabClick('Home')}
            className={`
              pb-1 
              cursor-pointer 
              ${activeTab === 'Home' ? 'border-b-2 border-green-500' : 'border-b-2 border-transparent'}
              transition-all duration-300 ease-in-out
            `}
          >
            <Link className='flex items-center pb-1 gap-2 justify-between'>
              <span className='text-sm order-1 md:order-2'>Home</span>
              <img src={home} alt="Home" className="h-5 w-5 md:invert order-2 md:order-1 md:brightness-0" />
            </Link>
          </li>


          <li onClick={() => handleTabClick('My Bookings')}
              className={`${activeTab === 'My Bookings' ? 'border-b-2 border-green-500' : ''}`}>
            <Link className='flex items-center pb-1 gap-2 justify-between'>
              <span className='text-sm order-1 md:order-2'>My Bookings</span>
              <img src={booking} alt="Bookings" className="h-6 w-6 md:invert order-2 md:order-1 md:brightness-0" />
            </Link>
          </li>

          <li onClick={() => handleTabClick('Bus')}
              className={`${activeTab === 'Bus' ? 'border-b-2 border-green-500' : ''}`}>
            <Link className='flex items-center pb-1 gap-2 justify-between'>
              <span className='text-sm order-1 md:order-2'>Bus</span>
              <img src={bus} alt="Bus" className="h-6 w-6 md:invert order-2 md:order-1 md:brightness-0" />
            </Link>
          </li>

          <li onClick={() => handleTabClick('Notification')} 
              className={`md:hidden ${activeTab === 'Notification' ? 'border-b-2 border-green-500' : ''}`}>
            <Link className='flex items-center mb-1 gap-2 justify-between'>
              <span className='text-sm'>Notification</span>
              <Notification className='invert md:invert-0' />
            </Link>
          </li>

        </ul>
      </section>

      {/* your right section (profile, notification, etc.) stays the same */}
      <div className="h-16 w-24 xl:w-52 flex items-center justify-around">
        <Notification className="hidden md:block" />
        <article className='h-16 flex items-center justify-center gap-1 xl:justify-evenly w-40'>
          <BlockBar onClick={() => setMenuOpen(prev => !prev)} />
          <div className="h-10 w-10">
            {
              userData?.profileImage ? (
                <img src={userData?.profileImage} alt="Profile" className='h-full w-full object-cover rounded-full' />
              ) : (
                <UserAvatar fullName={userData?.fullName}/>
              )
            }
          </div>
          <img src={dropdown} alt="caret-down" className='h-2 w-3 flex md:hidden lg:ml-6 cursor-pointer' onClick={() => setIsOpen(true)} />
          <p className='text-white font-[Arial] hidden xl:flex text-sm font-normal not-italic leading-normal'>{userData?.fullName}</p>
        </article>
      </div>
    </div>
  )
}

export default Menu;
