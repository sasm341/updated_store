/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react'
import { Themed, jsx } from 'theme-ui'
import { Card, Text } from '@theme-ui/components'
import { Link, ImageCarousel,LoadingDots } from '@components/ui'
import { getPrice } from '@lib/shopify/storefront-data-hooks/src/utils/product'
import { useMemo, useState } from 'react'
import { Grid} from '@theme-ui/components'
import Button from './Button'
import { useAddItemToCart, useCartCount } from '@lib/shopify/storefront-data-hooks'
import { useUI } from '@components/ui/context'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.css'
import {
  prepareVariantsWithOptions,
  prepareVariantsImages
} from '@lib/shopify/storefront-data-hooks/src/utils/product'

export interface ProductCardProps {
  className?: string
  product: ShopifyBuy.Product
  imgWidth: number | string
  imgHeight: number | string
  imgLayout?: 'fixed' | 'intrinsic' | 'responsive' | undefined
  imgPriority?: boolean
  imgLoading?: 'eager' | 'lazy'
  imgSizes?: string
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  imgWidth,
  imgHeight,
  imgPriority,
  imgLoading,
  imgSizes,
  imgLayout = 'responsive',
}) => {
  const handle = (product as any).handle
  const productVariant: any = product.variants[0]
  const price = getPrice(
    productVariant.priceV2.amount,
    productVariant.priceV2.currencyCode
  )
  
  const [loading, setLoading] = useState(false)
  const addItem = useAddItemToCart()
  
 
  const { openSidebar } = useUI()
  const variants = useMemo(
    () => prepareVariantsWithOptions(product?.variants),
    [product?.variants]
  )
  const [variant, setVariant] = useState(variants[0] || {})
  const addToCart = async () => {
    setLoading(true)
    try {
      await addItem(variant.id, 1)
      openSidebar()
      setLoading(false)
    } catch (err) {
      setLoading(false)
    }
  }

  return (
     <>
     <div className="col-12 col-sm-6 col-md-4 entry aos-item" data-aos="fade-in">
        <img src={product.images[0].src} alt={product.title+" Image"}></img>
        <div className='productTitle'><h3>{product.title}</h3></div>
        <button
        className="snipcart-add-item buy-button button"
        data-item-id={product.id}
        data-item-name={product.title}
        onClick={addToCart}>{"Add to Cart "+price }</button>
    
           
        </div>
      </>
  )
}

export default ProductCard
