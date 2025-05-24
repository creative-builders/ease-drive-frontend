import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import CancelledIcon from "../../assets/images/canelled.png";
import LocationMap from "../../assets/images/Location.png";
import Header from "../../layout/dashboard/header/Header";
import toast from "react-hot-toast";


const LocationPopUp = ({ 
  close, 
  setSelected, 
  setPopupActionType,
  handleOverlayClick,
  handleCancel,
  handleUseLocation,
  coords,
  locationName
   }) => {

  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    setShowModal(true);
  },[])
  return (
    <div
      id="popup-overlay"
      onClick={handleOverlayClick}
      className="fixed inset-0 bg-black/60 z-50 flex flex-col items-center justify-center"
    >
      {/* <Header /> */}

      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-white rounded-xl shadow-xl p-6 w-11/12 sm:w-3/5 xl:w-[700px] transition-all duration-500 ease-in-out transform ${
          showModal ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Cancel Button */}
        <button
          onClick={handleCancel}
          className="absolute top-4 right-6 text-gray-500 hover:text-red-500"
        >
          <img src={CancelledIcon} alt="Cancel" className="h-5 w-5" />
        </button>

        <div className="flex flex-col items-center text-center">
          <img
            src={LocationMap}
            alt="Location"
            className="w-24 h-24 rounded-full mb-4"
          />
          <h2 className="text-2xl font-semibold">Enable your location</h2>
          <p className="text-gray-500 mt-2 w-full sm:w-3/4">
            Choose your location to start finding requests around you.
          </p>

          <button
            onClick={handleUseLocation}
            className="mt-6 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
          >
            Use my location
          </button>

          {coords && (
            <div className="mt-6 w-full h-64 rounded-lg overflow-hidden shadow">
              <MapContainer
                center={[coords.lat, coords.lon]}
                zoom={13}
                scrollWheelZoom={false}
                className="h-full w-full"
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[coords.lat, coords.lon]}>
                  <Popup>
                    {locationName || "Your location"}
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LocationPopUp;
