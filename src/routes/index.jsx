
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/landingPage/Home';
import { RegisterPassenger } from '../pages/auth/Passengers/PassengersSignup';
import Login from '../pages/auth/Login/Login';
import ActivateAccount from '../pages/auth/ActivateAccount';
import DashboardHome from '../pages/dashboard/DashboardHome';
import PassengerDashboardIndex from '../pages/dashboard/passenger';
import { SignupOptions } from '../pages/auth/SignupOptions/SignupOptions';
import { RegisterDriver } from "../pages/auth/driverSignup/DriverSignup"


import { DriverKycPage } from '../pages/auth/DriverKYC/DriverKyc';
import { ForgotPassword } from '../pages/auth/Passengers/ForgotPassword';
import NotFoundPage from '../pages/dashboard/NotFoundPage';
import { Rides } from '../pages/dashboard/passenger/Rides';
import { PassengerProfile } from '../pages/dashboard/passenger/PassengerProfile';
import { useRecoilValue } from 'recoil';
import { userAtom } from '../components/atoms/userAtom';
import { DriverDashboardIndex } from '../pages/dashboard/driver';
import { Earnings } from '../pages/dashboard/driver/Earnings';
import { Trips } from '../pages/dashboard/driver/Trips';
import { Requests } from '../pages/dashboard/driver/Requests';
import ProtectedRoutes from './ProtectedRoutes';
import Notifications from '../pages/dashboard/driver/Notification';
import DriverProfile from '../pages/dashboard/driver/DriverProfiles';
import { SupportPage } from "../pages/dashboard/passenger/SupportPage";





const IndexRoute = () => {
  const user = useRecoilValue(userAtom);
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup-as" element={<SignupOptions />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/activate" element={<ActivateAccount/>} />
      <Route path="/passengers-signup" element={<RegisterPassenger />} />
      <Route path="/driver-signup" element={<RegisterDriver />} />
       <Route path="/driver-kyc" element={<DriverKycPage />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      {/* <Route path="/notification" element={<NotificationsPage />} /> */}
  
    
      <Route path="/driver-profile" element={<DriverProfile />} />
      {/* <Route path="/driver-profile" element={<DriverProfiles />} /> */}
      <Route path="/user-profile" element={<PassengerProfile />} />
      

      {/* Dashboard Route */}
      <Route path="/dashboard" 
      element={
       <ProtectedRoutes>
        <DashboardHome />
       </ProtectedRoutes>
       }
      > 
        <Route index element={user?.role === "passenger" ? 
        <PassengerDashboardIndex/> : 
        <DriverDashboardIndex/>
         }
         />


          {/* New Passenger Routes */}
          <Route path="rides" element={<Rides />} />
          <Route path="profile" element={
            user?.role === "passenger" ?
              <PassengerProfile /> :
              <DriverProfile />}
          />
          <Route path="support" element={<SupportPage />} />

          {/* New Driver Routes */}
          <Route path="earnings" element={<Earnings />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="trips" element={<Trips />} />
          <Route path="requests" element={<Requests />} />
        </Route>


        {/* Not found */}
        <Route path="*" element={<NotFoundPage />} />

      </Routes>
    </Router>
  )
}

export default IndexRoute