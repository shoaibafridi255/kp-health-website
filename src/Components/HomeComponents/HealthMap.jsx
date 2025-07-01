import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const HealthMap = () => {
  const centers = [
    { name: "Peshawar Health Center", lat: 34.0151, lng: 71.5249 },
    { name: "Swat District Hospital", lat: 35.2214, lng: 72.4258 },
  ];

  return (
    <div className="container my-5">
      <h3 className="text-center mb-3">📍 Our Health Facilities</h3>
      <MapContainer
        center={[34.0151, 71.5249]}
        zoom={7}
        style={{ height: "400px", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {centers.map((center, i) => (
          <Marker key={i} position={[center.lat, center.lng]}>
            <Popup>{center.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};
export default HealthMap;
