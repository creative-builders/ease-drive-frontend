import React from 'react'

export const Modal = ({
  closeModal,
  title,
  bodyText,
  modalIcon,
  iconWidth = "90px",
  iconHeight = "90px",
  iconBg = "",
  children,
  position = "center",
  width = "90%",
}) => {
  // Position only applies on mobile, desktop always center
  const positionClasses = {
    top: "items-start pt-10 lg:items-center lg:pt-0",
    center: "items-center",
    bottom: "items-end -mb-5 lg:items-center lg:pb-0",
  }

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 z-[1010] flex justify-center ${positionClasses[position]}`}
    >
      <div
        className="bg-white w-full lg:w-auto max-w-[614px] p-6 relative rounded-[32px] "
        style={{ width }}
      >
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-black text-[34px] font-bold"
          onClick={closeModal}
        >
          &times;
        </button>

        <div className="flex flex-col items-center justify-center text-center gap-2">
            
          {/* Modal Icon Wrapper */}
          <div
            className={`${iconBg} flex items-center justify-center rounded-full`}
            style={{ width: iconWidth, height: iconHeight }}
          >
            {/* Render the icon */}
            {modalIcon}
          </div>

          <h2 className="lg:text-[32px] text-[14px] pt-4 font-bold text-[#333333]">
            {title}
          </h2>

          <p className="lg:text-[16px] text-[12px] font-medium text-[#333333] pt-4 pb-2">
            {bodyText}
          </p>

          {children}
        </div>
      </div>
    </div>
  )
}
