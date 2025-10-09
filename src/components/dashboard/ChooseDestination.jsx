import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { LiveGPSIcon } from "../../assets/icons/LiveGPSIcon";
import { InputField } from "../customFormFields/InputField";
import { locationAtom } from "../atoms/locationAtom";
import { SearchIcon } from "../../assets/icons/SearchIcon";
import { Divider } from "../Divider/Divider";
import axios from "axios";
import { ca } from "date-fns/locale";

// 🧠 Simple debounce utility
function debounce(fn, delay) {
  let timeoutId;
  return (...args) => {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
}

export const ChooseDestination = ({ onFocus }) => {
  const [queryValue, setQueryValue] = useState("");
  const [results, setResults] = useState([]);
  const [markers, setMarkers] = useState([]);
  const [cache, setCache] = useState({});
  const [isTyping, setIsTyping] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [history, setHistory] = useState([]);
  const [userPosition, setUserPosition] = useState(null);

  const [liveLocation] = useRecoilState(locationAtom);

  // 💾 Load saved searches from localStorage
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
  };

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
      setResults(response.data);
      setCache((prev) => ({ ...prev, [q]: response.data }));
    } catch (error) {
      console.error("Nominatim error:", error);
    } finally {
      setIsSearching(false);
    }
  }, 700);

  const handleChange = (e) => {
    const value = e.target.value;
    setQueryValue(value);
    setIsTyping(true);
    debouncedSearch(value);
  };

  const handleSelect = (place) => {
    const lat = parseFloat(place.lat);
    const lon = parseFloat(place.lon);
    const newMarker = { lat, lon, display_name: place.display_name };
    setMarkers((prev) => [...prev, newMarker]);
    setQueryValue(place.name);
    setResults([]);
    saveToHistory(place);
  };

  const handleHistoryClick = (entry) => {
    const newMarker = { lat: entry.lat, lon: entry.lon, display_name: entry.name };
    setMarkers((prev) => [...prev, newMarker]);
    setQueryValue(entry.name);
    setResults([]);
  };

  console.log(cache);
  console.log(results)
  return (
    <div className="mb-6 p-1.5 lg:p-[14px] bg-white min-h-[210px] rounded-2xl">
      <div className="mb-2 flex items-center gap-x-1.5 ">
        <span className="block w-[38px] h-[36px] flex justify-center items-center bg-primary-50 rounded-[32px]">
          <LiveGPSIcon />
        </span>
        <h4 className="text-base lg:text-lg font-medium">Where are you going?</h4>
      </div>

      <div>
        <InputField
          label={"From"}
          labelStyles={"font-medium text-xs lg:text-xs"}
          inputWrapperStyles={"h-[40px] lg:h-[49px]"}
          inputTextStyles={"text-neutral-950"}
          value={liveLocation}
          onFocus={onFocus}
          onChange={() => {}}
        />

        <InputField
          label={"To Where"}
          labelStyles={"font-medium text-xs lg:text-xs"}
          inputWrapperStyles={"h-[40px] lg:h-[49px]"}
          placeholder={"Enter your Destination"}
          rightIcon={SearchIcon}
          name={"search"}
          value={queryValue}
          onFocus={onFocus}
          onChange={handleChange}
        />
      </div>

      <Divider />

      {/* Suggestions & History */}
     {/* Dropdown UI */}
        {(isTyping || isSearching || results.length > 0 || history.length > 0) && (
          <div className="bg-white border border-gray-200 rounded-lg shadow mt-2 max-h-64 overflow-y-auto">
            {/* Loading Spinner */}
            {isSearching && (
              <div className="flex justify-center items-center p-4">
                <div className="w-4 h-4 border-2 border-green-500 border-t-transparent rounded-full animate-spin"></div>
                <p className="ml-2 text-sm text-green-600">Searching location...</p>
              </div>
            )}

            {/* Typing indicator */}
            {isTyping && !isSearching && (
              <p className="p-3 text-sm text-neutral-950 italic">Typing...</p>
            )}

            {/* Results */}
            {!isSearching &&
              results.map((result, i) => (
                <li
                  key={i}
                  onClick={() => handleSelect(result)}
                  className="list-none p-3 hover:bg-green-50 cursor-pointer text-sm"
                >
                  {result.display_name}
                </li>
              ))}

            {/* History Section */}
            {!queryValue && !isSearching && history.length > 0 && (
              <div className="border-t border-gray-100">
                <p className="text-xs text-gray-400 uppercase px-3 pt-2">
                  Recent Searches
                </p>
                {history.map((entry, i) => (
                  <li
                    key={i}
                    onClick={() => handleHistoryClick(entry)}
                    className="list-none p-3 hover:bg-gray-50 cursor-pointer text-sm flex items-center"
                  >
                    <LiveGPSIcon className="mr-3"/>
                    {entry.name}
                  </li>
                ))}
              </div>
            )}
          </div>
        )}
    </div>
  );
};
