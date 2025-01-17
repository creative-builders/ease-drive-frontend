import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/landingPage/Home';
import DriverLogin from './pages/auth/DriverLogin/Driverlogin';
import DriverSign from './pages/auth/DriverSign/DriverSign';
// import Option from './pages/SignupOption/Option';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/DriverLogin" element={<DriverLogin />} />
        <Route path="/DriverSign" element={<DriverSign />} />
      </Routes>
      {/* <Option /> */}
    </Router>
    
  );
};

export default App;
