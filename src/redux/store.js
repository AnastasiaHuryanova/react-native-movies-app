import {configureStore} from '@reduxjs/toolkit';
import favorites from './features/favoriteMoviesSlice';
import movieDetail from './features/movieDetailSlice';
import topRatedMoviesList from './features/topRatedMoviesListSlice';

export default store = configureStore({
  reducer: {
    topRatedMoviesList,
    movieDetail,
    favorites
  }
});
