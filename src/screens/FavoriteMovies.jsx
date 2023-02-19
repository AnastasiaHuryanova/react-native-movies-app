import React, { useCallback } from 'react';
import { FlatList, View } from 'react-native';
import { useSelector } from 'react-redux';
import { selectFavoriteMovies } from '../redux/features/favoriteMoviesSlice';

import styles from '../styles';
import MovieItem from '../views/MovieItem';

const FavoriteMovies = ({ navigation }) => {
  const favoriteMovies = useSelector(selectFavoriteMovies);

  const ItemDivider = () => {
    return <View style={styles.itemDivider} />;
  };

  const renderItem = useCallback(
    ({ item }) => <MovieItem movie={item} navigation={navigation}></MovieItem>,
    []
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={favoriteMovies}
        renderItem={renderItem}
        keyExtractor={movie => movie.id}
        ItemSeparatorComponent={ItemDivider}
      />
    </View>
  );
};

export default FavoriteMovies;
