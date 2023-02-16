import {createSlice} from '@reduxjs/toolkit';

const topRatedMoviesListSlice = createSlice({
  name: 'topRatedMoviesList',
  initialState: {
    movies: [],
    page: 1
  },
  reducers: {
    moviesSetting: (state, action) => {
      const moviesClone = [...state.movies];
      state.movies = [];
      state.movies = moviesClone.concat(action.payload);
    },
    resetMovies: (state, action) => {
      state.movies = action.payload;
    },
    pageSetting: state => {
      state.page += 1;
    }
  }
});

export const {moviesSetting, resetMovies, pageSetting} =
  topRatedMoviesListSlice.actions;
export const selectPage = state => state.topRatedMoviesList.page;
export const selectTopRatedMovies = state => state.topRatedMoviesList.movies;
export default topRatedMoviesListSlice.reducer;
