// import React, {useState} from 'react'
// import { DriverBookingCard } from './DriverBookingCard';
// import { BookDriver } from './BookDriver';
// import driverData from './driverData';

// const ViewDriverPage = () => {

//     const [selectedDriver, setSelectedDriver] = useState(null);

//   return (
//     <div className="w-full relative gap-5 items-center justify-center flex md:p-10  bg-accent-50 md:bg-transparent]">
//       {/* Left: Driver list */}
//       <div className="w-full md:w-1/2">
//         <DriverBookingCard
//           drivers={driverData}
//           onSelectDriver={setSelectedDriver}
//         />
//       </div>

//       {/* Right: Book Driver */}
//       <div className="w-full md:w-1/2">
//         {selectedDriver && (
//           <BookDriver
//             driver={selectedDriver}
//             onBack={() => setSelectedDriver(null)}
//           />
//         )}
//       </div>
//     </div>
//   )
// }

// export default ViewDriverPage


import React, { useState } from "react";
import { DriverBookingCard } from "./DriverBookingCard";
import { BookDriver } from "./BookDriver";
import driverData from "./driverData";
import useIsMobile from "../../../../hooks/useIsMobile"; // import the hook

const ViewDriverPage = () => {
  const [selectedDriver, setSelectedDriver] = useState(null);
  const isMobile = useIsMobile(); // check if screen is mobile

  return (
    <div className="w-full relative gap-5 items-center justify-center flex md:p-10 bg-transparent md:bg-accent-50">
      {/* Driver list */}
      {(!selectedDriver || !isMobile) && (
        <div className="w-full md:w-1/2">
          <DriverBookingCard
            drivers={driverData}
            onSelectDriver={setSelectedDriver}
          />
        </div>
      )}

      {/* Book Driver */}
      {selectedDriver && (
        <div className="w-full md:w-1/2">
          <BookDriver driver={selectedDriver} onBack={() => setSelectedDriver(null)} />
        </div>
      )}
    </div>
  );
};

export default ViewDriverPage;
