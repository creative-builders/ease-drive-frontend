import React, { useState } from "react";
import CustomButton from "../CustomButton";
import { DateIcon } from "../../assets/icons/DateIcon";
import { ClockIcon } from "../../assets/icons/ClockIcon";
import { CloseMenuIcon } from "../../assets/icons/CloseMenuIcon";
import { BiArrowBack, BiChevronLeft, BiChevronRight } from "react-icons/bi";
import ProgressBar from "../ProgressBar";
import { InputField } from "../customFormFields/InputField"
import { NairaIcon } from "../../assets/icons/NairaIcon";
import { Modal } from "../Modal"
import { SuccessIcon } from "../../assets/icons/SuccesIcon";


export const RideRequestDetails = ({ request }) => {
    const {
        name,
        avatar,
        onBack,
        destination,
        rideType,
        date,
        pickup,
        luggage,
        time,
    } = request;

    const [modalType, setModalType] = useState(null); // "image" | "amount" | "loading"
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [amount, setAmount] = useState("");
    const [isAmountEmpty, setIsAmountEmpty] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const handlePrev = () => {
        if (!luggage || luggage.length === 0) return;
        setSelectedIndex((prev) => (prev === 0 ? luggage.length - 1 : prev - 1));
    };

    const handleNext = () => {
        if (!luggage || luggage.length === 0) return;
        setSelectedIndex((prev) =>
            prev === luggage.length - 1 ? 0 : prev + 1
        );
    };

    const handleAcceptClick = () => {
        setModalType("amount");
    };

    const handleAmountSubmit = () => {
        if (!amount) {
            setIsAmountEmpty(true);
            return;
        }

        // close amount modal, open loading modal
        setModalType("loading");

        // simulate API call delay (3s)
        setTimeout(() => {
            // console.log("Submitted Amount:", amount);
            // setShowModal(true)
            setModalType("success");

        }, 3000);
    };

    const closeModal = () => {
        setShowModal(false);

    };


    return (
        <div className="w-[478px] h-[820px] px-5 py-2.5 bg-white inline-flex flex-col justify-start items-center gap-4">
            {/* Header */}
            <div className="self-stretch h-11 inline-flex justify-start items-center">
                <div className="w-10 h-10 px-1 py-[3px] bg-white rounded-[32px] flex justify-center items-center gap-1 overflow-hidden">
                    <div className="w-6 h-6 relative">
                        <BiArrowBack
                            onClick={onBack}
                            className="w-6 h-6 text-black cursor-pointer"
                        />
                    </div>
                </div>
                <div className="w-96 text-center text-black text-lg font-semibold font-['Inter']">
                    Passenger Details
                </div>
            </div>

            {/* Passenger Info */}
            <div className="self-stretch flex flex-col justify-start items-center gap-12">
                <div className="flex flex-col items-center gap-4">
                    <img className="w-24 h-24 rounded-full" src={avatar} alt="Passenger" />
                    <div className="text-black text-base font-semibold font-['Inter']">
                        {name}
                    </div>
                </div>

                {/* Trip Details */}
                <div className="self-stretch flex flex-col gap-2">
                    <div className="h-14 px-4 bg-neutral-200 rounded-lg flex items-center">
                        <div className="text-Primary-950 text-base font-medium font-['Inter']">
                            Trip Details
                        </div>
                    </div>

                    <div className="flex justify-between">
                        <div className="font-semibold">Date</div>
                        <div>
                            {time}, {date}
                        </div>
                    </div>

                    <div className="flex justify-between">
                        <div className="font-semibold">Pick Up location</div>
                        <div>{pickup}</div>
                    </div>

                    <div className="flex justify-between">
                        <div className="font-semibold">Destination</div>
                        <div>{destination}</div>
                    </div>

                    <div className="flex justify-between">
                        <div className="font-semibold">Trip Type</div>
                        <div>{rideType}</div>
                    </div>

                    <div className="flex justify-between">
                        <div className="font-semibold">Luggage</div>
                        <div>{luggage && luggage.length > 0 ? "Yes" : "No"}</div>
                    </div>

                    {/* Luggage Images */}
                    <div className="flex flex-col items-center gap-1">
                        <div className="text-neutral-600 text-xs font-medium">
                            Click Single Image to view
                        </div>
                        <div className="inline-flex gap-2">
                            {luggage && luggage.length > 0 ? (
                                luggage.map((img, index) => (
                                    <img
                                        key={index}
                                        className="w-24 h-24 rounded cursor-pointer"
                                        src={img}
                                        alt={`Luggage ${index + 1}`}
                                        onClick={() => {
                                            setSelectedIndex(index);
                                            setModalType("image");
                                        }}
                                    />
                                ))
                            ) : (
                                <div className="text-neutral-500">
                                    No luggage images available
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Schedule Details */}
                <div className="self-stretch flex flex-col gap-2">
                    <div className="h-14 px-4 bg-primary-50 rounded-2xl flex items-center">
                        <div className="text-Primary-950 text-base font-medium font-['Inter']">
                            Schedule Details
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex items-center gap-1">
                            <ClockIcon className="-mt-[1px]" />
                            <div className="text-sm">08:15 AM</div>
                        </div>
                        <div className="flex items-center gap-1">
                            <DateIcon className="-mt-[2px]" />
                            <div className="text-sm">Date: Jun 24, 2024</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Accept Button */}
            <div className="self-stretch">
                <CustomButton
                    name="Accept Ride and Enter Amount"
                    btnClick={handleAcceptClick}
                    extendedStyles="w-full p-3 lg:p-4 rounded-lg"
                />
            </div>

            {/* Image Modal */}
            {modalType === "image" && selectedIndex !== null && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="relative bg-white rounded-lg p-4 flex justify-center items-center lg:w-[591px] lg:h-[553px]">
                        <button
                            onClick={() => setModalType(null)}
                            className="absolute top-2 right-2 text-black"
                        >
                            <CloseMenuIcon />
                        </button>

                        {/* Prev Button */}
                        <button
                            onClick={handlePrev}
                            className="absolute left-2 text-green-700 bg-primary-50 rounded-full shadow p-2"
                        >
                            <BiChevronLeft size={24} />
                        </button>

                        {/* Image */}
                        <img
                            src={luggage[selectedIndex]}
                            alt={`Luggage ${selectedIndex + 1}`}
                            className="w-[80%] max-w-[533px] h-auto object-contain rounded-lg"
                        />

                        {/* Next Button */}
                        <button
                            onClick={handleNext}
                            className="absolute right-2 text-green-700 bg-primary-50 rounded-full shadow p-2"
                        >
                            <BiChevronRight size={24} />
                        </button>
                    </div>
                </div>
            )}

            {/* Amount Modal */}
            {modalType === "amount" && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="relative bg-white rounded-3xl p-6 flex flex-col gap-4 lg:w-[633px] lg:h-[249.5px]">
                        {/* Close Button */}
                        <button
                            onClick={() => setModalType(null)}
                            className="absolute top-2 right-2 text-black"
                        >
                            <CloseMenuIcon />
                        </button>

                        {/* Input Label */}
                        <div className="text-black text-lg font-semibold">
                            Amount you are willing to drive the Passenger
                        </div>

                        {/* Input with ₦ symbol */}
                        <div className="relative w-full">
                            <InputField
                                onChange={(e) => setAmount(e.target.value)}
                                placeholder="Enter amount"
                                leftIcon={NairaIcon}

                            />
                            {isAmountEmpty && (
                                <p className="text-red-500 text-sm mt-1">Please enter an amount.</p>
                            )}

                            {/* <input
                                type="number"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                placeholder="Enter amount"
                                className="border placeholder-gray-400 border-gray-300 rounded-lg p-2 pl-10 w-[80%] 
                focus:outline-none focus:ring-2 focus:ring-green-500 lg:text-[20px]"
                            /> */}
                        </div>

                        <CustomButton
                            name="Set Price"
                            disabled={!amount.trim()}
                            btnClick={handleAmountSubmit}
                            extendedStyles="w-full p-3 lg:p-4 rounded-lg"
                            className={`font-medium py-2 px-4 rounded-xl 
                ${amount.trim()
                                    ? "bg-green-700 hover:bg-green-700 text-white"
                                    : "bg-gray-400 text-white cursor-not-allowed opacity-20"
                                }`}
                        />
                    </div>
                </div>
            )}

            {/* Loading Modal */}
            {modalType === "loading" && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="relative bg-white rounded-3xl p-6 flex flex-col gap-6 items-center lg:w-[633px] lg:h-[180px]">
                        <CloseMenuIcon className="absolute top-2 right-2 text-black" />

                        {/* Progress Bar */}
                        <ProgressBar />
                        {/* <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <div className="bg-blue-600 h-3 w-full animate-[progress_3s_linear]"></div>
            </div> */}
                    </div>
                </div>
            )}

            {modalType === "success" && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="relative bg-white rounded-3xl p-6 flex flex-col gap-6 items-center lg:w-[633px] lg:h-[387px]">
                         <CloseMenuIcon className="absolute top-2 right-2 text-black" onClick={() =>{
                            setModalType(null);
                            onBack();
                         }} />

                        <div className="lg:w-[107px] lg:h-[108px]">
                            <SuccessIcon />
                        </div>


                        <p className="font-medium lg:text-[18px] text-center font-inter ">
                            <span className="font-semibold lg:text-[24px] font-inter ">

                                Congratulations, Ride Accepted!
                            </span>
                            <br />
                            Congratulations, John Nudubuisi Chukwuemeka Accepted your ride.</p>
                        <CustomButton name="View Passenger Details" extendedStyles="w-full p-3 lg:p-4 bg-green-250 text-green-900 rounded-lg mb-6 mt-4" />


                    </div>
                </div>
            )}

            {/* {showModal && (
                <Modal closeModal={closeModal} title="Congratulations, Ride Accepted!"
                    bodyText={`
                           Congratulations, John Nudubuisi Chukwuemeka Accepted your ride.`}
                    modalIcon={<SuccessIcon />}  >


                </Modal >
            )} */}
        </div>
    );
};
