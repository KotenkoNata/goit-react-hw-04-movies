import React from 'react';
import PropTypes from 'prop-types';

import defaultImg from './defaultImg.jpeg';

function formAvatarUrl(avatar_path) {
  if (!avatar_path) {
    return defaultImg;
  }

  if (avatar_path.startWith('/https')) {
    return avatar_path.slice(1);
  }

  return `https://image.tmdb.org/t/p/w500/${avatar_path}`;
}

const Reviews = ({ reviews }) => {
  return (
    <ul>
      {reviews.map(
        ({ id, author, content, author_details: { avatar_path } }) => {
          const avatarUrl = formAvatarUrl(avatar_path);

          return (
            <li key={id}>
              <div>
                <img src={avatarUrl} alt={author} />
                <p>{author}</p>
              </div>
              <p>{content}</p>
            </li>
          );
        },
      )}
    </ul>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      author_details: PropTypes.shape({ avatar_path: PropTypes.string })
        .isRequired,
    }),
  ),
};

export default Reviews;
