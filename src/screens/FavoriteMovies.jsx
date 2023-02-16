import React from 'react';
import {FlatList, View} from 'react-native';
import {useSelector} from 'react-redux';
import {selectFavorites} from '../redux/features/favoriteMoviesSlice';
import {selectTopRatedMovies} from '../redux/features/topRatedMoviesListSlice';

import styles from '../styles';
import MovieItem from '../views/MovieItem';

const FavoriteMovies = ({navigation}) => {
  const movies = useSelector(selectTopRatedMovies);
  const favorites = useSelector(selectFavorites);

  const ItemDivider = () => {
    return <View style={styles.itemDivider} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={favorites}
        renderItem={({item}) => {
          const movie = movies.find(movie => movie.id === item);
          return <MovieItem movie={movie} navigation={navigation}></MovieItem>;
        }}
        keyExtractor={id => id}
        ItemSeparatorComponent={ItemDivider}
      />
    </View>
  );
};

export default FavoriteMovies;
