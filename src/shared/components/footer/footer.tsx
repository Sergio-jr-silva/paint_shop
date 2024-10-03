import React from 'react';
import { Box, Typography, Link, Container } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box 
      component="footer"
      sx={{
        width: '100%', 
        backgroundColor: '#000000',
        color: '#FFFFFF',
        padding: '20px 0',
        textAlign: 'center',
        borderTop: '2px solid #FFFFFF',
        mt: 4,
      }}
    >
      <Container maxWidth="lg" sx={{ padding: 0 }}>
        <Typography variant="body1">
          © 2024 Colaris Tintas - A marca número 1 do Brasil.
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Link href="#" color="inherit" underline="none" sx={{ margin: '0 10px' }}>
            Termos de Uso
          </Link>
          <Link href="#" color="inherit" underline="none" sx={{ margin: '0 10px' }}>
            Política de Privacidade
          </Link>
          <Link href="#" color="inherit" underline="none" sx={{ margin: '0 10px' }}>
            Contato
          </Link>
        </Box>
        <Typography variant="body2" sx={{ mt: 2 }}>
          Desenvolvido por Sérgio silva
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
