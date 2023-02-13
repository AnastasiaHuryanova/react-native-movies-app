import {configureStore} from '@reduxjs/toolkit';
import movieDetail from '../features/movieDetailSlice';
import topRatedMovies from '../features/topRatedMoviesListSlice';

export default store = configureStore({
  reducer: {
    topRatedMovies,
    movieDetail
  }
});
