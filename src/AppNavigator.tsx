import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import Home from './Home';
import Settings from './Settings';
import Ionicons from 'react-native-vector-icons/Ionicons';

const AppNavigator = createBottomTabNavigator({
    Home: Home,
    Settings: Settings,
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
    });

export default AppNavigator;