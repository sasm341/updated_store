/** @jsxRuntime classic */
/** @jsx jsx */
import { Themed, jsx } from 'theme-ui'
import { Card, Text } from '@theme-ui/components'
import { Link, ImageCarousel,LoadingDots } from '@components/ui'
import { getPrice } from '@lib/shopify/storefront-data-hooks/src/utils/product'
import {useMemo, useState } from 'react'
import { Grid} from '@theme-ui/components'
import Button from '../../components_anatomy/Button'
import { useAddItemToCart } from '@lib/shopify/storefront-data-hooks'
import { useUI } from '@components/ui/context'
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
    <Card
      sx={{
        maxWidth: [700, imgWidth || 540],
        p: 3,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Link href={`/product/${handle}/`}>
        <div sx={{ flexGrow: 1 }}>
          <ImageCarousel
            currentSlide={product.images ? product.images.length - 1 : 0}
            width={imgWidth}
            height={imgHeight}
            priority={imgPriority}
            loading={imgLoading}
            layout={imgLayout}
            sizes={imgSizes}
            alt={product.title}
            images={
              product.images.length ? product.images : [{
                src: `https://via.placeholder.com/${imgWidth}x${imgHeight}`,
              }]
            }
          />
        </div>
        <div sx={{ textAlign: 'center' }}>
          <Themed.h2 sx={{ mt: 4, mb: 0, fontSize: 14 }}>
            {product.title}
          </Themed.h2>
          <Text sx={{ fontSize: 12, mb: 2 }}>{price}</Text>
        </div>
      </Link>
      <Button
            name="add-to-cart"
            disabled={loading}
            onClick={addToCart}
          >
            Add to Cart {loading && <LoadingDots />}
      </Button>
         
    </Card>
  )
}

export default ProductCard
