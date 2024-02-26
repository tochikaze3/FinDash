import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

const NavBar = () => {
  const handleBackButtonClick = () => {
    // Handle back button click logic here
    console.log('Back button clicked!');
  };

  const handleSearchIconClick = () => {
    // Handle search icon click logic here
    console.log('Search icon clicked!');
  };

  const handleButtonClick = () => {
    // Handle custom button click logic here
    console.log('Custom button clicked!');
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="back"
          onClick={handleBackButtonClick}
        >
          <ArrowBackIcon />
        </IconButton>
        <Button color="inherit" onClick={handleButtonClick}><Typography variant='subtitle2' sx={{color: "secondary.light"}}>Show Details</Typography></Button>
        <IconButton
          edge="end"
          color="inherit"
          aria-label="search"
          onClick={handleSearchIconClick}
        >
          <SearchIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
