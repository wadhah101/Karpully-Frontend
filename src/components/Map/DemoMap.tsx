import { LatLngExpression } from 'leaflet'
import * as React from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const position: LatLngExpression = [51.505, -0.09]

const DemoMap: React.FC<React.HTMLAttributes<any>> = ({ className }) => {
  return (
    <MapContainer
      className={className}
      center={position}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default DemoMap
