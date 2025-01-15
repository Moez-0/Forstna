import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { MapContainer, TileLayer } from 'react-leaflet';
import LocationSelector from '../components/LocationSelector';

const AddYourBusiness = () => {
  const { t } = useTranslation();
  const [location, setLocation] = useState([33.8869, 9.5375]); // Initial state set to default [0, 0]

  useEffect(() => {
    // Function to get the current location
    const getCurrentLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setLocation([latitude, longitude]);
          },
          (error) => {
            console.error('Error getting location', error);
            // Handle error
            setLocation([40.748817, -73.985428]); // Fallback to a default location
          }
        );
      } else {
        console.warn('Geolocation is not supported by this browser.');
        setLocation([40.748817, -73.985428]); // Fallback to a default location
      }
    };

    getCurrentLocation();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">{t('addYourBusiness')}</h1>

      <form className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
        {/* Business Name */}
        <div className="mb-4">
          <label htmlFor="businessName" className="block text-sm font-medium text-gray-700">
            {t('businessName')}
          </label>
          <input
            type="text"
            id="businessName"
            name="businessName"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
            placeholder={t('enterBusinessName')}
          />
        </div>

        {/* Business Address */}
        <div className="mb-4">
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">
            {t('address')}
          </label>
          <input
            type="text"
            id="address"
            name="address"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
            placeholder={t('enterAddress')}
          />
        </div>
     {/* Business Address */}
     <div className="mb-4">
     <label htmlFor="contact" className="block text-sm font-medium text-gray-700">
       {t('businessContact')}
     </label>
     <input
       type="text"
       id="contact"
       name="contact"
       required
       className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
       placeholder={t('enterBusinessContact')}
     />
   </div>

        {/* Map and Location Selector */}
        <div className="mb-4">
          <label htmlFor="location" className="block text-sm font-medium text-gray-700">
            {t('businessLocation')}
          </label>
          <div className="mt-4" style={{ height: '400px', width: '100%' }}>
            <MapContainer center={location} zoom={-10} style={{ height: '100%', width: '100%' }}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <LocationSelector location={location} setLocation={setLocation} />
            </MapContainer>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 px-4 bg-primary-100 text-white font-semibold rounded-lg shadow-md hover:bg-primary-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-100"
        >
          {t('submit')}
        </button>
      </form>
    </div>
  );
};

export default AddYourBusiness;
