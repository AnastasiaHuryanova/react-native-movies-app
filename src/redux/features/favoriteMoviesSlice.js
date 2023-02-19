import { createSlice } from '@reduxjs/toolkit';

const favoriteMoviesSlice = createSlice({
  name: 'favoriteMovies',
  initialState: {
    movies: []
  },
  reducers: {
    addFavoriteMovie: (state, action) => {
      state.movies = [...state.movies, action.payload];
    },
    removeFavoriteByMovie: (state, action) => {
      state.movies = state.movies.filter(
        movie => movie.id !== action.payload.id
      );
    }
  }
});

export const { addFavoriteMovie, removeFavoriteByMovie } =
  favoriteMoviesSlice.actions;
export const selectFavoriteMovies = state => state.favoriteMovies.movies;
export default favoriteMoviesSlice.reducer;
