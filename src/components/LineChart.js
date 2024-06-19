import React from 'react';
import { Line } from 'react-chartjs-2';
import PropTypes from 'prop-types';

const LineChart = ({ labels, label, values, color }) => {
  const data = {
    labels,
    datasets: [
      {
        label,
        data: values,
        fill: false,
        backgroundColor: color,
        borderColor: color,
      },
    ],
  };

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
  };

  return (
    <div className="h-72 py-8">
      <Line data={data} options={options} />
    </div>
  );
};

LineChart.propTypes = {
  labels: PropTypes.arrayOf(PropTypes.string).isRequired,
  label: PropTypes.string.isRequired,
  values: PropTypes.arrayOf(PropTypes.number).isRequired,
  color: PropTypes.string.isRequired,
};

export default LineChart;