import {
  ProductCart,
  ContinaerSidebar,
  ImageContainerCart,
  FooterSidebar,
  ProductCartContainer,
  CloseButton,
} from '../styles/sidebar'
import close from '../assets/close.png'
import Image from 'next/image'
import { useContext, useState } from 'react'
import { CartContext } from '../context/cartContext'
import axios from 'axios'

interface SidebarProps {
  isSidebarVisible: boolean
  toggleSidebar: (value: boolean) => void
}
export default function Sidebar({
  isSidebarVisible,
  toggleSidebar,
}: SidebarProps) {

  const { addItem, cart, removeItem } = useContext(CartContext)
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)

  async function handleBuyButton() {
    try {
      setIsCreatingCheckoutSession(true);

      // Agrupar produtos dentro do bloco try
      const groupedProduct = cart.items.reduce((acc, product) => {
        const existing = acc.find(item => item.price === product.id);
        if (existing) {
          existing.quantity += 1; // Incrementar a quantidade
        } else {
          acc.push({ price: product.defaultPriceId, quantity: 1 }); // Adicionar o item pela primeira vez
        }
        return acc;
      }, [] as { price: string; quantity: number }[]);

      const response = await axios.post('/api/checkout', {
        products: groupedProduct
      },
      );

      const checkoutUrl = response.data.checkoutUrl; // Corrigir para o nome correto da chave
      if (checkoutUrl) {
        window.location.assign(checkoutUrl);
      } else {
        throw new Error('URL de checkout não encontrada');
      }
    } catch (err) {
      setIsCreatingCheckoutSession(false);
      console.error(err);
      alert('Falha ao redirecionar ao checkout!');
    }
  }

  return (
    <>
      <ContinaerSidebar isVisible={isSidebarVisible}>
        <CloseButton onClick={() => toggleSidebar(false)}>
          <Image src={close} alt="Fechar" width={24} height={24} />
        </CloseButton>
        <h2>Sacola de compras</h2>
        <ProductCartContainer>

          {cart.items?.map((item) => {
            return (
              <ProductCart>
                <ImageContainerCart><img src={item.imageUrl} alt="" /></ImageContainerCart>
                <div>

                  <h3>{item.name}</h3>
                  <span>R$ {item.price}</span>
                  <button onClick={() => removeItem(item.id)}><p>Remover</p></button>
                </div>
              </ProductCart>
            )
          })
          }

        </ProductCartContainer>
        <FooterSidebar>
          <div>
            <span>Quantidade</span>
            <span>{cart.items.length}</span>
          </div>
          <div>
            <span>Valor total</span>
            <h3>R$ {cart.total}</h3>
          </div>
          <button onClick={() => handleBuyButton()}>Finalizar Compra</button>
        </FooterSidebar>
      </ContinaerSidebar>
    </>
  )
}
