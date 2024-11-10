// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Styles/Navbar.css';
import logo from './Assets/logo.png'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

// Import relevant icons from Material UI
import HomeIcon from '@mui/icons-material/Home';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import InfoIcon from '@mui/icons-material/Info';
import MenuIcon from '@mui/icons-material/Menu';


const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box
      sx={{
        width: 250,
        backgroundColor: '#282c34',  // Match background color of the page
        height: '100%',
        color: '#fff', // White text color
      }}
      role="presentation"
      onClick={toggleDrawer(false)}  // Close the drawer after clicking any item
    >
      <List>
        {/* Updated to use href for navigation */}
        <ListItem disablePadding>
          <ListItemButton component="a" href="/">
            <ListItemIcon sx={{ color: '#FFD700' }}>
              <HomeIcon /> {/* Home Icon */}
            </ListItemIcon>
            <ListItemText
              primary="Domů"
              sx={{ color: '#fff', fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold' }}
            />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component="a" href="/pricing">
            <ListItemIcon sx={{ color: '#FFD700' }}>
              <AttachMoneyIcon /> {/* Pricing Icon */}
            </ListItemIcon>
            <ListItemText
              primary="Ceny"
              sx={{ color: '#fff', fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold' }}
            />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component="a" href="/contact">
            <ListItemIcon sx={{ color: '#FFD700' }}>
              <ContactMailIcon /> {/* Contact Icon */}
            </ListItemIcon>
            <ListItemText
              primary="Kontakt"
              sx={{ color: '#fff', fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold' }}
            />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component="a" href="/about">
            <ListItemIcon sx={{ color: '#FFD700' }}>
              <InfoIcon /> {/* About Us Icon */}
            </ListItemIcon>
            <ListItemText
              primary="O nás"
              sx={{ color: '#fff', fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold' }}
            />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider sx={{ backgroundColor: '#FFD700' }} />  {/* Yellow divider for contrast */}
    </Box>
  );
  
  return (
    <div className="top-panel">
      <img className="logo" src={logo}></img>
        <nav className="navbar">
                {/* Drawer Button */}
      <div>
        <Drawer open={open} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>
        
        {/* Menu icon for smaller screens */}
        <MenuIcon onClick={toggleDrawer(true)} className="menu-icon" sx={{ cursor: 'pointer' }} />
      


      </div>
          <ul>
            <li><a href="/">O Nás</a></li>
            <li><a href="/dilna">Dílna</a></li>
            <li><a href="/projekty">Projekty</a></li>
            <li><a href="/kontakt">Kontakt</a></li>
            <li><a href="/en">🇬🇧</a></li>
          </ul>
        </nav>
      </div>
  );
};

export default Navbar;
