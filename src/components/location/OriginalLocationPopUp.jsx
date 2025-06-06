import { useState, useEffect } from "react";
import Header from "../../layout/dashboard/header/Header";
import LocationMap from "../../assets/images/Location.png";
import Cancelled from "../../assets/images/canelled.png";

const LocationPopUp = ({
  close,
  setSelected,
  setPopupActionType,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [locationError, setLocationError] = useState(null);

  useEffect(() => {
    setShowModal(true);
  }, []);

  // Handle "Use My Location"
  const handleUseLocation = () => {
    setLoading(true);
    setLocationError(null);

    if (!navigator.geolocation) {
      setLocationError("Geolocation is not supported by your browser.");
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const coords = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };

        setSelected(coords);
        setPopupActionType("use-location");
        close(false);
        setLoading(false);
      },
      (error) => {
        setLocationError("Unable to retrieve your location.");
        console.error("Geolocation error:", error);
        setLoading(false);
      }
    );
  };

  const handleCancel = () => {
    setPopupActionType("cancel");
    close(false);
  };

  const handleOverlayClick = (e) => {
    if (e.target.id === "popup-overlay") {
      handleCancel();
    }
  };

  return (
    <div
      id="popup-overlay"
      onClick={handleOverlayClick}
      className="min-h-screen w-full flex flex-col items-center gap-6 top-0 left-0 bg-[url(/Map.png)] bg-cover bg-center relative bg-black/50"
    >
      <Header />

      <div
        onClick={(e) => e.stopPropagation()}
        className={`h-[459px] sm:h-fit w-4/5 xl:w-[788px] bg-white flex flex-col m-auto items-center justify-around gap-5 p-4 rounded-xl z-10
          transition-all duration-700 ease-out
          ${showModal ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        `}
      >
        {/* Cancel Button */}
        <img
          src={Cancelled}
          alt="Cancel"
          className="h-4 w-4 cursor-pointer right-16 top-6 absolute"
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

        {/* Error Message */}
        {locationError && (
          <p className="text-red-500 text-sm text-center">
            {locationError}
          </p>
        )}

        {/* Use My Location Button */}
        <button
          onClick={handleUseLocation}
          className="h-14 w-full rounded-lg bg-[#20AE3A] text-white inline-flex items-center justify-center gap-3 disabled:opacity-50"
          disabled={loading}
        >
          {loading ? "Detecting location..." : "Use my location"}
        </button>
      </div>
    </div>
  );
};

export default LocationPopUp;
