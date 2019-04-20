import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {
    NavigationScreenProps,
    NavigationStackScreenOptions
} from "react-navigation";

export default class Friends extends React.Component<NavigationScreenProps> {

    private homeButtonClicked = () => {
        this.props.navigation.navigate('Home')
    }

    static navigationOptions = (
        screenProps: NavigationScreenProps
    ): NavigationStackScreenOptions => {
        return {
        };
    };

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