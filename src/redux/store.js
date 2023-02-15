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
    },
    movieDetailsRemoving: state => {
      state.movie = {};
    }
  }
});

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    favorites: []
  },
  reducers: {
    addFavoriteMovieId: (state, action) => {
      const newFavoriteMovieId = action.payload;
      const newFavorites = new Set(state.favorites);
      newFavorites.add(newFavoriteMovieId);

      state.favorites = [...newFavorites];
    },
    removeFavoriteByMovieId: (state, action) => {
      const favoriteMovieIdToBeRemoved = action.payload;
      const newFavorites = new Set(state.favorites);
      newFavorites.delete(favoriteMovieIdToBeRemoved);

      state.favorites = [...newFavorites];
    }
  }
});

export default store = configureStore({
  reducer: {
    topRatedMoviesList: topRatedMoviesListSlice.reducer,
    movieDetail: movieDetailSlice.reducer,
    favorites: favoritesSlice.reducer
  }
});
