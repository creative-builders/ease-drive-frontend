import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import L from "leaflet";
import { FaCar, FaMapMarkerAlt } from "react-icons/fa";
import "leaflet/dist/leaflet.css";
import { BiArrowBack, BiChevronLeft, BiChevronRight } from "react-icons/bi";

// Helper: convert React Icon to Leaflet divIcon
const createIcon = (icon, color = "blue") =>
  L.divIcon({
    html: `<div style="font-size:24px; color:${color};">${icon}</div>`,
    className: "", // remove default styles
    iconSize: [24, 24],
    iconAnchor: [12, 24],
    popupAnchor: [0, -24],
  });



export function RequestsMap({ driverLocation, passengerLocation, btnFn }) {

  const handleAcceptClick = () => {     
   btnFn()
    };

  const center =
    driverLocation || passengerLocation || { lat: 6.5244, lng: 3.3792 };

  return (
    <div className="py-2.5 relative h-full inline-flex flex-col lg:justify-start lg:items-start 
    items-center justify-center lg:-mt-2 lg:-ml-5 -mt-0 -ml-0">
      <div className="inline-flex lg:justify-start lg:items-start justify-center items-center gap-4">
        <div className="lg:w-[561px] w-[400px] lg:h-[734px] m-auto font-poppins inline-flex flex-col 
        lg:justify-start justify-center  lg:items-start gap-4">
          <div className="lg:self-stretch lg:h-[853px] h-[456px] lg:px-5 py-2.5 lg:bg-white rounded-lg flex flex-col 
          justify-start items-start gap-24">
            
            <MapContainer
              center={[center.lat, center.lng]}
              zoom={13}
              style={{ height: "100%", width: "100%" }}
              className="rounded-lg"
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; OpenStreetMap contributors"
                className="hidden"
              />

              {/* Driver Marker with Car Icon */}
              {driverLocation && (
                <Marker
                  position={[driverLocation.lat, driverLocation.lng]}
                  icon={createIcon("🚖")} // or use FaCar like below
                  // icon={createIcon(renderToStaticMarkup(<FaCar />), "green")}
                >
                  <Popup>Driver Location</Popup>
                </Marker>
              )}

              {/* Passenger Marker with Pin Icon */}
              {passengerLocation && (
                <Marker
                  position={[passengerLocation.lat, passengerLocation.lng]}
                  icon={createIcon("📍")} // or use FaMapMarkerAlt
                  // icon={createIcon(renderToStaticMarkup(<FaMapMarkerAlt />), "red")}
                >
                  <Popup>Passenger Location</Popup>
                </Marker>
              )}

              {driverLocation && passengerLocation && (
                <Polyline
                  positions={[
                    [driverLocation.lat, driverLocation.lng],
                    [passengerLocation.lat, passengerLocation.lng],
                  ]}
                  color="blue"
                />
              )}
            </MapContainer>
          </div>
          <div 
            onClick={handleAcceptClick}
          className="flex w-[30%] m-auto justify-center  cursour-pointer rounded-xl bg-green-50 items-center gap-2 text-green-700">
                 <BiArrowBack className="h-8 w-8 bold" />
          </div>
        </div>
      </div>
    </div>
  );
}
