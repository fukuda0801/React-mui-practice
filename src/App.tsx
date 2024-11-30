import { ThemeProvider } from '@mui/material';
import getTheme from './styles/theme';
import AppRoutes from './routes/AppRoutes';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './providers/AuthProvider';
import ThemesProvider from './providers/ThemeProvider';

const App = () => {
  return (
    <ThemeProvider theme={getTheme('light')}>
      <ThemesProvider>
        <AuthProvider>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </AuthProvider>
      </ThemesProvider>
    </ThemeProvider>
  );
};

export default App;
