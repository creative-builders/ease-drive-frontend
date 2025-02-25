

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/landingPage/Home';
import Options from '../pages/auth/SignupOptions/Options';
import Signupd from '../pages/auth/Drivers/Signupd';
import DriVerify from '../pages/auth/Drivers/DriVerify';
import DrivUpload from '../pages/auth/Drivers/DrivUpload';
import DrivPlace from '../pages/auth/Drivers/DrivPlace';
import PassengersSignup from '../pages/auth/Passengers/PassengersSignup';
import Login from '../pages/auth/Login/Login';






const IndexRoute = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup-as" element={<Options />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/passenger-signup" element={<PassengersSignup />} />
      <Route path="/driver-signup" element={<Signupd />} />
      <Route path="/DriVerify" element={<DriVerify />} />
      <Route path="/DrivUpload" element={<DrivUpload />} />
      <Route path="/DrivPlace" element={<DrivPlace />} />
    </Routes>
    </Router>
  )
}

export default IndexRoute