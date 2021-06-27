/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import 'react-native-gesture-handler';
import Entypo from 'react-native-vector-icons/Entypo';
import Home from './screens/Home/index';
import SearchScreen from './screens/SearchResult/index';
import Post from './Components/Posts/index';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import DestinationSearchScreen from './screens/DestinationSearch';
import GuestScreen from './screens/Guests';
import Router from './Navigation/Router';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Router />
    </>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
