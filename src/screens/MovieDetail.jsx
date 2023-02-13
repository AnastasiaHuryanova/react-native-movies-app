import {useEffect} from 'react';
import {ImageBackground, ScrollView, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getMovieDetail} from '../axios/theMovieDb/movies';
import {movieDetailsSetting, selectDetails} from '../features/movieDetailSlice';
import styles from '../styles';

const TMDB_URL = 'https://image.tmdb.org/t/p/w500';

const MovieDetail = ({route}) => {
  const {id} = route.params;
  const dispatch = useDispatch();
  const details = useSelector(selectDetails);

  useEffect(() => {
    const fetchMovieDetail = async () => {
      const movieDetail = await getMovieDetail(id);
      dispatch(movieDetailsSetting(movieDetail));

      console.log(JSON.stringify(movieDetail));
    };
    fetchMovieDetail();
  }, []);

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
