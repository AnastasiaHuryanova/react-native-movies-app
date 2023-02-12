import React, {useEffect, useState} from 'react';
import {SafeAreaView, FlatList, View} from 'react-native';

import {getTopRatedMovies} from '../axios/theMovieDb/movies';
import styles from '../styles';
import MovieItem from '../views/MovieItem';

const TMDB_URL = 'https://image.tmdb.org/t/p/w500';

const TopRatedMoviesList = ({navigation}) => {
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
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

      setTopRatedMovies(movieList);
    };
    fetchMovies();
  }, []);

  const ItemDivider = () => {
    return <View style={styles.itemDivider} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={topRatedMovies}
        renderItem={({item}) => (
          <MovieItem movie={item} navigation={navigation}></MovieItem>
        )}
        keyExtractor={movie => movie.id}
        ItemSeparatorComponent={ItemDivider}
      />
    </SafeAreaView>
  );
};

export default TopRatedMoviesList;
