import { createTheme } from '@mui/material'

export const COLORS = { primary: '#5295E0', dark: '#0F0F13' }

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 1024,
      xl: 1264,
    },
  },
  spacing: 4,
  palette: {
    mode: 'dark',
    background: {
      default: '#000',
    },
    text: {
      primary: '#fff',
    },
    primary: {
      main: COLORS.primary,
    },
    dark: {
      main: 'rgba(15, 15, 19, 0.6)',
    },
  },
  typography: {
    body1: {
      fontSize: 20,
    },
    body2: {
      fontSize: 18,
    },
  },
  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: 'xl',
      },
    },
    MuiButton: {
      defaultProps: {
        variant: 'contained',
        color: 'dark',
      },
      styleOverrides: {
        root: {
          fontSize: 14,
          lineHeight: 1.5,
          textTransform: 'none',
          padding: '12px 24px',
          color: '#fff',
          boxShadow: '0px 0px 15px rgba(82, 149, 224, 0.5)',
          borderRadius: '1000px',
        },
        startIcon: {},
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          boxShadow: '0px 0px 15px rgba(82, 149, 224, 0.5)',
          borderRadius: '1000px',
          backgroundColor: COLORS.dark,
          fontSize: 14,
          '&::before': {
            display: 'none',
          },
          '&::after': {
            display: 'none',
          },
        },
        input: {
          height: 44,
          padding: 0,
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: '10px 8px',
          // height: 80,
          fontSize: '1rem',
          borderBottom: 'none',
        },
        head: {
          color: COLORS.primary,
          textTransform: 'uppercase',
          fontWeight: 700,
          letterSpacing: '2px',
          fontSize: 13,
          lineHeight: 1.3,
          padding: '4px 8px',
        },
        body: {
          letterSpacing: '.44px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0px 0px 15px rgba(82, 149, 224, 0.5)',
          borderRadius: 10,
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: '16px 8px',
          '&:last-child': {
            paddingBottom: '16px',
          },
        },
      },
    },
    MuiPopover: {
      styleOverrides: {
        paper: {
          fontSize: 12,
          maxWidth: 330,
          padding: '12px 19px',
          borderRadius: 8,
        },
      },
    },
  },
})

declare module '@mui/material/styles' {
  interface Palette {
    dark: Palette['primary']
  }

  interface PaletteOptions {
    dark?: PaletteOptions['primary']
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    dark: true
  }
}
