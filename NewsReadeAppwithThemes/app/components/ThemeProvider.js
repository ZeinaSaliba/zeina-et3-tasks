// ThemeProvider.js
import React, { createContext, useContext } from 'react';
import themeStore from './ThemeStore';

const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  return (
    <ThemeContext.Provider value={themeStore}>
      {children}
    </ThemeContext.Provider>
  );
};
