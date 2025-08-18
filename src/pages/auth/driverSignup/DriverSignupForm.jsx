import React, { useState, useEffect } from "react";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { FaChevronDown } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";

import { CustomInputField } from "../../../components/CustomInputField";
import { CustomSelectField } from "../../../components/customFormFields/CustomSelectField";
import { CountdownTimer } from "../../../components/CountdownTimer";
import { Modal } from "../../../components/Modal";
import ErrorPopup from "../../../components/ErrorPopup";
import { EmailSent } from "../../../assets/icons/EmailSent";
import { LocationHomeIcon } from "../../../assets/icons/LocationHomeIcon";
import { UserIcon } from "../../../assets/icons/UserIcon";
import { MailIcon } from "../../../assets/icons/MailIcon";
import { LockedIcon } from "../../../assets/icons/LockedIcon";
import { CallIcon } from "../../../assets/icons/CallIcon";
import GoogleAuthV3 from "../../../components/GoogleAuthV3";
import { InputField } from "../../../components/customFormFields/InputField"; // Assuming you have this component

export const DriverSignupForm = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmpassword: "",
        phone: "",
        city: "",
    });

    const [errorMessage, setErrorMessage] = useState("");
    const [showErrorPopup, setShowErrorPopup] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const handleChange = (key) => (e) => {
        setFormData({ ...formData, [key]: e.target.value });
    };

    const handleCityChange = (selectedCity) => {
        setFormData({ ...formData, city: selectedCity });
    };

    const showError = (msg) => {
        setErrorMessage(msg);
        setShowErrorPopup(true);
    };

    const registerDriver = async () => {
        const fullName = formData.fullName.trim();
        const [firstName, ...rest] = fullName.split(" ");
        const lastName = rest.join(" ");

        if (!firstName || firstName.length < 3) {
            throw new Error("First Name must be at least 3 characters");
        }

        if (formData.password !== formData.confirmpassword) {
            throw new Error("Passwords do not match");
        }

        const driverData = {
            firstName,
            lastName,
            fullName,
            email: formData.email,
            password: formData.password,
            confirmPassword: formData.confirmpassword,
            phoneNumber: formData.phone,
            city: formData.city,
            role: "driver",
        };

        const response = await axios.post(
            "http://localhost:8000/api/auth/register/driver", 
            driverData
        );

        return response.data;
    };

    const { mutate: submitDriverForm, isLoading } = useMutation({
        mutationFn: registerDriver,
        onSuccess: () => {
            setShowModal(true);
        },
        onError: (error) => {
            showError(error?.response?.data?.message || error.message);
        },
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrorMessage("");
        submitDriverForm();
    };

    const handleSubmitAction = () => {
        setErrorMessage("");
        submitDriverForm();
    };

    const closeModal = () => {
        setShowModal(false);
        setFormData({
            fullName: "",
            email: "",
            phone: "",
            city: "",
            password: "",
            confirmpassword: "",
        });
    };

   

   
    // Auto-dismiss error popup
    useEffect(() => {
        if (showErrorPopup) {
            const timer = setTimeout(() => {
                setShowErrorPopup(false);
            }, 5000);

            return () => clearTimeout(timer);
        }
    }, [showErrorPopup]);

    return (
        <div className="lg:flex lg:w-[669px] lg:h-[1077px]
        w-full
         h-full items-center justify-center px-4 relative lg:pt-4 max-900:py-4">
            <ErrorPopup
                message={errorMessage}
                show={showErrorPopup}
                onClose={() => setShowErrorPopup(false)}
            />

            <div className="w-full">
                {/* Logo & Title */}
                <div className="flex items-center gap-4">
                    <img src="/ease-drivelogo.png" alt="car" className="lg:w-[64px] lg:h-[64px] w-[45px] h-[45px]" />
                    <h1 className="font-inter text-[#1E1E1E] italic font-bold text-[36px]">
                        Ease Drive
                    </h1>
                </div>

                <h2 className="text-[26px] pt-4 font-semibold mb-1 text-[#333333]">
                    Create an Account
                </h2>
                <p className="text-[18px] font-medium text-[#333333] mb-6">
                    Please enter your details to get started
                </p>

                {/* Signup Form */}
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <CustomInputField
                        label="Full Name"
                        // iconSrc="/user-03.svg"
                        placeholder="Enter your full name"
                        value={formData.fullName}
                        onFormChange={handleChange("fullName")}
                    >
                        <UserIcon className="lg:w-8 lg:h-8 w-6 h-6 text-gray-500" />
                    </CustomInputField>


                
                    <CustomInputField
                        label="Enter Email"
                        // iconSrc="/mail.svg"
                        placeholder="Enter your email address"
                        type="email"
                        value={formData.email}
                        onFormChange={handleChange("email")}
                    >
                        <MailIcon className="lg:w-8 lg:h-8 w-6 h-6 text-gray-500" />
                    </CustomInputField>

                    <CustomInputField
                        label="Enter Password"
                        iconSrc="/lock-password.svg"
                        placeholder="Enter your password"
                        type="password"
                        value={formData.password}
                        onFormChange={handleChange("password")}
                        rightIcon={<FiEye className="text-gray-400 cursor-pointer" />}
                    >
                        <LockedIcon className="lg:w-8 lg:h-8 w-6 h-6 text-gray-500" />
                    </CustomInputField>

                    <CustomInputField
                        label="Confirm Password"
                        placeholder="Re-enter your password"
                        type="password"
                        value={formData.confirmpassword}
                        onFormChange={handleChange("confirmpassword")}
                        rightIcon={<FiEye className="text-gray-400 cursor-pointer" />}
                    >
                        <LockedIcon className="lg:w-8 lg:h-8 w-6 h-6 text-gray-500" />
                    </CustomInputField>

                    <CustomInputField
                        label="Enter Phone number"
                        placeholder="Enter your phone number"
                        type="tel"
                        value={formData.phone}
                        onFormChange={handleChange("phone")}
                    >   <CallIcon className="lg:w-8 lg:h-8 w-6 h-6 text-gray-500" />
                    </CustomInputField>


                    <CustomSelectField
                        label="Enter City"
                        value={formData.city}
                        defaultHolder="Select City"
                        onChange={handleCityChange}
                        options={["Anambra", "Lagos", "Kano"]}
                        rightIcon={FaChevronDown}
                    >
                        <LocationHomeIcon className="lg:w-8 lg:h-8 w-6 h-6 text-gray-500" />
                    </CustomSelectField >

                    <button
                        type="submit"
                        className="w-full bg-green-700 text-white rounded-xl py-4 text-[18px] font-bold disabled:opacity-50"
                        disabled={isLoading}
                    >
                        {isLoading ? "Creating Account..." : "Create Account"}
                    </button>
                </form>

                <p className="text-[14px] font-medium mt-4">
                    Already have an account?{" "}
                    <a href="#" className="text-blue-600 font-medium">
                        Login
                    </a>
                </p>

                <div className="flex items-center my-6">
                    <hr className="flex-grow border-gray-300" />
                    <span className="mx-2 text-sm text-gray-500">Or</span>
                    <hr className="flex-grow border-gray-300" />
                </div>

                {/* <button
                    onClick={() => handleSignupWithGoogle()}
                    className="w-full border rounded-xl py-3 flex items-center justify-center text-[20px] font-medium"
                    disabled={isGoogleLoading}
                >
                    <FcGoogle className="mr-2 text-xl" />
                    {isGoogleLoading ? "Connecting to Google..." : "Continue with Google"}
                </button> */}
                <GoogleAuthV3 />
            </div>

            {/* Success Modal */}
            {showModal && (
                <Modal closeModal={closeModal} title="Check Your Email" bodyText={` We’ve sent a verification link to ${" "}
                                ${formData.email}, kindly click on it to continue.`} modalIcon={<EmailSent />}>
                    <CountdownTimer
                        minutes={3}
                        title="Resend"
                        onSubmit={handleSubmitAction}
                    />
                </Modal >
            )}
        </div>
    );
};
