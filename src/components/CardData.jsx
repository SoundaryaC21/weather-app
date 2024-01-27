import * as React from "react";
import getDescription from "../utils/description";
import WeatherIcon from "../utils/weatherIcon";

export default function CardData({ data, unit }) {
  const { date, weatherCode, tempMin, tempMax } = data;
  const code = weatherCode;
  const description = getDescription(code);
  return (
    <div className="cardData">
      <div className="date">
        <p> Date : {date}</p>
      </div>
      <div className="range">
        <p>
          Temprature Range : {tempMin}
          {unit} - {tempMax}
          {unit}
        </p>
      </div>
      <div className="description">
        <p> Description : {description}</p>
      </div>
      <div className="icon">
        <WeatherIcon condition={description} />
      </div>
    </div>
  );
}
