import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Provider} from 'react-redux';

import store from './redux/store';
import MovieDetail from './screens/MovieDetail';
import TopRatedMoviesList from './screens/TopRatedMoviesList';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
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
            options={{title: 'Movies'}}
          />
          <Stack.Screen
            name="MovieDetail"
            component={MovieDetail}
            options={{title: 'Movie Info'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
