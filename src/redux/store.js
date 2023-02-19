import {configureStore} from '@reduxjs/toolkit';
import moviesApiReducer, {moviesApi} from './features/apiSlice';
import favoritesReducer from './features/favoriteMoviesSlice';
import topRatedMoviesListReducer from './features/topRatedMoviesListSlice';

export default store = configureStore({
  reducer: {
    topRatedMoviesList: topRatedMoviesListReducer,
    favorites: favoritesReducer,
    moviesApi: moviesApiReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(moviesApi.middleware)
});
