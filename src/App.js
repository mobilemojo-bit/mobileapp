/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
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

import { ThemeProvider } from 'styled-components'

import theme from './theme'
import RootNavigator from './navigation/RootNavigator'


const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <ThemeProvider theme={theme}>            
      <RootNavigator />            
    </ThemeProvider>
  );
};

export default App;
