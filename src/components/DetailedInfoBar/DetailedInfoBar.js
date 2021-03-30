import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const DetailedInfoBar = ({ url, location }) => {
  return (
    <ul>
      <li>
        <NavLink to={{ pathname: `${url}/cast`, state: { ...location.state } }}>
          Cast
        </NavLink>
      </li>
      <li>
        <NavLink
          to={{ pathname: `${url}/reviews`, state: { ...location.state } }}
        >
          Reviews
        </NavLink>
      </li>
    </ul>
  );
};

DetailedInfoBar.propTypes = {
  url: PropTypes.string.isRequired,
};

export default DetailedInfoBar;
