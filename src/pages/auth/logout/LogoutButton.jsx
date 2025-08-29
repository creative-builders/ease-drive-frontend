
import { useNavigate } from 'react-router-dom';
import {  useSetRecoilState } from 'recoil';
import { userAtom } from '../../../components/atoms/userAtom';
import { LogoutIcon } from '../../../assets/icons/LogoutIcon';
import { useState } from 'react';
import { Modal } from '../../../components/Modal';
import CustomButton from '../../../components/CustomButton';


const LogoutButton = ({ text, className="" }) => {
  const navigate = useNavigate();
  const setUser = useSetRecoilState(userAtom);
  const [openModal, setOpenModal] = useState(false);

  const handleLogout = () => {
  localStorage.removeItem('current_user'); // Clear user data from local storage
  setUser(null)
  navigate('/login'); // Redirect to login page
  }

  return (
    <>
     {openModal && (
      <Modal
      title = {"Confirm Logout"}
      bodyText={"Are you sure you want to logout?"}
      closeModal={() => setOpenModal(false)}
      >
      <CustomButton
       name="No"
       extendedStyles="mb-4 w-full h-[45px] lg:h-[60px] px-4 font-medium rounded-2xl bg-[#BEF4C7] text-primary-950 flex items-center justify-center"
       size="lg"
       btnClick={() => setOpenModal(false)}
        />
      <CustomButton
       name="Yes, Logout"
       extendedStyles="w-full h-[45px] lg:h-[60px] bg-primary-700 px-4 font-medium rounded-2xl text-white flex items-center justify-center"
       size="lg"
       btnClick={handleLogout}
        />
      </Modal>
      )
     }
      <div 
      onClick={() => setOpenModal(true)}
      className={` ${className} w-[126px] h-[48px] px-[13px] bg-primary-50 rounded-36 lg:w-[54px] lg:h-[50px] rounded-2xl flex items-center lg:justify-center cursor-pointer`}>
      <LogoutIcon/> 
      <span className='text-primary-500'>{ text }</span>
    </div>
    </>
  )
}

export default LogoutButton