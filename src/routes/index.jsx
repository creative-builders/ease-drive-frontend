

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/landingPage/Home';
import Options from '../pages/auth/SignupOptions/Options';
import DriVerify from '../pages/auth/Drivers/DriVerify';
import DrivUpload from '../pages/auth/Drivers/DrivUpload';
import DrivPlace from '../pages/auth/Drivers/DrivPlace';
import PassengersSignup from '../pages/auth/Passengers/PassengersSignup';
import Login from '../pages/auth/Login/Login';
import DriverSignup from '../pages/auth/Drivers/Driver-signup';
import { ForgotPassword } from '../pages/auth/Passengers/Forgot-password';
import { Otp } from '../pages/auth/Passengers/Otp';
import { ChangePassword } from '../pages/auth/Passengers/Change-password';
import ActivateAccount from '../pages/auth/ActivateAccount';
import Dashboard from '../pages/dashboard';
import BidCard from '../components/bid/BidCard';
import CarChoice from '../components/CarChoice';
import LocationPopUp from '../components/location/LocationPopUp';
import TestingComponent from '../pages/dashboard/TestingCompent';
import MainPage from '../components/mainpage/MainPage';
import Page from '../components/yourRoute/page';
import Luggage from '../components/luggagesparts/luggage';
import LookingFor from '../components/luggagesparts/LookingFor';
import PickRide from '../components/PickRide';
import Cancelled from '../components/luggagesparts/Cancelled';
import DriverCall from '../components/driverCall/DriverCall';
import EditProfile from '../components/personalProfile/EditProfile';
import Setting from '../components/personalProfile/Setting';
import Password from '../components/personalProfile/Password';
// import Header from '../layout/dashboard/header/Header';






const IndexRoute = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup-as" element={<Options />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/activate" element={<ActivateAccount/>} />
      <Route path="/passengers-signup" element={<PassengersSignup />} />
      <Route path="/driver-signup" element={<DriverSignup />} />
      <Route path="/DriVerify" element={<DriVerify />} />
      <Route path="/DrivUpload" element={<DrivUpload />} />
      <Route path="/DrivPlace" element={<DrivPlace />} />
      <Route path="/Forgot-password" element={<ForgotPassword />} />
      <Route path="/Otp" element={<Otp />} />
      <Route path="/Change-password" element={<ChangePassword />} />
      <Route path="/cars" element={<CarChoice />} />
      <Route path="/LocationPopUp" element={<LocationPopUp />} />
      <Route path="/mainpage" element={<MainPage />} />
      <Route path="/page" element={<Page />} />
      <Route path="/Luggage" element={<Luggage />} />
      <Route path="/LookingFor" element={<LookingFor />} />
      <Route path="/PickRide" element={<PickRide />} />
      <Route path="/Cancelled" element={<Cancelled />} />
      <Route path="/DriverCall" element={<DriverCall />} />
      <Route path="/EditProfile" element={<EditProfile />} />
      <Route path="/Setting" element={<Setting />} />
      <Route path="/Password" element={<Password />} />
      

      {/* Dashboard Route */}
      <Route path="/dashboard" element={<Dashboard/>} > 
       <Route path="testing"  element={<TestingComponent/>}/>
       {/* <Route path="header"  element={<Header/>}/> */}
      </Route>
    </Routes>
    </Router>
  )
}

export default IndexRoute