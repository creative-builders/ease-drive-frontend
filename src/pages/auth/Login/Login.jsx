
import React, { useState } from 'react';
import carImage from '../../../assets/images/Car.svg'
import sideImage from '../../../assets/images/image.svg'
import CustomButton from '../../../components/CustomButton'
import GoogleAuthV3 from "../../../components/GoogleAuthV3";
 import { Link, useNavigate } from "react-router-dom";
 import { FiEye, FiEyeOff } from "react-icons/fi";
 import passlock from "../../../assets/icons/lock-password (1).svg"
 import profilelock from "../../../assets/icons/user-03 (1).svg"
 import { userAtom } from "../../../components/atoms/userAtom";
import { useSetRecoilState } from "recoil";
 import { useMutation } from "@tanstack/react-query";
import LoadingSpinner from "../../../components/LoadingSpinner";
import toast from "react-hot-toast";
import { loginAuth } from "../../../store/auth/general/api";


const Login = () => {
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
   const [togglePassword, setTogglePassword] = useState(false);
    const navigate =  useNavigate();
    const setUser = useSetRecoilState(userAtom);
    const [isFormValid, setIsFormValid] = useState(false);
    const [inputs, setInputs] = useState({
        email:"",
        password:""
    })

    const { mutate:submitLogin, isLoading } = useMutation(loginAuth, {
        onSuccess: (response) => {
        toast.success(response?.message);
        console.log(response.data)
        localStorage.setItem("current_user",JSON.stringify(response.data));
        setUser(response.data);
        navigate("/dashboard");
        setInputs( prev => ({
        ...prev,
        email:"",
        password:""
        }))

        },
        onError : (error) => {
        toast.error(error.response.data.message || error.message)
        }
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        submitLogin(inputs)

    };

  
   const handleTogglePassword = () => {
        setTogglePassword((prev) => !prev);
    };

  return (
    <div className="min-h-screen bg-gray-500">
      <div className="w-11/12 flex mx-auto xl:w-10/12 px-2 py-4">
        {/* Left Section - Login Form */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <div className="flex items-center mb-6">
            <img src={carImage} alt="Car Icon" className="h-8 w-8 mr-2" /> {/* Assuming you have a car-icon.png in your public folder */}
            <h1 className="text-3xl font-bold text-black">Ease Drive</h1>
          </div>

          <h2 className="text-xl font-semibold text-gray-800 mb-6">Sign up as</h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="fullName" className="block text-gray-700 text-sm font-medium mb-2">
                Full Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="fullName"
                  className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Enter your full name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                
                   <img src={profilelock} className="h-5 w-5 text-gray-400" alt="" />
                </span>
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-2">
                Enter Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  className="w-full px-4 py-2 pl-10 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                     <img src={passlock} className="w-5 h-5 text-gray-600" alt="" />
                </span>
                <span
                  className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                   <span 
                        onClick={handleTogglePassword}
                        className="inline-block absolute right-4 top-[20%] cursor-pointer translate-y-1/4">
                        {togglePassword ? <FiEyeOff fontSize={"18"}/> : <FiEye fontSize={"18"}/>} 
                    </span>
                </span>
              </div>
             
            </div>
            <CustomButton
                type="submit"
                // className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition duration-300 text-lg font-semibold"
                name="Log in"
                isLoading={isLoading}
                className={`inline-block mb-8 w-full p-3 rounded-md transition-all duration-300 
                    ${ isFormValid ? "bg-green-300 hover:bg-green-700" : "bg-green-200 cursor-not-allowed"}`
                    }
                disabled={!isFormValid}
            >
              <span className="text-bold text-base text-white flex items-center justify-center">
                    {isLoading ? <LoadingSpinner className="animate-spin" /> : "Login to EaseDrive"}
                </span>
            </CustomButton>
            
          </form>

          <div className="flex justify-between text-sm mt-4">
            <p className="text-gray-700">
              Don't have an account?{' '}
              <Link to={''} className='text-green-600 hover:underline font-medium'>
                 Create one
              </Link>
              
            </p>
            <Link to={''} className='text-green-600 hover:underline font-medium'>
                Forgot Password?
            </Link>
           
          </div>

          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-600"></div>
            <span className="flex-shrink mx-4 text-gray-600">Or</span>
            <div className="flex-grow border-t border-gray-600"></div>
          </div>

          <div className="flex justify-center mb-16 p-4 ">
                <GoogleAuthV3/>                    
            </div>
        </div>

        {/* Right Section - Image */}
        <div className="hidden md:block md:w-1/2">
          <img
            src={sideImage} 
            alt="Public Transport"
            className="w-full h-full object-contain rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
