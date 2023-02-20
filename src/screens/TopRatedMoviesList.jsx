import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, RefreshControl, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {useGetTopRatedMoviesQuery} from '../redux/features/apiSlice';
import {
  concatMovies,
  moviesSetting,
  nextPage,
  resetPage,
  selectPage,
  selectTopRatedMovies
} from '../redux/features/topRatedMoviesListSlice';
import styles from '../styles';
import MovieItem from '../views/MovieItem';

const TMDB_URL = 'https://image.tmdb.org/t/p/w500';

const TopRatedMoviesList = ({navigation}) => {
  const dispatch = useDispatch();
  const movies = useSelector(selectTopRatedMovies);
  const page = useSelector(selectPage);

  const [refreshing, setRefreshing] = useState(false);

  const {data: fetchedMovies} = useGetTopRatedMoviesQuery(page);

  useEffect(() => {
    if (!fetchedMovies) return;
    const mappedFetchedMovies = fetchedMovies.results.map(movie => {
      return {
        title: movie.title,
        id: movie.id,
        image: TMDB_URL + movie.poster_path,
        year: movie.release_date.slice(0, 4),
        rating: movie.vote_average
      };
    });

    page === 1
      ? dispatch(moviesSetting(mappedFetchedMovies))
      : dispatch(concatMovies(mappedFetchedMovies));
  }, [fetchedMovies]);

  const onRefresh = useCallback(() => {
    const refreshMovies = async () => {
      setRefreshing(true);
      dispatch(resetPage());
      setRefreshing(false);
    };
    refreshMovies();
  }, []);

  const ItemDivider = () => {
    return <View style={styles.itemDivider} />;
  };

  const renderItem = useCallback(
    ({item}) => (
      <MovieItem movie={item} navigation={navigation} key={item.id}></MovieItem>
    ),
    []
  );
  return (
    <View style={styles.container}>
      {movies && (
        <FlatList
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          alwaysBounceVertical={true}
          data={movies}
          renderItem={renderItem}
          keyExtractor={movie => movie.id}
          ItemSeparatorComponent={ItemDivider}
          onEndReachedThreshold={1}
          onEndReached={() => {
            dispatch(nextPage());
          }}
        />
      )}
    </View>
  );
};

export default TopRatedMoviesList;
