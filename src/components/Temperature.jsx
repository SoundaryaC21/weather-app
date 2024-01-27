import React from "react";

const Temperature = ({ data }) => {
  const { current, current_units } = data;
  const temperature = current.temperature_2m;
  const units = current_units.temperature_2m;

  return (
    <div className="temperature">
      <h3>Current Temperature </h3>
      <p> {`${temperature}${units}`}</p>
    </div>
  );
};

export default Temperature;
