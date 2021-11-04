import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs'

import FacebookScreen from './screens/fb.js';
import InstagramScreen from './screens/in.js';

export default class App extends React.Component {
  render(){
    return <AppContainer />;
  }
}

//Note to self: start from TabNavigator, and progress. Reference: "https://snack.expo.dev/@navneethr/c69-wily-app"
const TabNavigator = createBottomTabNavigator({
  Facebook: {screen: FacebookScreen},
  Instagram: {screen: InstagramScreen}
});

const AppConatiner = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center"
  },
});
