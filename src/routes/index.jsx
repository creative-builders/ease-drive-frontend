

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/landingPage/Home';
import Options from '../pages/auth/SignupOptions/Options';
import DriVerify from '../pages/auth/Drivers/DriVerify';
import DrivUpload from '../pages/auth/Drivers/DrivUpload';
import DrivPlace from '../pages/auth/Drivers/DrivPlace';
import { RegisterPassenger } from '../pages/auth/Passengers/PassengersSignup';
import Login from '../pages/auth/Login/Login';
import { DriverSignup } from '../pages/auth/driverSignup/DriverSignup';
import ActivateAccount from '../pages/auth/ActivateAccount';
import Dashboard from '../pages/dashboard';
import CheckEmailFile from '../pages/auth/Passengers/CheckEmailFile';
import MainPage from '../components/mainpage/MainPage';
import LookingFor from '../components/luggagesparts/LookingFor';
import PickRide from '../components/PickRide';
import Cancelled from '../components/luggagesparts/Cancelled';
import DriverCall from '../components/driverCall/DriverCall';
import Setting from '../components/personalProfile/Setting';
import Password from '../components/personalProfile/Password';
import Luggage from '../components/luggagesparts/Luggage';
import Bidder from '../components/bidders/Bidders';
import EditProfile from '../components/personalProfile/EditProfile';
import DashboardHome from '../pages/dashboard/DashboardHome';
import PassengerDashboardIndex from '../pages/dashboard/passenger';
import ViewBookings from '../components/Bookings/ViewBookings';
import DriverBoard from '../components/driverDashboardFolders/DriverBoard';
import DataStatus from '../components/driverDashboardFolders/DataStatus';
import { SignupOptions } from '../pages/auth/SignupOptions/SignupOptions';
import { RegisterDriver } from "../pages/auth/driverSignup/DriverSignup"


import { DriverKycPage } from '../pages/auth/DriverKYC/DriverKyc';
import { ForgotPassword } from '../pages/auth/Passengers/ForgotPassword';
import { ResetPassword } from '../pages/auth/Passengers/ResetPassword';
import NotFoundPage from '../ui/NotFoundPage';
import DriverView from '../components/DashboardForDrivers/DriverView';
import Profile from '../uI/Profile';
import ProfilePage from '../uI/ProfilePage';
// import NotificationsPage from '../uI/NotificationPage';
// import { DriverDashboard } from '../pages/dashboard/driver/DriverDashboard';
import { Rides } from '../pages/dashboard/passenger/Rides';
import { PassengerProfile } from '../pages/dashboard/passenger/PassengerProfile';
import Support from '../pages/dashboard/passenger/Support';
import { useRecoilValue } from 'recoil';
import { userAtom } from '../components/atoms/userAtom';
import { DriverDashboardIndex } from '../pages/dashboard/driver';
import { Earnings } from '../pages/dashboard/driver/Earnings';
import { Trips } from '../pages/dashboard/driver/Trips';
import DriverProfile from '../pages/dashboard/driver/DriverProfile';
import { Requests } from '../pages/dashboard/driver/Requests';
import ProtectedRoutes from './ProtectedRoutes';
// import Notifications from '../uI/Notifications';
import Notifications from "../ui/Notifications"
import {NotificationsPage} from "../ui/NotificationPage"
// import { NotificationsPage } from '../uI/NotificationPage';




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
      <Route path="/Dri-verify" element={<DriVerify />} />
      <Route path="/Driv-upload" element={<DrivUpload />} />
      <Route path="/Driv-place" element={<DrivPlace />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/notification" element={<NotificationsPage />} />
  
      
      <Route path="/Check-email" element={<CheckEmailFile />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/Bidder" element={<Bidder />} />
      <Route path="/mainpage" element={<MainPage />} />
      <Route path="/Luggage" element={<Luggage />} />
      <Route path="/LookingFor" element={<LookingFor />} />
      <Route path="/Cancelled" element={<Cancelled />} />
      <Route path="/DriverCall" element={<DriverCall />} />
      <Route path="/Password" element={<Password />} />
      <Route path="/drivers" element={<DriverBoard />} />
      <Route path="/rides" element={<DataStatus />} />
      <Route path="/views" element={<DriverView />} />
      <Route path="/driver-profile" element={<ProfilePage />} />
      <Route path="/user-profile" element={<Profile />} />
      

      {/* Dashboard Route */}
      <Route path="/dashboard" element={<DashboardHome />}> 
        <Route index element={user?.role === "passenger" ? 
        <PassengerDashboardIndex/> : 
        <DriverDashboardIndex/>
         }
         />
        <Route path="my-bookings" element={<ViewBookings/>} />
        <Route path="edit-profile" element={<EditProfile />} />
        <Route path="settings" element={<Setting />} />

          <Route path="luggage" element={<Luggage />} />
          <Route path="looking-for" element={<LookingFor />} />
          <Route path="pick-ride" element={<PickRide />} />
          <Route path="cancelled" element={<Cancelled />} />
          <Route path="bidder" element={<Bidder />} />
          <Route path="driver-call" element={<DriverCall />} />

          {/* New Passenger Routes */}
          <Route path="rides" element={<Rides />} />
          <Route path="profile" element={
            user?.role === "passenger" ?
              <PassengerProfile /> :
              <DriverProfile />}
          />
          <Route path="support" element={<Support />} />

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