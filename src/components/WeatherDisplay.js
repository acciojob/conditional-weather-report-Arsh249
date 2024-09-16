import React from 'react';

function WeatherDisplay({ weather }) {
  const temperatureColor = weather.temperature > 20 ? 'red' : 'blue';

  return (
    <div>
      <p style={{ color: temperatureColor }}>Temperature: {weather.temperature}</p>
      <p>Conditions: {weather.conditions}</p>
      <span style={{ color: temperatureColor }}>Temp Color Indicator</span> 
    </div>
  );
}

export default WeatherDisplay;
