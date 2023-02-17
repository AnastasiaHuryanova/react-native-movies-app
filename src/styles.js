import {Dimensions, StyleSheet} from 'react-native';

const window = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    minHeight: window.height / 6,
    padding: 15,
    flexDirection: 'row'
  },
  itemDivider: {
    height: 0.5,
    backgroundColor: '#607D8B'
  },
  description: {
    flex: 1,
    marginHorizontal: 15,
    justifyContent: 'space-around'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black'
  },
  details: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'grey'
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 10,
    margin: 5,
    resizeMode: 'contain',
    alignSelf: 'center'
  },
  overview: {
    fontSize: 25,
    color: 'black',
    textAlign: 'justify',
    lineHeight: 35,
    margin: 25
  },
  movieName: {
    fontSize: 35,
    color: 'white',
    textShadowColor: 'black',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 3,
    margin: 25,
    position: 'absolute',
    bottom: 0
  }
});

export default styles;
