import type { AppProps } from 'next/app'
import React from 'react'
import { NavBarProvider } from '../contexts/navbar/index'
import { DrawerProvider } from '../contexts/drawer'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { theme } from '../styles/theme'

const GlobalStyle = createGlobalStyle`
  html,
  body {
    scroll-behavior: smooth;
    padding: 0;
    margin: 0;
    font-family: DM Sans ;
    font-style: normal;
    font-weight: normal;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
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
