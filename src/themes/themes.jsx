import { useMemo, useState } from 'react'
import { createTheme } from '@mui/material/styles'
import { teal, purple, amber, deepOrange, grey } from '@mui/material/colors'

export default function Themes() {
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
  // const StPatrickTheme = useMemo(
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

  // const halloweenTheme = useMemo(
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
  return {
    theme: defaultTheme,
    mode,
  }
}
