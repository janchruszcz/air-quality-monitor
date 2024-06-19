import React from 'react';
import Card from '../components/Card';
import Info from '../components/Info';
import LineChart from '../components/LineChart';
import useSpreadsheetData from '../hooks/useSpreadsheetData';
import PropTypes from 'prop-types';

const Home = () => {
  const { data, loading, error } = useSpreadsheetData();
  const { date, time, temperature, humidity, pressure, gas_resistance, air_quality, lastFiveDays, lastFiveMeasures } = data;

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="h-full pt-10 px-24">
      <div className="grid grid-cols-5 grid-rows-1 gap-8">
        <Card label="Air Quality (%)" value={air_quality} date={date} time={time} />
        <Card label="Temperature (°C)" value={temperature} date={date} time={time} />
        <Card label="Humidity (%RH)" value={humidity} date={date} time={time} />
        <Card label="Pressure (hPa)" value={pressure} date={date} time={time} />
        <Card label="Gas resistance (Ω)" value={gas_resistance} date={date} time={time} />
      </div>
      <div className="py-8">
        <LineChart label="Air Quality (%)" labels={lastFiveDays} values={lastFiveMeasures} color="rgba(5, 150, 105, 0.5)" />
      </div>
      <div className="h-auto">
        <Info />
      </div>
    </div>
  );
};

Home.propTypes = {
  data: PropTypes.shape({
    date: PropTypes.string,
    time: PropTypes.string,
    temperature: PropTypes.string,
    humidity: PropTypes.string,
    pressure: PropTypes.string,
    gas_resistance: PropTypes.string,
    air_quality: PropTypes.string,
    lastFiveDays: PropTypes.arrayOf(PropTypes.string),
    lastFiveMeasures: PropTypes.arrayOf(PropTypes.string),
  }),
  loading: PropTypes.bool,
  error: PropTypes.string,
};

export default Home;