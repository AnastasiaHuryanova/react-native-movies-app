import {createSlice} from '@reduxjs/toolkit';

const topRatedMoviesListSlice = createSlice({
  name: 'topRatedMoviesList',
  initialState: {
    movies: [],
    page: 1
  },
  reducers: {
    moviesSetting: (state, action) => {
      state.movies = [...state.movies, ...action.payload];
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
