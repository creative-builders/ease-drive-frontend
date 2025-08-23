import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import toast from 'react-hot-toast';
import LocationPopUp from '../../../components/location/LocationPopUp';
import RideSelector from '../../../components/RideSelector';
import BackgroundMap from '../../../components/dashboard/BackgroundMap';


const PassengerDashboardIndex = () => {
    const { coords, setCoords } = useOutletContext();
    const [isOpen, setIsOpen] = useState(true);
    const [selectedOption, setSelectedOption] = useState(null);
    const [popupActionType, setPopupActionType] = useState(null);
    const [locationName, setLocationName] = useState('');
    const [loading, setLoading] = useState(false);
  
    const getLocationName = async (lat, lon) => {
      try {
        const response = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`);
        const data = await response.json();
        return data.display_name;
      } catch (err) {
        console.error('Failed to fetch location name:', err);
        return '';
      } finally {
        setLoading(false);
      }
    };
  
    const handleUseLocation = () => {
      setLoading(true);
      
      if (!navigator.geolocation) {
        toast.error("Geolocation is not supported by your browser.");
        return;
      }
  
      navigator.geolocation.getCurrentPosition(
        async ({ coords: { latitude, longitude } }) => {
          const location = await getLocationName(latitude, longitude);
          setCoords({ lat: latitude, lon: longitude });
          setLocationName(location);
          setPopupActionType("use-location");
          setIsOpen(false);
        },
        (error) => {
          toast.error(`Location access denied : ${error.message}`);
          setPopupActionType("cancel");
          setIsOpen(false);
        },
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
      );
    };
  
    const handleCancel = () => {
      setPopupActionType("cancel");
      setIsOpen(false);
    };
  
    const handleOverlayClick = (e) => {
      if (e.target.id === "popup-overlay") handleCancel();
    };
  
    return (
      <>
        {/* show modal after reloading the dashboard */}
        {isOpen && (
          <LocationPopUp
            setSelected={setSelectedOption}
            setPopupActionType={setPopupActionType}
            handleUseLocation={handleUseLocation}
            handleOverlayClick={handleOverlayClick}
            coords={coords}
            locationName={locationName}
            handleCancel={handleCancel}
            loading={loading}
          />
        // ) : popupActionType === 'cancel' ? (
        //   <RideSelector 
        //   selected={selectedOption}
        //   setSelected={setSelectedOption}
        //   />
        // ) : (
        //   <RideSelector
        //     selected={selectedOption}
        //     setSelected={setSelectedOption}
        //     initialPickUpValue={locationName}
        //     isLocationBased={true}
        //   />
        )}
        <div className='flex gap-x-4'>
          <div className="bg-white rounded-[10px] p-4 min-w-full min-h-screen lg:min-w-[480px] lg:min-h-[734px]">
            <BackgroundMap coords={coords}/>
          </div>
           <div className='basis-full'>
           <div className="mb-7 bg-white min-h-[210px] rounded-2xl"></div>
           <div className="bg-white basis-full min-h-[210px] rounded-2xl"></div>
           </div>
        </div>
      </>
    );
  };

export default PassengerDashboardIndex;






