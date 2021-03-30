import React, { Component } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';

import { fetchTrendingMovies } from '../services/moviesApi';

class HomeView extends Component {
  state = {
    trendingMovies: [],
  };

  async componentDidMount() {
    const response = await fetchTrendingMovies();
    this.setState({ trendingMovies: response });
  }

  render() {
    return (
      <>
        <h2>Trending today</h2>
        <ListGroup as={RouterLink} variant='flush'>
          {this.state.trendingMovies.map(movies => (
            <ListGroup.Item as={RouterLink} key={movies.id}>
              {movies.title}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </>
    );
  }
}

export default HomeView;
