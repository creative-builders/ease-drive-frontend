// import { Icon } from "@iconify/react";
import { useState } from "react";

export default function CustomSelect({
  label,
  error,
  options = [],
  value,
  onChange,
  leftIcon,
  rightIcon = "mdi:chevron-down",
  isRounded = false,
  placeholder = "Select an option",
  className = "",
  selectClassName = "", // <-- NEW
  ...props
}) {
  const [isFocused, setIsFocused] = useState(false);

  const baseStyles = isRounded
    ? "px-6 py-2 pr-10 rounded-full"
    : "pl-10 pr-10 py-2 rounded-md";

  return (
    <div className={`space-y-1 ${className}`}>
      {label && <label className="text-sm font-medium text-black">{label}</label>}

      <div className="relative w-full">
        {leftIcon && (
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            {typeof leftIcon === "string" ? (
              <img src={leftIcon} alt="icon" className="h-5 w-5 text-gray-400" />
            ) : (
              leftIcon
            )}
          </span>
        )}

        <select
          {...props}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`w-full border border-gray-300 focus:outline-none focus:ring-1 focus:ring-green-500 appearance-none text-sm bg-white ${baseStyles} ${selectClassName}`} // <- Add it here
        >
          <option value="">{placeholder}</option>
          {options.map((opt, index) => (
            <option key={index} value={opt}>
              {opt}
            </option>
          ))}
        </select>

        <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <img
            src={rightIcon}
            className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
              isFocused ? "rotate-180" : ""
            }`}
          />
        </span>
      </div>

      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}

