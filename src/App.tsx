import { ThemeProvider } from '@mui/material';
import getTheme from './styles/theme';
import AppRoutes from './routes/AppRoutes';
import { BrowserRouter } from 'react-router-dom';
import ThemesProvider from './providers/ThemeProvider';
import CounterProvider from './providers/CounterProvider';
import ModalProvider from './providers/ModalProvider';
import TodoProvider from './providers/TodoProvider';

const App = () => {
  return (
    <ThemeProvider theme={getTheme('light')}>
      <CounterProvider>
        <TodoProvider>
          <ModalProvider>
            <ThemesProvider>
              {/* <AuthProvider> */}
              <BrowserRouter>
                <AppRoutes />
              </BrowserRouter>
              {/* </AuthProvider> */}
            </ThemesProvider>
          </ModalProvider>
        </TodoProvider>
      </CounterProvider>
    </ThemeProvider>
  );
};

export default App;
