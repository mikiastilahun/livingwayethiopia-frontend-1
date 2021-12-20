import type { AppProps } from 'next/app'
import React from 'react'
import { NavBarProvider } from '../contexts/navbar/index'
import { DrawerProvider } from '../contexts/drawer'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { theme } from '../styles/theme'
import '../styles/global.css'

const GlobalStyle = createGlobalStyle`
`

export default function MyApp({ Component, pageProps }: AppProps) {

  return <>
    <GlobalStyle />

    <ThemeProvider theme={theme}>
      <NavBarProvider>
        <Component {...pageProps} />
      </NavBarProvider>

    </ThemeProvider>
  </>
}
