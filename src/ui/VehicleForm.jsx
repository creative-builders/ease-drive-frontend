// import React from 'react';

const VehicleForm = ({ onBack }) => {
  return (
    <div className="vehicle-form w-full max-w-lg mx-auto p-4 bg-white rounded-md shadow">
      <div className="flex items-center mb-4">
        <button onClick={onBack} className="text-xl mr-2">←</button>
        <h2 className="text-lg font-semibold">Vehicle Information</h2>
      </div>

      <form>
        <input className="w-full mb-3 p-2 border rounded" placeholder="Vehicle Type" />
        <input className="w-full mb-3 p-2 border rounded" placeholder="Plate Number" />
        <input className="w-full mb-3 p-2 border rounded" placeholder="Service Area" />
        <div className="flex gap-2">
          <input className="w-1/2 p-2 border rounded" placeholder="Vehicle Colour" />
          <input className="w-1/2 p-2 border rounded" placeholder="No. of Seats" />
        </div>
        <select className="w-full mt-3 p-2 border rounded">
          <option>Driver's Licence</option>
          <option>Voter’s Card</option>
        </select>

        <div className="mt-4">
          <label className="block mb-1">Upload Vehicle Photos</label>
          <input type="file" multiple accept="image/*" className="mb-3" />
          <p className="text-xs text-gray-500">Up to 4 images. Max 2MB each (JPG, PNG).</p>
        </div>

        <button type="submit" className="mt-4 bg-green-600 text-white py-2 px-4 rounded">
          Save
        </button>
      </form>
    </div>
  );
};

export default VehicleForm;
