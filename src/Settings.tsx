import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationScreenProps, NavigationStackScreenOptions } from 'react-navigation';

export default class Friends extends React.Component<NavigationScreenProps> {
  static navigationOptions = (screenProps: NavigationScreenProps): NavigationStackScreenOptions => {
    return {
      title: 'Settings',
    };
  };

  private homeButtonClicked = () => {
    this.props.navigation.navigate('Notes');
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Settings Page!</Text>
        <Button title="Back to notes" onPress={this.homeButtonClicked} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
});
