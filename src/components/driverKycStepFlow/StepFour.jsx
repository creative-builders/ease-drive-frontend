import React, { useState, useRef } from 'react';
import SectionLabel from '../SectionLabel';
import { ProfileUploadIcon } from '../../assets/icons/ProfileUploadIcon';
import ErrorPopup from "../ErrorPopup";
import { Modal } from '../Modal';
import { RockedIconSuccess } from '../../assets/icons/RocketIconSucess';
import { useStepFlowContext } from '../../hooks/useStepFlowFormContext';
import axios from 'axios';

import { useSearchParams } from 'react-router-dom';

import CustomButton from '../CustomButton';
import { number } from 'framer-motion';

export const StepFour = ({ nextStep, step, totalSteps }) => {
    const fileInputRef = useRef(null);
    const [searchParams] = useSearchParams();
    const [agreed, setAgreed] = useState(true);
    const [previewUrl, setPreviewUrl] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [showErrorPopup, setShowErrorPopup] = useState(false);
    const { formData, handleUpdateFormData } = useStepFlowContext();
    const [errors, setErrors] = useState({});
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

    const handleSkip = () => {
        setShowModal(true);
        console.log(token);
    };

    const handleNext = async () => {
        const newErrors = {};

        if (!formData.vehicleType) {
            newErrors.vehicleType = "Please select you vehicle type";
            showError("Please select you vehicle type");
        }

        if (!formData.plateNumber || formData.plateNumber.trim() === "") {
            newErrors.plateNumber = "Please provide plate number";
            showError("Please provide plate number");
        }

        if (selectedFiles.length === 0) {
            showError("Please upload prpfile image or just skip ");
            newErrors.files = "Please upload at least one document image";
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            console.log(token)
            console.log(formData)

            const _formData = new FormData();
            console.log(formData.plateNumber.toString())

            _formData.append("documentType", formData.documentType);
            _formData.append("documentID", formData.documentID);
            _formData.append("meansOfIdentification", formData.meansOfIdentification);
            _formData.append("documentPhotos", formData.documentPhotoS); // multiple calls for each file

            // rideInfo.*
            _formData.append("vehicleType", formData.vehicleType);

            _formData.append("vehiclePhotos", formData.vehiclePhotos);
            _formData.append("plateNumber", formData.plateNumber?.toString() ?? "");
            _formData.append("vehicleColor", formData.vehicleColor);
            _formData.append("serviceArea", formData.serviceArea);
            _formData.append("numberOfSeats", formData.numberOfSeats);


            // bankDetails.*
            _formData.append("bankAccountHolderName", formData.bankAccountHolderName);
            _formData.append("bankName", formData.bankName);
            _formData.append("bankAccountNumber", formData.bankAccountNumber);
            _formData.append("transactionPin", "2345");

            // images
            _formData.append("profileImage", formData.profileImage[0]); // Assuming profileImage is an array of files

            try {
                const data = await axios.put(`http://localhost:8000/api/driver/driverkyc?whois=${token}`, _formData)

                console.log("KYC data updated successfully:", data);
                setShowModal(true);
            } catch (error) {
                console.error("Error updating KYC data:", error);
                showError("Failed to update KYC data. Please try again.");
            }
            // setShowModal(true);
            // console.log(token)
        }
    };
    // const handleNext = () => {
    //     if (agreed) {
    //         // nextStep();
    //         setShowModal(true);
    //     } else {
    //         showError('You must agree to the terms to continue.');
    //     }
    // };
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
                <div className="bg-white lg:w-[1216px] lg:h-[700px] w-[100%] 
                m-auto py-6 lg:pt-12 lg:pb-12 opacity-100 flex flex-row items-center">
                    <div className="lg:w-[637px] w-full h-[60vh] lg:h-[90vh] m-auto 
                    p-5 gap-8 bg-white flex flex-col items-center justify-center">
                        <div className="lg:w-[100%] w-full flex flex-col  gap-[7px] opacity-100 ">
                            <div className="flex flex-row items-center justify-start gap-2">
                                <img src='/ease-drivelogo.png' className='lg:w-[64px] lg:h-[64px] w-[45px] h-[45px] mr-2' />
                                <h1 className="font-inter text-gray-700 italic font-bold lg:text-[36px] text-[18px] leading-[100%]">
                                    Ease Drive
                                </h1>
                            </div>
                        </div>

                        <div className="lg:w-[100%] w-[347px] justify-between opacity-100 flex flex-row items-start">
                            <div className="text-left lg:w-[60%] w-[70%]">
                                <h4 className="font-inter text-gray-700 italic font-semibold lg:text-[26px] text-[18px] leading-[100%]">
                                    Upload Profile Photo
                                </h4>
                                <p className="font-medium text-left text-gray-800 lg:text-[18px] text-[14px] font-inter pt-2">
                                    Show face clearly, no filters or group photos
                                </p>
                            </div>
                            <div>
                                <SectionLabel className="text-blue-800 bg-custom-gradient" title={`Step ${step} of ${totalSteps}`} />
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
                                    lg:text-[20px] text-[14px] font-inter pt-2"
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



                        <button
                            type="button"
                            className="lg:w-full w-full bg-green-200 text-primary-700 rounded-xl py-4 text-[18px] font-bold "
                            onClick={() => handleSkip()}
                        >
                            Skip
                        </button>

                        <CustomButton name="Submit" extendedStyles="w-full p-3 lg:p-4 rounded-lg"
                            btnClick={() => handleNext()} />
                    </div>

                    <div className="lg:w-[528px] lg:h-[638px] hidden md:block opacity-100 rounded-[45px]">
                        <img src="/signup-banner.png" alt="Signup banner" className='lg:rounded-[45px]' />
                    </div>
                </div>
            </div>
            {showModal && (
                <Modal closeModal={closeModal} title="You're all set"
                    bodyText={` Thanks for signing up! We’re reviewing your documents. 
                You’ll be notified within 24 hours when you’re approved to start accepting rides`} modalIcon={<RockedIconSuccess />}  >
                    <CustomButton name="Proceed to Dashboard" extendedStyles="w-full p-3 lg:p-4 mb-6 mt-4" />
                </Modal >
            )}
        </div>
    );
};
