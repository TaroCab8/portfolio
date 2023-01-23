import {createTheme} from '@mui/material/styles'

const gameTheme = createTheme({
    palette: {
        type: 'light',
        primary: {
          main: 'rgba(224, 255, 255, 1)',
        },
        secondary: {
          main: 'rgba(255, 119, 255, 1)',
        },
        text: {
          primary: 'rgba(57, 255, 20, 1)',
          secondary: 'rgba(255,255,255,0.54)',
        },
        background: {
          default: '#000000',
        },
      },
      typography: {
        fontFamily: 'VT323',
        fontSize: 32,
        color: 'rgba(57, 255, 20, 1)'
      },
})

export default gameTheme