
import { useNavigate } from 'react-router-dom';
import {  useSetRecoilState } from 'recoil';
import { userAtom } from '../../../components/atoms/userAtom';
import { LogoutIcon } from '../../../assets/icons/LogoutIcon';


const LogoutButton = ({className}) => {
  const navigate = useNavigate();
  const setUser = useSetRecoilState(userAtom);

  const handleLogout = () => {
  localStorage.removeItem('current_user'); // Clear user data from local storage
  setUser(null)
  navigate('/login'); // Redirect to login page
  }

  return (
    <div 
      onClick={handleLogout}
      className={`${className} lg:w-[54px] lg:h-[50px] rounded-2xl flex items-center justify-center bg-primary-50 cursor-pointer`}>
        <LogoutIcon />
    </div>
  )
}

export default LogoutButton