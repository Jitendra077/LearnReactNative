import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '@/Screens/Home/Home';
import DetailPage from '@/Screens/DetailPage/DetailPage';
import Profile from '@/Screens/Profile/Profile';
const Tab = createBottomTabNavigator();

export const BottomTabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Home' component={Home} />
      <Tab.Screen name='DetailPage' component={DetailPage} />
      <Tab.Screen name='Profile' component={Profile} />
    </Tab.Navigator>
  );
};
