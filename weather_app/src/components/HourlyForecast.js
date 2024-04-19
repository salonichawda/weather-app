import React from "react";
import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const HourlyForecast = ({ cityName, countryCode }) => {
  const [hourlyData, setHourlyData] = useState([]);
  const getHourlyForecast = async () => {
    const response = await fetch(
      `https://pro.openweathermap.org/data/2.5/forecast/hourly?q=${cityName},${countryCode}&appid=5b5fdb849799dea7adfad7710a220281`,
    );
    const result = await response.json();
    const data = result.list.map((item) => ({
      hour: new Date(item.dt * 1000).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      temperature: item.main.temp,
    }));
    setHourlyData(data);
  };
  useEffect(() => {
    getHourlyForecast();
  }, []);
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={hourlyData}>
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="temperature"
          stroke="#8884d8"
          name="Temperature"
        />
        <Line
          type="monotone"
          dataKey="windSpeed"
          stroke="#82ca9d"
          name="Wind Speed"
        />
        <Line
          type="monotone"
          dataKey="weatherDescription"
          stroke="#ffc658"
          name="Weather Description"
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default HourlyForecast;
