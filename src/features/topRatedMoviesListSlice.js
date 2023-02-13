import {createSlice} from '@reduxjs/toolkit';

const topRatedMoviesListSlice = createSlice({
  name: 'topRatedMovies',
  initialState: {
    topRatedMovies: [],
    page: 1
  },
  reducers: {
    topRatedMoviesSetting: (state, action) => {
      state.topRatedMovies = state.topRatedMovies.concat(action.payload);
    },
    pageSetting: state => {
      state.page += 1;
    }
  }
});

export const {topRatedMoviesSetting, pageSetting} =
  topRatedMoviesListSlice.actions;
export const selectPage = state => state.topRatedMovies.page;
export const selectTopRatedMovies = state =>
  state.topRatedMovies.topRatedMovies;
export default topRatedMoviesListSlice.reducer;

/* TopRatedMovielist with states
import React, {useEffect, useState} from 'react';
import {SafeAreaView, FlatList, View} from 'react-native';

import {getTopRatedMovies} from '../axios/theMovieDb/movies';
import styles from '../styles';
import MovieItem from '../views/MovieItem';

const TMDB_URL = 'https://image.tmdb.org/t/p/w500';

const TopRatedMoviesList = ({navigation}) => {
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchMovies = async () => {
      const fetchedMovies = await getTopRatedMovies(page);
      const movieList = fetchedMovies.results.map(movie => {
        return {
          title: movie.title,
          id: movie.id,
          image: TMDB_URL + movie.poster_path,
          year: movie.release_date.slice(0, 4),
          rating: movie.vote_average
        };
      });

      setTopRatedMovies([...topRatedMovies, ...movieList]);
    };
    fetchMovies();
  }, [page]);

  const ItemDivider = () => {
    return <View style={styles.itemDivider} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={topRatedMovies}
        renderItem={({item}) => (
          <MovieItem movie={item} navigation={navigation}></MovieItem>
        )}
        keyExtractor={movie => movie.id}
        ItemSeparatorComponent={ItemDivider}
        onEndReachedThreshold={0.5}
        onEndReached={() => {
          setPage(page + 1);
        }}
      />
    </View>
  );
};

export default TopRatedMoviesList; */
