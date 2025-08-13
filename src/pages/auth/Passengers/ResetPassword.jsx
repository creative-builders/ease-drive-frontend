import { useState} from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { resetPassword} from "../../../store/auth/general/api";
import LoadingSpinner from "../../../components/LoadingSpinner";

import leftImage from "./left-image.png";
import { LogoText } from "../../../components/LogoText";
import { InputField } from "../../../components/customFormFields/InputField";
import { LockPasswordIcon } from "../../../assets/icons/LockPasswordIcon";
import { EyeOpenIcon } from "../../../assets/icons/EyeOpenIcon";
import { EyeCloseIcon } from "../../../assets/icons/EyeCloseIcon";


export const ResetPassword = () => {
  const [inputTouched, setInputTouched] = useState(false);
  const[showPassword, setShowPassword] = useState(false);
  const [searchParams, _] = useSearchParams();
  const navigate = useNavigate();

  const resetToken = searchParams.get("reset-token");


  const [inputs, setInputs] = useState({
    newPassword: "",
  });

//   const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputs.email);
  const isPasswordValid = (inputs?.newPassword || "").length >= 6;

    const showPasswordError =
    inputTouched && inputs?.newPassword.length > 0 && !isPasswordValid;

  const isFormValid = inputs.newPassword  && isPasswordValid;

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setInputTouched(true);
  };
  
    const { mutate: submitSendResetPassword, isLoading } = useMutation(resetPassword, {
        onSuccess: (response) => {
         toast.success(response?.message);
         navigate("/login")
        },
        onError: (error) => {
         toast.error(error?.response?.data?.message === "No account associated with this email"? `${error?.response?.data?.message} ` : error?.response?.data?.message)
        },
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isPasswordValid) {
            alert("Please enter a valid email.");
            return;
        }
        submitSendResetPassword({ 
            newPassword : inputs.newPassword, 
            passwordToken: resetToken 
        });
    };


  return (
       <>
     <div className="min-h-screen flex flex-col lg:flex-row lg:items-center justify-center bg-[linear-gradient(123deg,_#FDFDFD_3.85%,_#F4EDFA_35.58%,_#F1FBF2_56%,_#EEE1F8_81.24%,_#FDFDFD_101.6%)]">
      <div className="flex justify-center gap-x-[31px] bg-[linear-gradient(123deg,_#FDFDFD_3.85%,_#F4EDFA_35.58%,_#F1FBF2_56%,_#EEE1F8_81.24%,_#FDFDFD_101.6%)] lg:bg-white lg:bg-none shadow-[0_1px_15.5px_0_rgba(0,0,0,0.05)] p-4 lg:px-[40.5px]">
        {/* LEFT SIDE */}
      <div className="basis-[340px] bg-white lg:basis-[607px] py-[30px] px-1.5 lg:py-[40px] px-4">

      <Link to={"/"} className="mb-4 block lg:mb-8">
        <LogoText/>
      </Link>

        <h3 className="mb-4 lg:mb-8 text-lg lg:text-2xl text-gray-950 font-bold">Change Password</h3>
         <p className="mb-4 lg:mb-8 text-xs lg:text-lg font-medium">
            Enter your New Password and use it whenever you want to login
        </p>

        <form onSubmit={handleSubmit}>
          <InputField
          label="Enter New your password"
          name="newPassword"
          type="password"
          placeholder="Enter your password"
          value={inputs.newPassword}
          onChange={handleChange}
          leftIcon={LockPasswordIcon}
          showPassword={showPassword}
          isPassword
          handleTogglePassword={() => setShowPassword((prev) => !prev)}
          rightIconOpen={EyeOpenIcon}
          rightIconClose={EyeCloseIcon}
          error={ showPasswordError ? "Password must be at least 5 characters." : ""}
          />
    

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!isFormValid}
            className={`inline-block mb-2 w-full px-1.5 h-[45px] lg:h-[60px] rounded-lg transition-all duration-300 
              ${isFormValid ? "bg-green-700 hover:bg-green-800" : "bg-green-200 cursor-not-allowed"}`}
          >
            <span className="text-white font-semibold flex items-center justify-center">
              {isLoading ? <LoadingSpinner className="animate-spin" /> : "Continue"}
            </span>
          </button>
        </form>
      </div>

      {/* RIGHT SIDE */}
      <div className="lg:basis-[528px] rounded-[45px] h-[623px] hidden lg:flex lg:justify-end">
        <img src={leftImage} className="rounded-[45px]" alt="login illustration" />
      </div>
      </div>
    </div>
    </>
  );
};

