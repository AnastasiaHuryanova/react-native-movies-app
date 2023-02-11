import React, {useEffect, useState} from 'react';
import {SafeAreaView, FlatList, Text} from 'react-native';

import {getTopRatedMovies} from './axios/theMovieDb/movies';
import styles from './styles';
import MovieItem from './views/MovieItem';

const TMDB_URL = 'https://image.tmdb.org/t/p/w500';

const App = () => {
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const fetchedMovies = await getTopRatedMovies(1);
      const movieList = fetchedMovies.results.map(movie => {
        return {
          title: movie.title,
          id: movie.id,
          image: TMDB_URL + movie.poster_path,
          year: movie.release_date.slice(0,4),
          rating: movie.vote_average,
        };
      });

      setTopRatedMovies(movieList);
    };
    fetchMovies();
  }, []);
  
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello bb</Text>
      <FlatList
        data={topRatedMovies}
        renderItem={({item}) => <MovieItem movie={item}></MovieItem>}
        keyExtractor={movie => movie.id}
      />
    </SafeAreaView>
  );
};

export default App;
