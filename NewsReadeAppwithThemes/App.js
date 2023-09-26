import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Provider as MobxProvider} from 'mobx-react-lite';
import {ThemeProvider} from './app/components/ThemeProvider';
import themeStore from './app/components/ThemeStore';
import NewsListScreen from './app/screens/NewsListScreen/NewsListScreen';
import SettingsScreen from './app/screens/SettingsScreen/SettingsScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    // <MobxProvider themeStore={themeStore}>
    //   <ThemeProvider>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="News" component={NewsListScreen} />
          </Tab.Navigator>
        </NavigationContainer>
    //   </ThemeProvider>
    // </MobxProvider>
  );
}
