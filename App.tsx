/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaView } from 'react-native';
import Login from './src/Screens/Login/Login';

const App = () => {
  return <SafeAreaView style={{ flex: 1, backgroundColor: 'lightgray' }}>
    <Login />
  </SafeAreaView>;
};

export default App;
