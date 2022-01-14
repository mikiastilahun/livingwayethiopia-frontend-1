import type { AppProps } from 'next/app'
import React from 'react'
import { NavBarProvider } from '../contexts/navbar/index'
import { DrawerProvider } from '../contexts/drawer'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { theme } from '../styles/theme'
import '../styles/global.css'
import { GeneralDataProvider } from '../contexts/data'

const GlobalStyle = createGlobalStyle`
`

export default function MyApp({ Component, pageProps }: AppProps) {

  return <>
    <GlobalStyle />

    <ThemeProvider theme={theme}>
      <GeneralDataProvider>
        <NavBarProvider>
          <Component {...pageProps} />
        </NavBarProvider>
      </GeneralDataProvider>
    </ThemeProvider>
  </>
}
