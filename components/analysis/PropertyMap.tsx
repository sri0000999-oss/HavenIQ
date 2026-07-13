"use client";



import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

interface PropertyMapProps {
  latitude: number;
  longitude: number;
  address: string;
}

export default function PropertyMap({
  latitude,
  longitude,
  address,
}: PropertyMapProps) {
  return (
    <MapContainer
      center={[latitude, longitude]}
      zoom={16}
      scrollWheelZoom={false}
      style={{
        height: "100%",
        width: "100%",
        borderRadius: "1rem",
      }}
    >
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={[latitude, longitude]}>
        <Popup>{address}</Popup>
      </Marker>
    </MapContainer>
  );
}