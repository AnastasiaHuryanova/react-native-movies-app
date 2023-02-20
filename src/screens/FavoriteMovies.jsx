import React from 'react';
import {FlatList, View} from 'react-native';
import {useSelector} from 'react-redux';
import {selectFavorites} from '../redux/features/favoriteMoviesSlice';
import {selectTopRatedMovies} from '../redux/features/topRatedMoviesListSlice';

import styles from '../styles';
import MovieItem from '../views/MovieItem';

const FavoriteMovies = ({navigation}) => {
  const favorites = useSelector(selectFavorites);
  const ItemDivider = () => {
    return <View style={styles.itemDivider} />;
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={favorites}
        renderItem={({item}) => {
          return <MovieItem movie={item} navigation={navigation}></MovieItem>;
        }}
        keyExtractor={movie => movie.id}
        ItemSeparatorComponent={ItemDivider}
      />
    </View>
  );
};

export default FavoriteMovies;
