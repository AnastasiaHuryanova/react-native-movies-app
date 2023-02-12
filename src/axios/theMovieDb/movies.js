import axios from 'axios';

const API_KEY = 'a74169393e0da3cfbc2c58c5feec63d7';

export const getTopRatedMovies = async page => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&page=${page}`
  );
  return response.data;
};

export const getMovieDetail = async id => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
  );
  return response.data;
};
