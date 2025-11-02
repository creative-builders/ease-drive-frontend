
import React, { useState } from "react";
import { FaChevronDown, FaIdCard } from "react-icons/fa";
import { Divider } from "../Divider/Divider";

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
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleSelect = (option) => {
    setSelected(option);
    setOpen(false);
    onChange?.(option);
  };

  return (
    <div className="relative w-full">
      {label && (
        <label className="block mb-2 text-sm lg:text-lg">{label}</label>
      )}

      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full border gap-4 border-neutral-400 rounded-lg px-3 lg:py-3 py-2 bg-white"
      >
        {LeftIcon && (
          <LeftIcon className="text-neutral-400 w-[18px] lg:w-[32px] h-[18px] lg:h-[32px]" />
        )}

        <div className="flex items-center flex-1 text-neutral-400 text-base lg:text-lg">
          {selected?.iconLeft && (
            <selected.iconLeft className="w-[18px] lg:w-[32px] h-[18px] lg:h-[32px] mr-2 text-neutral-400" />
          )}
          <span>{selected?.value || selected || defaultHolder}</span>
          {selected?.iconRight && (
            <selected.iconRight className="w-[18px] lg:w-[32px] h-[18px] lg:h-[32px] text-neutral-400" />
          )}
        </div>

        {RightIcon && (
          <RightIcon
            className={`w-[18px] lg:w-[24px] h-[18px] lg:h-[24px] text-neutral-400 transition-transform ${
              open ? "rotate-180" : ""
            }`}
          />
        )}
      </button>

      {open && (
        <div className="absolute z-10 mt-1 py-4 w-full bg-white border border-neutral-400 rounded-lg shadow-lg">
          {options.map((opt, idx) => {
            if (typeof opt === "string") {
              return (
                <div key={idx}>
                  <div
                    onClick={() => handleSelect(opt)}
                    className="flex items-center text-sm lg:text-lg text-neutral-600 px-3 py-2 hover:bg-neutral-200 cursor-pointer"
                  >
                    <span>{opt}</span>
                  </div>
                  <Divider className="ml-2 w-full text-neutral-400" />
                </div>
              );
            }
            return (
              <div key={idx}>
                <div
                  onClick={() => handleSelect(opt)}
                  className="flex items-center text-sm lg:text-lg text-neutral-600 px-3 py-2 hover:bg-neutral-200 cursor-pointer"
                >
                  {opt.iconLeft && (
                    <opt.iconLeft className="w-[18px] lg:w-[32px] h-[18px] lg:h-[32px] mr-2 text-neutral-400" />
                  )}
                  <span>{opt.value}</span>
                  {opt.iconRight && (
                    <opt.iconRight className="w-[18px] lg:w-[32px] h-[18px] lg:h-[32px] ml-2 text-neutral-400" />
                  )}
                </div>
                <Divider className="ml-2 w-full text-neutral-400" />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

