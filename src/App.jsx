import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TopRatedMoviesList from './screens/TopRatedMoviesList';
import MovieDetail from './screens/MovieDetail';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomTopRatedMoviesList">
        <Stack.Screen
          name="TopRatedMoviesList"
          component={TopRatedMoviesList}
          options={{title: 'Top rated Movies List'}}
        />
        <Stack.Screen name="MovieDetail" component={MovieDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
