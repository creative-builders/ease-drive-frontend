import React, { useState, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
import sideImage from '../../assets/images/sideImage.png';
import carImage from '../../assets/images/car.svg'
import CustomButton from '../CustomButton'
import { Link, useNavigate } from "react-router-dom";
import LoadingSpinner from "../LoadingSpinner";
import iconEmail from "../../assets/icons/mail-at-sign-01.svg"
import FormInput from '../forms/FormInput';
import cancel from '../../assets/icons/cancel.svg'
import eamilIcon from '../../assets/icons/check-email-icon.svg'
 
 
 const DriverForgetPass = () => {

   const [Email, setEmail] = useState('');
   const [isFormValid, setIsFormValid] = useState(false);
   
 const [showModal, setShowModal] = useState(false);
//   const navigate = useNavigate();

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
//   const handleContinue = () => navigate('/driver-login');
     

    const handleSubmit = (e) => {
        e.preventDefault();
        submitLogin(inputs)

    };

   return (
     <div className="min-h-screen bg-[rgba(255, 255, 255, 1)]">
       <div className="w-full flex mx-auto xl:w-10/12 px-2 py-4">
         {/* Left Section - Login Form */}
         <div className="w-full md:w-1/2 flex flex-col justify-center p-6 lg:p-8 gap-4">
                <div className="flex flex-row gap-0 md:gap-3 items-center">
                    <span className="h-12 md:h-14 w-12 md:w-16 flex items-center justify-center ">
                        <img src={carImage} className='w-[33px] md:w-[65px] h-[30px] md:h-[59px]' alt="Ease Drive Logo" />
                    </span>
                    <h1 className="font-[inter] font-extrabold text-[18px] md:text-4xl italic leading-[100%] tracking-normal">Ease Drive</h1>
                </div>
    
                <div className='flex flex-col items-left justify-center mb-6'>
                    <h2 className="font-[inter] text-[18px] md:text-[26px] leading-[36px] tracking-normal align-middle font-bold">Forgot Password</h2>
                    <p className='font-[inter] font-medium text-[12px] md:text-[18px] leading-[100%] tracking-normal align-middle'>Enter your email and we'll send you verification code to reset your password</p>
                </div>
    
                <form onSubmit={handleSubmit} className=''>

                    <FormInput
                        label="Your Email"
                        id="email"
                        value={Email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your full email"
                        required
                        inputClassName="indent-3 mt-4 flex items-center justify-center"
                        leftIcon={<img src={iconEmail} className="h-[18px] md:h-8 w-[18px] md:w-8" alt="" />}
                    />
                
                    {/* <Link to={'/driver-signup'}>
                        <CustomButton
                            type="submit"
                            name="Log in"
                        
                            className={`inline-block mb-8 w-full p-3 mt-8 rounded-md transition-all duration-300 
                            ${ isFormValid ? "bg-green-700 hover:bg-green-700" : "bg-green-200 cursor-not-allowed"}`
                            }
                        disabled={!isFormValid}
                        >
                        <span className="text-bold text-base text-white flex items-center justify-center">
                            Send
                            </span>
                        </CustomButton>
                    </Link> */}
                    <button 
                        onClick={handleOpenModal}
                        className="w-full py-3 bg-green-600 text-white mt-4 rounded-lg font-semibold"
                    >
                        Send
                    </button>
                </form>
    
                <div className="flex justify-between text-sm mt-2">
                    <p className="font-[inter] font-medium text-[14px] leading-[150%] tracking-normal align-middle">
                    Already have an account?{' '}
                    <Link to={'/driver-login'} className='text-green-600 hover:underlinefont-[inter] font-medium text-[14px] leading-[150%] tracking-normal align-middle'>
                        Login
                    </Link>
                    </p>
                </div>
          </div>
 
            {/* Right Section - Image */}
            
            <div className="w-full md:w-1/2 hidden md:flex items-center justify-center p-6">
                <img
                    src={sideImage}
                    alt="Driver"
                    className="rounded-[45px] object-cover w-full h-auto"
                />
            </div>
       </div>

       {/* modal section */}
        
        {showModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
            <div className="h-72 flex text-center relative flex-col items-center justify-around gap-2 px-3 py-8 w-4/5 md:max-w-md bg-white rounded-[32px]">
            {/* Cancel Icon */}
            <img
                src={cancel}
                className="absolute top-4 right-4 h-4 w-4 cursor-pointer"
                alt="Close"
                onClick={handleCloseModal}
            />

            {/* Modal Content */}
            <div className="h-fit w-52 flex flex-col items-center justify-center">
                <img src={eamilIcon} className="h-16 w-16" alt="Fly icon" />
                <p className="font-[inter] font-semibold text-[14px] md:text-2xl leading-[100%] tracking-normal">
                Check your email
                </p>
            </div>

            <p className="font-[inter] font-medium text-[12px] md:text-base leading-[100%] tracking-normal text-center">
                We’ve sent a verification link to johnchukweuemeka@gmail.com, kindly click on it to continue
            </p>

            {/* Continue Button */}
            <p className='font-[inter] font-medium text-[18px] leading-[150%] tracking-normal align-middle'>
                <span className='font-[inter] font-medium text-[18px] leading-[150%] tracking-normal align-middle text-[#4847eb]'>
                    Resend in 03:59
                </span>
            </p>
            </div>
        </div>
        )}
     </div>
   );
 };
 
 export default DriverForgetPass;
