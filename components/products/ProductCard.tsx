import { FC, useState, useMemo } from 'react'
import { CardActionArea, Card, Grid, CardMedia, Typography, Box, Chip } from '@mui/material';
import { IProduct } from '../../interfaces';
import Link from '../../src/Link';



interface Props {
  product: IProduct;
}

export const ProductCard: FC<Props> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false)

  const productImage = useMemo(() => {
    return isHovered
      ? `/products/${product.images[1]}`
      : `/products/${product.images[0]}`

  }, [isHovered, product.images])

  return (
    <Grid item
      xs={6}
      sm={4}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card>
        <Link href={`/product/${product.slug}`} prefetch={false}>
          <CardActionArea>

            {
              (product.inStock === 0) && (
                <Chip
                  color="primary"
                  label="No hay disponibles"
                  sx={{ position: "absolute", zIndex: 99, top: '10px', left: '10px' }} />
              )
            }

            <CardMedia
              component='img'
              className='fadeIn'
              image={productImage}
              alt={product.title}
              onLoad={() => setIsImageLoaded(true)} />
          </CardActionArea>
        </Link >
      </Card>
      <Box sx={{ mt: 1, display: isImageLoaded ? 'block' : 'none' }} className="fadeIn">
        <Typography fontWeight={700}>{product.title}</Typography>
        <Typography fontWeight={700}> {`${product.price}`}</Typography>
      </Box>
    </Grid>
  )
}



