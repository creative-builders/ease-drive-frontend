

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
import BidCard from '../components/BidCard';
import CarChoice from '../components/CarChoice';






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

      {/* Dashboard Route */}
      <Route path="/dashboard" element={<Dashboard/>} />
    </Routes>
    </Router>
  )
}

export default IndexRoute