import { useMemo } from 'react'
import { createTheme } from '@mui/material/styles'
import { teal, purple, amber, deepOrange, grey } from '@mui/material/colors'
import darkBG from '../assets/5053309-dark.jpg'
import lightBG from '../assets/5053309-light.jpg'

import CssBaseline from '@mui/material/CssBaseline'

export default function Themes(modeTheme) {
  const mode = modeTheme

  const violetTheme = createTheme({
    palette: {
      // mode: 'light',
      primary: {
        main: '#8471c9',
      },
      secondary: {
        main: '#f50057',
      },
    },
  })

  const purpleTheme = createTheme({
    palette: {
      // mode: 'light',
      mode,
      primary: {
        ...purple,
        ...(mode === 'light' && {
          main: purple[900],
        }),
        ...(mode === 'dark' && {
          main: purple[300],
        }),
      },
      secondary: {
        main: '#f50057',
      },
    },
  })

  // Default dark mode
  const defaultTheme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  )

  // Upgrade default dark mode
  const StPatrickTheme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            ...teal,
            ...(mode === 'dark' && {
              main: teal[300],
            }),
          },
          secondary: {
            main: '#f5f5f5',
          },
        },
      }),
    [mode]
  )

  const halloweenTheme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            ...amber,
            ...(mode === 'dark' && {
              main: amber[100],
            }),
          },
          ...(mode === 'dark' && {
            background: {
              default: deepOrange[900],
              paper: deepOrange[900],
            },
          }),
          text: {
            ...(mode === 'light'
              ? {
                  primary: grey[900],
                  secondary: grey[800],
                }
              : {
                  primary: '#fff',
                  secondary: grey[500],
                }),
          },
        },
      }),
    [mode]
  )
  return {
    theme: halloweenTheme,
  }
}
