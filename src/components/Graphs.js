import React from 'react';
import LineChart from './LineChart';
import useSpreadsheetData from '../hooks/useSpreadsheetData';

const Graphs = () => {
  const { data, loading, error } = useSpreadsheetData();
  const { lastFiveDays, lastFiveAQ, lastFiveTemp, lastFiveHum, lastFivePres, lastFiveGas } = data;

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="px-24">
      <LineChart label="Air Quality (%)" color="rgba(5, 150, 105, 0.5)" labels={lastFiveDays} values={lastFiveAQ} />
      <LineChart label="Temperature (°C)" color="rgba(255, 102, 102, 0.5)" labels={lastFiveDays} values={lastFiveTemp} />
      <LineChart label="Humidity (%RH)" color="rgba(51, 153, 255, 0.5)" labels={lastFiveDays} values={lastFiveHum} />
      <LineChart label="Pressure (hPa)" color="rgba(255, 153, 51, 0.5)" labels={lastFiveDays} values={lastFivePres} />
      <LineChart label="Gas resistance (Ω)" color="rgba(153, 51, 255, 0.5)" labels={lastFiveDays} values={lastFiveGas} />
    </div>
  );
};

export default Graphs;