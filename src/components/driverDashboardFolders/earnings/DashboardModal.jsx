import React from 'react'
import CustomButton from "../../CustomButton"
import { CloseMenuIcon } from '../../../assets/icons/CloseMenuIcon'

export const DashboardModal = ({
    isOpen,
    onClose,
    icon,
    iconBg = "bg-gray-200",
    title,
    message,
    actionLabel,
    onAction,
    actionStyles = "bg-green-700 text-white",
    size = "default",
}) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div
                className={`relative bg-white rounded-3xl p-6 flex flex-col gap-4 lg:top-[0%] top-[28%]
        justify-center items-center 
        ${size === "default" ? "w-[390px] h-[335px] lg:w-[640px] lg:h-[380px]" : ""}
        ${size === "large" ? "w-[420px] h-[365px] lg:w-[640px] lg:h-[400px]" : ""}`}
            >
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="right-2 text-black w-full flex justify-end items-end lg:pt-2 pt-4"
                >
                    <CloseMenuIcon className="lg:w-10 lg:h-10 w-8 h-8" />
                </button>

                {/* Icon */}
                <div className={`w-[90px] h-[90px] flex items-center justify-center rounded-full ${iconBg}`}>
                    {icon}
                </div>


                {/* Title & Message */}
                <p className="font-medium lg:text-lg text-base text-center font-poppins">
                    <span className="font-semibold lg:text-2xl text-base font-poppins block mb-1">
                        {title}
                    </span>
                    {message}
                </p>

                {/* Action Button */}
                {actionLabel && (
                    <button
                        onClick={onAction}
                        className={`w-full p-3 lg:p-4 rounded-lg mb-6 mt-4 ${actionStyles}`}
                    >
                        {actionLabel}
                    </button>
                )}
            </div>
        </div>
    );
};