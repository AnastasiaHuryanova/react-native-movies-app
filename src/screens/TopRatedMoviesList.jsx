import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, RefreshControl, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {topRatedMoviesListSlice} from '../redux/store';

import {getTopRatedMovies} from '../axios/theMovieDb/movies';
import styles from '../styles';
import MovieItem from '../views/MovieItem';

const TMDB_URL = 'https://image.tmdb.org/t/p/w500';

const TopRatedMoviesList = ({navigation}) => {
  const dispatch = useDispatch();
  const movies = useSelector(state => state.topRatedMoviesList.movies);
  const page = useSelector(state => state.topRatedMoviesList.page);

  const [refreshing, setRefreshing] = useState(false);

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

      dispatch(topRatedMoviesListSlice.actions.moviesSetting(movieList));
    };
    fetchMovies();
  }, [page]);
  const onRefresh = useCallback(() => {
    const refreshMovies = async () => {
      setRefreshing(true);
      const fetchedMovies = await getTopRatedMovies(1);
      const movieList = fetchedMovies.results.map(movie => {
        return {
          title: movie.title,
          id: movie.id,
          image: TMDB_URL + movie.poster_path,
          year: movie.release_date.slice(0, 4),
          rating: movie.vote_average
        };
      });
      dispatch(topRatedMoviesListSlice.actions.resetMovies(movieList));
      setRefreshing(false);
    };
    refreshMovies();
  }, []);
  const ItemDivider = () => {
    return <View style={styles.itemDivider} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        alwaysBounceVertical={true}
        data={movies}
        renderItem={({item}) => (
          <MovieItem movie={item} navigation={navigation}></MovieItem>
        )}
        keyExtractor={movie => movie.id}
        ItemSeparatorComponent={ItemDivider}
        onEndReachedThreshold={0.5}
        onEndReached={() => {
          dispatch(topRatedMoviesListSlice.actions.pageSetting());
        }}
      />
    </View>
  );
};

export default TopRatedMoviesList;
