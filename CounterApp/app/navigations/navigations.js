import React, {useEffect, useRef, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import mainScreen from '../screens/MainScreen/mainScreen';

const Stack = createNativeStackNavigator();

export default function Navigations(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="MainScreen" component={mainScreen} />
    </Stack.Navigator>
  );
}
