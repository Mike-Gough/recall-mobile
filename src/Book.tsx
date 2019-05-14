import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { NavigationScreenProps, NavigationInjectedProps, FlatList } from 'react-navigation';
import _ from 'lodash';

export interface BookDetails {
  id: number;
  title: string;
}

export interface BookScreenProps {
  book: string;
  details: Array<BookDetails>;
}

export default class Book extends React.Component<NavigationScreenProps<BookScreenProps>> {
  static navigationOptions = ({ navigation }: NavigationScreenProps<BookScreenProps>) => ({
    title: `${navigation.state.params ? navigation.state.params.book : 'Book'}`,
  });

  render() {
    const props: NavigationInjectedProps<BookScreenProps> = this.props;
    const book: string =
      (props.navigation.state.params && props.navigation.state.params.book) || 'unknown';
    const entries: Array<BookDetails> | undefined =
      (props.navigation.state.params && props.navigation.state.params.details) || [];
    let renderSeparator = () => {
      return (
        <View
          style={{
            height: 1,
            width: '100%',
            backgroundColor: '#CED0CE',
            marginLeft: 15,
          }}
        />
      );
    };

    let titleToHeading = (_title: string) => {
      return _title;
    };

    let titleToNumberOfLines = (_title: string) => {
      return 1;
    };

    let noteClicked = (_note: BookDetails) => () => {
      this.props.navigation.navigate('Note', _note);
    };

    let extractKey = (item: BookDetails, index: number) => {
      return item.id.toString();
    };

    let renderItem = ({ item }: { item: BookDetails }) => {
      return (
        <TouchableHighlight onPress={noteClicked(item)}>
          <View style={styles.itemContainer}>
            <Text style={styles.item} numberOfLines={titleToNumberOfLines(item.title)}>
              {titleToHeading(item.title)}
            </Text>
          </View>
        </TouchableHighlight>
      );
    };

    return (
      <View style={styles.container}>
        <FlatList
          ItemSeparatorComponent={renderSeparator}
          data={entries}
          keyExtractor={extractKey}
          renderItem={renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'stretch',
    justifyContent: 'space-evenly',
  },
  itemContainer: {
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  item: {
    color: 'black',
    padding: 15,
    fontSize: 18,
  },
  itemIcon: {
    paddingLeft: 15,
    paddingTop: 16,
    paddingBottom: 15,
    paddingRight: 15,
  },
});
