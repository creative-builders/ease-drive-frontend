import React from "react";

export const CustomSelectField = ({
  label,
  name,
  value,
  onChange,
  options = [],
  defaultHolder,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
}) => {
  return (
    <div className="relative w-full ">
      {label && (
        <label
          htmlFor={name}
          className="block lg:text-lg mb-1 text-base font-normal text-gray-800"
        >
          {label}
        </label>
      )}

      <div className="flex items-center 
        lg:rounded-[10px] rounded-[8px] lg:px-4 px-3 py-2 border-neutral-400 border rounded-md
        relative bg-white">

        {/* Left Icon */}
        {LeftIcon && (
          <span className="mr-3 text-gray-500 flex-shrink-0">
            <LeftIcon className="lg:w-8 lg:h-8 w-5 h-5" />
          </span>
        )}

        {/* Native Select */}
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className="flex-1 appearance-none bg-transparent text-gray-700 
            lg:text-lg text-sm font-inter placeholder-neutral-400 text-neutral-400
            border-none outline-none focus:ring-0 pr-8"
        >
          {defaultHolder && (
            <option value="" disabled hidden>
              {defaultHolder}
            </option>
          )}
          {options.map((opt, idx) => (
            <option key={idx} value={opt.value}>

              {opt}
            </option>
          ))}
        </select>

        {/* Right Icon (overlays the default arrow) */}
        {RightIcon && (
          <span className="absolute right-6 pointer-events-none text-neutral-400">
            <RightIcon className="lg:w-6 lg:h-6 w-4 h-4" />
          </span>
        )}
      </div>
    </div>
  );
};
