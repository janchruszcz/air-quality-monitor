import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ label, value, date, time }) => (
  <div>
    <div className="row-span-1 h-48 w-156 bg-gray-800 opacity-20 rounded-lg shadow-lg pt-12">
      <div className="text-5xl text-center text-white font-bold">{value}</div>
      <div className="text-center text-white font-bold">{label}</div>
      <div className="text-center text-white">{date}, {time}</div>
    </div>
  </div>
);

Card.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

export default Card;