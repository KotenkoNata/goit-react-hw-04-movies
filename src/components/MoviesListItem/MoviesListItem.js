import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import PropTypes from 'prop-types';

import defaultImg from './defaultImg.jpeg';

const MoviesList = ({ movie, location }) => {
  const { title, id, backdrop_path } = movie;

  return (
    <li>
      <Link to={{ pathname: `/movies/${id}`, state: { from: location } }}>
        <img
          src={
            backdrop_path
              ? `https://image.tmdb.org/t/p/w500/${backdrop_path}`
              : defaultImg
          }
          alt={title}
        />
        <p>{title}</p>
      </Link>
    </li>
  );
};

MoviesList.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    backdrop_path: PropTypes.string,
  }).isRequired,
};

export default withRouter(MoviesList);
