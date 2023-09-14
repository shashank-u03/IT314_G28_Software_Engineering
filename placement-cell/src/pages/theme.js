import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2B2442',
      light: '#D1D2F4',
      contrastText: '#E6E7F9',
    },
    secondary: {
      main: '#3B446D',
      light: '#B0C3E0',
      contrastText: '#E4EAF5' 
    },
  },
});

export default theme;
