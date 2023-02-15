import React from 'react';
import {FlatList, View} from 'react-native';
import {useSelector} from 'react-redux';

import styles from '../styles';
import MovieItem from '../views/MovieItem';

const FavoriteMovies = () => {
  const favorites = useSelector(state => state.favorites.favorites);
  const movies = useSelector(state => state.topRatedMoviesList.movies);

  const movie = movies.find(movies.id === favorites.id);

  const ItemDivider = () => {
    return <View style={styles.itemDivider} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={favorites}
        renderItem={({movie}) => {
          return <MovieItem movie={movie} navigation={navigation}></MovieItem>;
        }}
        keyExtractor={id => id}
        ItemSeparatorComponent={ItemDivider}
      />
    </View>
  );
};

export default FavoriteMovies;
