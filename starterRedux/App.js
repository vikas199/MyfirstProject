/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers'
import { Header } from './src/common/Index'
import LibraryList from './src/libraryList';





export default class App extends Component{
  render() {
    return (
      <Provider store = { createStore(reducers) }>
    <View>
      <Header headerText="App"/>
      <LibraryList />
      </View>
     </Provider>
    );
  }
}

const styles = StyleSheet.create({
 
});
