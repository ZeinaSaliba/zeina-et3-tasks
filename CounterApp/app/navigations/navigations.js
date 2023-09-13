import React, {useEffect, useRef, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Counter from '../screens/Counter/counter';

const Stack = createNativeStackNavigator();

export default function Navigations(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name="Counter" component={Counter} />
      </Stack.Navigator>
    
  );
}
