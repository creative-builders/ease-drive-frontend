// import { Icon } from "@iconify/react";

export default function FormInput({
  label,
  type = "",
  id,
  name,
  value,
  onChange,
  placeholder,
  required,
  error,
  className = "",
  leftIcon,         
  rightIcon,        
  inputClassName = "",
}) {
  return (
    <div className={`mb-4t ${className}`}>
      {label && (
        <label htmlFor={id} className="block text-gray-700 text-sm font-medium mb-2">
          {label}
        </label>
      )}
      <div className="relative">
        {leftIcon && (
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            {leftIcon}
          </span>
        )}
        <input
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          placeholder={placeholder}
          className={`w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 ${
            leftIcon ? "pl-10" : ""
          } ${rightIcon ? "pr-10" : ""} placeholder-gray-600 ${inputClassName}`}
        />
        {rightIcon && (
          <span className="absolute inset-y-0 right-0 flex items-center pr-3">
            {rightIcon}
          </span>
        )}
      </div>
      {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
    </div>
  );
}
