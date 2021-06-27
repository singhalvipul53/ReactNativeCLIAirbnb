import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './../screens/Home/index';
import SearchResultNavigation from './SearchResultNavigation';
const Stack = createStackNavigator();

const ExploreNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'Welcome'}
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name={'SearchResults'}
        component={SearchResultNavigation}
        options={{
          title: 'Search your destination',
        }}
      />
    </Stack.Navigator>
  );
};

export default ExploreNavigator;
