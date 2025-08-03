import React from 'react'

export const Modal = ({ closeModal, title, bodyText, modalIcon, children }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
            <div className="bg-white rounded-[32px] w-[90%] max-w-[614px] p-6 relative">
                <button
                    className="absolute top-4 right-4 text-gray-600 hover:text-black text-[34px] font-bold"
                    onClick={closeModal}
                >
                    &times;
                </button>

                <div className="flex flex-col items-center justify-center text-center">

                    <div className="w-[106px] h-[99px]"  >
                        {modalIcon}
                    </div>
                    <h2 className="text-[32px] pt-4 font-bold text-[#333333]">
                        {title}
                    </h2>
                    <p className="text-[18px] font-medium text-[#333333] pt-4">
                        {bodyText}

                    </p>

                    {children}
                </div>
            </div>
        </div>
    )
}
