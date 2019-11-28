import { createMuiTheme } from '@material-ui/core/styles'

export const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#008c3a',
      main: '#00c853',
      dark: '#33d375',
      contrastText: '#000',
    },
    secondary: {
      light: '#33a361',
      main: '#008c3a',
      dark: '#006228',
      contrastText: '#fff',
    },
    type: 'dark',
  },
});
