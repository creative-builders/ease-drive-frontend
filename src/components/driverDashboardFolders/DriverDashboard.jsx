import React, { useState } from "react";
import DriverSidebar from "./DriverSidebar";
import DriverNav from "./DriverNav";
import MetricCard from "./MetricCard";
import iconCard from "../../assets/icons/Package.svg"
import arrowUp from "../../assets/icons/Arrow up.svg"

export default function DriverDashboard() {
   const [activeTab, setActiveTab] = useState("Dashboard");

   // Mock data checks
    const requestData = [];
    const historyData = [];
    const earningData = []; 

    const renderContent = () => {
    switch (activeTab) {
      case "Dashboard":
        return (
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <MetricCard
              title="TOTAL RIDES"
              value="157,367"
              changePercentage={6.7}
              changeType="increase"
              icon={iconCard}
              arrow={arrowUp}
            />
            <MetricCard
              title="NEW USERS"
              value="2,450"
              changePercentage={1.2}
              changeType="increase"
              icon={iconCard}
              arrow={arrowUp}
            />
          </section>
        );

      case "Request":
        return requestData.length ? (
          <section>Render request data here</section>
        ) : (
          <p className="text-gray-600 text-center">No Request Found</p>
        );

      case "History":
        return historyData.length ? (
          <section>Render history data here</section>
        ) : (
          <p className="text-gray-600 text-center">No History Found</p>
        );

      case "Earning":
        return earningData.length ? (
          <section>Render earning data here</section>
        ) : (
          <p className="text-gray-600 text-center">No Earning Found</p>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
        <DriverSidebar className={'shadow-lg hidden md:flex flex-col p-4'} activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main content */}
      <main className="flex-1 p-4">
        <DriverNav className={`w-full mb-2`} />
        {/* Stats grid */}
        <section className="flex flex-col gap-3 mb-6">
          <h2 className="ml-4 capitalize font-[poppins] font-semibold text-3xl">hello emeka</h2>
          <p className="ml-4 capitalize">welcome to easedrive</p>
        </section>

        
        {/* Dynamic Content */}
        {renderContent()}
      </main>
    </div>
  );
}
