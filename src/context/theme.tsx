import React, { useContext, createContext } from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';

import usePersistedState from '../utils/usePersistedState';

import light from '../styles/themes/light';
import dark from '../styles/themes/dark';

interface Theme {
  toggleTheme(): void;
}

const ThemeContext = createContext<Theme>({} as Theme);

// eslint-disable-next-line react/prop-types
export const AppThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export function useTheme(): Theme {
  const context = useContext(ThemeContext);

  return context;
}
