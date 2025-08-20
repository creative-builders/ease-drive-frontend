
import { MapContainer, TileLayer } from 'react-leaflet'

const BackgroundMap = ({ coords }) => {
  return (
     <div className="absolute top-0 left-0 w-full h-full z-0">
        {coords ? (
          <MapContainer
            center={[coords.lat, coords.lon]}
            zoom={13}
            scrollWheelZoom={false}
            className="w-full h-full pointer-events-none"
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          </MapContainer>
        ) : (
          <div className="w-full h-full bg-[url('/Group.png')] bg-cover bg-center"></div>
        )}
      </div>
  )
}

export default BackgroundMap