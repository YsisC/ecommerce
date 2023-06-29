import { ShopLayout } from '@/components/layouts'
import { Typography, Grid, TextField, FormControl, Select, MenuItem, Box, Button } from '@mui/material'
import React from 'react'

const AddressPage = () => {
    return (
        <ShopLayout title='Direccion' pageDescription='Confirmar direccion del destino'>
            <Typography variant='h1' component='h1'> Dirección</Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <TextField label='Nombre' variant='filled' fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField label='Apellido' variant='filled' fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField label='Direccion' variant='filled' fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField label='Direccion 2 (opcional)' variant='filled' fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField label='Codigo postal' variant='filled' fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField label='Ciudad' variant='filled' fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                        <Select
                            variant='filled'
                            label='Pais'
                            value={1}
                        >
                            <MenuItem value={1}> Costa Rica</MenuItem>
                            <MenuItem value={2}> Chile</MenuItem>
                            <MenuItem value={3}> Peru </MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField label='Telefono' variant='filled' fullWidth />
                </Grid>

            </Grid>
            <Box sx={{mt: 5}} display='flex' justifyContent={'center'}>
                <Button color='secondary'> Revisar Pedido</Button>
            </Box>
        </ShopLayout>
    )
}

export default AddressPage