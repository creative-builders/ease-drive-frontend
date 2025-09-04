
import { useRecoilValue, useSetRecoilState } from "recoil";
import { CircleViewPoint } from "../../assets/icons/CircleViewPoint";
import { userAtom } from "../atoms/userAtom";
import { locationAtom } from "../atoms/locationAtom";
import { useEffect, useState } from "react";

// 🔹 same helper as PassengerDashboardIndex
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

export default function DriverHeader() {
  const userData = useRecoilValue(userAtom);
  const setLiveLocation = useSetRecoilState(locationAtom);

  const [locationEnabled, setLocationEnabled] = useState(false);
  const [locationName, setLocationName] = useState("");

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async ({ coords: { latitude, longitude } }) => {
          const name = await getLocationName(latitude, longitude);
          setLiveLocation({ lat: latitude, lon: longitude, name }); // ✅ store in recoil
          setLocationName(name);
          setLocationEnabled(true);
        },
        (error) => {
          console.error("Location access denied:", error);
          setLocationEnabled(false);
        },
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
      );
    }
  }, [setLiveLocation]);

  return (
    <div className="flex flex-col md:flex-row justify-between items-start">
      <h1 className="text-[#374151] text-2xl md:text-[32px] not-italic leading-normal font-semibold">
        👋 Welcome back, <span className="text-[#374151]">{userData?.fullName}</span>
      </h1>

      <div className="w-[350px] flex items-center justify-center space-x-2 md:justify-between">
        <CircleViewPoint />
        <p className="text-sm md:text-base not-italic font-bold text-[#262626]">
          You’re currently at:{" "}
          <span className="font-normal">
            {locationEnabled && locationName
              ? locationName
              : "UNN Hostel C, Nsukka" /* ✅ fallback */}
          </span>
        </p>
      </div>
    </div>
  );
}
