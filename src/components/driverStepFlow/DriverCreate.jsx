import React, { useState } from 'react';
import sideImage from '../../assets/images/sideImage.png';
import carImage from '../../assets/images/car.svg'
import CustomButton from '../CustomButton'
import GoogleAuthV3 from "../GoogleAuthV3";
import { Link, useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import passlock from "../../assets/icons/lock-password (1).svg"
import profilelock from "../../assets/icons/user-03 (1).svg"
import { userAtom } from "../atoms/userAtom";
import { useSetRecoilState } from "recoil";
import { useMutation } from "@tanstack/react-query";
import LoadingSpinner from "../LoadingSpinner";
import toast from "react-hot-toast";
import { loginAuth } from "../../store/auth/general/api";
import iconEmail from "../../assets/icons/mail-at-sign-01.svg"
import iconPhone from "../../assets/icons/call-02.svg"
import { FiChevronDown } from "react-icons/fi";
import iconCity from "../../assets/icons/city-02.svg"
import FormInput from '../forms/FormInput';
import CustomSelect from '../forms/CustomSelect';
import arrowDown from "../../assets/icons/arrow-down-01.svg"
 
 
 const DriverCreate = () => {

   const [fullName, setFullName] = useState('');
   const [Email, setEmail] = useState('');
   const [Phone, setPhone] = useState('');
   const [City, setCity] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [togglePassword, setTogglePassword] = useState(false);
    const navigate =  useNavigate();
    const setUser = useSetRecoilState(userAtom);
    const [isFormValid, setIsFormValid] = useState(false);
    // const [inputs, setInputs] = useState({
    //     email:"",
    //     password:""
    // })

      const { mutate:submitLogin, isLoading } = useMutation(loginAuth, {
        onSuccess: (response) => {
        toast.success(response?.message);
        console.log(response.data)
        localStorage.setItem("current_user",JSON.stringify(response.data));
        setUser(response.data);
        navigate("/driver-signup");
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

         const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
   return (
     <div className="min-h-screen bg-[rgba(255, 255, 255, 1)]">
       <div className="w-full flex mx-auto xl:w-10/12 px-2 py-4">
         {/* Left Section - Login Form */}
         <div className="w-full md:w-1/2 flex flex-col justify-center p-6 lg:p-8">
           <div className="flex flex-row gap-0 md:gap-3 items-center">
              <span className="h-12 md:h-14 w-12 md:w-16 flex items-center justify-center ">
                <img src={carImage} className='w-[33px] md:w-[65px] h-[30px] md:h-[59px]' alt="Ease Drive Logo" />
              </span>
              <h1 className="font-[inter] font-extrabold text-[18px] md:text-4xl italic leading-[100%] tracking-normal">Ease Drive</h1>
            </div>
 
           <div className='flex flex-col items-left justify-center mb-6'>
              <h2 className="font-[inter] text-[18px] md:text-[26px] leading-[36px] tracking-normal align-middle font-bold text-gray-800">Create an account</h2>
              <p className='font-[inter] font-medium text-[12px] md:text-[18px] leading-[140%] tracking-normal align-middle'>Please enter your details to get started</p>
           </div>
 
           <form onSubmit={handleSubmit} className=''>

             <FormInput
                label="Full Name"
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Enter your full name"
                required
                inputClassName = "indent-4 flex items-center justify-center"
                leftIcon={<img src={profilelock} className="h-[18px] md:h-8 w-[18px] md:w-8" alt="" />}
              />

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

             <FormInput
                label="Phone Number"
                id="phone"
                value={Phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter your phone number"
                required
                inputClassName = "indent-4 flex items-center justify-center"
                leftIcon={<img src={iconPhone} className="h-[18px] md:h-8 w-[18px] md:w-8" alt="" />}
              />

              <CustomSelect
                label="City"
                value={City}
                onChange={(e) => setCity(e.target.value)}
                leftIcon={<img src={iconCity} className="h-[18px] md:h-8 w-[18px] md:w-8" alt="" />}
                rightIcon={arrowDown}
                options={["Enugu", "Ebonyi", "Imo", "Calabar"]}
                // isRounded
                placeholder="Select a city"
                selectClassName="indent-4"
              />
              
             <Link to={'/driver-signup'}>
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
             <p className="font-[inter] font-medium text-[14px] leading-[150%] tracking-normal align-middle">
               Already have an account?{' '}
               <Link to={'/driver-password'} className='text-green-600 hover:underlinefont-[inter] font-medium text-[14px] leading-[150%] tracking-normal align-middle'>
                  Login
               </Link>
               
             </p>
            
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
          <div className="h-[881px] w-[528px] ml-12 mt-2 hidden md:flex">
            <img
              src={sideImage}
              alt="Public Transport"
              className="rounded-[45px] w-full object-cover"
            />
          </div>
       </div>
     </div>
   );
 };
 
 export default DriverCreate;




