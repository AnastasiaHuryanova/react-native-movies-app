import {faHeart} from '@fortawesome/free-regular-svg-icons';
import {faHeart as faHeartSolid} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useEffect, useState} from 'react';
import {ImageBackground, Pressable, ScrollView, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useGetMovieDetailQuery} from '../redux/features/apiSlice';
import {
  addFavoriteMovieId,
  removeFavoriteByMovieId,
  selectFavorites
} from '../redux/features/favoriteMoviesSlice';

import styles from '../styles';

const TMDB_URL = 'https://image.tmdb.org/t/p/w500';

const MovieDetail = ({navigation, route}) => {
  const {id} = route.params;

  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);

  const [iconHeart, setIconHeart] = useState(
    favorites.includes(id) ? faHeartSolid : faHeart
  );

  const {data: details, isLoading} = useGetMovieDetailQuery(id);

  const favoritesHandling = () => {
    if (iconHeart === faHeart) {
      setIconHeart(faHeartSolid);
      dispatch(addFavoriteMovieId(id));
    } else {
      setIconHeart(faHeart);
      return dispatch(removeFavoriteByMovieId(id));
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
            style={{color: 'red'}}
            size={27}
          />
        </Pressable>
      )
    });
  }, [iconHeart]);

  if (isLoading) return null;

  return (
    <ScrollView>
      <View>
        <ImageBackground
          source={{uri: TMDB_URL + details.backdrop_path}}
          resizeMode="cover"
          style={{height: 300}}>
          <Text style={styles.movieName}>{details.title}</Text>
        </ImageBackground>
      </View>
      <Text style={styles.overview}>{details.overview}</Text>
    </ScrollView>
  );
};

export default MovieDetail;
