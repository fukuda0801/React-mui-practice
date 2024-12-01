import { ReactNode, useState } from 'react';
import ThemesContext from '../context/ThemeContext';

interface ThemesProviderProps {
  children: ReactNode;
}

const ThemesProvider: React.FC<ThemesProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  // テーマを切り替える関数
  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemesContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemesContext.Provider>
  );
};

export default ThemesProvider;
