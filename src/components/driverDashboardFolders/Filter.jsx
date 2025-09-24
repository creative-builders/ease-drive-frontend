// Filter.js
import React from "react";
import { FilterIcon } from "../../assets/icons/FilterIcon";

export const Filter = ({ options, onChange, title }) => {
  const [filter, setFilter] = React.useState(title || "Filter By");
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  const handleFilterChange = (option) => {
    setFilter(option);
    setDropdownOpen(false);
    onChange(option);   
  };

  return (
    <div className="relative">
      <div
        className="w-full h-10 p-2.5 rounded-lg flex justify-center items-center gap-2.5 cursor-pointer"
        onClick={() => setDropdownOpen((prev) => !prev)}
      >
        <div className="text-accent-500 lg:text-base text-sm font-medium font-poppins">
          {filter}
        </div>
        <div className="lg:w-[24px] lg:h-[24px] w-[18px] h-[18px] relative">
          <FilterIcon />
        </div>
      </div>

      {dropdownOpen && (
        <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
          {options.map((option, idx) => (
            <div
              key={idx}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer font-poppins"
              onClick={() => handleFilterChange(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
