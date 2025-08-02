import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useSetRecoilState } from "recoil";
import { loginAuth } from "../../../store/auth/general/api";
import { userAtom } from "../../../components/atoms/userAtom";
import GoogleAuthV3 from "../../../components/GoogleAuthV3";
import LoadingSpinner from "../../../components/LoadingSpinner";

import leftImage from "./left-image.png";

import { EyeOpenIcon } from "../../../assets/icons/EyeOpenIcon";
import { EyeCloseIcon } from "../../../assets/icons/EyeCloseIcon";
import { LockPasswordIcon } from "../../../assets/icons/LockPasswordIcon";
import { EmailSignedIcon } from "../../../assets/icons/EmailSignedIcon";
import { AlertCircle } from "../../../assets/icons/AlertCircle";
import { LogoText } from "../../../components/LogoText";

const Login = () => {
  const navigate = useNavigate();
  const setUser = useSetRecoilState(userAtom);

  const [togglePassword, setTogglePassword] = useState(false);
  const [inputTouched, setInputTouched] = useState(false);
  const [inputs, setInputs] = useState({
    email_or_phone: "",
    password: "",
  });

  const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputs.email_or_phone);
  const isPhone = /^[0-9]{10,}$/.test(inputs.email_or_phone);
  const isPasswordValid = inputs.password.length >= 5;

  const showInputError =
   inputTouched && inputs.email_or_phone && !(isEmail || isPhone);
  const showPasswordError = inputTouched && inputs.password.length > 0 && !isPasswordValid;

  const isFormValid = inputs.email_or_phone && inputs.password && (isEmail || isPhone) && isPasswordValid;

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setInputTouched(true);
  };

  const handleTogglePassword = () => setTogglePassword((prev) => !prev);

  const { mutate: submitLogin, isLoading } = useMutation(loginAuth, {
    onSuccess: (response) => {
      toast.success(response?.message);
      localStorage.setItem("current_user", JSON.stringify(response.data));
      setUser(response.data);
      navigate("/dashboard");
      setInputs({ email_or_phone: "", password: "" });
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || error.message);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    submitLogin(inputs);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[linear-gradient(123deg,_#FDFDFD_3.85%,_#F4EDFA_35.58%,_#F1FBF2_56%,_#EEE1F8_81.24%,_#FDFDFD_101.6%)]">
      <div className="bg-white basis-[94%] lg:basis-[calc(100% - 1226px)] flex">
        {/* LEFT SIDE */}
      <div className="basis-[607px] px-4 py-4">

      <div className="mb-4 lg:mb-8">
        <LogoText/>
      </div>

        <h3 className="mb-4 text-xl text-gray-950 font-bold">Login</h3>

        <form onSubmit={handleSubmit}>
          {/* Email/Phone Field */}
          <div className="mb-4 relative">
            <label htmlFor="email_or_phone" className="block mb-2 text-sm lg:text-lg">
              Enter Email/Phone Number
            </label>
            
            <div className={`
              flex items-center gap-x-2 px-1.5 lg:px-4 h-[45px] lg:h-[54px]  border border-neutral-400 rounded-md lg:rounded-lg bg-white
              ${showInputError ? "border border-red-500" : "border border-neutral-400"}
              `}>
              
            <EmailSignedIcon className="w-[18px] lg:w-[32px] h-[18px] lg:h-[32px]"/>

            <input
              type="text"
              name="email_or_phone"
              id="email_or_phone"
              placeholder="Enter your email or phone number"
              value={inputs.email_or_phone}
              onChange={handleChange}
              className={`w-full bg-white border-none focus:border-none focus:ring-0 placeholder-gray-400 text-neutral-700 text-xs lg:text-lg`}
            />
            </div>
       
            {showInputError && (
              <div className="mt-2 flex items-center gap-x-1.5 text-red-500 text-sm">
                <AlertCircle stroke="#ff0000" />
                <span>Invalid email or phone number</span>
              </div>
            )}
          </div>

          {/* Password Field */}
          <div className="mb-4 lg:mb-8 relative">
            <label htmlFor="password" className="block mb-2 text-sm lg:text-lg">
              Enter Password
            </label>

          <div className={`
            flex items-center gap-x-2 px-1.5 lg:px-4 h-[45px] lg:h-[54px] border border-neutral-400 rounded-md lg:rounded-lg bg-white
            ${showPasswordError ? "border border-red-500" : "border border-neutral-400"}
            `}>
    
           <LockPasswordIcon className="w-[18px] lg:w-[32px] h-[18px] lg:h-[32px]" />

            <input
              type={togglePassword ? "text" : "password"}
              name="password"
              id="password"
              placeholder="Enter your password"
              value={inputs.password}
              onChange={handleChange}
              className="w-full bg-white border-none focus:border-none focus:ring-0 placeholder-gray-400 text-neutral-700 text-xs lg:text-lg"
            />

            <span
              onClick={handleTogglePassword}
              className="text-gray-500 cursor-pointer"
            >
              {togglePassword ? <EyeOpenIcon className="w-[18px] lg:w-[32px] h-[18px] lg:h-[32px]" /> : <EyeCloseIcon className="w-[18px] lg:w-[32px] h-[18px] lg:h-[32px]" />}
            </span>

          </div>

            {showPasswordError && (
              <div className="mt-2 flex items-center gap-x-1.5 text-red-500 text-sm">
                <AlertCircle  stroke="#ff0000" />
                <span>Password must be at least 5 characters</span>
              </div>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!isFormValid}
            className={`inline-block mb-2 w-full px-1.5 h-[45px] lg:h-[60px] rounded-lg transition-all duration-300 
              ${isFormValid ? "bg-green-500 hover:bg-green-600" : "bg-green-200 cursor-not-allowed"}`}
          >
            <span className="text-white font-semibold flex items-center justify-center">
              {isLoading ? <LoadingSpinner className="animate-spin" /> : "Login"}
            </span>
          </button>

          {/* Footer Links */}
          <div className="mb-8 flex justify-between items-center">
            <span className="text-gray-700 text-[8px] md:text-sm">
              Don’t have an account?
              <Link to="/signup-as" className="text-accent-500 ml-1 font-medium ">
                Create One
              </Link>
            </span>
            <Link to="/Forgot-password" className="text-accent-500 font-medium text-[8px] md:text-sm">
              Forgot Password
            </Link>
          </div>

          {/* Divider */}
          <div className="flex mb-4 items-center gap-x-4 before:flex-1 before:border-neutral-400 before:border-t after:flex-1 after:border-neutral-400 after:border-t text-sm text-gray-950">
            or
          </div>

          {/* Google Login */}
          <div className="flex justify-center p-4">
            <GoogleAuthV3 />
          </div>
        </form>
      </div>

      {/* RIGHT SIDE */}
      <div className="basis-[528px] hidden lg:flex">
        <img src={leftImage} alt="login illustration" />
      </div>
      </div>
    </div>
  );
};

export default Login;
