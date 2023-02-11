import {StyleSheet, StatusBar} from 'react-native';
import {red100} from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0
  },
  item: {
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
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black'
  },
  details: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 10,
    margin: 5,
    resizeMode: 'contain'
  }
});

export default styles;
