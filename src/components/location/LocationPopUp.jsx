// import React, { useState, useEffect } from 'react';
// import Header from "../../layout/dashboard/header/Header";
// import Canelled from '../../assets/images/canelled.png'

// const LocationPopUp = ({ close, setSelected }) => {
//   const [showModal, setShowModal] = useState(false);

//   useEffect(() => {
//     setShowModal(true);
//   }, []);

//   const handleUseLocation = () => {
//     close(false);
//     setSelected(null);
//   };

//   return (
//     <div
//       id="popup-overlay"
//       className="min-h-screen w-full flex flex-col items-center gap-6 top-0 left-0 bg-[url(/Map.png)] bg-cover bg-center relative"
//     >
//       <div className="absolute inset-0 bg-black/50"></div>
//       <Header />

//       {/* Modal */}
//       <div
//         className={`
//           h-[459px] sm:h-fit-content w-4/5 xl:w-[788px] bg-white flex flex-col m-auto items-center justify-around gap-5 p-4 rounded-xl z-10
//           transition-all duration-700 ease-out
//           ${showModal ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
//         `}
//       >
      
//       <img src={Canelled} alt="Cancel" className='h-4 w-4 cursor-pointer right-16 top-6 absolute' />

//         <div className="h-28 w-28 rounded-full">
//           <img className="h-full w-full" src="/src/assets/images/Location.png" alt="Location icon" />
//         </div>
//         <h2 className="capitalize text-2xl font-medium text-center">enable your location</h2>
//         <p className="text-center text-sm text-[#A0A0A0] mt-3 w-full sm:w-[280px]">
//           Choose your location to start finding requests around you
//         </p>
//         <button
//           onClick={handleUseLocation}
//           className="h-14 w-full rounded-lg bg-[#20AE3A] text-white inline-flex items-center justify-center gap-3"
//         >
//           Use my location
//         </button>
//       </div>
//     </div>
//   );
// };

// export default LocationPopUp;


import React, { useState, useEffect } from 'react';
import Header from "../../layout/dashboard/header/Header";
import Cancelled from '../../assets/images/canelled.png';
import LocationMap from '../../assets/images/Location.png';

const LocationPopUp = ({ close, setSelected, setPopupActionType }) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(true);
  }, []);

  // When user clicks "Use My Location"
  const handleUseLocation = () => {
    setPopupActionType('use-location');
    close(false); 
    setSelected(null);
  };

  // When user clicks "Cancel"
  const handleCancel = () => {
    setPopupActionType('cancel');
    close(false);
  };

  return (
    <div
      id="popup-overlay"
      className="min-h-screen w-full flex flex-col items-center gap-6 top-0 left-0 bg-[url(/Map.png)] bg-cover bg-center relative"
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <Header />

      {/* Modal */}
      <div
        className={`h-[459px] sm:h-fit-content w-4/5 xl:w-[788px] bg-white flex flex-col m-auto items-center justify-around gap-5 p-4 rounded-xl z-10
          transition-all duration-700 ease-out
          ${showModal ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        `}
      >
        {/* Cancel Button */}
        <img 
          src={Cancelled} 
          alt="Cancel" 
          className='h-4 w-4 cursor-pointer right-16 top-6 absolute' 
          onClick={handleCancel}
        />

        {/* Location Image */}
        <div className="h-28 w-28 rounded-full">
          <img className="h-full w-full" src={LocationMap} alt="Location icon" />
        </div>

        {/* Modal Text */}
        <h2 className="text-2xl font-medium text-center">Enable your location</h2>
        <p className="text-center text-sm text-[#A0A0A0] mt-3 w-full sm:w-[280px]">
          Choose your location to start finding requests around you
        </p>

        {/* Use My Location Button */}
        <button
          onClick={handleUseLocation}
          className="h-14 w-full rounded-lg bg-[#20AE3A] text-white inline-flex items-center justify-center gap-3"
        >
          Use my location
        </button>
      </div>
    </div>
  );
};

export default LocationPopUp;
