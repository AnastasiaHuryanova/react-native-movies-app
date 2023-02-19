import {createSlice} from '@reduxjs/toolkit';

const topRatedMoviesListSlice = createSlice({
  name: 'topRatedMoviesList',
  initialState: {
    movies: [],
    page: 1
  },
  reducers: {
    concatMovies: (state, action) => {
      state.movies = [...state.movies, ...action.payload];
    },
    moviesSetting: (state, action) => {
      state.movies = action.payload;
    },
    nextPage: state => {
      state.page += 1;
    },
    resetPage: (state) => {
      state.page = 1
    }
  }
});

export const {concatMovies, moviesSetting, nextPage, resetPage} =
  topRatedMoviesListSlice.actions;
export const selectPage = state => state.topRatedMoviesList.page;
export const selectTopRatedMovies = state => state.topRatedMoviesList.movies;
export default topRatedMoviesListSlice.reducer;
