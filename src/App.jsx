// import './App.css'
import { useState, useMemo } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Container from '@mui/material/Container'
import Switch from '@mui/material/Switch'
import { teal, purple, amber, deepOrange, grey } from '@mui/material/colors'

function App() {
  const [mode, setMode] = useState('light')

  // Default dark mode
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  )

  // Upgrade default dark mode
  // const theme = useMemo(
  //   () =>
  //     createTheme({
  //       palette: {
  //         mode,
  //         primary: {
  //           ...teal,
  //           ...(mode === 'dark' && {
  //             main: teal[300],
  //           }),
  //         },
  //         secondary: {
  //           main: '#f5f5f5',
  //         },
  //       },
  //     }),
  //   [mode]
  // )

  // const theme = useMemo(
  //   () =>
  //     createTheme({
  //       palette: {
  //         mode,
  //         primary: {
  //           ...amber,
  //           ...(mode === 'dark' && {
  //             main: amber[300],
  //           }),
  //         },
  //         ...(mode === 'dark' && {
  //           background: {
  //             default: deepOrange[900],
  //             paper: deepOrange[900],
  //           },
  //         }),
  //         text: {
  //           ...(mode === 'light'
  //             ? {
  //                 primary: grey[900],
  //                 secondary: grey[800],
  //               }
  //             : {
  //                 primary: '#fff',
  //                 secondary: grey[500],
  //               }),
  //         },
  //       },
  //     }),
  //   [mode]
  // )

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <h1>Hello</h1>
        <Switch onChange={() => setMode(mode === 'light' ? 'dark' : 'light')} />
      </Container>
    </ThemeProvider>
  )
}

export default App
