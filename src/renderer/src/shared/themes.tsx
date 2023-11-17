import { Theme } from '@emotion/react'
import { createTheme } from '@mui/material'
import { amber, blueGrey } from '@mui/material/colors'

export const baseTheme: Theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: amber[700]
    },
    background: {
      default: blueGrey[900]
    }
  }
})
