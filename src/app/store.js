import {configureStore} from '@reduxjs/toolkit';
import favorites from '../redux/features/favoriteMoviesSlice';
import movieDetail from '../redux/features/movieDetailSlice';
import topRatedMovies from '../redux/features/topRatedMoviesListSlice';

export default store = configureStore({
  reducer: {
    topRatedMovies,
    movieDetail,
    favorites
  }
});
