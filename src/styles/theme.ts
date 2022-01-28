import { createTheme } from '@mui/material/styles'

//export type ThemeType = typeof theme

const theme = createTheme({
  palette: {
    success: {
      // light: will be calculated from palette.primary.main,
      main: '#106f2b',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    }
  }
})

export default theme