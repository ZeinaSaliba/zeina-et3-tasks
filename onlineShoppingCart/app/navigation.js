import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CartScreen from './screens/CartScreen/CartScreen'; // Create this component

const Stack = createNativeStackNavigator();

export default function Navigations() {
  return (
    <Stack.Navigator screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="CartScreen" component={CartScreen} />
    </Stack.Navigator>
  );
}
