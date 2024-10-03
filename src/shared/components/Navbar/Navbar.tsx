    import { AppBar, IconButton, Toolbar, Typography, Box, Button, Select, MenuItem} from '@mui/material';
    import React from 'react';
    import FormatPaintIcon from '@mui/icons-material/FormatPaint';
    import { Link } from 'react-router-dom';

    const Navbar = () => {
    return (
    <AppBar  color='primary'>
     <Toolbar>
        <Typography variant='h5' component='div' fontWeight={900} font-family='Roboto' sx={{flexGrow:1}}>
            COLARIS
            <IconButton size='large' edge='start' color='inherit'>
                <FormatPaintIcon />
            </IconButton>
         </Typography>

    <Box>
        <Button color='inherit' >Home</Button>
        <Button color='inherit' component={Link} to={"/produtos"}>Produtos</Button>
        <Button color='inherit'>Marcas</Button>
        <Button color='inherit'>Sobre Nós</Button>
        <Button color='inherit'>Dicas</Button>
    </Box>
     </Toolbar>
    </AppBar>
    );
    };

    export default Navbar;