
import { Outlet } from 'react-router-dom'
import Header from '../../layout/dashboard/header/Header'
const PassengerDashboard = ({
  profileImage,
  firstName,
  lastName
}) => {

  return (
    <div>
       <Header/>
       <Outlet/>
    </div>
  )
}

export default PassengerDashboard