import {
  ProductCart,
  ContinaerSidebar,
  ImageContainerCart,
  FooterSidebar,
  ProductCartContainer,
} from '../styles/sidebar'
import close from '../assets/close.png'
import Image from 'next/image'

interface SidebarProps {
  isSidebarVisible: boolean
  toggleSidebar: (value: boolean) => void
}
export default function Sidebar({
  isSidebarVisible,
  toggleSidebar,
}: SidebarProps) {
  return (
    <>
      <ContinaerSidebar isVisible={isSidebarVisible}>
        <Image src={close} alt="" onClick={() => toggleSidebar(false)} />
        <h2>Sacola de compras</h2>
        <ProductCartContainer>
          <ProductCart>
            <ImageContainerCart></ImageContainerCart>
            <div>
              <h3>Camiseta Beyond the Limits</h3>
              <span>R$ 75,00</span>
              <p>Remover</p>
            </div>
          </ProductCart>

          <ProductCart>
            <ImageContainerCart></ImageContainerCart>
            <div>
              <h3>Camiseta Beyond the Limits</h3>
              <span>R$ 75,00</span>
              <p>Remover</p>
            </div>
          </ProductCart>

          <ProductCart>
            <ImageContainerCart></ImageContainerCart>
            <div>
              <h3>Camiseta Beyond the Limits</h3>
              <span>R$ 75,00</span>
              <p>Remover</p>
            </div>
          </ProductCart>
        </ProductCartContainer>
        <FooterSidebar>
          <div>
            <span>Quantidade</span>
            <span>3 itens</span>
          </div>
          <div>
            <span>Valor total</span>
            <h3>R$ 280,00</h3>
          </div>
          <button>Finalizar Compra</button>
        </FooterSidebar>
      </ContinaerSidebar>
    </>
  )
}
