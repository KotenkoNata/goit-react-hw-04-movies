import React, { Component, Suspense, lazy } from 'react';
import { Route } from 'react-router-dom';

import {
  fetchMovie,
  fetchMovieCredits,
  fetchMovieReviews,
} from '../services/moviesApi';
import _ from 'lodash';
import MovieCard from '../components/MovieCard';
import Button from '../components/Button';
import DetailedInfoBar from '../components/DetailedInfoBar';
import Section from '../components/Section';

const Cast = lazy(() =>
  import('../components/Cast' /* webpackChunkName: "cast-section" */),
);

const Reviews = lazy(() =>
  import('../components/Review' /* webpackChunkName: "reviews-section" */),
);

class MovieDetailsPageView extends Component {
  state = {
    movie: null,
    cast: null,
    reviews: null,
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const movie = await fetchMovie(movieId);
    const cast = await fetchMovieCredits(movieId);
    const review = await fetchMovieReviews(movieId);

    this.setState({ movie, cast, review });
  }

  render() {
    const { movie, reviews, cast } = this.state;
    const { url, path } = this.props.match;
    const { location, history } = this.props;

    if (movie) {
      return (
        <Section>
          <MovieCard movie={movie} />
          <Button location={location} history={history} />
          <DetailedInfoBar url={url} location={location} />

          <Suspense fallback={<h1>Loading...</h1>}>
            <Route
              path={`${path}/cast`}
              render={props => <Cast {...props} cast={cast} />}
            />
            <Route
              path={`${path}/reviews`}
              render={props =>
                !_.isEmpty(reviews) ? (
                  <Reviews {...props} reviews={reviews} />
                ) : (
                  <p className='no-reviews'>No reviews.</p>
                )
              }
            />
          </Suspense>
        </Section>
      );
    } else {
      return null;
    }
  }
}

export default MovieDetailsPageView;
