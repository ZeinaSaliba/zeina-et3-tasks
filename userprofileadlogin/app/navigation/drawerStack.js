import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Login from '../screens/Login/Login';
import Profile from '../screens/Profile/Profile';
import CustomDrawerContent from '../components/Drawer/Drawer';
import {t} from 'i18next';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name={t('login')} component={Login} />
      <Drawer.Screen name={t('profile')} component={Profile} />
    </Drawer.Navigator>
  );
}
