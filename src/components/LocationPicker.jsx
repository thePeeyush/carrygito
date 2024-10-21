import React, { useState, useEffect } from 'react';

const LocationPicker = () => {
  const [location, setLocation] = useState(null);
  const [manualAddress, setManualAddress] = useState('');

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.log("Geolocation is not available in your browser.");
    }
  }, []);

  const handleManualAddressChange = (e) => {
    setManualAddress(e.target.value);
  };

  const searchManualAddress = async () => {
    // Replace with your actual API key and endpoint
    const API_KEY = '35a2082331f036dec34763238b50b9ba';
    const endpoint = `https://apis.mapmyindia.com/advancedmaps/v1/${API_KEY}/geo_code?address=${encodeURIComponent(manualAddress)}`;

    try {
      const response = await fetch(endpoint);
      const data = await response.json();
      if (data.results && data.results.length > 0) {
        setLocation({
          latitude: data.results[0].latitude,
          longitude: data.results[0].longitude,
        });
      }
    } catch (error) {
      console.error("Error searching address:", error);
    }
  };

  return (
    <div>
      <h2>Location Picker</h2>
      {location ? (
        <p>
          Your location: {location.latitude}, {location.longitude}
        </p>
      ) : (
        <p>Getting your location...</p>
      )}
      <div>
        <input
          type="text"
          value={manualAddress}
          onChange={handleManualAddressChange}
          placeholder="Enter your address manually"
        />
        <button onClick={searchManualAddress}>Search</button>
      </div>
    </div>
  );
};

export default LocationPicker;