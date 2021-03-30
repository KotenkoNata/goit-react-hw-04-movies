import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

//https://api.themoviedb.org/3/movie/550?api_key=35f40f94a7e8594fee83c95b1ace42a7

export async function fetchTrendingMovies() {
  try {
    const trendingMovies = await axios.get(
      `${BASE_URL}/movie/top_rated?api_key=${API_KEY}`,
    );
    return trendingMovies.data.results;
  } catch (error) {
    console.error(error.message);
  }
}

export async function fetchSearchedMovies(query) {
  try {
    const searchedMovies = await axios.get(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`,
    );
    return searchedMovies.data.results;
  } catch (error) {
    console.log(error.message);
  }
}

export async function fetchMovie(movieId) {
  try {
    const movie = await axios.get(
      `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`,
    );
    return movie.data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function fetchMovieCredits(movieId) {
  try {
    const credits = await axios.get(
      `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`,
    );
    return credits.data.cast;
  } catch (error) {
    console.log(error.message);
  }
}

export async function fetchMovieReviews(movieId) {
  try {
    const reviews = await axios.get(
      `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`,
    );
    return reviews.data.result;
  } catch (error) {
    console.log(error.message);
  }
}
