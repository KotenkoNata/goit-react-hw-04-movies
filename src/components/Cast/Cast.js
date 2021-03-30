import React from 'react';
import PropTypes from 'prop-types';

import defaultImg from './defaultImg.jpeg';

const Cast = ({ cast }) => {
  return (
    <ul>
      {cast.map(({ id, profile_path, name }) => (
        <li key={id}>
          <img
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                : defaultImg
            }
            alt={name}
          />
          <p>{name}</p>
        </li>
      ))}
    </ul>
  );
};

Cast.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      profile_path: PropTypes.string,
      name: PropTypes.string.isRequired,
    }),
  ),
};

export default Cast;
