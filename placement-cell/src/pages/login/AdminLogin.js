import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import admin from '../imgs/admin.png';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar/AppBar';
import Toolbar from '@mui/material/Toolbar/Toolbar';

function AdminLogin() {

    const heading = {
        textAlign: 'center',
        margin: '20px 0',
    };

    const formStyles = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    };

    const inputStyles = {
        margin: '10px 0',
        width: '100%',
    };

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Placement Cell
                    </Typography>
                    <Button color="inherit" sx={{ mx: 1 }}>Login As</Button>
                    <Button color="inherit" sx={{ mx: 1 }}>Contact us</Button>
                    <Button color="inherit" sx={{ mx: 1 }}>About Us</Button>
                </Toolbar>
            </AppBar>
            <Grid container>
                {/* Left 60% - Image */}
                <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} item xs={8}>
                    <img src={admin} alt="Admin Image" style={{ width: '73%', height: '87%', alignItems: 'center' }} />
                </Grid>

                {/* Right 40% - Admin Input Area */}
                <Grid item xs={4} component={Paper} elevation={3}>
                    <div style={{ padding: '20px' }}>
                        <Typography sx={heading} variant="h4" gutterBottom>
                            Admin Login
                        </Typography>
                        {/* Admin login form */}
                        <form>
                            <TextField
                                label="Email"
                                id="email"
                                name="email"
                                type="email"
                                variant="outlined"
                                fullWidth
                                required
                                style={inputStyles}
                            />
                            <TextField
                                label="Password"
                                id="password"
                                name="password"
                                type="password"
                                variant="outlined"
                                fullWidth
                                required
                                style={inputStyles}
                            />
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px', padding: '10px' }}>
                                {/* Submit button */}
                                <Button type="submit" variant="contained" color="primary">
                                    Login
                                </Button>

                                {/* Forgot Password link */}
                                <a href="#" style={{ textDecoration: 'none', color: 'blue' }}>Forgot Password?</a>
                            </div>
                        </form>
                    </div>
                </Grid>
            </Grid>
        </>
    );
}

export default AdminLogin;