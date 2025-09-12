import React, { useState, useRef } from 'react';

import SectionLabel from '../SectionLabel';
import { ProfileUploadIcon } from '../../assets/icons/ProfileUploadIcon';
import ErrorPopup from "../ErrorPopup";
import { Modal } from '../Modal';
import LoadingSpinner from '../LoadingSpinner';
import { useMutation } from "@tanstack/react-query";
import { RockedIconSuccess } from '../../assets/icons/RocketIconSucess';
import { useStepFlowContext } from '../../hooks/useStepFlowFormContext';
import axios from 'axios';
import { driverKYCUpdate } from "../../store/auth/driver/api"
import { useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Skip } from '../Skip'
import toast from 'react-hot-toast';

import CustomButton from '../CustomButton';

export const StepFour = ({ nextStep, step, totalSteps }) => {
    const fileInputRef = useRef(null);
    const [searchParams] = useSearchParams();
    const [submitting, setSubmitting] = useState(false);
    const [previewUrl, setPreviewUrl] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [showErrorPopup, setShowErrorPopup] = useState(false);
    const { formData, handleUpdateFormData } = useStepFlowContext();
    const [errors, setErrors] = useState({});
    const [isSumitting, setisSubmitting] = useState(false)
    const [selectedFiles, setSelectedFiles] = useState([]);

    const handleUploadClick = () => {
        fileInputRef.current.click();
    };

    const showError = (msg) => {
        setErrorMessage(msg);
        setShowErrorPopup(true);
    };
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith("image/")) {
            setPreviewUrl(URL.createObjectURL(file));
        }
        setSelectedFiles(file); // save the file for later use
    };

    const token = searchParams.get("whois");

    const { mutate: submitDriverKYC, isLoading } = useMutation(
        driverKYCUpdate,
        {
            onSuccess: (data) => {
                // console.log("KYC data updated successfully:", data);
                setisSubmitting(false)
                setShowModal(true);
            },
            onError: (error) => {
                toast.error(error.response?.data?.message || error.message);
            }
        }
    );

    const handleNext = () => {
        const newErrors = {};

        if (!formData.profileImage || formData.profileImage.length === 0) {
            showError("Please upload profile image or just skip");
            newErrors.files = "Please upload at least one document image";
        }
        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
          

            // Submit via React Query
            submitDriverKYC({ credentials: formData, token });
        }
    };

    const handleSkip = () => {
        const newErrors = {};
        if (Object.keys(newErrors).length === 0) {
            const _formData = new FormData();
            _formData.append("documentType", formData.documentType);
            _formData.append("documentID", formData.documentID);
            _formData.append("meansOfIdentification", formData.meansOfIdentification);
            _formData.append("vehicleType", formData.vehicleType);

            _formData.append("plateNumber", formData.plateNumber?.toString() ?? "");
            _formData.append("vehicleColor", formData.vehicleColor);
            _formData.append("serviceArea", formData.serviceArea);
            _formData.append("numberOfSeats", formData.numberOfSeats);

            // Append document photos
            formData.documentPhotos.forEach((file) => {
                _formData.append("documentPhotos", file);
            });

            // Append vehicle photos
            formData.vehiclePhotos.forEach((file) => {
                _formData.append("vehiclePhotos", file);
            });

            // Bank details
            _formData.append("bankAccountHolderName", formData.bankAccountHolderName);
            _formData.append("bankName", formData.bankName);
            _formData.append("bankAccountNumber", formData.bankAccountNumber);
            _formData.append("transactionPin", "2345");

            // Profile image
            _formData.append("profileImage", formData.profileImage[0]);

            // Submit via React Query
            submitDriverKYC({ credentials: _formData, token });
        }
    };




    const closeModal = () => {
        setShowModal(false);

    };

    return (
        <div className="min-h-screen lg:h-full ">
            <ErrorPopup
                message={errorMessage}
                show={showErrorPopup}
                onClose={() => setShowErrorPopup(false)}
            />
            <div className="flex items-center justify-center h-full min-h-screen ">
                <div className="bg-white lg:w-[1116px] lg:h-[700px] w-[100%] 
                m-auto py-6 lg:pt-12 lg:pb-12 opacity-100 flex flex-row items-center">
                    <div className="lg:w-[637px] w-[360px] h-[70vh] lg:h-[90vh] m-auto 
                    p-5 gap-8 bg-white flex flex-col items-center justify-center">
                        <div className="lg:w-[100%] w-full text-left flex flex-col justify-start   opacity-100 ">
                            <div className="flex flex-row items-center justify-start">
                                <SectionLabel
                                    className="text-blue-800 bg-custom-gradient"
                                    title={` Step ${step}  of ${totalSteps}`}
                                />
                                {/* <Link to="/"> 
              <div className="flex flex-row items-center justify-start gap-2">
                <img src='/ease-drivelogo.png' className='lg:w-[64px] lg:h-[64px] w-[45px] h-[45px] mr-2' />
                <h1 className="font-inter text-gray-700 italic font-bold lg:text-[36px] text-lg leading-[100%]">
                  Ease Drive
                </h1>
              </div>
              </Link> */}
                            </div>
                        </div>

                        <div className="lg:w-[100%] w-[347px] justify-between opacity-100 flex flex-row items-start">
                            <div className="text-left lg:w-[60%] w-[70%]">
                                <h4 className="font-inter text-gray-700 italic font-semibold lg:text-[26px] text-lg leading-[100%]">
                                    Upload Profile Photo
                                </h4>
                                <p className="font-medium text-left text-gray-800 lg:text-lg text-sm font-inter pt-2">
                                    Show face clearly, no filters or group photos
                                </p>
                            </div>
                            <div>
                                <Link to="/login">
                                    <button >
                                        <Skip title="Skip" />
                                    </button>
                                </Link>

                            </div>
                        </div>

                        <div className="flex w-full">
                            <div className="flex-col flex justify-center items-center w-full mt-4">
                                {previewUrl ? (
                                    <img
                                        src={previewUrl}
                                        alt="Preview"
                                        className="w-32 h-32 object-cover rounded-full border border-gray-300"
                                        onClick={handleUploadClick}
                                    />
                                ) : (
                                    <ProfileUploadIcon className="w-30 h-30 cursor-pointer" onClick={handleUploadClick} />
                                )}
                                <p
                                    onClick={handleUploadClick}
                                    className="font-regular cursor-pointer text-center text-gray-70
                                    lg:text-xl text-sm font-inter pt-2"
                                >
                                    Upload Profile Photo
                                </p>
                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    className="hidden"
                                    name="profileImage"
                                    accept="image/*"
                                    onChange={(e) => {
                                        const files = Array.from(e.target.files);
                                        setSelectedFiles(files);
                                        handleUpdateFormData("profileImage", files);
                                        handleFileChange(e)
                                    }}
                                />
                            </div>
                        </div>


                        {/* <button
                            type="button"
                            className="lg:w-full w-full bg-green-200 text-primary-700 rounded-xl py-4 text-lg font-bold "
                            onClick={() => {
                                setisSubmitting(!isSumitting)
                                handleSkip()
                            }}>
                            Skip
                        </button> */}

                        <button
                            type="submit"
                            onClick={() => {
                                setisSubmitting(!isSumitting)
                                handleNext()
                            }}

                            className={`inline-block  mb-2 w-full px-1.5 lg:p-4 p-2 h-[45px] lg:h-[60px]
                                 rounded-lg transition-all duration-300 bg-green-700 hover:bg-green-600 `}
                        >
                            <span className="text-white font-semibold flex items-center justify-center">
                                {isSumitting ? (
                                    <LoadingSpinner className="animate-spin" />
                                ) : (
                                    "Submit"
                                )}
                            </span>
                        </button>
                    </div>

                    <div className="lg:w-[528px] lg:h-[638px] hidden lg:block opacity-100 rounded-[45px]">
                        <img src="/signup-banner.png" alt="Signup banner" className='lg:rounded-[45px]' />
                    </div>
                </div>
            </div>
            {showModal && (
                <Modal
                    closeModal={closeModal}
                    title="You're all set"
                    position="center"
                    width="90%"
                    bodyText={`Thanks for signing up! We’re reviewing your documents. 
                     You’ll be notified within 24 hours when you’re approved to start accepting rides`}
                    modalIcon={<RockedIconSuccess />}
                    iconWidth="100px"
                    iconHeight="100px"
                    iconBg="bg-primary-50"
                >
                    <Link to="/login" className="text-green-300">
                        <CustomButton
                            name="Proceed to Dashboard"
                            extendedStyles="w-full p-3 bg-green-700 lg:p-4 rounded-lg mb-6 mt-4"
                        />
                    </Link>
                </Modal>
            )}
        </div>
    );
};

