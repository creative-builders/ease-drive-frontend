import React, { useState } from 'react';
import sideImage from '../../../assets/images/sideImage.png';
 import carImage from '../../../assets/images/car.svg'
  import { Link, useNavigate } from "react-router-dom";
  import { FiEye, FiEyeOff } from "react-icons/fi";
  import passlock from "../../../assets/icons/lock-password (1).svg"
 import { useSetRecoilState } from "recoil";
  import { useMutation } from "@tanstack/react-query";
 import toast from "react-hot-toast";
 import { loginAuth } from "../../../store/auth/general/api";
 import iconEmail from "../../../assets/icons/mail-at-sign-01.svg"
 import iconPhone from "../../../assets/icons/call-02.svg"
import CustomButton from '../../../components/CustomButton';
import GoogleAuthV3 from '../../../components/GoogleAuthV3';
import { userAtom } from '../../../components/atoms/userAtom';
import LoadingSpinner from '../../../components/LoadingSpinner';
import FormInput from '../../../components/forms/FormInput';
 
 
 const DriverLogin = () => {

   const [Email, setEmail] = useState('');
   const [Phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate =  useNavigate();
    const setUser = useSetRecoilState(userAtom);
    const [isFormValid, setIsFormValid] = useState(false);
   

      const { mutate:submitLogin, isLoading } = useMutation(loginAuth, {
        
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
     <div className="min-h-screen bg-[rgba(255, 255, 255, 1)]">
       <div className="w-full flex mx-auto xl:w-10/12 px-2 py-4">
         {/* Left Section - Login Form */}
         <div className="w-full md:w-1/2 flex flex-col justify-center p-6 lg:p-8">
           <div className="flex flex-row gap-0 md:gap-3 items-center mb-4">
              <span className="h-12 md:h-14 w-12 md:w-16 flex items-center justify-center ">
                <img src={carImage} className='w-[33px] md:w-[65px] h-[30px] md:h-[59px]' alt="Ease Drive Logo" />
              </span>
              <h1 className="font-[inter] font-extrabold text-[18px] md:text-4xl italic leading-[100%] tracking-normal">Ease Drive</h1>
            </div>
 
           <div className='flex flex-col items-left justify-center mb-6'>
              <h2 className="font-[inter] text-[18px] md:text-[26px] leading-[36px] tracking-normal align-middle font-bold text-gray-800">Login</h2>
              {/* <p className='font-[inter] font-medium text-[12px] md:text-[18px] leading-[140%] tracking-normal align-middle'>Please enter your details to get started</p> */}
           </div>
 
           <form onSubmit={handleSubmit} className=''>

             <FormInput
                label="Your Email"
                id="email"
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your full email"
                required
                inputClassName = "indent-4 flex items-center justify-center"
                leftIcon={<img src={iconEmail} className="h-[18px] md:h-8 w-[18px] md:w-8" alt="" />}
              />

              <FormInput
                label="Enter Password"
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                inputClassName = "indent-4 flex items-center justify-center"
                leftIcon={<img src={passlock} className="h-[18px] md:h-8 w-[18px] md:w-8" alt="" />}
                rightIcon={
                  <span
                    className="cursor-pointer"
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                  </span>
                }
              />

             <Link to={''}>
              <CustomButton
                type="submit"
                name="Log in"
                isLoading={isLoading}
                className={`inline-block mb-8 w-full p-3 mt-8 rounded-md transition-all duration-300 
                ${ isFormValid ? "bg-green-700 hover:bg-green-700" : "bg-green-200 cursor-not-allowed"}`
                }
              disabled={!isFormValid}
              >
               <span className="text-bold text-base text-white flex items-center justify-center">
                  {isLoading ? <LoadingSpinner className="animate-spin" /> : "Create account"}
                </span>
              </CustomButton>
             </Link>
             
           </form>
 
           <div className="flex justify-between text-sm mt-2">
             <p className="font-[inter] font-medium text-[10px] sm:text-[14px] leading-[150%] tracking-normal align-middle">
               Don't have an account?{''}
               <Link to={'/driver-create'} className='text-green-600 hover:underlinefont-[inter] font-medium text-[10px] sm:text-[14px] leading-[150%] tracking-normal align-middle'>
                  Create one
               </Link>
             </p>
             <Link to={'/driver-password'} className='text-green-600 font-[inter] font-medium text-[10px] sm:text-[14px] leading-[150%] tracking-normal align-middle'>
               forget password
             </Link>
           </div>
 
           <div className="flex items-center my-4">
             <div className="flex-grow border-t border-gray-600"></div>
             <span className="flex-shrink mx-4 text-gray-600">Or</span>
             <div className="flex-grow border-t border-gray-600"></div>
           </div>
 
           <div className="flex justify-center mb-16 p-4 ">
                 <GoogleAuthV3/>                    
             </div>
         </div>
 
         {/* Right Section - Image */}
            <div className="h-[623px] w-[528px] ml-12 mt-2 hidden md:flex">
                <img
                    src={sideImage}
                    alt="Campus shuttle"
                    className="rounded-[45px] w-full object-cover"
                />
            </div>
       </div>
     </div>
   );
 };
 
 export default DriverLogin;