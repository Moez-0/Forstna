import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Default center location

// default location is current location
const defaultCenter = [0, 0];




const LocationSelector = ({ location, setLocation }) => {
  useMapEvents({
    click(event) {
      setLocation([event.latlng.lat, event.latlng.lng]);
    },
  });

  return (
    <Marker position={location}>
      <Popup>
        {`Latitude: ${location[0]}, Longitude: ${location[1]}`}
      </Popup>
    </Marker>
  );
};

export default LocationSelector;
