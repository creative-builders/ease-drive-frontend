import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { LiveGPSIcon } from "../../assets/icons/LiveGPSIcon";
import { InputField } from "../customFormFields/InputField";
import { locationAtom } from "../atoms/locationAtom";
import { SearchIcon } from "../../assets/icons/SearchIcon";
import { Divider } from "../Divider/Divider";
import axios from "axios";
import { useDebounce } from "../../hooks/useDebounce";
import toast from "react-hot-toast";
import { useStepFlowContext } from "../../hooks/useStepFlowFormContext";


  export const ChooseDestination = ({ onFocus }) => {
  const [results, setResults] = useState([]);
  const [cache, setCache] = useState({});
  const [isTyping, setIsTyping] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [history, setHistory] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState(null); 
  const {
      formData,
      setFormData,
      handleUpdateFormData,
      inputTouched
  } = useStepFlowContext();

  const liveLocation = useRecoilValue(locationAtom);


  useEffect(() => {
    const storedHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];
    setHistory(storedHistory);
  }, []);


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


  const handleClearHistory = () => {
    localStorage.removeItem("searchHistory");
    setHistory([]);
    toast.success("Search history cleared!");
  };


  const debouncedSearch = useDebounce(async (q) => {
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
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSearching(false);
    }
  }, 500);


  const handleSelect = (place) => {
     setFormData(prev => ({
      ...prev,
      searchValue:place?.display_name,
      destination:{
        destinationName: place?.display_name,
          coordinates:{
          lat:place?.lat,
          long:place?.lon
        }
      }
    }))
    setSelectedPlace(place);
    setResults([]);
    saveToHistory(place);
  };


  const handleHistoryClick = (entry) => {
    setFormData(prev => ({
      ...prev,
      searchValue:entry?.name,
      destination:{
        destinationName: entry?.name,
        coordinates:{
          lat:entry?.lat,
          long:entry?.lon
        }
      }
    }))
    setSelectedPlace(entry);
    setResults([]);
  };

  const isPhoneValid = /^[0-9]{10,}$/.test(formData?.phoneNumber);
  const showIsPhoneValidError = inputTouched?.phoneNumber && !isPhoneValid;
    

  const shouldShowNoResult =
    !isSearching &&
    formData?.searchValue.trim() !== "" &&
    results.length === 0 &&
    !selectedPlace;

  return (
    <div className="mb-6 p-1.5 lg:p-[14px] bg-white min-h-[210px] rounded-2xl">
      {/* Header */}
      <div className="mb-2 flex items-center gap-x-1.5">
        <span className="block w-[38px] h-[36px] flex justify-center items-center bg-primary-50 rounded-[32px]">
          <LiveGPSIcon />
        </span>
        <h4 className="text-base lg:text-lg font-medium">Where are you going?</h4>
      </div>

      {/* Input Fields */}
      <div>
        <InputField
          label="From"
          labelStyles="font-medium text-xs lg:text-xs"
          inputWrapperStyles="h-[40px] lg:h-[49px]"
          inputTextStyles="text-neutral-950"
          value={liveLocation ?? ""}
          onFocus={onFocus}
          onChange={() => null}
        />

       <InputField 
        type="number"
        label={"Phone Number"}
        labelStyles="font-medium text-xs lg:text-xs"
        inputWrapperStyles="h-[40px] lg:h-[49px]"
        inputTextStyles="text-neutral-950"
        onChange={handleUpdateFormData}
        placeholder={"Enter a Phone Number"}
        name={"phoneNumber"}
        value={formData?.phoneNumber}
        error={showIsPhoneValidError ? "Please enter a valid phone number" : ""}
        />
        <InputField
          label="To Where"
          labelStyles="font-medium text-xs lg:text-xs"
          inputWrapperStyles="h-[40px] lg:h-[49px]"
          placeholder="Enter your Destination"
          rightIcon={SearchIcon}
          name={"searchValue"}
          value={formData?.searchValue}
          onFocus={onFocus}
          onChange={(e) => {
            handleUpdateFormData(e);
            setIsTyping(true);
            debouncedSearch(e.target.value);
          }}
        />
      </div>

      <Divider />

      {/*Dropdown UI */}
      {(isTyping || isSearching || results.length > 0 || history.length > 0 || shouldShowNoResult) && (
        <div className="bg-white border border-gray-200 shadow rounded-lg mt-2 max-h-64 overflow-y-auto">
          {/*Loading Spinner */}
          {isSearching && (
            <div className="flex justify-center items-center p-4">
              <div className="w-4 h-4 border-2 border-green-500 border-t-transparent rounded-full animate-spin"></div>
              <p className="ml-2 text-sm text-green-600">Searching location...</p>
            </div>
          )}

          {isTyping && !isSearching && (
            <p className="p-3 text-sm text-neutral-950 italic">Typing...</p>
          )}

          {/*Search Results */}
          {!isSearching &&
            results.length > 0 &&
            results.map((result, i) => (
              <li
                key={i}
                onClick={() => handleSelect(result)}
                className="list-none p-3 hover:bg-green-50 cursor-pointer text-sm"
              >
                {result.display_name}
              </li>
            ))}

          {/* No Results */}
          {shouldShowNoResult && (
            <p className="py-2 px-4 text-sm text-red-500">
              No location found. Please try another search.
            </p>
          )}

          {/*History Section */}
          {!formData?.searchValue && !isSearching && history.length > 0 && (
            <div className="border-t border-gray-100">
              <div className="flex justify-between items-center px-3 pt-2">
                <p className="text-xs text-neutral-950 font-bold uppercase">
                  Recent Searches
                </p>
                <button
                  onClick={handleClearHistory}
                  className="text-xs text-red-500 font-medium hover:underline"
                >
                  Clear
                </button>
              </div>

              {history.map((entry, i) => (
                <li
                  key={i}
                  onClick={() => handleHistoryClick(entry)}
                  className="list-none p-2 hover:bg-gray-50 cursor-pointer text-sm flex items-center"
                >
                  <LiveGPSIcon className="mr-2" />
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
