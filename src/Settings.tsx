import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {
    NavigationScreenProps,
    NavigationStackScreenOptions
} from "react-navigation";

export default class Friends extends React.Component<NavigationScreenProps> {

    static navigationOptions = (
        screenProps: NavigationScreenProps,
    ): NavigationStackScreenOptions => {
        return {
            title: 'Settings',
            headerTitleStyle: {
                textAlign: 'center',
                alignSelf: 'center'
            },
            headerStyle: {
                backgroundColor: 'white',
            }
        };
    }

    private homeButtonClicked = () => {
        this.props.navigation.navigate('Home')
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Settings Page!</Text>
                <Button
                    title="Back to home"
                    onPress={this.homeButtonClicked}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});