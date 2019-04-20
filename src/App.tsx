import React from 'react';
import AppNavigator from './AppNavigator';
import { createAppContainer, createBottomTabNavigator } from 'react-navigation';


const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}