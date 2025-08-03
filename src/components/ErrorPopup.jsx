import React from "react";
import { IoClose } from "react-icons/io5";

const ErrorPopup = ({ message, show, onClose }) => {
    return (
        <div
            className={`fixed top-6 right-6 z-50 max-w-sm w-full p-4 rounded-lg shadow-lg transition-transform duration-300 ease-in-out 
                ${show ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"} 
                bg-red-500 text-white`}
        >
            <div className="flex justify-between items-start">
                <span className="text-sm font-medium">{message}</span>
                <button
                    onClick={onClose}
                    className="ml-4 text-white hover:text-gray-200 focus:outline-none"
                >
                    <IoClose size={18} />
                </button>
            </div>
        </div>
    );
};

export default ErrorPopup;
