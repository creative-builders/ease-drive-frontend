import React from "react";
import DriverSidebar from "./DriverSidebar";
import DriverNav from "./DriverNav";
import MetricCard from "./MetricCard";
import iconCard from "../../assets/icons/Package.svg"
import arrowUp from "../../assets/icons/Arrow up.svg"

export default function DriverDashboard() {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
        <DriverSidebar className={'shadow-lg hidden md:flex flex-col p-4'} />

      {/* Main content */}
      <main className="flex-1 p-4">
        <DriverNav className={`w-full mb-2`} />
        {/* Stats grid */}
        <section className="flex flex-col gap-3 mb-6">
          <h2 className="ml-4 capitalize font-[poppins] font-semibold text-3xl">hello emeka</h2>
          <p className="ml-4 capitalize">welcome to easedrive</p>
        </section>

        {/* Content section */}
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
      </main>
    </div>
  );
}
