import React, { Component } from 'react';

import SearchBar from '../components/SearchBar';
import MoviesListItem from '../components/MoviesListItem';
import MoviesList from '../components/MoviesList';

import { fetchSearchedMovies } from '../services/moviesApi';
import queryString from 'query-string';

class MoviesPageView extends Component {
  state = {
    searchedMovies: [],
    query: '',
  };

  componentDidMount() {
    const { search, pathname } = this.props.location;

    if (pathname && search) {
      this.setState({ query: queryString.parse(search).query });
    }
  }

  async componentDidUpdate(prevProps, prevState) {
    const { query } = this.state;

    if (prevState.query !== query) {
      console.log(query);
      const response = await fetchSearchedMovies(query);
      console.log(response);
      this.setState({ searchedMovies: response });
    }
  }

  handleSubmit = newQuery => {
    const { history, location } = this.props;

    this.setState({
      searchedMovies: [],
      query: newQuery,
    });

    history.push({
      ...location,
      search: `?query=${newQuery}`,
    });
  };

  render() {
    return (
      <>
        <SearchBar onSubmit={this.handleSubmit} />
        <MoviesList>
          {this.state.searchedMovies.map(movie => (
            <MoviesListItem key={movie.id} movie={movie} />
          ))}
        </MoviesList>
      </>
    );
  }
}

export default MoviesPageView;
