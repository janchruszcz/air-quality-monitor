import React from 'react';
import Card from './card';
import Info from './info';
import Line from './line';
import { GoogleSpreadsheet } from 'google-spreadsheet';

const SPREADSHEET_ID = process.env.REACT_APP_SPREADSHEET_ID;
const SHEET_ID = process.env.REACT_APP_SHEET_ID;
const CLIENT_EMAIL = process.env.REACT_APP_CLIENT_EMAIL;
const PRIVATE_KEY = process.env.REACT_APP_PRIVATE_KEY;

const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '01/01/2000',
      time: '12:00:00',
      temperature: '',
      humidity: '',
      pressure: '',
      gas_resistance: '',
      aqi: '',
      lastFiveDays: ['01/01/2000', '02/01/2000', '03/01/2000', '04/01/2000', '05/01/2000'],
      lastFiveMeasures: ['50', '50', '50', '50', '50']
    };
  }
  
  readSpreadsheet = async (row) => {
    try {
      await doc.useServiceAccountAuth({
        client_email: CLIENT_EMAIL,
        private_key: PRIVATE_KEY,
      });
      await doc.loadInfo();
      
      const sheet = doc.sheetsById[SHEET_ID];
      const rows = await sheet.getRows();
      const lastRowIndex = rows.length - 1
      this.setState({
          date: rows[lastRowIndex].date,
          time: rows[lastRowIndex].time,
          temperature: rows[lastRowIndex].temperature,
          humidity: rows[lastRowIndex].humidity,
          pressure: rows[lastRowIndex].pressure,
          gas_resistance: rows[lastRowIndex].gas_resistance,
          air_quality: rows[lastRowIndex].air_quality,
          lastFiveDays: rows.slice(-5).map(row => {return row.date}),
          lastFiveMeasures: rows.slice(-5).map(row => {return row.air_quality})
      });
    } catch (e) {
      console.error('Error: ', e);
    }
  }
  
  componentDidMount() {
    this.readSpreadsheet();
  }
  
  render() { 
	  return( 
	  <div class="h-full pt-10 px-24">
		<div class="grid grid-cols-5 grid-rows-1 gap-8">
			<Card label={"Air Quality (%)"} value={this.state.air_quality} date={this.state.date} time={this.state.time} />
			<Card label={"Temperature (°C)"} value={this.state.temperature} date={this.state.date} time={this.state.time} />
			<Card label={"Humidity (%RH)"} value={this.state.humidity} date={this.state.date} time={this.state.time} />
			<Card label={"Pressure (hPa)"} value={this.state.pressure} date={this.state.date} time={this.state.time} />
			<Card label={"Gas resistance (Ω)"} value={this.state.gas_resistance} date={this.state.date} time={this.state.time} />
		</div>
		<div class="py-8">
			<Line label={'Air Quality (%)'} labels={this.state.lastFiveDays} values={this.state.lastFiveMeasures} color={'rgba(5, 150, 105, 0.5)'} />
		</div>
		<div class="h-auto">
			<Info />
		</div>
	  </div>
  )};
}

export default Home;




