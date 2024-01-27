import axios from "axios";
import React, { useEffect, useState } from "react";
import UserLocation from "../components/UserLocation";
import Temperature from "../components/Temperature";
import Weather from "../components/Weather";
import Forecast from "../components/Forecast";
import "./Home.css";

const apiUrl =
  "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset&timezone=auto&past_days=3";

function Home() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="container">
      <h1>Weather Details & ForeCast</h1>
      <div className="section-1">
        <UserLocation data={data} />
        <Temperature data={data} />
      </div>
      <div className="section-2">
        <Weather data={data} />
        <Forecast data={data} />
      </div>
    </div>
  );
}

export default Home;
