import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import DestinationSearchScreen from '../screens/DestinationSearch';
import GuestScreen from '../screens/Guests';
import HomeTabNavigator from './HomeTabNavigator';
import AdvancedImageCarousel from '../screens/AnimationComponents/AdvancedImageCarousel';
import Beautifulcircleanimation from '../screens/AnimationComponents/Beautifulcircleanimation';
const Stack = createStackNavigator();
const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={'Home'}
          component={HomeTabNavigator}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={'Destination Search'}
          component={DestinationSearchScreen}
          options={{
            title: 'Search your destination',
          }}
        />
        <Stack.Screen
          name={'Guests'}
          component={GuestScreen}
          options={{
            title: 'How many people',
          }}
        />
        <Stack.Screen
          name={'Animation'}
          component={AdvancedImageCarousel}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={'CircleAnimation'}
          component={Beautifulcircleanimation}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
