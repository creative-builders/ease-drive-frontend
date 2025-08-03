import { useState} from "react";
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
import { LogoText } from "../../../components/LogoText";
import { InputField } from "../../../components/customFormFields/InputField";

const Login = () => {
  const navigate = useNavigate();
  const setUser = useSetRecoilState(userAtom);

  const [showPassword, setShowPassword] = useState(false);
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

  const handleTogglePassword = () => setShowPassword((prev) => !prev);

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
    <div className="min-h-screen flex flex-col lg:flex-row lg:items-center justify-center bg-[linear-gradient(123deg,_#FDFDFD_3.85%,_#F4EDFA_35.58%,_#F1FBF2_56%,_#EEE1F8_81.24%,_#FDFDFD_101.6%)]">
      <div className="flex justify-center gap-x-[31px] bg-[linear-gradient(123deg,_#FDFDFD_3.85%,_#F4EDFA_35.58%,_#F1FBF2_56%,_#EEE1F8_81.24%,_#FDFDFD_101.6%)] lg:bg-white lg:bg-none shadow-[0_1px_15.5px_0_rgba(0,0,0,0.05)] p-4 lg:px-[40.5px]">
        {/* LEFT SIDE */}
      <div className="basis-[340px] bg-white lg:basis-[607px] py-[30px] px-1.5 lg:py-[40px] px-4">

      <Link to={"/"} className="mb-4 block lg:mb-8">
        <LogoText/>
      </Link>

        <h3 className="mb-4 lg:mb-8 text-lg lg:text-2xl text-gray-950 font-bold">Login</h3>

        <form onSubmit={handleSubmit}>
          <InputField
          label="Enter Email/Phone Number"
          name="email_or_phone"
          type="text"
          placeholder="Enter your email or phone number"
          value={inputs.email_or_phone}
          onChange={handleChange}
          leftIcon={EmailSignedIcon}
          error={showInputError ? "Invalid email or phone number" : ""}
          />

          <InputField
          label="Enter Password"
          name="password"
          placeholder="Enter your password"
          value={inputs.password}
          onChange={handleChange}
          leftIcon={LockPasswordIcon}
          error={showPasswordError ? "Password must be at least 5 characters" : ""}
          toggleable
          showPassword={showPassword}
          handleTogglePassword={handleTogglePassword}
          rightIconOpen={EyeOpenIcon}
          rightIconClose={EyeCloseIcon}
          isPassword

          />


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
          <div className="flex mb-[26px] items-center gap-x-4 before:flex-1 before:border-neutral-400 before:border-t after:flex-1 after:border-neutral-400 after:border-t text-sm text-gray-950">
            or
          </div>

          {/* Google auth Login */}
          <GoogleAuthV3 />
        </form>
      </div>

      {/* RIGHT SIDE */}
      <div className="lg:basis-[528px] rounded-[45px] h-[623px] hidden lg:flex">
        <img src={leftImage} className="rounded-[45px]" alt="login illustration" />
      </div>
      </div>
    </div>
  );
};

export default Login;
