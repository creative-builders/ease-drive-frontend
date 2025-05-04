
import { useNavigate } from 'react-router-dom';
import logout from '../../../assets/images/Logout.png'
import {  useSetRecoilState } from 'recoil';
import { userAtom } from '../../../components/atoms/userAtom';


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
      <img src={logout} alt="" />
      <span>Log out</span>
    </div>
  )
}

export default LogoutButton