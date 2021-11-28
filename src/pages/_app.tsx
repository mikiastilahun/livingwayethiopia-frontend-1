import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React from 'react'
import { NavBarProvider } from '../contexts/navbar/index'
import { DrawerProvider } from '../contexts/drawer'

function MyApp({ Component, pageProps }: AppProps) {

  return <NavBarProvider>
    <Component {...pageProps} />
  </NavBarProvider>
}
export default MyApp
