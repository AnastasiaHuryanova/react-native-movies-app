import {faHeart} from '@fortawesome/free-regular-svg-icons';
import {faHeart as faHeartSolid} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useEffect, useState} from 'react';
import {ImageBackground, Pressable, ScrollView, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getMovieDetail} from '../axios/theMovieDb/movies';
import {favoritesSlice, movieDetailSlice} from '../redux/store';

import styles from '../styles';

const TMDB_URL = 'https://image.tmdb.org/t/p/w500';

const MovieDetail = ({navigation, route}) => {
  const {id} = route.params;

  const dispatch = useDispatch();
  const details = useSelector(state => state.movieDetail.movie);
  const favorites = useSelector(state => state.favorites.favorites);

  const [iconHeart, setIconHeart] = useState(
    favorites.includes(id) ? faHeartSolid : faHeart
  );

  useEffect(() => {
    const fetchMovieDetail = async () => {
      const movieDetail = await getMovieDetail(id);
      dispatch(movieDetailSlice.actions.movieDetailsSetting(movieDetail));
    };
    fetchMovieDetail();
    dispatch(movieDetailSlice.actions.movieDetailsRemoving());
  }, [id]);

  const favoritesHandling = () => {
    if (iconHeart === faHeart) {
      setIconHeart(faHeartSolid);
      dispatch(favoritesSlice.actions.addFavoriteMovieId(id));
    } else {
      setIconHeart(faHeart);
      return dispatch(favoritesSlice.actions.removeFavoriteByMovieId(id));
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

  return (
    <ScrollView>
      <View>
        {details?.backdrop_path && (
          <ImageBackground
            source={{uri: TMDB_URL + details.backdrop_path}}
            resizeMode="cover"
            style={{height: 300}}>
            {details?.title && (
              <Text style={styles.movieName}>{details.title}</Text>
            )}
          </ImageBackground>
        )}
      </View>
      {details?.overview && (
        <Text style={styles.overview}>{details.overview}</Text>
      )}
    </ScrollView>
  );
};

export default MovieDetail;
