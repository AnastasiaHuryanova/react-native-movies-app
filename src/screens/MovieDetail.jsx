import {useEffect, useState} from 'react';
import {Image, ImageBackground, ScrollView, Text, View} from 'react-native';
import {getMovieDetail} from '../axios/theMovieDb/movies';
import styles from '../styles';

const TMDB_URL = 'https://image.tmdb.org/t/p/w500';

const MovieDetail = ({route}) => {
  const {id} = route.params;

  const [details, setDetails] = useState({});

  useEffect(() => {
    const fetchMovieDetail = async () => {
      const movieDetail = await getMovieDetail(id);
      setDetails(movieDetail);
    };

    fetchMovieDetail();
  }, []);

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
