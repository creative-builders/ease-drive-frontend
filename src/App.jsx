import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/landingPage/Home';
import Option from './pages/SignupOption/Option';
import Register from './pages/auth/Register';
import PassengersLogin from './pages/auth/PassengersLogin';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignupOption" element={<Option />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/passenger-login" element={<PassengersLogin />} />
      </Routes>
      {/* <Option /> */}
    </Router>
    
  );
};

export default App;
