import React from 'react'
import type { AppProps } from 'next/app'
import { LanguageContextProvider } from '@/contexts/i18n'
import { LayoutContextProvider } from '@/contexts/Layout'
import { SessionProvider } from 'next-auth/react'
import { QueryClientProvider, QueryClient } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { ThemeProvider, responsiveFontSizes } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { theme } from '@/theme/Theme'
import '@/styles/globals.css'

const queryClient = new QueryClient()

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <ThemeProvider theme={responsiveFontSizes(theme)}>
      <LayoutContextProvider>
        <LanguageContextProvider>
          <SessionProvider session={session}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <QueryClientProvider client={queryClient}>
                <Component {...pageProps} />
                <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
              </QueryClientProvider>
            </LocalizationProvider>
          </SessionProvider>
        </LanguageContextProvider>
      </LayoutContextProvider>
    </ThemeProvider>
  )
}
