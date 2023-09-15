import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from '../screens/MainScreen/mainScreen';
import SecondScreen from '../screens/SecondScreen/secondScreen';

const Stack = createNativeStackNavigator();
// using Stack.navigator to manage navigations
export default function Navigations(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="MainScreen" component={MainScreen} />
      <Stack.Screen name="SecondScreen" component={SecondScreen} />
    </Stack.Navigator>
  );
}
