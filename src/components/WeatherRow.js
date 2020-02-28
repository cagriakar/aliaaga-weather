import React from "react";
import { Row, Col } from "react-bootstrap";

function WeatherRow({ data }) {
  return (
    <Row className="weather-row">
      <Col xs={12} lg={6}>
        <Row>
          <Col xs={3} sm={3} className="hour px-0">{`${data.hour} : 00`}</Col>
          <Col xs={5} sm={3}>
            <Row>
              <Col className="px-0">
                <img
                  src={`https://www.accuweather.com${data.image}`}
                  alt={data.description}
                ></img>
              </Col>
              <Col className="header-info">{`${data.temp} C`}</Col>
            </Row>
            <Row>
              <Col className="real-feel">{data.realFeel}</Col>
            </Row>
          </Col>
          <Col xs={4} sm={6}>
            <Row>
              <Col md className="header-info">
                {data.description}
              </Col>
              <Col md className="header-info py-2">
                {data.precip}
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
      <Col xs={12} lg={6}>
        <Row className="py-3">
          <Col className="additional-info px-1">{data.wind}</Col>
          <Col className="additional-info px-1">{data.highWind}</Col>
          <Col className="additional-info px-1">{data.moisture}</Col>
          <Col className="additional-info px-1">{data.cloud}</Col>
          <Col className="additional-info px-1">{data.rain}</Col>
        </Row>
      </Col>
    </Row>
  );
}

export default WeatherRow;