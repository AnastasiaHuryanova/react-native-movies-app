import {configureStore} from '@reduxjs/toolkit';
import {moviesApi} from './features/apiSlice';
import favorites from './features/favoriteMoviesSlice';
import movieDetail from './features/movieDetailSlice';
import topRatedMoviesList from './features/topRatedMoviesListSlice';

export default store = configureStore({
  reducer: {
    topRatedMoviesList,
    movieDetail,
    favorites,
    [moviesApi.reducerPath]: moviesApi.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(moviesApi.middleware)
});
