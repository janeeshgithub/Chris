import React, { useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvent,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Import default Leaflet icon
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Set default marker icon
const DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41], // size of the icon
  iconAnchor: [12, 41], // point of the icon which will correspond to marker's location
  shadowSize: [41, 41], // size of the shadow
});

const Navbar = () => (
  <div className="text-center font-bold mb-2">
    <h1 className="text-xl md:text-2xl lg:text-3xl">
      Open to Work
    </h1>
  </div>
);

const Map = () => {
  const places = [
    // Major cities in India
    { position: [19.076, 72.8777], popup: "Mumbai, India" },
    { position: [28.6139, 77.209], popup: "Delhi, India" },
    { position: [12.9716, 77.5946], popup: "Bangalore, India" },
    { position: [17.385, 78.4867], popup: "Hyderabad, India" },
    { position: [13.0827, 80.2707], popup: "Chennai, India" },
    { position: [22.5726, 88.3639], popup: "Kolkata, India" },
    { position: [18.5204, 73.8567], popup: "Pune, India" },
    { position: [23.0225, 72.5714], popup: "Ahmedabad, India" },
    { position: [26.9124, 75.7873], popup: "Jaipur, India" },
    { position: [30.7333, 76.7794], popup: "Chandigarh, India" },
    // Major cities in the US
    { position: [40.7128, -74.006], popup: "New York City, USA" },
    { position: [34.0522, -118.2437], popup: "Los Angeles, USA" },
    { position: [41.8781, -87.6298], popup: "Chicago, USA" },
    { position: [29.7604, -95.3698], popup: "Houston, USA" },
    { position: [33.4484, -112.074], popup: "Phoenix, USA" },
    { position: [39.9526, -75.1652], popup: "Philadelphia, USA" },
    { position: [29.4241, -98.4936], popup: "San Antonio, USA" },
    { position: [32.7157, -117.1611], popup: "San Diego, USA" },
    { position: [32.7767, -96.797], popup: "Dallas, USA" },
    { position: [37.3382, -121.8863], popup: "San Jose, USA" },
  ];

  const MapClickHandler = () => {
    const map = useMapEvent("click", (e) => {
      const popup = L.popup()
        .setLatLng(e.latlng)
        .setContent(`You clicked the map at ${e.latlng.toString()}`)
        .openOn(map);
    });
    return null;
  };

  useEffect(() => {
    // Set the default icon for all markers
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: markerIcon,
      iconUrl: markerIcon,
      shadowUrl: markerShadow,
    });
  }, []);

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex items-center justify-center flex-grow relative z-0 p-4">
        <MapContainer
          center={[20, 0]}
          zoom={2}
          style={{ height: "60vh", width: "100%" }} // Adjusted for smaller screens
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {places.map((place, index) => (
            <Marker key={index} position={place.position} icon={DefaultIcon}>
              <Popup>
                <b>{place.popup}</b>
              </Popup>
            </Marker>
          ))}
          <MapClickHandler />
        </MapContainer>
      </div>
    </div>
  );
};

export default Map;
