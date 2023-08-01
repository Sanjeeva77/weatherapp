import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudSun, faMapMarkerAlt, faThermometerHalf, faCloud, faTint, faWind } from '@fortawesome/free-solid-svg-icons';

export const CurrentWeather = () => {
    const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    // Function to get the current location's weather
    const getWeatherByLocation = () => {
      // Get the user's current geolocation
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          // Make a request to the OpenWeatherMap APP
          axios
            .get(
              `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=078b7516c1866e2ec8c9bd252d1970e8`
            )
            .then((response) => {
              setWeatherData(response.data);
            })
            .catch((error) => {
              console.error('Error fetching weather data:', error);
            });
        },
        (error) => {
          console.error('Error getting geolocation:', error);
        }
      );
    };

    // Call the function to get weather data by location
    getWeatherByLocation();
  }, []);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="weather-container">
      <h2 style={{ color:'green' }}><FontAwesomeIcon icon={faCloudSun} style={{ color: 'black' }}/> Current Weather</h2>
      <div className="text">
        <h3><FontAwesomeIcon icon={faMapMarkerAlt} /> Location: {weatherData.name}</h3>
        <h3><FontAwesomeIcon icon={faThermometerHalf} /> Temperature: {weatherData.main.temp} °C</h3>
        <h3><FontAwesomeIcon icon={faTint} /> Humidity: {weatherData.main ? weatherData.main.humidity.toFixed() : null} %</h3>
        <h3><FontAwesomeIcon icon={faCloud} /> Weather: {weatherData.weather[0].description}</h3>
        <h3><FontAwesomeIcon icon={faWind} /> Wind speed: {weatherData.wind ? weatherData.wind.speed.toFixed() : null} m/s</h3>
      </div>
    </div>

  );
}
