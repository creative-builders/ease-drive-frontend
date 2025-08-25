
import { useNavigate } from 'react-router-dom';
import {  useSetRecoilState } from 'recoil';
import { userAtom } from '../../../components/atoms/userAtom';
import { LogoutIcon } from '../../../assets/icons/LogoutIcon';


const LogoutButton = () => {
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
      className="flex items-center justify-start gap-4 cursor-pointer">
        <LogoutIcon />
    </div>
  )
}

export default LogoutButton