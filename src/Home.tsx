import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {
    NavigationScreenProps,
    NavigationStackScreenOptions
} from "react-navigation";

export default class Home extends React.Component<NavigationScreenProps> {

    private settingsButtonClicked = () => {
        this.props.navigation.navigate('Settings')
    }

    render() {

        return (
            <View style={styles.container}>
                <Text>Home page!</Text>
                <Button
                    title="Go to settings"
                    onPress={this.settingsButtonClicked}
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