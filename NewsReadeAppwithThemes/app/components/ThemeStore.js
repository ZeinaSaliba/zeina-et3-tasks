// ThemeStore.js
import { makeAutoObservable } from 'mobx';
import AsyncStorage from '@react-native-async-storage/async-storage';

class ThemeStore {
  currentTheme = 'light'; // Default theme

  constructor() {
    makeAutoObservable(this);
    this.loadTheme(); // Load the theme from AsyncStorage on startup
  }

  toggleTheme() {
    this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.saveTheme(); // Save the theme to AsyncStorage
  }

  async saveTheme() {
    try {
      await AsyncStorage.setItem('theme', this.currentTheme);
    } catch (error) {
      console.error('Error saving theme:', error);
    }
  }

  async loadTheme() {
    try {
      const theme = await AsyncStorage.getItem('theme');
      if (theme) {
        this.currentTheme = theme;
      }
    } catch (error) {
      console.error('Error loading theme:', error);
    }
  }
}

const themeStore = new ThemeStore();

// ThemeStore.js
// ...
export default new ThemeStore();
