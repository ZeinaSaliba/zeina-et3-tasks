import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login/Login';
import Profile from '../screens/Profile/Profile';
import BottomStack from './bottomStack';
import DrawerNavigator from './drawerStack';

const Stack = createNativeStackNavigator();

export default function Navigations(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="BottomStack" component={BottomStack} />
      <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}
