import React, { useState } from 'react';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import Option from '../SignupOption/Option';

const Home = () => {
  const [active, setActive] = useState(false);
  const navigate = useNavigate();

  const handleDriversignup = () => {
    navigate('/DriverSign');
  };

  const handleDriverlogin = () => {
    navigate('/DriverLogin');
  };

  return (
    <div className='text-center uppercase border border-red-900 p-4'>
      Welcome to Ease Drive
      <p>this is how we started</p>

      <Footer />
      <main className='h-16 w-[50%] mx-10 flex border border-red-600 items-center justify-around'>
        <button
          className='h-10 w-20 text-white bg-blue-500'
          onClick={handleDriversignup}
        >
          SignUp
        </button>
        <button
          className='h-10 w-20 text-white bg-green-500'
          onClick={handleDriverlogin}
        >
          LogIn
        </button>
      </main>
      <Option />
    </div>
  );
};

export default Home;
