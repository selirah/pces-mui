import { createTheme } from '@mui/material'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#243B80',
      light: '#374E8D',
      dark: '#1E326E',
      contrastText: '#FFFFFF'
    },
    secondary: {
      main: '#806924',
      light: '#8C773D',
      dark: '#6E5A1E',
      contrastText: '#FFFFFF'
    },
    success: {
      main: '#2E7D32',
      light: '#4CAF50',
      dark: '#1B5E20',
      contrastText: '#FFFFFF'
    },
    info: {
      main: '#0288D1',
      light: '#03A9F4',
      dark: '#01579B',
      contrastText: '#FFFFFF'
    },
    warning: {
      main: '#ED6C02',
      light: '#FF9800',
      dark: '#E65100',
      contrastText: '#FFFFFF'
    },
    error: {
      main: '#D32F2F',
      light: '#EF5350',
      dark: '#C62828',
      contrastText: '#FFFFFF'
    },
    background: {
      default: '#FAFAFA',
      paper: '#FFFFFF'
    }
  }
})
