import React, { useState } from 'react';
import VehicleForm from './VehicleForm';

const Profile = () => {
  const [showVehicleForm, setShowVehicleForm] = useState(false);

  return (
    <div className="container mx-auto p-4">
        {!showVehicleForm ? (
        <div className="profile-view w-full md:w-1/2">
          {/* === Profile Header === */}
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Profile</h2>
          </div>

          {/* === Personal Info === */}
          <div className="mt-4 space-y-2">
            <p><strong>Full Name:</strong> Abubakar Job Chukwuemeka ✅</p>
            <p><strong>Email:</strong> Johndub@xyzmail.com</p>
            <p><strong>Phone:</strong> +2349077647845</p>
            <p><strong>Location:</strong> UNN Hostel C, Nsukka</p>
          </div>

          {/* === Vehicle Info === */}
          <div className="mt-6 border-t pt-4">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold">Vehicle Information</h3>
              <button
                className="text-blue-500 text-sm"
                onClick={() => setShowVehicleForm(true)}
              >
                Edit
              </button>
            </div>
            <ul className="mt-2 space-y-1">
              <li><strong>Type:</strong> Keke</li>
              <li><strong>Color:</strong> Black</li>
              <li><strong>Plate:</strong> EUG20456</li>
              <li><strong>Service Area:</strong> Main-Gate</li>
              <li><strong>Document:</strong> Document ID</li>
            </ul>
          </div>

          {/* === Account Options === */}
          <div className="mt-6 border-t pt-4 text-red-500 space-y-2">
            <button>Log Out</button>
            <button>Delete Account</button>
          </div>
        </div>
        ) : (
            <VehicleForm onBack={() => setShowVehicleForm(false)} />
        )}
    </div>
  );
};

export default Profile;
