import * as React from 'react';
import Navigations from './app/navigation';
import CartStore from './app/mobx/cartStore';
import ProductStore from './app/mobx/productStore';
import UserStore from './app/mobx/userStore';
import {Provider} from 'mobx-react';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    // <Provider cartStore={CartStore} productStore={ProductStore} userStore={UserStore}>
    <NavigationContainer>
      <Navigations />
      </NavigationContainer>
    // </Provider>
  );
}
