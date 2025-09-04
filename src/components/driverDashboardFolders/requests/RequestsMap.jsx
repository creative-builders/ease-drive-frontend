import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import { useEffect, useRef } from "react";
import { BiArrowBack } from "react-icons/bi";

// Helper: custom icon
const createIcon = (icon, color = "blue") =>
  L.divIcon({
    html: `<div style="font-size:24px; color:${color};">${icon}</div>`,
    className: "",
    iconSize: [24, 24],
    iconAnchor: [12, 24],
    popupAnchor: [0, -24],
  });

export function RequestsMap({ driverLocation, passengerLocation, btnFn }) {
  const mapRef = useRef(null);
  const routingControlRef = useRef(null);
 

  const handleAcceptClick = () => {
    btnFn();
  };

  const center = driverLocation
    ? [driverLocation.lat, driverLocation.lng]
    : passengerLocation
      ? [passengerLocation.lat, passengerLocation.lng]
      : [6.5244, 3.3792]; // fallback: Lagos

  // useEffect(() => {
  //   if (!map) return;

  //   // Remove old route
  //   if (map._routingControl) {
  //     map.removeControl(map._routingControl);
  //   }

  //   if (driverLocation && passengerLocation) {
  //     const routingControl = L.Routing.control({
  //       waypoints: [
  //         L.latLng(driverLocation.lat, driverLocation.lng),
  //         L.latLng(passengerLocation.lat, passengerLocation.lng),
  //       ],
  //       lineOptions: { styles: [{ color: "blue", weight: 5 }] },
  //       addWaypoints: false,
  //       draggableWaypoints: false,
  //       fitSelectedRoutes: true,
  //     }).addTo(map);

  //     map._routingControl = routingControl;
  //   }
  // }, [map, driverLocation, passengerLocation]);

  return (
    <div className="py-2.5 relative h-full inline-flex flex-col lg:justify-start lg:items-start 
    items-center justify-center lg:-mt-2 lg:-ml-5 -mt-0 -ml-0">
      <div className="inline-flex lg:justify-start lg:items-start justify-center items-center gap-4">
        <div className="lg:w-[561px] w-[400px] lg:h-[734px] m-auto font-poppins inline-flex flex-col 
        lg:justify-start justify-center lg:items-start gap-4">
          <div className="lg:self-stretch lg:h-[853px] h-[456px] lg:px-5 py-2.5 lg:bg-white rounded-lg flex flex-col 
          justify-start items-start gap-24">

            <MapContainer
              center={center}
              zoom={13}
              style={{ height: "100%", width: "100%" }}
              className="rounded-lg"
              whenCreated={(mapInstance) => (mapRef.current = mapInstance)}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; OpenStreetMap contributors"
              />
              <MapWithRouting driverLocation={driverLocation} passengerLocation={passengerLocation} />
              {/* Driver Marker
              {driverLocation && (
                <Marker
                  position={[driverLocation.lat, driverLocation.lng]}
                  icon={createIcon("🚖")}
                >
                  <Popup>Driver Location</Popup>
                </Marker>
              )}

              {/* Passenger Marker *
              {passengerLocation && (
                <Marker
                  position={[passengerLocation.lat, passengerLocation.lng]}
                  icon={createIcon("📍", "red")}
                >
                  <Popup>Passenger Location</Popup>
                </Marker>
              )} */}
            </MapContainer>
          </div>

          <div
            onClick={handleAcceptClick}
            className="flex w-[30%] m-auto lg:hidden justify-center cursor-pointer rounded-xl bg-green-50 items-center gap-2 text-green-700"
          >
            <BiArrowBack className="h-8 w-8 bold" />
          </div>
        </div>
      </div>
    </div>
  );
}


function MapWithRouting({ driverLocation, passengerLocation }) {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    // Remove old route
    if (map._routingControl) {
      map.removeControl(map._routingControl);
    }

    if (driverLocation && passengerLocation) {
      const routingControl = L.Routing.control({
        waypoints: [
          L.latLng(driverLocation.lat, driverLocation.lng),
          L.latLng(passengerLocation.lat, passengerLocation.lng),
        ],
        lineOptions: { styles: [{ color: "blue", weight: 5 }] },
        addWaypoints: false,
        draggableWaypoints: false,
        fitSelectedRoutes: true,
      }).addTo(map);

      map._routingControl = routingControl;
    }
  }, [map, driverLocation, passengerLocation]);

  return null;
}