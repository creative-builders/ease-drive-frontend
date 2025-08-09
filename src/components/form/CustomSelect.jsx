
import { useState } from "react";
import { ArrowDown } from "../../assets/icons/ArrowDown";

export default function CustomSelect({
  label,
  error,
  options = [],
  value,
  onChange,
  leftIcon,
  rightIcon = <ArrowDown />,
  isRounded = false,
  placeholder = "Select an option",
  className = "",
  selectClassName = "",
  ...props
}) {
  const [isOpen, setIsOpen] = useState(false);

  const baseStyles = isRounded
    ? "px-6 py-2 pr-10 rounded-[8px]"
    : "pl-10 pr-10 py-2 rounded-md";

  const handleSelect = (option) => {
    onChange && onChange({ target: { value: option } });
    setIsOpen(false);
  };

  return (
    <div className={`space-y-1 relative ${className}`}>
      {/* Label */}
      {label && (
        <label className="text-sm text-[14px] leading-normal not-italic font-medium text-black">
          {label}
        </label>
      )}

      {/* Dropdown Button */}
      <div
        className={`flex items-center justify-between border border-gray-300 cursor-pointer bg-white ${baseStyles} ${selectClassName}`}
        onClick={() => setIsOpen((prev) => !prev)}
        {...props}
      >
        {/* Left icon */}
        {leftIcon && (
          <span className="flex items-center pl-0 mr-2">
            {typeof leftIcon === "string" ? (
              <img
                src={leftIcon}
                alt="icon"
                className="h-5 w-5 text-gray-400"
              />
            ) : (
              leftIcon
            )}
          </span>
        )}

        {/* Selected text / placeholder */}
        <span
          className={`flex-1 text-left truncate ${
            value ? "text-black" : "text-gray-400"
          }`}
        >
          {value || placeholder}
        </span>

        {/* Right icon */}
        <span
          className={`ml-2 text-gray-400 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          {rightIcon}
        </span>
      </div>

      {/* Dropdown List */}
      {isOpen && (
        <ul className="absolute z-10 bg-white mt-1 w-full border border-gray-300 rounded-xl shadow-md max-h-60 overflow-y-auto">
          {options.map((opt, index) => (
            <li
              key={index}
              onClick={() => handleSelect(opt)}
              className="px-4 py-2 text-[16px] hover:bg-gray-100 cursor-pointer"
            >
              {opt}
            </li>
          ))}
        </ul>
      )}

      {/* Error message */}
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}

