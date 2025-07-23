import React, { useState, useRef, useEffect } from "react";

export const CustomSelectField = ({
  label,
  name, // ✅ Add name prop
  icon: Icon,
  iconSrc,
  value,
  onChange,
  options = [],
  defaultHolder,
  rightIcon: RightIcon,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <label className="block lg:text-[18px] mb-1 max-990:text-[16px] w-[100%] font-medium text-[#333333]">
        {label}
      </label>

      <div
        className="flex items-center justify-between border border-[#A1A1A1] 
          lg:rounded-[16px] max-990:rounded-[8px] lg:px-4 lg:py-3 max-990:px-4 max-990:py-3 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center w-[100%] items-center justify-center">
          <div className="lg:w-[32px] lg:h-[32px] max-990:w-[18px] max-990:h-[18px] mr-2 mt-[6px]">
            {children}
          </div>

          <span
            className="text-gray-400 w-full outline-none text-placeholder lg:text-[18px] 
              max-990:text-[12px] font-inter"
          >
            {value || defaultHolder}
          </span>
        </div>

        {RightIcon && (
          <span className="ml-auto text-gray-400 pointer-events-none">
            <RightIcon />
          </span>
        )}
      </div>

      {isOpen && (
        <ul className="absolute z-10 bg-white mt-2 w-full border border-gray-300 rounded-xl shadow-md max-h-60 overflow-y-auto">
          {options.map((opt, idx) => (
            <li
              key={idx}
              onClick={() => {
                // ✅ Simulate event for handleUpdateFormData
                onChange({ target: { name, value: opt } });
                setIsOpen(false);
              }}
              className={`px-4 py-2 text-[16px] hover:bg-gray-100 cursor-pointer ${
                opt === value ? "bg-gray-100 font-semibold" : ""
              }`}
            >
              {opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
