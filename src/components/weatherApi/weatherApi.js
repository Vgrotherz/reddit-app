const apiWeatherUrl = 'http://api.weatherapi.com/v1/current.json';
const apiWeatherKey = 'fea763b3af3e48bfa1741512241801';

export const getWeather = async (city) => {
  try {
    const response = await fetch(`${apiWeatherUrl}?key=${apiWeatherKey}&q=${city}`);
    if (response.ok) {
      const data = await response.json();
      const currentWeather = {
        temperature: data.current.temp_c,
        feelsLike: data.current.feelslike_c,
        pressure: data.current.pressure_mb,
        humidity: data.current.humidity,
        wind: data.current.wind_kph,
      };
      return currentWeather;
    }
    throw new Error('Request to One Call Weather failed!');
  } catch (error) {
    console.log(error);
  }
};