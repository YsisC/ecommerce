import { FC } from 'react'
import { initialData } from '../../database/products';
import { Typography, CardActionArea, Grid, CardMedia, Box, Button } from '@mui/material';
import Link from '../../src/Link';
import { ItemCounter } from '../ui';


const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
]

interface Props {
  editable?: boolean;
}
export const CartList: FC<Props> = ({ editable = false }) => {


  return (
    <>
      {
        productsInCart.map(product => (
          <Grid container spacing={2} key={product.slug}>
            <Grid item xs={3}>
              <Link href="/product/slug">
                <CardActionArea>
                  <CardMedia
                    image={`/products/${product.images[0]}`}
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
                    ? <ItemCounter />
                    : <Typography variant='h5'>3 item</Typography>
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
