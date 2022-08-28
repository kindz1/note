import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    sidebar: {
      main: '#2d2d2d',
    },
    font: {
      main: 'black',
      light: '#d0d0d0',
    },
  },
})

export default theme
