

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
import SetRoutes from '../components/yourRoute/SetRoutes';
import ViewBookings from '../components/Bookings/ViewBookings';
import DriverBoard from '../components/driverDashboardFolders/DriverBoard';
import DataStatus from '../components/driverDashboardFolders/DataStatus';
import { SignupOptions} from '../pages/auth/SignupOptions/SignupOptions';
import {RegisterDriver} from "../pages/auth/driverSignup/DriverSignup"


import { DriverKycPage } from '../pages/auth/DriverKYC/DriverKyc';
import { ForgotPassword } from '../pages/auth/Passengers/ForgotPassword';
import { ResetPassword } from '../pages/auth/Passengers/ResetPassword';
import NotFoundPage from '../ui/NotFoundPage';
import NotificationsPage from '../ui/NotificationPage';
import DriverView from '../components/ui/DriverView';




const IndexRoute = () => {
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
      <Route path="/notify" element={<NotificationsPage />} />
  
      
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
      {/* <Route path="/driver-profile" element={<ProfilePage/>} /> */}
      

      {/* Dashboard Route */}
      <Route path="/dashboard" element={<DashboardHome />}> 
        <Route index element={<PassengerDashboardIndex/>} />
        <Route path="my-bookings" element={<ViewBookings/>} />
        <Route path="edit-profile" element={<EditProfile />} />
        <Route path="settings" element={<Setting />} />
        <Route path="set-routes" element={<SetRoutes />} />
        <Route path="luggage" element={<Luggage />} />
        <Route path="looking-for" element={<LookingFor />} />
        <Route path="pick-ride" element={<PickRide />} />
        <Route path="cancelled" element={<Cancelled />} />
        <Route path="bidder" element={<Bidder />} />
        <Route path="driver-call" element={<DriverCall />} />
      </Route>


      {/* Not found */}
      <Route path="*" element={<NotFoundPage />} />

    </Routes>
    </Router>
  )
}

export default IndexRoute