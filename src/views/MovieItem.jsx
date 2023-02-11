import {View, Text, Image} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCalendar } from '@fortawesome/free-regular-svg-icons/faCalendar';
import { faStar } from '@fortawesome/free-solid-svg-icons/faStar';

import styles from '../styles';


const MovieItem = ({movie}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{movie.title}</Text>
    <Image style={styles.image} source={{uri: movie.image}} />
    <FontAwesomeIcon icon={ faCalendar } style={{color: 'grey'}}/>
    <Text>{movie.year}</Text>
    <FontAwesomeIcon icon={faStar} style={{color: 'yellow'}}/>
    <Text>{movie.rating}</Text>
  </View>
);

export default MovieItem;
