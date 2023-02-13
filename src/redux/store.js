import {configureStore, createSlice} from '@reduxjs/toolkit';

export const topRatedMoviesListSlice = createSlice({
  name: 'topRatedMoviesList',
  initialState: {
    movies: [],
    page: 1
  },
  reducers: {
    moviesSetting: (state, action) => {
      state.movies = state.movies.concat(action.payload);
    },
    pageSetting: state => {
      state.page += 1;
    }
  }
});

export const movieDetailSlice = createSlice({
  name: 'movieDetail',
  initialState: {
    movie: {}
  },
  reducers: {
    movieDetailsSetting: (state, action) => {
      state.movie = action.payload;
    }
  }
});

export default store = configureStore({
  reducer: {
    topRatedMoviesList: topRatedMoviesListSlice.reducer,
    movieDetail: movieDetailSlice.reducer
  }
});
