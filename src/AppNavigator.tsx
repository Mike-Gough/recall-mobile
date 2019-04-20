import React from 'react';
import {
  createBottomTabNavigator,
  createStackNavigator,
  NavigationStackScreenOptions,
} from 'react-navigation';
import Home from './Home';
import Books from './Books';
import Settings from './Settings';
import Ionicons from 'react-native-vector-icons/Ionicons';

let navigationOptions: NavigationStackScreenOptions = {
  headerTitleStyle: {
    fontWeight: 'bold',
    textAlign: 'left',
    alignSelf: 'center',
  },
  headerStyle: {
    backgroundColor: 'white',
  },
};

const HomeStack = createStackNavigator(
  {
    Home: Home,
  },
  {
    defaultNavigationOptions: navigationOptions,
  },
);

const BooksStack = createStackNavigator(
  {
    Books: Books,
  },
  {
    defaultNavigationOptions: navigationOptions,
  },
);

const SettingsStack = createStackNavigator(
  {
    Settings: Settings,
  },
  {
    defaultNavigationOptions: navigationOptions,
  },
);

const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeStack,
    Books: BooksStack,
    Settings: SettingsStack,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let tint = tintColor ? tintColor : undefined;
        let IconComponent = Ionicons;
        let iconName;

        switch (routeName) {
          case 'Home': {
            iconName = `ios-paper`;
            break;
          }
          case 'Books': {
            iconName = `ios-journal`;
            break;
          }
          default: {
            iconName = `ios-options`;
            break;
          }
        }

        return <IconComponent name={iconName} size={25} color={tint} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  },
);

const AppNavigator = createStackNavigator(
  {
    Home: TabNavigator,
  },
  {
    headerMode: 'none',
  },
);

export default AppNavigator;
