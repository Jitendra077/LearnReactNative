import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabNavigation } from '@/Navigation/BottomTabNavigation/BottomTabNavigation';

export default function BottomNavigation() {
  return (
    <NavigationContainer>
      <BottomTabNavigation />
    </NavigationContainer>
  );
}
