import {View, Text, Image} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCalendar} from '@fortawesome/free-regular-svg-icons';
import {faStar, faChevronRight} from '@fortawesome/free-solid-svg-icons';

import styles from '../styles';

const MovieItem = ({movie}) => (
  <View style={styles.item}>
    <Image style={styles.image} source={{uri: movie.image}} />
    <View style={styles.description}>
      <Text style={styles.title}>{movie.title}</Text>
      <Text style={styles.details}>
        <FontAwesomeIcon icon={faCalendar} style={{color: 'grey'}} />
        &nbsp;{movie.year}&nbsp;
        <FontAwesomeIcon icon={faStar} style={{color: 'orange'}} />
        &nbsp;{movie.rating}
      </Text>
    </View>
    <View style={{justifyContent: 'center'}}>
      <FontAwesomeIcon icon={faChevronRight} />
    </View>
  </View>
);

export default MovieItem;
