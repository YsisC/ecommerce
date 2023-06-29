import { Typography, Grid, CardContent, Divider, Button, Card, Box } from '@mui/material';
import { ShopLayout } from '../../components/layouts/ShopLayout';
import { CartList, OrdenSummary } from '../../components/cart'
import Link from '../../src/Link'

const SumarryPage = () => {
    return (
        <ShopLayout title='Resumen de orden' pageDescription='Resumen'>
            <Typography variant='h1' component='h1'> Resumen de la Orden </Typography>
            <Grid container>
                <Grid item xs={12} sm={7}>
                    <CartList />
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Card className='summary-card'>
                        <CardContent>
                            <Typography variant='h2'>Resumen (3 productos)</Typography>
                            <Divider sx={{ my: 1 }} />
                            <Box display='flex' justifyContent={'space-between'}>
                            <Typography variant='subtitle1'> Direccion de entrega</Typography>
                                <Link href='/checkout/address' underline='always'>
                                    Editar
                                </Link>
                            </Box>
                        
                            <Typography > Fernando </Typography>
                            <Typography > Algun lugar</Typography>
                            <Typography > Santiago</Typography>
                            <Typography > +56 235 </Typography>

                            <Divider sx={{ my: 1 }} />

                            <Box display='flex' justifyContent={'end'}>
                                <Link href='/cart' underline='always'>
                                    Editar
                                </Link>
                            </Box>
                            <OrdenSummary />
                            <Box sx={{ mt: 3 }}>
                                <Button color="secondary" className='circular-btn' fullWidth >
                                    Confirmar Orden
                                </Button>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

        </ShopLayout>
    )
}

export default SumarryPage;