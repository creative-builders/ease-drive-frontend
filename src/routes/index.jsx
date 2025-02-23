

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/landingPage/Home';
import Options from '../pages/auth/SignupOptions/Options';
import DriVerify from '../pages/auth/Drivers/DriVerify';
import DrivUpload from '../pages/auth/Drivers/DrivUpload';
import DrivPlace from '../pages/auth/Drivers/DrivPlace';
import PassengersSignup from '../pages/auth/Passengers/PassengersSignup';
import Login from '../pages/auth/Login/Login';
import DriverSignup from '../pages/auth/Drivers/DriverSignup';
import { ForgotPassword } from '../pages/auth/Passengers/ForgotPassword';
import { Otp } from '../pages/auth/Passengers/Otp';
import { ChangePassword } from '../pages/auth/Passengers/ChangePassword';






const IndexRoute = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup-as" element={<Options />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/PassengersSignup" element={<PassengersSignup />} />
      <Route path="/driverSignup" element={<DriverSignup />} />
      <Route path="/DriVerify" element={<DriVerify />} />
      <Route path="/DrivUpload" element={<DrivUpload />} />
      <Route path="/DrivPlace" element={<DrivPlace />} />
      <Route path="/ForgotPassword" element={<ForgotPassword />} />
      <Route path="/Otp" element={<Otp />} />
      <Route path="/ChangePassword" element={<ChangePassword />} />
    </Routes>
    </Router>
  )
}

export default IndexRoute