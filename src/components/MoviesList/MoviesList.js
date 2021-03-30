import React from 'react';
import PropTypes from 'prop-types';

const MoviesList = ({ children }) => {
  return <ul>{children}</ul>;
};

MoviesList.propTypes = {
  children: PropTypes.node,
};

export default MoviesList;
