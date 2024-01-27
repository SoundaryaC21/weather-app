import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faCloud,
  faCloudRain,
  faSnowflake,
  faBolt,
} from "@fortawesome/free-solid-svg-icons";

const WeatherIcon = ({ condition }) => {
  let icon;
  switch (true) {
    case condition === "Clear sky":
      icon = <FontAwesomeIcon icon={faSun} />;
      break;
    case condition === "Mainly clear, partly cloudy, and overcast":
      icon = <FontAwesomeIcon icon={faCloud} />;
      break;
    case condition === "Rain: Slight, moderate and heavy intensity" ||
      condition === "Freezing Drizzle: Light and dense intensity" ||
      condition === "Drizzle: Light, moderate, and dense intensity" ||
      condition === "Fog and depositing rime fog" ||
      condition === "Rain showers: Slight, moderate, and violent":
      icon = <FontAwesomeIcon icon={faCloudRain} />;
      break;
    case condition === "Snow fall: Slight, moderate, and heavy intensity" ||
      condition === "Snow grains" ||
      condition === "Snow showers slight and heavy":
      icon = <FontAwesomeIcon icon={faSnowflake} />;
      break;
    case condition === "Thunderstorm: Slight or moderate" ||
      condition === "Thunderstorm with slight and heavy hail":
      icon = <FontAwesomeIcon icon={faBolt} />;
      break;
    default:
      icon = <FontAwesomeIcon icon={faSun} />;
  }

  return <div className="weather-icon">{icon}</div>;
};

export default WeatherIcon;
