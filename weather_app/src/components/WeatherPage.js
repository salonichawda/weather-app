import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../App.css";
const WeatherDetails = () => {
  const { cityName, countryCode } = useParams();
  const [weatherData, setWeatherData] = useState(null);
  const [date, setDate] = useState("");
  const handleCityClick = async () => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName},${countryCode}&appid=5b5fdb849799dea7adfad7710a220281`,
    );
    const result = await response.json();
    setWeatherData(result);
    const time = new Date(result.dt * 1000);
    setDate(time.toLocaleString());
  };
  useEffect(() => {
    handleCityClick();
  }, []);
  return (
    <div className="container1">
      <h2>
        {cityName}, {countryCode}
      </h2>
      {weatherData && (
        <div>
          <p className="date">{date}</p>
          <img
            className="icon"
            src={
              "https://openweathermap.org/img/wn/" +
              weatherData.weather[0].icon +
              ".png"
            }
            alt={weatherData.weather[0].description}
          />
          <p>Temperature: {Math.round(weatherData.main.temp - 273.15)}°C</p>
          <p>Weather Description: {weatherData.weather[0].description}</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Wind Speed: {weatherData.wind.speed} m/s</p>
          <p>Pressure: {weatherData.main.pressure} hPa</p>
          <p>Visibility: {weatherData.visibility / 1000} km</p>
        </div>
      )}
    </div>
  );
};

export default WeatherDetails;
