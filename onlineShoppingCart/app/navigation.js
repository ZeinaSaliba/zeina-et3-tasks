import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CartScreen from './screens/CartScreen/CartScreen'; // Create this component
import ProductScreen from './screens/ProductScreen/ProductScreen';
import UserScreen from './screens/UserScreen/UserScreen';
const Stack = createNativeStackNavigator();

export default function Navigations() {
  return (
    <Stack.Navigator screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="UserScreen" component={UserScreen} />
      <Stack.Screen name="ProductScreen" component={ProductScreen} />
      <Stack.Screen name="CartScreen" component={CartScreen} />
    </Stack.Navigator>
  );
}
