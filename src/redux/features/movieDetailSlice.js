import {createSlice} from '@reduxjs/toolkit';

const movieDetailSlice = createSlice({
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

export const {movieDetailsSetting, movieDetailsRemoving} =
  movieDetailSlice.actions;
export const selectDetails = state => state.movieDetail.movie;
export default movieDetailSlice.reducer;
