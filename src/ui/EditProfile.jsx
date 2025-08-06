import React from 'react';

const VehicleForm = ({ onBack }) => {
  return (
    <div className="vehicle-form">
      <button onClick={onBack}>←</button>
      <h2>Vehicle Information</h2>
      {/* Form fields here */}
    </div>
  );
};

export default VehicleForm;
