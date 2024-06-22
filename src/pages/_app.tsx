import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'
import logoImg from '../assets/logo.svg'
import iconCart from '../assets/IconCart.png'

import { Container, Header } from '../styles/pages/app'
import Image from 'next/image'
import { createContext, useState } from 'react'
import Sidebar from '../components/sidebar'

globalStyles()

export interface Product {
  id: string
  name: string
  imageUrl: string
  price: string
}

interface CartContextProps {
  cartItems: Product[]
  addItem: (item: Product) => void
}

export const CartContext = createContext({} as CartContextProps)

export default function App({ Component, pageProps }: AppProps) {
  const [isSidebarVisible, setSidebarVisible] = useState(false)

  const toggleSidebar = (sidebarState: boolean) => {
    setSidebarVisible(sidebarState)
  }

  const [cartItems, setCartItems] = useState<Product[]>([])

  function addItem(product: Product) {
    setCartItems((prevItems) => [...prevItems, product])
  }

  return (
    <CartContext.Provider value={{ cartItems, addItem }}>
      <Container>
        <Header>
          <Image src={logoImg} alt="" />
          <button onClick={() => toggleSidebar(true)}>
            <Image src={iconCart} alt="" width={24} height={24} />
            <span>1</span>
          </button>
        </Header>
        <Sidebar {...{ isSidebarVisible, toggleSidebar }} />
        <Component {...pageProps} />
      </Container>
    </CartContext.Provider>
  )
}
