import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Placement Cell
        </Typography>
        <Button color="inherit">Contact us</Button>
        <Button color="inherit">About Us</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
