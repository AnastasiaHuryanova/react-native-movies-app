import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Pressable, Text } from 'react-native';
import { Provider } from 'react-redux';

import navigationRef, { navigate } from './src/navigationRef';
import FavoriteMovies from './src/screens/FavoriteMovies';
import MovieDetail from './src/screens/MovieDetail';
import TopRatedMoviesList from './src/screens/TopRatedMoviesList';
import { store } from './src/redux/store';

const Stack = createNativeStackNavigator();

export default () => {
  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator
          initialRouteName="TopRatedMoviesList"
          screenOptions={{
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: 'bold'
            },
            animation: 'slide_from_right'
          }}>
          <Stack.Screen
            name="TopRatedMoviesList"
            component={TopRatedMoviesList}
            options={{
              title: 'Movies',
              headerRight: () => (
                <Pressable onPress={() => navigate('FavoriteMovies', {})}>
                  <Text style={{ color: '#0d6efd', fontSize: 18 }}>
                    Favorites
                  </Text>
                </Pressable>
              )
            }}
          />
          <Stack.Screen
            name="FavoriteMovies"
            component={FavoriteMovies}
            options={{
              title: 'Favorite Movies'
            }}
          />
          <Stack.Screen
            name="MovieDetail"
            component={MovieDetail}
            options={{
              title: 'Movie Info',
              headerRight: () => (
                <Pressable onPress={() => {}}>
                  <FontAwesomeIcon
                    className="fa-beat"
                    icon={faHeart}
                    style={{ color: 'red' }}
                    size={25}
                  />
                </Pressable>
              )
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
