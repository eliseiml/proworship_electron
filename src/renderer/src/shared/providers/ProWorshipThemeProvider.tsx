import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { baseTheme } from '../themes'

interface ProWorshipThemeProviderProps {
  children: React.ReactNode
}

export const ProWorshipThemeProvider = ({
  children
}: ProWorshipThemeProviderProps): JSX.Element => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={baseTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  )
}
