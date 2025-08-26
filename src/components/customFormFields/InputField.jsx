import { AlertCircle } from "../../assets/icons/AlertCircle";




export const InputField = ({
  label,
  extendedStyles,
  containerStyles,
  labelStyles,
  inputTextStyles,
  inputWrapperStyles,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  leftIcon: LeftIcon,
  error,
  isPassword = false,
  showPassword,
  handleTogglePassword,
  rightIconOpen: RightIconOpen,
  rightIconClose: RightIconClose,
  rightIcon: RightIcon
}) => {
 
const inputType = isPassword ? (showPassword ? "text" : "password") : type;

  return (
    <div className={`${containerStyles} mb-4 relative`}>
      {label && (
        <label htmlFor={name} className={`${labelStyles} block mb-2 text-sm lg:text-lg`}>
          {label}
        </label>
      )}

      <div
        className={`${inputWrapperStyles} flex items-center gap-x-2 px-1.5 lg:px-4 h-[45px] lg:h-[54px] border rounded-md lg:rounded-lg bg-white transition-colors ${extendedStyles} 
          ${error ? "border-red-500" : "border-neutral-400"}
        `}
      >
        {LeftIcon && <LeftIcon className="w-[18px] lg:w-[32px] h-[18px] lg:h-[32px]" />}

        <input
          type={inputType}
          name={name}
          id={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`${inputTextStyles} w-full bg-white border-none focus:border-none focus:ring-0 placeholder-neutral-400 text-neutral-400 text-xs lg:text-lg`}
        />

        {isPassword && handleTogglePassword && (
          <span onClick={handleTogglePassword} className="text-gray-500 cursor-pointer">
            {showPassword ? (
              <RightIconOpen className="w-[18px] lg:w-[32px] h-[18px] lg:h-[32px]" />
            ) : (
              <RightIconClose className="w-[18px] lg:w-[32px] h-[18px] lg:h-[32px]" />
            )}
          </span>
        )}

        {RightIcon && <RightIcon className="w-[18px] lg:w-[32px] h-[18px] lg:h-[32px]" />}
      </div>

      {error && (
        <div className="mt-2 flex items-center gap-x-1.5 text-red-500 text-sm">
          <AlertCircle stroke="#ff0000" />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
};

