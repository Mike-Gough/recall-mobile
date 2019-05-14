import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { NavigationScreenProps, NavigationInjectedProps } from 'react-navigation';
import _ from 'lodash';
import { BookDetails } from './Book';
import Markdown from 'react-native-markdown-renderer';

export default class Note extends React.Component<NavigationScreenProps<BookDetails>> {
  static navigationOptions = ({ navigation }: NavigationScreenProps<BookDetails>) => ({
    title: `${navigation.state.params ? navigation.state.params.title : 'Note'}`,
  });

  render() {
    const props: NavigationInjectedProps<BookDetails> = this.props;
    const title: string =
      (props.navigation.state.params && props.navigation.state.params.title) || 'unknown';

    return (
      <ScrollView style={styles.container}>
        <Markdown style={markdownStyle}>{title}</Markdown>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    position: 'absolute',
    top: 0,
    height: '100%',
    width: '100%',
  },
  itemContainer: {
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
});

const markdownStyle = StyleSheet.create({
  view: {
    height: '100%',
  },
  heading: {
    borderBottomWidth: 1,
    borderColor: '#000000',
  },
  heading1: {
    fontSize: 32,
    backgroundColor: '#000000',
    color: '#FFFFFF',
  },
  heading2: {
    fontSize: 24,
  },
  heading3: {
    fontSize: 18,
  },
  heading4: {
    fontSize: 16,
  },
  heading5: {
    fontSize: 13,
  },
  heading6: {
    fontSize: 11,
  },
});
