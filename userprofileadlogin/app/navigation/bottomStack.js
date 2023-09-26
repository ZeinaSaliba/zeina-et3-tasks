import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ColorfulTabBar} from 'react-navigation-tabbar-collection';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Dimensions, Text, View} from 'react-native';
import Profile from '../screens/Profile/Profile';
import Login from '../screens/Login/Login';

const {width, height} = Dimensions.get('window');
const Tab = createBottomTabNavigator();

export default function BottomStack() {
  return (
 
      <Tab.Navigator
        style={{backgroundColor: 'transparent'}}
        screenOptions={{
          headerShown: false,
        }}
        tabBar={props => (
          <ColorfulTabBar
            {...props}
            maxWidth={wp('86%')}
            height={hp('9%')}
            colorPalette={{
              dark: '#7401B8',
            }}
            floatingPosition={'left'}
          />
        )}>
        <Tab.Screen
          name="Logins"
          component={Login}
          options={{
            tabBarLabel: null,
            color: '#7401B8',
            colorPalette: {backgroundColor: '#000000'},
            icon: () => (
              <View>
                <Text>Login</Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabelStyle: {width: wp('70%')},
            tabBarLabel: null,
            color: '#7401B8',
            colorPalette: {backgroundColor: '#000000'},
            icon: () => (
              <View>
                <Text>Profile</Text>
              </View>
            ),
          }}
        />
      </Tab.Navigator>

  );
}
