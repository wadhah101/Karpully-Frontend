import { LatLngExpression } from 'leaflet'
import * as React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'

const position: LatLngExpression = [35, 10.18]

// const myIcon = L.icon({
//   iconUrl: '/assets/icons/marker.svg',
//   iconSize: [32, 32],
//   iconAnchor: [32, 64],
//   popupAnchor: null,
//   shadowUrl: null,
//   shadowSize: null,
//   shadowAnchor: null,
// })

const DemoMap: React.FC<React.HTMLAttributes<any>> = ({ className }) => {
  return (
    <MapContainer className={className} center={position} zoom={7}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* <Marker icon={myIcon} position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker> */}
    </MapContainer>
  )
}

export default DemoMap
