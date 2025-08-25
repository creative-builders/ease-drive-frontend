import React from "react";
import { CloseMenuIcon } from "../../assets/icons/CloseMenuIcon";

export const DashBoardModal = ({ isOpen, onClose, children, className = "" }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className={`relative bg-white rounded-3xl p-6 ${className}`}>
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-black"
        >
          <CloseMenuIcon className="lg:w-12 lg:h-12 w-6 h-6" />
        </button>

        {children}
      </div>
    </div>
  );
};

