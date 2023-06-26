import Link from '../../src/Link';
import { ShopLayout } from '../../components/layouts';
import { Typography, Grid, Chip } from '@mui/material'
import { DataGrid, GridRowsProp, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import React from 'react'

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'fullname', headerName: 'Nombre completo', width: 300 },
    {
        field: 'paid',
        headerName: 'Pagada',
        description: 'Muestra si la orden esta pagada',
        width: 200,
        renderCell: (params: GridValueGetterParams<R, V, F>) => {
            return (
                params.row.paid
                    ? <Chip color='success' label='Pagada' variant='outlined'/>
                    : <Chip color='error' label='No pagada' variant='outlined'/>
             
            )
        }
    },
    {
        field: 'orden',
        headerName: 'Ver orden',
        width: 200,
        sortable: false,
        renderCell: (params: GridValueGetterParams) => {
            return (
              
                    <Link href={`/orders/${ params.row.id }`} underline='always'>
                        Ver orden
                    </Link>
              
            )
        }
    }
];

const rows: GridRowsProp = [
    { id: 1, paid: true, fullname: 'Fernando Herrera' },
    { id: 2, paid: true, fullname: 'Maria Herrera' },
    { id: 3, paid: false, fullname: 'Juan Herrera' },
    { id: 4, paid: true, fullname: 'Caro Herrera' },
    { id: 5, paid: true, fullname: 'Luis Herrera' },
    { id: 6, paid: false, fullname: 'Fernando Herrera' },
    { id: 7, paid: true, fullname: 'Fernando Herrera' },
    { id: 9, paid: true, fullname: 'Fernando Herrera' },
    { id: 10, paid: true, fullname: 'Fernando Herrera' },
    { id: 11, paid: true, fullname: 'Fernando Herrera' },
    { id: 12, paid: true, fullname: 'Fernando Herrera' },

];

const historyPage = () => {
    return (
        <ShopLayout title='Historial de ordenes' pageDescription='Historial de ordenes del cliente'>
            <Typography variant='h1' component={'h1'}> Historial de ordenes</Typography>
            <Grid container>
                <Grid item xs={12} sx={{ height: 650, width: '100%' }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        // pageSize={10}
                        pageSizeOptions={[10]} />
                </Grid>
            </Grid>
        </ShopLayout>
    )
}

export default historyPage