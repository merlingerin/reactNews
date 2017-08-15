import React from 'react';
// import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReduxers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

import { 
  StyleSheet, 
  Text, 
  View,
  AppRegistry,
  Button
} from 'react-native';

const quotes = [
  {
    userId: 1,
    id: 1,
    title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    userId: 1,
    id: 2,
    title: "qui est esse",
    body: "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla"
  },
  {
    userId: 1,
    id: 3,
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    body: "et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut"
  },
  {
    userId: 1,
    id: 4,
    title: "eum et est occaecati",
    body: "ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit"
  },
  {
    userId: 1,
    id: 5,
    title: "nesciunt quas odio",
    body: "repudiandae veniam quaerat sunt sed alias aut fugiat sit autem sed est voluptatem omnis possimus esse voluptatibus quis est aut tenetur dolor neque"
  },
  {
    userId: 1,
    id: 6,
    title: "dolorem eum magni eos aperiam quia",
    body: "ut aspernatur corporis harum nihil quis provident sequi mollitia nobis aliquid molestiae perspiciatis et ea nemo ab reprehenderit accusantium quas voluptate dolores velit et doloremque molestiae"
    },
];

export default class App extends React.Component {
  state = {
    activeQuoteIndex: 0
  }

  nextQuote = () => {
    const { activeQuoteIndex } = this.state;

    if ( activeQuoteIndex < quotes.length - 2 ) {
      this.setState({
        activeQuoteIndex: activeQuoteIndex + 1
      })
    }
    else {
      this.setState({
        activeQuoteIndex: 0
      })
    }
  }

  render() {
    const activeQuote = quotes[this.state.activeQuoteIndex];
    console.log('SA');
    return (
      <View style={styles.container}>
        <Text style={styles.message}>
          { activeQuote.title }
          </Text>
        <Text style={styles.author}>
          { activeQuote.body }
        </Text>
        <View style={styles.button}>
          <Button
            title={'Next quote'}
            onPress={this.nextQuote}
          />
        </View>
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
    paddingHorizontal: 30
  },
  message: {
    fontSize: 28,
    marginBottom: 20,
  },
  author: {
    fontSize: 18
  },
  button: {
    position: 'absolute',
    bottom: 30
  }
});
