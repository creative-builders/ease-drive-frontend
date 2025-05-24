
import { Outlet } from 'react-router-dom'
import Header from '../../layout/dashboard/header/Header'
import { useEffect, useState } from 'react';
import LocationPopUp from '../../components/location/LocationPopUp';
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

  useEffect(() => {
    // setShowModal(true);
    setIsOpen(true);
  }, []);

  const getLocationName = async (lat, lon) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`
      );
      const data = await response.json();
      return data.display_name;
    } catch (err) {
      console.error("Failed to fetch location name:", err);
      return "";
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
      },
      (error) => {
        console.error("Location error:", error.message);
        toast.error("Location error:", error.message);
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
       {/* added an outlet incase */}
       {/* <div className='overflow-auto  border border-4 border-blue-950'>
         <Outlet/>
       </div> */}
       <div className="pt-16 mt-4 border border-blue-950">
         <p className='text-center'>Welcome to the Passenegr Dashboard page</p>
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
          />
        )}
    </div>
  )
}

export default PassengerDashboard