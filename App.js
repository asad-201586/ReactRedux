/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { Provider } from 'react-redux'
import store from './src/redux/store'
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {

  const redux = require('redux')
  const createStore = redux.createStore

  const BUY_CAKE = 'BUY_CAKE'

  const buyCake = () => {
    return {
      type: BUY_CAKE,
      info: 'First redux action'
    }
  }

  const initialState = {
    numberOfCakes: 10
  }

  const store = createStore(reducer)
  console.log('Initial state', store.getState())

  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'BUY_CAKE': return {
        ...state,
        numberOfCakes: state.numberOfCakes - 1
      }

      default: return state
    }
  }



  return (
    <Provider store={store}>
      <SafeAreaView>
        
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
