import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'

import { Container } from '../styles/pages/app'

import { useState } from 'react'
import Sidebar from '../components/sidebar'
import { CartProvider } from '../context/cartContext' // Importando o CartProvider
import { Header } from '../components/Header'

globalStyles()


export default function App({ Component, pageProps }: AppProps) {
  const [isSidebarVisible, setSidebarVisible] = useState(false)

  const toggleSidebar = (sidebarState: boolean) => {
    setSidebarVisible(sidebarState)
  }

  return (
    <CartProvider>

      <Container>
        <Header  {...{ toggleSidebar }} />
        <Sidebar {...{ isSidebarVisible, toggleSidebar }} />
        <Component {...pageProps} />
      </Container>

    </CartProvider>
  )
}
