import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
import { NavigationScreenProps, NavigationStackScreenOptions } from 'react-navigation';
import { BookScreenProps } from './Book';

export default class Home extends React.Component<NavigationScreenProps> {
  static navigationOptions = (screenProps: NavigationScreenProps): NavigationStackScreenOptions => {
    return {
      title: 'Notes',
    };
  };

  private homeButtonClicked = () => {
    this.props.navigation.navigate('Books');
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Notes Page!</Text>
        <Button title="Go to books" onPress={this.homeButtonClicked} />
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
