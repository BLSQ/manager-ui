import { createMuiTheme } from '@material-ui/core'

export default createMuiTheme({
  typography: {
    useNextVariants: true,
    fontFamily: ['Roboto', '"Helvetica Neue"', 'sans-serif'].join(','),
    fontSize: 14,
    h6: {
      fontWeight: 400
    }
  },
  palette: {
    primary: { main: '#2372BA' },
    secondary: { main: '#EA622A' }
  }
})
