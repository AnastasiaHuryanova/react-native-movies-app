import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useEffect, useState } from 'react';
import {
  ImageBackground,
  Pressable,
  ScrollView,
  Text,
  View
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { useGetMovieDetailQuery } from '../redux/features/moviesApi';
import {
  addFavoriteMovie,
  removeFavoriteByMovie,
  selectFavoriteMovies
} from '../redux/features/favoriteMoviesSlice';
import styles from '../styles';

const MovieDetail = ({ navigation, route }) => {
  const { id } = route.params;

  const dispatch = useDispatch();
  const favorites = useSelector(selectFavoriteMovies);
  const { data: movie } = useGetMovieDetailQuery(id);

  const [iconHeart, setIconHeart] = useState(
    favorites.includes(movie) ? faHeartSolid : faHeart
  );

  const favoritesHandling = () => {
    if (iconHeart === faHeart) {
      setIconHeart(faHeartSolid);
      dispatch(addFavoriteMovie(movie));
    } else {
      setIconHeart(faHeart);
      dispatch(removeFavoriteByMovie(movie));
    }
  };

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable
          onPress={() => {
            favoritesHandling();
          }}>
          <FontAwesomeIcon
            className="fa-beat"
            icon={iconHeart}
            style={{ color: 'red' }}
            size={27}
          />
        </Pressable>
      )
    });
  }, [iconHeart, movie]);

  return (
    <ScrollView>
      <View>
        {movie?.backdrop_path && (
          <ImageBackground
            source={{ uri: movie.backdrop_path }}
            resizeMode="cover"
            style={{ height: 300 }}>
            {movie?.title && (
              <Text style={styles.movieName}>{movie.title}</Text>
            )}
          </ImageBackground>
        )}
      </View>
      {movie?.overview && <Text style={styles.overview}>{movie.overview}</Text>}
    </ScrollView>
  );
};

export default MovieDetail;
