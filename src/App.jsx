import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/landingPage/Home';
import Option from './pages/SignupOption/Option';
import Signup from './pages/auth/passengers/Signup';
import Login from './pages/auth/passengers/Login';
import Signupd from './pages/auth/Drivers/Signupd'
import DriVerify from './pages/auth/Drivers/DriVerify';
import DrivUpload from './pages/auth/Drivers/DrivUpload';
import DrivPlace from './pages/auth/Drivers/DrivPlace';

const App = () => {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignupOption" element={<Option />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signupd" element={<Signupd />} />
        <Route path="/DriVerify" element={<DriVerify />} />
        <Route path="/DrivUpload" element={<DrivUpload />} />
        <Route path="/DrivPlace" element={<DrivPlace />} />
      </Routes>
      {/* <Option /> */}
    </Router>
    
  );
};

export default App;
