import React, { useState } from "react";

const BookingButtons = ({ setActiveTab,buttons:tabs }) => {
  const [activeTab, setTab] = useState(null);

  const handleClick = (tabName) => {
    setTab(tabName);
    setActiveTab(tabName);
  };

  // const tabs = ["Upcoming", "Completed", "Cancelled"];

  return (
    <div className="inline-flex items-center gap-4 rounded-md border border-[#20AE3A] bg-[#EFF5E9] mt-9">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => handleClick(tab)}
          className={`cursor-pointer px-3 py-2 rounded text-base font-medium leading-4 ${
            activeTab === tab
              ? "bg-[#20AE3A] text-white"
              : "bg-[#EFF5E9] text-[#444]"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default BookingButtons;
