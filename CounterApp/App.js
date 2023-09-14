import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigations from './app/navigations/navigations';

export default function App() {
    return (
        <NavigationContainer>
          <Navigations/>
        </NavigationContainer>
      );
    }
    