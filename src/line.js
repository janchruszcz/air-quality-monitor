import React from 'react'
import { Line } from 'react-chartjs-2'

class LineChart extends React.Component {
	
	render() {
		const data = {
		  labels: this.props.labels,
		  datasets: [
			{
			  label: this.props.label,
			  data: this.props.values,
			  fill: false,
			  backgroundColor: this.props.color,
			  borderColor: this.props.color,
			},
		  ],
		}
		
		const options = {
		  maintainAspectRatio: false,
		  scales: {
			yAxes: [
			  {
				ticks: {
				  beginAtZero: false,
				},
			  },
			],
		  },
		}
	  return (
	  <div class="h-72 py-8">
		<Line data={data} options={options} />
	  </div>
	  );
	}
}

export default LineChart
