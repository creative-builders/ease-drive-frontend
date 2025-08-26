
import { MapContainer, TileLayer } from 'react-leaflet'

const BackgroundMap = ({ coords }) => {
  return (
    //  <div className="absolute top-0 left-0 w-full h-full rounded-[10px]">
     <div className="w-full h-full rounded-[10px]">
        {coords ? (
          <MapContainer
            center={[coords.lat, coords.lon]}
            zoom={12}
            scrollWheelZoom={false}
            className="w-full rounded-[10px] h-full pointer-events-none"
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          </MapContainer>
        ) : (
          <div className="w-full h-full rounded-[10px] bg-[url('/bg-map.png')] bg-cover bg-center"></div>
        )}
      </div>
  )
}

export default BackgroundMap