import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/landingPage/Home';
import DriverLogin from './pages/auth/DriverLogin/Driverlogin';
import DriverSign from './pages/auth/DriverSign/DriverSign';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/DriverLogin" element={<DriverLogin />} />
        <Route path="/DriverSign" element={<DriverSign />} />
      </Routes>
    </Router>
  );
};

export default App;
