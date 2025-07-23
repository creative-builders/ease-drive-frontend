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
    <div className={`mb-4 ${className}`}>
      {label && (
        <label htmlFor={id} className="block font-[inter] text-[14px] leading-[100%] tracking-normal font-medium mb-2">
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
          className={`w-full px-5 py-2 gap-2 border border-gray-300 mb-2 rounded-2xl focus:outline-none focus:ring-0 focus:ring-transparent ${
            leftIcon ? "pl-10" : ""
          } ${rightIcon ? "pr-10" : ""} placeholder-gray-200 ${inputClassName}`}
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