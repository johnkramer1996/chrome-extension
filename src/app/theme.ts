import { createTheme } from '@mui/material'

export const COLORS = {
  primary: '#5295E0',
  dark: '#0F0F13',
  grey: {
    '50': '#F0F0F0',
    '100': '#E4E4E4',
    '200': '#D9D9D9',
    '300': '#B5B5B5',
    '400': '#B5B5B5',
    '500': '#7C7C78',
    '600': '#5C5C5A',
    '700': '#2E2E2E',
    '900': '#141414',
  },
}

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
      default: '#05050F',
    },
    text: {
      primary: '#fff',
    },
    primary: {
      main: COLORS.primary,
      dark: '#255FA0',
    },
    dark: {
      main: 'rgba(15, 15, 19, 0.6)',
    },
    grey: COLORS.grey,
    green: {
      main: '#80C67A',
    },
  },
  typography: {
    fontFamily: ['Roboto', 'sans-serif'].join(','),
    htmlFontSize: 16,
    h1: {
      fontFamily: 'Plain',
      fontSize: 56,
      fontWeight: 700,
      letterSpacing: '-1px',
    },
    h2: {
      fontSize: 26,
      fontWeight: 500,
      letterSpacing: '-.5px',
    },
    h3: {
      fontSize: 16,
    },
    body1: {
      fontSize: 16,
    },
    body2: {
      fontSize: 14,
    },
    button: {
      fontSize: 12,
      lineHeight: 1.5,
      letterSpacing: 0,
      fontWeight: 700,
    },
    info: {
      color: COLORS.grey['500'],
      fontSize: 12,
      fontWeight: 300,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          minHeight: '100vh',
          margin: '0 auto',
          minWidth: 700,
          // overflow: 'hidden',
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: 'xl',
      },
    },
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          body1: 'p',
          body2: 'p',
          info: 'div',
        },
      },
    },
    MuiLink: {
      defaultProps: {
        underline: 'none',
      },
    },
    MuiButton: {
      defaultProps: {
        variant: 'contained',
        color: 'primary',
      },
      styleOverrides: {
        root: ({ ownerState }) => ({
          display: 'inline-flex',
          padding: '5px 24px',
          fontSize: 12,
          height: ownerState.size === 'medium' ? 40 : ownerState.size === 'large' ? 60 : 30,
          borderRadius: '1000px',
        }),
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
        fullWidth: true,
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          position: 'relative',
          transform: 'none',
          textTransform: 'uppercase',
          fontSize: 12,
          color: '#fff',
          textAlign: 'left',
          marginBottom: 1,
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          padding: '0 12px',
          height: '50px',
        },
      },
    },
    MuiOutlinedInput: {
      defaultProps: {},
      styleOverrides: {
        root: {
          borderRadius: '8px',
        },
        notchedOutline: {
          top: '0',
          borderColor: '#fff',
          '& legend': {
            display: 'none',
          },
        },
        input: {
          padding: '0',
          '&::placeholder': {
            color: '#fff!important',
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          marginLeft: 0,
          textAlign: 'right',
        },
      },
    },
    // TODO: REMOVE
    // MuiInput: {
    //   styleOverrides: {
    //     root: {
    //       boxShadow: '0px 0px 15px rgba(82, 149, 224, 0.5)',
    //       borderRadius: '1000px',
    //       backgroundColor: COLORS.dark,
    //       fontSize: 14,
    //       '&::before': {
    //         display: 'none',
    //       },
    //       '&::after': {
    //         display: 'none',
    //       },
    //     },
    //     input: {
    //       height: 44,
    //       padding: 0,
    //     },
    //   },
    // },
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: '10px 8px',
          borderBottom: 'none',
        },
        head: {
          fontFamily: 'Plain',
          color: COLORS.primary,
          textTransform: 'uppercase',
          fontWeight: 700,
          letterSpacing: '2px',
          fontSize: 13,
          lineHeight: 1.3,
          padding: '4px 8px',
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
          textAlign: 'center',
          filter: 'drop-shadow(0px 6px 32px rgba(0, 0, 0, 0.15))',
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontSize: 12,
          maxWidth: 330,
          padding: '12px 19px',
          borderRadius: 8,
          textAlign: 'center',
          filter: 'drop-shadow(0px 6px 32px rgba(0, 0, 0, 0.15))',
        },
        arrow: {},
      },
    },
  },
})

declare module '@mui/material/styles' {
  interface TypographyVariants {
    info: React.CSSProperties
  }

  interface TypographyVariantsOptions {
    info?: React.CSSProperties
  }

  interface Palette {
    dark: Palette['primary']
    green: Palette['primary']
  }

  interface PaletteOptions {
    dark?: PaletteOptions['primary']
    green?: PaletteOptions['primary']
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    info: true
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    dark: true
    green: true
  }
}
