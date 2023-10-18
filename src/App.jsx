// import './App.css'
import { useState } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Container from '@mui/material/Container'
import Switch from '@mui/material/Switch'
import Button from '@mui/material/Button'

import Themes from './themes/Themes'

function App() {
  const [mode, setMode] = useState('light')
  const { theme } = Themes(mode)

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <h1>Hello</h1>
        <Button variant="contained">Contained</Button>
        <Switch onChange={() => setMode(mode === 'light' ? 'dark' : 'light')} />
      </Container>
    </ThemeProvider>
  )
}

export default App
