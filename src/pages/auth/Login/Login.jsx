import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useSetRecoilState } from "recoil";
import { loginAuth } from "../../../store/auth/general/api";
import { userAtom } from "../../../components/atoms/userAtom";
import GoogleAuthV3 from "../../../components/GoogleAuthV3";
import LoadingSpinner from "../../../components/LoadingSpinner";

import leftImage from "../../../assets/images/auth-left-image.png";
import carImage from "../../../assets/images/Car.png";

import { EyeOpenIcon } from "../../../assets/icons/EyeOpenIcon";
import { EyeCloseIcon } from "../../../assets/icons/EyeCloseIcon";
import { LockPasswordIcon } from "../../../assets/icons/LockPasswordIcon";
import { EmailSignedIcon } from "../../../assets/icons/EmailSignedIcon";
import { AlertCircle } from "../../../assets/icons/AlertCircle";

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
    <div className="min-h-screen flex justify-center gap-x-[31px] bg-gray-500">
      {/* LEFT SIDE */}
      <div className="basis-[607px] px-4 py-4">
        <Link to="/" className="mb-4 lg:mb-5 flex items-center italic font-bold text-base lg:text-2xl text-gray-900">
          <img src={carImage} alt="Ease Drive Logo" />
          <h2>Ease Drive</h2>
        </Link>

        <h3 className="mb-4 text-xl text-gray-950 font-bold">Login</h3>

        <form onSubmit={handleSubmit}>
          {/* Email/Phone Field */}
          <div className="mb-4 relative">
            <label htmlFor="email_or_phone" className="block mb-2 text-sm lg:text-lg">
              Enter Email/Phone Number
            </label>

            <span className="absolute left-2 top-1/2 text-gray-400">
              <EmailSignedIcon />
            </span>

            <input
              type="text"
              name="email_or_phone"
              id="email_or_phone"
              placeholder="Enter your email or phone number"
              value={inputs.email_or_phone}
              onChange={handleChange}
              className={`lg:px-10 pl-10 rounded-lg w-full bg-white placeholder-gray-400 text-neutral-700 
                ${showInputError ? "border border-red-500" : "border border-neutral-400"}`}
            />
            {showInputError && (
              <div className="mt-2 flex items-center gap-x-1.5 text-red-500 text-sm">
                <AlertCircle />
                <span>Invalid email or phone number</span>
              </div>
            )}
          </div>

          {/* Password Field */}
          <div className="mb-4 relative">
            <label htmlFor="password" className="block mb-2 text-sm lg:text-lg">
              Enter Password
            </label>

            <span className="absolute left-2 top-1/2 text-gray-400">
              <LockPasswordIcon />
            </span>

            <input
              type={togglePassword ? "text" : "password"}
              name="password"
              id="password"
              placeholder="Enter your password"
              value={inputs.password}
              onChange={handleChange}
              className="lg:px-10 pl-10 pr-11 rounded-lg border border-neutral-400 w-full bg-white placeholder-gray-400 text-neutral-700"
            />

            <span
              onClick={handleTogglePassword}
              className="absolute right-4 top-1/2 cursor-pointer text-gray-500"
            >
              {togglePassword ? <EyeOpenIcon /> : <EyeCloseIcon />}
            </span>

            {showPasswordError && (
              <div className="mt-2 flex items-center gap-x-1.5 text-red-500 text-sm">
                <AlertCircle />
                <span>Password must be at least 5 characters</span>
              </div>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!isFormValid}
            className={`inline-block mb-2 w-full px-1.5 h-[52px] rounded-lg transition-all duration-300 
              ${isFormValid ? "bg-green-500 hover:bg-green-600" : "bg-green-200 cursor-not-allowed"}`}
          >
            <span className="text-white font-semibold flex items-center justify-center">
              {isLoading ? <LoadingSpinner className="animate-spin" /> : "Login"}
            </span>
          </button>

          {/* Footer Links */}
          <div className="mb-8 flex justify-between items-center text-sm">
            <span className="text-gray-700">
              Don’t have an account?
              <Link to="/signup-as" className="text-accent-500 ml-1 font-medium">
                Create One
              </Link>
            </span>
            <Link to="/Forgot-password" className="text-accent-500 font-medium">
              Forgot Password
            </Link>
          </div>

          {/* Divider */}
          <div className="flex mb-4 items-center gap-x-4 before:flex-1 before:border-neutral-400 before:border-t after:flex-1 after:border-neutral-400 after:border-t text-sm text-gray-500">
            or
          </div>

          {/* Google Login */}
          <div className="flex justify-center mb-16 p-4">
            <GoogleAuthV3 />
          </div>
        </form>
      </div>

      {/* RIGHT SIDE */}
      <div className="basis-[528px] hidden lg:flex">
        <img src={leftImage} alt="login illustration" />
      </div>
    </div>
  );
};

export default Login;
