
import React from 'react';
import { List, ListItem, ListItemText, Box, Typography, TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import '../../../styles/StyleSidebar.css'
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {

  const menuItems = [ 
    { text: 'Home', path: '/' }, 
    { text: 'Lançamentos', path: '/' }, 
    { text: 'Promoções', path: '/' }, 
    { text: 'Iquine', path: '/' }, 
    { text: 'Suvinil', path: '/' }, 
    { text: 'Coral', path: '/' }
  
  ];

  return (
    <Box className="sidebar-container">
      <Typography variant="h6" className="sidebar-title">
        Colaris Tintas
      </Typography>

     
      <TextField
        variant="outlined"
        placeholder="Buscar..."
        className="search-bar"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />

    <List>
        {menuItems.map((item, index) => (
          <ListItem key={index} className="sidebar-item" component={Link} to={item.path} >
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
