import React, { useState, useEffect } from "react";
import { BidRequestCard } from "./BidRequestCard";
import { FaArrowLeft } from "react-icons/fa";
import { getDriverBids } from "../../../store/auth/driver/api";
import { useMutation } from "@tanstack/react-query";
import { userAtom } from "../../atoms/userAtom";
import { useRecoilValue } from "recoil"
import { ConfirmBookingLoader } from "../../dashboard/loaders/ConfirmBookingLoader"
import { CloseMenuIcon } from "../../../assets/icons/CloseMenuIcon";
import { SuccessIcon } from "../../../assets/icons/SuccesIcon";
import { FailureIcon } from "../../../assets/icons/FailureIcon";
import CustomButton from "../../CustomButton";
import { useNavigate } from "react-router-dom";




export const BidRequestsList = ({ request, onSelect, onBack }) => {

    const [rideRequests, setRideRequests] = useState([]);
    const userData = useRecoilValue(userAtom);
    const [isFetching, setIsFetching] = useState(true)
    const [modalType, setModalType] = useState(null);
    const [booker, setBooker] = useState(null);

    const userId = userData?._id;

    const navigate = useNavigate()

    const { mutate: getBidedRides, isLoading } = useMutation(
        getDriverBids,
        {
            onSuccess: (data) => {
                setRideRequests(data);
                setIsFetching(false)
            },
            onError: (error) => {
                toast.error(error.response?.data?.message || error.message);
            }
        }
    );

    useEffect(() => {
        getBidedRides({ userId: userId })
    }, [])


    const handleRefresh = () => {
        // Example refresh action
        setIsFetching(true)
        getBidedRides({ userId: userId })
        onBack()

    };

    if (isFetching) {
        return (
            <div className="lg:w-[1000px] gap-10 justify-between h-full flex ">
                <div className="lg:w-[100%]">
                    <ConfirmBookingLoader variant="list" />
                </div>
                <div className="lg:w-[100%]">

                    <ConfirmBookingLoader variant="card" />
                </div>
            </div>
        )
    }
    return (

        <div className="lg:w-[600px] w-[370px] mx-auto bg-white min-h-screen px-4 py-5 rounded-2xl shadow-sm">
            {/* Header */}
            <div className="flex justify-between items-center mb-5">
                <h2 className="lg:text-xl text-sm font-semibold text-gray-800 items-center" >
                    <FaArrowLeft className="inline mr-2 cursor-pointer" onClick={() => navigate("/dashboard/requests")}  />
                    Ongoing Ride Requests
                </h2>
                <button
                    onClick={handleRefresh}
                    className="bg-green-700 hover:bg-green-700 text-white lg:text-lg text-sm
                     font-medium lg:px-12 lg:py-4 py-2 px-6 rounded-xl transition"
                >
                    Refresh
                </button>
            </div>

      
            <div>
                {rideRequests.map((ride, index) => (
                    <div
                        key={index}
                        onClick={() => {
                            const rideStatus = ride.status?.toLowerCase();
                  
                            if (rideStatus === "ongoing") {
                                setModalType("success");
                            } else if (rideStatus === "cancelled") {
                                setModalType("failed");
                            }

                            onSelect(ride);
                            setBooker(ride.booker);
                        }}
                        className="cursor-pointer w-full font-poppins"
                    >
                        <BidRequestCard key={ride.id} ride={ride} />
                    </div>
                ))}
            </div>



            {modalType === "success" && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="relative bg-white rounded-3xl p-6 flex flex-col gap-4 w-[390px] lg:top-[] 
                                    top-[28%] lg:top-0 h-[335px] lg:w-[640px] lg:h-[380px] justify-center items-center">
                        <button
                            onClick={() => {
                                setModalType(null);

                            }}
                            className="right-2 text-black w-full flex justify-end items-end lg:pt-2 pt-4"
                        >
                            <CloseMenuIcon className="lg:w-10 lg:h-10 w-8 h-8" />
                        </button>


                        <div className="lg:w-[90px] lg:h-[90px] w-[90px] h-[90px]
                                     bg-green-500 flex items-center justify-center rounded-full">
                            <SuccessIcon className="w-[50px] h-[90px] bg-green-500 flex items-center justify-center rounded-full" />
                        </div>
                        <p className="font-medium lg:text-lg text-base text-center font-poppins ">
                            <span className="font-semibold lg:text-2xl text-base font-poppins ">
                                Congratulations, Bid Accepted!
                            </span>
                            <br />
                            Congratulations, <strong> {booker.name} </strong> accepted your bid.</p>
                       
                        <CustomButton
                            btnClick={() => {
                                if (request && onRideAccepted) {
                                    onRideAccepted(request);
                                    setModalType(null);
                                }
                            }}

                            name="View Passenger Details"
                            extendedStyles="w-full p-3 lg:p-4 
                                    !bg-green-250 text-green-900 rounded-lg mb-6 mt-4" />


                    </div>
                </div>
            )}


            {modalType === "failed" && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="relative bg-white rounded-3xl p-6 flex flex-col gap-4 w-[390px] lg:top-[] 
                        top-[28%] lg:top-0 h-[335px] lg:w-[640px] lg:h-[380px] justify-center items-center">

                        <button
                            onClick={() => {
                                setModalType(null)
                                onBack()
                            }}
                            className="right-2  text-black w-full flex justify-end items-end lg:pt-2 pt-4"
                        >
                            <CloseMenuIcon className="lg:w-10 lg:h-10 w-8 h-8" />
                        </button>


                        <div className="lg:w-[90px] lg:h-[90px] w-[90px] h-[90px] bg-red-500 flex items-center justify-center rounded-full">
                            <FailureIcon className=" w-[50px] h-[90px] bg-red-500 flex items-center justify-center rounded-full" />
                        </div>

                        <p className="font-medium lg:text-lg text-center font-poppins">
                            <span className="font-semibold lg:text-lg font-poppins ">
                                Sorry, No Passenger Responded.
                            </span>
                            <br />
                            No one responded to your offer you can try again some other time.</p>
                        <CustomButton name="Try again" btnClick={() => {
                            setModalType("amount")
                        }} extendedStyles="w-full p-3 lg:p-4 !bg-green-250 
                        text-green-900 rounded-lg mb-6 mt-4" />


                    </div>
                </div>
            )}

        </div>
    );
};
