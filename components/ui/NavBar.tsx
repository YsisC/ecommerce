// import NextLink from 'next/link';
import Link from '../../src/Link'
import { AppBar, Badge, Box, Button, IconButton,  Toolbar} from '@mui/material';
import { SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import Typography from '@mui/material/Typography';
export const Navbar = () => {
  return (
    <AppBar>
        <Toolbar>
            {/* <NextLink href='/' passHref> */}
                <Link href='/' display='flex' alignItems='center'>
                    <Typography variant='h6'>Teslo |</Typography>
                    <Typography sx={{ ml: 0.5 }}>Shop</Typography>
                </Link>  
            {/* </NextLink> */}

            <Box flex={ 1 } />

            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                    <Link href='/category/men'>
                        <Button>Hombres</Button>
                    </Link>
                    <Link href='/category/women'>
                        <Button>Mujeres</Button>
                    </Link>
       
                    <Link  href='/category/kid'> 
                        <Button>Niños</Button>
                    </Link>
              
            </Box>


            <Box flex={ 1 } />

            <IconButton>
                <SearchOutlined />
            </IconButton>

                <Link href="/cart" >
                    <IconButton>
                        <Badge badgeContent={ 2 } color="secondary">
                            <ShoppingCartOutlined />
                        </Badge>
                    </IconButton>
                </Link>
         
            <Button>
                Menú
            </Button>

        </Toolbar>
    </AppBar>
  )
}
