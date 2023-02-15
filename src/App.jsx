import {faHeart} from '@fortawesome/free-regular-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Pressable, StatusBar, Text} from 'react-native';

import {navigationRef} from './app/RootNavigation';
import * as RootNavigation from './app/RootNavigation.js';

import FavoriteMovies from './screens/FavoriteMovies';
import MovieDetail from './screens/MovieDetail';
import TopRatedMoviesList from './screens/TopRatedMoviesList';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <StatusBar></StatusBar>
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
              <Pressable
                onPress={() => RootNavigation.navigate('FavoriteMovies', {})}>
                <Text style={{color: '#0d6efd', fontSize: 18}}>Favorites</Text>
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
                  style={{color: 'red'}}
                  size={25}
                />
              </Pressable>
            )
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
