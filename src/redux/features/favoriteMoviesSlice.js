import {createSlice} from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
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

export const {addFavoriteMovieId, removeFavoriteByMovieId} =
  favoritesSlice.actions;
export const selectFavorites = state => state.favorites.favorites;
export default favoritesSlice.reducer;
