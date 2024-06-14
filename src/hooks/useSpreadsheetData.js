import { useState, useEffect } from 'react';
import { fetchSpreadsheetData } from '../services/spreadsheetService';

const useSpreadsheetData = () => {
  const [data, setData] = useState({
    date: '01/01/2000',
    time: '12:00:00',
    temperature: '',
    humidity: '',
    pressure: '',
    gas_resistance: '',
    air_quality: '',
    lastFiveDays: ['01/01/2000', '02/01/2000', '03/01/2000', '04/01/2000', '05/01/2000'],
    lastFiveMeasures: ['50', '50', '50', '50', '50'],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const rows = await fetchSpreadsheetData();
        const lastRow = rows[rows.length - 1];

        setData({
          date: lastRow.date,
          time: lastRow.time,
          temperature: lastRow.temperature,
          humidity: lastRow.humidity,
          pressure: lastRow.pressure,
          gas_resistance: lastRow.gas_resistance,
          air_quality: lastRow.air_quality,
          lastFiveDays: rows.slice(-5).map(row => row.date),
          lastFiveMeasures: rows.slice(-5).map(row => row.air_quality),
        });
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    getData();
  }, []);

  return { data, loading, error };
};

export default useSpreadsheetData;
