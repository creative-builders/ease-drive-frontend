import { useEffect, useState } from "react"
import { useRecoilState } from "recoil"
import { LiveGPSIcon } from "../../assets/icons/LiveGPSIcon"
import { InputField } from "../customFormFields/InputField"
import { locationAtom } from "../atoms/locationAtom"
import { SearchIcon } from "../../assets/icons/SearchIcon"
import { Divider } from "../Divider/Divider"
import axios from "axios"
import toast from "react-hot-toast"




//temporary debounce logic
// 🧠 Simple debounce utility
function debounce(fn, delay) {
  let timeoutId;
  return (...args) => {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
}



export const ChooseDestination = ({
  onFocus,
}) => {

 
  const [results, setResults] = useState([]);
  const [markers, setMarkers] = useState([]);
  const [cache, setCache] = useState({});
  const [isTyping, setIsTyping] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [history, setHistory] = useState([]);
  const [userPosition, setUserPosition] = useState(null);

  const [liveLocation,_]  = useRecoilState(locationAtom);

   const [query, setQuery] = useState({
    currentLocation:liveLocation,
    destination:""
  });

  //💾 Load saved searches from localStorage
  useEffect(() => {
    const storedHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];
    setHistory(storedHistory);
  }, []);

  // 💾 Save searches
  const saveToHistory = (place) => {
    const newEntry = {
      name: place.display_name,
      lat: parseFloat(place.lat),
      lon: parseFloat(place.lon),
    };
    setHistory((prev) => {
      const updated = [newEntry, ...prev.filter((h) => h.name !== newEntry.name)];
      localStorage.setItem("searchHistory", JSON.stringify(updated.slice(0, 10)));
      return updated.slice(0, 10);
    });
  }

  console.log(history)

    // 🚀 Debounced API search
  const debouncedSearch = debounce(async (q) => {
    setIsTyping(false);
    if (!q.trim()) {
      setResults([]);
      return;
    }

    if (cache[q]) {
      setResults(cache[q]);
      return;
    }

    setIsSearching(true);
    try {
      const response = await axios.get("https://nominatim.openstreetmap.org/search", {
        params: { q, format: "json", addressdetails: 1, limit: 5 },
      });
      console.log(response)
      setResults(response.data);
      setCache((prev) => ({ ...prev, [q]: response.data }));
    } catch (error) {
      console.error("Nominatim error:", error);
      toast.error("Something Went Wrong:", error);
    } finally {
      setIsSearching(false);
    }
  }, 700);

    const handleSelect = (place) => {
    const lat = parseFloat(place.lat);
    const lon = parseFloat(place.lon);
    const newMarker = { lat, lon, display_name: place.display_name };
    setMarkers((prev) => [...prev, newMarker]);
    setQuery("");
    setResults([]);
    saveToHistory(place);
  };

    const handleHistoryClick = (entry) => {
    const newMarker = { lat: entry.lat, lon: entry.lon, display_name: entry.name };
    setMarkers((prev) => [...prev, newMarker]);
    setQuery("");
    setResults([]);
  };

  const handleChange = (e) => {
    // const value = e.target.value;
    setQuery(prev => ({...prev, [e.target.name]:e.target.value}))
    // setQueryValue(value);
    setIsTyping(true);
    debouncedSearch(query[e.target.name]);
  }

  console.log(query)
  
  return (
    <div className="mb-6 p-1.5 lg:p-[14px] bg-white min-h-[210px] rounded-2xl">
        <div className="mb-2 flex items-center gap-x-1.5 ">
          <span className="block w-[38px] h-[36px] flex justify-center items-center bg-primary-50 rounded-[32px]">
            <LiveGPSIcon/>
            </span>
           <h4 className="text-base lg:text-lg font-medium">Where are you going?</h4>
        </div>
         <div>
            <InputField 
              label={"From"}
              labelStyles={"font-medium text-xs lg:text-xs"}
              inputWrapperStyles={"h-[40px] lg:h-[49px]"}
              inputTextStyles={"text-neutral-950"}
              name={"currentLocation"}
              value={query.currentLocation}
              onFocus={onFocus}
              onChange={handleChange}
            />
            <InputField 
              label={"To Where"}
              labelStyles={"font-medium text-xs lg:text-xs"}
              inputWrapperStyles={"h-[40px] lg:h-[49px]"}
              placeholder={"Enter your Destination"}
              rightIcon={SearchIcon}
              name={"destination"}
              value={query.destination}
              onFocus={onFocus}
              onChange={handleChange}
            />
        </div>
         <Divider/>
      </div>
  )
}
