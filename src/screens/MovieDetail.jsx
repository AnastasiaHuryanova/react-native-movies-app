import {Text, View} from 'react-native';

const MovieDetail = ({route}) => {
  const {id} = route.params;
  return (
    <View>
      <Text>{id}</Text>
    </View>
  );
};

export default MovieDetail;
