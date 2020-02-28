import React, { useState, useEffect, useRef } from "react";
import { getWeather } from "../calls/weatherCall";
import { Container } from "react-bootstrap";
import WeatherRow from "./WeatherRow";

function HourlyWeatherCard() {
  const [hoursList, setHoursList] = useState([]);

  const componentIsMounted = useRef(true);

  useEffect(() => {
    getWeather()
      .then(response => {
        componentIsMounted.current && setHoursList(response);
      })
      .catch(error => console.log(error));
    return () => {
      componentIsMounted.current = false;
    };
  }, []);
  console.log(hoursList);

  return (
    <Container className="px-auto mx-auto">
      {hoursList.map((hour, index) => (
        <WeatherRow key={index} data={hour}></WeatherRow>
      ))}
    </Container>
  );
}

export default HourlyWeatherCard;
