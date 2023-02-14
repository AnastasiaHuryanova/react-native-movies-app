import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {useSelector} from 'react-redux';

import styles from '../styles';

const FavoriteMovies = () => {
  const favorites = useSelector(state => state.favorites.favorites);

  const ItemDivider = () => {
    return <View style={styles.itemDivider} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={favorites}
        renderItem={({item}) => <Text>{item}</Text>}
        keyExtractor={id => id}
        ItemSeparatorComponent={ItemDivider}
      />
    </View>
  );
};

export default FavoriteMovies;
