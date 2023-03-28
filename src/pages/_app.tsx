import React from 'react'
import type { AppProps } from 'next/app'
import { LanguageContextProvider } from '@/contexts/i18n'
import { LayoutContextProvider } from '@/contexts/Layout'
import { SessionProvider } from 'next-auth/react'
import { QueryClientProvider, QueryClient } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import '@/styles/globals.css'

const queryClient = new QueryClient()

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <LayoutContextProvider>
      <LanguageContextProvider>
        <SessionProvider session={session}>
          <QueryClientProvider client={queryClient}>
            <Component {...pageProps} />
            <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
          </QueryClientProvider>
        </SessionProvider>
      </LanguageContextProvider>
    </LayoutContextProvider>
  )
}
