import { useState} from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { passengerSignUpAuth } from "../../../store/auth/passenger/api";
import GoogleAuthV3 from "../../../components/GoogleAuthV3";
import LoadingSpinner from "../../../components/LoadingSpinner";

import leftImage from "./left-image.png";

import { EyeOpenIcon } from "../../../assets/icons/EyeOpenIcon";
import { EyeCloseIcon } from "../../../assets/icons/EyeCloseIcon";
import { LockPasswordIcon } from "../../../assets/icons/LockPasswordIcon";
import { EmailSignedIcon } from "../../../assets/icons/EmailSignedIcon";
import { PhoneIcon } from "../../../assets/icons/PhoneIcon"
import { UserIcon } from "../../../assets/icons/UserIcon"
import { LogoText } from "../../../components/LogoText";
import { InputField } from "../../../components/customFormFields/InputField";
import { FormProvider, useStepFlowContext } from "../../../hooks/useStepFlowFormContext";


const PassengerSignUp = () => {
  const {
    formData,
    inputTouched,
    setFormData,
    handleUpdateFormData,
  } = useStepFlowContext();

  console.log(formData)

  const [showPassword, setShowPassword] = useState(false);

  const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData?.email || "");
  const isPhone = /^[0-9]{10,}$/.test(formData?.phoneNumber || "");
  const isPasswordValid = (formData?.password || "").length >= 5;
  const isFullNameValid = (formData?.fullName || "").length >= 3;

  const emailOrPhoneValid = isEmail || isPhone;
  const isFormValid = emailOrPhoneValid && isPasswordValid && isFullNameValid;

  const showPhoneError =
    inputTouched && !!formData?.phoneNumber && !isPhone;

  const showEmailError =
    inputTouched && !!formData?.email && !isEmail;

  const showPasswordError =
    inputTouched && formData?.password.length > 0 && !isPasswordValid;

  const showFullNameError =
    inputTouched && formData?.fullName.length > 0 && !isFullNameValid;

  const { mutate: submitPassengerDetails, isLoading } = useMutation(
    passengerSignUpAuth,
    {
      onSuccess: () => {
        setFormData((prev) => ({
          ...prev,
          fullName: "",
          phoneNumber: "",
          email: "",
          password: "",
          confirmPassword: "",
        }));
      },
      onError: (error) => {
        toast.error(error.response?.data?.message || error.message);
      },
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;
    submitPassengerDetails({ ...formData, role: "passenger" });
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row lg:items-center justify-center bg-[linear-gradient(123deg,_#FDFDFD_3.85%,_#F4EDFA_35.58%,_#F1FBF2_56%,_#EEE1F8_81.24%,_#FDFDFD_101.6%)]">
      <div className="flex justify-center gap-x-[31px] bg-[linear-gradient(123deg,_#FDFDFD_3.85%,_#F4EDFA_35.58%,_#F1FBF2_56%,_#EEE1F8_81.24%,_#FDFDFD_101.6%)] lg:bg-white lg:bg-none shadow-[0_1px_15.5px_0_rgba(0,0,0,0.05)] p-4 lg:px-[40.5px]">
        {/* LEFT SIDE */}
        <div className="basis-[340px] bg-white lg:basis-[607px] py-[30px] px-4 lg:py-[40px]">
          <Link to="/" className="mb-4 block lg:mb-8">
            <LogoText />
          </Link>

          <h3 className="mb-2 text-lg lg:text-2xl text-gray-950 font-bold">
            Create an Account
          </h3>
          <p className="mb-4 lg:mb-8 text-xs lg:text-lg">
            Please enter your details to get started
          </p>

          <form onSubmit={handleSubmit}>
            <InputField
              label="Full Name"
              name="fullName"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleUpdateFormData}
              leftIcon={UserIcon}
              error={
                showFullNameError ? "Full name must be at least 3 characters" : ""
              }
            />

            <InputField
              label="Enter Email"
              name="email"
              type="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleUpdateFormData}
              leftIcon={EmailSignedIcon}
              error={showEmailError ? "Invalid email" : ""}
            />

            <InputField
              label="Enter Password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleUpdateFormData}
              leftIcon={LockPasswordIcon}
              error={
                showPasswordError
                  ? "Password must be at least 5 characters"
                  : ""
              }
              toggleable
              toggleState={showPassword}
              onToggle={() => setShowPassword((prev) => !prev)}
              rightIconOpen={EyeOpenIcon}
              rightIconClose={EyeCloseIcon}
            />

            <InputField
              label="Enter Phone Number"
              name="phoneNumber"
              type="text"
              placeholder="Enter your phone number"
              value={formData.phoneNumber}
              onChange={handleUpdateFormData}
              leftIcon={PhoneIcon}
              error={showPhoneError ? "Invalid phone number" : ""}
            />

            {/* Submit Button */}
            <button
              type="submit"
              disabled={!isFormValid}
              className={`inline-block mb-2 w-full px-1.5 h-[45px] lg:h-[60px] rounded-lg transition-all duration-300 
                ${
                  isFormValid
                    ? "bg-green-500 hover:bg-green-600"
                    : "bg-green-200 cursor-not-allowed"
                }`}
            >
              <span className="text-white font-semibold flex items-center justify-center">
                {isLoading ? (
                  <LoadingSpinner className="animate-spin" />
                ) : (
                  "Create an Account"
                )}
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

            {/* Divider */}
            <div className="flex mb-[26px] items-center gap-x-4 before:flex-1 before:border-neutral-400 before:border-t after:flex-1 after:border-neutral-400 after:border-t text-sm text-gray-950">
              or
            </div>

            {/* Google Auth */}
            <GoogleAuthV3 />
          </form>
        </div>

        {/* RIGHT SIDE */}
        <div className="lg:basis-[528px] rounded-[45px] h-[881px] hidden lg:flex">
          <img
            src={leftImage}
            className="rounded-[45px] object-cover w-full h-full"
            alt="login illustration"
          />
        </div>
      </div>
    </div>
  );
};


export const RegisterPassenger = () => {
  
   const initialInputFields = ["fullName", "phoneNumber", "email", "password"]

  return (
    <FormProvider initialInputFields={initialInputFields}>
      <PassengerSignUp/>
    </FormProvider>
  );
};

