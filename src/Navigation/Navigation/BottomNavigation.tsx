import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { BottamTabNavigation } from '@/Navigation/BottomTabNavigation/BottomTabNavigation';

export default function BottomNavigation() {
  return (
    <NavigationContainer>
      <BottamTabNavigation />
    </NavigationContainer>
  );
}
