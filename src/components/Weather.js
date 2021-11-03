import React from "react";
import "./styles.css";
import { Card } from "semantic-ui-react";

export default function Weather({ weatherData }) {
  return (
    <div>
      <Card>
        <Card.Content>
          <Card.Header className="header">
            City Name: {weatherData.name}
          </Card.Header>
          <p>Temprature: {weatherData.main.temp} &deg;C</p>
          <p>
            Sunrise:{" "}
            {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString(
              "en-IN"
            )}
          </p>
          <p>
            Sunset:{" "}
            {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString(
              "en-IN"
            )}
          </p>
          <p>Description: {weatherData.weather[0].main}</p>
          <p>Humidity: {weatherData.main.humidity} %</p>
        </Card.Content>
      </Card>
    </div>
  );
}
