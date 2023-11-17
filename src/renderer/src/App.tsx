import Versions from './components/Versions'
import { Button, Stack } from '@mui/material'

function App(): JSX.Element {
  return (
    <Stack alignItems="start" padding="15px" spacing="15px">
      <Versions />
      <Button variant="outlined">Hello Electron</Button>
      <Button variant="contained" color="success">
        Hello 2
      </Button>
      <Button variant="text" color="error">
        Hello 3
      </Button>
    </Stack>
  )
}

export default App
