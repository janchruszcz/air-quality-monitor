import React from 'react';
import Line from './line';
import { GoogleSpreadsheet } from 'google-spreadsheet';

const SPREADSHEET_ID = process.env.REACT_APP_SPREADSHEET_ID;
const SHEET_ID = process.env.REACT_APP_SHEET_ID;
const CLIENT_EMAIL = process.env.REACT_APP_CLIENT_EMAIL;
const PRIVATE_KEY = process.env.REACT_APP_PRIVATE_KEY;

const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

class Graphs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lastFiveDays: ['01/01/2000', '02/01/2000', '03/01/2000', '04/01/2000', '05/01/2000'],
      lastFiveAQ: ['50', '50', '50', '50', '50'],
      lastFiveTemp: ['20', '20', '20', '20', '20'],
      lastFiveHum: ['40', '40', '40', '40', '40'],
      lastFivePres: ['1000', '1000', '1000', '1000', '1000'],
      lastFiveGas: ['100000', '100000', '100000', '100000', '100000']
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
      this.setState({
          lastFiveDays: rows.slice(-5).map(row => {return row.date}),
          lastFiveAQ: rows.slice(-5).map(row => {return row.air_quality}),
	  lastFiveTemp: rows.slice(-5).map(row => {return row.temperature}),
	  lastFiveHum: rows.slice(-5).map(row => {return row.humidity}),
	  lastFivePres: rows.slice(-5).map(row => {return row.pressure}),
	  lastFiveGas: rows.slice(-5).map(row => {return row.gas_resistance})
      });
    } catch (e) {
      console.error('Error: ', e);
    }
  }
  
  componentDidMount() {
    this.readSpreadsheet();
  }
  
  render() {
	  return (
		<div class="px-24">
		  <Line label={'Air Quality (%)'} color={'rgba(5, 150, 105, 0.5)'} labels={this.state.lastFiveDays} values={this.state.lastFiveAQ} />
		  <Line label={'Temperature (°C)'} color={'rgba(255, 102, 102, 0.5)'} labels={this.state.lastFiveDays} values={this.state.lastFiveTemp} />
		  <Line label={'Humidity (%RH)'} color={'rgba(51, 153, 255, 0.5)'} labels={this.state.lastFiveDays} values={this.state.lastFiveHum} />
		  <Line label={'Pressure (hPa)'} color={'rgba(255, 153, 51, 0.5)'} labels={this.state.lastFiveDays} values={this.state.lastFivePres} />
		  <Line label={'Gas resistance (Ω)'} color={'rgba(153, 51, 255, 0.5)'} labels={this.state.lastFiveDays} values={this.state.lastFiveGas} />
		</div>
  )};
}

export default Graphs;
