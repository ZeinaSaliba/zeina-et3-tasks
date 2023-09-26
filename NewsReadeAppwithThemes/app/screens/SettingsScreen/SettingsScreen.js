// SettingsScreen.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import themeStore from '../../components/ThemeStore';

const SettingsScreen = () => {
  const theme = themeStore();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: theme.currentTheme === 'light' ? 'white' : 'black' }}>
      <Text style={{ color: theme.currentTheme === 'light' ? 'black' : 'white' }}>Settings</Text>
      <TouchableOpacity onPress={theme.toggleTheme}>
        <Text style={{ color: theme.currentTheme === 'light' ? 'black' : 'white' }}>
          Toggle Theme
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SettingsScreen;
