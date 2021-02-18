/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import theme from './theme';
import {Provider as PaperProvider} from 'react-native-paper';

export default function App() {
  <PaperProvider theme={theme} />;
}
