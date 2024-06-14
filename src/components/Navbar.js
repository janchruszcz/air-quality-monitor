import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Navbar = ({ links }) => {
  return (
    <nav className="navbar bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">Air Quality Monitor</div>
        <div className="flex space-x-4">
          {links.map((link, index) => (
            <Link key={index} to={link.path} className="text-white hover:text-gray-400">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Navbar;
