import { ThemeProvider } from '@mui/material';
import getTheme from './styles/theme';
import AppRoutes from './routes/AppRoutes';
import { BrowserRouter } from 'react-router-dom';
import ThemesProvider from './providers/ThemeProvider';
import CounterProvider from './providers/CounterProvider';

const App = () => {
  return (
    <ThemeProvider theme={getTheme('light')}>
      <CounterProvider>
        <ThemesProvider>
          {/* <AuthProvider> */}
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
          {/* </AuthProvider> */}
        </ThemesProvider>
      </CounterProvider>
    </ThemeProvider>
  );
};

export default App;
