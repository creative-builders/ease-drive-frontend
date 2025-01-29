import React, { useState } from 'react';
import google from '/Google-icon.png';
import MobilePic from '/Rectangle.png';

const Login = () => {
  const [formData, setFormData] = useState({
    password: '',
    Confirmpassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  return (
    <div className="h-fit md:h-screen w-full flex flex-col md:flex-row relative">
      <nav className="law h-24 w-full flex items-center justify-evenly md:justify-around flex-wrap absolute top-0 z-50">
        <p className="text-white text-2xl font-semibold">EaseDrive</p>
        <ul className="h-14 w-72 md:w-96 flex items-center md:justify-evenly flex-wrap">
          <p>Already have an account</p>
          <button className="border border-green-900 h-10 w-20 md:w-24 cursor-pointer rounded-xl text-green-600">
            Login
          </button>
        </ul>
      </nav>

      <div className="carPicture h-[70vh] md:h-full w-1/2 bg-red-300 relative">
        <img
          className="w-full h-full object-cover object-bottom absolute"
          src={MobilePic}
          alt=""
        />
        <div className="relative w-full h-full z-50 flex items-end justify-center pb-20">
          <p className="text-white text-4xl font-bold">
            Escape the usual <br className="hidden md:block" /> struggle of public buses.
          </p>
        </div>
      </div>

      {/* Form */}
      <div className="form h-full w-1/2 bg-gray-300 p-3 md:p-0 relative">
        <main className="h-fit w-full md:w-4/5 bg-white rounded-xl mx-auto mt-20 px-5 py-3 flex flex-col gap-4 items-center justify-around">
          <h2 className="font-bold">Let's get Started</h2>
          <p className="text-center">
            Enter your name, phone number and email address, and we 'll send a 4-digit
            code to confirm it
          </p>
          <form
            action=""
            className="form h-fit w-full flex flex-col items-center justify-around relative gap-2"
          >
            <label
              className="ml-[-80%] md:translate-x-[-250%]"
              htmlFor="password"
            >
              Password
            </label>
            <div className="h-10 w-full rounded indent-2 outline-none flex items-center gap-2 bg-gray-200">
              <input
                className="h-10 w-[90%] bg-transparent indent-2 outline-none text-black"
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                id="password"
              />
              <i
                className={`fa ${
                  showPassword ? 'fa-eye-slash' : 'fa-eye'
                } text-black opacity-50 cursor-pointer`}
                aria-hidden="true"
                onClick={togglePasswordVisibility}
              ></i>
            </div>
            <label
              className="ml-[-60%] md:translate-x-[-105%]"
              htmlFor="Confirmpassword"
            >
              Confirm Password
            </label>
            <div className="h-10 w-full rounded indent-2 outline-none flex items-center gap-2 bg-gray-200">
              <input
                className="h-10 w-[90%] bg-transparent indent-2 outline-none text-black"
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder="Confirm Password"
                name="Confirmpassword"
                value={formData.Confirmpassword}
                onChange={handleChange}
                id="Confirmpassword"
              />
              <i
                className={`fa ${
                  showConfirmPassword ? 'fa-eye-slash' : 'fa-eye'
                } text-black opacity-50 cursor-pointer`}
                aria-hidden="true"
                onClick={toggleConfirmPasswordVisibility}
              ></i>
            </div>
            <button className="h-39 w-91 bg-green-600 text-white cursor-pointer rounded-lg mt-4">
              Continue
            </button>
            <div className="line h-[20px] w-91 flex justify-around items-center">
              <span className="h-1 border-b-2 w-[180px] border-black"></span> Or{' '}
              <span className="h-1 border-b-2 w-[180px] border-black"></span>
            </div>
            <button className="h-39 w-91 bg-gray-300 text-black cursor-pointer rounded-lg relative">
              <aside className="translate-x-[-150%] h-5 md:h-6 w-8 absolute left-24">
                <img
                  className="object-contain h-full w-full"
                  src={google}
                  alt=""
                />
              </aside>
              Continue with Google
            </button>
          </form>
        </main>
      </div>
    </div>
  );
};

export default Login;
