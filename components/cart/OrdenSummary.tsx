import { Grid, Typography } from '@mui/material'
import {FC} from 'react'

export const OrdenSummary = () => {
  return (
   <Grid container>
    <Grid item xs={6}>
        <Typography> No. Productos</Typography>
    </Grid>
    <Grid item xs={6} display='flex' justifyContent={'end'}>
        <Typography> 2 items </Typography>
    </Grid>
    <Grid item xs={6}>
        <Typography> SubTotal </Typography>
    </Grid>
    <Grid item xs={6} display='flex' justifyContent={'end'}>
        <Typography> { `$${150}`}</Typography>
    </Grid>
    <Grid item xs={6}>
        <Typography> Impuestos (15%) </Typography>
    </Grid>
    <Grid item xs={6} display='flex' justifyContent={'end'}>
        <Typography> { `$${18}`}</Typography>
    </Grid>
    <Grid item xs={6} sx={{mt: 2}}>
        <Typography variant='subtitle1'> Total: </Typography>
    </Grid>
    <Grid item xs={6} display='flex' justifyContent={'end'}  sx={{mt: 2}}>
        <Typography variant='subtitle1'> { `$${168}`}</Typography>
    </Grid>

   </Grid>
  )
}
