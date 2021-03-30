import React, { Component } from 'react';
// import { Link as RouterLink } from 'react-router-dom';
// import { ListGroup } from 'react-bootstrap';

import { fetchTrendingMovies } from '../services/moviesApi';

import Section from '../components/Section';
import MoviesList from '../components/MoviesList';
import MoviesListItem from '../components/MoviesListItem';

class HomeView extends Component {
  state = {
    trendingMovies: [],
  };

  async componentDidMount() {
    const response = await fetchTrendingMovies();
    console.log(response);
    this.setState({ trendingMovies: response });
  }

  render() {
    const { trendingMovies: movies } = this.state;
    return (
      <>
        <h2>Trending today</h2>
        <Section>
          <MoviesList>
            {movies.map(movie => (
              <MoviesListItem key={movie.id} movie={movie} />
            ))}
          </MoviesList>
        </Section>
        {/* <ListGroup as={RouterLink} variant='flush'>
          {this.state.trendingMovies.map(movies => (
            <ListGroup.Item as={RouterLink} key={movies.id}>
              {movies.title}
            </ListGroup.Item>
          ))}
        </ListGroup> */}
      </>
    );
  }
}

export default HomeView;
