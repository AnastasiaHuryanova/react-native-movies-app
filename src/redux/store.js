import { configureStore } from '@reduxjs/toolkit';

import moviesApiReducer, {moviesApiMiddleware} from './features/moviesApi';
import favoriteMoviesReducer from './features/favoriteMoviesSlice';
import pageReducer from './features/pageSlice';

export const store = configureStore({
  reducer: {
    page: pageReducer,
    favoriteMovies: favoriteMoviesReducer,
    moviesApi: moviesApiReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(moviesApiMiddleware)
});
