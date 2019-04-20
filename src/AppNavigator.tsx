import React from 'react';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import Home from './Home';
import Settings from './Settings';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeStack = createStackNavigator({
    Home: Home,
})

const SettingsStack = createStackNavigator({
    Settings: Settings,
})

const TabNavigator = createBottomTabNavigator({
    Home: HomeStack,
    Settings: SettingsStack
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
                        iconName = `ios-information-circle${focused ? '' : '-outline'}`;
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
    }
)

const AppNavigator = createStackNavigator({
    Home: TabNavigator,
    Settings: SettingsStack,
},
    {
        headerMode: 'none'
    })

export default AppNavigator