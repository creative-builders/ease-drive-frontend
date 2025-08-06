import React, { useState } from 'react';
import VehicleForm from './VehicleForm';

const Profile = () => {
  const [showVehicleForm, setShowVehicleForm] = useState(false);

  return (
    <div className="container mx-auto p-4">
      {!showVehicleForm ? (
        <div className="profile-view">
          {/* Profile Info */}
          <div className="flex justify-between items-center">
            <h2>Profile</h2>
          </div>
          {/* ... rest of profile content ... */}
          <button onClick={() => setShowVehicleForm(true)}>Edit</button>
        </div>
      ) : (
        <VehicleForm onBack={() => setShowVehicleForm(false)} />
      )}
    </div>
  );
};

export default Profile;
