import { createTheme } from '@mui/material'

export const light = createTheme({
  shape: {
    borderRadius: 4,
  },
  typography: {
    htmlFontSize: 18
  },
  palette: {
    mode: 'light',
    primary: {
      light: '#0142C2',
      dark: '#0142C2',
      main: '#0142C2',
      contrastText: '#ffffff',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
        sizeLarge: {
          height: 52,
          fontSize: 16,
          fontWeight: 500,
          display: 'inline-flex',
          alignItems: 'center',
          paddingTop: 10,
          lineHeight: 1,
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontWeight: 'bolder'
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderWidth: 1,
          ':hover': {
          }
        }
      }
    }
  },
})
