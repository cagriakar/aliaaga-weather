import React from "react";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import { Container } from "react-bootstrap";

function Header() {
  return (
    <Container className="Header mt-2">
      <div className="header-left-panel">
        <LocationOnOutlinedIcon className="mb-2 mx-2"></LocationOnOutlinedIcon>
        <h5>Aliağa</h5>
      </div>
      <div className="header-right-panel">
        <img
          alt="sunny"
          src="https://www.amcharts.com/wp-content/themes/amcharts4/css/img/icons/weather/animated/day.svg"
        ></img>
        <img
          alt="cloudy"
          src="https://www.amcharts.com/wp-content/themes/amcharts4/css/img/icons/weather/animated/cloudy-day-1.svg"
        ></img>
        <img
          alt="partially-cloudy"
          src="https://www.amcharts.com/wp-content/themes/amcharts4/css/img/icons/weather/animated/cloudy.svg"
        ></img>
        <img
          alt="rainy"
          src="https://www.amcharts.com/wp-content/themes/amcharts4/css/img/icons/weather/animated/rainy-6.svg"
        ></img>
      </div>
    </Container>
  );
}

export default Header;
