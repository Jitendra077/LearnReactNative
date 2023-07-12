import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '@/Screens/Home/Home';
import DetailPage from '@/Screens/DetailPage/DetailPage';
import Profile from '@/Screens/Profile/Profile';
import Colors from '@/Common/Colors';
import { SvgIcon } from '@/Components/SvgIcon/SvgIcon';
const Tab = createBottomTabNavigator();

export const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={{
        tabBarLabelStyle: {
          fontWeight: 'bold',
          fontSize: 12,
          marginTop: -4,
        },
        tabBarActiveTintColor: Colors.secondaryBlack,
        tabBarInactiveTintColor: Colors.secondarySilver,
      }}
    >
      <Tab.Screen
        name='Home'
        component={Home}
        options={{
          tabBarIcon({ focused }) {
            return (
              <SvgIcon
                fill={focused ? Colors.secondaryBlack : Colors.secondarySilver}
                name='home'
                height={16}
                width={16}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name='Detail Page'
        component={DetailPage}
        options={{
          tabBarIcon({ focused }) {
            return (
              <SvgIcon
                fill={focused ? Colors.secondaryBlack : Colors.secondarySilver}
                name='gallery'
                height={16}
                width={16}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name='Profile'
        component={Profile}
        options={{
          tabBarIcon({ focused }) {
            return (
              <SvgIcon
                fill={focused ? Colors.secondaryBlack : Colors.secondarySilver}
                name='settings'
                height={16}
                width={16}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};
