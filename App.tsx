import BottomNavigation from '@/Navigation/Navigation/BottomNavigation';
import React from 'react';
import { SafeAreaView } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'lightgray' }}>
      <BottomNavigation />
    </SafeAreaView>
  );
};

export default App;
