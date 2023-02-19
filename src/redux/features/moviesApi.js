import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_KEY = 'a74169393e0da3cfbc2c58c5feec63d7';
const TMDB_URL = 'https://image.tmdb.org/t/p/w500';

const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.themoviedb.org/3/movie/'
  }),
  endpoints: builder => ({
    getTopRatedMovies: builder.query({
      query: page => `top_rated?api_key=${API_KEY}&page=${page}`,
      serializeQueryArgs: ({ endpointName }) => endpointName,
      transformResponse: (response, meta, arg) => ({
        movies: response.results.map(movie => ({
          title: movie.title,
          id: movie.id,
          image: TMDB_URL + movie.poster_path,
          year: movie.release_date.slice(0, 4),
          rating: movie.vote_average.toFixed(1)
        })),
        page: response.page
      }),
      merge: (currentMovies, newMovies) => {
        if (newMovies.page === 1) {
          currentMovies.movies = newMovies.movies;
          currentMovies.page = 1;
        } else {
          currentMovies.movies.push(...newMovies.movies);
        }
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      }
    }),

    getMovieDetail: builder.query({
      query: id => `${id}?api_key=${API_KEY}`,
      transformResponse: (response, meta, arg) => ({
        title: response.title,
        id: response.id,
        image: TMDB_URL + response.poster_path,
        year: response.release_date.slice(0, 4),
        rating: response.vote_average.toFixed(1),
        backdrop_path: TMDB_URL + response.backdrop_path,
        overview: response.overview
      })
    })
  })
});

export const { useGetTopRatedMoviesQuery, useGetMovieDetailQuery, middleware: moviesApiMiddleware } = moviesApi;

export default moviesApi.reducer;
