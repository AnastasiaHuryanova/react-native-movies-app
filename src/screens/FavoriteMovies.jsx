import React from 'react';
import {FlatList, View} from 'react-native';
import {useSelector} from 'react-redux';

import styles from '../styles';
import MovieItem from '../views/MovieItem';

const FavoriteMovies = ({navigation}) => {
  const movies = useSelector(state => state.topRatedMoviesList.movies);
  const favorites = useSelector(state => state.favorites.favorites);

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
