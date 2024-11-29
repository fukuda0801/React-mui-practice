import { createTheme } from '@mui/material';

declare module '@mui/material/styles' {
  interface Palette {
    tertiary: Palette['primary'];
    quaternary: Palette['primary'];
  }
  interface PaletteOptions {
    tertiary: PaletteOptions['primary'];
    quaternary: PaletteOptions['primary'];
  }
}

const getTheme = (mode: 'light' | 'dark') =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: '#f0c1d4',
        contrastText: '#fff',
      },
      secondary: {
        main: '#f8ced5',
        contrastText: '#fff',
      },
      tertiary: {
        main: '#f8ebe2',
        contrastText: '#fff',
      },
      quaternary: {
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
