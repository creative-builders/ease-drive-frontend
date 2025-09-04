import React from "react";
import { FilterIcon } from "../../assets/icons/FilterIcon";

// Function to get week number of the year
Date.prototype.getWeek = function () {
  const date = new Date(this.getTime());
  date.setHours(0, 0, 0, 0);
  date.setDate(date.getDate() + 3 - ((date.getDay() + 6) % 7));
  const week1 = new Date(date.getFullYear(), 0, 4);
  return (
    1 +
    Math.round(
      ((date.getTime() - week1.getTime()) / 86400000 -
        3 +
        ((week1.getDay() + 6) % 7)) /
        7
    )
  );
};

export const Filter = ({ itemsArray, options, onSort, title }) => {
  const [filter, setFilter] = React.useState(title || "Filter By");
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  // Helper to get week number
  const getWeek = (date) => {
    const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    const dayNum = d.getUTCDay() || 7;
    d.setUTCDate(d.getUTCDate() + 4 - dayNum);
    const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    return Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
  };

  const filteredAndSortedItems = React.useMemo(() => {
    let filtered = [...itemsArray];
    const today = new Date();

    switch (filter) {
      case "Daily":
        filtered = filtered.filter(
          (item) => new Date(item.date).toDateString() === today.toDateString()
        );
        break;

      case "Weekly":
        filtered = filtered.filter(
          (item) =>
            getWeek(new Date(item.date)) === getWeek(today) &&
            new Date(item.date).getFullYear() === today.getFullYear()
        );
        break;

      case "Monthly":
        filtered = filtered.filter(
          (item) =>
            new Date(item.date).getMonth() === today.getMonth() &&
            new Date(item.date).getFullYear() === today.getFullYear()
        );
        break;

      case "Yearly":
        filtered = filtered.filter(
          (item) => new Date(item.date).getFullYear() === today.getFullYear()
        );
        break;

      default:
        break;
    }

    // Sorting after filtering
    return filtered.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);

      if (filter === "Recent") return dateB - dateA;
      if (filter === "Older") return dateA - dateB;
      return 0;
    });
  }, [itemsArray, filter]);

  React.useEffect(() => {
    onSort(filteredAndSortedItems);
  }, [filteredAndSortedItems, onSort]);

  return (
    <div className="relative">
      <div
        className="w-full h-10 p-2.5 rounded-lg flex justify-center items-center gap-2.5 cursor-pointer"
        onClick={() => setDropdownOpen((prev) => !prev)}
      >
        <div className="text-accent-500 lg:text-base text-sm text-base font-medium font-poppins">
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
              onClick={() => {
                setFilter(option);
                setDropdownOpen(false);
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

