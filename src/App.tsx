import { ThemeProvider } from '@mui/material';
import getTheme from './styles/theme';
import AppRoutes from './routes/AppRoutes';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './providers/AuthProvider';

const App = () => {
  return (
    <ThemeProvider theme={getTheme('light')}>
      <AuthProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
