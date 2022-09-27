import { createTheme } from '@mui/material/styles';

export const darkTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    background: {
      default: '#f8f8f8',
    },
  },
  typography: {
    subtitle2: {
      fontWeight: 600,
    },
  },
});
