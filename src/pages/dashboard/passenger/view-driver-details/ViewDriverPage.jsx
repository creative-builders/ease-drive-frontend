
import React, { useState } from "react";
import { DriverBookingCard } from "./DriverBookingCard";
import { BookDriver } from "./BookDriver";
import driverData from "./driverData";
import useIsMobile from "../../../../hooks/useIsMobile";


export const ViewDriverPage = () => {
  
  const [selectedDriver, setSelectedDriver] = useState(null);
  const isMobile = useIsMobile();
  return (
    <div className="w-full relative gap-5 items-center justify-center flex md:p-10 bg-transparent md:bg-accent-50">
      {(!selectedDriver || !isMobile) && (
        <div className="w-full md:w-1/2">
          <DriverBookingCard
            drivers={driverData}
            onSelectDriver={setSelectedDriver}
          />
        </div>
      )}

      {selectedDriver && (
        <div className="w-full md:w-1/2">
          <BookDriver driver={selectedDriver} onBack={() => setSelectedDriver(null)} />
        </div>
      )}
    </div>
  )
}