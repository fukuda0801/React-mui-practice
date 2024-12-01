import { createContext } from 'react';

interface ThemesContextProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const ThemesContext = createContext<ThemesContextProps>({
  theme: 'light',
  toggleTheme: () => {},
});

export default ThemesContext;
