import React from 'react';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='text-center uppercase border border-red-900 p-4'>
      Welcome to Ease Drive
      <p>this is how we started</p>

      <Footer />
      <main className='h-16 w-3/5 mx-10 flex border border-red-600 items-center justify-around'>
        <Link
          to='/Signupd'
          className='h-10 w-20 text-white bg-blue-500 flex items-center justify-center'
        >
          SignUp
        </Link>
        <Link
          to='/DriVerify'
          className='h-10 w-20 text-white bg-green-500 flex items-center justify-center'
        >
          LogIn
        </Link>
        <Link
          to='/SignupOption'
          className='h-10 w-20 text-white bg-red-500 flex items-center justify-center'
        >
          Option
        </Link>
        <Link
          to='/Signup'
          className='h-10 w-20 text-white bg-purple-900 flex items-center justify-center'
        >
          Register
        </Link>
        <Link
          to='/DrivPlace'
          className='h-10 w-20 text-white bg-purple-900 flex items-center justify-center'
        >
          Place
        </Link>
      </main>
    </div>
  );
};

export default Home;
