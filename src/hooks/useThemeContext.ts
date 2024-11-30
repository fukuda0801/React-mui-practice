import { useContext } from 'react';
import ThemesContext from '../context/ThemeContext';

const useThemesContext = () => {
  return useContext(ThemesContext);
};

export default useThemesContext;
