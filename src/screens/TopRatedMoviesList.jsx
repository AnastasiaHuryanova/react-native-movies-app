import React, { useCallback, useState } from 'react';
import { FlatList, RefreshControl, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import {
  nextPage,
  resetPage,
  selectPageNumber
} from '../redux/features/pageSlice';
import styles from '../styles';
import MovieItem from '../views/MovieItem';
import { useGetTopRatedMoviesQuery } from '../redux/features/moviesApi';

const TopRatedMoviesList = ({ navigation }) => {
  const dispatch = useDispatch();
  const page = useSelector(selectPageNumber);
  const { movies } = useGetTopRatedMoviesQuery(page, {
    selectFromResult: ({ data }) => ({
      movies: data?.movies
    })
  });

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    dispatch(resetPage());
    setRefreshing(false);
  }, []);

  const ItemDivider = () => {
    return <View style={styles.itemDivider} />;
  };

  const renderItem = useCallback(
    ({ item }) => (
      <MovieItem movie={item} navigation={navigation} key={item.id}></MovieItem>
    ),
    []
  );

  return (
    <View style={styles.container}>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        data={movies}
        renderItem={renderItem}
        keyExtractor={movie => movie.id}
        ItemSeparatorComponent={ItemDivider}
        onEndReachedThreshold={1}
        onEndReached={() => {
          dispatch(nextPage());
        }}
      />
    </View>
  );
};

export default TopRatedMoviesList;
