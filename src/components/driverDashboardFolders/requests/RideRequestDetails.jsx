import React, { useState, useEffect } from "react";
import CustomButton from "../../CustomButton";
import { DateIcon } from "../../../assets/icons/DateIcon";
import { ClockIcon } from "../../../assets/icons/ClockIcon";
import { CloseMenuIcon } from "../../../assets/icons/CloseMenuIcon";
import { BiArrowBack, BiChevronLeft, BiChevronRight } from "react-icons/bi";
import ProgressBar from "../../ProgressBar";
import { InputField } from "../../customFormFields/InputField"
import { NairaIcon } from "../../../assets/icons/NairaIcon";
// import { Modal } from "../Modal"
import { SuccessIcon } from "../../../assets/icons/SuccesIcon";
import { FailureIcon } from "../../../assets/icons/FailureIcon";
import { bidForARid } from "../../../store/auth/driver/api";
import { useMutation } from "@tanstack/react-query";
import { useNavigate, useRoutes } from "react-router-dom";
import toast from "react-hot-toast"
export const RideRequestDetails = ({ request, onRideAccepted, btnName, btnFn }) => {
    const {

        booker,
        profileImage,
        onBack,
        destination,
        location,
        tripType,
        luggages,
        luggageImage,
        scheduledTrip,
        createdAt,
        _id,
        bidPrice,
    } = request;

    const rideDate = new Date(createdAt);

    const [modalType, setModalType] = useState(null); // "image" | "amount" | "loading"
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [amount, setAmount] = useState("");
    const [isAmountEmpty, setIsAmountEmpty] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const [progress, setProgress] = useState(0);

    const navigate = useNavigate()



    const { mutate: submitRideBid, isLoading } = useMutation(
        bidForARid,
        {
            onSuccess: (data) => {

                toast.success(data.message)
                setModalType("loading");

            },
            onError: (error) => {
                setModalType("failed")
                toast.error(error.response?.data?.message || error.message);
            }
        }
    );

    const handlePrev = () => {
        if (!luggageImage || luggageImage.length === 0) return;
        setSelectedIndex((prev) => (prev === 0 ? luggageImage.length - 1 : prev - 1));
    };

    const handleNext = () => {
        if (!luggageImage || luggageImage.length === 0) return;
        setSelectedIndex((prev) =>
            prev === luggageImage.length - 1 ? 0 : prev + 1
        );
    };

    useEffect(() =>{
        setAmount(request.bidPrice || "")
    },[request])


    const handleAcceptClick = () => {
        if (btnName == "Track Passenger") {
            btnFn()
        }
        else {

            setModalType("amount");
        }
    };

    const handleAmountSubmit = () => {
        if (!amount) {
            setIsAmountEmpty(true);
            return;
        }
        // close amount modal, open loading modal

        // setModalType("loading");
        submitRideBid({ rideId: _id, amount })

        // // simulate API call delay (3s)
        // setTimeout(() => {

        //     setModalType("success");
        // }, 5000);

        // setTimeout(() => {
        //     setModalType("failed")
        // }, 7000);
    };

    const closeModal = () => {
        setShowModal(false);

    };

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((old) => {
                if (old >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return old + 1; // increase 1% every tick
            });
        }, 400); // speed (100ms per step)

        return () => clearInterval(interval);
    }, []);


    return (
        <div className="self-stretch px-5 py-3 pb-4 bg-white rounded-lg 
      inline-flex flex-col lg:w-[500px] w-[380px]   lg:justify-start justify-center lg:items-start gap-2 relative">
            {/* Header */}
            <div className="self-stretch h-11 inline-flex lg:justify-start lg:items-center">
                <div className="w-10 h-10 px-1 py-[3px] bg-white rounded-[32px]
                 flex justify-center items-center gap-1 overflow-hidden">
                    <div className="w-6 h-6 relative">
                        <BiArrowBack
                            onClick={onBack}
                            className="w-6 h-6 text-black cursor-pointer font-poppins"
                        />
                    </div>
                </div>
                <div className="w-80 text-center text-black text-lg font-semibold font-poppins">
                    Passenger Details
                </div>
            </div>

            {/* Passenger Info */}
            <div className="self-stretch flex flex-col justify-start items-center gap-12">
                <div className="flex flex-col items-center gap-4">
                    <div className="lg:w-24 lg:h-24 w-24 h-24 rounded-full overflow-hidden">
                        <img
                            className="w-full h-full object-cover"
                            src={booker.profileImage}
                            alt={booker.name}
                        />
                    </div>
                    {/* <img className="w-24 h-24 rounded-full" src={booker.profileImage} alt="Passenger" /> */}
                    <div className="text-black text-base font-semibold font-poppins">
                        {booker.name}
                    </div>
                </div>

                {/* Trip Details */}
                <div className="self-stretch flex flex-col gap-2">
                    <div className="h-14 px-4 bg-neutral-200 rounded-lg flex items-center">
                        <div className="text-primary-950 text-base font-medium font-poppins">
                            Trip Details
                        </div>
                    </div>

                    <div className="flex justify-between">
                        <div className="font-semibold font-poppins">Date:</div>
                        <div>
                            {rideDate.toLocaleString()}
                        </div>
                    </div>

                    <div className="flex justify-between">
                        <div className="font-semibold font-poppins ">Pick Up location:</div>
                        <div className="text-right">{location.locationName}</div>
                    </div>

                    <div className="flex justify-between">
                        <div className="font-semibold font-poppins">Destination: </div>
                        <div className="pl-2 text-right">{" " + destination.destinationName}</div>
                    </div>

                    <div className="flex justify-between">
                        <div className="font-semibold font-poppins">Trip Type:</div>
                        <div>{tripType}</div>
                    </div>

                    <div className="flex justify-between">
                        <div className="font-semibold font-poppins">Luggages:</div>
                        <div>{luggages}</div>
                    </div>

                    {/* Luggage Images */}
                    <div className="flex flex-col items-center gap-1">
                        <div className="text-neutral-600 text-xs font-medium font-poppins">
                            Click Single Image to view
                        </div>
                        <div className="inline-flex gap-2 flex-wrap lg:w-[438px] justify-center font-poppins">
                            {luggageImage && luggageImage.length > 0 ? (
                                luggageImage.map((img, index) => (
                                    <div key={index} className="relative lg:w-[100px] w-[100px] flex-wrap  flex justify-center">
                                        <img
                                            key={index}
                                            className=" rounded  cursor-pointer"
                                            src={img.url}
                                            alt={`Luggage ${index + 1}`}
                                            onClick={() => {
                                                setSelectedIndex(index);
                                                setModalType("image");
                                            }}
                                        />
                                    </div>
                                ))
                            ) : (
                                <div className="text-neutral-500 font-poppins">
                                    No luggage images available
                                </div>
                            )}
                        </div>
                    </div>
                </div>


                {/* price show on bid success */}
                {
                    amount && amount !== "" && (<div className="flex w-full justify-between py-2 ">
                        <div className="font-semibold font-poppins justify-start">Price: </div>
                        <div className="justify-end bg-red-50 rounded-xl px-4 text-red-500 font-semibold">₦{amount}</div>
                    </div>
                    )
                }




                {/* Schedule Details */}
                {
                    scheduledTrip && scheduledTrip.scheduled ?
                        (
                            <div className="self-stretch flex flex-col gap-2 pt-4">
                                <div className="h-14 px-4 bg-primary-50 rounded-2xl flex items-center">
                                    <div className="text-Primary-950 text-base font-medium font-poppins">
                                        Schedule Details
                                    </div>
                                </div>
                                <div className="flex gap-4 my-4">
                                    <div className="flex items-center gap-1">
                                        <ClockIcon className="-mt-[1px]" />
                                        <div className="text-sm lg:text-sm font-poppins">{scheduledTrip.scheduleTime}</div>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <DateIcon className="-mt-[2px]" />
                                        <div className="lg:text-sm text-sm font-poppins">{scheduledTrip.scheduleDate}</div>
                                    </div>
                                </div>
                            </div>
                        )
                        :
                        null
                }

            </div>

            {/* Accept Button */}

            <div
                className={`${request.bidPrice ? "hidden" :"block"} self-stretch ${btnName === "Track Passenger" ? "lg:hidden" : ""
                    }`} >

                <CustomButton
                    name={btnName || `Accept Ride and Enter Amount`}
                    btnClick={handleAcceptClick}
                    extendedStyles="w-full p-3 lg:p-4 bg-green-700 rounded-lg"
                />
            </div>

            {/* Image Modal */}
            {modalType === "image" && selectedIndex !== null && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="relative bg-white rounded-lg p-4 flex justify-center 
                          items-center lg:w-[591px] lg:h-[553px] w-[332px] h-[334px] font-poppins">
                        <button
                            onClick={() => setModalType(null)}
                            className="absolute top-2 right-2  font-poppins text-black"
                        >
                            <CloseMenuIcon />
                        </button>

                        {/* Prev Button */}
                        <button
                            onClick={handlePrev}
                            className="  absolute left-2 text-green-700 bg-primary-50 rounded-full shadow p-2"
                        >
                            <BiChevronLeft size={24} />
                        </button>

                        {/* Image */}
                        <div className="lg:w-[400px] w-[80%] max-w-[420px] h-auto object-contain rounded-lg">
                            <img
                                src={luggageImage[selectedIndex].url}
                                alt={`Luggage ${selectedIndex + 1}`}
                                className="rounded-lg"
                            />
                        </div>


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
                    <div className="relative bg-white rounded-3xl p-6 flex flex-col gap-2 w-[390px] lg:top-[] 
                        top-[35%] lg:top-0 h-[240px] lg:w-[633px] lg:h-[270.5px]">
                        {/* Close Button */}
                        <button
                            onClick={() => setModalType(null)}
                            className="right-2 text-black py- flex justify-end items-end "
                        >
                            <CloseMenuIcon className="lg:w-10 lg:h-10 w-6 h-6" />
                        </button>

                        {/* Input Label */}
                        <div className="text-black lg:text-lg text-sm font-poppins font-semibold">
                            Amount you are willing to drive the Passenger
                        </div>

                        {/* Input with ₦ symbol */}
                        <div className="relative w-full">
                            <InputField
                                type="number"
                                onChange={(e) => setAmount(e.target.value)}
                                placeholder="Enter amount"
                                leftIcon={NairaIcon}

                            />
                            {isAmountEmpty && (
                                <p className="text-red-500 text-sm mt-1 font-poppins">Please enter an amount.</p>
                            )}

                            {/* <input
                                type="number"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                placeholder="Enter amount"
                                className="border placeholder-gray-400 border-gray-300 rounded-lg p-2 pl-10 w-[80%] 
                focus:outline-none focus:ring-2 focus:ring-green-500 lg:text-xl"
                            /> */}
                        </div>

                        <CustomButton
                            isLoading={isLoading}
                            name="Set Price"
                            disabled={!amount.trim()}
                            btnClick={handleAmountSubmit}

                            extendedStyles={`font-medium py-2 w-full p-3 lg:p-4 rounded-lg bg-green-700 px-4 rounded-xl 
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
                    <div className="relative bg-white rounded-3xl p-6 flex justify-center items-center flex-col  w-[100%] lg:top-[] 
                        top-[32%] lg:top-0 h-[320px] lg:w-[640px] lg:h-[380px]">
                        <button
                            onClick={() => {
                                setModalType(null)
                                onBack()
                            }}
                            className="right-2  text-black w-full flex justify-end items-end "
                        >
                            <CloseMenuIcon className="lg:w-10 lg:h-10 w-8 h-8" />
                        </button>

                        {/* Progress Bar */}
                        <ProgressBar title="Waiting for Passenger to Respond" progress={progress} setProgress={setProgress} />

                        <CustomButton
                            btnClick={() => {
                                setModalType("loading")
                            }}

                            name="Refresh"
                            extendedStyles="w-full p-3 lg:p-4 
                        !bg-green-250 text-green-900 rounded-lg mb- mt-4" />

                        <CustomButton
                            btnClick={() => {
                            navigate("/dashboard/bids")
                            }}

                            name="See Response"
                            extendedStyles="w-full p-3 lg:p-4 
                         text-green-900 bg-green-700 text-white rounded-lg mb-6 mt-4" />

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
        // </div>
    );
};
