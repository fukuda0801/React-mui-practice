import { Button } from '@mui/material';
import useThemesContext from '../../../hooks/useThemeContext';

const ThemeToggleButton: React.FC = () => {
  const { theme, toggleTheme } = useThemesContext();

  return (
    <Button variant="contained" onClick={toggleTheme}>
      {theme === 'light' ? 'ダークテーマへ' : 'ライトテーマへ'}
    </Button>
  );
};

export default ThemeToggleButton;
