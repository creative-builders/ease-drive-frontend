import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import toast from 'react-hot-toast';
import LocationPopUp from '../../../components/location/LocationPopUp';
import BackgroundMap from '../../../components/dashboard/BackgroundMap';
import { Modal } from '../../../components/Modal';
import { LiveGPSIcon } from '../../../assets/icons/LiveGPSIcon';
import CustomButton from '../../../components/CustomButton';


const PassengerDashboardIndexPrev = () => {
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
        {
          isOpen && (
          <Modal 
           closeModal={handleCancel}
           modalIcon={<LiveGPSIcon/>}
           title={"Allow access to your live location"}
           bodyText={"Use My Current Location and Auto-fill the search bar with coordinates/nearest landmark"}
          >
         <CustomButton
          isLoading={loading}
          name="Allow Access"
          extendedStyles="w-full font-normal rounded-2xl bg-[#20AE3A] text-white inline-flex items-center justify-center gap-3 disabled:opacity-50"
          size='lg'
          btnClick={handleUseLocation}
          />
          </Modal>
          )
        }
        {/* {isOpen && (
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
        ) : popupActionType === 'cancel' ? (
          <RideSelector 
          selected={selectedOption}
          setSelected={setSelectedOption}
          />
        ) : (
          <RideSelector
            selected={selectedOption}
            setSelected={setSelectedOption}
            initialPickUpValue={locationName}
            isLocationBased={true}
          />
        )} */}
        <div className='flex flex-col lg:flex-row lg:gap-x-4'>
          <div className="bg-white border border-blue-500 rounded-[10px] p-4 w-full h-screen lg:min-w-[480px] lg:min-h-[734px]">
            <BackgroundMap coords={coords}/>
          </div>
           <div className='
           w-full h-0 lg:basis-full p-4 border border-red-500 bg-white 
           lg:bg-transparent fixed bottom-0 left-0 z-[1008] lg:relative rounded-t-2xl
           '
           >
           <div className="mb-7 border border-green-500 bg-white min-h-[210px] rounded-2xl"></div>
           <div className="bg-white border border-green-500 basis-full min-h-[210px] rounded-2xl"></div>
           </div>
        </div>
      </>
    );
  };

export default PassengerDashboardIndexPrev;






