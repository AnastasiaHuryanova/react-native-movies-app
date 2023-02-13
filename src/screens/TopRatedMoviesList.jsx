import React, {useEffect} from 'react';
import {FlatList, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {getTopRatedMovies} from '../axios/theMovieDb/movies';
import {
  pageSetting,
  selectPage,
  selectTopRatedMovies,
  topRatedMoviesSetting
} from '../features/topRatedMoviesListSlice';
import styles from '../styles';
import MovieItem from '../views/MovieItem';

const TMDB_URL = 'https://image.tmdb.org/t/p/w500';

const TopRatedMoviesList = ({navigation}) => {
  const dispatch = useDispatch();
  const movies = useSelector(selectTopRatedMovies);
  const page = useSelector(selectPage);

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

      dispatch(topRatedMoviesSetting(movieList));
    };
    fetchMovies();
  }, [page]);

  const ItemDivider = () => {
    return <View style={styles.itemDivider} />;
  };

  return (
    <View style={styles.container}>
      {/* {console.log(movies, page)} */}
      <FlatList
        data={movies}
        renderItem={({item}) => (
          <MovieItem movie={item} navigation={navigation}></MovieItem>
        )}
        keyExtractor={movie => movie.id}
        ItemSeparatorComponent={ItemDivider}
        onEndReachedThreshold={0.5}
        onEndReached={() => {
          dispatch(pageSetting());
        }}
      />
    </View>
  );
};

export default TopRatedMoviesList;
