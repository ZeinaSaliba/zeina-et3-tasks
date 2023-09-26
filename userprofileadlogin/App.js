import 'react-native-gesture-handler'
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigations from './app/navigation/navigations';
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {I18nextProvider} from 'react-i18next';
import { BaseSetting } from './app/commons/i18n';

i18n.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    resources: BaseSetting.resourcesLanguage,
    lng: BaseSetting.defaultLanguage,
    fallbackLng: BaseSetting.defaultLanguage,
  });

export default function App() {
  return (
      <NavigationContainer>
        <Navigations/>
        {/* <DrawerNavigator/> */}
        
      </NavigationContainer>
  );
}
