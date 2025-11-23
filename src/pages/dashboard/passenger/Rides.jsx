import { useState } from "react";


export const Rides = () => {
  // const tabs = ["Ride History", "Ongoing Rides", "Scheduled Rides"];
  const tabs = ["Ride History", "Ongoing Rides"];

  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="ml-4 lg:ml-0">
      <div className="flex items-center gap-x-2.5">
        <h2 className="basis-[178px] text-lg font-bold text-gray-950">Your Rides</h2>
        <div>
          {/* Tabs */}
          <div className="flex gap-x-1.5 ml-auto justify-center items-center bg-white rounded-[10px] h-[51px] border-b border-gray-300">
            {tabs.map((tab) => (
              <button
                onClick={() => setActiveTab(tab)}
                key={tab}
                className={`block w-[166px] h-full lg:w-[241px] px-[5px] py-2 rounded-[10px] lg:px-4 text-gray-950 font-medium ${activeTab === tab ? 'bg-primary-700 text-white' : ''}`}
              >
                {tab}
              </button>
            ))}
          </div>
          {/* Tab Content */}
          <div>
            {/* Content for the selected tab goes here */}
          </div>
          
        </div>
      </div>
    </div>
  )
}
