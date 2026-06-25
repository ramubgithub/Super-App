import { useEffect, useState } from "react";
import { getWeather } from "../../api/weatherApi";
import "./WeatherWidget.css";

function WeatherWidget() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await getWeather("Hyderabad");

        console.log("FULL RESPONSE:", res);
        console.log("RESPONSE DATA:", res.data);

        setWeather(res.data.data);
      } catch (error) {
        console.error(
          "Weather Error:",
          error.response?.data || error.message
        );
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading) {
    return (
      <div className="weather-widget">
        Loading Weather...
      </div>
    );
  }

  if (!weather) {
    return (
      <div className="weather-widget">
        Weather Unavailable
      </div>
    );
  }

  return (
    <div className="weather-widget">
      <h3>📍 Hyderabad</h3>

      <h1>
        {Math.round(weather.main.temp)}°C
      </h1>

      <p>
        {weather.weather[0].main}
      </p>

      <p>
        Feels Like:{" "}
        {Math.round(weather.main.feels_like)}°C
      </p>

      <p>
        Humidity: {weather.main.humidity}%
      </p>
    </div>
  );
}

export default WeatherWidget;