import { useCallback, useState } from "react";
import toast from "react-hot-toast";
import { useSetRecoilState } from "recoil";
import { locationAtom } from "../components/atoms/locationAtom";
import { useOutletContext } from "react-router-dom";




const NOMINATIM_API = "https://nominatim.openstreetmap.org/reverse";

 export const useGeolocation  = () => {
    const { coords, setCoords,   setIsMenuOpen } = useOutletContext();
    const[loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [locationName, setLocationName] = useState("");
    const [locationEnabled, setLocationEnabled] = useState(false);
    const [isOpen, setIsOpen] = useState(true);

    //set the live location in recoil state
    const setLiveLocation = useSetRecoilState(locationAtom);

    const getLocationName = useCallback(async (lat, lon) => {
    try {
      const response = await fetch(`${NOMINATIM_API}?lat=${lat}&lon=${lon}&format=json`);
      const data = await response.json();
      return data.display_name;
    } catch (err) {
      toast.error("Failed to fetch location name, Please change your network and try again", err?.message);
       setError(err.message);
      return "";
    } finally {
      setLoading(false);
    }
  },[]);


    //Action to trigger live loaction
    const fetchLocation = useCallback(() => {
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
          setError(null);
          setLoading(false);
          setLiveLocation(location);
          setIsOpen(false);
          setLocationEnabled(true); // 👈 slide up
        },
        (error) => {
          toast.error(`Location access denied, Please try again : ${error.message}`);
          setError(error.message);
        },
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
      );
    } ,[getLocationName, setLiveLocation,setCoords]);
  


     return {
        loading,
        error,
        coords,
        locationName,
        fetchLocation,
        isOpen,
        setIsOpen,
        locationEnabled,
        setLocationEnabled,
        setIsMenuOpen
    }
}