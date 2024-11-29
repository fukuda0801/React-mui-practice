import { createTheme } from '@mui/material';

const getTheme = (mode: 'light' | 'dark') =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: '#fad1d8',
        contrastText: '#fff',
      },
      secondary: {
        main: '#f2c4d6',
        contrastText: '#fff',
      },
      info: {
        main: '#f8ebe2',
        contrastText: '#fff',
      },
      success: {
        main: '#d9bde5',
        contrastText: '#fff',
      },
      text: {
        primary: mode === 'light' ? '#666' : '#fff',
      },
      background: {
        default: mode === 'light' ? '#fff' : '#121212',
        paper: mode === 'light' ? '#fff' : '#1d1d1d',
      },
    },
    typography: {
      fontFamily: 'Roboto, sans-serif',
      h1: {
        fontWeight: 700,
        fontSize: '2.2rem',
        lineHeight: 1.2,
      },
    },
    components: {
      MuiTypography: {
        defaultProps: {
          color: 'text.primary',
        },
      },
    },
  });

export default getTheme;
