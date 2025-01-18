import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/landingPage/Home';
import DriverLogin from './pages/auth/DriverLogin/Driverlogin';
import DriverSign from './pages/auth/DriverSign/DriverSign';
import Option from './pages/SignupOption/Option';
import Register from './pages/auth/Register';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/DriverLogin" element={<DriverLogin />} />
        <Route path="/DriverSign" element={<DriverSign />} />
        <Route path="/SignupOption" element={<Option />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
      {/* <Option /> */}
    </Router>
    
  );
};

export default App;
