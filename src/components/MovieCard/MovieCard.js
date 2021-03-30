import React from 'react';
import PropTypes from 'prop-types';
import defaultImg from './defaultImg.jpeg';

const MovieCard = ({ movie }) => {
  const { title, poster_path, overview } = movie;

  return (
    <div>
      <h1>{title}</h1>
      <div>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : defaultImg
          }
          alt={title}
          width='200'
        />
        <div>
          <p>About</p>
          <p>{overview}</p>
        </div>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
    overview: PropTypes.string.isRequired,
  }),
};

export default MovieCard;
