import React from "react";
import { MapPin } from "lucide-react";
import { useState, useEffect } from "react";
import { useGeolocation } from "../../../hooks/useGeolocation";
import { getETA } from "../../../utils/getETA";

export const BidRequestCard = ({ ride }) => {
    const { booker, location, destination, status, } = ride;
    const [eta, setEta] = useState({})

    const {
        coords,

    } = useGeolocation();

    useEffect(() => {

        if (!coords || !destination?.coordinates) return;

        const fetchETA = async () => {
            const result = await getETA(coords, destination.coordinates);
            setEta(result);

        };

        fetchETA();
    }, [coords, destination]);

    const statusStyles = {
        pending: "bg-blue-100 text-blue-700",
        waiting: "bg-blue-100 text-blue-700",
        cancelled: "bg-red-100 text-red-700",
        ongoing: "bg-green-100 text-green-700",
        completed: "bg-gray-100 text-gray-700",
    };

    const statusDots = {
        pending: "bg-blue-600",
        waiting: "bg-blue-600",
        cancelled: "bg-red-600",
        ongoing: "bg-green-600",
        completed: "bg-gray-600",
    };

    const statusLabels = {
        pending: "Waiting for confirmation",
        waiting: "Waiting for confirmation",
        cancelled: "Ride cancelled",
        ongoing: "Ongoing ride",
        completed: "Ride completed",
    };

    const statusLower = status?.toLowerCase() || "pending";
    return (
        <div className="flex items-start gap-3 border-b border-gray-200 py-4">
            <img
                src={booker.profileImage}
                alt={booker.name}

                className="lg:w-[80px] lg:h-[80px] w-[40px] h-[40px] rounded-full object-cover bg-gray-100"
            />

            <div className="flex-1">
                <div className="flex items-center lg:justify-between gap-4 lg:gap-0 font-inter">
                    <h2 className="font-semibold lg:text-lg text-xs font-semibold text-gray-900">{booker.name}</h2>
                    <span
                        className={`flex items-center px-3 py-1 rounded-full lg:text-xs text-[8px] font-medium capitalize ${statusStyles[statusLower]}`}
                    >
                        <span
                            className={`w-2 h-2 rounded-full mr-1 ${statusDots[statusLower]}`}
                        ></span>
                        {statusLabels[statusLower]}
                    </span>
                </div>
                <div className="flex lg:flex-row flex-col items-start lg:text-sm text-[10px] text-gray-600 mt-1">
                    <div className="flex items-center mr-4">
                        <MapPin className="w-4 h-4 text-green-600 mr-1" />
                        <p className="flex-shrink-0 whitespace-nowrap ">
                            {eta && eta.formattedETA ? (

                                <p>{eta.formattedETA} away from you</p>
                            ) : (
                                <p>Calculating ETA...</p>
                            )}
                        </p>
                    </div>

                    <div className="flex items-baseline gap-2">
                        <p className="lg:text-sm text-[10px] flex-shrink-0 whitespace-nowrap  font-bold text-gray-700 mt-1">
                            Going to:
                        </p>
                        <p><span className="text-gray-700 text-right lg:text-sm text-[10px] font-medium">{destination.destinationName}</span></p>
                    </div>

                </div>
            </div>


        </div>
    );
};
