import React, { useState, useEffect } from 'react'
import { InfoCard } from './InfoCard';
import { EarningsIcon } from "../../../assets/icons/dashboard/EarningsIcon"
import CustomButton from "../../CustomButton"
import { DashboardEarningChart } from './EarningsChart';
import { AccountCenter } from './AccountCenter';
import { Filter } from '../Filter';
import { TripsPage } from './TripsTable';
import { getDriverBids } from "../../../store/auth/driver/api";
import { useMutation } from "@tanstack/react-query";
import { userAtom } from "../../atoms/userAtom";
import { useRecoilValue } from "recoil"
import { formatDate } from "../../../utils/formatDate";
import { ConfirmBookingLoader } from "../../dashboard/loaders/ConfirmBookingLoader";
import {Modal} from "../../Modal"
import { TripDetailsModal } from './TripDetailsModal';



export const Earnings = () => {


    const [rideRequests, setRideRequests] = useState([]);
    const [isFetching, setIsFetching] = useState(true)
    const userData = useRecoilValue(userAtom);
    const userId = userData?._id;

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

    const [selectedTrip, setSelectedTrip] = useState(null);

    useEffect(() => {
        getBidedRides({ userId: userId })
    }, [])


    //      if(isFetching){
    //     return (
    //       <ConfirmBookingLoader type="card" items={2}/>
    //     )
    //    }
    return (
        <div className="py-2.5 h-full inline-flex flex-col lg:justify-start lg:items-start justify-center items-center">
            <div className="inline-flex justify-start items-start ">
                <div className="lg:w-[563px] w-[100%] m-auto font-poppins inline-flex flex-col lg:justify-start lg:items-start gap-4">
                    <div className='flex lg:gap-2 gap-3'>
                        <InfoCard title="Current Balance" InfoIcon={EarningsIcon} value={"0.00"} footer={{ text: "Earnings this month", value: "0.00" }} />
                        <InfoCard title="Total Earnings" InfoIcon={EarningsIcon} value={"0.00"} footer={{ text: "Since account activation", value: "0.00" }} />
                    </div>


                    <div className='flex flex-col lg:gap-4 gap-2 justify-start items-start lg:flex-row '>
                        <AccountCenter />
                        <DashboardEarningChart tripData={rideRequests} />

                    </div>

                    {
                        isLoading ? (
                            <div className="lg:w-[990px] h-full w-[380px] flex flex-col justify-start ">
                                <ConfirmBookingLoader type="list" items={3} />
                            </div>

                        ) : (
                            <div className=" lg:h-[828px] lg:w-[990px] h-full w-[380px] flex flex-col justify-start ">
                                <TripsPage className="w-full" tripData={rideRequests} onView={setSelectedTrip} />

                                {selectedTrip && (
                                    <Modal closeModal={() => setSelectedTrip(null)} position="bottom">
                                        <TripDetailsModal trip={selectedTrip} />
                                    </Modal>
                                )}

                            </div>
                        )


                    }


                </div>
            </div>



        </div >

    )
}
