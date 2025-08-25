import { Outlet } from 'react-router-dom';
import Header from '../../../layout/dashboard/header/Header';
import { useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';


const OldPassengerDashboard = () => {
  const [coords, setCoords] = useState(null);


  return (
    <div className="relative min-h-screen w-full">
      {/* Header */}
      <Header />

      {/* Background: Map or Static Image */} 
      <div className="absolute top-0 left-0 w-full h-full z-0">
        {coords ? (
          <MapContainer
            center={[coords.lat, coords.lon]}
            zoom={13}
            scrollWheelZoom={false}
            className="w-full h-full pointer-events-none"
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          </MapContainer>
        ) : (
          <div className="w-full h-full bg-[url('/Group.png')] bg-cover bg-center"></div>
        )}
      </div>

      {/* Page content */}
      <div className="relative z-10 pt-16 overflow-auto xl:pb-[74px]">
        <Outlet context={{ coords, setCoords}} />
      </div>
    </div>
  );
};

export default OldPassengerDashboard;
