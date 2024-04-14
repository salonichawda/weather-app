import { useEffect, useState } from "react";

const WeatherDetails = () => {
  const [selectedCity, setSelectedCity] = useState("Delhi");
  const [weatherData, setWeatherData] = useState(null);
  const [date, setDate] = useState("");
  const handleCityClick = async (selectedCity) => {
    const coun_code = "IN";
    // const state_code = "";
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity},${coun_code}&appid=5b5fdb849799dea7adfad7710a220281`,
    );
    const result = await response.json();
    setWeatherData(result);
    const time = new Date(result.dt * 1000);
    setDate(time.toLocaleString());
    // setSelectedCity("George Hill");
  };
  useEffect(() => {
    handleCityClick(selectedCity);
  }, [selectedCity]);
  return (
    <div>
      <h2>{selectedCity}, Weather</h2>
      {weatherData && (
        <div>
          <p>{date}</p>
          <img
            src={
              "https://openweathermap.org/img/wn/" +
              weatherData.weather[0].icon +
              ".png"
            }
            alt={weatherData.weather[0].description}
          />
          <p>Temperature: {(weatherData.main.temp - 273.15).toFixed(2)}°C</p>
          <p>Weather Description: {weatherData.weather[0].description}</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Wind Speed: {weatherData.wind.speed}m/s</p>
          <p>Pressure: {weatherData.main.pressure}hPa</p>
          <p>Visibility: {weatherData.visibility / 1000}km</p>
        </div>
      )}
    </div>
  );
};

export default WeatherDetails;
