import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const API_KEY = 'a74169393e0da3cfbc2c58c5feec63d7';

export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://api.themoviedb.org//3/movie/'}),
  endpoints: builder => ({
    getTopRatedMovies: builder.query({
      query: page => `top_rated?api_key=${API_KEY}&page=${page}`
    }),
    getMovieDetail: builder.query({
      query: id => `${id}?api_key=${API_KEY}`
    })
  })
});

export const {useGetTopRatedMoviesQuery, useGetMovieDetailQuery} = moviesApi;
export default moviesApi.reducer;
