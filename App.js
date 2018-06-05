/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {
  StackNavigator
} from 'react-navigation'
import SearchPage from './SearchPage'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};

const styles = StyleSheet.create({
  description: {
    fontSize: 18,
    textAlign: 'center',
    color: '#656565',
    marginTop: 65,
  },
});

// class SearchPage extends Component<{}> {
//   static navigationOptions = {
//     title: 'Property Finder'
//   };
//   render() {
//     return <Text style={styles.description}>Search for houses to buy!</Text>;
//   }
// }

const App = StackNavigator({
  Home: { screen: SearchPage },
});

export default App;
