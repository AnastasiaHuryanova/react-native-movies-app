import {useEffect, useState} from 'react';
import {Image, Text, View} from 'react-native';
import {getMovieDetail} from '../axios/theMovieDb/movies';

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
    <View>
      <Text>{details.title}</Text>
      <Image
        style={{height: 300}}
        source={{uri: TMDB_URL + details.backdrop_path}}
      />
      <Text>{details.overview}</Text>
    </View>
  );
};

export default MovieDetail;
