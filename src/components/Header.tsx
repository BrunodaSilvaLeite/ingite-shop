import { ContainerHeader } from '../styles/pages/header'
import Image from 'next/image'
import logoImg from '../assets/logo.svg'
import iconCart from '../assets/IconCart.png'
import { useContext } from 'react'
import { CartContext } from '../context/cartContext'

interface SidebarProps {
    toggleSidebar: (value: boolean) => void
}


export function Header({
    toggleSidebar,
}: SidebarProps) {
    const { cart } = useContext(CartContext)
    return (
        <ContainerHeader>
            <Image src={logoImg} alt="" />
            <button onClick={() => toggleSidebar(true)}>
                <Image src={iconCart} alt="" width={24} height={24} />
                <span>{cart.items.length}</span>
            </button>
        </ContainerHeader>
    )
}