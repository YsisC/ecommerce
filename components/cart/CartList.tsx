import { FC, useContext } from 'react'
import { initialData } from '../../database/products';
import { Typography, CardActionArea, Grid, CardMedia, Box, Button } from '@mui/material';
import Link from '../../src/Link';
import { ItemCounter } from '../ui';
import { CartContext } from '@/context/cart';




interface Props {
  editable?: boolean;
}
export const CartList: FC<Props> = ({ editable = false }) => {
  const { cart } = useContext(CartContext)

  return (
    <>
      {
        cart.map(product => (
          <Grid container spacing={2} key={product.slug}>
            <Grid item xs={3}>
              <Link href="/product/slug">
                <CardActionArea>
                  <CardMedia
                    image={`/products/${product.image}`}
                    component='img'
                    sx={{ borderRadius: '5px' }} >

                  </CardMedia>
                </CardActionArea>
              </Link>
            </Grid>
            <Grid item xs={7}>
              <Box display='flex' flexDirection='column'>
                <Typography variant='body1'>{product.title}</Typography>
                <Typography variant='body1'>Talla:  <strong> M </strong></Typography>
                {
                  editable
                    ? (
                      <ItemCounter
                        currentValue={product.quantity}
                        maxValue={10}
                        updatedQuantity={() => { }}
                      />
                    )
                    : (
                      <Typography variant='h5'>{product.quantity} {product.quantity > 1 ? 'productos' : 'producto'}</Typography>
                    )
                }
              </Box>
            </Grid>
            <Grid item xs={2} display='flex' alignItems={'center'} flexDirection={'column'}>
              <Typography variant='subtitle1'>{`${product.price}`}</Typography>
              {
                editable && (
                  <Button variant='text' color='secondary'> Remover </Button>
                )

              }

            </Grid>
          </Grid>


        ))
      }

    </>
  )
}


