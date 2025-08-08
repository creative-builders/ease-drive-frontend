import { useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { sendResetPasswordOTP } from "../../../store/auth/general/api";
import LoadingSpinner from "../../../components/LoadingSpinner";

import leftImage from "./left-image.png";

import { EmailSignedIcon } from "../../../assets/icons/EmailSignedIcon";
import { LogoText } from "../../../components/LogoText";
import { InputField } from "../../../components/customFormFields/InputField";

export const ForgotPassword = () => {
  const navigate = useNavigate();
 const [isVerified, setIsVerified] = useState(false);

  const [inputTouched, setInputTouched] = useState(false);
  const [inputs, setInputs] = useState({
    email: "",
  });

  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputs.email);


  const showInputError =
   inputTouched && inputs.email && !isValidEmail;

  const isFormValid = inputs.email  && isValidEmail;

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setInputTouched(true);
  };
  
    const { mutate: submitSendResetPasswordOTP, isLoading } = useMutation(sendResetPasswordOTP, {
        onSuccess: () => {
            setIsVerified(true); 
            // localStorage.setItem("userEmail", formData.email);
             setInputs({ email: "",});
        },
        onError: (error) => {
         toast.error(error?.response?.data?.message === "No account associated with this email"? `${error?.response?.data?.message} ` : error?.response?.data?.message)
        },
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isValidEmail) {
            alert("Please enter a valid email.");
            return;
        }
        submitSendResetPasswordOTP({ email: inputs.email });
    };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row lg:items-center justify-center bg-[linear-gradient(123deg,_#FDFDFD_3.85%,_#F4EDFA_35.58%,_#F1FBF2_56%,_#EEE1F8_81.24%,_#FDFDFD_101.6%)]">
      <div className="flex justify-center gap-x-[31px] bg-[linear-gradient(123deg,_#FDFDFD_3.85%,_#F4EDFA_35.58%,_#F1FBF2_56%,_#EEE1F8_81.24%,_#FDFDFD_101.6%)] lg:bg-white lg:bg-none shadow-[0_1px_15.5px_0_rgba(0,0,0,0.05)] p-4 lg:px-[40.5px]">
        {/* LEFT SIDE */}
      <div className="basis-[340px] bg-white lg:basis-[607px] py-[30px] px-1.5 lg:py-[40px] px-4">

      <Link to={"/"} className="mb-4 block lg:mb-8">
        <LogoText/>
      </Link>

        <h3 className="mb-4 lg:mb-8 text-lg lg:text-2xl text-gray-950 font-bold">Forgot Password</h3>
         <p className="mb-4 lg:mb-8 text-xs lg:text-lg font-medium">
            Enter your email and we'll send you a verification code to reset your Password
        </p>

        <form onSubmit={handleSubmit}>
          <InputField
          label="Enter Email"
          name="email"
          type="text"
          placeholder="Enter your email or phone number"
          value={inputs.email}
          onChange={handleChange}
          leftIcon={EmailSignedIcon}
          error={showInputError ? "we could not find this email, kindly recheck." : ""}
          />

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!isFormValid}
            className={`inline-block mb-2 w-full px-1.5 h-[45px] lg:h-[60px] rounded-lg transition-all duration-300 
              ${isFormValid ? "bg-green-500 hover:bg-green-600" : "bg-green-200 cursor-not-allowed"}`}
          >
            <span className="text-white font-semibold flex items-center justify-center">
              {isLoading ? <LoadingSpinner className="animate-spin" /> : "Send Link"}
            </span>
          </button>

          {/* Footer Links */}
           <div className="mb-8 flex justify-between items-center">
              <span className="text-gray-700 text-[8px] md:text-sm">
                Already have an account?
                <Link to="/login" className="text-accent-500 ml-1 font-medium">
                  Login
                </Link>
              </span>
            </div>
        </form>
      </div>

      {/* RIGHT SIDE */}
      <div className="lg:basis-[528px] rounded-[45px] h-[623px] hidden lg:flex lg:justify-end">
        <img src={leftImage} className="rounded-[45px]" alt="login illustration" />
      </div>
      </div>
    </div>
  );
};

