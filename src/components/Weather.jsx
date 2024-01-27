import React from "react";
import getDescription from "../utils/description";
import WeatherIcon from "../utils/weatherIcon";

const Weather = ({ data }) => {
  const weathercode = data.daily.weathercode[3];
  const description = getDescription(weathercode);
  return (
    <div className="weather">
      <h3 className="weather_h3"> Today's Weather</h3>
      <p>{description}</p>
      <WeatherIcon condition={description} />
    </div>
  );
};

export default Weather;
