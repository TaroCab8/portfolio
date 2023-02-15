import {createTheme} from '@mui/material/styles'

const singularTheme = createTheme({
    palette: {
        type: 'light',
        primary: {
          main: '#012E40',
        },
        secondary: {
          main: '#22B7F2',
        },
        background: {
          default: '#0D0D0D',
          paper: '#ffffff',
        },
        text: {
          primary: '#22B7F2',
          secondary: '#035951',
          disabled: 'rgba(255,255,255,0.38)',
        },
      },
      typography: {
        fontFamily: ['Orbitron', "sans-serif"].join(","),
      },
      shape: {
        borderRadius: 4,
      },
      spacing: 8,
})

export default singularTheme