import axios from 'axios';
import React, { Component } from 'react';
import routes from '../routes';

import fetchMovieDetails from '../services/moviesApi';

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

class MovieDetailsPageView extends Component {
  state = {
    overview: null,
    genres: null,
    id: null,
    backdrop_path: null,
    original_title: null,
    popularity: null,
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const movie = await axios.get(`${BASE_URL}/movie/5?api_key=${API_KEY}`);

    console.log(movie.data);

    this.setState({ ...movie });
  }

  render() {
    return (
      <>
        <div>
          <h2>{this.state.original_title}</h2>
          <img src={this.state.backdrop_path} alt='' />
          <p>{this.state.overview}</p>
        </div>
      </>
    );
  }
}

export default MovieDetailsPageView;
