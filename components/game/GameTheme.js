import {createTheme} from '@mui/material/styles'
import blue from '@mui/material/colors/blue'

const gameTheme = createTheme({
    palette: {
        type: 'light',
        primary: blue,
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
        fontFamily: ['VT323','Roboto'].join(','),
        fontSize: 32,
      },
})

export default gameTheme