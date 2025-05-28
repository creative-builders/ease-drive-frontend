
import { Outlet } from 'react-router-dom'
import Header from '../../../layout/dashboard/header/Header'
import { useEffect, useState } from 'react';
import LocationPopUp from '../../../components/location/LocationPopUp';
import toast from 'react-hot-toast';
import { MapContainer, TileLayer } from 'react-leaflet';
import PickRideSecond from '../../../components/PickRideSecond';
import PickRide from '../../../components/PickRide';
const PassengerDashboard = ({
  profileImage,
  firstName,
  lastName
}) => {

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [popupActionType, setPopupActionType] = useState(null); 
  const [coords, setCoords] = useState(null);
  const [locationName, setLocationName] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // setShowModal(true);
    setIsOpen(true);
  }, []);

  const getLocationName = async (lat, lon) => {
    try {
      setLoading(true);
      // Fetch location name from OpenStreetMap Nominatim API
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`
      );
      const data = await response.json();
      return data.display_name;
    } catch (err) {
      console.error("Failed to fetch location name:", err);
      return "";
    }
    finally{
      setLoading(false);
    }
  };

  const handleUseLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return;
    }
    
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        console.log("Accurate Position:", latitude, longitude);
    
        const location = await getLocationName(latitude, longitude);
        console.log("You are in:", location);

        setCoords({ lat: latitude, lon: longitude });
        setLocationName(location);
        setPopupActionType("use-location");
        // close(false)
        setIsOpen(false)
      },
      (error) => {
        console.error("Location error:", error.message);
        toast.error("Location access denied or unavailable. Please allow location access in your browser settings.");
        setPopupActionType("cancel");
        close(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    );


  };

  const handleCancel = () => {
    setPopupActionType("cancel");
    setIsOpen(prev => !prev);
  };

  const handleOverlayClick = (e) => {
    if (e.target.id === "popup-overlay") {
      handleCancel();
    }
  };


  return (
    <div>
       <Header/>
       <div 
       className="z-4 bg-white relative w-full min-h-screen pt-16 mt-4 border border-2 border-red-950">

      {/* Background Image */}
      <div className="min-h-screen w-full flex flex-col items-center gap-6 top-0 left-0 bg-[url(/Group.png)] bg-cover bg-center relative"></div>
      

      {/*With Background Map */}
      {coords && (
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <MapContainer
            center={[coords.lat, coords.lon]}
            zoom={13}
            scrollWheelZoom={false}
            className="w-full h-full pointer-events-none" // prevents blocking content
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          </MapContainer>
        </div>
      )}
       <Outlet/>
      </div>


       { isOpen  &&  (
        <LocationPopUp 
          setSelected={setSelectedOption} 
          setPopupActionType={setPopupActionType}
          handleUseLocation={handleUseLocation}
          // showModal={showModal}
          handleOverlayClick={handleOverlayClick}
          coords={coords}
          locationName={locationName}
          handleCancel={handleCancel}
          loading={loading}
          />
        )}

       {!isOpen && (
        popupActionType === 'cancel' ? (
        <PickRide
        selected={selectedOption} 
        setSelected={setSelectedOption}
        />
        ) : (
        <PickRideSecond 
        selected={selectedOption} 
        setSelected={setSelectedOption}
        initialPickUpValue = {locationName}
        />
         )
        )} 
    </div>
  )
}

export default PassengerDashboard