import React from 'react';
import { StyleSheet, FlatList, Text, View, TouchableHighlight } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { BookScreenProps } from './Book';

export default class Books extends React.Component<NavigationScreenProps> {
  static navigationOptions = {
    title: 'Books',
  };

  static books: Array<BookScreenProps> = [
    {
      book: 'JavaScript',
      details: [
        {
          id: 1,
          title: '<javascript example>',
        },
        {
          id: 2,
          title: `\`await\` suspends the current *function* evaluations, including all control structures. 
                    
                    therefore in \`.forEach\` it does not wait for callback to finish before iterating to next.
                    
                    https://stackoverflow.com/questions/37576685/using-async-await-with-a-foreach-loop`,
        },
        {
          id: 3,
          title: `# This is Heading 1{'\n\n'}
                            ## This is Heading 2{'\n\n'}
                            1. List1 {'\n'}
                            2. List2 {'\n'} 
                            {'\t'}1. sublist1{'\n'}
                            {'\t'}description sublist1.{'\n'}
                            {'\t'}2. sublist2{'\t\t'}{'\n'}
                            * List3{'\n'}
                            * List4{'\n'}
                            {'\t'}1. **bold text** {'\n'}
                            {'\t'}2. this line contain * and should not be a new sublist{'\t\t'}{'\n'}
                            5.  Last list{'\n\n'}
                            Some *really* basic **Markdown**.{'\n\n'}


                            ## this is header {'\n\n\n\n'}
                            {'this is _italic_ '}
                            {'this is **strong**'}

                            {'\n\n'}
                            | # | Name   | Age |{'\n'}
                            |---|--------|-----|{'\n'}
                            | 1 | John   | 19  |{'\n'}
                            | 2 | Sally  | 18  |{'\n'}
                            | 3 | Stream | 20  |{'\n'}`,
        },
      ],
    },
    {
      book: 'Linux',
      details: [
        {
          id: 1,
          title: 'linux example',
        },
      ],
    },
    {
      book: 'Wisdom',
      details: [
        {
          id: 1,
          title: 'wisodom example',
        },
      ],
    },
    {
      book: 'Vocabulary',
      details: [
        {
          id: 1,
          title: 'vocabulary example',
        },
      ],
    },
  ];

  render() {
    let tint: string | undefined = undefined;
    let IconComponent = Ionicons;
    let iconName = `ios-paper`;
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

    let extractKey = (item: BookScreenProps, index: number) => {
      return item.book.toString();
    };

    let bookClicked = (_book: BookScreenProps) => () =>
      this.props.navigation.navigate('Book', _book);

    let renderItem = ({ item }: { item: BookScreenProps }) => {
      return (
        <TouchableHighlight onPress={bookClicked(item)}>
          <View style={styles.itemContainer}>
            <IconComponent style={styles.itemIcon} name={iconName} size={18} color={tint} />
            <Text style={styles.item}>{item.book}</Text>
          </View>
        </TouchableHighlight>
      );
    };

    return (
      <View style={styles.container}>
        <FlatList
          ItemSeparatorComponent={renderSeparator}
          data={Books.books}
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
    fontWeight: 'bold',
    paddingTop: 15,
    paddingBottom: 15,
    fontSize: 16,
  },
  itemIcon: {
    paddingLeft: 15,
    paddingTop: 16,
    paddingBottom: 12,
    paddingRight: 15,
  },
});
