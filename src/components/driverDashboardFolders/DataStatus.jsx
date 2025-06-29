
import React, { useState } from 'react';

const DataStatus = ({defaultState = false, onToggle = () => {}, labelOn = 'Online', labelOff = 'Offline', className =''}) =>{
    const [isOnline, setIsOnline] = useState(defaultState);

  const toggleStatus = () => {
    setIsOnline(prev => {
      const newState = !prev;
      onToggle(newState); 
      return newState;
    });
  };

  return <div className={`w-40 mx-auto flex items-center gap-3 ${className}`}>
    <span className={`font-semibold ${isOnline ? 'text-green-600' : 'text-gray-800'}`}>
        {isOnline ? labelOn : labelOff}
    </span>
   
    <button
        onClick={toggleStatus}
        className={`w-14 h-7 flex items-center rounded-full p-1 transition-colors duration-300
          ${isOnline ? 'bg-green-500' : 'bg-gray-400'}`}
    >
        <div
          className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300
            ${isOnline ? 'translate-x-7' : 'translate-x-0'}`}
        />
    </button>
    
  </div>
}
export  default DataStatus

// how to reuse the components in another fille

{/* <DataStatus 
  defaultState={true}
  labelOn="Active"
  labelOff="Inactive"
  onToggle={(state) => console.log("User is now:", state ? "Online" : "Offline")}
/> */}
