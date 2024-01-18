import React, { useState, useEffect } from 'react';
import { getWeather } from './weatherApi';

const WeatherComponent = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('London');

  const handleSearchCity = async () => {
    try {
      const data = await getWeather(city);
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <div>
      <h1>Weather Information</h1>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
      />
      <button onClick={handleSearchCity}>Search</button>
      {weatherData ? (
        <div>
          <p>Temperature: {weatherData.temperature} °C</p>
          <p>Feels Like: {weatherData.feelsLike} °C</p>
          <p>Pressure: {weatherData.pressure} mb</p>
          <p>Humidity: {weatherData.humidity}%</p>
          <p>Wind: {weatherData.wind} kph</p>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};

export default WeatherComponent;