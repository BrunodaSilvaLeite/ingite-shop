import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '@/src/styles/pages/product'

import { GetStaticPaths, GetStaticProps } from 'next'
import Stripe from 'stripe'
import { stripe } from '../../lib/stripe'
import Image from 'next/image'
import { useState } from 'react'
import axios from 'axios'
import Head from 'next/head'

interface ProductProps {
  product: {
    id: string
    name: string
    imageUrl: string
    price: string
    description: string
    defaultPriceId: string
  }
}
export default function Product({ product }: ProductProps) {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false)

  async function handleBuyButton() {
    try {
      setIsCreatingCheckoutSession(true)

      const response = await axios.post('/api/checkout', {
        priceId: product.defaultPriceId,
      })

      // Verificar se checkoutUrl está presente na resposta
      const checkoutUrl = response.data.chekoutUrl
      if (checkoutUrl) {
        // Redirecionar para a URL de checkout
        window.location.assign(checkoutUrl)
      } else {
        throw new Error('URL de checkout não encontrada')
      }
    } catch (err) {
      setIsCreatingCheckoutSession(false)
      console.error(err)
      alert('Falha ao redirecionar ao checkout!')
    }
  }

  return (
    <>
      <Head>
        <title>{product.name}|Ignite Shop</title>
      </Head>
      <ProductContainer>
        <ImageContainer>
          <Image
            placeholder="empty"
            src={product.imageUrl}
            width={520}
            height={480}
            alt=""
          ></Image>
        </ImageContainer>

        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.price}</span>

          <p>{product.description}</p>

          <button
            disabled={isCreatingCheckoutSession}
            onClick={handleBuyButton}
          >
            Comprar agora
          </button>
        </ProductDetails>
      </ProductContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {
        params: { id: 'prod_QFdI9OLGXw2Dai' },
      },
    ],
    fallback: true,
  }
}
export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}: any) => {
  const productId = params.id

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  })

  const price = product.default_price as Stripe.Price
  const formattedPrice =
    price.unit_amount !== null
      ? new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(price.unit_amount / 100)
      : 'N/A'

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: formattedPrice,
        description: product.description,
        defaultPriceId: price?.id,
      },
    },
    revalidate: 60 * 60 * 1, // 1 hours
  }
}
