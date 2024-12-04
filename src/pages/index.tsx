import {
  ArrowContainer,
  HomeContainer,
  Product,
  ProductContainer,
} from '../styles/pages/home'
import Image from 'next/image'
import iconCart from '../assets/IconCart.png'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { stripe } from '../lib/stripe'
import { GetStaticProps } from 'next'
import Stripe from 'stripe'
import Link from 'next/link'
import Head from 'next/head'
import { useContext, useState } from 'react'
import Arrow from '../components/arrow'
import { CartContext } from '../context/cartContext'
import { ProductInterface } from '@/src/interfaces/Product'

export interface ProductsProps {
  products: ProductInterface[];
}


export default function Home({ products }: ProductsProps) {
  const { addItem } = useContext(CartContext)

  const [currentSlide, setCurrentSlide] = useState(0)

  const [loaded, setLoaded] = useState(false)
  const position = currentSlide === 0 ? 'auto' : 'center'

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slides: {
      origin: position,
      perView: 2,
      spacing: 48,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })

  function addItemInCart(product: ProductInterface) {
    addItem(product)
  }

  return (
    <>
      <Head>
        <title>Ignite Shop</title>
      </Head>
      <HomeContainer
        ref={sliderRef}
        className="keen-slider"
        slidePositionLeft={currentSlide === 0 ? 'notAtStart' : 'atStart'}
        slidePositionRight={
          currentSlide === products.length - 1 ? 'atStart' : 'notAtStart'
        }
      >
        {products.map((product) => {
          return (
            <ProductContainer key={product.id} className="keen-slider__slide">
              <Link href={`/product/${product.id}`} prefetch={false}>
                <Product>
                  <Image
                    placeholder="empty"
                    src={product.imageUrl}
                    width={520}
                    height={480}
                    alt=""
                  />
                </Product>
              </Link>
              <footer>
                <div>
                  <strong>{product.name}</strong>
                  <span>{product.price}</span>
                </div>
                <button onClick={() => addItemInCart(product)}>
                  <Image src={iconCart} alt="" width={24} height={24} />
                </button>
              </footer>
            </ProductContainer>
          )
        })}
        {loaded && instanceRef.current && (
          <ArrowContainer>
            {currentSlide !== 0 ? (
              <Arrow
                left
                onClick={(e: any) =>
                  e.stopPropagation() || instanceRef.current?.prev()
                }
              />
            ) : (
              <div></div>
            )}

            {currentSlide === products.length - 1 ? (
              <div></div>
            ) : (
              <Arrow
                onClick={(e: any) =>
                  e.stopPropagation() || instanceRef.current?.next()
                }
              />
            )}
          </ArrowContainer>
        )}
      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price

    const formattedPrice =
      price.unit_amount !== null
        ? new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(price.unit_amount / 100)
        : 'N/A'

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: formattedPrice,
      description: product.description,
      defaultPriceId: price?.id,
    }
  })

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2,
  }
}
